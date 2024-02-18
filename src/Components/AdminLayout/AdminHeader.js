import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  AllInviteMemberListAction,
  InviteUserRequestAcceptAction,
  ProfileDetailsGetAction,
  RelTimeNotificationAction,
  RelTimeNotificationUpdateAction,
} from "../../Redux/actions/UserAction";
import { LogoutAction, forgetpassword } from "../../Redux/actions/AuthAction";
import swal from "sweetalert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { IsVerifiedUserListAction } from "../../Redux/actions/PartnerAction";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import LockResetIcon from "@mui/icons-material/LockReset";
import { validations } from "../../utils";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.authReducer);
  const [profileToggle, setProfileToggle] = useState(false);

  const handleClickProfile = () => {
    setProfileToggle(!profileToggle);
  };

  const { success, error, message } = useSelector(
    (state) => state.ProfileUpadteReducer
  );

  const { ProfileDetailsGet } = useSelector(
    (state) => state.ProfileDetailsGetReducer
  );

  useEffect(() => {
    dispatch(ProfileDetailsGetAction(userData?.user?.user_id));
  }, [success]);

  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setNotification(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener when the component unmounts to avoid memory leaks
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const notifaicationdownRef = useRef(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");

    dispatch(LogoutAction());
    navigate("/login");
    swal({
      title: "",
      icon: "/img/Memorial Information Logo.png",
      text: "Log out successfully!  ",
      className: "successAlert",
      buttons: false,
      timer: 1000,
      open: true,
    });
  };

  const [Notification, setNotification] = useState(true);

  const { AllInviteMemberList } = useSelector(
    (state) => state.AllInviteMemberListReducer
  );

  const {
    success: successinviteaccept,
    error: errorinviteaccept,
    message: inviteMessage,
  } = useSelector((state) => state.InviteUserRequestAcceptReducer);

  useEffect(() => {
    dispatch(AllInviteMemberListAction());
  }, [successinviteaccept]);

  const handleAccpetRequest = (userid, statustype) => {
    const fromData = new FormData();

    fromData.append("invitee_accepted", statustype);
    dispatch(InviteUserRequestAcceptAction(userid, fromData, statustype));

    setRerender(true);
  };

  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (successinviteaccept && rerender) {
      swal({
        title: " ",
        text: inviteMessage,
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      handleClose();
    }
    if (errorinviteaccept && rerender) {
      swal({
        title: "Error",
        text: errorinviteaccept,
        className: "errorAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [successinviteaccept, errorinviteaccept, rerender]);

  const deleteHandler = (userid, statustype) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to Reject Request?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const fromData = new FormData();
        fromData.append("invitee_accepted", statustype);
        dispatch(InviteUserRequestAcceptAction(userid, fromData, statustype));
        swal({
          title: "",
          text: "Successfully Rejected!",
          className: "successAlert",
          icon: "/img/Memorial icon.png",
          buttons: false,
          timer: 1500,
        });
      }
    });
  };

  const { IsVerifiedUserList } = useSelector(
    (state) => state.IsVerifiedUserListRedcuer
  );

  const { success: successAddTutorail, error: errorAddTutorail } = useSelector(
    (state) => state.IsVerifiedVedioSeeUserRedcuer
  );

  const {
    success: successRelTimeNotification,
    error: errorRelTimeNotification,
  } = useSelector((state) => state.RelTimeNotificationUpdateReducer);

  useEffect(() => {
    dispatch(IsVerifiedUserListAction(userData?.user?.user_id));
  }, [userData, successAddTutorail]);

  // websciet
  const chatSocketRef = useRef(null);

  const [count, setCount] = useState();
  const [newNoti, setNewNoti] = useState();
  const [newNotification, setNewNotification] = useState();

  const { RelTimeNotification } = useSelector(
    (state) => state.RelTimeNotificationReducer
  );
  useEffect(() => {
    if (RelTimeNotification) {
      setNewNotification(RelTimeNotification);
    }
  }, [RelTimeNotification]);
  useEffect(() => {
    dispatch(RelTimeNotificationAction());

    const chatSocket = new WebSocket(
      "ws://122.160.74.251:8034/ws/notifications/" +
        userData?.user?.user_id +
        "/"
    );

    chatSocketRef.current = chatSocket;

    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      if (data && data?.data?.value) {
        let countnum = data.data.value.text.count;
        let newNotifi = data.data.value.text;
        setCount(countnum);
        setNewNotification((prevState) => [...prevState, newNotifi]);
      }
    };

    chatSocket.onclose = function (e) {};

    return () => {
      if (chatSocketRef.current) {
        chatSocketRef.current.close();
      }
    };
  }, [dispatch, userData?.user?.user_id, successRelTimeNotification]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfile = Boolean(anchorEl);
  const handleClickProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseprofile = () => {
    setAnchorEl(null);
  };

  const handleViewEvent = (id) => {
    const formData = new FormData();
    formData.append("is_seen", true);
    dispatch(RelTimeNotificationUpdateAction(formData, id));
  };

  const handleToggleSidebar = () => {
    props.setToggle(!props.toggle);
  };

  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const [render, setRender] = useState(false);

  const {
    success: successUpdatePassword,
    error: errorUpdatepassword,
    message: passwordUpdatePassword,
  } = useSelector((state) => state.forgetreducer);

  useEffect(() => {
    if (successUpdatePassword && render) {
      swal({
        title: " ",
        text: passwordUpdatePassword,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRender(false);
      handleCloseUpdate();
      setCnewPassword();
      setNewPassword();
      setOldPassword();
    }
    if (errorUpdatepassword && render) {
      swal({
        title: errorUpdatepassword,
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRender(false);
    }
  }, [successUpdatePassword, render, errorUpdatepassword]);

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const [oldpassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [cNewpassword, setCnewPassword] = useState();
  const [errors, setErrors] = useState({
    oldpassword: "",
    newPassword: "",
    cNewpassword: "",
  });
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("password", newPassword);
    formData.append("current_password", oldpassword);
    formData.append("confirm_password", cNewpassword);
    formData.append("email", userData?.user?.email);

    dispatch(forgetpassword(formData));
    setRender(true);
  };
  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      oldpassword: validations.oldpassword(oldpassword),
      newPassword: validations.password(newPassword),
      cNewpassword: validations.confirmPassword(newPassword, cNewpassword),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleUpdateSubmit(e);
  };

  return (
    <div>
      <nav class="bg-white border-b border-gray-200  w-full">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button
                onClick={handleToggleSidebar}
                aria-expanded="true"
                aria-controls="sidebar"
                class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  class="w-6 h-6 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
              </button>
              <Link
                to="/"
                class="text-xl font-bold flex items-center lg:ml-2.5"
              >
                <img className="memoriallogoinfo" src="/img/Memorial 1.png" />
              </Link>
            </div>
            <div class="flex items-center gap-6">
              <button
                onClick={handleClickOpen}
                type="button"
                class="relative inline-flex items-center p-2 text-sm font-medium text-center text-black bg-[#d4b38175] rounded-lg hover:bg-[#d4b38175] focus:ring-4 focus:outline-none focus:ring-[#d4b38175] dark:bg-[#d4b38175] dark:hover:bg-[#d4b38175] dark:focus:ring-[#d4b38175]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>

                <span class="sr-only">Notifications</span>
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {count ? count : RelTimeNotification?.length}
                </div>
              </button>
              <div className="profile-tickicon relative">
                <React.Fragment>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <div className="cursor-pointer">
                      <Tooltip
                        onClick={handleClickProfileOpen}
                        title="Account settings"
                      >
                        <IconButton
                          size="small"
                          aria-controls={
                            openProfile ? "account-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={openProfile ? "true" : undefined}
                        >
                          <Avatar>
                            {" "}
                            <img
                              ref={dropdownRef}
                              class="w-10 h-10 rounded-full object-cover"
                              src={
                                ProfileDetailsGet?.image ?? "/img/noimage.png"
                              }
                              alt="Rounded avatar"
                            />
                            {userData?.user?.account_type == 2 && (
                              <>
                                {IsVerifiedUserList?.account_verified ==
                                  true && (
                                  <img
                                    src="/img/bluetick-removebg-preview.png"
                                    alt=""
                                    className="blue-tickimageheader"
                                  />
                                )}
                              </>
                            )}
                          </Avatar>
                        </IconButton>
                        <h1 className="loginedusername">
                          {ProfileDetailsGet?.first_name}
                        </h1>
                      </Tooltip>
                    </div>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openProfile}
                    onClose={handleCloseprofile}
                    onClick={handleCloseprofile}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem
                      style={{ width: 200 }}
                      onClick={handleCloseprofile}
                    >
                      <Link className="flex items-center" to={"/profile"}>
                        <ListItemIcon>
                          <AccountCircleIcon />
                        </ListItemIcon>
                        Profile
                      </Link>
                    </MenuItem>
                    {userData?.user?.account_type == 0 ||
                      (userData?.user?.account_type == 1 && (
                        <>
                          <MenuItem onClick={handleCloseprofile}>
                            <Link
                              className="flex items-center"
                              to={"/invite/requests"}
                            >
                              <ListItemIcon>
                                <Badge
                                  color="secondary"
                                  badgeContent={AllInviteMemberList?.length}
                                  showZero
                                >
                                  <Settings />
                                </Badge>{" "}
                              </ListItemIcon>
                              Invite Requests
                            </Link>
                          </MenuItem>
                        </>
                      ))}
                    <MenuItem
                      onClick={() => {
                        handleCloseprofile();
                        handleClickOpenUpdate();
                      }}
                    >
                      <ListItemIcon>
                        <LockResetIcon />
                      </ListItemIcon>
                      Update Password
                    </MenuItem>

                    {userData?.user?.account_type == 1 && (
                      <>
                        <MenuItem onClick={handleCloseprofile}>
                          <Link
                            className="flex items-center"
                            to={"/myvideo/list"}
                          >
                            <ListItemIcon>
                              <VideoCameraBackIcon />
                            </ListItemIcon>
                            My Videos
                          </Link>
                        </MenuItem>
                      </>
                    )}
                    <Divider />
                    <MenuItem
                      onClick={() => {
                        handleCloseprofile();
                        handleLogout();
                      }}
                    >
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Dialog
            PaperProps={{
              style: {
                width: "1200px",
                maxWidth: "500px",
              },
            }}
            open={openUpdate}
            onClose={handleCloseUpdate}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Update Password</DialogTitle>
            <DialogContent>
              <div className="min-w-screen min-h-screen bg-[#c99e59] flex items-center justify-center md:px-5 md:py-5">
                <div
                  className="bg-white text-gray-500 shadow-xl w-full overflow-hidden"
                  style={{ maxWidth: "1600px" }}
                >
                  <div className="">
                    <div className="welcom-black bg-white w-full  py-10 px-5 md:px-10">
                      <div className="w-full h-100">
                        <div className="imageheader-contnet flex justify-center">
                          <img
                            className="memoriallogoinfo"
                            src="/img/Memorial 1.png"
                          />
                        </div>
                        <h1 className="text-center text-xl text-black md:text-2xl font-bold leading-tight md:mt-12 header-welcom-back">
                          Update Your Password
                        </h1>
                        <form className="mt-6" onSubmit={validateSubmit}>
                          <div className="input-boxdiv">
                            <label className="block text-gray-700">
                              Old Password
                            </label>
                            <input
                              type="password"
                              placeholder="Enter Old Password"
                              className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                              onChange={(e) => {
                                setOldPassword(e.target.value);
                                setErrors({ ...errors, oldpassword: null });
                              }}
                            />
                            <span
                              style={{
                                color: "red",
                                fontSize: "15px",
                                opacity: errors.oldpassword ? 1 : 0,
                              }}
                            >
                              {errors.oldpassword ?? "valid"}
                            </span>
                          </div>

                          <div className="input-boxdiv mt-4">
                            <label className="block text-gray-700">
                              New Password
                            </label>
                            <input
                              type="password"
                              onChange={(e) => {
                                setNewPassword(e.target.value);
                                setErrors({ ...errors, newPassword: null });
                              }}
                              placeholder="Enter Password"
                              className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                            />
                            <span
                              style={{
                                color: "red",
                                fontSize: "15px",
                                opacity: errors.newPassword ? 1 : 0,
                              }}
                            >
                              {errors.newPassword ?? "valid"}
                            </span>
                          </div>
                          <div className="input-boxdiv mt-4">
                            <label className="block text-gray-700">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              onChange={(e) => {
                                setCnewPassword(e.target.value);
                                setErrors({ ...errors, cNewpassword: null });
                              }}
                              placeholder="Enter Password"
                              className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                            />
                            <span
                              style={{
                                color: "red",
                                fontSize: "15px",
                                opacity: errors.cNewpassword ? 1 : 0,
                              }}
                            >
                              {errors.cNewpassword ?? "valid"}
                            </span>
                          </div>
                          <button
                            // onClick={(e) => validateSubmit(e)}
                            type="submit"
                            className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
                          >
                            Save
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
            {/* <DialogActions>
              <button onClick={handleCloseUpdate}>Disagree</button>
              <button onClick={handleCloseUpdate} autoFocus>
                Agree
              </button>
            </DialogActions> */}
          </Dialog>
        </div>

        <Dialog
          open={open}
          TransitionComponent={Transition}
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
                Notifications
              </h3>
              <DisabledByDefaultIcon onClick={handleClose} />
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div class="main-notifaication">
                <div class="main-notifaicationshow p-4  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="flow-root">
                    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                      {newNotification?.map((item) => (
                        <>
                          <li class="py-3">
                            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                              <div class="flex-shrink-0">
                                <AccountCircleIcon
                                  style={{ width: "50px", height: "50px" }}
                                />
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="eventnotifications">
                                  <Link
                                    onClick={() => {
                                      handleViewEvent(item?.id);
                                      handleClose();
                                    }}
                                    to={`/events-detail/${item.redirect_id}/`}
                                  >
                                    {item?.notification}
                                  </Link>
                                </p>
                              </div>
                              {/* <div class="vieweventshow">
                                <Link
                                  onClick={() => {
                                    handleViewEvent(item?.id);
                                    handleClose();
                                  }}
                                  to={`/events-detail/${item.redirect_id}`}
                                >
                                  View{" "}
                                </Link>
                              </div> */}
                            </div>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </nav>
    </div>
  );
};
export default Header;
