import React, { useState, useEffect } from "react";
import { RegisterAction } from "../../Redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validations } from "../../utils";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import LoaderSpinner from "../Loader/Loader-spinner";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    success,
    error,
    message,
    loading: registerLoading,
  } = useSelector((state) => state.RegisterReducer);

  const [rerender, setRerender] = useState(false);
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    cPassword: "",
    // accountType: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    cPassword: "",
    // accountType: "",
  });
  const handleStateChange = (e, fieldName) => {
    const { value } = e.target;

    setRegisterData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));

    setErrors(() => ({
      ...errors,
      [fieldName]: null,
    }));
  };

  const validateSubmit = (e) => {
    e?.preventDefault();

    const tempErrors = {
      firstName: validations.firstName(registerData.firstName),
      lastName: validations.lastName(registerData.lastName),
      email: validations.email(registerData.email),
      phoneNumber: validations.mobileNumber(registerData.phoneNumber),
      password: validations.password(registerData.password),
      cPassword: validations.confirmPassword(
        registerData.cPassword,
        registerData.password
      ),

      // accountType: validations.role(registerData.accountType),
    };

    setErrors(tempErrors);

    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleSubmitData();
  };

  const handleSubmitData = async (e) => {
    e?.preventDefault();

    const formData = new FormData();
    formData.append("first_name", registerData?.firstName);
    formData.append("last_name", registerData?.lastName);
    formData.append("email", registerData?.email);
    formData.append("phone_number", registerData?.phoneNumber);
    formData.append("password", registerData?.password);
    formData.append("confirm_password", registerData?.cPassword);
    formData.append("account_type", 1);

    dispatch(RegisterAction(formData));

    setRerender(true);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: " ",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/thank-you");
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [success, error, rerender]);

  const [imageUrl, setImageUrl] = useState("https://picsum.photos/800/600");
  const imageList = [
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/601",
    "https://picsum.photos/800/602",
    "https://source.unsplash.com/random",
    // Add more image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imageList.length);
      const newImageUrl = imageList[randomIndex];
      setImageUrl(newImageUrl);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageUrl]);

  const Backbutoon = () => {
    navigate(-1);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading || registerLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <div className="min-w-screen min-h-screen bg-[#c99e59] flex items-center justify-center md:px-5 md:py-5">
            <div
              className="relative bg-white text-gray-500 shadow-xl w-full overflow-hidden"
              style={{ maxWidth: "1600px" }}
            >
              <div className="xmarkicon svg-buttonback">
                <svg
                  onClick={Backbutoon}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="md:flex w-full items-center">
                <div className="welcom-black bg-white w-full md:w-1/2 md:px-10 md:py-10">
                  <div className="w-full h-100">
                    <div className="imageheader-contnet flex justify-center items-center">
                      <div>
                        <img
                          className="memoriallogoinfo"
                          src="/img/Memorial 1.png"
                        />
                      </div>
                    </div>
                    <h1 className="text-center text-xl text-black md:text-2xl font-bold leading-tight md:mt-4 header-welcom-back">
                      Register your account
                    </h1>
                    <form onSubmit={validateSubmit} className="mt-6">
                      <div className="grid sm:grid-cols-2 gap-4 xs:grid-cols-1">
                        <div className="input-boxdiv">
                          <label className="block text-grey-700">
                            First Name
                          </label>
                          <input
                            type="text"
                            placeholder="First Name"
                            onChange={(e) => handleStateChange(e, "firstName")}
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          <span
                            style={{
                              color: "red",
                              fontSize: "15px",
                              opacity: errors.firstName ? 1 : 0,
                            }}
                          >
                            {errors.firstName ?? "valid"}
                          </span>
                        </div>
                        <div className="input-boxdiv ">
                          <label className="block text-grey-700">
                            Last Name
                          </label>
                          <input
                            onChange={(e) => handleStateChange(e, "lastName")}
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          <span
                            style={{
                              color: "red",
                              fontSize: "15px",
                              opacity: errors.lastName ? 1 : 0,
                            }}
                          >
                            {errors.lastName ?? "valid"}
                          </span>
                        </div>
                        <div className="input-boxdiv mt-2">
                          <label className="block text-gray-700">
                            Email Address
                          </label>
                          <input
                            onChange={(e) => handleStateChange(e, "email")}
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          <span
                            style={{
                              color: "red",
                              fontSize: "15px",
                              opacity: errors.email ? 1 : 0,
                            }}
                          >
                            {errors.email ?? "valid"}
                          </span>
                        </div>
                        <div className="input-boxdiv mt-2">
                          <label className="block text-grey-700">
                            Phone Number
                          </label>
                          <input
                            onChange={(e) =>
                              handleStateChange(e, "phoneNumber")
                            }
                            type="text"
                            placeholder="Enter Phone number"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          <span
                            style={{
                              color: "red",
                              fontSize: "15px",
                              opacity: errors.phoneNumber ? 1 : 0,
                            }}
                          >
                            {errors.phoneNumber ?? "valid"}
                          </span>
                        </div>

                        <div className="input-boxdiv mt-2">
                          <label className="block text-gray-700">
                            Password
                          </label>
                          <input
                            onChange={(e) => handleStateChange(e, "password")}
                            type="password"
                            placeholder="Enter Password"
                            minlength="6"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          <span
                            style={{
                              color: "red",
                              fontSize: "15px",
                              opacity: errors.password ? 1 : 0,
                            }}
                          >
                            {errors.password ?? "valid"}
                          </span>
                        </div>

                        <div className="input-boxdiv mt-2">
                          <label className="block text-gray-700">
                            Confirm Password
                          </label>
                          <input
                            value={registerData?.cPassword}
                            onChange={(e) => handleStateChange(e, "cPassword")}
                            type="password"
                            placeholder="Confirm Password"
                            minlength="6"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          <span
                            style={{
                              color: "red",
                              fontSize: "15px",
                              opacity: errors.cPassword ? 1 : 0,
                            }}
                          >
                            {errors.cPassword ?? "valid"}
                          </span>
                        </div>

                        {/* <div className="input-boxdiv mt-2 mb-4">
                        <label className="block text-gray-700">User Role</label>
                        <select
                          value={registerData?.accountType}
                          onChange={(e) => handleStateChange(e, "accountType")}
                          minlength="6"
                          className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                        >
                          <option selected>Select user role</option>
                          <option value="0">Admin</option>
                          <option value="1">Family</option>
                          <option value="2">Public</option>
                        </select>
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            opacity: errors.accountType ? 1 : 0,
                          }}
                        >
                          {errors.accountType ?? "valid"}
                        </span>
                      </div> */}
                      </div>

                      <button
                        type="submit"
                        className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
                      px-4 py-3 mt-6"
                      >
                        Sign Up
                      </button>
                    </form>

                    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                      <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                      </p>
                    </div>

                    <p className="mt-4 text-center">
                      Already have an account?
                      <Link
                        to="/login"
                        className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
                      >
                        Sign in
                      </Link>
                    </p>
                    <p className="mt-2 text-center">
                      Beacme a Partner
                      <Link
                        to="/Partner/register"
                        className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
                      >
                        Join Us
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2 bg-white py-10 px-10 loginImages">
                  <img
                    src="/img/church.jpg"
                    alt=""
                    style={{ height: "750px" }}
                    className="w-full object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Register;
