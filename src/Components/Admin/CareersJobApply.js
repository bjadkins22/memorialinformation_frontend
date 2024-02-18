import React, { useEffect, useRef, useState } from "react";
import { Frontend_URL } from "../../environment";
import swal from "sweetalert";
import {
  AdminGetAllJobAction,
  ApplyJobSeeDetailAction,
  UserApplyjobAction,
  UserSendJobInqueryAction,
} from "../../Redux/actions/SuperAdminAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CareersJobApply = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { jobApplyID } = useParams();

  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [middle_initial, setmiddle_initial] = useState("");
  const [cell_phone, setcell_phone] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [felony_explanation, setfelony_explanation] = useState("");

  const [zip_code, setzip_code] = useState("");
  const [date_of_birth, setdate_of_birth] = useState(new Date());
  const [date_available_to_work, setdate_available_to_work] = useState(
    new Date()
  );
  const [position_seeking, setposition_seeking] = useState("");
  const [military_status, setmilitary_status] = useState("");

  const [cv_upload, setcv_upload] = useState("");
  const [cover_letter, setcover_letter] = useState("");

  const [has_driver_license, sethas_driver_license] = useState(null);
  const [military_service, setmilitary_service] = useState(null);
  const [employment_termination, setemployment_termination] = useState(null);
  const [termination_explanation, settermination_explanation] = useState("");
  const [financial_crime_conviction, sefinancial_crime_conviction] =
    useState(null);
  const [felony_conviction, setFelony_conviction] = useState(null);
  const [authorized_to_work, seauthorized_to_work] = useState(null);
  const [us_citizen, setus_citizen] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [is_adult, setis_adult] = useState(null);
  const [completing_questions, setcompleting_questions] = useState(null);

  // educations

  const [school_type, setschool_type] = useState("");
  const [school_name, setschool_name] = useState("");
  const [degree_type, setdegree_type] = useState("");
  const [date_completed, setdate_completed] = useState(new Date());
  const [major_minor, setmajor_minor] = useState("");

  // work_experiences
  const [certify_information, setcertify_information] = useState("");
  const [employer_name, setemployer_name] = useState("");
  const [job_title, setjob_title] = useState("");
  const [employment_duration, setemployment_duration] = useState("");
  const [primary_responsibilities, setprimary_responsibilities] = useState("");
  const [supervisors_name, setsupervisors_name] = useState("");
  const [contact_supervisor, setcontact_supervisor] = useState("");

  const handlcontact_supervisor = (index, value) => {
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences[index].contact_supervisor = value;
    setWorkExperiences(newWorkExperiences);
  };

  const [job_status, setjob_status] = useState("");
  const [last_completed, setlast_completed] = useState(new Date());
  const [
    previously_worked_at_memorial_information,
    setpreviously_worked_at_memorial_information,
  ] = useState("");
  const [how_did_you_learn_about_job, sethow_did_you_learn_about_job] =
    useState("");

  const [non_solicitation_agreement, setnon_solicitation_agreement] =
    useState("");

  const [rerender, setRerender] = useState(false);

  const {
    success,
    error,
    message: successMessage,
  } = useSelector((state) => state.UserApplyjobReducer);

  const { ApplyJobSeeDetail } = useSelector(
    (state) => state.ApplyJobSeeDetailReducer
  );

  useEffect(() => {
    if (jobApplyID) {
      dispatch(ApplyJobSeeDetailAction(jobApplyID));
    }
  }, [jobApplyID]);

  useEffect(() => {
    dispatch(AdminGetAllJobAction());
  }, []);

  const [educations, setEducations] = useState([
    {
      school_type: "",
      school_name: "",
      degree_type: "",
      date_completed: new Date(),
      major_minor: "",
    },
  ]);

  console.log("educations", educations);

  const handleChange = (index, field, value) => {
    setEducations((prevEducations) => {
      const newEducations = [...prevEducations];
      newEducations[index][field] = value;
      return newEducations;
    });
  };

  const addMoreEducation = () => {
    setEducations((prevEducations) => [
      ...prevEducations,
      {
        school_type: "",
        school_name: "",
        degree_type: "",
        date_completed: null,
        major_minor: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    setEducations((prevEducations) => {
      const newEducations = [...prevEducations];
      newEducations.splice(index, 1);
      return newEducations;
    });
  };

  const handleSubmit = () => {
    const formData = {
      "first name": first_name,
      "last name": last_name,
      "cell phone": cell_phone,
      email: email,
      address: address,
      city: city,
      state: state,
      "zip code": zip_code,
      "us citizen": us_citizen,
      "authorized to work": authorized_to_work,
      // "date of birth": date_of_birth,
      // "date available to work": date_available_to_work,
      "is adult": is_adult,
      "has driver license": has_driver_license,
      "felony conviction": felony_conviction,
      // "cv upload": cv_upload,
      // "cover letter": cover_letter,
      // "job status": job_status,
      // "last completed": last_completed,
      // "previously worked at memorial information":
      //   previously_worked_at_memorial_information,
      // "how did you learn about job": how_did_you_learn_about_job,
      // "non-solicitation agreement": non_solicitation_agreement,
      // "certify information": certify_information,
      // "school type": school_type,
      // "school name": school_name,
      // "degree type": degree_type,
      // "date completed": date_completed,
      // "major minor": major_minor,
      // "employer name": employer_name,
      // "job title": job_title,
      // "employment duration": employment_duration,
      // "primary responsibilities": primary_responsibilities,
      // "supervisors name": supervisors_name,
      // "contact supervisor": contact_supervisor,
    };

    const missingFields = [];

    for (const field of Object.keys(formData)) {
      if (!formData[field]) {
        missingFields.push(field);
        swal({
          icon: "error",
          icon: "/img/Memorial icon.png",
          title: "Validation Error",
          text: `Please fill in the required field: ${field}.`,
        });
        return;
      }
    }
    // Validation

    const formdata = new FormData();
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("middle_initial", middle_initial);
    formdata.append("cell_phone", cell_phone);
    formdata.append("email", email);
    formdata.append("address", address);
    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("zip_code", zip_code);
    formdata.append("felony_explanation", felony_explanation);

    formdata.append("us_citizen", us_citizen);
    formdata.append("authorized_to_work", authorized_to_work);
    formdata.append(
      "date_of_birth",
      moment(date_of_birth).format("YYYY-MM-DD")
    );
    formdata.append(
      "date_available_to_work",
      moment(date_available_to_work).format("YYYY-MM-DD")
    );
    formdata.append("is_adult", is_adult);
    formdata.append("has_driver_license", has_driver_license);
    formdata.append("felony_conviction", felony_conviction);
    formdata.append("financial_crime_conviction", financial_crime_conviction);
    formdata.append("employment_termination", employment_termination);
    formdata.append("position_seeking", position_seeking);
    formdata.append("military_service", military_service);
    formdata.append("military_status", military_status);
    formdata.append("termination_explanation", termination_explanation);
    formdata.append("completing_questions", completing_questions);

    // educations

    educations.forEach((item, index) => {
      formdata.append(`educations[${index}]school_type`, item.school_type);

      const formattedDate = moment(item.date_completed).format("YYYY-MM-DD");
      formdata.append(`educations[${index}]date_completed`, formattedDate);

      if (item.degree_type) {
        formdata.append(`educations[${index}]degree_type`, item.degree_type);
      }
      if (item.major_minor) {
        formdata.append(`educations[${index}]major_minor`, item.major_minor);
      }
      if (item.school_name) {
        formdata.append(`educations[${index}]school_name`, item.school_name);
      }
    });

    // work_experiences

    // work_experiences

    workExperiences.forEach((item, index) => {
      formdata.append(
        `work_experiences[${index}]school_type`,
        item.school_type
      );

      const formattedDate = moment(item.last_completed).format("YYYY-MM-DD");
      formdata.append(
        `work_experiences[${index}]last_completed`,
        formattedDate
      );

      if (item.employer_name) {
        formdata.append(
          `work_experiences[${index}]employer_name`,
          item.employer_name
        );
      }
      if (item.job_title) {
        formdata.append(`work_experiences[${index}]job_title`, item.job_title);
      }
      if (item.employment_duration) {
        formdata.append(
          `work_experiences[${index}]employment_duration`,
          item.employment_duration
        );
      }
      if (item.primary_responsibilities) {
        formdata.append(
          `work_experiences[${index}]primary_responsibilities`,
          item.primary_responsibilities
        );
      }

      if (item.supervisors_name) {
        formdata.append(
          `work_experiences[${index}]supervisors_name`,
          item.supervisors_name
        );
      }
      if (item.contact_supervisor) {
        formdata.append(
          `work_experiences[${index}]contact_supervisor`,
          item.contact_supervisor
        );
      }
      if (item.job_status) {
        formdata.append(
          `work_experiences[${index}]job_status`,
          item.job_status
        );
      }
      if (item.previously_worked_at_memorial_information) {
        formdata.append(
          `work_experiences[${index}]previously_worked_at_memorial_information`,
          item.previously_worked_at_memorial_information
        );
      }
      if (item.how_did_you_learn_about_job) {
        formdata.append(
          `work_experiences[${index}]how_did_you_learn_about_job`,
          item.how_did_you_learn_about_job
        );
      }
      if (item.non_solicitation_agreement) {
        formdata.append(
          `work_experiences[${index}]non_solicitation_agreement`,
          item.non_solicitation_agreement
        );
      }
      if (item.certify_information) {
        formdata.append(
          `work_experiences[${index}]certify_information`,
          item.certify_information
        );
      }
    });

    formdata.append("cv_upload", cv_upload);
    formdata.append("cover_letter", cover_letter);
    // formdata.append("work_experiences[0]job_application", jobApplyID);

    formdata.append("job_post", jobApplyID);

    dispatch(UserApplyjobAction(formdata));
    setRerender(true);
  };

  const handleAddCv = (event) => {
    const file = event?.target?.files[0];

    if (file) {
      if (file.type === "application/pdf") {
        setcv_upload(file);
      } else {
        swal({
          icon: "error",
          title: "Invalid File Type",
          text: "Please upload a PDF file.",
        });

        event.target.value = null;
      }
    }
  };

  const handleCoverletter = (event) => {
    const file = event?.target?.files[0];

    if (file) {
      if (file.type === "application/pdf") {
        setcover_letter(file);
      } else {
        swal({
          icon: "error",
          title: "Invalid File Type",
          text: "Please upload a PDF file.",
        });

        event.target.value = null;
      }
    }
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "",
        text: `
        Thank you for applying for one or more of our open positions at Memorial Information where your next career path with our team can be life altering and financially transformative for you.
  
          We receive several applications regularly and consider each applicant thoroughly. Our Human Resources team will contact you if they determine you are a great fit for the position(s) you applied for. Please continue to check your e-mail and Spam folder to avoid missing a potential interview invitation from us.
  
          Thanks again and have a great day.
        `,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        // buttons: false,
        width: "80%",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
      });

      setRerender(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIsAdult = (event) => {
    setis_adult(event.target.value);
  };

  const handlecompleting_questions = (event) => {
    setcompleting_questions(event.target.value);
  };

  const handleUscitizen = (event) => {
    setus_citizen(event.target.value);
  };

  const handleIAuthorizedWork = (event) => {
    seauthorized_to_work(event.target.value);
  };

  const handlefelony_conviction = (event) => {
    setFelony_conviction(event.target.value);
  };

  const handleFinancialCrime = (event) => {
    sefinancial_crime_conviction(event.target.value);
  };

  const handleEmploymentTermination = (event) => {
    setemployment_termination(event.target.value);
  };

  const handlemilitary_service = (event) => {
    setmilitary_service(event.target.value);
  };

  const handlhas_driver_license = (event) => {
    sethas_driver_license(event.target.value);
  };

  const handlnon_solicitation_agreement = (index, value) => {
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences[index].non_solicitation_agreement = value;
    setWorkExperiences(newWorkExperiences);
  };

  const handlcertify_information = (index, value) => {
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences[index].certify_information = value;
    setWorkExperiences(newWorkExperiences);
  };

  const handlpreviously_worked_at_memorial_information = (index, value) => {
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences[index].previously_worked_at_memorial_information = value;
    setWorkExperiences(newWorkExperiences);
  };

  const durationOptions = Array.from({ length: 40 }, (_, index) => index + 1);

  const [workExperiences, setWorkExperiences] = useState([
    {
      employer_name: "",
      job_title: "",
      employment_duration: "",
      last_completed: new Date(),
      primary_responsibilities: "",
      supervisors_name: "",
      contact_supervisor: "",
      job_status: "",
      previously_worked_at_memorial_information: "",
      how_did_you_learn_about_job: "",
      non_solicitation_agreement: "",
      certify_information: "",
    },
  ]);

  const handleAddWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        employer_name: "",
        job_title: "",
        employment_duration: "",
        last_completed: new Date(),
        primary_responsibilities: "",
        supervisors_name: "",
        contact_supervisor: "",
        job_status: "",
        previously_worked_at_memorial_information: "",
        how_did_you_learn_about_job: "",
        non_solicitation_agreement: "",
        certify_information: "",
      },
    ]);
  };

  const removeExpernice = (index) => {
    setWorkExperiences((prevEducations) => {
      const newEducations = [...prevEducations];
      newEducations.splice(index, 1);
      return newEducations;
    });
  };

  const handleChangework = (index, field, value) => {
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences[index][field] = value;
    setWorkExperiences(newWorkExperiences);
  };

  useEffect(() => {
    // Specify the target scroll position (in pixels)
    const targetScrollPosition = 500;

    // Scroll the page to the specified position
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });
  }, []);

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 400; // Adjust this value based on when you want the button to become fixed

    setIsFixed(scrollPosition > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="main-about-page">
        <div className="about-fixedimage">
          <div
            className="main-containerabout"
            style={{
              backgroundImage: `url(${Frontend_URL}img/human-resources-concept.jpg)`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="bgimage-contnet">
              <div className="container p-3  mx-auto ">
                <div className="toptextabout">
                  <div className="image-textcontnet">
                    <div className="center-sectioncontnet">
                      <p className="merorialtext">Memorial Information</p>
                      <h1 className="letus-text-contnet text-white">
                        <span className="land-text-contnet">
                          {ApplyJobSeeDetail?.title}
                        </span>
                      </h1>
                      <p className="funeral-contnet mt-4">
                        Homepage / Apply Job
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-12">
            <div className="requrimentsfiled">
              <div className="applybtn-headd">
                <div className="flex justify-center">
                  <img class="memoriallogoinfo" src="/img/Memorial 1.png" />
                </div>

                <h1 className="whychooseusess adddesc">
                  {ApplyJobSeeDetail?.title}
                </h1>
                {/* <div className="flex justify-end">
                  <button onClick={handleClickOpen} className="applynowbtn">
                    Apply Now
                  </button>
                </div> */}

                <div
                  className={`apply-now-container ${isFixed ? "fixed" : ""}`}
                >
                  <button onClick={handleClickOpen} className="applynowbtn">
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="requrimentsfiled">
                <h2 className="requirementshead">Job Information</h2>
                <p className="betterwhychooseus adddescrip">
                  {ApplyJobSeeDetail?.description}
                </p>{" "}
              </div>

              <div className="requrimentsfiled">
                <h2 className="requirementshead">Location</h2>
                <p className="betterwhychooseus adddescrip">
                  {ApplyJobSeeDetail?.location}
                </p>{" "}
              </div>
              <div className="requrimentsfiled">
                <h2 className="requirementshead">Salary Range</h2>
                <p className="betterwhychooseus adddescrip">
                  {ApplyJobSeeDetail?.salary_range}
                </p>{" "}
              </div>

              <div className="requrimentsfiled">
                <h2 className="requirementshead">Requirements</h2>
                <p className="betterwhychooseus adddescrip">
                  {ApplyJobSeeDetail?.job_requirements}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <div className="closebuttonform">
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div>
          <div className="min-w-screen min-h-screen bg-[#c99e59] flex items-center justify-center md:px-5 md:py-5">
            <div
              className="relative bg-white text-gray-500 w-full overflow-hidden"
              style={{ maxWidth: "800px" }}
            >
              <div className="applyjobnow">
                <div className="welcom-black bg-white w-full md:px-10 md:py-10">
                  <div className="w-full h-100">
                    <h1 className="mb-2 text-xl text-black md:text-2xl font-bold leading-tight md:mt-4 header-welcom-back">
                      {ApplyJobSeeDetail?.title}
                    </h1>

                    <div className="mt-6">
                      <div className="grid sm:grid-cols-2 gap-4 xs:grid-cols-1 items-center">
                        <div className="">
                          <label className="labelheadpost block text-grey-700">
                            First Name*
                          </label>
                          <input
                            value={first_name}
                            onChange={(e) => setfirst_name(e.target.value)}
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                        </div>
                        <div className=" ">
                          <label className="labelheadpost block text-grey-700">
                            Last Name*
                          </label>
                          <input
                            value={last_name}
                            onChange={(e) => setlast_name(e.target.value)}
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                        </div>
                        <div className="">
                          <label className="labelheadpost block text-grey-700">
                            Middle Initial*
                          </label>
                          <input
                            value={middle_initial}
                            onChange={(e) => setmiddle_initial(e.target.value)}
                            type="text"
                            placeholder="Middle Initial"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                        </div>
                        <div className=" ">
                          <label className="labelheadpost block text-grey-700">
                            Cell Phone*
                          </label>
                          <input
                            value={cell_phone}
                            onChange={(e) => setcell_phone(e.target.value)}
                            type="text"
                            placeholder="Cell Phone"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                        </div>
                        <div className="">
                          <label className="labelheadpost block text-grey-700">
                            Email*
                          </label>
                          <input
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            type="text"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                        </div>
                        <div className="">
                          <label className="labelheadpost block text-grey-700">
                            Address*
                          </label>
                          <input
                            value={address}
                            onChange={(e) => setaddress(e.target.value)}
                            type="text"
                            placeholder="Address"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                        </div>
                        <div className=" ">
                          <label className="labelheadpost block text-grey-700">
                            City*
                          </label>
                          <input
                            value={city}
                            onChange={(e) => setcity(e.target.value)}
                            type="text"
                            placeholder="City"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                        </div>
                        <div className=" ">
                          <label className="labelheadpost block text-grey-700">
                            State*
                          </label>
                          <input
                            value={state}
                            onChange={(e) => setstate(e.target.value)}
                            type="text"
                            placeholder="State"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                        </div>
                        <div className=" mt-2">
                          <label className="labelheadpost block text-grey-700">
                            Zip Code*
                          </label>
                          <input
                            value={zip_code}
                            onChange={(e) => setzip_code(e.target.value)}
                            type="text"
                            placeholder="Zip Code"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          />
                        </div>
                        <div className=" mt-2">
                          <label className="labelheadpost block text-gray-700">
                            Date Available To Work*
                          </label>

                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                              formatDate={(date) =>
                                moment(new Date()).format("DD-MM-YYYY")
                              }
                              value={date_available_to_work}
                              onChange={(e) =>
                                setdate_available_to_work(e?.target?.value)
                              }
                              maxDate={new Date()}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>{" "}
                        <div className=" mt-2">
                          <label className="labelheadpost block text-gray-700">
                            Date of Birth*
                          </label>

                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                              formatDate={(date) =>
                                moment(new Date()).format("DD-MM-YYYY")
                              }
                              maxDate={new Date()}
                              value={date_of_birth}
                              onChange={(e) => {
                                setdate_of_birth(e?.target?.value);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>{" "}
                        <div className=" mt-2 mb-4">
                          <label className="labelheadpost block text-gray-700">
                            What type of position are you seeking?*
                          </label>
                          <select
                            value={position_seeking}
                            onChange={(e) =>
                              setposition_seeking(e.target.value)
                            }
                            minlength="6"
                            className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                          >
                            <option selected>Select Position</option>
                            <option value="full-time-sales">
                              Full Time Sales
                            </option>
                            <option value="full-time-non-sales">
                              Full Time-non Sales
                            </option>
                            <option value="part-time-sales">
                              Part Time Sales
                            </option>
                            <option value="part-time-non-sales">
                              Part Time Non Sales
                            </option>
                            <option value="099-contractor">
                              099-contractor
                            </option>
                            <option value="seasonal/temporary">
                              Seasonal/temporary
                            </option>
                          </select>
                        </div>
                        <div className=" mt-2">
                          <label className="labelheadpost block text-gray-700">
                            Are you at least 18 years of age?*
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="true"
                                checked={is_adult === "true"}
                                onChange={handleIsAdult}
                              />
                              <label>Yes</label>
                            </div>
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="false"
                                checked={is_adult === "false"}
                                onChange={handleIsAdult}
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-2">
                          <label className="labelheadpost block text-gray-700">
                            Us Citizen*
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="true"
                                checked={us_citizen === "true"}
                                onChange={handleUscitizen}
                              />
                              <label>Yes</label>
                            </div>
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="false"
                                checked={us_citizen === "false"}
                                onChange={handleUscitizen}
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-2">
                          <label className="labelheadpost block text-gray-700">
                            Are you legally authorized to work in the United
                            States?*
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="true"
                                checked={authorized_to_work === "true"}
                                onChange={handleIAuthorizedWork}
                              />
                              <label>Yes</label>
                            </div>
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="false"
                                checked={authorized_to_work === "false"}
                                onChange={handleIAuthorizedWork}
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-2">
                          <label className="labelheadpost block text-gray-700">
                            Have you ever been convicted of a Felony?*
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="true"
                                checked={felony_conviction === "true"}
                                onChange={handlefelony_conviction}
                              />
                              <label>Yes</label>
                            </div>
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="false"
                                checked={felony_conviction === "false"}
                                onChange={handlefelony_conviction}
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>{" "}
                        <div className=" mt-2">
                          <label className="labelheadpost block text-gray-700">
                            Have you ever been convicted of a crime involving
                            thief, money laundering, counterfeit, terrorist
                            finding, or an other financial related crime(s)?*
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="true"
                                checked={financial_crime_conviction === "true"}
                                onChange={handleFinancialCrime}
                              />
                              <label>Yes</label>
                            </div>
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="false"
                                checked={financial_crime_conviction === "false"}
                                onChange={handleFinancialCrime}
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>{" "}
                        {felony_conviction === "true" && (
                          <div className=" ">
                            <label className="labelheadpost block text-grey-700">
                              Explain*
                            </label>
                            <input
                              value={felony_explanation}
                              onChange={(e) =>
                                setfelony_explanation(e.target.value)
                              }
                              type="text"
                              placeholder="Explain"
                              className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                            />
                          </div>
                        )}
                        <div className="mt-2">
                          <label className="labelheadpost block text-gray-700">
                            In the past 10 years, have you ever been terminated,
                            suspended, or asked to resign from any position?*
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="true"
                                checked={employment_termination === "true"}
                                onChange={handleEmploymentTermination}
                              />
                              <label>Yes</label>
                            </div>
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="false"
                                checked={employment_termination === "false"}
                                onChange={handleEmploymentTermination}
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>{" "}
                        <div className=" mt-2">
                          <label className="labelheadpost block text-gray-700">
                            Have you serve in the military?*
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="true"
                                checked={military_service === "true"}
                                onChange={handlemilitary_service}
                              />
                              <label>Yes</label>
                            </div>
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="false"
                                checked={military_service === "false"}
                                onChange={handlemilitary_service}
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>{" "}
                        {employment_termination === "true" && (
                          <div className=" ">
                            <label className="labelheadpost block text-grey-700">
                              Termination Explanation*
                            </label>
                            <input
                              value={termination_explanation}
                              onChange={(e) =>
                                settermination_explanation(e.target.value)
                              }
                              type="text"
                              placeholder="Termination Explanation"
                              className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                            />
                          </div>
                        )}
                        {military_service === "true" && (
                          <div className=" mt-2 mb-4">
                            <label className="labelheadpost block text-gray-700">
                              Military Status
                            </label>
                            <select
                              value={military_status}
                              onChange={(e) =>
                                setmilitary_status(e.target.value)
                              }
                              minlength="6"
                              className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                            >
                              <option selected>Select Status</option>
                              <option value="active">Active</option>
                              <option value="honorably-discharged">
                                Honorably-discharged
                              </option>
                              <option value="dishonorably-discharged">
                                Dishonorably-discharged
                              </option>
                              <option value="retired">Retired</option>
                            </select>
                          </div>
                        )}
                        <div className=" mt-2">
                          <label className="labelheadpost block text-gray-700">
                            Do you have a valid Driver's License?*
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="true"
                                checked={has_driver_license === "true"}
                                onChange={handlhas_driver_license}
                              />
                              <label>Yes</label>
                            </div>
                            <div className="flex items-center my-4">
                              <input
                                className="w-5 h-5 mx-2"
                                type="radio"
                                value="false"
                                checked={has_driver_license === "false"}
                                onChange={handlhas_driver_license}
                              />
                              <label>No</label>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                      {educations.map((education, index) => (
                        <div key={index}>
                          <h1 className="mb-2 text-xl text-black md:text-2xl font-bold leading-tight md:mt-4 header-welcom-back">
                            Education #{index + 1}*
                          </h1>
                          <div className="grid sm:grid-cols-2 gap-4 xs:grid-cols-1">
                            <div className="mt-2">
                              <label className="labelheadpost block text-grey-700">
                                School Type*
                              </label>
                              <select
                                value={education.school_type}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "school_type",
                                    e.target.value
                                  )
                                }
                                className="w-full px-4 py-3 rounded-lg bg-blue-50 mt-2 border focus:outline-none"
                              >
                                <option>Select Type</option>
                                <option value="High School">High School</option>
                                <option value="College">College</option>
                                <option value="Graduate School">
                                  Graduate School
                                </option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                            <div className="mt-2">
                              <label className="labelheadpost block text-grey-700">
                                School Name*
                              </label>
                              <input
                                value={education.school_name}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "school_name",
                                    e.target.value
                                  )
                                }
                                type="text"
                                placeholder="School Name"
                                className="w-full px-4 py-3 rounded-lg bg-blue-50 mt-2 border focus:outline-none"
                              />
                            </div>
                            <div className="mt-2">
                              <label className="labelheadpost block text-grey-700">
                                Degree/Diploma Type*
                              </label>
                              <input
                                value={education.degree_type}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "degree_type",
                                    e.target.value
                                  )
                                }
                                type="text"
                                placeholder="Degree/Diploma Type"
                                className="w-full px-4 py-3 rounded-lg bg-blue-50 mt-2 border focus:outline-none"
                              />
                            </div>
                            <div className="mt-2">
                              <label className="labelheadpost block text-gray-700">
                                Date Completed*
                              </label>
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <DesktopDatePicker
                                  formatDate={(date) =>
                                    moment(new Date()).format("DD-MM-YYYY")
                                  }
                                  maxDate={new Date()}
                                  value={education.date_completed}
                                  onChange={(e) =>
                                    handleChange(
                                      index,
                                      "date_completed",
                                      e?.target?.value
                                    )
                                  }
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </LocalizationProvider>
                            </div>{" "}
                            <div className="mt-2">
                              <label className="labelheadpost block text-grey-700">
                                Major Minor*
                              </label>
                              <input
                                value={education.major_minor}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "major_minor",
                                    e.target.value
                                  )
                                }
                                type="text"
                                placeholder="Major Minor"
                                className="w-full px-4 py-3 rounded-lg bg-blue-50 mt-2 border focus:outline-none"
                              />
                            </div>
                          </div>

                          {educations?.length > 1 && (
                            <button
                              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-8"
                              onClick={() => removeEducation(index)}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-8"
                        onClick={addMoreEducation}
                      >
                        Add More
                      </button>
                      {workExperiences?.map((experience, index) => (
                        <>
                          <div>
                            <h1 className="mb-2 text-xl text-black md:text-2xl font-bold leading-tight md:mt-4 header-welcom-back">
                              Work Experiences*
                            </h1>
                            <div className="grid sm:grid-cols-2 gap-4 xs:grid-cols-1">
                              <div className=" mt-2">
                                <label className="labelheadpost block text-grey-700">
                                  Employer Name*
                                </label>
                                <input
                                  value={experience.employer_name}
                                  onChange={(e) =>
                                    handleChangework(
                                      index,
                                      "employer_name",
                                      e.target.value
                                    )
                                  }
                                  type="text"
                                  placeholder="Employer Name"
                                  className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                />
                              </div>
                              <div className=" mt-2">
                                <label className="labelheadpost block text-grey-700">
                                  Job Title/ Position*
                                </label>
                                <input
                                  value={experience.job_title}
                                  onChange={(e) =>
                                    handleChangework(
                                      index,
                                      "job_title",
                                      e.target.value
                                    )
                                  }
                                  type="text"
                                  placeholder="Job Title/ Position"
                                  className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                />
                              </div>
                              <div className=" mt-2">
                                <label className="labelheadpost block text-grey-700">
                                  Employment Duration*
                                </label>
                                <select
                                  value={experience.employment_duration}
                                  onChange={(e) =>
                                    handleChangework(
                                      index,
                                      "employment_duration",
                                      e.target.value
                                    )
                                  }
                                  minLength="6"
                                  className="w-full px-4 py-3 rounded-lg bg-blue-50 mt-2 border focus:outline-none"
                                >
                                  <option disabled value="" selected>
                                    Select Duration
                                  </option>
                                  {durationOptions.map((value) => (
                                    <option key={value} value={value}>
                                      {value} {value !== 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className=" mt-2">
                                <label className="labelheadpost block text-gray-700">
                                  Last Date at this Employer?*
                                </label>

                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                >
                                  <DesktopDatePicker
                                    formatDate={(date) =>
                                      moment(new Date()).format("DD-MM-YYYY")
                                    }
                                    maxDate={new Date()}
                                    value={experience.last_completed}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "last_completed",
                                        e?.target?.value
                                      )
                                    }
                                    renderInput={(params) => (
                                      <TextField {...params} />
                                    )}
                                  />
                                </LocalizationProvider>
                              </div>{" "}
                              <div className=" mt-2">
                                <label className="labelheadpost block text-grey-700">
                                  Primary Responsibilities*
                                </label>
                                <input
                                  value={experience.primary_responsibilities}
                                  onChange={(e) =>
                                    handleChangework(
                                      index,
                                      "primary_responsibilities",
                                      e.target.value
                                    )
                                  }
                                  type="text"
                                  placeholder="Primary Responsibilities"
                                  className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                />
                              </div>
                              <div className=" mt-2">
                                <label className="labelheadpost block text-grey-700">
                                  Supervisors Name*
                                </label>
                                <input
                                  value={experience.supervisors_name}
                                  onChange={(e) =>
                                    handleChangework(
                                      index,
                                      "supervisors_name",
                                      e.target.value
                                    )
                                  }
                                  type="text"
                                  placeholder="Supervisors Name"
                                  className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                />
                              </div>
                              <div className=" mt-2">
                                <label className="labelheadpost block text-gray-700">
                                  May we contact you Supervisor regarding your
                                  work performance?*
                                </label>

                                <div className="flex items-center gap-2">
                                  <div className="flex items-center my-4">
                                    <input
                                      className="w-5 h-5 mx-2"
                                      type="radio"
                                      value="true"
                                      checked={
                                        experience.contact_supervisor === "true"
                                      }
                                      onChange={() =>
                                        handlcontact_supervisor(index, "true")
                                      }
                                    />
                                    <label>Yes</label>
                                  </div>
                                  <div className="flex items-center my-4">
                                    <input
                                      className="w-5 h-5 mx-2"
                                      type="radio"
                                      value="false"
                                      checked={
                                        experience.contact_supervisor ===
                                        "false"
                                      }
                                      onChange={() =>
                                        handlcontact_supervisor(index, "false")
                                      }
                                    />
                                    <label>No</label>
                                  </div>
                                </div>
                              </div>{" "}
                              <div className=" mt-2">
                                <label className="labelheadpost block text-grey-700">
                                  Job Status
                                </label>

                                <select
                                  value={experience.job_status}
                                  onChange={(e) =>
                                    handleChangework(
                                      index,
                                      "job_status",
                                      e.target.value
                                    )
                                  }
                                  minlength="6"
                                  className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                >
                                  <option selected>Select Status</option>
                                  <option value="current">current</option>
                                  <option value="2 Week Notice">
                                    2 Week Notice
                                  </option>
                                  <option value="Left Position">
                                    Left Position
                                  </option>
                                  <option value="Laid-off">Laid-off</option>
                                  <option value="Got Fired">
                                    099-contractor
                                  </option>
                                  <option value="Retired">Retired</option>
                                  <option value="Medical Leave">
                                    Medical Leave
                                  </option>{" "}
                                  <option value="Person Leave">
                                    Person Leave
                                  </option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                              <div className=" mt-2">
                                <label className="labelheadpost text-grey-700">
                                  Have you or a family member ever worked for
                                  Memorial Information previously?*
                                </label>

                                <div className="flex items-center gap-2">
                                  <div className="flex items-center my-4">
                                    <input
                                      className="w-5 h-5 mx-2"
                                      type="radio"
                                      value="true"
                                      checked={
                                        experience.previously_worked_at_memorial_information ===
                                        "true"
                                      }
                                      onChange={() =>
                                        handlpreviously_worked_at_memorial_information(
                                          index,
                                          "true"
                                        )
                                      }
                                    />
                                    <label>Yes</label>
                                  </div>
                                  <div className="flex items-center my-4">
                                    <input
                                      className="w-5 h-5 mx-2"
                                      type="radio"
                                      value="false"
                                      checked={
                                        experience.previously_worked_at_memorial_information ===
                                        "false"
                                      }
                                      onChange={() =>
                                        handlpreviously_worked_at_memorial_information(
                                          index,
                                          "false"
                                        )
                                      }
                                    />
                                    <label>No</label>
                                  </div>
                                </div>
                              </div>
                              <div className=" mt-2">
                                <label className="labelheadpost block text-grey-700">
                                  How did you learn about this job position with
                                  Memorial Information?*
                                </label>

                                <select
                                  value={experience.how_did_you_learn_about_job}
                                  onChange={(e) =>
                                    handleChangework(
                                      index,
                                      "how_did_you_learn_about_job",
                                      e.target.value
                                    )
                                  }
                                  minlength="6"
                                  className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                >
                                  <option selected>Select Status</option>
                                  <option value="Indeed">Indeed</option>
                                  <option value="Recruiter">Recruiter</option>
                                  <option value="Word of Mouth">
                                    Word of Mouth
                                  </option>
                                  <option value="MI Employee">
                                    MI Employee
                                  </option>
                                  <option value="Facebook">Facebook</option>
                                  <option value="Instagram">Instagram</option>
                                  <option value="Twitter/X">Twitter/X</option>
                                  <option value="College/School Advisor">
                                    College/School Advisor
                                  </option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className=" mt-2">
                              <label className="labelheadpost block text-gray-700">
                                Have you signed or otherwise agreed to any
                                non-solicitation, non-competition, or other
                                similar post-employment restriction or agreement
                                with your current or any prior employer
                                especially regarding selling services to funeral
                                homes, hospitals, nursing homes, or other
                                end-of-life career facilities?*
                              </label>
                              <div className="flex items-center gap-2 my-4">
                                <div className="flex items-center my-4">
                                  <input
                                    className="w-5 h-5 mx-2"
                                    type="radio"
                                    value="true"
                                    checked={
                                      experience.non_solicitation_agreement ===
                                      "true"
                                    }
                                    onChange={() =>
                                      handlnon_solicitation_agreement(
                                        index,
                                        "true"
                                      )
                                    }
                                  />
                                  <label>Yes</label>
                                </div>
                                <div className="flex items-center my-4">
                                  <input
                                    className="w-5 h-5 mx-2"
                                    type="radio"
                                    value="false"
                                    checked={
                                      experience.non_solicitation_agreement ===
                                      "false"
                                    }
                                    onChange={() =>
                                      handlnon_solicitation_agreement(
                                        index,
                                        "false"
                                      )
                                    }
                                  />
                                  <label>No</label>
                                </div>
                              </div>
                            </div>{" "}
                            <div className=" mt-2">
                              <label className="labelheadpost block text-gray-700">
                                I certify that all of the information contained
                                in the Employment Application is true and
                                complete and I understand that any falsification
                                or omission of information made by me may
                                disqualify me from further consideration for
                                employment or, if hired, may result in my
                                termination at any time during the period of my
                                employment, regardless of the amount of time
                                that has passed or production I have made for
                                Memorial Information.*
                              </label>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center my-4">
                                  <input
                                    className="w-5 h-5 mx-2"
                                    type="radio"
                                    value="true"
                                    checked={
                                      experience.certify_information === "true"
                                    }
                                    onChange={() =>
                                      handlcertify_information(index, "true")
                                    }
                                  />
                                  <label>Yes</label>
                                </div>
                                <div className="flex items-center my-4">
                                  <input
                                    className="w-5 h-5 mx-2"
                                    type="radio"
                                    value="false"
                                    checked={
                                      experience.certify_information === "false"
                                    }
                                    onChange={() =>
                                      handlcertify_information(index, "false")
                                    }
                                  />
                                  <label>No</label>
                                </div>
                              </div>
                            </div>{" "}
                            {workExperiences?.length > 1 && (
                              <button
                                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-8"
                                onClick={() => removeExpernice(index)}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        </>
                      ))}
                      <button
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-8"
                        onClick={handleAddWorkExperience}
                      >
                        Add More
                      </button>
                      <div className=" mt-2">
                        <label className="labelheadpost block text-gray-700">
                          In addition to accurately completing the questions in
                          the application above, you are strongly encouraged to
                          upload your most recent CV and Cover Letter to hep our
                          human resources team get a better understanding of
                          your potential fit for the position you are applying
                          for. Please clearly convey your experience with
                          meeting metrics, exceeding expectations, pushing
                          projects forward, increasing revenue or decreasing
                          expenses, and/or other relevant experience.
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center my-4">
                            <input
                              className="w-5 h-5 mx-2"
                              type="radio"
                              value="true"
                              checked={completing_questions === "true"}
                              onChange={handlecompleting_questions}
                            />
                            <label>Yes</label>
                          </div>
                          <div className="flex items-center my-4">
                            <input
                              className="w-5 h-5 mx-2"
                              type="radio"
                              value="false"
                              checked={completing_questions === "false"}
                              onChange={handlecompleting_questions}
                            />
                            <label>No</label>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="grid grid-cols-2 gap-4">
                        <div className=" mt-2">
                          <label className="labelheadpost block text-grey-700">
                            Cv Upload*
                          </label>

                          <input
                            onChange={handleAddCv}
                            type="file"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          />
                        </div>
                        <div className=" mt-2">
                          <label className="labelheadpost block text-grey-700">
                            Cover Letter
                          </label>
                          <input
                            onChange={handleCoverletter}
                            type="file"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
                      px-4 py-3 mt-6"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CareersJobApply;
