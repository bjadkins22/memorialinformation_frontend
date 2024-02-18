import React, { useState, useEffect } from "react";
import { RegisterAction } from "../../Redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validations } from "../../utils";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import LoaderSpinner from "../Loader/Loader-spinner";
import { PartnerAddUserAction } from "../../Redux/actions/PartnerAction";

function Partner_add_User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    success,
    error,
    message,
    loading: registerLoading,
  } = useSelector((state) => state.PartnerAddUserReducer);

  const { userData } = useSelector((state) => state.authReducer);

  const [rerender, setRerender] = useState(false);
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    cPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    cPassword: "",
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
    formData.append("added_by_user", userData?.user?.user_id);

    dispatch(PartnerAddUserAction(formData));

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
      setRegisterData({});

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {registerLoading ? (
        <LoaderSpinner />
      ) : (
        <div className="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">User Add</h1>
            <div className="common-divbg bg-white">
              <div className="events-div my-12 ">
                <h1 className="registerheadinguserpartner">
                  Register Your User's Account
                </h1>
                <form onSubmit={validateSubmit} className="mt-6">
                  <div className="grid sm:grid-cols-2 gap-4 xs:grid-cols-1">
                    <div className="input-boxdiv useradd">
                      <label className="heading-title my-2">First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => handleStateChange(e, "firstName")}
                        className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                      />
                      <span
                        style={{
                          color: "red",
                          margin: "0px 5px",
                          fontFamily: "Montserrat",
                          opacity: errors.firstName ? 1 : 0,
                        }}
                      >
                        {errors.firstName ?? "valid"}
                      </span>
                    </div>
                    <div className="input-boxdiv useradd ">
                      <label className="heading-title my-2">Last Name</label>
                      <input
                        onChange={(e) => handleStateChange(e, "lastName")}
                        type="text"
                        placeholder="Last Name"
                        className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                      />
                      <span
                        style={{
                          color: "red",

                          fontFamily: "Montserrat",
                          opacity: errors.lastName ? 1 : 0,
                        }}
                      >
                        {errors.lastName ?? "valid"}
                      </span>
                    </div>
                    <div className="input-boxdiv useradd mt-2">
                      <label className="heading-title my-2">
                        Email Address
                      </label>
                      <input
                        onChange={(e) => handleStateChange(e, "email")}
                        type="email"
                        placeholder="Enter Email Address"
                        className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                      />
                      <span
                        style={{
                          color: "red",

                          fontFamily: "Montserrat",
                          opacity: errors.email ? 1 : 0,
                        }}
                      >
                        {errors.email ?? "valid"}
                      </span>
                    </div>
                    <div className="input-boxdiv useradd mt-2">
                      <label className="heading-title my-2">Phone Number</label>
                      <input
                        onChange={(e) => handleStateChange(e, "phoneNumber")}
                        type="text"
                        placeholder="Enter Phone number"
                        className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                      />
                      <span
                        style={{
                          color: "red",

                          fontFamily: "Montserrat",
                          opacity: errors.phoneNumber ? 1 : 0,
                        }}
                      >
                        {errors.phoneNumber ?? "valid"}
                      </span>
                    </div>

                    <div className="input-boxdiv useradd mt-2">
                      <label className="heading-title my-2">Password</label>
                      <input
                        onChange={(e) => handleStateChange(e, "password")}
                        type="password"
                        placeholder="Enter Password"
                        minlength="6"
                        className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                      />
                      <span
                        style={{
                          color: "red",

                          fontFamily: "Montserrat",
                          opacity: errors.password ? 1 : 0,
                        }}
                      >
                        {errors.password ?? "valid"}
                      </span>
                    </div>

                    <div className="input-boxdiv useradd mt-2">
                      <label className="heading-title my-2">
                        Confirm Password
                      </label>
                      <input
                        value={registerData?.cPassword}
                        onChange={(e) => handleStateChange(e, "cPassword")}
                        type="password"
                        placeholder="Confirm Password"
                        minlength="6"
                        className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                      />
                      <span
                        style={{
                          color: "red",

                          fontFamily: "Montserrat",
                          opacity: errors.cPassword ? 1 : 0,
                        }}
                      >
                        {errors.cPassword ?? "valid"}
                      </span>
                    </div>
                  </div>

                  <div className="input-add">
                    <div className="flex gap-4 mt-12 mb-12">
                      <button
                        type="submit"
                        className="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200  "
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Partner_add_User;
