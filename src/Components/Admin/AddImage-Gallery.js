import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import swal from "sweetalert";

import { useDropzone } from "react-dropzone";
import {
  AddImagegalleryAction,
  LegacyListShowAction,
} from "../../Redux/actions/LegacyAction";

const AddImage_Gallery = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error, message } = useSelector(
    (state) => state.AddImagegalleryReducer
  );

  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const { LegacyListShow } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  const [rerender, setRerender] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const nonImageFiles = files.filter(
      (file) => !file.type.startsWith("image/")
    );

    if (nonImageFiles.length > 0) {
      setErrorMessage("Only image files (PNG, JPG) are allowed.");
    } else {
      setErrorMessage("");
      setSelectedImages(files);

      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  const handleSubmit = (e) => {
    if (selectedImages.length === 0) {
      setErrorMessage("Please select at least one image.");
      return;
    }

    e.preventDefault();

    const formData = new FormData();
    for (const file of selectedImages) {
      formData.append("image", file);
    }
    formData.append("legacy_page", LegacyListShow?.[0]?.id);

    dispatch(AddImagegalleryAction(formData));

    setRerender(true);
    const nonImageFiles = selectedImages.filter(
      (file) => !file.type.startsWith("image/")
    );

    setImagePreviews([]);

    if (nonImageFiles.length > 0) {
      setErrorMessage("Only image files (PNG, JPG) are allowed.");
    } else {
    }
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
      setRerender(false);
      navigate("/gallery");
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

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    const updatedImages1 = [...imagePreviews];

    updatedImages.splice(index, 1); // Remove the image at the specified index
    updatedImages1.splice(index, 1); // Remove the image at the specified index
    setSelectedImages(updatedImages); // Update the state with the new array
    setImagePreviews(updatedImages1);
  };

  return (
    <div>
      <div class="pl-6">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Add Images</h1>
          <div className="common-divbg bg-white">
            <div className="">
              <div className="">
                {/* Display image previews */}
                <div className="image-previews">
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imagePreviews.map((preview, index) => (
                      <div>
                        <img
                          class="imagegalleryshow max-w-full rounded-lg"
                          key={index}
                          src={preview}
                          alt={`Preview ${index}`}
                        />
                        <button
                          className="removeimagegallery"
                          onClick={() => removeImage(index)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="maain-selctfile">
                    <div class="flex items-center justify-center w-1/2 mt-4">
                      <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                            Image or Create your gallery
                          </p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">
                            PNG, JPG
                          </p>
                        </div>
                        <input
                          multiple
                          onChange={handleFileChange}
                          id="dropzone-file"
                          type="file"
                          class="hidden"
                          name="images"
                        />
                      </label>
                    </div>
                    {errorMessage && (
                      <div className="text-red-500 mt-2">{errorMessage}</div>
                    )}

                    <div className="input-add w-1/2">
                      <div className="flex gap-4 mt-12">
                        <button
                          disabled={errorMessage}
                          onClick={handleSubmit}
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
      </div>
    </div>
  );
};

export default AddImage_Gallery;
