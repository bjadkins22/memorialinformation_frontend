import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  PartnersOwnUsersAction,
  myUserShowPartnerloginAction,
} from "../../Redux/actions/PartnerAction";
import { Link } from "react-router-dom";

function Partner_Own_UsersList() {
  const dispatch = useDispatch();

  const { myUserShowPartner } = useSelector(
    (state) => state.myUserShowPartnerloginReducer
  );

  const { PartnersOwnUsers } = useSelector(
    (state) => state.PartnersOwnUsersReducer
  );

  const { userData } = useSelector((state) => state.authReducer);
  const [selectUser, setSelectUser] = useState([]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("payment_verified", selectUser);
    dispatch(PartnersOwnUsersAction(userData?.user?.user_id, formData));
  }, [userData, selectUser]);

  useEffect(() => {
    dispatch(myUserShowPartnerloginAction(userData?.user?.user_id));
  }, [userData]);

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    let userData = [];
    PartnersOwnUsers?.map((item, index) => {
      item.first_name = item.first_name;
      item.last_name = item.last_name;
      item.email = item.email;
      item.phone_number = item.phone_number;

      userData.push(item);
    });

    setUsersForRender(userData);
  }, [PartnersOwnUsers]);

  const data = {
    columns: [
      {
        label: "First name",
        field: "first_name",
        sort: "asc",
        width: 500,
      },

      {
        label: "Last name",
        field: "last_name",
        sort: "asc",
        width: 500,
      },

      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },
      {
        label: "Phone number",
        field: "phone_number",
        sort: "asc",
        width: 100,
      },
      {
        label: "Status",
        field: "Status",
        sort: "asc",
        width: 100,
      },
    ],
    rows: usersForRender,
  };

  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            {/* <h1 className="heading-top">Partner's Own User's</h1> */}

            <div className="flex justify-content-between items-center">
              <h1 className="heading-top">Partner's Own User's</h1>

              <div class="sortBy">
                <select
                  value={selectUser}
                  onChange={(e) => setSelectUser(e.target.value)}
                  class="sortbb"
                >
                  <option value="">all</option>
                  <option value={true}>Paid User</option>
                  <option value={false}>Unpaid User</option>
                </select>
              </div>
            </div>
            <div className="common-divbg bg-white">
              <div className="Topallpage AllPageHight Custompage">
                <div className="ContentDiv Categoriesdiv1">
                  <div className="savebtn Categorybtn">
                    <Link
                      className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
                      to={`/add-user`}
                    >
                      {" "}
                      Add User{" "}
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

export default Partner_Own_UsersList;
