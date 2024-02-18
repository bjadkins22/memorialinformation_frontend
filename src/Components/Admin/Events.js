import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { EventsPostAction } from "../../Redux/actions/EventsAction";
import swal from "sweetalert";
import { useDropzone } from "react-dropzone";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import { LegacyListShowAction } from "../../Redux/actions/LegacyAction";

const Events = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error, message, loading } = useSelector(
    (state) => state.EventsPostReducer
  );
  const { userData } = useSelector((state) => state.authReducer);

  const [rerender, setRerender] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [eventImage, setEventImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);
  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const { LegacyListShow } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", moment(date).format("YYYY-MM-DD"));
    formData.append("user", [userData?.user?.user_id]);
    if (LegacyListShow?.[0]?.id) {
      formData.append("legacy", LegacyListShow?.[0]?.id);
    }

    dispatch(EventsPostAction(formData));
    setRerender(true);
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
        text: "Successfully Added!",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/events-list");
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

  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Add Events</h1>
          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Title</label>
                <input
                  type="email"
                  placeholder="Add Title"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>

              <div className="input-add">
                <div>
                  <label className="heading-title">Date</label>
                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      // label="start Date"
                      //   inputFormat="DD-MM-YYYY"
                      formatDate={(date) =>
                        moment(new Date()).format("DD-MM-YYYY")
                      }
                      minDate={new Date()}
                      value={date}
                      onChange={(e) => {
                        setDate(e);
                      }}
                      disablePast
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Description</label>

                <textarea
                  type="email"
                  placeholder="Add Description"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
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

                  <Link to={`/events-list`}>
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

export default Events;
