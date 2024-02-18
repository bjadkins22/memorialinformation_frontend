import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Thank_you = () => {
  const navigate = useNavigate();

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
                    Thank you for registering yourself at The Memorial
                    Information. An email has been sent to your registered email
                    Id. Kindly verify the email to login and start using our
                    services
                  </h1>
                </div>
                <Link to="/login">
                  <button
                    type="submit"
                    className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                  >
                    Sign In
                  </button>
                </Link>
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
};

export default Thank_you;
