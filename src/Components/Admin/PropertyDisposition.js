import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EventsPostAction,
  FlowermomorialAction,
  propertyaddAction,
} from "../../Redux/actions/EventsAction";
import swal from "sweetalert";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";

const PropertyDisposition = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error, message, loading } = useSelector(
    (state) => state.propertyaddReducer
  );
  const { userData } = useSelector((state) => state.authReducer);

  const [rerender, setRerender] = useState(false);

  const [property_description, setproperty_description] = useState("");
  const [auction_details, setauction_details] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("property_description", property_description);
    formData.append("auction_details", auction_details);
    formData.append("auction_date", moment(date).format("YYYY-MM-DD"));
    formData.append("user", [userData?.user?.user_id]);

    dispatch(propertyaddAction(formData));
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
      // navigate("/thank-you");
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

  return (
    <div>
      <div class="pl-6">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Property Disposition</h1>
          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Property description</label>
                <input
                  type="text"
                  placeholder="Add Location"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={property_description}
                  onChange={(e) => {
                    setproperty_description(e.target.value);
                  }}
                />
              </div>

              <div className="input-boxdiv mb-4">
                <div>
                  <label className="heading-title">Auction details</label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Add Address"
                    class="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                    value={auction_details}
                    onChange={(e) => {
                      setauction_details(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="input-add">
                <div>
                  <label className="heading-title">Auction date</label>
                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      // label="start Date"
                      //   inputFormat="DD-MM-YYYY"
                      formatDate={(date) =>
                        moment(new Date()).format("DD-MM-YYYY")
                      }
                      minDate={new Date()}
                      value={date}
                      onChange={(e) => {
                        setDate(e);
                      }}
                      disablePast
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
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

export default PropertyDisposition;
