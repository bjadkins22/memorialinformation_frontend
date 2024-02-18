import React, { useEffect, useState } from "react";

import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AddFileStatusAction } from "../../Redux/actions/SuperAdminAction";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const fileTypes = ["csv", "xlsx"];

const Partner_Status_Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success, error, message } = useSelector(
    (state) => state.AddFileStatusReducer
  );

  const { userData } = useSelector((state) => state.authReducer);
  const [distribution_sheet, setdistribution_sheet] = useState(null);
  const [rerender, setRerender] = useState(false);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", distribution_sheet);
    dispatch(AddFileStatusAction(formData));
    setRerender(true)
  };

  const handleDistribution = (file) => {
    setdistribution_sheet(file);
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
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Add Partner Status</h1>
          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="mb-6">
                <label className="heading-title">Distribution sheet</label>
                <FileUploader
                  handleChange={(e) => handleDistribution(e)}
                  name="file"
                  types={fileTypes}
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

export default Partner_Status_Add;
