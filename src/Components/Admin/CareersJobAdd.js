import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import swal from "sweetalert";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  AdminAddJobAction,
  AdminGetByIDJobAction,
  AdminUpdateJobAction,
} from "../../Redux/actions/SuperAdminAction";

const CareersJobAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { jobID } = useParams();

  const { success, error, message } = useSelector(
    (state) => state.AdminAddJobReducer
  );

  const {
    success: successUpdate,
    error: errorUpdate,
    message: Updatemessage,
  } = useSelector((state) => state.AdminUpdateJobReducer);

  useEffect(() => {
    if (jobID) {
      dispatch(AdminGetByIDJobAction(jobID));
    }
  }, [jobID]);

  const { AdminGetByIDJob } = useSelector(
    (state) => state.AdminGetByIDJobReducer
  );

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [job_requirements, setjob_requirements] = useState("");

  const [location, setlocation] = useState("");
  const [experince, setexperince] = useState("");
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (AdminGetByIDJob) {
      setTitle(AdminGetByIDJob?.title);
      setdescription(AdminGetByIDJob?.description);
      setlocation(AdminGetByIDJob?.location);
      setexperince(AdminGetByIDJob?.salary_range);
      setjob_requirements(AdminGetByIDJob?.job_requirements);
    }
  }, [AdminGetByIDJob]);

  const handleSubmit = () => {
    const formdata = new FormData();

    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("location", location);
    formdata.append("salary_range", experince);
    formdata.append("job_requirements", job_requirements);

    if (jobID) {
      dispatch(AdminUpdateJobAction(jobID, formdata));
    } else {
      dispatch(AdminAddJobAction(formdata));
    }

    setRerender(true);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });

      setTitle("");
      setdescription("");
      setlocation("");
      setexperince("");
      setjob_requirements("");
      setRerender(false);
      navigate("/alljob/list");
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

  useEffect(() => {
    if (successUpdate && rerender) {
      swal({
        title: "",
        text: Updatemessage,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/alljob/list");
      setTitle("");
      setdescription("");
      setlocation("");
      setexperince("");
      setjob_requirements("");
    }
    if (errorUpdate && rerender) {
      swal({
        title: "Error",
        text: errorUpdate,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [successUpdate, errorUpdate, rerender]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Add Job</h1>

          <div className="common-divbg bg-white">
            <div className="events-div my-12">
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Add Title"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                />
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  type="text"
                  placeholder="Add Description"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                ></textarea>
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Job Requirements</label>
                <textarea
                  value={job_requirements}
                  onChange={(e) => setjob_requirements(e.target.value)}
                  type="text"
                  placeholder="Add Job Requirements"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                ></textarea>
              </div>

              <div className="input-boxdiv mb-4">
                <label className="heading-title">Location</label>
                <input
                  value={location}
                  onChange={(e) => setlocation(e.target.value)}
                  type="text"
                  placeholder="Add Location"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                />
              </div>
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Salary Range</label>
                <input
                  value={experince}
                  onChange={(e) => setexperince(e.target.value)}
                  type="text"
                  placeholder="Add Salary Range"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                />
              </div>
              <div className="input-add">
                <div className="flex gap-4 mt-12 mb-12">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200  "
                  >
                    Save
                  </button>
                  <Link to={`/alljob/list`}>
                    <button
                      type="button"
                      className="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersJobAdd;
