import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  FuneralPersonAddAction,
  FuneralPersonGetDataAction,
} from "../../Redux/actions/SuperAdminAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const FuneralPersonAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rerender, setRerender] = useState(false);

  const [deceased_name, setdeceased_name] = useState("");
  const [start_date, setstart_date] = useState(new Date());
  const [end_date, setend_date] = useState(new Date());
  const [message, setmessage] = useState("");
  const [special_note, setspecial_note] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);

  const { userData } = useSelector((state) => state.authReducer);

  const { success: suceessAdd, error: errorAdd } = useSelector(
    (state) => state.FuneralPersonAddReducer
  );

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

  const handleFileChange = (event) => {
    // Update the state with the selected file
    setSelectedFile(event.target.files[0]);
  };

  const handleRemove = () => {
    // Clear the selected file from the state
    setSelectedFile(null);
  };
  console.log("selectedFile", selectedFile);

  const handlePostFuneral = () => {
    const formData = new FormData();

    // images.forEach((image, index) => {
    //   formData.append(`family_images${index}`, image);
    // });

    formData.append("deceased_name", deceased_name);
    formData.append("start_date", moment(start_date).format("YYYY-MM-DD"));
    formData.append("end_date", moment(end_date).format("YYYY-MM-DD"));
    formData.append("death_person_image", selectedFile);

    formData.append("message", message);
    formData.append("special_note", special_note);
    formData.append("user", userData?.user?.user_id);

    images.forEach((image, index) => {
      formData.append(`family_images`, image);
    });

    dispatch(FuneralPersonAddAction(formData));
    setRerender(true);
  };

  useEffect(() => {
    if (suceessAdd && rerender) {
      swal({
        title: " ",
        text: "Successfully Added!",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/funeral/data");
    }
    if (errorAdd && rerender) {
      swal({
        title: "Error",
        text: errorAdd,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [suceessAdd, errorAdd, rerender]);

  return (
    <div>
      <div className="main-page-div bg-green-200">
        <h1 className="heading-top">Add Funeral Detail</h1>

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
                        src={URL.createObjectURL(selectedFile)}
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

                  <div>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`image-${index}`}
                          style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            marginBottom: "10px",
                          }}
                        />
                        <button onClick={() => handleImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="input-boxdivtextarea mb-4">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    formatDate={(date) =>
                      moment(new Date()).format("DD-MM-YYYY")
                    }
                    value={start_date}
                    onChange={(e) => {
                      setstart_date(e);
                    }}
                    maxDate={new Date()}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    formatDate={(date) =>
                      moment(new Date()).format("DD-MM-YYYY")
                    }
                    value={end_date}
                    onChange={(e) => {
                      setend_date(e);
                    }}
                    maxDate={new Date()}
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

export default FuneralPersonAdd;
