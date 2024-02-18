import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChangePasswordAction } from "../../Redux/actions/AuthAction";
import { validations } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import { Frontend_URL } from "../../environment";
import {
  LegacyListShowAction,
  UpadteLegacyPasswordAction,
} from "../../Redux/actions/LegacyAction";

function Update_Legacy_Password() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.authReducer);
  const { success, error } = useSelector(
    (state) => state.ChangePasswordReducer
  );

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const { LegacyListShow } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  const { success: suceessUpdatePassword, error: errorUpdatePassword } =
    useSelector((state) => state.UpadteLegacyPasswordReducer);

  const [oldpassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [cNewpassword, setCNewPassword] = useState();

  const [errors, setErrors] = useState({
    oldpassword: "",
    newPassword: "",
    cNewpassword: "",
  });

  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      oldpassword: validations.oldpassword(oldpassword),
      newPassword: validations.password(newPassword),
      cNewpassword: validations.confirmPassword(newPassword, cNewpassword),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleUpdateSubmit(e);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("old_code", oldpassword);
    formData.append("new_code", newPassword);
    dispatch(UpadteLegacyPasswordAction(LegacyListShow?.[0]?.id, formData));
    setRerender(true);
  };

  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (suceessUpdatePassword && rerender) {
      swal({
        title: " ",
        text: "Successfully Updated!",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/legacy");
    }
    if (errorUpdatePassword && rerender) {
      swal({
        title: "Error",
        text: errorUpdatePassword,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [suceessUpdatePassword, errorUpdatePassword, rerender]);

  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Update Legacy Password</h1>
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
                          <div class="absolute bg-gradient-to-b opacity-75 inset-0 z-0"></div>
                          <div class="grid grid-cols-2 gap-3 p-4">
                            <div class="flex justify-center self-center  z-10">
                              <div class="p-12 bg-white mx-auto rounded-2xl w-full">
                                <div class="mb-4">
                                  <h3 class="password-heading-contnet">
                                    Upadte password
                                  </h3>
                                </div>
                                <div class="space-y-5">
                                  <div class="common-updatepassword">
                                    <label class="password-labelenter text-sm font-medium text-gray-700 tracking-wide">
                                      Old Password
                                    </label>
                                    <input
                                      onChange={(e) => {
                                        setOldPassword(e.target.value);
                                        setErrors({
                                          ...errors,
                                          oldpassword: null,
                                        });
                                      }}
                                      class="password-auth-input w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                      type=""
                                      placeholder="Enter your password"
                                    />
                                    <span
                                      style={{
                                        color: "red",
                                        fontSize: "15px",
                                        opacity: errors.oldpassword ? 1 : 0,
                                      }}
                                    >
                                      {errors.oldpassword ?? "valid"}
                                    </span>
                                  </div>

                                  <div class="common-updatepassword">
                                    <label class="password-labelenter text-sm font-medium text-gray-700 tracking-wide">
                                      New Password
                                    </label>
                                    <input
                                      onChange={(e) => {
                                        setNewPassword(e.target.value);
                                        setErrors({
                                          ...errors,
                                          newPassword: null,
                                        });
                                      }}
                                      class="password-auth-input w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                      type=""
                                      placeholder="Enter your password"
                                    />
                                    <span
                                      style={{
                                        color: "red",
                                        fontSize: "15px",
                                        opacity: errors.newPassword ? 1 : 0,
                                      }}
                                    >
                                      {errors.newPassword ?? "valid"}
                                    </span>
                                  </div>

                                  <div class="common-updatepassword">
                                    <label class="password-labelenter text-sm font-medium text-gray-700 tracking-wide">
                                      Confirm Password
                                    </label>
                                    <input
                                      onChange={(e) => {
                                        setCNewPassword(e.target.value);
                                        setErrors({
                                          ...errors,
                                          cNewpassword: null,
                                        });
                                      }}
                                      class="password-auth-input w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                      type=""
                                      placeholder="Enter your password"
                                    />
                                    <span
                                      style={{
                                        color: "red",
                                        fontSize: "15px",
                                        opacity: errors.cNewpassword ? 1 : 0,
                                      }}
                                    >
                                      {errors.cNewpassword ?? "valid"}
                                    </span>
                                  </div>
                                  <div>
                                    <button
                                      onClick={validateSubmit}
                                      type="submit"
                                      class="password-submitclickbtn w-full flex justify-center  hover:bg-[#3f291d] text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                                <div class="pt-2 text-center text-gray-400 text-xs">
                                  <span>
                                    Copyright © 2022-20223{" "}
                                    <a
                                      href="https://codepen.io/uidesignhub"
                                      rel=""
                                      target="_blank"
                                      title="Ajimon"
                                      class="text-green hover:text-green-500 "
                                    ></a>
                                  </span>
                                </div>
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

export default Update_Legacy_Password;
