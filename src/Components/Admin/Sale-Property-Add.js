import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import swal from "sweetalert";

import { useDropzone } from "react-dropzone";
import {
  GetPropertyDataByIDAction,
  LegacyListShowAction,
  SalePropertyEditAction,
  SalePropertyPostAction,
} from "../../Redux/actions/LegacyAction";

const Sale_property_Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { propertyId } = useParams();

  const { GetPropertyDataByID } = useSelector(
    (state) => state.GetPropertyDataByIDReducer
  );

  useEffect(() => {
    if (propertyId) {
      dispatch(GetPropertyDataByIDAction(propertyId));
    }
  }, [propertyId]);

  useEffect(() => {
    if (GetPropertyDataByID && propertyId) {
      setEventImage(GetPropertyDataByID?.image);
      setprice(GetPropertyDataByID?.price);
      setdescription(GetPropertyDataByID?.description);
      setseller_platform(GetPropertyDataByID?.seller_platform);
    }
  }, [GetPropertyDataByID, propertyId]);

  const [eventImage, setEventImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

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

  const { success, error, message, loading } = useSelector(
    (state) => state.SalePropertyPostReducer
  );

  const { success: successUpdate, error: errorUpdate } = useSelector(
    (state) => state.SalePropertyEditReducer
  );
  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const { LegacyListShow } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  const [rerender, setRerender] = useState(false);

  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [seller_platform, setseller_platform] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    if (price) {
      formData.append("price", price);
    }
    if (description) {
      formData.append("description", description);
    }
    if (seller_platform) {
      formData.append("seller_platform", seller_platform);
    }
    formData.append("legacy", LegacyListShow?.[0]?.id);
    formData.append("user", userData?.user?.user_id);
    if (imageChanged) {
      formData.append("image", eventImage?.[0]);
    }

    if (propertyId) {
      dispatch(SalePropertyEditAction(propertyId, formData));
    } else {
      dispatch(SalePropertyPostAction(formData));
    }
    setRenderUpdate(true);
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
      setRerender(false);
      navigate("/sale-property-list");
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

  useEffect(() => {
    if (successUpdate && renderUpdate) {
      swal({
        title: " ",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      setRenderUpdate(false);
      navigate("/sale-property-list");
    }
    if (errorUpdate && renderUpdate) {
      swal({
        title: "Error",
        text: errorUpdate,
        className: "errorAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 2000,
      });
      setRenderUpdate(false);
    }
  }, [successUpdate, errorUpdate, renderUpdate]);

  return (
    <div>
      <div class="pl-6">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Property Disposition</h1>
          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="">
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
                    <img
                      className="image-profile-showimage"
                      src="/img/demonoimage.png"
                    />
                  )}
                  <i
                    className="fa fa-edit text-lg text-gray-800"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </div>

              <div className="input-boxdiv mb-4">
                <label className="heading-title">Price</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={price}
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                />
              </div>

              <div className="input-boxdiv mb-4">
                <div>
                  <label className="heading-title">Seller platform</label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="seller platform"
                    class="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                    value={seller_platform}
                    onChange={(e) => {
                      setseller_platform(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Description</label>

                <textarea
                  type="email"
                  placeholder="Add Description"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale_property_Add;
