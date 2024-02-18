import React from "react";
import { Frontend_URL } from "../../environment";

const Services = () => {
  return (
    <div>
      <div className="main-about-page">
        <div className="about-fixedimage">
          <div
            className="main-containerabout"
            style={{
              backgroundImage: `url(${Frontend_URL}img/rpa-concept-with-blurry-hand-touching-screen.jpg)`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="bgimage-contnet">
              <div className="container p-3  mx-auto ">
                <div className="toptextabout">
                  <div className="image-textcontnet">
                    <div className="center-sectioncontnet">
                      <p className="merorialtext">Memorial Information</p>
                      <h1 className="letus-text-contnet text-white">
                        <span className="land-text-contnet">Services</span>
                      </h1>
                      <p className="funeral-contnet mt-4">
                        Homepage / Services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-3 mx-auto ">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12">
              <div className="image-box">
                <div className="react-images">
                  <img src="/img/close-up-person-working-call-center.jpg" />
                </div>
                <div className="main-graybox">
                  <div className="contnet-divbox">
                    <h1 className="funeral-text">
                      Funeral Your Way is a licensed California
                    </h1>
                  </div>
                </div>
              </div>
              <div className="image-box">
                <div className="react-images">
                  <img src="/img/human-resources-concept-with-hand (1).jpg" />
                </div>
                <div className="main-graybox">
                  <div className="contnet-divbox">
                    <h1 className="funeral-text">
                      One contact point for Cremation
                    </h1>
                  </div>
                </div>
              </div>
              <div className="image-box">
                <div className="react-images">
                  <img src="/img/human-resources-concept-with-hand.jpg" />
                </div>
                <div className="main-graybox">
                  <div className="contnet-divbox">
                    <h1 className="funeral-text">Permanent Memorialization</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12">
              <div className="image-box">
                <div className="react-images">
                  <img src="/img/close-up-person-working-call-center.jpg" />
                </div>
                <div className="main-graybox">
                  <div className="contnet-divbox">
                    <h1 className="funeral-text">
                      Funeral Your Way is a licensed California
                    </h1>
                  </div>
                </div>
              </div>
              <div className="image-box">
                <div className="react-images">
                  <img src="/img/human-resources-concept-with-hand (1).jpg" />
                </div>
                <div className="main-graybox">
                  <div className="contnet-divbox">
                    <h1 className="funeral-text">
                      One contact point for Cremation
                    </h1>
                  </div>
                </div>
              </div>
              <div className="image-box">
                <div className="react-images">
                  <img src="/img/human-resources-concept-with-hand.jpg" />
                </div>
                <div className="main-graybox">
                  <div className="contnet-divbox">
                    <h1 className="funeral-text">Permanent Memorialization</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
