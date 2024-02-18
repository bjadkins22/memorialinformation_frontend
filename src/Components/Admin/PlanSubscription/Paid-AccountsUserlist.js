import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
// import { PartnersOwnUsersAction } from "../../Redux/actions/PartnerAction";
import { Link } from "react-router-dom";
import { PartnersOwnUsersAction } from "../../../Redux/actions/PartnerAction";

function Paid_AccountsUserlist() {
  const dispatch = useDispatch();

  const { PartnersOwnUsers } = useSelector(
    (state) => state.PartnersOwnUsersReducer
  );

  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    const formData = new FormData();
    formData.append("payment_verified", true);
    dispatch(PartnersOwnUsersAction(userData?.user?.user_id, formData));
  }, [userData, true]);

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
    ],
    rows: usersForRender,
  };

  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Paid User's</h1>
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

export default Paid_AccountsUserlist;
