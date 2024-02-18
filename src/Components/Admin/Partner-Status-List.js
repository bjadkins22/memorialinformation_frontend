import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import swal from "sweetalert";
import {
  FileDataGetAction,
  StateChangeUserAction,
  DeleteFileStatusAction,
  StatusUpdateAction,
} from "../../Redux/actions/SuperAdminAction";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

function Partner_Status_List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { FileDataGet } = useSelector((state) => state.FileDataGetReducer);

  const [rerender, setRerender] = useState(false);

  const { success, error, message } = useSelector(
    (state) => state.StateChangeUserReducer
  );

  const { success: deleteSuccess, error: errorDelete } = useSelector(
    (state) => state.DeleteFileReducer
  );
  const {
    success: successUpdate,
    error: errorUpdate,
    message: messageUpdate,
  } = useSelector((state) => state.StatusUpdateReducer);

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    dispatch(FileDataGetAction());
  }, [success, deleteSuccess, successUpdate]);

  useEffect(() => {
    let userData = [];
    FileDataGet?.map((item, index) => {
      item.First_name = item.First_name ? item.First_name : "----";
      item.Last_name = item.Last_name ? item.Last_name : "----";
      item.Phone = item.Phone ? item.Phone : "----";
      item.Email = item.Email ? item.Email : "----";
      item.Address = item.Address ?? "----";
      item.CompanyType = item.CompanyType ? item.CompanyType : "----";

      item.State = item.State ? item.State : "----";
      item.Title = item.Title ? item.Title : "----";

      item.status = (
        <div onClick={() => handleClickOpenStatus(item.id)} className="flex">
          {item.status === true ? (
            <span className="text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
              Active
            </span>
          ) : (
            <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
              Inactive
            </span>
          )}
        </div>
      );

      item.action = (
        <div className="flex text-lg">
          <Link
            title="edit"
            className="EditBut editAdminButton"
            to={`/partner/status/edit/${item.id}`}
          >
            <BorderColorIcon />
          </Link>
          <div className="flex">
            <button
              title="delete"
              className="deletebutt"
              onClick={() => {
                DeleteFileState(item?.id);
              }}
            >
              <DeleteIcon />
            </button>

            <button
              title="delete"
              className="deletebutt"
              onClick={() => {
                handleClickOpen();
                SetNameAdd(item?.First_name);
                SetfloridaId(item?.id);
              }}
            >
              <ManageAccountsIcon />
            </button>
          </div>
        </div>
      );
      userData.push(item);
    });

    setUsersForRender(userData);
  }, [FileDataGet]);

  const data = {
    columns: [
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 500,
      },
      {
        label: "First Name",
        field: "First_name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Last Name",
        field: "Last_name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Company Name",
        field: "CompanyType",
        sort: "asc",
        width: 500,
      },
      {
        label: "Phone Number",
        field: "Phone",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "Email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Address",
        field: "Address",
        sort: "asc",
        width: 500,
      },
      {
        label: "State",
        field: "State",
        sort: "asc",
        width: 500,
      },

      {
        label: "Title",
        field: "Title",
        sort: "asc",
        width: 500,
      },

      {
        label: "Action",
        field: "action", // Corrected from "ac" to "action"
        sort: "asc",
        width: 100,
      },
    ],
    rows: usersForRender,
  };

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [nameAdd, SetNameAdd] = useState([]);
  const [floridaId, SetfloridaId] = useState();

  const [State, setState] = useState("");

  const handleSubmit = (id) => {
    const formData = new FormData();
    formData.append("First_name", nameAdd);
    formData.append("State", State);

    dispatch(StateChangeUserAction(floridaId, formData));
    setRerender(true);
  };

  const handleChange = (event) => {
    setState(event?.target?.value);
  };

  const partnerStatus = [
    { id: 1, state: "Not Contacted" },
    { id: 2, state: "Contacted, Not Interested" },
    { id: 3, state: "Contacted, Meeting Scheduled" },
    { id: 4, state: "Contacted, LVM x1" },
    { id: 5, state: "Contacted, LVM x2" },
    { id: 6, state: "Contacted, LVM x3" },
    { id: 7, state: "Contacted, LVM x4" },
    { id: 8, state: "Partial Presentation, Cut Short" },
    { id: 9, state: "Full MIP Presentation, In Person" },
    { id: 10, state: "Full MIP Presentation, Online" },
    { id: 11, state: "Full MI User Presentation, Phone" },
    { id: 12, state: "Full Vendor Presentation, Online" },
    { id: 13, state: "Full Vendor Presentation, In Person" },
    { id: 14, state: "Full MIP Present, Not Interested" },
    { id: 15, state: "Full MI User Present, Not Interested" },
    { id: 16, state: "Full MIP Present, Thinking About It" },
    { id: 17, state: "Full MI User Present, Thinking About It" },
    { id: 18, state: "Contracted" },
    { id: 19, state: "Legacy Builder" },
    { id: 20, state: "Family Transition" },
    { id: 21, state: "Family Legacy Plus" },
    { id: 22, state: "Post Funeral Marketing Funnel" },
    { id: 23, state: "MI Partner L1" },
    { id: 24, state: "MI Partner L2" },
    { id: 25, state: "MI Partner L3" },
    { id: 26, state: "MI Partner L4" },
    { id: 27, state: "Default, MIP Monthly" },
    { id: 28, state: "Default, MIU Annual" },
    { id: 29, state: "Canceled Contract" },
    { id: 30, state: "Contract Paused" },
  ];

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      handleClose();
      setRerender(false);
      navigate("/partner/status/list");
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

  const DeleteFileState = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this info?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(DeleteFileStatusAction(id));
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
  const { userData } = useSelector((state) => state.authReducer);

  console.log("FileDataGet", FileDataGet);

  const [selectStatus, setSelectStatus] = useState("");

  const handleSubmitStatus = () => {
    const formData = new FormData();
    formData.append("status", selectStatus);
    dispatch(StatusUpdateAction(StatusId, formData));
    setRerender(true);
  };

  const handleChangeStatus = (event) => {
    setSelectStatus(event?.target?.value);
  };

  const [openStatus, setOpenStatus] = React.useState(false);
  const [StatusId, setStatusId] = React.useState(false);

  const handleClickOpenStatus = (id) => {
    setOpenStatus(true);
    setStatusId(id);
  };

  const handleCloseStatus = () => {
    setOpenStatus(false);
  };

  useEffect(() => {
    if (successUpdate && rerender) {
      swal({
        title: "",
        text: "Status updated successfully",
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      handleCloseStatus();
      setRerender(false);
      navigate("/partner/status/list");
    }
    if (errorUpdate && rerender) {
      swal({
        title: "Error",
        text: errorUpdate,
        className: "errorAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [successUpdate, errorUpdate, rerender]);

  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Partner Status List</h1>
            <div className="common-divbg bg-white">
              <div className="Topallpage AllPageHight Custompage">
                <div className="ContentDiv Categoriesdiv1">
                  {/* <div className="Status"></div> */}

                  {userData?.user?.account_type == 0 && (
                    <div className="savebtn Categorybtn">
                      <Link
                        className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
                        to={`/partner/status/add`}
                      >
                        {" "}
                        Add File{" "}
                      </Link>
                    </div>
                  )}
                  <MDBDataTable
                    style={{}}
                    responsive
                    striped
                    bordered
                    small
                    data={data}
                  />
                </div>

                <React.Fragment>
                  <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogTitle>Select State </DialogTitle>
                    <DialogContent>
                      {/* <DialogContentText>
                        You can set my maximum width and whether to adapt or
                        not.
                      </DialogContentText> */}
                      <Box
                        noValidate
                        component="form"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          m: "40px",
                          minWidth: 120,
                        }}
                      >
                        <div>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Select
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={State}
                              label="State"
                              onChange={handleChange}
                            >
                              {partnerStatus?.map((item) => (
                                <MenuItem value={item?.state}>
                                  {item.state}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleSubmit}>Save</Button>
                      <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>

                {/* status Update  */}

                <React.Fragment>
                  <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={openStatus}
                    onClose={handleCloseStatus}
                  >
                    <DialogTitle>Select Status</DialogTitle>
                    <DialogContent>
                      {/* <DialogContentText>
                        You can set my maximum width and whether to adapt or
                        not.
                      </DialogContentText> */}
                      <Box
                        noValidate
                        component="form"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          m: "40px",
                          minWidth: 120,
                        }}
                      >
                        <div>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Select Status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={selectStatus}
                              label="State"
                              onChange={handleChangeStatus}
                            >
                              <MenuItem value={""}>Select Status</MenuItem>
                              <MenuItem value={`True`}>True</MenuItem>
                              <MenuItem value={`False`}>False</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleSubmitStatus}>Save</Button>
                      <Button onClick={handleCloseStatus}>Close</Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner_Status_List;
