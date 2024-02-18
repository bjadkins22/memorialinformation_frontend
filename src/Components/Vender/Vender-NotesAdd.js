import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
import swal from "sweetalert";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import TextField from "@mui/material/TextField";
import { BACKEND_URL } from "../../environment";
import {
  GetPropertyDataByIDAction,
  LegacyListShowAction,
} from "../../Redux/actions/LegacyAction";

import LoaderSpinner from "../Loader/Loader-spinner";
import {
  VenderAddNotesAction,
  VenderGetNotesDataByIDAction,
  VenderNotesUpdateAction,
} from "../../Redux/actions/VenderAction";

const Vender_NotesAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { venderNoteId } = useParams();

  useEffect(() => {
    if (venderNoteId) {
      dispatch(VenderGetNotesDataByIDAction(venderNoteId));
    }
  }, [venderNoteId]);

  const { success, error, message, loading } = useSelector(
    (state) => state.VenderAddNotesRecuer
  );

  const { VenderGetNotesDataByID } = useSelector(
    (state) => state.VenderGetNotesDataByIDReducer
  );

  useEffect(() => {
    if (VenderGetNotesDataByID) {
      settitle(VenderGetNotesDataByID?.title);
      setcontent(VenderGetNotesDataByID?.content);
    }
  }, [VenderGetNotesDataByID]);

  const {
    success: successUpdate,
    error: errorUpdate,
    message: messageUpdate,
  } = useSelector((state) => state.VenderNotesUpdateReducer);

  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const [rerender, setRerender] = useState(false);

  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();

    if (title) {
      formData.append("title", title);
    }
    if (content) {
      formData.append("content", content);
    }

    if (venderNoteId) {
      dispatch(VenderNotesUpdateAction(venderNoteId, formData));
    } else {
      dispatch(VenderAddNotesAction(formData));
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
      navigate("/vender/notes/list");
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
      navigate("/vender/notes/list");
      setRerender(false);
      settitle("");
      setcontent("");
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
            <h1 className="heading-top">Note Add</h1>

            <div className="common-divbg bg-white">
              <>
                <div className="events-div my-12 ">
                  <div className="input-boxdiv mb-4">
                    <label className="heading-title">Title</label>
                    <input
                      value={title}
                      onChange={(e) => {
                        settitle(e.target.value);
                      }}
                      type="text"
                      placeholder="Add Title"
                      class="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                    />
                  </div>

                  <div className="input-boxdivtextarea">
                    <label className="heading-title">Content</label>
                    <textarea
                      value={content}
                      onChange={(e) => {
                        setcontent(e.target.value);
                      }}
                      type="text"
                      placeholder="Add Content"
                      className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
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
              </>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vender_NotesAdd;
