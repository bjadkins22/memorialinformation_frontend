import React from "react";
import { Link } from "react-router-dom";

const Partner_thankyou = () => {
  return (
    <div>
      <div className="">
        <div className="min-w-screen min-h-screen bg-[#c99e59] flex items-center justify-center md:px-5 md:py-5">
          <div
            className="relative bg-white text-gray-500 shadow-xl w-full overflow-hidden"
            style={{ maxWidth: "800px" }}
          >
            <div className="">
              <div className="welcom-black bg-white w-full py-10 px-5 md:px-10 ">
                <div className="w-full h-100">
                  <div className="imageheader-contnet flex justify-center">
                    <img
                      className="memoriallogoinfo"
                      src="/img/Memorial 1.png"
                    />
                  </div>
                  <h1 className="text-center text-xl text-black md:text-2xl font-bold leading-tight md:mt-12 header-welcom-back">
                    Thank you for registering yourself at The Memorial
                    Information. Please wait for admin approval after approval
                    you can login you account and grow your business.
                  </h1>
                </div>
                <Link to="/">
                  <button
                    type="submit"
                    className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg uppercase
          px-4 py-3 mt-6"
                  >
                    Back To home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner_thankyou;
