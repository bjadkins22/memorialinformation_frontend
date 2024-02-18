import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  ActivePartnerShowAction,
  GetAllPersonListAction,
} from "../../Redux/actions/PartnerAction";

import { getUserPartnerAction } from "../../Redux/actions/UserAction";

function Partners_listShow() {
  const dispatch = useDispatch();

  const { GetALLPersonList, loading: allpersonLoad } = useSelector(
    (state) => state.GetAllPersonListReducer
  );

  const { getUserPartner } = useSelector(
    (state) => state.getUserPartnerReducer
  );
  console.log("getUserPartner", getUserPartner);
  const { success } = useSelector((state) => state.PartnerRequestReducer);
  const [selectedValue, setSelectedValue] = useState("account_type=2");
  const [selectedValue2, setSelectedValue2] = useState("");
  useEffect(() => {
    if (selectedValue == "account_type=2") {
      dispatch(getUserPartnerAction());
    } else if (selectedValue == "account_type=3") {
      dispatch(GetAllPersonListAction(selectedValue, selectedValue2));
    }
  }, [selectedValue, selectedValue2]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSelectChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            <div className="flex justify-content-between items-center">
              <h1 className="heading-top">Partners & Vendor</h1>{" "}
              {selectedValue == "account_type=3" ? (
                <div>
                  <input
                    class="input-elevated"
                    value={selectedValue2}
                    onChange={handleSelectChange2}
                    type="text"
                    placeholder="Search"
                  />
                </div>
              ) : null}
              <div class="sortBy">
                <select
                  value={selectedValue}
                  onChange={handleSelectChange}
                  class="sortbb"
                >
                  <option value="account_type=2">Partner</option>
                  <option value="account_type=3">Vendor</option>
                </select>
              </div>
            </div>
            <div className="common-divbg bg-white">
              <div className="Topallpage AllPageHight Custompage">
                <div
                  class="grid grid-cols-3   gap-4"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {selectedValue == "account_type=2" && (
                    <div class="bg-white border border-white shadow-lg  rounded-3xl p-4">
                      <div class="flex-none sm:flex">
                        <div class="relative h-32 w-32">
                          <img
                            src={
                              getUserPartner?.added_by_user?.user_profile
                                ?.image ?? "/img/noimage.png"
                            }
                            alt=""
                            class=" w-32 h-32 object-cover rounded-2xl"
                          />
                        </div>
                        <div class="flex-auto sm:ml-5 justify-evenly">
                          <div class="flex items-center justify-between sm:mt-2">
                            <div class="flex items-center">
                              <div class="flex flex-col">
                                <Link
                                  to={`/profile/info/${getUserPartner?.added_by_user?.id}`}
                                  class="partner-username"
                                >
                                  {getUserPartner?.added_by_user?.first_name}{" "}
                                  {getUserPartner?.added_by_user?.last_name}
                                </Link>
                                <div class="flex-auto text-gray-500 my-1">
                                  <span class="mr-3 ">Partner</span>
                                  <span class="mr-3 border-r border-gray-200  max-h-0"></span>
                                  <span>
                                    {
                                      getUserPartner?.added_by_user
                                        ?.user_profile?.address
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-row items-center">
                            <div class="flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="h-5 w-5 text-yellow-500"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="h-5 w-5 text-yellow-500"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="h-5 w-5 text-yellow-500"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="h-5 w-5 text-yellow-500"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="h-5 w-5 text-yellow-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div class="flex pt-2  text-sm text-gray-500">
                            <div class="flex-1 inline-flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                              </svg>
                              <p class="">1.2k Hire</p>
                              <Link
                                to={`/partner/chat/${getUserPartner?.added_by_user?.id}`}
                              >
                                <button class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                                  Chat
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedValue == "account_type=3" &&
                    GetALLPersonList?.map((item) => (
                      <div class="bg-white border border-white shadow-lg  rounded-3xl p-4">
                        <div class="flex-none sm:flex">
                          <div class="relative h-32 w-32">
                            <img
                              src={
                                item.user?.user_profile?.image ??
                                "/img/noimage.png"
                              }
                              alt=""
                              class=" w-32 h-32 object-cover rounded-2xl"
                            />
                          </div>
                          <div class="flex-auto sm:ml-5 justify-evenly">
                            <div class="flex items-center justify-between sm:mt-2">
                              <div class="flex items-center">
                                <div class="flex flex-col">
                                  <Link to={`/profile/info/${item?.id}`} class="partner-username">
                                    {item?.first_name} {item?.last_name}
                                  </Link>
                                  <div class="flex-auto text-gray-500 my-1">
                                    <span class="mr-3 ">
                                      {item?.account_type == 2
                                        ? "Partner"
                                        : "Vender"}
                                    </span>
                                    <span class="mr-3 border-r border-gray-200  max-h-0"></span>
                                    <span>{item.user_profile?.address}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-row items-center">
                              <div class="flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="h-5 w-5 text-yellow-500"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="h-5 w-5 text-yellow-500"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="h-5 w-5 text-yellow-500"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="h-5 w-5 text-yellow-500"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  class="h-5 w-5 text-yellow-500"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div class="flex pt-2  text-sm text-gray-500">
                              <div class="flex-1 inline-flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-5 w-5 mr-2"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                </svg>
                                <p class="">1.2k Hire</p>
                                <Link to={`/partner/chat/${item?.id}`}>
                                  <button class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                                    Chat
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners_listShow;
