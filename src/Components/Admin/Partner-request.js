import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  EventsDeleteAction,
  EventsListGetAction,
} from "../../Redux/actions/EventsAction";
import {
  PartnerRequestAction,
  PendingPartneruserListAction,
} from "../../Redux/actions/UserAction";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PartnerAddAction } from "../../Redux/actions/PartnerAction";
import { validations } from "../../utils";
import LoaderSpinner from "../Loader/Loader-spinner";

function Partner_request() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { PendingPartneruserList } = useSelector(
    (state) => state.PendingPartneruserListReducer
  );

  const { success } = useSelector((state) => state.PartnerRequestReducer);

  useEffect(() => {
    dispatch(PendingPartneruserListAction());
  }, [success]);

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    if (!PendingPartneruserList) return; // Add a check for PendingPartneruserList

    let userData = PendingPartneruserList.map((item) => {
      const user = item.user;

      const status = (
        <div className="flex">
          {item.status === "accept" ? (
            <span className="user-status11 text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
              Accepted
            </span>
          ) : item.status === "decline" ? (
            <span className="user-status11 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
              Declined
            </span>
          ) : item.status === "pending" ? (
            <span className="user-status11 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-yellow-200 text-yellow-800 rounded-full">
              Pending
            </span>
          ) : null}
        </div>
      );

      const action1 = (
        <div className="flex text-lg">
          <div className="inline-flex items-center text-base font-semibold">
            {item.status === "pending" && (
              <>
                <button
                  onClick={() => AcceptHandler(user?.id, true)}
                  type="button"
                  className="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Accept
                </button>
                <button
                  onClick={() => deleteHandler(user?.id, false)}
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2  text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      );

      return {
        first_name: user.first_name,
        last_name: user.last_name,
        status,
        action1,
      };
    });

    setUsersForRender(userData);
  }, [PendingPartneruserList]);

  const data = {
    columns: [
      {
        label: "First Name",
        field: "first_name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Last Name",
        field: "last_name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 200,
      },
      {
        label: "Action",
        field: "action1",
        sort: "asc",
        width: 200,
      },
    ],
    rows: usersForRender,
  };

  // Rest of your component code...

  // const AcceptHandler = (id, userstatus) => {
  //   swal({
  //     title: "Warning",
  //     text: "Are you sure you want to Accept Request?",
  //     className: "errorAlert",
  //     icon: "/img/Memorial icon.png",
  //     // buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       const fromData = new FormData();
  //       dispatch(PartnerRequestAction(userstatus, id));
  //       swal({
  //         title: "",
  //         text: "Successfully Accepted!",
  //         className: "successAlert",
  //         icon: "/img/Memorial icon.png",
  //         buttons: false,
  //         timer: 1500,
  //       });
  //     }
  //   });
  // };

  const [loading, setIsLoading] = useState(false);

  const AcceptHandler = (id, userstatus) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to Accept Request?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setIsLoading(true); // Set loading to true when starting the API call
        <LoaderSpinner />;

        const fromData = new FormData();
        dispatch(PartnerRequestAction(userstatus, id))
          .then(() => {
            swal({
              title: "",
              text: "Successfully Accepted!",
              className: "successAlert",
              icon: "/img/Memorial icon.png",
              buttons: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            // Handle error appropriately, e.g., show an error message
          })
          .finally(() => {
            setIsLoading(false); // Set loading to false after API call completes
          });
      }
    });
  };

  const deleteHandler = (id, userstatus) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to Reject Request?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      // buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const fromData = new FormData();
        dispatch(PartnerRequestAction(userstatus, id));
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [partnerType, setpartnerTpe] = useState("");

  const [errors, setErrors] = useState({
    partnerType: "",
  });

  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      partnerType: validations.Partnerrequest(partnerType),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    CreatePartnerhandle();
  };

  const CreatePartnerhandle = () => {
    const formData = new FormData();
    formData.append("type", partnerType);

    dispatch(PartnerAddAction(formData));

    setRerender(true);
  };

  const { success: partnerAddSucces, error: partneraddError } = useSelector(
    (state) => state.PartnerAddReducer
  );
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (partnerAddSucces && rerender) {
      swal({
        title: " ",
        text: "partner added successfully!",
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      handleClose();
    }
    if (partneraddError && rerender) {
      swal({
        title: "Error",
        text: partneraddError,
        className: "errorAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [partnerAddSucces, partneraddError, rerender]);

  return (
    <>
      <div>
        {loading ? (
          <LoaderSpinner />
        ) : (
          <>
            <div className="">
              <div className="main-page-div bg-green-200">
                <h1 className="heading-top">Partner Request</h1>
                <div className="common-divbg bg-white">
                  <div className="Topallpage AllPageHight Custompage">
                    <div className="ContentDiv Categoriesdiv1">
                      <div className="savebtn Categorybtn">
                        <Link
                          className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
                          onClick={handleClickOpen}
                        >
                          {" "}
                          Add Partner Type
                        </Link>
                      </div>
                      <MDBDataTable
                        style={{}}
                        responsive
                        striped
                        bordered
                        small
                        data={data}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: "720px",
                    maxWidth: "750px",
                  },
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  <div className="lastupdated-date">
                    <h6 className="team-name legacy-det">Add Partner</h6>
                  </div>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <div className="details-pageleg">
                      <div className="input-boxdiv mb-4">
                        <label className="heading-title">
                          Add partner Type
                        </label>
                        <input
                          type="text"
                          placeholder="Add Type"
                          className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                          value={partnerType}
                          onChange={(e) => {
                            setpartnerTpe(e.target.value);
                          }}
                        />
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            opacity: errors.partnerType ? 1 : 0,
                          }}
                        >
                          {errors.partnerType ?? "valid"}
                        </span>
                      </div>

                      <div className="input-add">
                        <div className="flex gap-4 mt-12 mb-12">
                          <button
                            onClick={validateSubmit}
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
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Partner_request;
