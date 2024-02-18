import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  AdminShowBlogDeleteAction,
  AdminShowBlogListAction,
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

const Blog_List = () => {
  const dispatch = useDispatch();

  const { AdminShowBlogList } = useSelector(
    (state) => state.AdminShowBlogListReducer
  );

  const { success: deleteSuccess } = useSelector(
    (state) => state.AdminShowBlogDeleteReducer
  );

  useEffect(() => {
    dispatch(AdminShowBlogListAction());
  }, [deleteSuccess]);

  const deleteHandler = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this blog?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(AdminShowBlogDeleteAction(id));
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
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Property List</h1>
          <div className="common-divbg bg-white">
            <div className="addevent-detailscalendar">
              <Link to="/blog-add">
                <button className="add-event-showtab">Add Blog</button>
              </Link>
            </div>

            <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
              {AdminShowBlogList?.map((item) => (
                <div class="mx-3 mt-6  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <a href="#!">
                    <img
                      class="rounded-t-lg propertyimgage"
                      src={item?.image}
                      alt="Skyscrapers"
                    />
                  </a>
                  <div class="p-6">
                    <h5 class="propertydescription">{item?.description}</h5>
                    <p className="priceproprtyshow">{item?.title}</p>
                  </div>
                  <div class="propertyactionbutton border-t-2 border-neutral-100 px-6 py-3">
                    <button className="property-optionadd" type="button">
                      <Link to={`/blog/edit/${item?.id}`}>Edit</Link>
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
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Blog_List;
