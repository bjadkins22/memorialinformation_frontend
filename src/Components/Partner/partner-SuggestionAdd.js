import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { partnerPlatfromSuggestionPostAction } from "../../Redux/actions/PartnerAction";
import swal from "sweetalert";

const Partner_SuggestionAdd = () => {
  const dispatch = useDispatch();

  const { success, error, message } = useSelector(
    (state) => state.partnerPlatfromSuggestionPostReducer
  );

  const { userData } = useSelector((state) => state.authReducer);

  const [rerender, setRerender] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState("");

  const handleSubmitSuggestion = () => {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("category", category);
    formData.append("features", features);
    // formData.append("email", userData?.user?.email);
    formData.append("user", userData?.user?.user_id);

    dispatch(partnerPlatfromSuggestionPostAction(formData));
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
      setDescription("");
      setCategory("");
      setFeatures("");
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
          <h1 className="heading-top">Suggestion Add</h1>

          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  type="text"
                  placeholder="Add Description"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                ></textarea>
              </div>

              <div className="input-boxdivtextarea mt-2 mb-4">
                <label className="heading-title">Category</label>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className="selectbox-inprogress w-full rounded-lg bg-white mt-2 border focus:outline-none"
                >
                  <option selected>Select Category</option>
                  <option value="social_media">Social media</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="content_management">Content management</option>
                </select>
              </div>

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Features</label>
                <textarea
                  value={features}
                  onChange={(e) => {
                    setFeatures(e.target.value);
                  }}
                  type="text"
                  placeholder="Add features"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                ></textarea>
              </div>

              <div className="input-add">
                <div className="flex gap-4 mt-12 mb-12">
                  <button
                    onClick={handleSubmitSuggestion}
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

export default Partner_SuggestionAdd;
