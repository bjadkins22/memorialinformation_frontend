import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PartnerProductAllistAction,
  PartnerProductDeleteAction,
  PartnerVenueEventDeleteAction,
} from "../../Redux/actions/PartnerAction";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Partner_Product_list = () => {
  const dispatch = useDispatch();

  const { PartnerProductAllist } = useSelector(
    (state) => state.PartnerProductAllistReducer
  );

  const { success } = useSelector((state) => state.PartnerProductDeleteReducer);
  const { success: addSuccess } = useSelector(
    (state) => state.PartnerAddProductReducer
  );

  useEffect(() => {
    dispatch(PartnerProductAllistAction());
  }, [success, addSuccess]);

  const DeleteVenue = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this product?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(PartnerProductDeleteAction(id));
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
    <div>
      <div className="main-page-div bg-green-200">
        <h1 className="heading-top">Product List</h1>
        <div className="common-divbg bg-white">
          <div className="addevent-detailscalendar mb-6">
            <Link to="/product/add">
              <button className="add-event-showtab">Add Product</button>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {PartnerProductAllist?.map((item) => (
              <div class="transform rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img
                  class="h-48 w-full object-cover object-center"
                  src={item?.image ?? ""}
                />
                <div class="p-4">
                  <h2 class="productname mb-2  ">
                    {item?.name?.length > 20
                      ? item?.name.slice(0, 20) + "..."
                      : item?.name}
                  </h2>
                  <p class="productdescription mb-2 text-base dark:text-gray-300 text-gray-700">
                    {item?.description.length > 60
                      ? item?.description.slice(0, 60) + "..."
                      : item?.description}
                  </p>
                  <div class="flex items-center">
                    <p class="productpricee mr-2 text-l">${item?.price}</p>
                  </div>

                  <div className="productaction">
                    <button className="viewproduct">View</button>
                    <Link to={`/product/edit/${item.id}`}>
                      <button className="editproduct">Edit</button>
                    </Link>
                    <button
                      onClick={() => DeleteVenue(item.id)}
                      className="deleteproduct"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner_Product_list;
