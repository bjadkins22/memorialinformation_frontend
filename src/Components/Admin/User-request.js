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
  PartnerRequestAction,
  PendingPartneruserListAction,
} from "../../Redux/actions/UserAction";

function User_request() {
  const dispatch = useDispatch();

  const { PendingPartneruserList } = useSelector(
    (state) => state.PendingPartneruserListReducer
  );

  const { success } = useSelector((state) => state.PartnerRequestReducer);

  useEffect(() => {
    dispatch(PendingPartneruserListAction());
  }, [success]);

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    let userData = [];
    PendingPartneruserList?.map((item, index) => {
      item.company_name = item.company_name;
      item.partner_type = item.partner_type;

      // item.description = item.description

      item.status = (
        <div className="flex">
          {item.status == "accept" ? (
            <span className="user-status11 text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
              Accepted
            </span>
          ) : item.status == "decline" ? (
            <span className="user-status11 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
              Declined
            </span>
          ) : item.status == "pending" ? (
            <span className="user-status11 text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-yellow-200 text-yellow-800 rounded-full">
              Pending
            </span>
          ) : null}
        </div>
      );

      // <div className="flex">
      //   {item.status === "pending" ? (
      //     <span className="text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
      //       Active
      //     </span>
      //   ) : (
      //     <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
      //       Inactive
      //     </span>
      //   )}
      // </div>;

      item.action = (
        <div className="flex text-lg">
          <div class="inline-flex items-center text-base font-semibold ">
            <button
              onClick={() => AcceptHandler(item.user, true)}
              type="button"
              class="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Accept
            </button>
            <button
              onClick={() => deleteHandler(item.user, false)}
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2  text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Reject
            </button>
          </div>
        </div>
      );
      userData.push(item);
    });

    setUsersForRender(userData);
  }, [PendingPartneruserList]);

  const data = {
    columns: [
      {
        label: "Company name",
        field: "company_name",
        sort: "asc",
        width: 500,
      },

      {
        label: "Partner Type",
        field: "partner_type",
        sort: "asc",
        width: 500,
      },

      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
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

  // const deleteHandler = (id) => {
  //   swal({
  //     title: "Warning",
  //     text: "Are you sure you want to delete this event?",
  //     className: "errorAlert",
  //     icon: "/smallMN.png",
  //     buttons: {
  //       reject: {
  //         text: "Reject",
  //         value: false, // Send false if "Reject" is clicked
  //       },
  //       accept: {
  //         text: "Accept",
  //         value: true, // Send true if "Accept" is clicked
  //       },
  //     },
  //     dangerMode: true,
  //   }).then((value) => {
  //     if (value !== undefined) {
  //       dispatch(PartnerRequestAction(value, id)); // Send true or false based on user choice
  //       if (value) {
  //         swal({
  //           title: "",
  //           text: "Successfully Deleted!",
  //           className: "successAlert",
  //           icon: "/smallMN.png",
  //           buttons: false,
  //           timer: 1500,
  //         });
  //       } else {
  //         swal("Event not deleted!", { icon: "info" });
  //       }
  //     }
  //   });
  // };

  const AcceptHandler = (id, userstatus) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to Accept Request?",
      className: "errorAlert",
      icon: "/smallMN.png",
      // buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const fromData = new FormData();
        dispatch(PartnerRequestAction(userstatus, id));
        swal({
          title: "",
          text: "Successfully Accepted!",
          className: "successAlert",
          icon: "/smallMN.png",
          buttons: false,
          timer: 1500,
        });
      }
    });
  };

  const deleteHandler = (id, userstatus) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to Reject Request?",
      className: "errorAlert",
      icon: "/smallMN.png",
      // buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const fromData = new FormData();
        dispatch(PartnerRequestAction(userstatus, id));
        swal({
          title: "",
          text: "Successfully Rejected!",
          className: "successAlert",
          icon: "/smallMN.png",
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
            <h1 className="heading-top">Partner Request</h1>
            <div className="common-divbg bg-white">
              <div className="Topallpage AllPageHight Custompage">
                <div className="ContentDiv Categoriesdiv1">
                  {/* <div className="savebtn Categorybtn">
                    <Link
                      className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
                      to={`/events`}
                    >
                      {" "}
                      Add Event{" "}
                    </Link>
                  </div> */}
                  <MDBDataTable
                    style={{}}
                    responsive
                    striped
                    bordered
                    small
                    data={data}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User_request;
