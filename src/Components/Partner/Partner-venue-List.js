import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PartnerVenueEventDeleteAction,
  PartnerVenueEventGetAction,
} from "../../Redux/actions/PartnerAction";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Partner_venue_List = () => {
  const dispatch = useDispatch();

  const { PartnerVenueEventGet } = useSelector(
    (state) => state.PartnerVenueEventGetReducer
  );

  const { success } = useSelector(
    (state) => state.PartnerVenueEventDeleteReducer
  );

  useEffect(() => {
    dispatch(PartnerVenueEventGetAction());
  }, [success]);

  const DeleteVenue = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this venue?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(PartnerVenueEventDeleteAction(id));
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
      <div class="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Venue</h1>
          <div className="common-divbg bg-white">
            <div className="addevent-detailscalendar mb-6">
              <Link to="/partner/venue">
                <button className="add-event-showtab">Add Venue</button>
              </Link>
            </div>

            {PartnerVenueEventGet?.length > 0 ? (
              <>
                <div className="grid grid-cols-4 gap-4">
                  {PartnerVenueEventGet?.map((item) => (
                    <div class="transform rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        class="h-48 w-full object-cover object-center"
                        src={item?.media_items?.images?.[0] ?? ""}
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
                            {item?.content}
                          </p>
                        </div>

                        <div className="productaction">
                          <button className="viewproduct">View</button>
                          <Link to={`/edit/partner/venue/${item.id}`}>
                            <button className="editproduct">Edit</button>
                          </Link>
                          <button
                            onClick={() => {
                              DeleteVenue(item?.id);
                            }}
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
                  <h1 class="selectuserchat">No products found</h1>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner_venue_List;
