import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

import {
  AdminDeletePartnerSuggestionAction,
  PartnerPlatfromSuggestionGetDataAction,
} from "../../Redux/actions/PartnerAction";
function Partner_Suggestion_list() {
  const dispatch = useDispatch();

  const { PartnerPlatfromSuggestionGet } = useSelector(
    (state) => state.PartnerPlatfromSuggestionGetReducer
  );

  const { success } = useSelector(
    (state) => state.AdminDeletePartnerSuggestionReducer
  );

  useEffect(() => {
    dispatch(PartnerPlatfromSuggestionGetDataAction());
  }, [success]);

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    let userData = [];
    PartnerPlatfromSuggestionGet?.map((item, index) => {
      const user = item.user_details;

      item.name = user.first_name;
      item.last_name = user.last_name;
      item.email = user.email;
      item.phone_number = user.phone_number;
      item.phone_number = user.phone_number;
      item.category = item.category;

      item.action = (
        <div className="flex text-lg">
          <div className="flex gap-3 items-center">
            <button
              title="delete"
              className="deletebutt"
              onClick={() => deleteHandler(item.id)}
            >
              <i className="fa fa-trash text-red-500"></i>
            </button>

            <button title="view" className="deletebutt">
              <Link to={`/suggestion/detail/${item.id}`}>
                <i class="fa fa-eye text-blue-400"></i>
              </Link>
            </button>
          </div>
        </div>
      );

      userData.push(item);
    });

    setUsersForRender(userData);
  }, [PartnerPlatfromSuggestionGet]);

  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
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
        label: "Category",
        field: "category",
        sort: "asc",
        width: 500,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 500,
      },
    ],
    rows: usersForRender,
  };

  const deleteHandler = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this Suggestion?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(AdminDeletePartnerSuggestionAction(id));
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
            <h1 className="heading-top">All Suggestion</h1>
            <div className="common-divbg bg-white">
              <div className="Topallpage AllPageHight Custompage">
                <div className="ContentDiv Categoriesdiv1">
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

export default Partner_Suggestion_list;
