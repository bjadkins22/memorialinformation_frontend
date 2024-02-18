import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EventsPostAction,
  FlowermomorialAction,
} from "../../Redux/actions/EventsAction";
import swal from "sweetalert";

const MemorialFlower = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error, message, loading } = useSelector(
    (state) => state.EventsPostReducer
  );
  const { userData } = useSelector((state) => state.authReducer);

  const [rerender, setRerender] = useState(false);

  const [funeral_location, setfuneral_location] = useState("");
  const [flowers_delivery_address, setflowers_delivery_address] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("funeral_location", funeral_location);
    formData.append("flowers_delivery_address", flowers_delivery_address);
    formData.append("user", [userData?.user?.user_id]);

    dispatch(FlowermomorialAction(formData));
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
      setRerender(false);
      // navigate("/thank-you");
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
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Memorial flower</h1>
          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Funeral Location</label>
                <input
                  type="text"
                  placeholder="Add Location"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                  value={funeral_location}
                  onChange={(e) => {
                    setfuneral_location(e.target.value);
                  }}
                />
              </div>

              <div className="input-boxdiv mb-4">
                <label className="heading-title">
                  Flowers Delivery Address
                </label>
                <input
                  type="text"
                  placeholder="Add Address"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                  value={flowers_delivery_address}
                  onChange={(e) => {
                    setflowers_delivery_address(e.target.value);
                  }}
                />
              </div>

              <div className="input-add">
                <div className="flex gap-4 mt-12">
                  <button
                    onClick={handleSubmit}
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

export default MemorialFlower;
