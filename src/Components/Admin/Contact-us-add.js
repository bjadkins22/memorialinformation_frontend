import React, { useEffect, useState } from "react";
import {
  ContactusDetailGetAction,
  ContactusDetailsAddAction,
} from "../../Redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Contact_us_add = () => {
  const dispatch = useDispatch();

  const { success, error, message, loading } = useSelector(
    (state) => state.ContactusDetailsAddReducer
  );

  useEffect(() => {
    dispatch(ContactusDetailGetAction());
  }, []);

  const { ContactusDetailGet } = useSelector(
    (state) => state.ContactusDetailGetReducer
  );

  useEffect(() => {
    if (ContactusDetailGet) {
      setEmail(ContactusDetailGet?.[0]?.email);
      setPhone(ContactusDetailGet?.[0]?.phone);
      setAddress(ContactusDetailGet?.[0]?.address);
    }
  }, [ContactusDetailGet]);

  const [rerender, setRerender] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);

    dispatch(ContactusDetailsAddAction(formData));
    setRerender(true);
  };

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
      setRerender(false);
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
          <h1 className="heading-top">Add Contact Detail</h1>

          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Email</label>
                <input
                  type="text"
                  placeholder="Add Email"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="input-boxdiv mb-4">
                <label className="heading-title">Phone</label>
                <input
                  type="text"
                  placeholder="Add Phone"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="input-boxdiv mb-4">
                <label className="heading-title">Address</label>
                <input
                  type="text"
                  placeholder="Add Address"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div className="input-add">
                <div className="flex gap-4 mt-12 mb-12">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200  "
                  >
                    Save
                  </button>
                  <Link to={`/dashboard`}>
                    <button
                      type="button"
                      className="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us_add;
