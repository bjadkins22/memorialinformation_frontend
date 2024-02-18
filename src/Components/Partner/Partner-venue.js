import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
import swal from "sweetalert";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import TextField from "@mui/material/TextField";
import { BACKEND_URL } from "../../environment";
import {
  GetPropertyDataByIDAction,
  LegacyListShowAction,
} from "../../Redux/actions/LegacyAction";
import {
  PartnerOwnEventsPostAction,
  PartnerVenueEventDeleteAction,
  PartnerVenueEventGetAction,
  PartnerVenueEventUpdateAction,
} from "../../Redux/actions/PartnerAction";
import { Categoryshowlist } from "../../Redux/actions/EventsAction";
import LoaderSpinner from "../Loader/Loader-spinner";

const Partner_venue = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpenSkill, setIsOpenSkill] = useState(false);
  const [categoryid, setcategoryid] = useState("");
  const { propertyId } = useParams();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { skillsData } = useSelector((state) => state.Ctegoryreducer);

  const { GetPropertyDataByID } = useSelector(
    (state) => state.GetPropertyDataByIDReducer
  );

  useEffect(() => {
    dispatch(Categoryshowlist());
  }, []);

  useEffect(() => {
    if (propertyId) {
      dispatch(GetPropertyDataByIDAction(propertyId));
    }
  }, [propertyId]);

  const [files, setFiles] = useState([]);
  const [files1, setFiles1] = useState([]);
  const [eventImage, setEventImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#222a425e",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  const videoStyle = {
    display: "block",
    width: "100%",
    Position: "relative",
  };
  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {};

  const thumbInner = {
    minWidth: 0,
    overflow: "hidden",
    Position: "relative",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const {
    getRootProps: getRootfileProps,
    getInputProps: getInputfileProps,
    isDragActive,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: useCallback(
      (acceptedFiles) => {
        setFiles([
          ...files,
          ...acceptedFiles?.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              title: file.name,
            })
          ),
        ]);
      },
      [files]
    ),
  });

  const { getRootProps: getRootfileProps1, getInputProps: getInputfileProps1 } =
    useDropzone({
      accept: {
        accept: "video/mp4, video/quicktime, video/avi",
      },
      onDrop: useCallback(
        (acceptedFiles) => {
          setFiles1([
            ...files1,
            ...acceptedFiles?.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
                title: file.name,
              })
            ),
          ]);
        },
        [files1]
      ),
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const removeFile2 = (file) => () => {
    const newFiles = [...files1];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles1(newFiles);
  };

  const thumbs2 = files1?.map((file, index) => {
    const fileName = file?.preview?.split("/").pop()?.split("?")[0];
    return (
      <div className="show_img_section" style={thumb} key={index}>
        <div style={thumbInner}>
          <div className="remveImageDivShow">
            <div className="edit_compitition_imggg">
              <video width="320" height="240" controls>
                <source src={file?.preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div onClick={() => removeFile2(file, file.title)}>
              <span className="crossicon12">
                <svg
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
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const thumbs = files?.map((file) => {
    const fileName = file?.preview?.split("/").pop()?.split("?")[0];
    return (
      <div className="show_img_section" style={thumb} key={file.name}>
        <div style={thumbInner}>
          <div class="grid grid-cols-4 gap-4">
            <div className="remveImageDivShow">
              <div className="edit_compitition_imggg">
                <img className="venuemultipleimages" src={file?.preview} />
              </div>
              <div onClick={removeFile(file)}>
                <span className="crossicon12">
                  <svg
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
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const { success: successdelete } = useSelector(
    (state) => state.PartnerVenueEventDeleteReducer
  );

  const { success, error, message, loading } = useSelector(
    (state) => state.PartnerOwnEventsPostReducer
  );

  const { success: successUpdate, error: errorUpdate } = useSelector(
    (state) => state.SalePropertyEditReducer
  );
  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const [rerender, setRerender] = useState(false);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [content, setcontent] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", categoryid);
    formData.append("content", content);

    formData.append("user", [userData?.user?.user_id]);

    if (files.length > 0) {
      for (const key of Object.keys(files)) {
        formData.append("image", files[key]);
      }
    }

    if (files1.length > 0) {
      for (const key of Object.keys(files1)) {
        formData.append("video", files1[key]);
      }
    }

    dispatch(PartnerOwnEventsPostAction(formData));
    setRerender(true);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: " ",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      navigate("/partner/venue/list");
      setRerender(false);
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [success, error, rerender]);

  const [renderUpdate, setRenderUpdate] = useState(false);
  const [loadingloader, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(PartnerVenueEventGetAction());
  }, [successdelete, success]);

  const { PartnerVenueEventGet } = useSelector(
    (state) => state.PartnerVenueEventGetReducer
  );

  const [totalLenght, setTotalLenght] = useState();

  useEffect(() => {
    if (PartnerVenueEventGet) {
      setTotalLenght(Object.keys(PartnerVenueEventGet).length);
    }
  }, [PartnerVenueEventGet]);

  const DeleteLegacyModelOnebyOne = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this venue?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(
          PartnerVenueEventDeleteAction(PartnerVenueEventGet?.[0]?.user)
        );
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

  const [newSkill, setNewSkill] = useState(""); // Input field value

  const addNewSkill = async (value) => {
    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}partner/category/`, { name: value });
      // After adding the skill, fetch the updated skills data using your action
      dispatch(Categoryshowlist());
      setNewSkill(""); // Clear the input field
    } catch (error) {
    }
    setLoading(false);
  };

  const handleInputChangeAutocomplete = (event, newInputValue) => {
    setIsOpenSkill(false);
    setNewSkill(newInputValue);
    setIsOpenSkill(newInputValue.length > 0);
  };

  const handleKeyDownSkills = (e) => {
    if (e.key === "Enter" && newSkill.trim()) {
      addNewSkill(newSkill);
    }
  };

  const handleChange = (event, newValue) => {
    setSelectedSkill(newValue);
    setIsOpenSkill(false);
    if (newValue) {
      setcategoryid(newValue.id);
    }
  };

  return (
    <div>
      {loadingloader ? (
        <LoaderSpinner />
      ) : (
        <div class="pl-6">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Venue Add</h1>

            <div className="common-divbg bg-white">
           

              <>
                <div className="events-div my-12 ">
                  <div className="input-boxdiv mb-4">
                    <label className="heading-title">Category</label>
                    <Autocomplete
                      value={selectedSkill}
                      open={isOpenSkill}
                      onInputChange={handleInputChangeAutocomplete}
                      options={skillsData || []} // Ensure op
                      getOptionLabel={(option) => option?.name}
                      onChange={handleChange}
                      inputProps={{
                        "aria-label": "Without label",
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          placeholder="Type something"
                          value={newSkill}
                          onKeyDown={handleKeyDownSkills}
                        />
                      )}
                    />
                  </div>
                  <div className="">
                    <label class="heading-title">Image</label>
                    <div className="container-upload">
                      <div
                        className="borderOfUploadFilenew"
                        {...getRootfileProps({ style })}
                      >
                        <input
                          {...getInputfileProps()}
                          imgExtension={[".gif", ".mp4"]}
                          // maxfilesize={5242880}
                        />
                        <span className="uploadFilenewArea">
                          <img
                            className="upiconimg"
                            src="/img/uploadimg.png"
                            alt=""
                          />
                          Image
                        </span>
                      </div>
                    </div>

                    <aside style={thumbsContainer}>{thumbs}</aside>
                    <label class="heading-title">Video</label>
                    <div className="container-upload">
                      <div
                        className="borderOfUploadFilenew"
                        {...getRootfileProps1({ style })}
                      >
                        <input
                          {...getInputfileProps1()}
                          imgExtension={[".gif", ".mp4"]}
                          // maxfilesize={5242880}
                        />
                        <span className="uploadFilenewArea">
                          <img
                            className="upiconimg"
                            src="/img/uploadimg.png"
                            alt=""
                          />
                          video
                        </span>
                      </div>
                    </div>
                  </div>
                  <aside style={thumbsContainer}>{thumbs2}</aside>

                  <div className="input-boxdiv mb-4">
                    <label className="heading-title">Title</label>
                    <input
                      value={title}
                      onChange={(e) => settitle(e.target.value)}
                      type="text"
                      placeholder="Add Title"
                      class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
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
                  <div className="input-boxdivtextarea">
                    <label className="heading-title">Content</label>

                    <textarea
                      value={content}
                      onChange={(e) => setcontent(e.target.value)}
                      type="text"
                      placeholder="Add content"
                      className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                    ></textarea>
                  </div>
                  <div className="input-add">
                    <div className="flex gap-4 mt-12">
                      <button
                        onClick={handleSubmit}
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
      )}
    </div>
  );
};

export default Partner_venue;
