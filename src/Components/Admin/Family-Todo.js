import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import {
  FamilyTodoAddAction,
  FamilyTodoGetListByIdAction,
  FamilyTodoListUpdateAction,
  LegacyListShowAction,
  MemberListshowLegAcyaction,
} from "../../Redux/actions/LegacyAction";

const Famil_Todo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error, message, loading } = useSelector(
    (state) => state.FamilyTodoAddReducer
  );
  const { userData } = useSelector((state) => state.authReducer);
  const [rerender, setRerender] = useState(false);

  const { todoId } = useParams();

  const { FamilyTodoGetListById } = useSelector(
    (state) => state.FamilyTodoGetListByIdReducer
  );

  const {
    success: successUpdate,
    error: errorupdate,
    message: messageUpdate,
  } = useSelector((state) => state.FamilyTodoListUpdateReducer);

  useEffect(() => {
    if (todoId) {
      dispatch(FamilyTodoGetListByIdAction(todoId));
    }
  }, [todoId]);

  useEffect(() => {
    if (FamilyTodoGetListById && todoId) {
      setTitle(FamilyTodoGetListById?.title);
      setDescription(FamilyTodoGetListById?.description);
      const Dateget = new Date(FamilyTodoGetListById?.date);
      setDate(Dateget);
      setTodoStatus(FamilyTodoGetListById?.status);
      setTagged_member(FamilyTodoGetListById?.tagged_member);
    }
  }, [FamilyTodoGetListById, todoId]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [TodoStatus, setTodoStatus] = useState("");
  const [tagged_member, setTagged_member] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("status", TodoStatus);
    if (tagged_member) {
      formData.append("tagged_member", tagged_member);
    }
    if (LegacyListShow?.[0]?.id) {
      formData.append("legacy", LegacyListShow?.[0]?.id);
    }
    formData.append("user", userData?.user?.user_id);

    formData.append("date", moment(date).format("YYYY-MM-DD"));

    if (todoId) {
      dispatch(FamilyTodoListUpdateAction(todoId, formData));
      setUpdateRender(true);
    } else {
      dispatch(FamilyTodoAddAction(formData));
      setRerender(true);
    }
  };

  const [upadteRender, setUpdateRender] = useState(false);

  useEffect(() => {
    if (successUpdate && upadteRender) {
      swal({
        title: " ",
        text: "Todo Upadted SuccssFully!",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setUpdateRender(false);
      navigate("/todo-list");
    }
    if (errorupdate && upadteRender) {
      swal({
        title: "Error",
        text: errorupdate,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setUpdateRender(false);
    }
  }, [successUpdate, errorupdate, upadteRender]);

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: " ",
        text: "Todo Added SuccssFully!",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/todo-list");
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
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const { LegacyListShow } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  const { MemberListshowLegacy } = useSelector(
    (state) => state.MemberListshowLegacyReducer
  );

  useEffect(() => {
    if (LegacyListShow) {
      dispatch(MemberListshowLegAcyaction(LegacyListShow?.[0]?.id));
    }
  }, [LegacyListShow]);

  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          {todoId ? (
            <h1 className="heading-top">Edit Todo</h1>
          ) : (
            <h1 className="heading-top">Add Todo</h1>
          )}

          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="input-boxdiv mb-4">
                <label className="heading-title">Title</label>
                <input
                  type="text"
                  placeholder="Add Title"
                  className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>

              <div className="input-add date-pickeradddate">
                <div>
                  <label className="heading-title">Date</label>
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

              <div className="input-boxdivtextarea mb-4">
                <label className="heading-title">Description</label>

                <textarea
                  type="text"
                  placeholder="Add Description"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>

              <div className="input-boxdivtextarea mt-2 mb-4">
                <label className="heading-title">Status</label>
                <select
                  value={TodoStatus}
                  onChange={(e) => {
                    setTodoStatus(e.target.value);
                  }}
                  className="selectbox-inprogress w-full rounded-lg bg-white mt-2 border focus:outline-none"
                >
                  <option selected>Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="progress">Progress</option>
                  <option value="completed">Complted</option>
                </select>
              </div>

              <div className="input-boxdivtextarea mt-2 mb-4">
                <label className="heading-title">Tagged member</label>
                <select
                  value={tagged_member}
                  onChange={(e) => {
                    setTagged_member(e.target.value);
                  }}
                  className="selectbox-inprogress w-full rounded-lg bg-white mt-2 border focus:outline-none"
                >
                  <option selected>Select Member</option>
                  {MemberListshowLegacy?.map((item) => (
                    <option value={item.member_info.id}>
                      {item.member_info.first_name}
                    </option>
                  ))}
                </select>
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
                  <Link to={`/todo-list`}>
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

export default Famil_Todo;
