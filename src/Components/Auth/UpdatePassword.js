import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChangePasswordAction } from "../../Redux/actions/AuthAction";
import { validations } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

function UpdatePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.authReducer);
  const { success, error } = useSelector(
    (state) => state.ChangePasswordReducer
  );

  const [oldpassword, setOldPassword] = useState();
  const [render, setRender] = useState(false);
  const [newPassword, setNewPassword] = useState();
  const [cNewpassword, setCnewPassword] = useState();
  const [errors, setErrors] = useState({
    oldpassword: "",
    newPassword: "",
    cNewpassword: "",
  });
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("password", newPassword);
    formData.append("current_password", oldpassword);
    formData.append("confirm_password", cNewpassword);
    formData.append("email", userData?.user?.email);

    dispatch(ChangePasswordAction(formData));
    setRender(true);
  };
  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      oldpassword: validations.oldpassword(oldpassword),
      newPassword: validations.password(newPassword),
      cNewpassword: validations.confirmPassword(cNewpassword),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleUpdateSubmit(e);
  };

  useEffect(() => {
    if (success && error) {
      swal({
        title: "",
        text: "Password Upadte Successfully!",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
        open: true,
      });
      navigate("/");
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
  }, [success, error]);

  const [imageUrl, setImageUrl] = useState("https://picsum.photos/800/600");
  const imageList = [
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/601",
    "https://picsum.photos/800/602",
    "https://source.unsplash.com/random",
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
      {" "}
      <div className="">
        <div className="min-w-screen min-h-screen bg-[#c99e59] flex items-center justify-center md:px-5 md:py-5">
          <div
            className="bg-white text-gray-500 shadow-xl w-full overflow-hidden"
            style={{ maxWidth: "1600px" }}
          >
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
                    Update Your Password
                  </h1>
                  <form className="mt-6" onSubmit={validateSubmit}>
                    <div className="input-boxdiv">
                      <label className="block text-gray-700">
                        Old Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Old Password"
                        className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                        onChange={(e) => {
                          setOldPassword(e.target.value);
                          setErrors({ ...errors, oldpassword: null });
                        }}
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

                    <div className="input-boxdiv mt-4">
                      <label className="block text-gray-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                          setErrors({ ...errors, newPassword: null });
                        }}
                        placeholder="Enter Password"
                        className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
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
                          opacity: errors.cNewpassword ? 1 : 0,
                        }}
                      >
                        {errors.cNewpassword ?? "valid"}
                      </span>
                    </div>
                    <button
                      // onClick={(e) => validateSubmit(e)}
                      type="submit"
                      className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                    >
                      Save
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

export default UpdatePassword;
