import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetFileDataByIDAction,
  StateChangeUserAction,
} from "../../Redux/actions/SuperAdminAction";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const Partner_Status_Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { statusID } = useParams();

  const { GetFileDataByID } = useSelector(
    (state) => state.GetFileDataByIDReducer
  );

  const { success, error, message } = useSelector(
    (state) => state.GetFileDataByIDReducer
  );

  useEffect(() => {
    if (statusID) {
      dispatch(GetFileDataByIDAction(statusID));
    }
  }, [statusID]);


  const [rerender, setRerender] = useState(false);
  const [Address, setAddress] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyType, setCompanyType] = useState("");
  const [Email, setEmail] = useState("");
  const [First_name, setFirst_name] = useState("");
  const [Last_name, setLast_name] = useState("");
  const [Other, setOther] = useState("");
  const [Phone, setPhone] = useState("");
  const [Phone2, setPhone2] = useState("");
  const [State, setState] = useState("");
  const [Title, setTitle] = useState("");
  const [Website, setWebsite] = useState("");

  useEffect(() => {
    if (GetFileDataByID) {
      setAddress(GetFileDataByID?.Address);
      setCompanyName(GetFileDataByID?.CompanyName);
      setCompanyType(GetFileDataByID?.CompanyType);
      setEmail(GetFileDataByID?.Email);
      setFirst_name(GetFileDataByID?.First_name);
      setLast_name(GetFileDataByID?.Last_name);
      setOther(GetFileDataByID?.Other);
      setPhone(GetFileDataByID?.Phone);
      setPhone2(GetFileDataByID?.Phone2);
      setState(GetFileDataByID?.State);
      setTitle(GetFileDataByID?.Title);
      setWebsite(GetFileDataByID?.Website);
    }
  }, [GetFileDataByID]);

  const handleSubmit = (id) => {
    const formData = new FormData();
    formData.append("Address", Address);
    formData.append("CompanyName", CompanyName);
    formData.append("CompanyType", CompanyType);
    formData.append("Email", Email);
    formData.append("First_name", First_name);
    formData.append("Last_name", Last_name);
    formData.append("Other", Other);
    formData.append("Phone", Phone);
    formData.append("Phone2", Phone2);
    formData.append("State", State);
    formData.append("Title", Title);
    formData.append("Website", Website);

    dispatch(StateChangeUserAction(statusID, formData));
    setRerender(true);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/partner/status/list");
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
          <h1 className="heading-top">Edit Information</h1>
          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Address</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={Address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Company Name</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={CompanyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Company Type</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={CompanyType}
                  onChange={(e) => {
                    setCompanyType(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Email</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="input-boxdiv mb-4">
                <label className="heading-title">First Name</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={First_name}
                  onChange={(e) => {
                    setFirst_name(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Last name</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={Last_name}
                  onChange={(e) => {
                    setLast_name(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Other</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={Other}
                  onChange={(e) => {
                    setOther(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Phone</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={Phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Phone2</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={Phone2}
                  onChange={(e) => {
                    setPhone2(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="input-boxdiv mb-4">
                <label className="heading-title">State</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={State}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Title</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={Title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Website</label>
                <input
                  type="text"
                  placeholder="Add Price"
                  class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={Website}
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner_Status_Edit;
