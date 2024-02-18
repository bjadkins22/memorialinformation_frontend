import React, { useEffect, useRef, useState } from "react";
import Testimonial from "./ Testimonial";
import { Frontend_URL } from "../../environment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  SupportChatPostAction,
  SupportChatListGetAction,
  UserChatwithPartnerPostAction,
} from "../../Redux/actions/PartnerAction";
import { BACKEND_URL } from "../../environment";
import moment from "moment";
import ReactScrollToBottom from "react-scroll-to-bottom";

const Home = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const chatSocketRef = useRef(null);

  const { userData } = useSelector((state) => state.authReducer);

  const Submitmessage = () => {
    const formData = new FormData();
    formData.append("message", message);
    formData.append("sender", userData?.user?.user_id);
    // formData.append("receiver", chatId);
    dispatch(SupportChatPostAction(formData));
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      Submitmessage();
      setMessage("");
    }
  };

  const { SupportChatListGet } = useSelector(
    (state) => state.SupportChatListGetReducer
  );

  useEffect(() => {
    dispatch(SupportChatListGetAction());
  }, []);

  const [newChat, setNewChat] = useState("");
  const [allChat, setAllChat] = useState([]);

  useEffect(() => {
    // dispatch(SupportChatListGetAction(chatId, userData?.user?.user_id));
    const URL = BACKEND_URL.split("//")[1];
    const chatSocket = new WebSocket(
      "ws://" + URL + "ws/chat/" + userData?.user?.user_id + "/"
    );
    chatSocketRef.current = chatSocket;
    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      if (data && data?.data?.value) {
        const newChatUp = data.data.value.text;
        setAllChat((prevChat) => [newChatUp, ...prevChat]);
        setNewChat(newChatUp);
      }
    };
    chatSocket.onclose = function (e) {};

    return () => {
      if (chatSocketRef.current) {
        chatSocketRef.current.close();
      }
    };
  }, [dispatch, userData?.user?.user_id]);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main-homesection">
        <div
          className="main-container"
          style={{
            backgroundImage: `url(${Frontend_URL}img/backflower.jpg)`,
          }}
        >
          <div className="bgimage-contnet">
            <div className="container p-3  mx-auto ">
              <div className="toptext">
                <div className="image-textcontnet">
                  <div className="center-sectioncontnet">
                    <p className="merorialtext">Memorial Information</p>
                    <h1 className="letus-text-contnet text-white">
                      <span className="land-text-contnet">
                        {" "}
                        Your Loved-Ones
                      </span>
                      <br /> Are Counting On You
                    </h1>
                    <p className="funeral-contnet mt-4">
                      The final transition hurts, but it shouldn't be chaotic.
                      Plan, Collaborate, <br />
                      Organize & Communicate seamlessly with Memorial
                      Information.
                    </p>
                  </div>
                  <div className="learnmorebtn flex gap-2 mt-6">
                    <button className="learnmorebtnactive">Learn More</button>
                    <button className="learnmorebtnunactive">Contact Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-3 mx-auto ">
          <div className="memorial-div">
            <div className="grid-imagecotnetmain">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-16">
                <div className="grid-imagecotnet">
                  <div className="rectangle1">
                    <img src="/img/Group 7.png" className="w-full" />
                  </div>
                </div>
                <div className="experincediff">
                  <p className="merorialtextinfo">Memorial Information</p>
                  <h1 className="diffrence-contnet">
                    {" "}
                    <span className="exp-contnet">Experience</span> the <br />{" "}
                    Difference{" "}
                  </h1>
                  <p className="established">
                    Memorial Information is your best virtual space for
                    organizing, communicating, planning, meeting, fundraising,
                    and property disposing when the time comes for the ultimate
                    eternal transition. From pre-planning to future memorial
                    remembrances, our multi-level security and easy-to-use
                    platform will certainly soften the pain and headache of
                    coping with the loss of a family member.
                  </p>

                  <div className="main-group-stab mt-4">
                    <div className="plan-aheadmain flex gap-4 mt-8">
                      <div className="vector-iamges">
                        <img src="/img/star.png" />
                      </div>
                      <div className="">
                        <h1 className="plan-ahed">
                          We help individuals, heirs, families, and friends
                          manage the funeral process and beyond.{" "}
                        </h1>
                      </div>
                    </div>

                    <div className="plan-aheadmain flex gap-4 mt-8">
                      <div className="vector-iamges">
                        <img src="/img/star.png" />
                      </div>
                      <div className="">
                        <h1 className="plan-ahed">
                          Secure Digital Storage for important documents (or
                          hints to heirs)
                        </h1>
                      </div>
                    </div>

                    <div className="plan-aheadmain flex gap-4 mt-8">
                      <div className="vector-iamges">
                        <img src="/img/star.png" />
                      </div>
                      <div className="">
                        <h1 className="plan-ahed">
                          Share Photo & Video Memories on your Memorial Page
                        </h1>
                      </div>
                    </div>

                    <div className="plan-aheadmain flex gap-4 mt-8">
                      <div className="vector-iamges">
                        <img src="/img/star.png" />
                      </div>
                      <div className="">
                        <h1 className="plan-ahed">
                          Friends & Family Memorial Committee Virtual Meetings
                        </h1>
                      </div>
                    </div>

                    <div className="plan-aheadmain flex gap-4 mt-8">
                      <div className="vector-iamges">
                        <img src="/img/star.png" />
                      </div>
                      <div className="">
                        <h1 className="plan-ahed">
                          Property Organizing & Disposition plans
                        </h1>
                      </div>
                    </div>

                    <div className="plan-aheadmain flex gap-4 mt-8">
                      <div className="vector-iamges">
                        <img src="/img/star.png" />
                      </div>
                      <div className="">
                        <h1 className="plan-ahed">
                          Live Stream Ceremonial Events
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-funeralcontnet bg-[#F7F6F3] ">
          <div className="container p-3 mx-auto ">
            <div className="iamge-contnetdiv">
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-16">
                <div>
                  <p className="merorialtextinfo">Memorial Information</p>
                  <h1 className="diffrence-contnet">
                    <span className="exp-contnet">Life</span> Legacy, &
                    Preservation
                  </h1>
                </div>
                <div>
                  <p className="established sty-contnet">
                    Memorial Information honors the life and legacy of you and
                    your loved-ones. Our mission is to preserve your legacy by
                    facilitating a seamlessly organized and collaborative
                    transition. Gone are the days of Christmas recipes, family
                    trees, and final wishes going to the grave with mom or dad.
                  </p>

                  <p className="established sty-contnet">
                    With Memorial Information, your most sacred information and
                    wishes (or hints as to the stored location) can be securely
                    stored and transferred to your designated heirs at the time
                    you choose. Whether it’s a living will, family heirlooms, a
                    property disposition chart, or simply Sunday dinner recipes,
                    Memorial Information makes it easy to organize and pass this
                    information on to your heirs, friend, and/or family. We
                    believe this level of legacy building shouldn’t be available
                    only for the rich and famous. You and your family deserve to
                    preserve your legacy too.
                  </p>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12">
                <div className="image-box">
                  <div className="react-images">
                    <img src="/img/Rectangle 10.png" />
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
                    <img src="/img/Rectangle 10 (1).png" />
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
                    <img src="/img/Rectangle 10 (2).png" />
                  </div>
                  <div className="main-graybox">
                    <div className="contnet-divbox">
                      <h1 className="funeral-text">
                        Permanent Memorialization
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {userData?.user?.account_type != 0 && (
          <>
            <div onClick={togglePopup} class="relative">
              <div
                class="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-0 right-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10 outline-none cursor-pointer"
              >
                <div class="p-2 rounded-full bg-green-600">
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}
        {/* chat section  */}

        <div
          className={
            isOpen ? "supprtchat-functionacive" : "supprtchat-functionoffi"
          }
        >
          <div class="relative">
            <div
              class="z-2 shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-0 right-5 rounded-lg
                  mr-[55px] mb-[70px] out"
            >
              <div class="bg-white">
                <div class="main-headershowpro py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="w-10 h-10 rounded-full"
                        src="/img/png-clipart-user.png"
                      />
                    </div>
                    <div class="ml-4">
                      <p class="text-grey-darkest">Admin</p>
                      <p class="text-grey-darker text-xs mt-1">Admin</p>
                    </div>
                  </div>

                  <div class="flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          fill="#263238"
                          fill-opacity=".5"
                          d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          fill="#263238"
                          fill-opacity=".5"
                          d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          fill="#263238"
                          fill-opacity=".6"
                          d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <ReactScrollToBottom
                  class="chat-sectionviewshow flex-1 overflow-auto"
                  style={{ backgroundColor: "rgb(179 113 20 / 60%)" }}
                >
                  <div class="centerchatsection publicc-spotchat py-2 px-3">
                    {SupportChatListGet?.length > 0 &&
                      SupportChatListGet?.map((i, idx) => (
                        <>
                          {userData?.user?.user_id == i.sender?.id ? (
                            <div
                              key={idx}
                              class="sender flex justify-end mb-2 gap-2 items-center"
                            >
                              <div>
                                <div
                                  class="rounded py-2 px-3"
                                  style={{ backgroundColor: "#E2F7CB" }}
                                >
                                  <p class="text-sm mt-1">{i.message}</p>
                                  <p class="text-right text-xs text-grey-dark mt-1">
                                    {moment(i.timestamp).fromNow()}
                                  </p>
                                </div>

                                {/* <ContextMenu id="myContextMenu">
                                        <div className="messagebtndelete">
                                          <button className="messagebtn-delete">
                                            Delete
                                          </button>
                                        </div>
                                      </ContextMenu> */}
                              </div>

                              <img
                                class="h-12 w-12 rounded-full object-cover"
                                src={
                                  // ProfileDetailsGet?.image ??
                                  "/img/png-clipart-user.png"
                                }
                                // src={i?.sender?.user_profile?.image}
                              />
                              {/* // ) : (
                                    //   <img
                                    //     class="h-12 w-12 rounded-full"
                                    //     src="/img/png-clipart-user.png"
                                    //   />
                                    // )} */}
                            </div>
                          ) : (
                            <div class="reciver flex mb-2 items-center gap-2">
                              {/* {GetAllUserDataById?.user_profile?.image ? (
                                      <>
                                        <img
                                          class="h-12 w-12 rounded-full"
                                          src={
                                            GetAllUserDataById?.user_profile
                                              ?.image
                                          }
                                        />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          class="h-12 w-12 rounded-full"
                                          src="/img/png-clipart-user.png"
                                        />
                                      </>
                                    )} */}
                              <div
                                class="rounded py-2 px-3"
                                style={{ backgroundColor: "#F2F2F2" }}
                              >
                                <p class="text-sm mt-1">{i.message}</p>
                                <p class="text-right text-xs text-grey-dark mt-1">
                                  {moment(i.timestamp).fromNow()}
                                </p>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                    {allChat?.length > 0 &&
                      allChat?.map((i, idx) => (
                        <>
                          {userData?.user?.user_id == i.sender?.id ? (
                            <div
                              key={idx}
                              class="sender flex justify-end mb-2 gap-2 items-center"
                            >
                              <div
                                class="rounded py-2 px-3"
                                style={{ backgroundColor: "#E2F7CB" }}
                              >
                                <p class="text-sm mt-1">{i.message}</p>
                                <p class="text-right text-xs text-grey-dark mt-1">
                                  {moment(i.timestamp).fromNow()}
                                </p>
                              </div>

                              <img
                                class="w-10 h-10 rounded-full"
                                src={
                                  // ProfileDetailsGet?.image ??
                                  "/img/png-clipart-user.png"
                                }
                              />
                            </div>
                          ) : (
                            <div class="reciver flex mb-2 items-center gap-2">
                              {i?.receiver?.user_profile?.image ? (
                                <img
                                  class="w-10 h-10 rounded-full"
                                  src={i?.receiver?.user_profile?.image}
                                />
                              ) : (
                                <img
                                  class="w-10 h-10 rounded-full"
                                  src="/img/png-clipart-user.png"
                                />
                              )}
                              <div
                                class="rounded py-2 px-3"
                                style={{ backgroundColor: "#F2F2F2" }}
                              >
                                <p class="text-sm mt-1">{i.message}</p>
                                <p class="text-right text-xs text-grey-dark mt-1">
                                  {moment(i.timestamp).fromNow()}
                                </p>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                  </div>
                </ReactScrollToBottom>

                <div class="bg-grey-lighter px-4 py-4">
                  <div class="flex gap-2 items-center">
                    <div class="w-full">
                      <input
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        type="text"
                        class="w-full rounded-full pl-6 pr-12 py-2.5 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white"
                        style={{ fontSize: "15px" }}
                        placeholder="Type a message..."
                      />
                    </div>

                    <div class="w-10 h-10 rounded-full bg-blue-300 text-center items-center flex justify-center">
                      <button
                        onClick={Submitmessage}
                        class="w-10 h-10 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white"
                      >
                        <i class="fa fa-send-o"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Testimonial />
      </div>
    </>
  );
};

export default Home;
