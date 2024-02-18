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
import { forgetpassword } from "../../Redux/actions/AuthAction";
import { getWalletBalanceAction } from "../../Redux/actions/paymentAction";
import { useDropzone } from "react-dropzone";
import swal from "sweetalert";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import { validations } from "../../utils";
import { Frontend_URL } from "../../environment";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
  const { userData } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const neviagte = useNavigate();

  const [rerender, setRerender] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumer, setPhonenumer] = useState("");
  const [gender, setgender] = useState("");
  const [birthday, setbirthday] = useState(new Date());
  const [email, setEmail] = useState("");
  const [banknumber, setbacknumber] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [description, setDescription] = useState("");
  const [github, setgithub] = useState("");
  const [twitter, settwitter] = useState("");
  const [instagram, setinstagram] = useState("");
  const [facebook, setfacebook] = useState("");
  const [website, setwebsite] = useState("");

  const [address, setaddress] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  useEffect(() => {
    dispatch(ProfileDetailsGetAction(userData?.user?.user_id));
  }, []);

  const { success, error, message } = useSelector(
    (state) => state.ProfileUpadteReducer
  );

  const { success: forgetpasswordsucesss, error: error1 } = useSelector(
    (state) => state.forgetreducer
  );

  const { getWalletBalance } = useSelector(
    (state) => state.getWalletBalanceReducer
  );
  const { ProfileDetailsGet } = useSelector(
    (state) => state.ProfileDetailsGetReducer
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

  useEffect(() => {
    if (ProfileDetailsGet) {
      setFirstname(ProfileDetailsGet?.first_name);
      setLastname(ProfileDetailsGet?.last_name);
      setPhonenumer(ProfileDetailsGet?.phone_number);
      setgender(ProfileDetailsGet?.gender);
      // setbirthday(ProfileDetailsGet?.birthday);
      setaddress(ProfileDetailsGet?.address);
      setEventImage(ProfileDetailsGet?.image);
      setbacknumber(ProfileDetailsGet?.bank_account_number);
      setcompanyname(ProfileDetailsGet?.company_name);
      setDescription(ProfileDetailsGet?.description);

      setgithub(ProfileDetailsGet?.github);
      settwitter(ProfileDetailsGet?.twitter);
      setinstagram(ProfileDetailsGet?.instagram);
      setfacebook(ProfileDetailsGet?.facebook);
      setwebsite(ProfileDetailsGet?.website);

      const birthdayDate = new Date(ProfileDetailsGet?.dob);
      setbirthday(birthdayDate);

      setEmail(ProfileDetailsGet?.email);
    }
  }, [ProfileDetailsGet]);

  const [errors, setErrors] = useState({
    email: "",
  });

  const hanfleUpdateProfile = () => {
    const formData = new FormData();

    // const userProfileData = {
    //   address: address,
    //   gender: gender,
    //   dob: moment(birthday).format("YYYY-MM-DD"),
    // };
    if (firstname) {
      formData.append("first_name", firstname);
    }
    if (phonenumer) {
      formData.append("last_name", lastname);
    }

    if (firstname) {
      formData.append("phone_number", phonenumer);
    }

    if (imageChanged) {
      formData.append("user_profile.image", eventImage?.[0]);
    }
    if (description) {
      formData.append("user_profile.description", description);
    }
    if (address) {
      formData.append("user_profile.address", address);
    }
    if (gender) {
      formData.append("user_profile.gender", gender);
    }

    if (github) {
      formData.append("user_profile.github", github);
    }

    if (twitter) {
      formData.append("user_profile.twitter", twitter);
    }
    if (instagram) {
      formData.append("user_profile.instagram", instagram);
    }
    if (facebook) {
      formData.append("user_profile.facebook", facebook);
    }
    if (website) {
      formData.append("user_profile.website", website);
    }

    // if (
    //   userData?.user?.account_type === 2 ||
    //   userData?.user?.account_type === 3
    // )

    // {
    if (banknumber) {
      formData.append("user_partner.bank_account_number", banknumber);
    }

    if (companyname) {
      formData.append("user_partner.company_name", companyname);
    }
    // }
    if (
      userData?.user?.account_type == 0 ||
      userData?.user?.account_type == 1
    ) {
      if (birthday) {
        formData.append(
          "user_profile.dob",
          moment(birthday).format("YYYY-MM-DD")
        );
      }
    }
    dispatch(ProfileUpadteAction(userData?.user?.user_id, formData));
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
    dispatch(getWalletBalanceAction());
  }, []);

  useEffect(() => {
    if (forgetpasswordsucesss && rerender) {
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
      setoldpassword();
      setnewpassword();
      setconfirmpassword();
    }
    if (error1 && rerender) {
      swal({
        title: error1,
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [forgetpasswordsucesss, rerender, error1]);

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

  const [openUpdatePassword, setopenUpdatePassword] = useState(false);
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleClickOpenUpdate = () => {
    const userProfileData = {
      email: userData?.user?.email,
      current_password: oldpassword,
      password: newpassword,
      confirm_password: confirmpassword,
    };
    dispatch(forgetpassword(userProfileData));
    setRerender(true);
  };

  const handleCloseUpdate = () => {
    setopenUpdatePassword(false);
  };

  const [emailUpdate, setEmailUpdate] = useState("");

  const validateSubmit = (e) => {
    e.preventDefault();

    const tempErrors = {
      emailUpdate: validations.email(emailUpdate),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    InviteUserSubmit();
  };

  const InviteUserSubmit = () => {
    const formData = new FormData();
    formData.append("invitee_email", emailUpdate);

    // dispatch(InviteUserAction(formData));
    // setEmailsendRender(true);
  };

  return (
    <div>
      <div className="#">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Profile</h1>
          <div className=" bg-white">
            <div>
              <div
                style={{
                  backgroundImage: `url(${Frontend_URL}img/beautiful-church-.jpg)`,
                }}
                class="tp-dashboard-head"
              >
                <div class="container">
                  <div class="main-vender-profile">
                    <div class="profile-header flex items-center gap-8">
                      <div class="profile-pic">
                        {eventImage ? (
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
                        )}
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
                                    {firstname ?? "N/A"} {lastname ?? "N/A"}{" "}
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
                                                {eventImage ? (
                                                  <img
                                                    src={
                                                      eventImage?.[0]?.preview
                                                        ? eventImage?.[0]
                                                            ?.preview
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
                                                )}
                                              </div>
                                            </div>

                                            <div class="mt-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                {firstname} {lastname ?? "N/A"}
                                              </h6>
                                              Wallet Balance: $
                                              {getWalletBalance?.[0]?.balance ??
                                                "N/A"}
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
                                                company_name
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
                                              {ProfileDetailsGet?.website ??
                                                "N/A"}
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
                                            <span class="">
                                              {" "}
                                              {ProfileDetailsGet?.github ??
                                                "N/A"}
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
                                                class="feather feather-twitter mr-2 icon-inline text-info"
                                              >
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                              </svg>
                                              Twitter
                                            </h6>
                                            <span class="">
                                              {" "}
                                              {ProfileDetailsGet?.twitter ??
                                                "N/A"}
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
                                            <span class="">
                                              {" "}
                                              {ProfileDetailsGet?.instagram ??
                                                "N/A"}
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
                                                class="feather feather-facebook mr-2 icon-inline text-primary"
                                              >
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                              </svg>
                                              Facebook
                                            </h6>
                                            <span class="">
                                              {" "}
                                              {ProfileDetailsGet?.facebook ??
                                                "N/A"}
                                            </span>
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
                                              {firstname ?? "N/A"}{" "}
                                              {lastname ?? "N/A"}
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
                                              {ProfileDetailsGet?.email ??
                                                "N/A"}
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
                                              {phonenumer ?? "N/A"}
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
                                              {gender ?? "N/A"}
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
                                              {address ?? "N/A"}
                                            </div>
                                          </div>
                                          <hr />

                                          {userData?.user?.account_type == 0 ||
                                            (userData?.user?.account_type ==
                                              1 && (
                                              <>
                                                <div class="row py-3">
                                                  <div class="col-sm-3">
                                                    <h6 class="mb-0 profilelabelshow">
                                                      Birthday
                                                    </h6>
                                                  </div>
                                                  <div class="col-sm-9  resultprofile">
                                                    {ProfileDetailsGet?.dob ??
                                                      "N/A"}
                                                  </div>
                                                </div>
                                              </>
                                            ))}
                                          <hr />

                                          <div class="row py-3">
                                            <div class="col-sm-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                Company
                                              </h6>
                                            </div>
                                            <div class="col-sm-9  resultprofile">
                                              {ProfileDetailsGet?.company_name ??
                                                "N/A"}
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
                                              {ProfileDetailsGet?.bank_account_number ??
                                                "N/A"}
                                            </div>
                                          </div>
                                          <div class="row py-3">
                                            <div class="col-sm-3">
                                              <h6 class="mb-0 profilelabelshow">
                                                Description
                                              </h6>
                                            </div>
                                            <div class="col-sm-9  resultprofile">
                                              {ProfileDetailsGet?.description ??
                                                "N/A"}
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
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* invite member popup */}

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseUpdate}
          PaperProps={{
            style: {
              width: "600px",
              maxWidth: "800px",
            },
          }}
        >
          <DialogTitle>
            <div className="flex justify-between">
              <div>
                <h1 className="edit-profile">Invite User</h1>
              </div>
              <div>
                <svg
                  onClick={handleCloseUpdate}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
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
            <DialogContentText>
              <div>
                <div class="p-4 h-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="flow-root">
                    <div className="input-boxdiv mb-6">
                      <p className="heading-title-legacypage">Email Address</p>
                      <input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors({ ...errors, email: null });
                        }}
                        type="email"
                        placeholder="Enter Email Address"
                        className="input-legacy-typeenter  w-full px-4 py-3 rounded-lg  bg-white mt-2 border focus:outline-none"
                      />
                      <span
                        style={{
                          color: "red",
                          fontSize: "15px",
                          opacity: errors.email ? 1 : 0,
                        }}
                      >
                        {errors.email ?? "valid"}
                      </span>
                    </div>
                  </div>
                  <div className="input-add">
                    <div className="flex gap-4 mt-12">
                      <button
                        onClick={validateSubmit}
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
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>

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
                    {ProfileDetailsGet?.first_name ?? "N/A"}
                    {ProfileDetailsGet?.last_name ?? "N/A"}
                  </h5>
                </div>

                <div className="welcom-black bg-white w-full md:px-10 py-10">
                  <div className="w-full h-100">
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
                            placeholder="Enter Email Address"
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
                            placeholder="Enter Phone number"
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
                            placeholder="Enter Address"
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
                        {userData?.user?.account_type == 0 ||
                          (userData?.user?.account_type == 1 && (
                            <div>
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <DesktopDatePicker
                                  // label="start Date"
                                  //   inputFormat="DD-MM-YYYY"
                                  formatDate={(birthday) =>
                                    moment(new Date()).format("DD-MM-YYYY")
                                  }
                                  // minDate={new Date()}
                                  value={birthday}
                                  onChange={(e) => {
                                    setbirthday(e);
                                  }}
                                  // disableFuture
                                  maxDate={new Date()}
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </LocalizationProvider>
                            </div>
                          ))}

                        {/* {(userData?.user?.account_type == 2) ||
                          (userData?.user?.account_type == 3 && ( */}
                        <>
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

                          <div className="input-boxdiv mt-4">
                            <label className="block text-gray-700">
                              Github Link
                            </label>
                            <input
                              value={github}
                              onChange={(e) => {
                                setgithub(e.target.value);
                              }}
                              type="text"
                              placeholder="  Github Link"
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
                              Twitter
                            </label>
                            <input
                              value={twitter}
                              onChange={(e) => {
                                settwitter(e.target.value);
                              }}
                              type="text"
                              placeholder="Twitter"
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
                              Instagram
                            </label>
                            <input
                              value={instagram}
                              onChange={(e) => {
                                setinstagram(e.target.value);
                              }}
                              type="text"
                              placeholder="Instagram"
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
                              Facebook
                            </label>
                            <input
                              value={facebook}
                              onChange={(e) => {
                                setfacebook(e.target.value);
                              }}
                              type="text"
                              placeholder="Facebook"
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
                              Website
                            </label>
                            <input
                              value={website}
                              onChange={(e) => {
                                setwebsite(e.target.value);
                              }}
                              type="text"
                              placeholder="Website"
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
                              Description
                            </label>
                            <textarea
                              value={description}
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                              type="textarea"
                              placeholder="Description"
                              className="w-full px-4 h-[120px] py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none "
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
                        </>
                        {/* ))} */}
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

export default Profile;
