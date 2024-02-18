import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VerifyEmailAction } from "../../Redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { validations } from "../../utils";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { screen } from "@testing-library/react";
function VerifyEmail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { decodedID, tokenId } = useParams();
  const [render, setRerender] = useState(true);

  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(VerifyEmailAction(decodedID, tokenId));
    }
    setRerender(true);
  }, []);

  const { success, error, message } = useSelector(
    (state) => state.VerifyEmailReducer
  );

  useEffect(() => {
    if (success && render) {
      swal({
        title: " Complete",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
    }

    if (error && render) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
    }
  }, [success, error]);

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

  return (
    <div>
      {" "}
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
                  <h1 className="text-center text-xl text-black md:text-2xl font-bold leading-tight md:mt-12 header-welcom-back">
                    Welcome to Memorial Information.
                    <br /> Your email has been confirmed.
                  </h1>
                  <form className="mt-6">
                    <Link to="/login">
                      <button
                        // onClick={(e) => validateSubmit(e)}
                        type="submit"
                        className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                      >
                        Sign In
                      </button>
                    </Link>
                  </form>
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
    </div>
  );
}

export default VerifyEmail;
