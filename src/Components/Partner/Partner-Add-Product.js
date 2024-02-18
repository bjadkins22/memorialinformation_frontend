import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import {
  AdminGetByIdBlogDataAction,
  AdminShowBlogEditAction,
  AdminaddBlogAction,
} from "../../Redux/actions/LegacyAction";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import {
  PartnerAddProductAction,
  PartnerProductGetDataAction,
  PartnerProductUpdateAction,
} from "../../Redux/actions/PartnerAction";

const Partner_Add_Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { prodID } = useParams();

  const [eventImage, setEventImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");

  const [description, setDescription] = useState("");

  const [rerender, setRerender] = useState(false);

  const { success, error, message } = useSelector(
    (state) => state.PartnerAddProductReducer
  );

  const {
    success: UpdateSuccess,
    error: ErrorSuccess,
    message: Upadtemessage,
  } = useSelector((state) => state.PartnerProductUpdateReducer);

  const { PartnerProductGetData } = useSelector(
    (state) => state.PartnerProductGetDataReducer
  );

  useEffect(() => {
    if (PartnerProductGetData) {
      setDescription(PartnerProductGetData?.description);
      setPrice(PartnerProductGetData?.price);
      setEventImage(PartnerProductGetData?.image);
      setProductname(PartnerProductGetData?.name);
    }
  }, [PartnerProductGetData]);

  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (prodID) {
      dispatch(PartnerProductGetDataAction(prodID));
    }
  }, [prodID]);

  const handleAddProduct = () => {
    const formData = new FormData();

    formData.append("name", productname);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("user", userData?.user.user_id);

    if (imageChanged) {
      formData.append("image", eventImage?.[0]);
    }

    if (prodID) {
      dispatch(PartnerProductUpdateAction(prodID, formData));
    } else {
      dispatch(PartnerAddProductAction(formData));
    }
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
        title: "",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setDescription("");
      setPrice("");
      setEventImage("");
      setProductname("");
      setRerender(false);
      navigate("/partner/products/list");
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
    if (UpdateSuccess && rerender) {
      swal({
        title: "",
        text: Upadtemessage,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setDescription("");
      setPrice("");
      setEventImage("");
      setProductname("");
      setRerender(false);
      navigate("/partner/products/list");
    }
    if (ErrorSuccess && rerender) {
      swal({
        title: "Error",
        text: ErrorSuccess,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [UpdateSuccess, ErrorSuccess, rerender]);

  useEffect(() => {
    setDescription("");
    setPrice("");
    setEventImage("");
    setProductname("");
  }, []);

  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Add Product</h1>

          <div className="common-divbg bg-white">
            <div className="events-div my-12">
              <div className="blog-image">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {eventImage ? (
                    <img
                      src={
                        eventImage?.[0]?.preview
                          ? eventImage?.[0]?.preview
                          : eventImage
                      }
                      alt=""
                      className="image-profile-showimage"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="noimageshowdemo"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  )}
                  <i
                    className="fa fa-edit text-lg text-gray-800"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </div>

              <div className="input-boxdiv mb-4">
                <label className="heading-title">Name</label>
                <input
                  value={productname}
                  onChange={(e) => setProductname(e.target.value)}
                  type="text"
                  placeholder="Add Name"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                />
              </div>

              <div className="input-boxdiv mb-4">
                <label className="heading-title">Price</label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="Add Price"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                />
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Description</label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="Add Description"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                ></textarea>
              </div>

              <div className="input-add">
                <div className="flex gap-4 mt-12 mb-12">
                  <button
                    onClick={handleAddProduct}
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

export default Partner_Add_Product;
