import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  DeletePermissionListAction,
  GetPermissionListAction,
  GivePermissionLegacypagePostAction,
  LagacyCodeAddAction,
  LegacyDeleteAllDataAction,
  LegacyDeleteOnByOneModalAction,
  LegacyListShowAction,
  MemberListshowLegAcyaction,
  MemberPermissionGrantAction,
  MemberPermissionGrantReducer,
} from "../../Redux/actions/LegacyAction";
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
import { validations } from "../../utils";
import LoaderSpinner from "../Loader/Loader-spinner";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Legacy_detailsShow() {
  const dispatch = useDispatch();

  const [User_id, setUser_id] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [open, setOpen] = React.useState(false);
  const [EmailsendRender, setEmailsendRender] = useState(false);
  const [codeopen, setCodeOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [legacydata, setLegacyData] = useState([]);
  const [addCode, setAddcode] = useState("");
  const [CodeAddRender, setCodeAddRender] = useState(false);
  const [legacypageOpen, setlegacypageOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openpopup = Boolean(anchorEl);
  const [opensnackbar, setOpensnackbar] = React.useState(false);
  const [PermissionPopupOpen, setPermissionPopupOpen] = React.useState(false);
  const [errors, setErrors] = useState({
    email: "",
    role: "",
  });

  const { success: deleteLegacySucess } = useSelector(
    (state) => state.LegacyDeleteAllDataReducer
  );

  const { success: oneByoneModaldeleteSuccess } = useSelector(
    (state) => state.LegacyDeleteOnByOneModalReducer
  );

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, [deleteLegacySucess, oneByoneModaldeleteSuccess]);

  // invite user

  useEffect(() => {
    dispatch(AllRoleGetAction());
  }, []);

  const { AllRoleGet } = useSelector((state) => state.AllRoleGetReducer);
  const { userData } = useSelector((state) => state.authReducer);

  const { LegacyListShow } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  const { success: codeaddSuccess, error: errorCodeadd } = useSelector(
    (state) => state.LagacyCodeAddReducer
  );
  const {
    success: successEmailsend,
    error: erroremailsend,
    message: emailmessage,
    loading: emailsendLoad,
  } = useSelector((state) => state.InviteUserReducer);

  const { success: postSuccess } = useSelector(
    (state) => state.GivePermissionLegacypagePostReducer
  );
  const { success: deleteSuccess } = useSelector(
    (state) => state.DeletePermissionListReducer
  );

  const validateSubmit = (e) => {
    e.preventDefault();

    const tempErrors = {
      email: validations.email(email),
      role: validations.role(role),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    InviteUserSubmit();
  };

  const InviteUserSubmit = () => {
    const formData = new FormData();
    formData.append("invitee_email", email);
    formData.append("invitee_role", role);
    formData.append("legacy_page", LegacyListShow?.[0]?.id);
    formData.append("inviter", userData?.user?.user_id);

    dispatch(InviteUserAction(formData));
    setEmailsendRender(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleClickOpenCode = () => {
    setCodeOpen(true);
  };

  const handleCloseCode = () => {
    setCodeOpen(false);
  };

  const SetUserCodeSubmit = () => {
    const formData = new FormData();
    formData.append("legacy_page", LegacyListShow?.[0]?.id);
    formData.append("code", addCode);

    dispatch(LagacyCodeAddAction(formData));
    setCodeAddRender(true);
  };

  useEffect(() => {
    if (codeaddSuccess && CodeAddRender) {
      swal({
        title: " ",
        text: "Password Added Sucessfully!",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setAddcode("");
      setCodeAddRender(false);
      handleCloseCode();
    }
    if (errorCodeadd && CodeAddRender) {
      swal({
        title: "Error",
        text: errorCodeadd,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setCodeAddRender(false);
    }
  }, [codeaddSuccess, errorCodeadd, CodeAddRender]);

  useEffect(() => {
    setLegacyData(LegacyListShow?.[0]);
  }, []);

  const handleClickOpenLegacy = () => {
    setlegacypageOpen(true);
  };

  const handleClickCloseLegacy = () => {
    setlegacypageOpen(false);
  };

  // permission

  const { GetPermissionList } = useSelector(
    (state) => state.GetPermissionListReducer
  );

  const { MemberPermissionGrant } = useSelector(
    (state) => state.MemberPermissionGrantReducer
  );

  useEffect(() => {
    dispatch(MemberPermissionGrantAction());
  }, []);

  const [PermissionList, setPermissionList] = useState([]);

  useEffect(() => {
    if (MemberPermissionGrant) {
      setPermissionList(MemberPermissionGrant);
    }
  }, [MemberPermissionGrant, postSuccess, deleteSuccess]);

  useEffect(() => {
    if (User_id) {
      dispatch(GetPermissionListAction(User_id, LegacyListShow?.[0]?.id));
    }
  }, [User_id, postSuccess, deleteSuccess]);

  // permission
  const { MemberListshowLegacy } = useSelector(
    (state) => state.MemberListshowLegacyReducer
  );

  useEffect(() => {
    dispatch(MemberListshowLegAcyaction(LegacyListShow?.[0]?.id));
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosepopup = () => {
    setAnchorEl(null);
  };

  // give Permission

  const isPermissionChecked = (permissionId) => {
    return GetPermissionList?.some(
      (item) => item.permission_id === permissionId
    );
  };

  const PermissionSubmit = (permissionId) => {
    const formData = new FormData();
    formData.append("permission_codename_id", permissionId);
    formData.append("user_id", User_id);
    formData.append("legacy_id", LegacyListShow?.[0]?.id);

    if (isPermissionChecked(permissionId)) {
      dispatch(DeletePermissionListAction(User_id, permissionId));
    } else {
      dispatch(GivePermissionLegacypagePostAction(formData));
    }
    setEmailsendRender(true);
  };

  const handleClickOpenPermission = () => {
    setPermissionPopupOpen(true);
  };

  const handleClickClosePermission = () => {
    setPermissionPopupOpen(false);
  };

  const handleClickSnackbar = () => {
    setOpensnackbar(true);
  };

  const handleClosesnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpensnackbar(false);
  };

  const DeleteLegacy = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this event?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(LegacyDeleteAllDataAction(legacydata?.id));
        swal({
          title: "",
          text: "Successfully Deleted!",
          className: "successAlert",
          icon: "/img/Memorial icon.png",
          buttons: false,
          timer: 1500,
        });
      }
    });
  };

  const DeleteLegacyModelOnebyOne = (id, tablename) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this event?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(
          LegacyDeleteOnByOneModalAction({
            legacy_page_id: id,
            table_name: tablename,
          })
        );
        swal({
          title: "",
          text: "Successfully Deleted!",
          className: "successAlert",
          icon: "/img/Memorial icon.png",
          buttons: false,
          timer: 1500,
        }).then(() => {
          window.location.reload();
        });
      }
    });
  };


  return (
    <>
      <div>
        {emailsendLoad ? (
          <LoaderSpinner />
        ) : (
          <div className="">
            <div className="main-page-div bg-green-200">
              <h1 className="heading-top">Legacy</h1>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                  open={opensnackbar}
                  autoHideDuration={2000}
                  onClose={handleClosesnackbar}
                >
                  <Alert
                    onClose={handleClosesnackbar}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    This is a success message!
                  </Alert>
                </Snackbar>
              </Stack>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                  open={opensnackbar}
                  autoHideDuration={2000}
                  onClose={handleClosesnackbar}
                >
                  <Alert
                    onClose={handleClosesnackbar}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    This is a success message!
                  </Alert>
                </Snackbar>
              </Stack>
              <div className="common-divbg bg-white">
                <div className="Topallpage AllPageHight Custompage">
                  <div class="p-8">
                    <div className="">
                      {" "}
                      <h4 class="team-name legacy-det text-4xl font-bold text-gray-800 tracking-widest uppercase text-center flex justify-center gap-6">
                        <h1 class="diffrence-contnet">Legacy Details</h1>
                        <div class="flex items-center">
                          <div class="edit-button-inputt">
                            {/* <Link to={`/edit-legacy/${legacydata?.id}`}> */}
                            <button
                              onClick={handleClickOpenLegacy}
                              class="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                            </button>
                            {/* </Link> */}
                          </div>
                        </div>
                      </h4>
                      <p class="merorialtextinfo today-infoo mt-2 text-center">
                        {/* {legacydata?.} */}
                      </p>
                      <p class="merorialtextinfo today-infoo mt-2 text-center">
                        Here are some of the Lagacy Details
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-12">
                      <div className="card-legacydetailsshow">
                        <div className="details-pageleg">
                          <div className="lastupdated-date">
                            <h6 className="team-name legacy-det">
                              legacy accounts{" "}
                            </h6>

                            <div>
                              {legacydata?.legacy_accounts?.length !== 0 && (
                                <i
                                  onClick={() => {
                                    DeleteLegacyModelOnebyOne(
                                      legacydata?.id,
                                      "AccountsInfo"
                                    );
                                  }}
                                  class="deletelegacypage fa fa-close"
                                ></i>
                              )}

                              <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                Updated on:{" "}
                                {legacydata?.legacy_accounts?.[0]?.updated_at
                                  ? moment(
                                      legacydata?.legacy_accounts?.[0]
                                        ?.updated_at
                                    ).format("MMMM Do YYYY")
                                  : "N/A"}
                              </p>
                            </div>
                          </div>

                          <div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                name
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_accounts?.[0]?.name ??
                                  "N/A"}
                              </p>
                            </div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                description
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_accounts?.[0]
                                  ?.description ?? "N/A"}
                              </p>
                            </div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                document
                              </h1>
                              <p class="decisions-contnet break-words">
                                <Link
                                  to={
                                    legacydata?.legacy_accounts?.[0]?.document
                                  }
                                  target={
                                    legacydata?.legacy_accounts?.[0]?.document
                                  }
                                >
                                  {legacydata?.legacy_accounts?.[0]?.document ??
                                    "N/A"}
                                </Link>
                              </p>
                            </div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                Hint
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_accounts?.[0]?.hint_video ??
                                  "N/A"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* mappppppppppppp */}
                      <div className="card-legacydetailsshow">
                        <>
                          <div className="details-pageleg">
                            <div className="lastupdated-date">
                              <h6 className="team-name legacy-det">
                                Legacy Debt
                              </h6>
                              <div>
                                {legacydata?.legacy_debt?.length !== 0 && (
                                  <i
                                    onClick={() => {
                                      DeleteLegacyModelOnebyOne(
                                        legacydata?.id,
                                        "DebtInfo"
                                      );
                                    }}
                                    class="deletelegacypage fa fa-close"
                                  ></i>
                                )}

                                <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                  Updated on:{" "}
                                  {legacydata?.legacy_debt?.[0]?.updated_at
                                    ? moment(
                                        legacydata?.legacy_debt?.[0]?.updated_at
                                      ).format("MMMM Do YYYY")
                                    : "N/A"}
                                </p>
                              </div>
                            </div>
                            {legacydata?.legacy_debt?.length !== 0 ? (
                              <>
                                {legacydata?.legacy_debt?.map((item) => (
                                  <div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        lender name
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.lender_name ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        description
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.description ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        Principal amount
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.principal_amount ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        Interest rate
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.interest_rate ?? "N/A"}
                                      </p>
                                    </div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        document
                                      </h1>

                                      <p class="decisions-contnet capitalize break-words">
                                        <Link
                                          to={item?.document}
                                          target={item?.document}
                                        >
                                          {item?.document ?? "N/A"}
                                        </Link>
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        hint
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.hint_video ?? "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      lender name
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      Principal amount
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      Interest rate
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>

                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      </div>

                      {/* mappppppppppppp */}
                      <div className="card-legacydetailsshow">
                        <>
                          <div className="details-pageleg">
                            <div className="lastupdated-date">
                              <h6 className="team-name legacy-det">
                                Legacy Divorce
                              </h6>
                              <div>
                                {legacydata?.legacy_divorce?.length !== 0 && (
                                  <i
                                    onClick={() => {
                                      DeleteLegacyModelOnebyOne(
                                        legacydata?.id,
                                        "DivorceInfo"
                                      );
                                    }}
                                    class="deletelegacypage fa fa-close"
                                  ></i>
                                )}

                                <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                  Updated on:
                                  {legacydata?.legacy_divorce?.[0]?.updated_at
                                    ? moment(
                                        legacydata?.legacy_divorce?.[0]
                                          ?.updated_at
                                      ).format("MMMM Do YYYY")
                                    : "N/A"}
                                </p>
                              </div>
                            </div>

                            {legacydata?.legacy_divorce?.length !== 0 ? (
                              <>
                                {legacydata?.legacy_divorce?.map((item) => (
                                  <div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        name
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.name ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        description
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.description ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        divorce date
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.divorce_date ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        document
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        <Link
                                          to={item?.document}
                                          target={item?.document}
                                        >
                                          {item?.document ?? "N/A"}
                                        </Link>
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        hint
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.hint_video ?? "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      name
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      divorce date
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      </div>

                      <div className="card-legacydetailsshow">
                        <div className="details-pageleg">
                          <div className="lastupdated-date">
                            <h6 className="team-name legacy-det">
                              Legacy Funeral
                            </h6>
                            <div>
                              {legacydata?.legacy_funeral !== null && (
                                <i
                                  onClick={() => {
                                    DeleteLegacyModelOnebyOne(
                                      legacydata?.id,
                                      "FuneralInfo"
                                    );
                                  }}
                                  className="deletelegacypage fa fa-close"
                                ></i>
                              )}

                              <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                Updated on:
                                {legacydata?.legacy_funeral?.updated_at
                                  ? moment(
                                      legacydata?.legacy_funeral?.updated_at
                                    ).format("MMMM Do YYYY")
                                  : "N/A"}
                              </p>
                            </div>
                          </div>

                          <div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                description
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_funeral?.description ??
                                  "N/A"}
                              </p>
                            </div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                package location
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_funeral?.package_location ??
                                  "N/A"}
                              </p>
                            </div>

                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                type
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_funeral?.type ?? "N/A"}
                              </p>
                            </div>

                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                wish
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_funeral?.wish ?? "N/A"}
                              </p>
                            </div>

                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                document
                              </h1>
                              <p class="decisions-contnet capitalize break-words">
                                <Link
                                  to={legacydata?.legacy_funeral?.document}
                                  target={legacydata?.legacy_funeral?.document}
                                >
                                  {legacydata?.legacy_funeral?.document ??
                                    "N/A"}
                                </Link>
                              </p>
                            </div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                Hint
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_funeral?.hint_video ??
                                  "N/A"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* mappppppppppppp */}
                      <div className="card-legacydetailsshow">
                        <>
                          <div className="details-pageleg">
                            <div className="lastupdated-date">
                              <h6 className="team-name legacy-det">
                                Legacy Insurance
                              </h6>
                              <div>
                                {legacydata?.legacy_insurance?.length !== 0 && (
                                  <i
                                    onClick={() => {
                                      DeleteLegacyModelOnebyOne(
                                        legacydata?.id,
                                        "Insurance"
                                      );
                                    }}
                                    class="deletelegacypage fa fa-close"
                                  ></i>
                                )}

                                <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                  Updated on:
                                  {legacydata?.legacy_insurance?.[0]?.updated_at
                                    ? moment(
                                        legacydata?.legacy_insurance?.[0]
                                          ?.updated_at
                                      ).format("MMMM Do YYYY")
                                    : "N/A"}
                                </p>
                              </div>
                            </div>

                            {legacydata?.legacy_insurance?.length !== 0 ? (
                              <>
                                {legacydata?.legacy_insurance?.map((item) => (
                                  <div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        company
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.company ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        description
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.description ?? "N/A"}
                                      </p>
                                    </div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        document
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        <Link
                                          to={item?.document}
                                          target={item?.document}
                                        >
                                          {item?.document ?? "N/A"}
                                        </Link>
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        hint
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.hint_video ?? "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      company
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      </div>

                      {/* mappppppppppppp */}
                      <div className="card-legacydetailsshow">
                        <>
                          <div className="details-pageleg">
                            <div className="lastupdated-date">
                              <h6 className="team-name legacy-det">
                                legacy investment
                              </h6>
                              <div>
                                {legacydata?.legacy_investment?.length !==
                                  0 && (
                                  <i
                                    onClick={() => {
                                      DeleteLegacyModelOnebyOne(
                                        legacydata?.id,
                                        "LegacyInvestment"
                                      );
                                    }}
                                    class="deletelegacypage fa fa-close"
                                  ></i>
                                )}

                                <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                  Updated on:{" "}
                                  {legacydata?.legacy_investment?.[0]
                                    ?.updated_at
                                    ? moment(
                                        legacydata?.legacy_investment?.[0]
                                          ?.updated_at
                                      ).format("MMMM Do YYYY")
                                    : "N/A"}
                                </p>
                              </div>
                            </div>

                            {legacydata?.legacy_investment?.length !== 0 ? (
                              <>
                                {legacydata?.legacy_investment?.map((item) => (
                                  <div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        name
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.name ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        description
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.description ?? "N/A"}
                                      </p>
                                    </div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        amount
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.amount ?? "N/A"}
                                      </p>
                                    </div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        Date invested
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.date_invested ?? "N/A"}
                                      </p>
                                    </div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        document
                                      </h1>
                                      <p class="decisions-contnet  break-words">
                                        <Link
                                          to={item?.document}
                                          target={item?.document}
                                        >
                                          {item?.document ?? "N/A"}
                                        </Link>
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        hint
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.hint_video ?? "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      name
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      amount
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      Date invested
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      </div>

                      {/* mappppppppppppp */}
                      <div className="card-legacydetailsshow">
                        <>
                          <div className="details-pageleg">
                            <div className="lastupdated-date">
                              <h6 className="team-name legacy-det">
                                legacy pension
                              </h6>

                              <div>
                                {legacydata?.legacy_pension?.length !== 0 && (
                                  <i
                                    onClick={() => {
                                      DeleteLegacyModelOnebyOne(
                                        legacydata?.id,
                                        "PensionInfo"
                                      );
                                    }}
                                    class="deletelegacypage fa fa-close"
                                  ></i>
                                )}

                                <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                  Updated on:{" "}
                                  {legacydata?.legacy_pension?.[0]?.updated_at
                                    ? moment(
                                        legacydata?.legacy_pension?.[0]
                                          ?.updated_at
                                      ).format("MMMM Do YYYY")
                                    : "N/A"}
                                </p>
                              </div>
                            </div>

                            {legacydata?.legacy_pension?.length !== 0 ? (
                              <>
                                {legacydata?.legacy_pension?.map((item) => (
                                  <div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        name
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.name ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        description
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.description ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        document
                                      </h1>
                                      <p class="decisions-contnet break-words">
                                        <Link
                                          to={item?.document}
                                          target={item?.document}
                                        >
                                          {item?.document ?? "N/A"}
                                        </Link>
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        hint
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.hint_video ?? "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      name
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      </div>

                      {/* mappppppppppppp */}
                      <div className="card-legacydetailsshow">
                        <>
                          <div className="details-pageleg">
                            <div className="lastupdated-date">
                              <h6 className="team-name legacy-det">
                                legacy property
                              </h6>
                              <div>
                                {legacydata?.legacy_property?.length !== 0 && (
                                  <i
                                    onClick={() => {
                                      DeleteLegacyModelOnebyOne(
                                        legacydata?.id,
                                        "LegacyProperty"
                                      );
                                    }}
                                    class="deletelegacypage fa fa-close"
                                  ></i>
                                )}

                                <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                  Updated on:{" "}
                                  {legacydata?.legacy_property?.[0]?.updated_at
                                    ? moment(
                                        legacydata?.legacy_property?.[0]
                                          ?.updated_at
                                      ).format("MMMM Do YYYY")
                                    : "N/A"}
                                </p>
                              </div>
                            </div>
                            {legacydata?.legacy_property?.length !== 0 ? (
                              <>
                                {legacydata?.legacy_property?.map((item) => (
                                  <div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        description
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.description ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        address
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.address ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        price
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.price ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        document
                                      </h1>
                                      <p class="decisions-contnet break-words">
                                        <Link
                                          to={item?.document}
                                          target={item?.document}
                                        >
                                          {item?.document ?? "N/A"}
                                        </Link>
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        hint
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.hint_video ?? "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      address
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      price
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      </div>

                      <div className="card-legacydetailsshow">
                        <div className="details-pageleg">
                          <div className="lastupdated-date">
                            <h6 className="team-name legacy-det">
                              legacy retirement
                            </h6>
                            <div>
                              {legacydata?.legacy_retirement !== null && (
                                <i
                                  onClick={() => {
                                    DeleteLegacyModelOnebyOne(
                                      legacydata?.id,
                                      "RetirementInfo"
                                    );
                                  }}
                                  className="deletelegacypage fa fa-close"
                                ></i>
                              )}

                              <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                Updated on:{" "}
                                {legacydata?.legacy_retirement?.updated_at
                                  ? moment(
                                      legacydata?.legacy_retirement?.updated_at
                                    ).format("MMMM Do YYYY")
                                  : "N/A"}
                              </p>
                            </div>
                          </div>

                          <div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                description
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_retirement?.description ??
                                  "N/A"}
                              </p>
                            </div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                document
                              </h1>
                              <p class="decisions-contnet break-words">
                                <Link
                                  to={legacydata?.legacy_retirement?.document}
                                  target={
                                    legacydata?.legacy_retirement?.document
                                  }
                                >
                                  {legacydata?.legacy_retirement?.document ??
                                    "N/A"}
                                </Link>
                              </p>
                            </div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                Hint
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_retirement?.hint_video ??
                                  "N/A"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* mappppppppppppp */}
                      <div className="card-legacydetailsshow">
                        <>
                          <div className="details-pageleg">
                            <div className="lastupdated-date">
                              <h6 className="team-name legacy-det">
                                legacy vehicle
                              </h6>

                              <div>
                                {legacydata?.legacy_vehicle?.length !== 0 && (
                                  <i
                                    onClick={() => {
                                      DeleteLegacyModelOnebyOne(
                                        legacydata?.id,
                                        "LegacyVehicle"
                                      );
                                    }}
                                    className="deletelegacypage fa fa-close"
                                  ></i>
                                )}

                                <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                  Updated on:{" "}
                                  {legacydata?.legacy_vehicle?.[0]?.updated_at
                                    ? moment(
                                        legacydata?.legacy_vehicle?.[0]
                                          ?.updated_at
                                      ).format("MMMM Do YYYY")
                                    : "N/A"}
                                </p>
                              </div>
                            </div>

                            {legacydata?.legacy_vehicle?.length !== 0 ? (
                              <>
                                {legacydata?.legacy_vehicle?.map((item) => (
                                  <div>
                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        description
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.description ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        color
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words	">
                                        {item?.color ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        model
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.model ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        vin
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.vin ?? "N/A"}
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        document
                                      </h1>
                                      <p class="decisions-contnet break-words">
                                        <Link
                                          to={item?.document}
                                          target={item?.document}
                                        >
                                          {item?.document ?? "N/A"}
                                        </Link>
                                      </p>
                                    </div>

                                    <div class="my-6">
                                      <h1 class="plan-ahed capitalize break-words	">
                                        hint
                                      </h1>
                                      <p class="decisions-contnet capitalize break-words">
                                        {item?.hint_video ?? "N/A"}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      color
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      model
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      vin
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      N/A
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      </div>

                      <div className="card-legacydetailsshow">
                        <div className="details-pageleg">
                          <div className="lastupdated-date">
                            <h6 className="team-name legacy-det">
                              legacy will
                            </h6>
                            <div>
                              {legacydata?.legacy_will !== null && (
                                <i
                                  onClick={() => {
                                    DeleteLegacyModelOnebyOne(
                                      legacydata?.id,
                                      "Will"
                                    );
                                  }}
                                  className="deletelegacypage fa fa-close"
                                ></i>
                              )}

                              <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                Updated on:
                                {legacydata?.legacy_will?.updated_at
                                  ? moment(
                                      legacydata?.legacy_will?.updated_at
                                    ).format("MMMM Do YYYY")
                                  : "N/A"}
                              </p>
                            </div>
                          </div>

                          <div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                description
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_will?.description ?? "N/A"}
                              </p>
                            </div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                self proven
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_will?.self_proven ? (
                                  <span className="selfproventrue">(✓)</span>
                                ) : (
                                  <span className="selfprovenfalse">(✘)</span>
                                )}
                              </p>
                            </div>

                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                document
                              </h1>
                              <p class="decisions-contnet break-words">
                                <Link
                                  to={legacydata?.legacy_will?.document}
                                  target={legacydata?.legacy_will?.document}
                                >
                                  {legacydata?.legacy_will?.document ?? "N/A"}
                                </Link>
                              </p>
                            </div>
                            <div class="my-6">
                              <h1 class="plan-ahed capitalize break-words	">
                                Hint
                              </h1>
                              <p class="decisions-contnet capitalize break-words	">
                                {legacydata?.legacy_will?.hint_video ?? "N/A"}
                              </p>
                            </div>
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
                          <div class="p-4 h-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div class="flow-root">
                              <div className="input-boxdiv mb-6">
                                <p className="heading-title-legacypage">
                                  Email Address
                                </p>
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

                              <div className="input-boxdiv mt-2 mb-4">
                                <p className="heading-title-legacypage">
                                  User Role
                                </p>
                                <select
                                  value={role}
                                  onChange={(e) => {
                                    setErrors({ ...errors, role: null });
                                    setRole(e.target.value);
                                  }}
                                  className="input-legacy-typeenter-select  w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                                >
                                  <option selected>Select user role</option>
                                  {AllRoleGet?.map((item) => (
                                    <option value={item?.id}>
                                      {item?.role}
                                    </option>
                                  ))}
                                </select>
                                <span
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    opacity: errors.role ? 1 : 0,
                                  }}
                                >
                                  {errors.role ?? "valid"}
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

                  {/* lagacy code add popup */}
                  <Dialog
                    open={codeopen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseCode}
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
                          <h1 className="edit-profile">
                            Set Your Lagacy Password
                          </h1>
                        </div>
                        <div>
                          <svg
                            onClick={handleCloseCode}
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
                                <p className="heading-title-legacypage">
                                  Password
                                </p>
                                <input
                                  value={addCode}
                                  onChange={(e) => {
                                    setAddcode(e.target.value);
                                    // setErrors({ ...errors, email: null });
                                  }}
                                  type="text"
                                  placeholder="Set Code"
                                  className="input-legacy-typeenter w-full px-4 py-3 rounded-lg  bg-white mt-2 border focus:outline-none"
                                />
                              </div>
                              <p className="text-right">
                                <Link
                                  to="/update-legacy-password"
                                  className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
                                >
                                  update password
                                </Link>
                                <span className="mx-2">OR</span>
                                <Link
                                  to="/forgot-legacy-password"
                                  className="text-blue-500 hover:text-blue-700 font-semibold "
                                >
                                  forgot password
                                </Link>
                              </p>
                            </div>
                            <div className="input-add">
                              <div className="flex gap-4 mt-12">
                                <button
                                  onClick={SetUserCodeSubmit}
                                  type="button"
                                  className="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200  "
                                >
                                  Save
                                </button>
                                <button
                                  onClick={handleCloseCode}
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
                    open={legacypageOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClickCloseLegacy}
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
                          <h1 className="edit-profile">Lagacy Settings</h1>
                        </div>
                        <div>
                          <svg
                            onClick={handleClickCloseLegacy}
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
                          <div class="">
                            <div class="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                              <div class="flow-root">
                                <ul
                                  role="list"
                                  class="divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                  <li class="py-2">
                                    <div class="flex items-center space-x-4">
                                      <div class="">
                                        <p
                                          onClick={() => {
                                            handleClickOpen();
                                            handleClickCloseLegacy();
                                          }}
                                          class="heading-titlelegacy flex gap-4 items-center"
                                        >
                                          <i class="fa fa-user-plus"></i>
                                          Invite User
                                        </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li class="py-2">
                                    <div class="flex items-center space-x-4">
                                      <div class="">
                                        <p
                                          onClick={() => {
                                            handleClickOpenCode();
                                            handleClickCloseLegacy();
                                          }}
                                          class="heading-titlelegacy flex gap-4 items-center"
                                        >
                                          <i class="fa fa-lock"></i>
                                          Protect your Legacy Page
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="py-2">
                                    <div class="flex items-center space-x-4">
                                      <div class="">
                                        <Link
                                          to={`/edit-legacy/${legacydata?.id}`}
                                        >
                                          <p
                                            onClick={() => {
                                              handleClickCloseLegacy();
                                            }}
                                            class="heading-titlelegacy flex gap-4 items-center"
                                          >
                                            <i class="fa fa-edit"></i>
                                            Edit Legacy
                                          </p>
                                        </Link>
                                      </div>
                                    </div>
                                  </li>

                                  <li class="py-2">
                                    <div class="flex items-center space-x-4">
                                      <div class="">
                                        <p
                                          onClick={() => {
                                            // handleClickCloseLegacy();
                                            DeleteLegacy();
                                          }}
                                          class="heading-titlelegacy flex gap-4 items-center"
                                        >
                                          <i class="fa fa-trash-o"></i>
                                          Delete Legacy
                                        </p>
                                      </div>
                                    </div>
                                  </li>

                                  <div class="flex items-center space-x-4">
                                    <div class="">
                                      <div className="participants-add">
                                        <p class="heading-titlelegacy partici flex gap-4 items-center">
                                          {MemberListshowLegacy?.length ?? 0}{" "}
                                          particiapnts
                                        </p>
                                      </div>
                                      <div className="member-listShow">
                                        <p
                                          onClick={() => {
                                            handleClickOpen();
                                            handleClickCloseLegacy();
                                          }}
                                          class="heading-titlelegacy flex gap-4 items-center"
                                        >
                                          <button
                                            type="button"
                                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                                                d="M12 4.5v15m7.5-7.5h-15"
                                              />
                                            </svg>

                                            <span class="sr-only">
                                              Icon description
                                            </span>
                                          </button>
                                          Add Member
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  {MemberListshowLegacy?.length > 0 ? (
                                    <li class="py-2">
                                      <div class="flow-root">
                                        <ul
                                          role="list"
                                          class="divide-y divide-gray-200 dark:divide-gray-700"
                                        >
                                          {MemberListshowLegacy?.map((item) => (
                                            <li class="py-3 sm:py-4">
                                              <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                  {item?.member_info
                                                    ?.image_url ? (
                                                    <img
                                                      class="userprofileimage rounded-full"
                                                      src={
                                                        item?.member_info
                                                          ?.image_url
                                                      }
                                                    />
                                                  ) : (
                                                    <img
                                                      class="userprofileimage rounded-full"
                                                      src="/img/avtarImage.jpg"
                                                      alt="Person"
                                                    />
                                                  )}
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                  <Link
                                                    to={`/user-profile/${item?.member_info?.id}/`}
                                                  >
                                                    <p class="username-textfil text-sm font-medium text-gray-900 truncate dark:text-white">
                                                      {
                                                        item?.member_info
                                                          ?.first_name
                                                      }
                                                      {
                                                        item?.member_info
                                                          ?.last_name
                                                      }
                                                    </p>

                                                    <p class="heading-titlelegacy usernameshow flex gap-4 items-center">
                                                      {
                                                        item?.member_info
                                                          ?.username
                                                      }
                                                    </p>
                                                  </Link>
                                                </div>
                                                <div class="userrollShow inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                  {item?.user_role}{" "}
                                                  <svg
                                                    onClick={handleClick}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    class="w-6 h-6 ellipsis-iconshow"
                                                  >
                                                    <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                    />
                                                  </svg>
                                                  <div>
                                                    <Menu
                                                      id="basic-menu"
                                                      anchorEl={anchorEl}
                                                      open={openpopup}
                                                      onClose={handleClosepopup}
                                                      // onChange={(e) => {
                                                      //   setPermission_codename_id(
                                                      //     e.target.value
                                                      //   );
                                                      // }}
                                                      // value={
                                                      //   permission_codename_id
                                                      // }
                                                      MenuListProps={{
                                                        "aria-labelledby":
                                                          "basic-button",
                                                      }}
                                                    >
                                                      <MenuItem
                                                        onClick={() => {
                                                          handleClickOpenPermission();
                                                          handleClosepopup();
                                                          handleClickCloseLegacy();
                                                          setUser_id(
                                                            item.member_info?.id
                                                          );
                                                        }}
                                                      >
                                                        Permission
                                                      </MenuItem>
                                                    </Menu>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </li>
                                  ) : (
                                    <div className="no-founddatameme nofound-data">
                                      NO MEMBERS FOUND
                                    </div>
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>

                  {/*permission popup*/}
                  <Dialog
                    open={PermissionPopupOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClickClosePermission}
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
                          <h1 className="edit-profile">Permissions</h1>
                        </div>
                        <div>
                          <svg
                            onClick={handleClickClosePermission}
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
                              <ul
                                role="list"
                                class="divide-y divide-gray-200 dark:divide-gray-700"
                              >
                                {PermissionList?.map((item) => (
                                  <li class="py-3 sm:py-4">
                                    <div class="fpermission-showlist capitalize">
                                      <div class="">
                                        <p className="decisions-contnet capitalize break-words">
                                          {item?.codename.replace(/_/g, " ")}
                                        </p>
                                      </div>
                                      <div class="">
                                        <label class="relative inline-flex items-center cursor-pointer">
                                          {/* <input
                                            value={item.id}
                                            defaultChecked={
                                              // item.id ==
                                              GetPermissionList?.filter(
                                                (myListItem) =>
                                                  myListItem.permission_id ==
                                                  item.id
                                              )
                                            }
                                            onChange={() => {
                                              setToggleOn(!toggleOn);
                                              PermissionSubmit(item.id);
                                            }}
                                            type="checkbox"
                                            class="sr-only peer"
                                          /> */}
                                          <input
                                            // value={item.id}
                                            checked={isPermissionChecked(
                                              item.id
                                            )}
                                            onChange={() => {
                                              PermissionSubmit(item.id);
                                            }}
                                            type="checkbox"
                                            className="sr-only peer"
                                          />
                                          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Legacy_detailsShow;
