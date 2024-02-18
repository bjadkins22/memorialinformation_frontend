import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../../Redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { validations } from "../../utils";
import { SubscriptionCheckAction } from "../../Redux/actions/paymentAction";
import LoaderSpinner from "../Loader/Loader-spinner";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, userData } = useSelector((state) => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account_type, setaccount_type] = useState("");

  const [render, setRender] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    dispatch(SubscriptionCheckAction());
  }, [userData]);
  const handleLogIn = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("account_type", account_type);

    dispatch(LoginAction(formData));
    setRender(true);
  };
  const validateSubmit = (e) => {
    e.preventDefault();

    const tempErrors = {
      email: validations.email(email),
      password: validations.password(password),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleLogIn();
  };

  const Backbutoon = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   if (userData) {
  //     swal({
  //       title: "",
  //       text: "Login Successfully!",
  //       className: "successAlert",
  //       icon: "/img/Memorial icon.png",
  //       buttons: false,
  //       timer: 3000,
  //       open: true,
  //     });
  //     navigate("/dashboard");
  //   }
  //   if (error && render) {
  //     swal({
  //       title: "Error",
  //       text: error,
  //       className: "errorAlert",
  //       icon: "/img/Memorial icon.png",
  //       buttons: false,
  //       timer: 3000,
  //     });
  //     setRender(false);
  //   }
  // }, [userData, error]);

  useEffect(() => {
    if (userData && render) {
      swal({
        title: "",
        text: "Successfully login",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
        open: true,
      });
      setRender(false);

      navigate("/dashboard");
    }

    if (error && render) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
      });
      setRender(false);
    }
  }, [dispatch, userData, error]);

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {" "}
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="">
          <div className="min-w-screen min-h-screen bg-[#c99e59] flex items-center justify-center md:px-5 md:py-5">
            <div
              className="relative bg-white text-gray-500 shadow-xl w-full overflow-hidden"
              style={{ maxWidth: "1600px" }}
            >
              <div className="xmarkicon">
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
                <div className="welcom-black bg-white w-full md:w-1/2 py-10 px-5 md:px-10">
                  <div className="w-full h-100">
                    <div className="imageheader-contnet flex justify-center">
                      <img
                        className="memoriallogoinfo"
                        src="/img/Memorial 1.png"
                      />
                    </div>
                    <div className="flex justify-content-between items-center md:mt-12">
                      <h1 className="text-center text-xl text-black md:text-2xl font-bold leading-tight  header-welcom-back">
                        Sign in to your account
                      </h1>
                      <div class="sortBy">
                        <select
                          value={account_type}
                          onChange={(e) => {
                            setaccount_type(e.target.value);
                          }}
                          class="sortbb"
                        >
                          <option value="">Login as:</option>
                          <option value={0}>Super Admin</option>
                          <option value={4}>Admin</option>
                          <option value={2}>Partner</option>
                          <option value={3}>Vendor</option>
                          <option value={1}>User</option>
                        </select>
                      </div>
                    </div>
                    <form className="mt-6" onSubmit={validateSubmit}>
                      <div className="input-boxdiv">
                        <label className="block text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter Email Address"
                          className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          onChange={(e) => {
                            setErrors({ ...errors, email: null });
                            setEmail(e.target.value);
                          }}
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

                      <div className="input-boxdiv mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                          type="password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setErrors({ ...errors, password: null });
                          }}
                          placeholder="Enter Password"
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

                      <div className="text-right mt-2">
                        <Link
                          to="/forget-password"
                          className="text-sm font-semibold text-blue-500 hover:text-blue-700 focus:text-blue-700"
                        >
                          Forgot Password?
                        </Link>
                      </div>

                      <button
                        // onClick={(e) => validateSubmit(e)}
                        type="submit"
                        className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                      >
                        Sign In
                      </button>
                    </form>

                    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                      <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                      </p>
                    </div>

                    <p className="mt-8 text-center">
                      Don't have an account?
                      <Link
                        to="/register"
                        className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2 bg-white py-12 px-10 loginImages">
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
        </div>
      )}
    </div>
  );
}

export default Login;
