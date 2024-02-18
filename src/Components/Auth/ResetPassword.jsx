import React, { useState , useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SetForgotPasswordAction } from "../../Redux/actions/AuthAction";
import { validations } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

function ResetPassword() {
  const { token, uid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);
  const [oldpassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [cNewpassword, setCnewPassword] = useState();
  const [errors, setErrors] = useState({
    newPassword: "",
    cNewpassword: "",
  });
  const handleUpdateSubmit = async () => {
    // navigate("/dashboard");
    const formData = new FormData();
    formData.append("password", newPassword);
    formData.append("confirm_password", cNewpassword);
    formData.append("email", userData?.user?.email);

    try {
      await dispatch(SetForgotPasswordAction(formData, token, uid));

      swal("Success!", "Password set successful!");
      navigate("/");
    } catch (error) {
      swal("Error!", "Password set failed.", "error");
    }
  };
  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      newPassword: validations.password(newPassword),
      cNewpassword: validations.confirmPassword(cNewpassword),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleUpdateSubmit();
  };

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

  return (
    <div>
      <div className="">
        <div class="min-w-screen min-h-screen bg-[#c99e59] flex items-center justify-center md:px-5 md:py-5">
          <div
            class="bg-white text-gray-500 shadow-xl w-full overflow-hidden"
            style={{ maxWidth: "1600px" }}
          >
            <div class="md:flex w-full items-center">
              <div class="welcom-black bg-white w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="w-full h-100">
                  <div className="imageheader-contnet flex justify-center">
                    <img src="/img/Memorial Information Logo.png" />
                  </div>
                  <h1 class="text-center text-xl text-black md:text-2xl font-bold leading-tight md:mt-12 header-welcom-back">
                  Reset Password{" "}
                  </h1>
                  <form class="mt-6" onSubmit={validateSubmit}>
                    <div className="input-boxdiv">
                      <label class="block text-gray-700"> New Password</label>
                      <input
                        type="email"
                        placeholder="Enter Email Address"
                        class="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                          setErrors({ ...errors, newPassword: null });
                        }}
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

                    <div className="input-boxdiv mt-4">
                      <label class="block text-gray-700">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        onChange={(e) => {
                          setCnewPassword(e.target.value);
                          setErrors({ ...errors, cNewpassword: null });
                        }}
                        placeholder="Enter Password"
                        class="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
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

                    <div class="text-right mt-2">
                      <Link
                        to="/forget-password"
                        class="text-sm font-semibold text-blue-500 hover:text-blue-700 focus:text-blue-700"
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    <button
                      // onClick={(e) => validateSubmit(e)}
                      type="submit"
                      class="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                    >
                      Sign In
                    </button>
                  </form>

                  <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                      OR
                    </p>
                  </div>

                  <p class="mt-8 text-center">
                    Don't have an account?
                    <Link
                      to="/register"
                      class="text-blue-500 hover:text-blue-700 font-semibold ml-2"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
              <div class="hidden md:block w-1/2 bg-white py-10 px-10 loginImages">
                <img
                  src={imageUrl}
                  alt=""
                  style={{ height: "750px" }}
                  className="w-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
