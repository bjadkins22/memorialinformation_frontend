import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  FuneralPersonAddAction,
  FuneralPersonDataUpdateAction,
  FuneralPersonGetDataAction,
} from "../../Redux/actions/SuperAdminAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const FuneralPersonEdit = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { FuneralPersonId } = useParams();

  const [deceased_name, setdeceased_name] = useState("");
  const [start_date, setstart_date] = useState(new Date());
  const [end_date, setend_date] = useState(new Date());
  const [message, setmessage] = useState("");
  const [special_note, setspecial_note] = useState("");

  const { FuneralPersonGetData } = useSelector(
    (state) => state.FuneralPersonGetDataReducer
  );

  const { success: suceessUpdate, error: errorUpdate } = useSelector(
    (state) => state.FuneralPersonDataUpdateReducer
  );

  useEffect(() => {
    dispatch(FuneralPersonGetDataAction());
  }, []);

  useEffect(() => {
    if (FuneralPersonGetData) {
      setdeceased_name(FuneralPersonGetData?.[0]?.deceased_name);
      const StartDateget = new Date(FuneralPersonGetData?.[0]?.start_date);
      setstart_date(StartDateget);
      const EndDateget = new Date(FuneralPersonGetData?.[0]?.end_date);
      setend_date(EndDateget);
      setmessage(FuneralPersonGetData?.[0]?.message);
      setspecial_note(FuneralPersonGetData?.[0]?.special_note);
      setImages(FuneralPersonGetData?.[0]?.family_images);
      setSelectedFile(FuneralPersonGetData?.[0]?.death_person_image);
    }
  }, [FuneralPersonGetData]);

  console.log("FuneralPersonGetData", FuneralPersonGetData);

  const { userData } = useSelector((state) => state.authReducer);

  // mutiple image
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setImages([...images, ...newImages]);
  };

  const handleImageRemove = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  // mutiple image

  // single images

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setSelectedFile(newFile);
  };

  const [rerender, setRerender] = useState(false);

  const handleRemove = () => {
    setSelectedFile(null);
  };

  const handlePostFuneral = () => {
    const formData = new FormData();

    formData.append("deceased_name", deceased_name);
    const formattedDate = moment(start_date).format("YYYY-MM-DD");
    formData.append("start_date", formattedDate);

    const formattedEndDate = moment(end_date).format("YYYY-MM-DD");
    formData.append("end_date", formattedEndDate);

    formData.append("message", message);
    formData.append("special_note", special_note);
    formData.append("user", userData?.user?.user_id);

    if (typeof selectedFile === "string") {
      if (selectedFile.startsWith("http")) {
        fetch(selectedFile)
          .then((response) => response.blob())
          .then((blob) => {
            formData.append("death_person_image", blob);
          })
          .catch((error) => {
            console.error("Error fetching image:", error);
          });
      } else {
        formData.append("death_person_image", selectedFile);
      }
    } else if (selectedFile instanceof File) {
      formData.append("death_person_image", selectedFile);
    }

    images.forEach((image, index) => {
      if (image && typeof image === "object" && image.image) {
        formData.append(`family_images`, image.image);
      } else if (image instanceof File) {
        formData.append(`family_images`, image);
      } else {
        formData.append(`family_images`, image);
      }
    });

    dispatch(FuneralPersonDataUpdateAction(FuneralPersonId, formData));
    setRerender(true);
  };

  useEffect(() => {
    if (suceessUpdate && rerender) {
      swal({
        title: " ",
        text: "Successfully Updated!",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/funeral/data");
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
  }, [suceessUpdate, errorUpdate, rerender]);

  return (
    <div>
      <div className="main-page-div bg-green-200">
        <h1 className="heading-top">Edit Funeral Detail</h1>

        <div className="common-divbg bg-white">
          <>
            <div className="events-div my-12 ">
              <div className="mb-4">
                <label className="heading-title">Funeral Person name</label>
                <input
                  value={deceased_name}
                  onChange={(e) => setdeceased_name(e.target.value)}
                  type="text"
                  placeholder="Add Name"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                />
              </div>
              <div className=" mb-4">
                <div>
                  <div class="mb-4 md:mb-0">
                    <label
                      for="company-logo"
                      class="block text-gray-700 text-sm mb-2"
                    >
                      Funeral person image
                    </label>
                    <input
                      onChange={handleFileChange}
                      type="file"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>

                  {selectedFile && (
                    <div>
                      <img
                        src={
                          typeof selectedFile === "string"
                            ? selectedFile
                            : URL.createObjectURL(selectedFile)
                        }
                        alt="Selected"
                        style={{
                          maxWidth: "100px",
                          maxHeight: "100px",
                          marginBottom: "10px",
                        }}
                      />
                      <button onClick={handleRemove}>Remove</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="">
                <div>
                  <div class="mb-4 md:mb-0">
                    <label
                      for="company-logo"
                      class="block text-gray-700 text-sm mb-2"
                    >
                      Family images
                    </label>
                    <input
                      multiple
                      onChange={handleImageChange}
                      type="file"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>

                  <div className="flex gap-4">
                    {images?.map((image, index) => (
                      <div key={index}>
                        {image instanceof File ? (
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`image-${index}`}
                            style={{
                              maxWidth: "100px",
                              maxHeight: "100px",
                              marginBottom: "10px",
                            }}
                          />
                        ) : (
                          <img
                            src={image.image ? image.image : image}
                            alt={`image-${index}`}
                            style={{
                              maxWidth: "100px",
                              maxHeight: "100px",
                              marginBottom: "10px",
                            }}
                          />
                        )}
                        <button onClick={() => handleImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="input-boxdivtextarea mb-4">
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    formatDate={(date) =>
                      moment(new Date()).format("DD-MM-YYYY")
                    }
                    minDate={new Date()}
                    value={start_date}
                    onChange={(e) => {
                      setstart_date(e);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider> */}

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    formatDate={(date) =>
                      moment(new Date()).format("DD-MM-YYYY")
                    }
                    maxDate={new Date()}
                    value={start_date}
                    onChange={(e) => {
                      setstart_date(e);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    formatDate={(date) =>
                      moment(new Date()).format("DD-MM-YYYY")
                    }
                    minDate={start_date}
                    value={end_date}
                    onChange={(e) => {
                      setend_date(e);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Message</label>

                <textarea
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  type="text"
                  placeholder="Add Message"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                ></textarea>
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Special Note</label>

                <textarea
                  value={special_note}
                  onChange={(e) => setspecial_note(e.target.value)}
                  type="text"
                  placeholder="Add Special Note"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                ></textarea>
              </div>
              <div className="input-add">
                <div className="flex gap-4 mt-12">
                  <button
                    onClick={handlePostFuneral}
                    type="button"
                    class="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200  "
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    class="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default FuneralPersonEdit;
