import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  GetPropertyDataByIDAction,
  ListGetSalePropertyPostAction,
  SalePropertyDeleteAction,
} from "../../Redux/actions/LegacyAction";
import swal from "sweetalert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Sale_Property_List = () => {
  const dispatch = useDispatch();

  const { ListGetSalePropertyPost } = useSelector(
    (state) => state.ListGetSalePropertyPostReducer
  );

  const { success: deleteSuccess } = useSelector(
    (state) => state.SalePropertyDeleteReducer
  );

  useEffect(() => {
    dispatch(ListGetSalePropertyPostAction());
  }, [deleteSuccess]);

  const { propertyId } = useParams();

  const { GetPropertyDataByID } = useSelector(
    (state) => state.GetPropertyDataByIDReducer
  );

  const deleteHandler = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this property?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(SalePropertyDeleteAction(id));
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (itemId) => {
    dispatch(GetPropertyDataByIDAction(itemId));

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Property List</h1>
          <div className="common-divbg bg-white">
            <div className="addevent-detailscalendar">
              <Link to="/sale-property">
                <button className="add-event-showtab">Add Property</button>
              </Link>
            </div>
            {ListGetSalePropertyPost?.length > 0 ? (
              <>
                <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
                  {ListGetSalePropertyPost?.map((item) => (
                    <div class="mx-3 mt-6  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                      <a href="#!">
                        <img
                          class="rounded-t-lg propertyimgage"
                          src={item?.image ?? "img/noimageshow.jpg"}
                          alt="Skyscrapers"
                        />
                      </a>
                      <div class="p-6">
                        <p className="priceproprtyshow">{item?.price}</p>
                        <h5 class="propertydescription">{item?.description}</h5>
                        <p class="">
                          <Link
                            className="propertysellerlink"
                            to={item?.seller_platform}
                          >
                            {item?.seller_platform}
                          </Link>
                        </p>
                      </div>
                      <div class="propertyactionbutton border-t-2 border-neutral-100 px-6 py-3">
                        <button
                          onClick={() => handleClickOpen(item.id)}
                          className="property-optionadd"
                          type="button"
                        >
                          View more
                        </button>
                        <button className="property-optionadd" type="button">
                          <Link to={`/sale-property/${item?.id}`}>Edit</Link>
                        </button>
                        <button
                          onClick={() => deleteHandler(item.id)}
                          className="property-optionadd"
                          type="button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="no-founddatameme h-[300px]">NO DATA FOUND</div>
            )}
          </div>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title"></DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div className="details-pageleg">
                  <div className="lastupdated-date">
                    <h6 className="team-name legacy-det">Event Details</h6>
                  </div>

                  <div>
                    <div class="my-6">
                      <h1 class="plan-ahed capitalize break-words">Title</h1>
                      <p class="decisions-contnet capitalize break-words	">
                        {GetPropertyDataByID?.title}
                      </p>
                    </div>
                    <div class="my-6">
                      <h1 class="plan-ahed capitalize break-words">
                        Property Price
                      </h1>
                      <p class="decisions-contnet capitalize break-words	">
                        {GetPropertyDataByID?.price}
                      </p>
                    </div>

                    <div class="my-6">
                      <h1 class="plan-ahed capitalize break-words">
                        Description
                      </h1>
                      <p class="decisions-contnet capitalize break-words	">
                        {GetPropertyDataByID?.description}
                      </p>
                    </div>
                    <div class="my-6">
                      <h1 class="plan-ahed capitalize break-words">platform</h1>
                      <p class="decisions-contnet capitalize break-words	">
                        {GetPropertyDataByID?.seller_platform}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Sale_Property_List;
