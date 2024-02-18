import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import {
  VenderProdcutDeleteAction,
  VenderdProdcutListAction,
} from "../../Redux/actions/VenderAction";

const VenderProductList = () => {
  const dispatch = useDispatch();

  const { VenderdProdcutList } = useSelector(
    (state) => state.VenderdProdcutListRecuer
  );

  const { success } = useSelector((state) => state.VenderProdcutDeleteRecuer);

  useEffect(() => {
    dispatch(VenderdProdcutListAction());
  }, [success]);

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
        dispatch(VenderProdcutDeleteAction(id));
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

  console.log("VenderdProdcutList", VenderdProdcutList);

  return (
    <div>
      <div className="main-page-div bg-green-200">
        <h1 className="heading-top">Shop</h1>
        <div className="common-divbg bg-white">
          {/* {!(VenderdProdcutList?.length === 1) && ( */}
          <div className="addevent-detailscalendar mb-6">
            <Link to="/vender/shop">
              <button className="add-event-showtab">Add Shop</button>
            </Link>
          </div>
          {/* // )} */}

          {VenderdProdcutList?.length > 0 ? (
            <>
              <div className="grid grid-cols-4 gap-4">
                {VenderdProdcutList?.map((item) => (
                  <div class="transform rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <img
                      class="h-48 w-full object-cover object-center"
                      src={item?.vendor_product_detail?.images?.[0] ?? ""}
                    />
                    <div class="p-4">
                      <h2 class="productname mb-2  ">
                        {item?.title?.length > 20
                          ? item?.title.slice(0, 20) + "..."
                          : item?.title}
                      </h2>
                   
                      <p class="productdescription mb-2 text-base dark:text-gray-300 text-gray-700">
                        {item?.description.length > 60
                          ? item?.description.slice(0, 60) + "..."
                          : item?.description}
                      </p>
                      <div class="flex items-center">
                        <p class="productpricee mr-2 text-l">
                          {" "}
                          <a
                            target={item?.product_link}
                            href={item?.product_link}
                          >
                            {item?.product_link}
                          </a>
                        </p>
                      </div>

                      <div className="productaction">
                        <button className="viewproduct">View</button>
                        <Link to={`/vender/shop/${item.id}`}>
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
            </>
          ) : (
            <>
              <div class="pleasesolectuser">
                <h1 class="selectuserchat">no products found</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenderProductList;
