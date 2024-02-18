import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

import { AllUserListAction } from "../../Redux/actions/UserAction";

function AllUserList() {
  const dispatch = useDispatch();

  const { AllUserList } = useSelector((state) => state.AllUserListReducer);

  useEffect(() => {
    dispatch(AllUserListAction());
  }, []);


  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    let userData = [];
    AllUserList?.map((item, index) => {
      item.first_name = item.first_name;
      item.last_name = item.last_name;
      item.email = item.email;
      item.phone_number = item.phone_number;

      item.is_active = (
        <div className="flex">
          {item.is_active ? (
            <span className=" text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
              Active
            </span>
          ) : (
            <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
              Inactive
            </span>
          )}
        </div>
      );

      //   item.action = (
      //     <div className="flex text-lg">
      //       <Link
      //         title="edit"
      //         className="EditBut editAdminButton"
      //         to={`/add-blogs/${item.id}`}
      //       >
      //         <i className="fas fa-pencil pr-2 text-blue-500 "></i>
      //       </Link>
      //       <div className="flex">
      //         <button
      //           title="delete"
      //           className="deletebutt"
      //           onClick={() => deleteHandler(item.id)}
      //         >
      //           <i className="fa fa-trash text-red-500"></i>
      //         </button>
      //       </div>
      //     </div>
      //   );
      userData.push(item);
    });

    setUsersForRender(userData);
  }, [AllUserList]);

  const data = {
    columns: [
      {
        label: "First Name",
        field: "first_name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Last Name",
        field: "last_name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Phone Number",
        field: "phone_number",
        sort: "asc",
        width: 500,
      },
      {
        label: "Status",
        field: "is_active",
        sort: "asc",
        width: 500,
      },
        // {
        //   label: "Action",
        //   field: "ac",
        //   sort: "asc",
        //   width: 100,
        // },
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
        // dispatch(EventsDeleteAction(id));
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
            <h1 className="heading-top">All User List</h1>
            <div className="common-divbg bg-white">
              <div className="Topallpage AllPageHight Custompage">
                <div className="ContentDiv Categoriesdiv1">
                  {/* <div className="Status"></div> */}
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

export default AllUserList;
