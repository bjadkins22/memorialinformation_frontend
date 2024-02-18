import React, { useEffect, useState } from "react";
import { Frontend_URL } from "../../environment";
import {
  ContactusDetailGetAction,
  UserContactwithAdminAction,
} from "../../Redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactusDetailGetAction());
  }, []);

  const { ContactusDetailGet } = useSelector(
    (state) => state.UserSendJobInqueryReducer
  );

  const {
    success,
    error,
    message: successMessage,
    loading,
  } = useSelector((state) => state.UserContactwithAdminReducer);

  const [rerender, setRerender] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("phone_number", phone);
    formData.append("message", message);

    dispatch(UserContactwithAdminAction(formData));
    setRerender(true);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "",
        text: successMessage,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setEmail("");
      setName("");
      setPhone("");
      setMessage("");
      setRerender(false);
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [success, error, rerender]);

  return (
    <div>
      <div className="main-about-page">
        <div className="about-fixedimage">
          <div
            className="main-containerabout"
            style={{
              backgroundImage: `url(${Frontend_URL}img/close-up-person-working-call-center.jpg)`,
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
                        <span className="land-text-contnet">Contact us</span>
                      </h1>
                      <p className="funeral-contnet mt-4">
                        Homepage / Contact us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="map-contnet">
            <section className="text-gray-600 body-font ">
              <div className="main-contact-card">
                <div className="container p-3 mx-auto ">
                  <div className="maincontactus my-12">
                    <div className="grid lg:grid-cols-3 md:lg:grid-cols-2 sm:grid-cols-1 md:gap-12 sm:gap-6">
                      <div className="plancontact-us flex gap-6">
                        <div className="vector-iamges">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="">
                          <h1 className="plan-ahed">Adress</h1>
                          <p className="decisions-contnet">
                            {ContactusDetailGet?.[0]?.address}
                          </p>
                        </div>
                      </div>

                      <div className="plancontact-us flex gap-6">
                        <div className="vector-iamges">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="phoneicon w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                            />
                          </svg>
                        </div>
                        <div className="">
                          <h1 className="plan-ahed">Phone</h1>
                          <p className="decisions-contnet">
                            {ContactusDetailGet?.[0]?.phone}
                          </p>
                        </div>
                      </div>

                      <div className="plancontact-us flex gap-6">
                        <div className="vector-iamges">
                          <i className="fa fa-envelope"></i>
                        </div>
                        <div className="">
                          <h1 className="plan-ahed">Email</h1>
                          <p className="decisions-contnet">
                            {ContactusDetailGet?.[0]?.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="main-funeralcontnet bg-[#F7F6F3] ">
            <div className="container p-3 mx-auto ">
              <div className="iamge-contnetdiv">
                <div className="text-center">
                  <p className="merorialtextinfo today-infoo">
                    today, tomorrow and beyond.
                  </p>
                  <h1 className="diffrence-contnet">
                    <span className="exp-contnet">Contact</span> Us
                  </h1>
                </div>

                <section className="text-gray-600 body-font relative">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="contact-form mx-auto">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="relative mb-6">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              />
                            </svg>
                          </div>
                          <input
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            type="text"
                            className="bg-white common-box-shadaw text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder:text-gray-950 "
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="relative mb-6">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                              />
                            </svg>
                          </div>
                          <input
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                            type="text"
                            className="bg-white common-box-shadaw  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder:text-gray-950 "
                            placeholder="Phone number"
                          />
                        </div>
                        <div className="relative mb-6">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 16"
                            >
                              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            className="bg-white  common-box-shadaw text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder:text-gray-950 "
                            placeholder="Email Address"
                          />
                        </div>
                      </div>

                      <div className="">
                        <div className="relative mb-6">
                          <div className="svg-divicon  flex items-center pl-3.5 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </div>
                          <textarea
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                            className="max-textareabiography message-textarea common-box-shadaw bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder:text-gray-950 "
                            placeholder="Your Message"
                          ></textarea>
                        </div>

                        <div className="p-2 w-full">
                          <button
                            onClick={handleSubmit}
                            className="flex justify-center mx-auto learnmorebtnactive funeral-btn focus:outline-none "
                          >
                            {loading ? (
                              <>
                                {" "}
                                <svg
                                  aria-hidden="true"
                                  role="status"
                                  class="inline w-4 h-4 mr-3 text-white animate-spin"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                Please wait...{" "}
                              </>
                            ) : (
                              "Submit"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
