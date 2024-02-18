import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, json, useParams } from "react-router-dom";
import ReactScrollToBottom from "react-scroll-to-bottom";
import {
  UserChatwithPartnerPostAction,
  GetAllChatListWithUserAction,
  UserMessageChatSelectAction,
  GetAllUserDataByIdAction,
  AllChatGetBYIdAction,
  UserHelpListAllMessageAction,
} from "../../Redux/actions/PartnerAction";

import {
  UserGetHiredPatnerAction,
  UserHirePartnerAndVenderAction,
  UserRemovedHiredParterVenderAction,
} from "../../Redux/actions/VenderAction";

import { BACKEND_URL } from "../../environment";
import moment from "moment";
import swal from "sweetalert";
import { ProfileDetailsGetAction } from "../../Redux/actions/UserAction";

const TalkToSupport = () => {
  const dispatch = useDispatch();

  const { chatId } = useParams();

  const [message, setMessage] = useState("");
  const chatSocketRef = useRef(null);

  const { userData } = useSelector((state) => state.authReducer);

  const { success: successAddChat } = useSelector(
    (state) => state.UserChatwithPartnerPostReducer
  );

  const [reciverId, setReciverId] = useState(null);

  const Submitmessage = () => {
    const formData = new FormData();
    if (message.trim() !== "") {
      formData.append("content", message);
    }
    formData.append("sender", userData?.user?.user_id);
    formData.append("receiver", reciverId);
    dispatch(UserChatwithPartnerPostAction(formData));
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (message.trim() !== "") {
        Submitmessage();
        setMessage("");
      }
    }
  };

  const [newChat, setNewChat] = useState("");
  const [allChat, setAllChat] = useState([]);

  useEffect(() => {
    const URL = BACKEND_URL.split("//")[1];
    const chatSocket = new WebSocket(
      "wss://" + URL + "ws/chat/" + userData?.user?.user_id + "/"
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

  // const { UserMessageChatSelect } = useSelector(
  //   (state) => state.UserMessageChatSelectRedcuer
  // );

  // useEffect(() => {
  //   dispatch(UserMessageChatSelectAction());
  // }, [successAddChat]);

  const { UserHelpListAllMessage } = useSelector(
    (state) => state.UserHelpListAllMessageReducer
  );

  useEffect(() => {
    dispatch(UserHelpListAllMessageAction());
  }, []);

  const { AllChatGetBYId } = useSelector((state) => state.AllChatGetBYIdReducr);

  useEffect(() => {
    if (reciverId) {
      dispatch(AllChatGetBYIdAction(userData?.user?.user_id, reciverId));
    }
    dispatch(GetAllUserDataByIdAction(reciverId));
  }, [reciverId, userData]);

  useEffect(() => {
    if (chatId) {
      setReciverId([chatId]);
    }
  }, [chatId]);

  const { GetAllUserDataById } = useSelector(
    (state) => state.GetAllUserDataByIdReducer
  );

  const [selectUserItem, setSelectUserItem] = useState("");

  const handleClick = (id) => {
    if (!chatId) {
      setReciverId(id);

      const selectedItem = UserHelpListAllMessage?.find(
        (item) => item?.sender?.id === id
      );

      if (selectedItem) {
        setSelectUserItem(selectedItem);
      }
    }
  };

  const userDetails = UserHelpListAllMessage?.map((item) => [
    item?.sender,
    item?.receiver,
  ]).flat();

  const filteredUserDetails = userDetails?.filter(
    (item) => item?.id !== userData?.user?.user_id
  );

  const [rerender, setRerender] = useState(false);
  const {
    success: successHired,
    error: errorHired,
    message: hiredMessage,
  } = useSelector((state) => state.UserHirePartnerAndVenderReducer);

  const {
    success: successRemoveHired,
    error: errorRemoveHired,
    message: hiredRemoveMessage,
  } = useSelector((state) => state.UserRemovedHiredParterVenderReducer);

  const HireHandle = () => {
    dispatch(UserHirePartnerAndVenderAction({ hire_by_user_id: reciverId }));
    setRerender(true);
  };

  const RemoveHireHandle = () => {
    dispatch(UserRemovedHiredParterVenderAction(reciverId));
    setRerender(true);
  };

  const { UserGetHiredPatner } = useSelector(
    (state) => state.UserGetHiredPatnerReducer
  );

  useEffect(() => {
    dispatch(UserGetHiredPatnerAction());
  }, [successHired, successRemoveHired]);

  const isUserHired = UserGetHiredPatner?.hired_users?.some(
    (user) => user?.id === reciverId
  );


  const { success, error } = useSelector((state) => state.ProfileUpadteReducer);
  const { ProfileDetailsGet } = useSelector(
    (state) => state.ProfileDetailsGetReducer
  );

  useEffect(() => {
    dispatch(ProfileDetailsGetAction(userData?.user?.user_id));
  }, [success]);


  return (
    <div>
      <div>
        <div class="">
          <div class="">
            <div class="flex border border-grey rounded shadow-lg h-full">
              <>
                <div class="w-1/3 border flex flex-col">
                  <div className="main-headershowpro">
                    <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                      <div>
                        <img
                          class="w-12 h-12 rounded-full"
                          src={
                            ProfileDetailsGet?.image ??
                            "/img/png-clipart-user.png"
                          }
                        />
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
                              fhandleClickill="#72got7A7E"
                              d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-4">
                          <svg
                            xmlnUserHelpListAllMessages="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            Florist
                            <path
                              opacity=".55"
                              fill="#263238"
                              d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-4">
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

                    <div class="py-2 px-2 bg-grey-lightest">
                      <input
                        type="text"
                        class="w-full px-2 py-2 text- outline-none"
                        placeholder="Search or start new chat"
                      />
                    </div>
                  </div>

                  <div class="bg-grey-lighter flex-1 overflow-auto">
                    {UserHelpListAllMessage?.length > 0 ? (
                      <>
                        {filteredUserDetails?.map((item) => (
                          <div
                            onClick={() => handleClick(item?.id)}
                            class="px-3 flex items-center bg-grey-light cursor-pointer"
                          >
                            <div>
                              {item?.user_profile?.image ? (
                                <img
                                  class="h-12 w-12 rounded-full"
                                  src={item?.user_profile?.image}
                                />
                              ) : (
                                <img
                                  class="h-12 w-12 rounded-full"
                                  src="/img/png-clipart-user.png"
                                />
                              )}
                            </div>
                            <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                              <div class="flex items-bottom justify-between">
                                <p class="text-grey-darkest">
                                  {item?.first_name}
                                  {item?.last_name}
                                </p>
                                <p class="text-xs text-grey-darkest">
                                  12:45 pm
                                </p>
                              </div>
                              <p class="text-grey-dark mt-1 text-sm">
                                Get Andrés on this movie ASAP!
                              </p>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <h1 className="selectuserchat">No Chat to display</h1>
                      </div>
                    )}
                  </div>
                </div>
              </>
              <>
                {reciverId ? (
                  <>
                    <div class="w-2/3 border flex flex-col">
                      <div class="main-headershowpro py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                        {/* <Link to={`/profile/info/${reciverId}`}> */}
                        <div class="flex items-center">
                          <div>
                            {GetAllUserDataById?.user_profile?.image ? (
                              <>
                                <img
                                  class="w-10 h-10 rounded-full"
                                  src={GetAllUserDataById?.user_profile?.image}
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  class="h-10 w-10 rounded-full"
                                  src="/img/png-clipart-user.png"
                                />
                              </>
                            )}
                          </div>
                          <div class="ml-4">
                            <h2 class="userchatnametext text-white">
                              {GetAllUserDataById?.first_name}
                              {""} {""}
                              {GetAllUserDataById?.last_name}
                            </h2>
                          </div>
                        </div>
                        {/* </Link> */}
                        <div class="flex">
                          <div class=""> </div>
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
                          {AllChatGetBYId?.length > 0 &&
                            AllChatGetBYId?.map((i, idx) => (
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

                                    {/* {i?.sender?.user_profile?.image ? ( */}
                                    <img
                                      class="h-12 w-12 rounded-full object-cover"
                                      src={
                                        ProfileDetailsGet?.image ??
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
                                    {GetAllUserDataById?.user_profile?.image ? (
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
                          {allChat?.length > 0 &&
                            allChat?.map((i, idx) => (
                              <>
                                {userData?.user?.user_id == i.sender ? (
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
                                    {/* {i?.sender?.user_profile?.image ? (
                                      <img
                                        class="w-10 h-10 rounded-full"
                                        src={i?.sender?.user_profile?.image}
                                      />
                                    ) : (
                                      <img
                                        class="w-10 h-10 rounded-full"
                                        src="/img/png-clipart-user.png"
                                      />
                                    )} */}

                                    <img
                                      class="w-10 h-10 rounded-full"
                                      src={
                                        ProfileDetailsGet?.image ??
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
                  </>
                ) : (
                  <div className="pleasesolectuser">
                    <h1 className="selectuserchat">
                      Please select a user to start chatting
                    </h1>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToSupport;
