import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  EventsDeleteAction,
  FamilyDetailListAction,
  FlowermomorialListAction,
} from "../../Redux/actions/EventsAction";

function MemorialFlower_List() {
  const dispatch = useDispatch();

  const { FlowermomorialListReducer, success } = useSelector(
    (state) => state.FlowermomorialListReducerReducer
  );

  useEffect(() => {
    dispatch(FlowermomorialListAction());
  }, []);

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    let userData = [];
    FlowermomorialListReducer?.map((item, index) => {
      item.message = item.message;

      //   item.status = (
      //     <div className="flex">
      //       {item.status ? (
      //         <span className=" text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
      //           Active
      //         </span>
      //       ) : (
      //         <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
      //           Inactive
      //         </span>
      //       )}
      //     </div>
      //   );

      item.action = (
        <div className="flex text-lg">
          <Link
            title="edit"
            className="EditBut editAdminButton"
            to={`/add-blogs/${item.id}`}
          >
            <i className="fas fa-pencil pr-2 text-blue-500 "></i>
          </Link>
          <div className="flex">
            <button
              title="delete"
              className="deletebutt"
              onClick={() => deleteHandler(item.id)}
            >
              <i className="fa fa-trash text-red-500"></i>
            </button>
          </div>
        </div>
      );
      userData.push(item);
    });

    setUsersForRender(userData);
  }, [FlowermomorialListReducer]);

  const data = {
    columns: [
      {
        label: "message",
        field: "message",
        sort: "asc",
        width: 500,
      },
      //   {
      //     label: "Description",
      //     field: "description",
      //     sort: "asc",
      //     width: 500,
      //   },
      //   {
      //     label: "date",
      //     field: "date",
      //     sort: "asc",
      //     width: 500,
      //   },
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
        dispatch(EventsDeleteAction(id));
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
            <h1 className="heading-top">Memorial List</h1>
            <div className="common-divbg bg-white">
              <div className="Topallpage AllPageHight Custompage">
                <div className="ContentDiv Categoriesdiv1">
                  {/* <div className="Status"></div> */}
                  <div className="savebtn Categorybtn">
                    <Link
                      className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
                      to={`/family-message`}
                    >
                      {" "}
                      Add Event{" "}
                    </Link>
                  </div>
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

export default MemorialFlower_List;
