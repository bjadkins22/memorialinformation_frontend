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

const My_Videos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { userData } = useSelector((state) => state.authReducer);
  const { success, error, message, loading } = useSelector(
    (state) => state.MyVideoAddReducer
  );
  const { MyVideoGetDataById } = useSelector(
    (state) => state.MyVideoGetDataByIdReducer
  );
  const {success :videoEditSuc ,error:videoEditErr ,message:videoEditMessage} = useSelector(
    (state) => state.MyVideoGetDataByIdReducer
  );
  const [lastvideo, setlastvideo] = useState(null);
  const [funvideo, setFunvideo] = useState(null);
  const [rerender, setRerender] = useState("");

  const handleAddMyVideo = () => {
    const formData = new FormData();
    // formData.append("user", userData?.user?.user_id);
    // formData.append("final_wishes_videos", lastvideo);
    // formData.append("fun_video", funvideo);
    // if (lastvideo) {
    //   formData.append("video_type", 1);
    // }
    // if (funvideo) {
    //   formData.append("video_type", 2);
    // }

    // inputList.forEach((item, index) => {
    //   formData.append(`video_type${index}`, item.location);
    //   if (item.lastVideo) {
    //     formData.append(`videos${index}`, item.lastVideo);
    //   }
    // });

    inputList.forEach((item, index) => {
      formData.append(`video_type`, item.location);
      if (item.lastVideo) {
        formData.append(`my_video`, item.lastVideo);
      }
    });

    formData.append("user", userData?.user?.user_id);

    if (videoId) {
      dispatch(MyVideoEditAction(videoId, formData));
    } else {
      dispatch(MyVideoAddAction(formData));
    }
    setRerender(true);
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
      navigate("/myvideo/list");
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
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [videoEditSuc, videoEditErr, rerender]);

  const [inputList, setInputList] = useState([
    {
      location: "",
      lastVideo: null,
    },
  ]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // const handleLastvideo = (event, index) => {
  //   const files = event.target.files;
  //   const updatedArray = [...inputList];
  //   updatedArray[index].lastVideo = files[0];
  //   setInputList(updatedArray);
  // };
  const handleLastvideo = (event, index) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("video/")) {
      const video = document.getElementById(`video-player-last-${index}`);

      video.src = URL.createObjectURL(file);

      video.addEventListener("loadedmetadata", () => {
        const videoDuration = video.duration;

        if (videoDuration <= 60) {
          setInputList((prevInputList) =>
            prevInputList.map((item, i) =>
              i === index ? { ...item, lastVideo: file } : item
            )
          );
        } else {
          swal({
            icon: "error",
            title: "Oops...",
            text: "Please select a video that is 1 minute or shorter.",
          });

          event.target.value = null;
        }
      });
    } else {
      swal({
        icon: "error",
        title: "Oops...",
        text: "Please select a valid video file.",
      });

      event.target.value = null;
    }
  };

  const handleRemoveLastvideo = (index) => {
    const updatedArray = [...inputList];
    updatedArray[index].lastVideo = null;
    setInputList(updatedArray);
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        location: "",
        lastVideo: null,
      },
    ]);
  };
  // useEffect(() => {
  //   const fetchVideoBlob = async () => {
  //     try {
  //       if (MyVideoGetDataById && MyVideoGetDataById.my_video) {
  //         const response = await (MyVideoGetDataById.my_video);
  //         const videoBlob = await response.blob();

  //         const data = {
  //           location: MyVideoGetDataById.video_type || "",
  //           lastVideo: videoBlob || null,
  //         };
  //         setInputList([data]);
  //       }
  //     } catch (error) {
  //     }
  //   };

  //   fetchVideoBlob();
  // }, [MyVideoGetDataById]);

  useEffect(() => {
    // Fetch the video content or create a Blob from the video URL
    const fetchVideoBlob = async () => {
      try {
        const response = await fetch(MyVideoGetDataById.my_video);
        const blob = await response.blob();
        setInputList([
          {
            location: MyVideoGetDataById?.video_type,
            lastVideo: blob,
          },
        ]);
      } catch (error) {
      }
    };

    fetchVideoBlob();
  }, [MyVideoGetDataById]);
  useEffect(() => {
    if (videoId) {
      dispatch(MyVideoGetDataByIdAction(videoId));
    }else{
      
    }
  }, [videoId]);

  return (
    <div>
      <div class="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">{videoId ? "Edit" : "Add"} Video</h1>
          <div className="common-divbg bg-white">
            <div>
              <div className="maain-selctfile">
                {inputList.map((item, index) => (
                  <div key={index}>
                    <div className="input-boxdiv mt-2 mb-4  w-1/2">
                      <p className="heading-title-legacypage">Video Type</p>
                      <select
                        name="location"
                        value={item.location}
                        onChange={(e) => handleInputChange(e, index)}
                        className="input-legacy-typeenter-select  w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                      >
                        <option selected>Select Type</option>
                        <option value="final_wishes_videos">
                          Wishes video
                        </option>
                        <option value="fun_video">Fun video</option>
                        <option value="audition_video">Audition video</option>
                        <option value="brand_video">Brand video</option>
                        <option value="candid_video">Candid video</option>
                      </select>
                    </div>

                    <div>
                      <label className="heading-title">Last Wish Video</label>
                      <div className="flex items-center justify-center w-1/2 mt-2">
                        <label
                          htmlFor={`dropzone-file-last-${index}`}
                          className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
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
                            onChange={(event) => handleLastvideo(event, index)}
                            id={`dropzone-file-last-${index}`}
                            type="file"
                            className="hidden"
                            name="vedio"
                          />
                          <video
                            id={`video-player-last-${index}`}
                            style={{ display: "none" }}
                          ></video>
                        </label>
                      </div>

                      {item.lastVideo && (
                        <div>
                          <video width="400" controls>
                            <source
                              // src={URL.createObjectURL(item.lastVideo)}
                              src={URL.createObjectURL(inputList[0].lastVideo)}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <button onClick={() => handleRemoveLastvideo(index)}>
                            Remove Video
                          </button>
                        </div>
                      )}

                      {inputList.length > 1 && (
                        <button onClick={() => handleRemoveLastvideo(index)}>
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {!videoId ? (
                  <button onClick={handleAddClick}>
                    <ControlPointIcon />
                  </button>
                ) : null}

                <div className="input-add w-1/2">
                  <div className="flex gap-4 mt-12">
                    <button
                      onClick={handleAddMyVideo}
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
    </div>
  );
};

export default My_Videos;
