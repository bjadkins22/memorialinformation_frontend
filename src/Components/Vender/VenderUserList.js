import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  EndTheContractAction,
  UserAddRatingAction,
} from "../../Redux/actions/VenderAction";
import moment from "moment";
import {
  GetHiredPersonListAction,
  GetAllPersonListAction,
} from "../../Redux/actions/PartnerAction";
import { UserGetHiredPatnerAction } from "../../Redux/actions/VenderAction";
import { paymentOfContractAction } from "../../Redux/actions/paymentAction";
import { Link } from "react-router-dom";
import LoaderSpinner from "../Loader/Loader-spinner";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function VenderUserList() {
  const dispatch = useDispatch();

  const { GetALLPersonList, loading: allpersonLoad } = useSelector(
    (state) => state.GetAllPersonListReducer
  );
  const {
    endOfContract,
    success: endofContSucc,
    error: endofContErr,
  } = useSelector((state) => state.EndTheContractReducer);

  const { GetHiredPersonList } = useSelector(
    (state) => state.GetHiredPersonListReducer
  );
  const { paymentOfContract, success: paymentSucc } = useSelector(
    (state) => state.paymentOfContractReducer
  );
  const { UserGetHiredPatner } = useSelector(
    (state) => state.UserGetHiredPatnerReducer
  );
  
  const { userData } = useSelector((state) => state.authReducer);
  const [selectedValue, setSelectedValue] = useState("account_type=3");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [rerender, setrerender] = useState("");
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [contractId, setContractId] = useState();
  const [hiredId, setHiredId] = useState();

  const [comment, setcomment] = useState("");
  // Function to handle the change in the dropdown
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSelectChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  useEffect(() => {
    if (userData?.user?.account_type == 1) {
      dispatch(UserGetHiredPatnerAction());
    } else if (
      userData?.user?.account_type == 0 ||
      userData?.user?.account_type == 2
    ) {
      dispatch(GetAllPersonListAction(selectedValue, selectedValue2));
    }
  }, [userData, selectedValue, selectedValue2, endofContSucc]);
  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value, 10);
    setRating(selectedRating);
  };

  const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = Array(5)
      .fill()
      .map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          color={
            index < fullStars || (index === fullStars && hasHalfStar)
              ? "#f1b033"
              : "lightgray"
          }
        />
      ));

    return <div>{stars}</div>;
  };

  const AddRating = () => {
    const formData = new FormData();

    formData.append("rating", rating);
    formData.append("comment", comment);
    formData.append("rated_user", hiredId);
    formData.append("rated_by_user", userData?.user?.user_id);
    formData.append("hiring", contractId);

    dispatch(UserAddRatingAction(formData));
    setTimeout(() => {
      dispatch(EndTheContractAction(contractId));
    }, 300);
    setrerender(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePaymentAction = (id) => {
    const formD = new FormData();
    formD.append("hiring_id", id);
    dispatch(paymentOfContractAction(formD));
  };
  const handleEndTheContract = (conId, hiredID) => {
    setOpen(true);
    setContractId(conId);
    setHiredId(hiredID);
  };
  useEffect(() => {
    const url = paymentOfContract?.redirect_url;
    if (url) {
      window.location.href = url;
    }
  }, [paymentSucc]);

  useEffect(() => {
    if (endofContSucc && rerender) {
      swal({
        title: "Successful",
        text: "Contract Completed Successfully",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
      });
      setrerender(false);
      setContractId();
      setHiredId();
      setRating();
      setOpen(false);
      setcomment();
    }
    if (endofContErr && rerender) {
      swal({
        title: "Error",
        text: "Something went wrong",
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setrerender(false);
    }
  }, [endofContErr, endofContSucc, rerender]);

  return (
    <>
      <div>
        <div className="">
          {userData?.user?.account_type == 0 ||
          userData?.user?.account_type == 2 ? (
            <div className="main-page-div bg-green-200">
              <div className="flex justify-content-between items-center">
                <h1 className="heading-top">
                  {" "}
                  {userData?.user?.account_type == 2
                    ? "All Venders"
                    : "All User"}
                </h1>
                <div>
                  <input
                    class="input-elevated"
                    value={selectedValue2}
                    onChange={handleSelectChange2}
                    type="text"
                    placeholder="Search"
                  />
                </div>
                {userData?.user?.account_type == 0 ? (
                  <div class="sortBy">
                    <select
                      value={selectedValue}
                      onChange={handleSelectChange}
                      class="sortbb"
                    >
                      <option value="">All users</option>
                      <option value="account_type=2">Partner</option>
                      <option value="account_type=3">Vendor</option>
                      <option value="account_type=1">Users</option>
                    </select>
                  </div>
                ) : null}
              </div>
              <div className="common-divbg bg-white">
                <div className="Topallpage AllPageHight Custompage">
                  <div
                    class="grid grid-cols-3   gap-4"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {allpersonLoad ? (
                      <>
                        <LoaderSpinner />
                      </>
                    ) : (
                      <>
                        {GetALLPersonList?.map((item) => (
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
                                      <Link to={`/profile/info/${item?.id}`}>
                                        <div class="partner-username">
                                          {item?.first_name} {item?.last_name}
                                        </div>
                                      </Link>
                                      <div class="flex-auto text-gray-500 my-1">
                                        <span class="mr-3 ">
                                          {item?.account_type == 0
                                            ? "Admin"
                                            : item?.account_type == 1
                                            ? "User"
                                            : item?.account_type == 2
                                            ? "Partner"
                                            : item?.account_type == 3
                                            ? "Vendor"
                                            : null}
                                        </span>
                                        <span class="mr-3 border-r border-gray-200  max-h-0"></span>
                                        <span>
                                          {item.user?.user_profile?.address}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex flex-row items-center">
                                  <Rating
                                    rating={
                                      item?.ratings_received &&
                                      parseFloat(
                                        item?.ratings_received?.[0]?.rating
                                      ).toFixed(1)
                                    }
                                  />
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
                                    <p class="">1k Hire</p>
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : userData?.user?.account_type == 1 ? (
            <div className="main-page-div bg-green-200">
              <h1 className="heading-top">Hired Members</h1>
              <div className="common-divbg bg-white">
                <div className="Topallpage AllPageHight Custompage">
                  <div
                    class="grid grid-cols-3   gap-4"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {UserGetHiredPatner?.map((item) =>
                      !item?.is_contract_completed ? (
                        <div class="bg-white border border-white shadow-lg  rounded-3xl p-4">
                          <div class="flex-none sm:flex">
                            <div class="flex-auto sm:ml-5 justify-evenly">
                              <div class="">
                                <div class="">
                                  <div class="flex flex-col">
                                    <div class="partner-username flex justify-content-between">
                                      {item?.title}
                                      <span class="mr-3 border-r border-gray-200  max-h-0">
                                        ${item.project_price}
                                      </span>
                                    </div>
                                    <div className="flex gap-4">
                                      <div>
                                        {item?.hired_users?.first_name}{" "}
                                        {item?.hired_users?.last_name}
                                      </div>
                                    </div>
                                    <div class="flex justify-content-between text-gray-500 my-1">
                                      <span class="mr-3 ">{item?.status}</span>
                                      <Link
                                        to={`/partner/chat/${item?.hired_users?.id}`}
                                      >
                                        <button class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                                          Chat
                                        </button>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="block">
                                <div>
                                  Start Date:{" "}
                                  {moment(item?.contract_start_date).format(
                                    "LL"
                                  )}
                                </div>
                                <div>
                                  End Date:{" "}
                                  {moment(item?.contract_end_date).format("LL")}
                                </div>
                              </div>
                              <div class="flex pt-2  text-sm text-gray-500">
                                <div class="flex-1 inline-flex items-center">
                                  <p class="">{item?.project_information}</p>
                                </div>
                              </div>
                              {item?.is_contract_completed == false &&
                                (item?.status === "PENDING") == false &&
                                item?.is_payment_done == true && (
                                  <button
                                    onClick={() =>
                                      handleEndTheContract(
                                        item?.id,
                                        item?.hired_users?.id
                                      )
                                    }
                                    className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                                  >
                                    Completed Contract
                                  </button>
                                )}
                              {item?.is_payment_done == false &&
                              (item?.status == "PENDING") == false ? (
                                <button
                                  onClick={() => handlePaymentAction(item?.id)}
                                  className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                                >
                                  Payment here
                                </button>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <Dialog
            open={open}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            PaperProps={{
              style: {
                width: "600px",
                maxWidth: "800px",
              },
            }}
          >
            <DialogTitle>
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Completed Contract: Share Your Review
                </h3>
                {/* <DisabledByDefaultIcon onClick={handleClose} /> */}
              </div>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div class="main-notifaication">
                  <div class="main-notifaicationshow p-4  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="mb-[15px]">
                      <img src="/img/Memorial 1.png" />
                    </div>
                    <h1 className="revieeeee">
                      The contract has been successfully fulfilled.
                    </h1>
                    <div class="flow-root">
                      <div class="">
                        <div class="panel-review">
                          <div class="panel-body-review">
                            <h1 className="revieeeee">Write Your Review</h1>
                            <div class="rating-group">
                              {[1, 2, 3, 4, 5].map((value) => (
                                <div key={value} className="rating-radiobutton">
                                  <input
                                    type="radio"
                                    name="radio1"
                                    id={`radio${value}`}
                                    value={value}
                                    checked={rating === value}
                                    onChange={handleRatingChange}
                                  />
                                  <label
                                    htmlFor={`radio${value}`}
                                    className="radio-inline"
                                  >
                                    {" "}
                                    <span className="rating">
                                      {Array.from({ length: value }).map(
                                        (_, index) => (
                                          <i
                                            key={index}
                                            className="fa fa-star"
                                          ></i>
                                        )
                                      )}
                                    </span>{" "}
                                  </label>
                                </div>
                              ))}
                            </div>

                            <div class="form-group">
                              <label class="label-reviewcontnet">
                                Write Review
                              </label>
                              <div>
                                <textarea
                                  style={{ fontFamily: "Montserrat" }}
                                  placeholder="Write Review"
                                  value={comment}
                                  onChange={(e) => setcomment(e.target.value)}
                                  class="form-control"
                                  rows="8"
                                ></textarea>
                              </div>
                            </div>
                            <div class="form-group">
                              <button
                                onClick={AddRating}
                                class="submit-reviewbtn"
                              >
                                Submit Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default VenderUserList;
