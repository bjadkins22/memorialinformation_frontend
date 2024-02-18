import React, { useState, useCallback, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ProfileDetailsGetAction,
  ProfileUpadteAction,
} from "../../Redux/actions/UserAction";
import { useDropzone } from "react-dropzone";
import swal from "sweetalert";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import { validations } from "../../utils";
import {
  IsVerifiedUserListAction,
  PartnerProfileGetDataAction,
  PartnerProfileUpdateAction,
} from "../../Redux/actions/PartnerAction";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Partner_profile = () => {
  const { userData } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const neviagte = useNavigate();

  const [rerender, setRerender] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumer, setPhonenumer] = useState("");
  const [gender, setgender] = useState("");
  const [birthday, setbirthday] = useState("");
  const [email, setEmail] = useState("");

  const [address, setaddress] = useState("");
  const [banknumber, setbacknumber] = useState("");
  const [companyname, setcompanyname] = useState("");

  const [eventImage, setEventImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);
  const { success, error, message } = useSelector(
    (state) => state.PartnerProfileUpdateReducer
  );

  useEffect(() => {
    dispatch(PartnerProfileGetDataAction(userData?.user?.user_id));
  }, [success]);

  const { PartnerProfileGetData: ProfileDetailsGet } = useSelector(
    (state) => state.PartnerProfileGetDataReducer
  );  

  useEffect(() => {
    if (ProfileDetailsGet) {
      setFirstname(ProfileDetailsGet?.custom_user?.first_name);
      setLastname(ProfileDetailsGet?.custom_user?.last_name);
      setPhonenumer(ProfileDetailsGet?.custom_user?.phone_number);
      setgender(ProfileDetailsGet?.user_profile?.gender);
      setaddress(ProfileDetailsGet?.user_profile?.address);
      setEventImage(ProfileDetailsGet?.user_profile?.image);
      setbacknumber(ProfileDetailsGet?.partner?.bank_account_number);
      setcompanyname(ProfileDetailsGet?.partner?.company_name);
      setbirthday(ProfileDetailsGet?.user_profile?.dob);
      setEmail(ProfileDetailsGet?.custom_user?.email);
    }
  }, [ProfileDetailsGet]);

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    phonenumer: "",
    address: "",
    gender: "",
    companyname: "",
  });

  const validateSubmit = (e) => {
    e.preventDefault();

    const tempErrors = {
      email: validations.RequiredFiled(email),
      lastname: validations.RequiredFiled(lastname),
      phonenumer: validations.RequiredFiled(phonenumer),
      address: validations.RequiredFiled(address),
      gender: validations.RequiredFiled(gender),
      companyname: validations.RequiredFiled(companyname),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    hanfleUpdateProfile();
  };

  const hanfleUpdateProfile = () => {
    const formData = new FormData();
    if (firstname) {
      formData.append("custom_user[first_name]", firstname);
    }
    if (phonenumer) {
      formData.append("custom_user[last_name]", lastname);
    }

    if (firstname) {
      formData.append("custom_user[phone_number]", phonenumer);
    }

    if (imageChanged) {
      formData.append("user_profile[image]", eventImage?.[0]);
    }

    if (address) {
      formData.append("user_profile[address]", address);
    }

    if (gender) {
      formData.append("user_profile[gender]", gender);
    }
    if (banknumber) {
      formData.append("partner[bank_account_number]", banknumber);
    }

    if (companyname) {
      formData.append("partner[company_name]", companyname);
    }

    dispatch(PartnerProfileUpdateAction(userData?.user?.user_id, formData));
    setRerender(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: useCallback(
      (acceptedFiles) => {
        setEventImage(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              title: file?.name,
            })
          )
        );
        setImageChanged(true);
      },
      [eventImage]
    ),
  });

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: " ",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      handleClose();
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

  const [myVar, setMyVar] = useState("dashboard");

  const { IsVerifiedUserList } = useSelector(
    (state) => state.IsVerifiedUserListRedcuer
  );

  const { success: successAddTutorail, error: errorAddTutorail } = useSelector(
    (state) => state.IsVerifiedVedioSeeUserRedcuer
  );

  useEffect(() => {
    dispatch(IsVerifiedUserListAction(userData?.user?.user_id));
  }, [userData, successAddTutorail]);

  return (
    <div>
      <div>
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Profile</h1>
          <div className=" bg-white">
            <div>
              <div class="tp-dashboard-head">
                <div class="container">
                  <div class="main-vender-profile">
                    <div class="profile-header flex items-center gap-8">
                      <div class="profile-pic">
                        <div className="profile-tickicon relative">
                          <img
                            src={
                              eventImage?.[0]?.preview
                                ? eventImage?.[0]?.preview
                                : eventImage
                            }
                            class="profileimageshowedit"
                            width="150"
                          />
                          {userData?.user?.account_type == 2 && (
                            <>
                              {IsVerifiedUserList?.account_verified == true && (
                                <img
                                  src="/img/bluetick-removebg-preview.png"
                                  alt=""
                                  className="blue-tickimageprofile"
                                />
                              )}
                            </>
                          )}
                        </div>

                        {/* {eventImage ? (
                          <img
                            src={
                              eventImage?.[0]?.preview
                                ? eventImage?.[0]?.preview
                                : eventImage
                            }
                            class="profileimageshowedit"
                            width="150"
                          />
                        ) : (
                          <img
                            alt="Admin"
                            class="profileimageshowedit"
                            width="150"
                            src="/img/noimage.png"
                          />
                        )} */}
                      </div>
                      <div class="profile-info ">
                        <h1 class="profile-title">
                          {firstname ?? "N/A"} {lastname ?? "N/A"}
                          <small>Welcome Back </small>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabshowchangeview">
                <div class="container">
                  <div class="main-vender-profile">
                    <div class="dashboard-nav">
                      <ul class="maindashbordoptions">
                        <li
                          onClick={() => {
                            setMyVar("dashboard");
                          }}
                          className={
                            myVar == "dashboard"
                              ? "active-dashboard"
                              : "unactive-dashboard"
                          }
                        >
                          <a className="vender-dashboard">
                            <i class="fa fa-dashboard db-icon"></i>My Dashboard
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setMyVar("myprofile");
                          }}
                          className={
                            myVar == "myprofile"
                              ? "active-dashboard"
                              : "unactive-dashboard"
                          }
                        >
                          <a className="vender-dashboard">
                            <i class="fa fa-user db-icon"></i>My Profile
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setMyVar("mylisting");
                          }}
                          className={
                            myVar == "mylisting"
                              ? "active-dashboard"
                              : "unactive-dashboard"
                          }
                        >
                          <a className="vender-dashboard">
                            <i class="fa fa-list db-icon"></i>My Listing{" "}
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setMyVar("addlisting");
                          }}
                          className={
                            myVar == "addlisting"
                              ? "active-dashboard"
                              : "unactive-dashboard"
                          }
                        >
                          <a className="vender-dashboard">
                            <i class="fa fa-plus-square db-icon"></i>Add listing
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setMyVar("pricing");
                          }}
                          className={
                            myVar == "pricing"
                              ? "active-dashboard"
                              : "unactive-dashboard"
                          }
                        >
                          <a className="vender-dashboard">
                            <i class="fa fa-list-alt db-icon"></i>Pricing Plan
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container">
                <div class="main-vender-profile">
                  {myVar == "dashboard" ? (
                    <>
                      <div class="">
                        <div class="container">
                          <div class="">
                            <div class="">
                              <div class="dashboard-page-head">
                                <div class="page-header">
                                  <h1 className="vendername-show">
                                    {firstname ?? "N/A"} {lastname ?? "N/A"}{" "}
                                    Dashboard
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="">
                            <div class="">
                              <div class="couple-board">
                                <div class="">
                                  <div class="">
                                    <div class="coming-soon-content text-center pinside80">
                                      <h4 className="coming-soon">
                                        Comming Soon Features
                                      </h4>
                                      <h1 class="stayconneted">
                                        Stay tuned more to come
                                      </h1>
                                      <a class="thanksforwatbtn">
                                        Thanks for wait
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : myVar == "myprofile" ? (
                    <>
                      <div class="">
                        <div class="container">
                          <div class="">
                            <div class="">
                              <div class="dashboard-page-head">
                                <div class="page-header">
                                  <h1 className="vendername-show">
                                    {ProfileDetailsGet?.custom_user
                                      ?.first_name ?? "N/A"}{" "}
                                    {ProfileDetailsGet?.custom_user
                                      ?.last_name ?? "N/A"}{" "}
                                    Dashboard{" "}
                                    <small className="text-[18px] text-gray-500">
                                      Edit and Update your profile.
                                    </small>
                                  </h1>
                                </div>
                              </div>

                              <div class="container">
                                <div class="main-body">
                                  <div class="row py-3 gutters-sm">
                                    <div class="col-md-4 mb-3">
                                      <div class="card">
                                        <div class="card-body">
                                          <div class="d-flex flex-column align-items-center text-center">
                                            <div className="profile-imagephoto">
                                              <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {ProfileDetailsGet?.user_profile
                                                  ?.image ? (
                                                  <img
                                                    src={
                                                      ProfileDetailsGet
                                                        ?.user_profile
                                                        ?.image?.[0]?.preview
                                                        ? ProfileDetailsGet
                                                            ?.user_profile
                                                            ?.image?.[0]
                                                            ?.preview
                                                        : ProfileDetailsGet
                                                            ?.user_profile
                                                            ?.image
                                                    }
                                                    class="profileimageshowedit"
                                                    width="150"
                                                  />
                                                ) : (
                                                  <img
                                                    alt="Admin"
                                                    class="profileimageshowedit"
                                                    width="150"
                                                    src="/img/noimage.png"
                                                  />
                                                )}
                                              </div>
                                            </div>

                                            <div class="mt-3">
                                              <h4>
                                                {
                                                  ProfileDetailsGet?.custom_user
                                                    ?.first_name
                                                }{" "}
                                                {ProfileDetailsGet?.custom_user
                                                  ?.last_name ?? "N/A"}
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="card mt-3">
                                        <ul class="list-group list-group-flush">
                                          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 class="mb-0 profilelabelshow">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-globe mr-2 icon-inline"
                                              >
                                                <circle
                                                  cx="12"
                                                  cy="12"
                                                  r="10"
                                                ></circle>
                                                <line
                                                  x1="2"
                                                  y1="12"
                                                  x2="22"
                                                  y2="12"
                                                ></line>
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                              </svg>
                                              Website
                                            </h6>
                                            <span class="">
                                              https://bootdey.com
                                            </span>
                                          </li>
                                          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 class="mb-0 profilelabelshow">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-github mr-2 icon-inline"
                                              >
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                              </svg>
                                              Github
                                            </h6>
                                            <span class="">bootdey</span>
                                          </li>
                                          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 class="mb-0 profilelabelshow">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-twitter mr-2 icon-inline text-info"
                                              >
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                              </svg>
                                              Twitter
                                            </h6>
                                            <span class="">@bootdey</span>
                                          </li>
                                          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 class="mb-0 profilelabelshow">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-instagram mr-2 icon-inline text-danger"
                                              >
                                                <rect
                                                  x="2"
                                                  y="2"
                                                  width="20"
                                                  height="20"
                                                  rx="5"
                                                  ry="5"
                                                ></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line
                                                  x1="17.5"
                                                  y1="6.5"
                                                  x2="17.51"
                                                  y2="6.5"
                                                ></line>
                                              </svg>
                                              Instagram
                                            </h6>
                                            <span class="">bootdey</span>
                                          </li>
                                          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 class="mb-0 profilelabelshow">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-facebook mr-2 icon-inline text-primary"
                                              >
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                              </svg>
                                              Facebook
                                            </h6>
                                            <span class="">bootdey</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card mb-3">
                                        <div class="card-body">
                                          <div class="row py-3">
                                            <div class="col-sm-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                Full Name
                                              </h6>
                                            </div>
                                            <div class="col-sm-9  resultprofile">
                                              {ProfileDetailsGet?.custom_user
                                                ?.first_name ?? "N/A"}
                                              {ProfileDetailsGet?.custom_user
                                                ?.last_name ?? "N/A"}
                                            </div>
                                          </div>
                                          <hr />

                                          <div class="row py-3">
                                            <div class="col-sm-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                Email
                                              </h6>
                                            </div>
                                            <div class="col-sm-9  resultprofile">
                                              {ProfileDetailsGet?.custom_user
                                                ?.email ?? "N/A"}
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="row py-3">
                                            <div class="col-sm-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                Phone
                                              </h6>
                                            </div>
                                            <div class="col-sm-9  resultprofile">
                                              {ProfileDetailsGet?.custom_user
                                                ?.phone_number ?? "N/A"}
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="row py-3">
                                            <div class="col-sm-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                Gender
                                              </h6>
                                            </div>
                                            <div class="col-sm-9  resultprofile">
                                              {ProfileDetailsGet?.user_profile
                                                ?.gender ?? "N/A"}
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="row py-3">
                                            <div class="col-sm-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                Address
                                              </h6>
                                            </div>
                                            <div class="col-sm-9  resultprofile">
                                              {ProfileDetailsGet?.user_profile
                                                ?.address ?? "N/A"}
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="row py-3">
                                            <div class="col-sm-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                Company
                                              </h6>
                                            </div>
                                            <div class="col-sm-9  resultprofile">
                                              {ProfileDetailsGet?.partner
                                                ?.company_name ?? "N/A"}
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="row py-3">
                                            <div class="col-sm-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                Baank Account Number
                                              </h6>
                                            </div>
                                            <div class="col-sm-9  resultprofile">
                                              {ProfileDetailsGet?.partner
                                                ?.bank_account_number ?? "N/A"}
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="row py-3">
                                            <div class="col-sm-12">
                                              <div
                                                onClick={handleClickOpen}
                                                class="btn btn-info "
                                                target="__blank"
                                              >
                                                Edit
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container"></div>
                      </div>
                    </>
                  ) : myVar == "mylisting" ? (
                    <>
                      {" "}
                      <div class="">
                        <div class="container">
                          <div class="">
                            <div class="">
                              <div class="dashboard-page-head">
                                <div class="page-header">
                                  <h1 className="vendername-show">
                                    {ProfileDetailsGet?.custom_user
                                      ?.first_name ?? "N/A"}{" "}
                                    {ProfileDetailsGet?.custom_user
                                      ?.last_name ?? "N/A"}{" "}
                                    Dashboard
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="">
                            <div class="">
                              <div class="couple-board">
                                <div class="">
                                  <div class="">
                                    <div class="coming-soon-content text-center pinside80">
                                      <h4 className="coming-soon">
                                        Comming Soon Features
                                      </h4>
                                      <h1 class="stayconneted">
                                        Stay tuned more to come
                                      </h1>
                                      <a class="thanksforwatbtn">
                                        Thanks for wait
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : myVar == "addlisting" ? (
                    <>
                      {" "}
                      <div class="">
                        <div class="container">
                          <div class="">
                            <div class="">
                              <div class="dashboard-page-head">
                                <div class="page-header">
                                  <h1 className="vendername-show">
                                    {ProfileDetailsGet?.custom_user
                                      ?.first_name ?? "N/A"}{" "}
                                    {ProfileDetailsGet?.custom_user
                                      ?.last_name ?? "N/A"}{" "}
                                    Dashboard
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="">
                            <div class="">
                              <div class="couple-board">
                                <div class="">
                                  <div class="">
                                    <div class="coming-soon-content text-center pinside80">
                                      <h4 className="coming-soon">
                                        Comming Soon Features
                                      </h4>
                                      <h1 class="stayconneted">
                                        Stay tuned more to come
                                      </h1>
                                      <a class="thanksforwatbtn">
                                        Thanks for wait
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : myVar == "pricing" ? (
                    <>
                      {" "}
                      <div class="">
                        <div class="container">
                          <div class="">
                            <div class="">
                              <div class="dashboard-page-head">
                                <div class="page-header">
                                  <h1 className="vendername-show">
                                    {firstname ?? "N/A"} {lastname ?? "N/A"}{" "}
                                    Dashboard
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                          <div class="">
                            <div class="">
                              <div class="couple-board">
                                <div class="">
                                  <div class="">
                                    <div class="coming-soon-content text-center pinside80">
                                      <h4 className="coming-soon">
                                        Comming Soon Features
                                      </h4>
                                      <h1 class="stayconneted">
                                        Stay tuned more to come
                                      </h1>
                                      <a class="thanksforwatbtn">
                                        Thanks for wait
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "1120px",
              maxWidth: "1200px",
            },
          }}
        >
          <DialogTitle>
            <div className="flex justify-between">
              <div>
                <h1 className="edit-profile">Edit Profile</h1>
              </div>
              <div>
                <svg
                  onClick={handleClose}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer	"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div>
                <div className="mt-8 text-center">
                  <div className="profile-imagephoto">
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {eventImage ? (
                        <img
                          src={
                            eventImage?.[0]?.preview
                              ? eventImage?.[0]?.preview
                              : eventImage
                          }
                          alt=""
                          className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        />
                      ) : (
                        <img
                          className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                          src="/img/noimage.png"
                        />
                      )}
                      <i
                        className="fa fa-edit text-lg text-gray-800"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>

                  <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                    {ProfileDetailsGet?.custom_user?.first_name ?? "N/A"}
                    {ProfileDetailsGet?.custom_user?.last_name ?? "N/A"}
                  </h5>
                </div>

                <div className="welcom-black bg-white w-full md:px-10 py-10">
                  <div className="w-full h-100">
                    <div className="imageheader-contnet flex justify-center items-center"></div>

                    <form className="mt-6">
                      <div className="grid sm:grid-cols-2 gap-4 xs:grid-cols-1">
                        <div className="input-boxdiv">
                          <label className="block text-grey-700">
                            First Name
                          </label>
                          <input
                            type="text"
                            value={firstname}
                            onChange={(e) => {
                              setFirstname(e.target.value);
                            }}
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          {/* <span
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    opacity: errors.first_name ? 1 : 0,
                                  }}
                                >
                                  {errors.first_name ?? "valid"}
                                </span> */}
                        </div>

                        <div className="input-boxdiv">
                          <label className="block text-grey-700">
                            Last Name
                          </label>
                          <input
                            value={lastname}
                            onChange={(e) => {
                              setLastname(e.target.value);
                            }}
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          {/* <span
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    opacity: errors.last_name ? 1 : 0,
                                  }}
                                >
                                  {errors.last_name ?? "valid"}
                                </span> */}
                        </div>

                        <div className="input-boxdiv mt-4">
                          <label className="block text-gray-700">
                            Email Address
                          </label>
                          <input
                            disabled
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          {/* <span
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    opacity: errors.email ? 1 : 0,
                                  }}
                                >
                                  {errors.email ?? "valid"}
                                </span> */}
                        </div>

                        <div className="input-boxdiv mt-4">
                          <label className="block text-grey-700">
                            Phone Number
                          </label>
                          <input
                            value={phonenumer}
                            onChange={(e) => {
                              setPhonenumer(e.target.value);
                            }}
                            type="text"
                            placeholder="Phone number"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          {/* <span
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    opacity: errors.phone_number ? 1 : 0,
                                  }}
                                >
                                  {errors.phone_number ?? "valid"}
                                </span> */}
                        </div>

                        <div className="input-boxdiv mt-4">
                          <label className="block text-gray-700">Address</label>
                          <input
                            value={address}
                            onChange={(e) => {
                              setaddress(e.target.value);
                            }}
                            type="text"
                            placeholder="Address"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          {/* <span
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    opacity: errors.password ? 1 : 0,
                                  }}
                                >
                                  {errors.password ?? "valid"}
                                </span> */}
                        </div>

                        <div className="input-boxdiv mt-4">
                          <label className="block text-gray-700">Gender</label>
                          <select
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                            value={gender}
                            onChange={(e) => {
                              setgender(e.target.value);
                            }}
                          >
                            <option value="">select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                          </select>
                          {/* <span
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    opacity: errors.partner_type ? 1 : 0,
                                  }}
                                >
                                  {errors.partner_type ?? "valid"}
                                </span> */}
                        </div>

                        <div className="input-boxdiv mt-4">
                          <label className="block text-gray-700">
                            Bank Account Number
                          </label>
                          <input
                            value={banknumber}
                            onChange={(e) => {
                              setbacknumber(e.target.value);
                            }}
                            type="text"
                            placeholder="Bank Account Number"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          {/* <span
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    opacity: errors.password ? 1 : 0,
                                  }}
                                >
                                  {errors.password ?? "valid"}
                                </span> */}
                        </div>

                        <div className="input-boxdiv mt-4">
                          <label className="block text-gray-700">
                            Company Name
                          </label>
                          <input
                            value={companyname}
                            onChange={(e) => {
                              setcompanyname(e.target.value);
                            }}
                            type="text"
                            placeholder="Company Name"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                          {/* <span
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    opacity: errors.password ? 1 : 0,
                                  }}
                                >
                                  {errors.password ?? "valid"}
                                </span> */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className="input-add">
              <div className="flex gap-4 mt-12">
                <button
                  onClick={hanfleUpdateProfile}
                  // onClick={validateSubmit}
                  type="button"
                  className="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200  "
                >
                  Save
                </button>
                <button
                  onClick={handleClose}
                  type="button"
                  className="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
                >
                  Cancel
                </button>
              </div>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Partner_profile;
