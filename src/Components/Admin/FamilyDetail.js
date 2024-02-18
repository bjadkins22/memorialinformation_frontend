import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EventsPostAction,
  FamilyDetailPostAction,
} from "../../Redux/actions/EventsAction";
import swal from "sweetalert";
import { useDropzone } from "react-dropzone";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";

const FamilyDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error, message, loading } = useSelector(
    (state) => state.FamilyDetailPostReducer
  );

    const { userData } = useSelector((state) => state.authReducer);

  const [rerender, setRerender] = useState(false);

  const [Message, setMessage] = useState("");
  const [date, setDate] = useState(new Date());
  const [eventImage, setEventImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("message", Message);
    formData.append("date", moment(date).format("YYYY-MM-DD"));
    if (imageChanged) {
      formData.append("image", eventImage[0]);
    }
    dispatch(FamilyDetailPostAction(formData));
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
        text: message,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
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
          <h1 className="heading-top">Family Message</h1>
          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="input-add mb-6">
                <div>
                  <div className="InputEventTitleDiv">
                    <label className="heading-title">Image</label>

                    <span {...getRootProps()}>
                      <input {...getInputProps()} />
                      {eventImage ? (
                        <img
                          className=" w-[150px] h-[150px] rounded"
                          src={
                            eventImage?.[0]?.preview
                              ? eventImage?.[0]?.preview
                              : eventImage
                          }
                        />
                      ) : (
                        <img
                          className="w-[150px] h-[150px] rounded"
                          src="/img/noimage.jpg"
                          alt="Default avatar"
                        />
                      )}
                      <i
                        className="fa fa-edit text-lg text-gray-800"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Message</label>
                <textarea
                  type="email"
                  placeholder="Add Message"
                  className="max-textareabiography w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                  value={Message}
                  onChange={(e) => {
                    setMessage(e.target.value);
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
                  <button
                    type="button"
                    className="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyDetail;
