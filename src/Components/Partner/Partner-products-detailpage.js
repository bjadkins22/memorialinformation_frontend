import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import moment from "moment";
import swal from "sweetalert";
import {
  PartnerVenueEventGetAction,
  UserMessageChatSelectAction,
  GetHirePersonDetailsAction,
  GetHiredPersonListAction,
} from "../../Redux/actions/PartnerAction";
import {
  UserGetHiredPatnerAction,
  UserHirePartnerAndVenderAction,
  UserRemovedHiredParterVenderAction,
} from "../../Redux/actions/VenderAction";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllRatingsAction,
  UserAddRatingAction,
} from "../../Redux/actions/VenderAction";
import { useParams } from "react-router-dom";

const Partner_products_detailpage = () => {
  const dispatch = useDispatch();

  const { profileId } = useParams();
  const [myVar, setMyVar] = useState("completed");
  const slideImages = [
    {
      url: "/img/flowwww.jpg",
      caption: "2",
    },
    {
      url: "/img/istockphoto-1491.jpg",
      caption: "3",
    },

    {
      url: "/img/istockp.jpg",
      caption: "4",
    },
  ];

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "600px",
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true,
  };

  const [rerender, setrerender] = useState("");
  const [project_price, setProject_price] = useState("");
  const [title2, settitle2] = useState("");
  const [project_information, setproject_information] = useState("");
  const [contract_start_date, setcontract_start_date] = useState("");
  const [contract_end_date, setcontract_end_date] = useState("");

  const { PartnerVenueEventGet } = useSelector(
    (state) => state.PartnerVenueEventGetReducer
  );

  const { success: successCommet } = useSelector(
    (state) => state.UserAddRatingReducer
  );
  const { GetHiredPersonList } = useSelector(
    (state) => state.GetHiredPersonListReducer
  );
  const { UserGetHiredPatner } = useSelector(
    (state) => state.UserGetHiredPatnerReducer
  );
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
  const isUserHired = UserGetHiredPatner?.hired_users?.some(
    (user) => user?.id == profileId
  );

  useEffect(() => {
    dispatch(UserGetHiredPatnerAction());
  }, [successRemoveHired]);

  // useEffect(() => {
  //   dispatch(GetAllRatingsAction());
  // }, [successCommet]);

  // const { GetAllRatings } = useSelector((state) => state.GetAllRatingsReducer);

  const { userData } = useSelector((state) => state.authReducer);

  const [rating, setRating] = useState(0);

  const [comment, setcomment] = useState("");
  const [title, setTitle] = useState("");

  const AddRating = () => {
    const formData = new FormData();

    formData.append("rating", rating);
    formData.append("comment", comment);
    formData.append("rated_user", profileId);
    formData.append("rated_by_user", userData?.user?.user_id);

    dispatch(UserAddRatingAction(formData));
  };

  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value, 10);
    setRating(selectedRating);
  };

  const { UserMessageChatSelect } = useSelector(
    (state) => state.UserMessageChatSelectRedcuer
  );
  const { GetHiredPersonDetails } = useSelector(
    (state) => state.GetHirePersonDetailsReducer
  );
  useEffect(() => {
    dispatch(UserMessageChatSelectAction());
  }, []);
  const userDetails = UserMessageChatSelect?.map((item) => [
    item.sender,
    item.receiver,
  ]).flat();

  const filteredUserDetails = userDetails?.filter(
    (item) => item?.id !== userData.user?.user_id
  );

  useEffect(() => {
    dispatch(PartnerVenueEventGetAction());
  }, []);
  useEffect(() => {
    dispatch(GetHirePersonDetailsAction(profileId));
    dispatch(GetHiredPersonListAction());
  }, [profileId]);

  const HireHandle = () => {
    const formd = new FormData();
    formd.append("project_price", parseFloat(project_price));
    formd.append("title", title2);
    formd.append("hired_users", parseFloat(profileId));
    formd.append("project_information", project_information);
    formd.append("contract_start_date", contract_start_date);
    formd.append("contract_end_date", contract_end_date);

    dispatch(UserHirePartnerAndVenderAction(formd));
    setrerender(true);
  };
  const RemoveHireHandle = () => {
    dispatch(UserRemovedHiredParterVenderAction(profileId));
    // setRerender(true);
  };
  useEffect(() => {
    if (successHired && rerender) {
      swal({
        title: "Successful",
        text: "",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
      });
      setrerender(false);
      setProject_price("");
      settitle2("");
      setproject_information("");
      setcontract_start_date("");
      setcontract_end_date("");
    }
    if (errorHired && rerender) {
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
  }, [successHired, errorHired, rerender]);
  return (
    <div className="sidebb">
      {/* <div className="imageslider">
        <Slide {...settings}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                className="slider-image-div"
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div> */}

      <div className="my-8">
        <div className="main-containerpartner">
          <div class="container">
            <div className="main-productsshow flex gap-6">
              <div className="mainseconddivprodcts">
                <div class=" page-description">
                  <div class="venue-details">
                    <h2 className="vendername">Description</h2>
                    <p className="memorialmenipartner">
                      {/* Latin words combined with a handful of model sentence
                      structures, to generate Lorem Ipsum which one looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition injected humour or non characteristic
                      words etc. Quisque laoreet mi libero, et tempus lacus
                      venenatis eget. Nulla vitaeipsum inturpis blandit congue
                      ofer ornare inleo. Nulla nibhmi sagittis necaliquet
                      pharetra vitae turpis. Nam tristique mauris necultricies
                      its tristiqu. orbilitelit molestie eget tincidunt luctus
                      consequat sitameturna. Aenean sapienest, rutrum malesuada
                      quamuis tristique tincinibh hasellusut elementum not
                      semlass and aptent taciti sociosqu ad litorarutrum
                      malesuada quamuis tristique torquent per conubia nostra
                      permite inceptos our its it himenaeos aecsed laoreet diam.
                      Crasut auctor ipsusque commodo suscipit onet tristiques
                      viverrarcu idaugue blandit ultricies nibhrhoncus rutrum
                      malesuada tristique. Latin words combined with a handful
                      of model sentence structures to generate Loremere Ipsum
                      which looks reasonable. The generated lorem Ipsum is
                      therefore always free fromes combined with a handful of
                      model repetition injected humour or non characteristic
                      words etc. */}
                      {GetHiredPersonDetails?.user_details?.user_profile
                        ?.description ?? "N/A"}
                    </p>

                    {/* <h2 className="vendername">Venue Facilities</h2>
                    <ul class="check-circle-facilaties">
                      {PartnerVenueEventGet?.[0]?.venue_facility
                        ? PartnerVenueEventGet[0].venue_facility
                            .split(",") // Split the text by commas
                            .map((facility, index) => (
                              <li
                                key={index}
                                className="flex gap-3 items-center"
                              >
                                <i class="fa fa-check-circle venderlistshowcheck"></i>
                                {facility}
                                <br />{" "}
                              </li>
                            ))
                        : "N/A"}
                    </ul>
                    <h2 className="vendername">Why Our Wedding Venue </h2>
                    <ul class="check-circle-facilaties">
                      {PartnerVenueEventGet?.[0]?.why_provide
                        ? PartnerVenueEventGet[0].why_provide
                            .split(",") // Split the text by commas
                            .map((facility, index) => (
                              <li
                                key={index}
                                className="flex gap-3 items-center"
                              >
                                <i class="fa fa-check-circle venderlistshowcheck"></i>
                                {facility}
                                <br />{" "}
                              </li>
                            ))
                        : "N/A"}
                    </ul> */}
                  </div>
                  <div class="container">
                    <div class="main-vender-profile">
                      <div class="dashboard-nav">
                        <ul class="maindashbordoptions">
                          <li
                            onClick={() => {
                              setMyVar("completed");
                            }}
                            className={
                              myVar == "completed"
                                ? "active-dashboard"
                                : "unactive-dashboard"
                            }
                          >
                            <a className="vender-dashboard">
                              <i class="fa fa-dashboard db-icon"></i>Completed (
                              {GetHiredPersonDetails?.ratings?.length || 0})
                            </a>
                          </li>
                          <li
                            onClick={() => {
                              setMyVar("inprogress");
                            }}
                            className={
                              myVar == "inprogress"
                                ? "active-dashboard"
                                : "unactive-dashboard"
                            }
                          >
                            <a className="vender-dashboard">
                              <i class="fa fa-user db-icon"></i>In Progress (
                              {GetHiredPersonDetails?.ratings?.length || 0})
                            </a>
                          </li>
                          {/* {isUserHired ? (
                            <button
                              name="submit"
                              onClick={RemoveHireHandle}
                              class="w-[200px] block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold px-4 py-3 ml-6 uppercase"
                            >
                              End Contract
                            </button>
                          ) : (
                            <button
                              name="submit"
                              onClick={HireHandle}
                              class="w-[200px] block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold px-4 py-3 ml-6 uppercase"
                            >
                              Start Contract
                            </button>
                          )} */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="comments-reviewallsection">
                    <div className="comments-reviewall">
                      {/* comments  */}

                      <div class="review-list">
                        {myVar == "completed" ? (
                          <div class="row">
                            {GetHiredPersonDetails?.ratings?.length <= 0 ? (
                              <div>No Events Completed</div>
                            ) : null}
                            {GetHiredPersonDetails?.ratings?.map((item) => (
                              <>
                                <div class="col-md-2 col-sm-2 hidden-xs">
                                  <div class="user-pic">
                                    {" "}
                                    <img
                                      class="ratedimages rouded-full"
                                      src={
                                        item?.rated_user?.user_profile?.image
                                      }
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-md-10 col-sm-10">
                                  <div class="panel panel-default arrow left">
                                    <div class="panel-body">
                                      <div class="text-left">
                                        {/* <h3 className="comments-work">
                                        The whole experience was Excellent
                                      </h3> */}
                                        <div class="rating-comment">
                                          {item?.rating &&
                                            Array.from(
                                              { length: 5 },
                                              (v, i) => (
                                                <i
                                                  key={i}
                                                  className={`fa fa-star${
                                                    i + 1 <= item.rating
                                                      ? ""
                                                      : "-o"
                                                  }`}
                                                ></i>
                                              )
                                            )}
                                        </div>
                                      </div>
                                      <div class="review-post">
                                        <p>{item?.comment}</p>
                                      </div>
                                      <div class="review-user">
                                        {item.rated_by_user?.first_name}{" "}
                                        {item.rated_by_user?.last_name}
                                        <span class="review-date"></span>
                                        {moment(item?.created_at).format("LL")}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>
                        ) : (
                          <div class="row">
                            {GetHiredPersonDetails?.length <= 0 ? (
                              <div>No Events Completed</div>
                            ) : null}
                            {GetHiredPersonDetails?.hiring_processes?.map(
                              (item) => (
                                <>
                                  <div class="col-md-2 col-sm-2 hidden-xs">
                                    <div class="user-pic">
                                      {" "}
                                      <img
                                        class="ratedimages rouded-full"
                                        src={
                                          item?.hirer_details?.user_profile
                                            ?.image
                                        }
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-10 col-sm-10">
                                    <div class="panel panel-default arrow left">
                                      <div class="panel-body">
                                        <div class="text-left">
                                          <div class="rating-comment">
                                            {item?.hirer_details?.first_name}{" "}
                                            {item?.hirer_details?.last_name}
                                            <span class="ml-3 text-[#b9b9b9]">
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
                                          </div>
                                          <h3 className="comments-work mt-[10px]">
                                            <p>{item?.title}</p>
                                          </h3>
                                        </div>
                                        <div class="review-post">
                                          <p>job in progress</p>
                                        </div>
                                        <div class="review-user">
                                          <span class="review-date"></span>
                                          {moment(item?.contract_start_date).format(
                                            "LL"
                                          )}{" "}
                                          To{" "}
                                          {moment(item?.contract_end_date).format(
                                            "LL"
                                          )}
                                         
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        )}
                      </div>

                      {/* review addd ****************************************8 */}
                      {/* <div class="">
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
                      </div> */}
                      {/* ****************8 */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="firstdivproducts">
                {/* <div class="venue-info flex gap-4 items-center">
                  <div class="capacity">
                    <div className="capactiydivtest">Capacity:</div>
                    <span class="cap-people"> 50 - 300 </span>
                  </div>
                  <div class="pricebox">
                    <div className="capactiydivtest">Avg price:</div>
                    <span class="cap-people">$39.50</span>
                  </div>
                </div> */}

                <div class="mt-6">
                  <div class="well-box" id="inquiry">
                    <h2 className="refineseach">Send Contract details</h2>
                    <p className="memorialmenipartner">
                      Please provide your information for contract approval and
                      to receive the contract confimation.
                    </p>
                    {/* <form class=""> */}
                    <div class="form-group">
                      <label htmlFor="title2" class="control-label-parnterdet">
                        Title:
                      </label>
                      <div class="">
                        <input
                          id="title2"
                          name="title2"
                          type="text"
                          placeholder="Title"
                          class="form-control input-md"
                          value={title2}
                          onChange={(e) => settitle2(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label-parnterdet">
                        Project price:
                      </label>
                      <div class="">
                        <input
                          id="project_price"
                          name="project_price"
                          type="text"
                          placeholder="Project price"
                          class="form-control input-md"
                          value={project_price}
                          onChange={(e) => setProject_price(e.target.value)}
                        />
                        <span class="help-block"> </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        htmlFor="project_information"
                        class="control-label-parnterdet"
                      >
                        Project Information:
                      </label>
                      <div class="">
                        <input
                          id="project_information"
                          name="project_information"
                          type="text"
                          placeholder="Project Information"
                          class="form-control input-md"
                          value={project_information}
                          onChange={(e) =>
                            setproject_information(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div class="default-calender">
                      <div class="form-group">
                        <label class="control-label-parnterdet">
                          Contract Start Date
                        </label>
                        <div class="">
                          <div class="input-group">
                            <input
                              type="date"
                              class="form-control hasDatepicker"
                              id="contract_start_date"
                              placeholder="Start date "
                              min={new Date()}
                              value={contract_start_date}
                              onChange={(e) =>
                                setcontract_start_date(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="default-calender">
                      <div class="form-group">
                        <label
                          htmlFor="contract_end_date"
                          class="control-label-parnterdet"
                        >
                          Contract End Date
                        </label>
                        <div class="">
                          <div class="input-group">
                            <input
                              type="date"
                              class="form-control hasDatepicker"
                              id="contract_end_date"
                              placeholder="End date "
                              min={contract_start_date}
                              value={contract_end_date}
                              onChange={(e) =>
                                setcontract_end_date(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div class="form-group">
                      <label class="control-label-parnterdet">
                        Send me info via
                      </label>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="checkbox-0"
                          value="1"
                          class="styled"
                        />
                        <label class="control-label-parnterdet">E-Mail</label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="checkbox-1"
                          value="2"
                          class="styled"
                        />
                        <label class="control-label-parnterdet">
                          Need Call back
                        </label>
                      </div>
                    </div> */}
                    <div class="form-group">
                      <button
                        name="button"
                        onClick={HireHandle}
                        class="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold px-4 py-3 mt-6 uppercase"
                      >
                        Send Contract
                      </button>
                    </div>
                    {/* </form> */}
                  </div>
                </div>

                <div class="profile-sidebar well-box mt-6">
                  <div class="profile-userpic flex justify-center">
                    <div className=" h-[180px] w-[180px] overflow-hidden">
                      <img
                        src={
                          GetHiredPersonDetails?.user_details?.user_profile
                            ?.image
                        }
                        class="img-responsive ronded-full h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="profile-usertitle">
                    <div class="profile-usertitle-name text-center">
                      <h2 className="vendername">
                        {GetHiredPersonDetails?.user_details?.first_name}{" "}
                        {GetHiredPersonDetails?.user_details?.last_name}{" "}
                      </h2>
                    </div>
                    <div class="profile-address">
                      <i class="fa fa-map-marker showvenderlocation"></i>{" "}
                      {
                        GetHiredPersonDetails?.user_details?.user_profile
                          ?.address
                      }
                    </div>
                    <div class="profile-website">
                      <i class="fa fa-link"></i>
                      <a href="#">http://www.myvenue.com</a>
                    </div>
                  </div>
                </div>

                {/* <div class="social-sidebar side-box mt-6">
                  <ul class="listnone follow-icon">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook-square followsocialmedia"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus-square followsocialmedia"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram followsocialmedia"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-flickr followsocialmedia"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-youtube-square followsocialmedia"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter-square followsocialmedia"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner_products_detailpage;
