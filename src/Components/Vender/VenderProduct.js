import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import {
  GetPropertyDataByIDAction,
  LegacyListShowAction,
} from "../../Redux/actions/LegacyAction";
import LoaderSpinner from "../Loader/Loader-spinner";
import {
  VenderAddProdcutAction,
  VenderProdcutGetByIDAction,
  VenderUpdateProdcutAction,
} from "../../Redux/actions/VenderAction";

const VenderProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { venderPoductId } = useParams();

  useEffect(() => {
    if (venderPoductId) {
      dispatch(VenderProdcutGetByIDAction(venderPoductId));
    }
  }, [venderPoductId]);

  const [files, setFiles] = useState([]);

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
  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const thumbsContainer = {
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

  const thumbs = files?.map((file) => {
    const fileName = file?.preview?.split("/").pop()?.split("?")[0];
    return (
      <div className="show_img_section" style={thumb} key={file.name}>
        <div style={thumbInner}>
          {/* <div class="grid grid-cols-4 gap-4"> */}
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
          {/* </div> */}
        </div>
      </div>
    );
  });

  const { success, error, message, loading } = useSelector(
    (state) => state.VenderAddProdcutRecuer
  );

  const {
    success: successUpdate,
    error: errorUpdate,
    message: messageUpdate,
  } = useSelector((state) => state.VenderUpdateProdcutRecuer);

  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const [rerender, setRerender] = useState(false);

  const [isTitleChanged, setIsTitleChanged] = useState(false);
  const [isDescriptionChanged, setIsDescriptionChanged] = useState(false);
  const [isContentChanged, setIsContentChanged] = useState(false);
  const [isFileChanged, setIsFileChanged] = useState(false);

  const handleTitleChange = (event) => {
    settitle(event.target.value);
    setIsTitleChanged(true);
  };

  const handleDescriptionChange = (event) => {
    setdescription(event.target.value);
    setIsDescriptionChanged(true);
  };

  const handleContentChange = (event) => {
    setcontent(event.target.value);
    setIsContentChanged(true);
  };

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [content, setcontent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const isURL =
        typeof file === "string" &&
        (file.startsWith("http") || file.startsWith("blob"));

      const videoURL = isURL ? file : URL.createObjectURL(file);

      setSelectedFile(videoURL);
    }
  };

  const handleRemove = () => {
    setSelectedFile("");
  };

  const handleSubmit = () => {
    const formData = new FormData();

    if (title) {
      formData.append("title", title);
    }
    if (description) {
      formData.append("description", description);
    }
    if (content) {
      formData.append("product_link", content);
    }
    formData.append("user", [userData?.user?.user_id]);

    if (files.length > 0) {
      for (const key of Object.keys(files)) {
        formData.append("image", files[key]);
      }
    }
    if (venderPoductId) {
      dispatch(VenderUpdateProdcutAction(venderPoductId, formData));
    } else {
      dispatch(VenderAddProdcutAction(formData));
    }
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
      navigate("/vender/product/list");
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

  useEffect(() => {
    if (successUpdate && rerender) {
      swal({
        title: " ",
        text: messageUpdate,
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      navigate("/vender/product/list");
      setRerender(false);
    }
    if (errorUpdate && rerender) {
      swal({
        title: "Error",
        text: errorUpdate,
        className: "errorAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [successUpdate, errorUpdate, rerender]);

  const [loadingloader, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loadingloader ? (
        <LoaderSpinner />
      ) : (
        <div class="pl-6">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Shop Add</h1>
            <div className="addevent-detailscalendar mb-6">
              <Link to="/vendor-subscription" className="ml-[20px]">
                <button className="add-event-showtab">Subscriptions pack</button>
              </Link>
            </div>
            <div className="common-divbg bg-white">
              <>
                <div className="events-div my-12 ">

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

                    <aside className="imageicontaier" style={thumbsContainer}>
                      {thumbs}
                    </aside>
                  </div>
                </div>

                <div className="input-boxdiv mb-4">
                  <label className="heading-title">Title</label>
                  <input
                    value={title}
                    onChange={handleTitleChange}
                    type="text"
                    placeholder="Add Title"
                    class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  />
                </div>

                <div className="input-boxdivtextarea mb-4">
                  <label className="heading-title">Description</label>

                  <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    type="text"
                    placeholder="Add Description"
                    className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                  ></textarea>
                </div>
                <div className="input-boxdivtextarea">
                  <label className="heading-title">Product Link</label>

                  <input
                    value={content}
                    onChange={handleContentChange}
                    type="text"
                    placeholder="Product Link"
                    class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  />
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
              </>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenderProduct;
