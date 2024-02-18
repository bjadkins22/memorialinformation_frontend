import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  EventsDeleteAction,
  EventsListGetAction,
} from "../../Redux/actions/EventsAction";
import {
  FamilyTodoDeleteListAction,
  MemorialInformationListAction,
} from "../../Redux/actions/LegacyAction";

function Memorial_List() {
  const dispatch = useDispatch();

  const { MemorialInformationList, success } = useSelector(
    (state) => state.MemorialInformationListReducer
  );

  const { success: deletesuccess } = useSelector(
    (state) => state.FamilyTodoDeleteListReducer
  );

  useEffect(() => {
    dispatch(MemorialInformationListAction());
  }, [deletesuccess]);

  const [usersForRender, setUsersForRender] = useState([]);

  const allUsermemorial = MemorialInformationList?.owner_info;

  useEffect(() => {
    let userData = [];
    MemorialInformationList?.owner_info?.map((item, index) => {
      item.first_name = item.first_name;
      item.user_role = item.user_role;
      item.username = item.username;

      item.status = (
        <div className="flex">
          {item.status == "completed" ? (
            <span className="user-status11 text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
              Completed
            </span>
          ) : item.status == "progress" ? (
            <span className="user-status11 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-blue-200 text-blue-600 rounded-full">
              progress
            </span>
          ) : item.status == "pending" ? (
            <span className="user-status11 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-yellow-200 text-yellow-800 rounded-full">
              Pending
            </span>
          ) : null}
        </div>
      );

      item.action = (
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
      );
      userData.push(item);
    });

    setUsersForRender(userData);
  }, [MemorialInformationList]);

  const data = {
    columns: [
      {
        label: "Name",
        field: "first_name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "username",
        sort: "asc",
        width: 500,
      },
      {
        label: "Role",
        field: "user_role",
        sort: "asc",
        width: 500,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: usersForRender,
  };

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
            <h1 className="heading-top">Team members</h1>
            <div className="common-divbg bg-white">
              <div className="Topallpage AllPageHight Custompage">
                <div class="container my-12 mx-auto px-4 md:px-12">
                  <section class="">
                    <div class="text-center pb-12">
                      <h1 class="diffrence-contnet">Team members</h1>
                    </div>

                    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
                      {MemorialInformationList?.length > 0 ? (
                        <div className="grid gap-10 grid-cols-3">
                          <>
                            {MemorialInformationList?.map((item) => (
                              <>
                                <Link to={`/legacyinfo/${item?.legacy_page}/${item?.owner_info.id}`}>
                                  <div className="main-cardteammember">
                                    <div className="main-cardteammember relative overflow-hidden transition duration-300 transform  hover:shadow-2xl">
                                      {item?.owner_info?.image_url ? (
                                        <img
                                          className="our-teamimages-card"
                                          src={item?.owner_info?.image_url}
                                        />
                                      ) : (
                                        <img
                                          className="our-teamimages-card"
                                          src="/img/avtarImage.jpg"
                                          alt="Person"
                                        />
                                      )}
                                    </div>

                                    <div className="team-contnetid">
                                      <div className="item-content text-center">
                                        <h6 className="team-name ">
                                          {item?.owner_info?.first_name}{" "}
                                          {item?.owner_info?.last_name}
                                        </h6>
                                        {/* <p className="merorialtextinfo today-infoo">
                                          {item?.user_role}
                                        </p> */}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </>
                            ))}
                          </>
                        </div>
                      ) : (
                        <div className="no-founddatameme h-[300px]">
                          NO MEMBERS FOUND
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Memorial_List;
