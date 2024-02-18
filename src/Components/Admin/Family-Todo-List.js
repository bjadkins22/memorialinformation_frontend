import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  FamilyTodoDeleteListAction,
  FamilyTodoListShowAction,
} from "../../Redux/actions/LegacyAction";

function Family_Todo_List() {
  const dispatch = useDispatch();

  const { FamilyTodoListShow } = useSelector(
    (state) => state.FamilyTodoListShowReducer
  );

  const { success: deletesuccess } = useSelector(
    (state) => state.FamilyTodoDeleteListReducer
  );

  useEffect(() => {
    dispatch(FamilyTodoListShowAction());
  }, [deletesuccess]);

  const deleteHandler = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this event?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(FamilyTodoDeleteListAction(id));
        swal({
          title: "",
          text: "Successfully Deleted!",
          className: "successAlert",
          icon: "/img/Memorial icon.png",
          buttons: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Todo List</h1>
            <div className="common-divbg bg-white">
              <div className="addevent-detailscalendar mb-4">
                <Link to="/todo">
                  <button className="add-event-showtab">Add Todo</button>
                </Link>
              </div>
              <div className="Topallpage AllPageHight Custompage">
                {FamilyTodoListShow?.length > 0 ? (
                  <>
                    <div className="grid grid-cols-4 gap-4">
                      {FamilyTodoListShow?.map((item) => (
                        <>
                          <div class="todolist-card flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div class="p-6">
                              <div className="title-contnetodo">
                                <h1 class="plan-ahed capitalize break-words mb-2">
                                  {item?.title?.length > 20
                                    ? item?.title?.slice(0, 20) + "..."
                                    : item?.title ?? "N/A"}
                                </h1>
                                <div className="flex gap-2 text-lg mt-1">
                                  <Link
                                    title="edit"
                                    className="EditBut editAdminButton"
                                    to={`/todo/${item.id}`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                      />
                                    </svg>
                                  </Link>
                                  <div className="flex ">
                                    <button
                                      title="delete"
                                      className="deletebutt"
                                      onClick={() => deleteHandler(item.id)}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6 text-red-600"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <p class="decisions-contnet description-11 capitalize break-words">
                                {item?.description?.length > 50
                                  ? item?.description?.slice(0, 50) + "..."
                                  : item?.description ?? "N/A"}
                              </p>
                            </div>
                            <div class="p-6 pt-0">
                              <Link to={`/todo-details/${item.id}`}>
                                <button
                                  class="select-none rounded-lg bg-[#c89e5f] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                  type="button"
                                  data-ripple-light="true"
                                >
                                  Read More
                                </button>
                              </Link>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="no-founddatameme h-[300px]">
                    NO DATA FOUND
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Family_Todo_List;
