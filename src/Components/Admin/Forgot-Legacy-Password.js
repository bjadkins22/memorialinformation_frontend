import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChangePasswordAction } from "../../Redux/actions/AuthAction";
import { validations } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import OtpInput from "react-otp-input";
import { Frontend_URL } from "../../environment";
import {
  LegacyListShowAction,
  ResetLegacyPasswordAction,
  forgotLegacyPasswordAction,
} from "../../Redux/actions/LegacyAction";

function Forgot_Legacy_Password() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const { LegacyListShow } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  const renderInput = (inputProps) => <input {...inputProps} />;
  const [otp, setOtp] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const [render, setRender] = useState(false);

  const [email, setemail] = useState("");

  const [errors, setErrors] = useState({
    email: "",
  });

  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      email: validations.email(email),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleForgotLegacypassword(e);
  };

  const handleForgotLegacypassword = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("legacy_page_id", LegacyListShow?.[0]?.id);

    dispatch(forgotLegacyPasswordAction(formData));
    setRender(true);
  };

  const [new_code, setRew_code] = useState();

  const SubmitResetPassword = () => {
    const formData = new FormData();
    formData.append("otp", otp);
    formData.append("new_code", new_code);
    formData.append("legacy_page_id", LegacyListShow?.[0]?.id);

    dispatch(ResetLegacyPasswordAction(formData));
    setResetPasswordRender(true);
  };

  const {
    success: successForgot,
    error: errorForgot,
    message,
    loading: forgotLoading,
  } = useSelector((state) => state.forgotLegacyPasswordReducer);

  useEffect(() => {
    if (successForgot && render) {
      swal({
        title: "",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
        open: true,
      });
      setRender(false);
      handleNext();
    }
    if (errorForgot && render) {
      swal({
        title: "Error",
        text: errorForgot,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
      });
      setRender(false);
    }
  }, [successForgot, errorForgot]);

  // Reset password

  const [ResetPasswordReducer, setResetPasswordRender] = useState(false);

  const {
    success: successResetpassword,
    error: errorResetpassword,
    message: ResetPasswordMessage,
  } = useSelector((state) => state.ResetLegacyPasswordReducer);

  useEffect(() => {
    if (successResetpassword && ResetPasswordReducer) {
      swal({
        title: "",
        text: ResetPasswordMessage,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
        open: true,
      });
      setResetPasswordRender(false);
      navigate("/legacy");
    }
    if (errorResetpassword && ResetPasswordReducer) {
      swal({
        title: "Error",
        text: errorResetpassword,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
      });
      setResetPasswordRender(false);
    }
  }, [successResetpassword, errorResetpassword]);


  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Forgot Legacy Password</h1>
            <div className="bg-white">
              <div className="Topallpage AllPageHight Custompage">
                <>
                  <div className="">
                    <>
                      <div>
                        <div
                          class="bg-no-repeat bg-cover bg-center relative"
                          style={{
                            backgroundImage: `url(${Frontend_URL}img/beautiful-church-.jpg)`,
                          }}
                        >
                          <div class="grid grid-cols-2 gap-3 p-4">
                            <div class="">
                              <div className="">
                                {currentStep === 1 ? (
                                  <>
                                    <div class="p-12 bg-white mx-auto rounded-2xl w-full">
                                      <div class="mb-4">
                                        <h3 class="password-heading-contnet">
                                          Enter A Email
                                        </h3>
                                      </div>
                                      <div class="space-y-5">
                                        <div class="common-updatepassword">
                                          <label class="password-labelenter text-sm font-medium text-gray-700 tracking-wide">
                                            Email
                                          </label>
                                          <input
                                            value={email}
                                            onChange={(e) => {
                                              setemail(e.target.value);
                                            }}
                                            class="password-auth-input w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type=""
                                            placeholder="Enter your email"
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
                                        {forgotLoading ? (
                                          <>
                                            {/* <button
                                              disabled
                                              type="button"
                                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                                            >
                                             
                                            </button> */}

                                            <button
                                              type="submit"
                                              class="password-submitclickbtn w-full flex justify-center  hover:bg-[#3f291d] text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                            >
                                              <svg
                                                aria-hidden="true"
                                                role="status"
                                                class="inline w-4 h-4 mr-3 text-white animate-spin"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                  fill="#E5E7EB"
                                                />
                                                <path
                                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                  fill="currentColor"
                                                />
                                              </svg>
                                              Please wait...
                                            </button>
                                          </>
                                        ) : (
                                          <>
                                            <div>
                                              <button
                                                onClick={validateSubmit}
                                                type="submit"
                                                class="password-submitclickbtn w-full flex justify-center  hover:bg-[#3f291d] text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                              >
                                                Submit
                                              </button>
                                            </div>
                                          </>
                                        )}
                                      </div>
                                      <div class="pt-2 text-center text-gray-400 text-xs">
                                        <span>
                                          Copyright © 2022-20223{" "}
                                          <a
                                            // href="https://codepen.io/uidesignhub"
                                            rel=""
                                            target="_blank"
                                            title="Ajimon"
                                            class="text-green hover:text-green-500 "
                                          ></a>
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div class="p-12 bg-white mx-auto rounded-2xl w-full">
                                      <div class="mb-4">
                                        <h3 class="password-heading-contnet">
                                          Enter A OTP
                                        </h3>
                                      </div>
                                      <div class="space-y-5">
                                        <div class="space-y-2">
                                          <label class="password-labelenter text-sm font-medium text-gray-700 tracking-wide">
                                            Otp
                                          </label>
                                          <div className="codenumber">
                                            <OtpInput
                                              className="get-otpfunc"
                                              value={otp}
                                              onChange={handleOtpChange}
                                              numInputs={6}
                                              separator={<span>-</span>}
                                              isInputNum
                                              renderInput={renderInput} // Pass the renderInput function
                                            />
                                          </div>
                                          <div class="common-updatepassword mt-12">
                                            <label class="password-labelenter text-sm font-medium text-gray-700 tracking-wide">
                                              Set New Password
                                            </label>
                                            <input
                                              onChange={(e) => {
                                                setRew_code(e.target.value);
                                              }}
                                              class="password-auth-input w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                              type=""
                                              placeholder="Enter new password"
                                            />
                                          </div>
                                        </div>
                                        <div class="flex items-center justify-between"></div>
                                        <div>
                                          <button
                                            onClick={SubmitResetPassword}
                                            type="submit"
                                            class="password-submitclickbtn w-full flex justify-center  hover:bg-[#3f291d] text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                          >
                                            Submit
                                          </button>
                                        </div>
                                      </div>
                                      <div class="pt-2 text-center text-gray-400 text-xs">
                                        <span>
                                          Copyright © 2022-20223
                                          <a
                                            // href="https://codepen.io/uidesignhub"
                                            rel=""
                                            target="_blank"
                                            title="Ajimon"
                                            class="text-green hover:text-green-500 "
                                          ></a>
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                            <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                              <div class="self-start hidden lg:flex flex-col  text-white">
                                <img src="" class="mb-3" />
                                <h1 class="mb-3 font-bold text-5xl">
                                  Hi ? Welcome Back Aji{" "}
                                </h1>
                                <p class="pr-3">
                                  Lorem ipsum is placeholder text commonly used
                                  in the graphic, print, and publishing
                                  industries for previewing layouts and visual
                                  mockups
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot_Legacy_Password;
