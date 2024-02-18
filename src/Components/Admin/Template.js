import { Frontend_URL } from "../../environment";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  FuneralPersonGetDataAction,
  FuneralPersonDataDeleteAction,
} from "../../Redux/actions/SuperAdminAction";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Update this line
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import swal from "sweetalert";

const Template = () => {

  const dispatch = useDispatch();

  const { FuneralPersonGetData } = useSelector(
    (state) => state.FuneralPersonGetDataReducer
  );

  const { success } = useSelector(
    (state) => state.FuneralPersonDataDeleteReducer
  );

  useEffect(() => {
    dispatch(FuneralPersonGetDataAction());
  }, [success]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
  };


  return (
    // <div
    //   style={{
    //     backgroundImage: `url(${Frontend_URL}/img/u1.jpg)`,
    //     padding: "50px 14px",
    //     // height: "100vh",
    //   }}
    // >
    //   <div className="funeralimagesdiv">
    //     <div className="nameborn">
    //       <h1 className="memmoperson">Michael Orlando Adkins</h1>
    //       <h1 className="memmoperson">June 16, 1956 – July 23, 2023</h1>
    //       <div className="mikerporfile">
    //         <img src="/img/Mike-Profile-Photo-5.png" />
    //       </div>
    //     </div>
    //     <div className="amessageto">
    //       <p className="messgaeshow">
    //         A father, a brother, a devoted family member, a friend, and so much
    //         more, he will truly be missed and remembered by many. His life and
    //         legacy lives on through his family contributions and the knowledge
    //         he bestowed to those around him.
    //       </p>
    //     </div>
    //     <img className="funeralimages" src="/img/u2.jpg" />
    //   </div>

    //   <div className="py-12">
    //     <div className="container">
    //       <div className="familyimages">
    //         <div>
    //           <h1 className="memmoperson infomemo">Memories</h1>
    //           <img className="" src="/img/Colloage-2.png" />
    //           <img className="py-12" src="/img/Scripture-2-2048x693.png" />
    //         </div>
    //       </div>

    //       {/* 2 nd  */}

    //       <div className="familyimages11">
    //         <div>
    //           <h1 className="memmoperson infomemo">Memorial information</h1>
    //           <div class="grid grid-cols-3 gap-3 mt-12 items-center">
    //             <div>
    //               <div className="text-center">
    //                 <h1 className="memmoperson infomemo">Memorial Service</h1>
    //                 <h1 className="datefuneral">
    //                   September 2, 2023 at 12:00pm
    //                 </h1>
    //                 <h1 className="nameadkin">
    //                   First Baptist of Hicks Addition
    //                 </h1>

    //                 <h1 className="nameadkin">
    //                   3307 Post Rd, Spencer, OK 73084
    //                 </h1>
    //                 <h1 className="datefuneral">
    //                   Rev. Clarence Bell, Officiant
    //                 </h1>
    //               </div>
    //               <div>
    //                 <div class="mx-auto h-16 w-64 flex justify-center items-center">
    //                   <div class="i h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
    //                   <a class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
    //                     RSVP NOW
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>

    //             <div>
    //               {" "}
    //               <img className="bibelbook" src="/img/12772.jpg" />
    //               <img
    //                 className="fatheradkin"
    //                 src="/img/Mike-Adkins-Cowboys-2-1.jpg"
    //               />
    //             </div>

    //             <div>
    //               <div className="text-center">
    //                 <h1 className="memmoperson infomemo">Repass Celebration</h1>
    //                 <h1 className="datefuneral">September 2, 2023 at 3:00pm</h1>
    //                 <h1 className="nameadkin">Golden Corral Buffet</h1>

    //                 <h1 className="nameadkin">
    //                   1501 S Sooner Rd, Oklahoma City, OK 73110
    //                 </h1>
    //                 <h1 className="datefuneral">
    //                   Pre-Purchase your Repass Meal Tickets Now
    //                 </h1>
    //               </div>
    //               <div>
    //                 <div class="mx-auto h-16 w-64 flex justify-center items-center">
    //                   <div class="i h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
    //                   <a class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
    //                     REPASS TICKET
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="specialnote-imgline">
    //             <img
    //               className="notepatarspl"
    //               src="/img/2302.w058.n003.249B.p1.249 [Converted].png"
    //             />
    //             <div className="specialnote">
    //               <h1 className="memmoperson infomemo mt-12">Special Note</h1>
    //               <div className="peranotemain">
    //                 <p className="peranote">
    //                   This Memorial Page was created by Dr. Brian Adkins, son of
    //                   Michael Adkins, and owner of The Adkins Academy, Inc.
    //                   Repass Tickets are being purchased and processed through
    //                   The Adkins Academy, Inc and its Square Payment Platform
    //                   partner. All proceeds go directly to supporting the
    //                   financial obligations of the Memorial Service and the
    //                   Repass Celebration. Please complete the RSVP form early so
    //                   our planning committee can make the appropriate
    //                   arrangements.
    //                 </p>
    //                 <p className="peranote">
    //                   Repass Tickets are $12 per person and are NOT require to
    //                   attend the Memorial Service, only the Repass Celebration
    //                   Buffet at Golden Corral. All are welcome to attend.
    //                   Donations are welcome and will be used directly toward the
    //                   financial obligations of the Memorial Service and the
    //                   Repass Celebration. Please reach out to Brian directly if
    //                   you have any questions or issues with completing the RSVP
    //                   or Repass Ticket purchase process.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
          style={{
            backgroundImage: `url(${Frontend_URL}/img/u1.jpg)`,
            padding: "50px 14px",
            // height: "100vh", 
          }}
        >
          <div className="funeralimagesdiv">
            <div className="nameborn">
              <h1 className="memmoperson">
                {FuneralPersonGetData?.[0]?.deceased_name}
              </h1>
              <h1 className="memmoperson">
                {moment(FuneralPersonGetData?.[0]?.start_date).format(
                  "MMMM D, YYYY"
                )}
                –{" "}
                {moment(FuneralPersonGetData?.[0]?.end_date).format(
                  "MMMM D, YYYY"
                )}
              </h1>
              <div className="mikerporfile">
                <img src={FuneralPersonGetData?.[0]?.death_person_image} />
              </div>
            </div>
            <div className="amessageto">
              <p className="messgaeshow">
                {FuneralPersonGetData?.[0]?.message}
              </p>
            </div>
            <img className="funeralimages" src="/img/u2.jpg" />
          </div>

          <div className="py-12">
            <div className="container">
              <div className="familyimages">
                <div>
                  <h1 className="memmoperson infomemo">Memories</h1>

                  <div className="imageslider">
                    <Slider {...sliderSettings}>
                      {FuneralPersonGetData?.[0]?.family_images?.map(
                        (image) => (
                          <div key={image.id}>
                            <img
                              className="slider-image"
                              src={image.image}
                              alt={`Family Image ${image.id}`}
                            />
                          </div>
                        )
                      )}
                    </Slider>
                  </div>
                  {/* <img className="" src="/img/Colloage-2.png" />
                  <img className="py-12" src="/img/Scripture-2-2048x693.png" /> */}
                </div>
              </div>

              {/* 2 nd  */}

              <div className="familyimages11">
                <div>
                  <h1 className="memmoperson infomemo">Memorial information</h1>
                  <div class="grid grid-cols-3 gap-3 mt-12 items-center">
                    <div>
                      <div className="text-center">
                        <h1 className="memmoperson infomemo">
                          Memorial Service
                        </h1>
                        <h1 className="datefuneral">
                          September 2, 2023 at 12:00pm
                        </h1>
                        <h1 className="nameadkin">
                          First Baptist of Hicks Addition
                        </h1>

                        <h1 className="nameadkin">
                          3307 Post Rd, Spencer, OK 73084
                        </h1>
                        <h1 className="datefuneral">
                          Rev. Clarence Bell, Officiant
                        </h1>
                      </div>
                      <div>
                        <div class="mx-auto h-16 w-64 flex justify-center items-center">
                          <div class="i h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                          <a class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
                            RSVP NOW
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      {" "}
                      <img className="bibelbook" src="/img/12772.jpg" />
                      <img
                        className="fatheradkin"
                        src="/img/Mike-Adkins-Cowboys-2-1.jpg"
                      />
                    </div>

                    <div>
                      <div className="text-center">
                        <h1 className="memmoperson infomemo">
                          Repass Celebration
                        </h1>
                        <h1 className="datefuneral">
                          September 2, 2023 at 3:00pm
                        </h1>
                        <h1 className="nameadkin">Golden Corral Buffet</h1>

                        <h1 className="nameadkin">
                          1501 S Sooner Rd, Oklahoma City, OK 73110
                        </h1>
                        <h1 className="datefuneral">
                          Pre-Purchase your Repass Meal Tickets Now
                        </h1>
                      </div>
                      <div>
                        <div class="mx-auto h-16 w-64 flex justify-center items-center">
                          <div class="i h-16 w-64 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                          <a class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
                            REPASS TICKET
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="specialnote-imgline">
                    <img
                      className="notepatarspl"
                      src="/img/2302.w058.n003.249B.p1.249 [Converted].png"
                    />
                    <div className="specialnote">
                      <h1 className="memmoperson infomemo mt-12">
                        Special Note
                      </h1>
                      <div className="peranotemain">
                        <p className="peranote">
                          {FuneralPersonGetData?.[0]?.special_note}
                        </p>
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

export default Template;
