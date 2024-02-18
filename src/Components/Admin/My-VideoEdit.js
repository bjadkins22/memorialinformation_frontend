import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import swal from "sweetalert";

import {
  MyVideoAddAction,
  PartnerAddTutorialAction,
  MyVideoEditAction,
  MyVideoGetDataByIdAction,
} from "../../Redux/actions/PartnerAction";
import LoaderSpinner from "../Loader/Loader-spinner";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const My_Videos_edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { userData } = useSelector((state) => state.authReducer);

  const { MyVideoGetDataById } = useSelector(
    (state) => state.MyVideoGetDataByIdReducer
  );
  const {
    success: videoEditSuc,
    error: videoEditErr,
    message: videoEditMessage,
  } = useSelector((state) => state.MyVideoEditReducer);
  const [rerender, setRerender] = useState("");

  const [selectedVideoType, setSelectedVideoType] = useState(""); // State to track selected video type
  const [uploadedVideo, setUploadedVideo] = useState(null); // State to track uploaded video file

  const handleAddMyVideo = () => {
    const formData = new FormData();

    formData.append("user", userData?.user?.user_id);
    formData.append("video_type", selectedVideoType);
    formData.append("my_video", uploadedVideo);

    // if (typeof uploadedVideo === "string") {
    //   formData.append("my_video", uploadedVideo);
    // } else if (uploadedVideo instanceof File) {
    //   formData.append("my_video", uploadedVideo);
    // }

    dispatch(MyVideoEditAction(videoId, formData));

    setRerender(true);
  };

  useEffect(() => {
    if (videoEditSuc && rerender) {
      swal({
        title: " ",
        text: "Update Successfully",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      navigate("/myvideo/list");
    }
    if (videoEditErr && rerender) {
      swal({
        title: "Error",
        text: "error",
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [videoEditSuc, videoEditErr, rerender]);


  useEffect(() => {
    if (videoId) {
      dispatch(MyVideoGetDataByIdAction(videoId));
    } else {
    }
  }, [videoId]);

  const handleVideoTypeChange = (event) => {
    setSelectedVideoType(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const video = document.createElement("video");
    video.preload = "metadata";

    video.onloadedmetadata = () => {
      if (video.duration > 60) {
        swal(
          "Error",
          "Please upload a video that is 1 minute or less.",
          "error"
        );

        event.target.value = "";
      } else {
        setUploadedVideo(file);
      }
    };

    video.src = URL.createObjectURL(file);
  };

  const handleRemoveVideo = () => {
    setUploadedVideo(null);
  };

  useEffect(() => {
    if (MyVideoGetDataById) {
      setSelectedVideoType(MyVideoGetDataById?.video_type);
      setUploadedVideo(MyVideoGetDataById?.my_video);
    }
  }, [MyVideoGetDataById]);


  return (
    <div>
      <div class="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Edit Video</h1>
          <div className="common-divbg bg-white">
            <div>
              <div className="maain-selctfile">
                <div>
                  <div className="input-boxdiv mt-2 mb-4 w-1/2">
                    <p className="heading-title-legacypage">Video Type</p>
                    <select
                      name="videotype"
                      className="input-legacy-typeenter-select w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                      value={selectedVideoType}
                      onChange={handleVideoTypeChange}
                    >
                      <option value="">Select Type</option>
                      <option value="final_wishes_videos">Wishes video</option>
                      <option value="fun_video">Fun video</option>
                      <option value="audition_video">Audition video</option>
                      <option value="brand_video">Brand video</option>
                      <option value="candid_video">Candid video</option>
                    </select>
                  </div>

                  <div>
                    <label className="heading-title">Last Wish Video</label>
                    <div className="flex items-center justify-center w-1/2 mt-2">
                      {uploadedVideo ? (
                        <div>
                          <video width="320" height="240" controls>
                            <source
                              src={
                                typeof uploadedVideo === "string"
                                  ? uploadedVideo
                                  : URL.createObjectURL(uploadedVideo)
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <button onClick={handleRemoveVideo} className="mt-2">
                            Remove Video
                          </button>
                        </div>
                      ) : (
                        <label className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <VideoCallIcon />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              Last Video
                            </p>
                          </div>
                          <input
                            id={`dropzone-file-lastvideo`}
                            type="file"
                            className="hidden"
                            name="vedio"
                            onChange={handleFileChange}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                <div className="input-add w-1/2">
                  <div className="flex gap-4 mt-12">
                    <button
                      onClick={handleAddMyVideo}
                      type="submit"
                      className="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]"
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
    </div>
  );
};

export default My_Videos_edit;
