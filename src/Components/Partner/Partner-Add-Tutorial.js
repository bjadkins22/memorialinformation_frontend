import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import swal from "sweetalert";

import { useDropzone } from "react-dropzone";
import {
  AddImagegalleryAction,
  LegacyListShowAction,
} from "../../Redux/actions/LegacyAction";
import { PartnerAddTutorialAction } from "../../Redux/actions/PartnerAction";
import LoaderSpinner from "../Loader/Loader-spinner";

const Partner_Add_Tutorial = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [rerender, setRerender] = useState("");

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  // };

  const [totalDuration, setTotalDuration] = useState("");

  const handleRemove = () => {
    setSelectedFile("");
  };

  const { userData } = useSelector((state) => state.authReducer);

  const { success, error, message, loading } = useSelector(
    (state) => state.PartnerAddTutorialReducer
  );


  const handleAddTutorial = () => {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("user", userData?.user?.user_id);
    formData.append("video", selectedFile);
    formData.append("total_duration", totalDuration);

    dispatch(PartnerAddTutorialAction(formData));
    setRerender(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const videoPlayer = document.createElement("video");
    videoPlayer.style.display = "none";

    document.body.appendChild(videoPlayer);

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      videoPlayer.src = e.target.result;

      videoPlayer.onloadedmetadata = () => {
        const totalDuration = videoPlayer.duration;

        const hours = Math.floor(totalDuration / 3600);
        const minutes = Math.floor((totalDuration % 3600) / 60);
        const seconds = Math.floor(totalDuration % 60);

        let formattedDuration = "";
        if (hours > 0) {
          formattedDuration += `${hours}.`;
        }
        if (minutes > 0) {
          formattedDuration += `${minutes}.`;
        }
        formattedDuration += `${seconds}`;

        document.body.removeChild(videoPlayer);

        setTotalDuration(formattedDuration);
      };
    };

    fileReader.readAsDataURL(file);
  };

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
      navigate("/tutorial/show");
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
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div class="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Add Tutorials</h1>
            <div className="common-divbg bg-white">
              <div>
                <div className="maain-selctfile">
                  <div>
                    <label className="heading-title">Image</label>
                    <div class="flex items-center justify-center w-1/2 mt-2">
                      <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="font-semibold">Click to upload</span>{" "}
                            Video
                          </p>
                        </div>
                        <input
                          onChange={handleFileChange}
                          id="dropzone-file"
                          type="file"
                          class="hidden"
                          name="vedio"
                        />
                        <video
                          id="video-player"
                          style={{ display: "none" }}
                        ></video>
                      </label>
                    </div>

                    {selectedFile && (
                      <div>
                        <video width="400" controls>
                          <source
                            src={URL.createObjectURL(selectedFile)}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        <button onClick={handleRemove}>Remove Video</button>
                      </div>
                    )}
                  </div>
                  <div className="input-boxdivtextarea mb-4 w-1/2">
                    <label className="heading-title">Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      placeholder="Add description"
                      className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="input-add w-1/2">
                    <div className="flex gap-4 mt-12">
                      <button
                        //   disabled={errorMessage}
                        onClick={handleAddTutorial}
                        type="submit"
                        class="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200  "
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        class="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
                      >
                        <Link to="/gallery">Cancel</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner_Add_Tutorial;
