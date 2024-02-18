import React from "react";
import { Frontend_URL } from "../../environment";

const Testimonial = () => {
  return (
    <>
      <div className="main-testmonials">
        <div className="container mx-auto ">
          <section className="text-gray-600 body-font">
            <div className="container py-6 md:py-24  md:py-24 mx-auto">
              <div className="main-divtesto">
                <div className="main-testhideediv">
                  <div className=" text-center">
                    <div>
                      <p className="merorialtextinfo">Memorial Information</p>
                      <h1 className="diffrence-contnet">
                        <span className="exp-contnet">What</span> People Say
                      </h1>
                    </div>
                    <div className="py-8 ">
                      <i className="fa fa-quote-left text-[#c99e59] text-3xl "></i>
                    </div>
                    <p className="established sty-contnet">
                      I lost my father two weeks ago. With a feeling of loss, I
                      was confused and didn’t know what to do. I can’t even
                      imagine how I would have coped without Memorial
                      Information. They organized a traditional funeral ceremony
                      at a high level.
                    </p>
                    <div className="my-6">
                      <h2 className="username-testo">Kate Millar</h2>
                      <p className="client-contnet">Client</p>
                    </div>

                    <div className="dummy-image flex gap-4 mt-6">
                      <img
                        alt="testimonial"
                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                        src="/img/Ellipse 1.png"
                      />
                      <img
                        alt="testimonial"
                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                        src="/img/Ellipse 2.png"
                      />
                      <img
                        alt="testimonial"
                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                        src="/img/Ellipse 3.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="main-productsdiv  bg-[#F7F6F3] ">
          <div className="container py-6 md:py-24  md:py-24 mx-auto">
            <div className="product-spcl">
              <div className="flex justify-center text-center">
                <div>
                  <p className="merorialtextinfo">Memorial Information</p>
                  <h1 className="diffrence-contnet">
                    <span className="exp-contnet">What</span> People Say
                  </h1>
                </div>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-6 mt-12">
                <div>
                  <div className="card-nameimage">
                    <img src="/img/image 2.png" />
                  </div>
                  <div className="my-4 text-center">
                    <h2 className="username-testo">Rachel Winson</h2>
                    <p className="client-contnet1 mt-2">Manager</p>
                  </div>
                </div>
                <div>
                  <div className="card-nameimage">
                    <img src="/img/image 2 (1).png" />
                  </div>
                  <div className="my-4 text-center">
                    <h2 className="username-testo">Andrew Larsen</h2>
                    <p className="client-contnet1 mt-2">Director</p>
                  </div>
                </div>
                <div>
                  <div className="card-nameimage">
                    <img src="/img/image 2 (2).png" />
                  </div>
                  <div className="my-4 text-center">
                    <h2 className="username-testo">Sally Roberts</h2>
                    <p className="client-contnet1 mt-2">C.E.O</p>
                  </div>
                </div>
                <div>
                  <div className="card-nameimage">
                    <img src="/img/image 2 (3).png" />
                  </div>
                  <div className="my-4 text-center">
                    <h2 className="username-testo">Steven Jason</h2>
                    <p className="client-contnet1 mt-2">Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="main-roseimage"
          style={{
            backgroundImage: `url(${Frontend_URL}img/rosebg.png)`,
          }}
        >
          <div className="bgimage-contnet">
            <div className="container py-3 mx-auto ">
              <div className="toptextmain">
                <div className="image-textcontnet">
                  <div className="center-sectioncontnet">
                    <p className="merorialtext">Memorial Information</p>
                    <h1 className="provide-emo text-white">
                      We Provide Emotional Support <br /> For Families
                    </h1>
                  </div>
                  <div className="learnmorebtn flex justify-center gap-2 mt-6 text-center">
                    <button className="make-appontbtn">
                      Make An Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-productsdiv  bg-[#F7F6F3] ">
          <div className="container py-6 md:py-24  lg:py-24 mx-auto">
            <div className="product-spcl">
              <div className="flex justify-center text-center">
                <div>
                  <p className="merorialtextinfo">Memorial Information</p>
                  <h1 className="diffrence-contnet">
                    <span className="exp-contnet">Latest </span> News
                  </h1>
                </div>
              </div>
              <section className="">
                <div className="mt-12">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-6 mt-12">
                    <div className="latest-newscardsshow md:p-4">
                      <div className="latest-images  h-full  overflow-hidden">
                        <img
                          className=" w-full object-cover object-center"
                          src="/img/Rectangle 12.png"
                          alt="blog"
                        />
                        <div className="shootingnews p-6">
                          <p className="date-contnet mb-3 text-center">
                            Apr 21, 2020
                          </p>
                          <h1 className="titlelastestnew mb-3">
                            First steps to take when someone dies
                          </h1>

                          <a className="readmore-contnet">Read More</a>
                        </div>
                      </div>
                    </div>
                    <div className="latest-newscardsshow md:p-4">
                      <div className="latest-images  h-full  overflow-hidden">
                        <img
                          className=" w-full object-cover object-center"
                          src="/img/Rectangle 12 (1).png"
                          alt="blog"
                        />
                        <div className="shootingnews p-6">
                          <p className="date-contnet mb-3 text-center">
                            Apr 21, 2020
                          </p>
                          <h1 className="titlelastestnew mb-3">
                            First steps to take when someone dies
                          </h1>

                          <a className="readmore-contnet">Read More</a>
                        </div>
                      </div>
                    </div>
                    <div className="latest-newscardsshow md:p-4">
                      <div className="latest-images h-full  overflow-hidden">
                        <img
                          className=" w-full object-cover object-center"
                          src="/img/Rectangle 12 (2).png"
                          alt="blog"
                        />
                        <div className="shootingnews p-6">
                          <p className="date-contnet mb-3 text-center">
                            Apr 21, 2020
                          </p>
                          <h1 className="titlelastestnew mb-3">
                            First steps to take when someone dies
                          </h1>

                          <a className="readmore-contnet">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
