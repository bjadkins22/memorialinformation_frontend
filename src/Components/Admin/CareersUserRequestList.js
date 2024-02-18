import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

import DialogContentText from "@mui/material/DialogContentText";

import {
  DeleteUserSendJobInqueryAction,
  GetAppliedJobDetailAction,
  GetApplyAllJobAction,
  GetUserSendJobInqueryAction,
} from "../../Redux/actions/SuperAdminAction";
import {
  AppBar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Toolbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CareersUserRequestList() {
  const dispatch = useDispatch();

  const { GetUserSendJobInquery } = useSelector(
    (state) => state.GetUserSendJobInqueryReducer
  );

  const { success: deletesuccess } = useSelector(
    (state) => state.DeleteUserSendJobInqueryReducer
  );

  useEffect(() => {
    dispatch(GetUserSendJobInqueryAction());
  }, [deletesuccess]);

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    if (!GetUserSendJobInquery) return;

    const userData = GetUserSendJobInquery.map((item) => {
      const { id, first_name, last_name, email, phone_number, action } = item;

      return {
        id,
        first_name,
        last_name,
        email,
        phone_number,
        action: (
          <div className="flex gap-2 text-lg mt-1">
            {/* <Link
              title="edit"
              className="EditBut editAdminButton"
              to={`/todo/${item.id}`}
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </Link> */}
            <div className="flex ">
              <button
                title="delete"
                className="deletebutt"
                onClick={() => deleteHandler(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ),
      };
    });

    setUsersForRender(userData);
  }, [GetUserSendJobInquery]);

  const data = {
    columns: [
      {
        label: "First Name",
        field: "first_name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Last Name",
        field: "last_name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Phone number",
        field: "phone_number",
        sort: "asc",
        width: 500,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: usersForRender,
  };

  const deleteHandler = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this event?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(DeleteUserSendJobInqueryAction(id));
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

  // second job

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    dispatch(GetAppliedJobDetailAction(id));
    setOpen(true);
    console.log("iddddddddd", id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { GetAppliedJobDetail } = useSelector(
    (state) => state.GetAppliedJobDetailReducer
  );
  console.log("GetAppliedJobDetail", GetAppliedJobDetail);

  const { GetApplyAllJob } = useSelector(
    (state) => state.GetApplyAllJobReducer
  );

  useEffect(() => {
    dispatch(GetApplyAllJobAction());
  }, []);

  const [usersForRenderJob, setUsersForRenderJob] = useState([]);

  useEffect(() => {
    if (!GetApplyAllJob) return;

    const userData = GetApplyAllJob.map((item) => {
      const { id, first_name, last_name, email, phone_number, action } = item;

      return {
        id,
        first_name,
        last_name,
        email,
        phone_number,
        action: (
          <div className="flex gap-2 text-lg mt-1">
            <svg
              onClick={() => handleClickOpen(item.id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <div className="flex ">
              <button
                title="delete"
                className="deletebutt"
                onClick={() => deleteHandler(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ),
      };
    });

    setUsersForRenderJob(userData);
  }, [GetApplyAllJob]);

  const data1 = {
    columns: [
      {
        label: "First Name",
        field: "first_name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Last Name",
        field: "last_name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Phone number",
        field: "phone_number",
        sort: "asc",
        width: 500,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: usersForRenderJob,
  };

  const deleteHandlerJob = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this event?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(DeleteUserSendJobInqueryAction(id));
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

  const [myTab, setMyTab] = useState("userinquery");

  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">User Job Request</h1>
            <div className="common-divbg bg-white">
              <div className="tabsshow">
                <ul class="maindashbordoptions">
                  <li
                    onClick={() => {
                      setMyTab("userinquery");
                    }}
                    className={
                      myTab == "userinquery"
                        ? "active-dashboard actab"
                        : "unactive-dashboard actab"
                    }
                  >
                    <a className="vender-dashboard">
                      <i class="fa fa-dashboard db-icon"></i>Job inquery
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setMyTab("userappliedjob");
                    }}
                    className={
                      myTab == "userappliedjob"
                        ? "active-dashboard actab"
                        : "unactive-dashboard actab"
                    }
                  >
                    <a className="vender-dashboard">
                      <i class="fa fa-user db-icon"></i>Applied Job
                    </a>
                  </li>
                </ul>
              </div>

              {myTab == "userinquery" ? (
                <div className="Topallpage AllPageHight Custompage">
                  <MDBDataTable
                    style={{}}
                    responsive
                    striped
                    bordered
                    small
                    data={data}
                  />
                </div>
              ) : myTab == "userappliedjob" ? (
                <div className="Topallpage AllPageHight Custompage">
                  <MDBDataTable
                    style={{}}
                    responsive
                    striped
                    bordered
                    small
                    data={data1}
                  />
                </div>
              ) : null}
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
                <h1 className="edit-profile">Applied Job User Information</h1>
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
                <h1 className="tableheadingshow">Personal information</h1>
                <div>
                  <div className="my-2">
                    <h1 className="userinfocontnet">First Name</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.first_name}
                    </h1>
                  </div>
                  <div className="my-2">
                    <h1 className="userinfocontnet">Last Name</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.last_name}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">Cell Phone</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.cell_phone}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">Email</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.email}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">Address</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.address}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">Middle Initial</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.middle_initial}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">City</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.city}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">State</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.state}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">Zip Code</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.zip_code}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">Date Available To Work</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.date_available_to_work}
                    </h1>
                  </div>
                  <div className="my-2">
                    <h1 className="userinfocontnet">Date of Birth</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.date_of_birth}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">
                      What type of position are you seeking?
                    </h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.position_seeking}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">
                      Are you at least 18 years of age?
                    </h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.is_adult}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">Us Citizen</h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.us_citizen == true ? "YES" : "NO"}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">
                      Are you legally authorized to work in the United States?
                    </h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.authorized_to_work == true
                        ? "YES"
                        : "NO"}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">
                      Have you ever been convicted of a Felony?
                    </h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.felony_conviction == true
                        ? "YES"
                        : "NO"}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">
                      Have you ever been convicted of a crime involving thief,
                      money laundering, counterfeit, terrorist finding, or an
                      other financial related crime(s)?
                    </h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.financial_crime_conviction == true
                        ? "YES"
                        : "NO"}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">
                      In the past 10 years, have you ever been terminated,
                      suspended, or asked to resign from any position?
                    </h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.felony_conviction == true
                        ? "YES"
                        : "NO"}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">
                      Have you serve in the military?
                    </h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.military_service == true
                        ? "YES"
                        : "NO"}
                    </h1>
                  </div>{" "}
                  <div className="my-2">
                    <h1 className="userinfocontnet">
                      Do you have a valid Driver's License?
                    </h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.has_driver_license == true
                        ? "YES"
                        : "NO"}
                    </h1>
                  </div>{" "}
                </div>
                {GetAppliedJobDetail?.educations?.map((education, index) => (
                  <div>
                    <h1 className="tableheadingshow">
                      Education# {index + 1}{" "}
                    </h1>
                    <div className="my-2">
                      <h1 className="userinfocontnet">First School Type</h1>
                      <h1 className="userinfocontnetans">
                        {education?.school_type}
                      </h1>
                    </div>
                    <div className="my-2">
                      <h1 className="userinfocontnet">School Name</h1>
                      <h1 className="userinfocontnetans">
                        {education?.school_name}
                      </h1>
                    </div>
                    <div className="my-2">
                      <h1 className="userinfocontnet"> Degree/Diploma Type</h1>
                      <h1 className="userinfocontnetans">
                        {education?.degree_type}
                      </h1>
                    </div>
                    <div className="my-2">
                      <h1 className="userinfocontnet"> Date Completed</h1>
                      <h1 className="userinfocontnetans">
                        {education?.date_completed}
                      </h1>
                    </div>
                    <div className="my-2">
                      <h1 className="userinfocontnet">Major Minor</h1>
                      <h1 className="userinfocontnetans">
                        {education?.major_minor}
                      </h1>
                    </div>
                  </div>
                ))}
                <div>
                  {GetAppliedJobDetail?.work_experiences?.map(
                    (experience, index) => (
                      <div>
                        <h1 className="tableheadingshow">
                          Work Experiences# {index + 1}
                        </h1>
                        <div>
                          <div className="my-2">
                            <h1 className="userinfocontnet">Employer Name</h1>
                            <h1 className="userinfocontnetans">
                              {experience?.employer_name}
                            </h1>
                          </div>
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              Job Title/ Position
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.job_title}
                            </h1>
                          </div>{" "}
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              Employment Duration
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.employment_duration}
                            </h1>
                          </div>{" "}
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              Last Date at this Employer?
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.last_completed}
                            </h1>
                          </div>{" "}
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              Primary Responsibilities
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.primary_responsibilities}
                            </h1>
                          </div>{" "}
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              Supervisors Name
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.supervisors_name}
                            </h1>
                          </div>{" "}
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              May we contact you Supervisor regarding your work
                              performance?
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.contact_supervisor == true
                                ? "YES"
                                : "NO"}
                            </h1>
                          </div>{" "}
                          <div className="my-2">
                            <h1 className="userinfocontnet">Job Status</h1>
                            <h1 className="userinfocontnetans">
                              {experience?.job_status}
                            </h1>
                          </div>{" "}
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              Have you or a family member ever worked for
                              Memorial Information previously?
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.previously_worked_at_memorial_information ==
                              true
                                ? "YES"
                                : "NO"}
                            </h1>
                          </div>{" "}
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              How did you learn about this job position with
                              Memorial Information?
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.how_did_you_learn_about_job}
                            </h1>
                          </div>
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              Have you signed or otherwise agreed to any
                              non-solicitation, non-competition, or other
                              similar post-employment restriction or agreement
                              with your current or any prior employer especially
                              regarding selling services to funeral homes,
                              hospitals, nursing homes, or other end-of-life
                              career facilities?
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.non_solicitation_agreement == true
                                ? "YES"
                                : "NO"}
                            </h1>
                          </div>{" "}
                          <div className="my-2">
                            <h1 className="userinfocontnet">
                              I certify that all of the information contained in
                              the Employment Application is true and complete
                              and I understand that any falsification or
                              omission of information made by me may disqualify
                              me from further consideration for employment or,
                              if hired, may result in my termination at any time
                              during the period of my employment, regardless of
                              the amount of time that has passed or production I
                              have made for Memorial Information.
                            </h1>
                            <h1 className="userinfocontnetans">
                              {experience?.certify_information == true
                                ? "YES"
                                : "NO"}
                            </h1>
                          </div>{" "}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div>
                  <h1 className="tableheadingshow">Other Information</h1>

                  <div className="my-2">
                    <h1 className="userinfocontnet">
                      {" "}
                      In addition to accurately completing the questions in the
                      application above, you are strongly encouraged to upload
                      your most recent CV and Cover Letter to hep our human
                      resources team get a better understanding of your
                      potential fit for the position you are applying for.
                      Please clearly convey your experience with meeting
                      metrics, exceeding expectations, pushing projects forward,
                      increasing revenue or decreasing expenses, and/or other
                      relevant experience.
                    </h1>
                    <h1 className="userinfocontnetans">
                      {GetAppliedJobDetail?.completing_questions === true
                        ? "YES"
                        : "NO"}
                    </h1>
                  </div>

                  <div className="my-2">
                    <h1 className="userinfocontnet">Cv</h1>
                    <h1 className="userinfocontnetans">
                      <a
                        href={GetAppliedJobDetail?.cv_upload}
                        target={GetAppliedJobDetail?.cv_upload}
                      >
                        View CV
                      </a>
                    </h1>
                  </div>

                  <div className="my-2">
                    <h1 className="userinfocontnet">Cover Letter</h1>
                    <h1 className="userinfocontnetans">
                      <a
                        href={GetAppliedJobDetail?.cover_letter}
                        target={GetAppliedJobDetail?.cover_letter}
                      >
                        View Cover Letter
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default CareersUserRequestList;
