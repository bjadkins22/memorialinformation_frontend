import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VerifyEmailAction } from "../../Redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { validations } from "../../utils";
import { Link } from "react-router-dom";
import swal from "sweetalert";
function VerifyEmail() {
  const dispatch = useDispatch();

  const { decodedID, tokenId } = useParams();
  const [render, setRerender] = useState(true);

  useEffect(() => {
    dispatch(VerifyEmailAction(decodedID, tokenId));
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
        icon: "/img/Memorial Information Logo.png",
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
        icon: "/img/Memorial Information Logo.png",
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
  return (
    <div>
      {" "}
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
                    Welcome to Memorial Information.
                    <br /> Your email has been confirmed.
                  </h1>
                  <form class="mt-6">
                    <Link to="/login">
                      <button
                        // onClick={(e) => validateSubmit(e)}
                        type="submit"
                        class="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                      >
                        Sign In
                      </button>
                    </Link>
                  </form>
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

export default VerifyEmail;
