import React, { useState, useEffect } from "react";
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
    // if (Object.values(tempErrors).filter((value) => value).length) {
    //   return;
    // }
    handleUpdateSubmit(); // Correctly called when conditions are met
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

  const Backbutoon = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="">
        <div className="min-w-screen min-h-screen bg-[#c99e59] flex items-center justify-center md:px-5 md:py-5">
          <div
            className="bg-white text-gray-500 shadow-xl w-full overflow-hidden"
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
              <div className="welcom-black bg-white w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="w-full h-100">
                  <div className="imageheader-contnet flex justify-center">
                    <img
                      className="memoriallogoinfo"
                      src="/img/Memorial 1.png"
                    />
                  </div>
                  <h1 className="text-center text-xl text-black md:text-2xl font-bold leading-tight md:mt-12 header-welcom-back">
                    Reset Password{" "}
                  </h1>
                  <form className="mt-6" onSubmit={validateSubmit}>
                    <div className="input-boxdiv">
                      <label className="block text-gray-700">
                        {" "}
                        New Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
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
                      <label className="block text-gray-700">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        onChange={(e) => {
                          setCnewPassword(e.target.value);
                          setErrors({ ...errors, cNewpassword: null });
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

                    <button
                      // onClick={(e) => validateSubmit(e)}
                      type="submit"
                      className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                    >
                      Reset Password
                    </button>
                  </form>
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
      </div>
    </div>
  );
}

export default ResetPassword;
