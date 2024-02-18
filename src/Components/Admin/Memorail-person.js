import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EventsPostAction,
  FlowermomorialAction,
  MemorialPersondetailPostAction,
  propertyaddAction,
} from "../../Redux/actions/EventsAction";

import swal from "sweetalert";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  AllRoleGetAction,
  InviteUserAction,
} from "../../Redux/actions/UserAction";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Memorail_person = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error, message, loading } = useSelector(
    (state) => state.propertyaddReducer
  );
  const { userData } = useSelector((state) => state.authReducer);

  const [rerender, setRerender] = useState(false);

  const [Name, setName] = useState("");
  const [Biography, setBiography] = useState("");

  const [auction_details, setauction_details] = useState("");
  const [date_of_birth, setdate_of_birth] = useState(new Date());
  const [date_of_passing, setdate_of_passing] = useState(new Date());

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", Name);
    formData.append("biography", Biography);
    formData.append(
      "date_of_birth",
      moment(date_of_birth).format("YYYY-MM-DD")
    );

    formData.append("user", [userData?.user?.user_id]);

    formData.append(
      "date_of_passing",
      moment(date_of_passing).format("YYYY-MM-DD")
    );

    formData.append("user", [userData?.user?.user_id]);

    dispatch(MemorialPersondetailPostAction(formData));
    setRerender(true);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: " ",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      // navigate("/thank-you");
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [success, error, rerender]);

  // invite user code

  useEffect(() => {
    dispatch(AllRoleGetAction());
  }, []);

  const { AllRoleGet } = useSelector((state) => state.AllRoleGetReducer);

  const {
    success: successEmailsend,
    error: erroremailsend,
    message: emailmessage,
  } = useSelector((state) => state.InviteUserReducer);

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const InviteUserSubmit = () => {
    const formData = new FormData();

    formData.append("invitee_email", email);
    formData.append("invitee_role", role);
    formData.append("inviter", userData?.user?.user_id);
    dispatch(InviteUserAction(formData));
    setEmailsendRender(true);
  };

  const [EmailsendRender, setEmailsendRender] = useState(false);

  useEffect(() => {
    if (successEmailsend && EmailsendRender) {
      swal({
        title: " ",
        text: emailmessage,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setEmailsendRender(false);
      handleClose();
    }
    if (erroremailsend && EmailsendRender) {
      swal({
        title: "Error",
        text: erroremailsend,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setEmailsendRender(false);
    }
  }, [successEmailsend, erroremailsend, EmailsendRender]);

  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Memorial Information</h1>
          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Name</label>
                <input
                  type="text"
                  placeholder="Add Location"
                  className="w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                  value={Name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Biography</label>
                <textarea
                  placeholder="Add Biography"
                  className="max-textareabiography w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                  value={Biography}
                  onChange={(e) => {
                    setBiography(e.target.value);
                  }}
                ></textarea>
              </div>

              <div className="input-add">
                <div>
                  <label className="heading-title">Date of birth</label>
                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      // label="start Date"
                      //   inputFormat="DD-MM-YYYY"
                      formatDate={(date_of_birth) =>
                        moment(new Date()).format("DD-MM-YYYY")
                      }
                      minDate={new Date()}
                      value={date_of_birth}
                      onChange={(e) => {
                        setdate_of_birth(e);
                      }}
                      disablePast
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="input-add">
                <div>
                  <label className="heading-title">Date of passing</label>
                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      // label="start Date"
                      //   inputFormat="DD-MM-YYYY"
                      formatDate={(date_of_passing) =>
                        moment(new Date()).format("DD-MM-YYYY")
                      }
                      minDate={new Date()}
                      value={date_of_passing}
                      onChange={(e) => {
                        setdate_of_passing(e);
                      }}
                      disablePast
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="input-add">
                <div className="flex gap-4 mt-12">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200  "
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            {/* <button
              onClick={handleClickOpen}
              type="button"
              className=" py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
            >
              Invite User
            </button> */}
          </div>
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
            <div className="flex justify-between">
              <div>
                <h1 className="edit-profile">Invite User</h1>
              </div>
              <div>
                <svg
                  onClick={handleClose}
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
                <form className="mt-6">
                  <div className="input-boxdiv mb-4">
                    <label className="block text-gray-700">Email Address</label>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full px-4 py-3 rounded-lg  bg-white mt-2 border focus:outline-none"
                    />
                  </div>

                  <div className="input-boxdiv mt-2 mb-4">
                    <label className="block text-gray-700">User Role</label>
                    <select
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                      className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                    >
                      <option selected>Select user role</option>
                      {AllRoleGet?.map((item) => (
                        <option value={item?.id}>{item?.role}</option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className="input-add">
              <div className="flex gap-4 mt-12">
                <button
                  onClick={InviteUserSubmit}
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

export default Memorail_person;
