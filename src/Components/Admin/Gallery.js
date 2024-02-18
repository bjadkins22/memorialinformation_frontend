import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteimagesgalleryAction,
  GetImagesgalleryAction,
} from "../../Redux/actions/LegacyAction";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Gallery = () => {
  const dispatch = useDispatch();

  const { GetImagesgallery } = useSelector(
    (state) => state.GetImagesgalleryReducer
  );

  const { success: deleteGalleryPhoto } = useSelector(
    (state) => state.DeleteimagesgalleryReducer
  );

  useEffect(() => {
    dispatch(GetImagesgalleryAction());
  }, [deleteGalleryPhoto]);

  const DeleteImage = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this image?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(DeleteimagesgalleryAction(id));
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
          <h1 className="heading-top">Gallery</h1>
          <div className="common-divbg bg-white">
            <div className="addevent-detailscalendar mb-6">
              <Link to="/add-image-gallery">
                <button className="add-event-showtab">Add Images</button>
              </Link>
            </div>

            {GetImagesgallery?.length > 0 ? (
              <>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {GetImagesgallery?.map((item) => (
                    <div className="gallery-imageshowgrid">
                      <img
                        class="imagegalleryshow max-w-full rounded-lg"
                        src={item?.image}
                        alt=""
                      />

                      <div className="gallerymenuitem">
                        {/* <svg
                          onClick={handleClick}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          class="w-6 h-6 ellipsis-iconshow"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          />
                        </svg> */}
                        {/* <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={openpopup}
                          onClose={handleClosepopup}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem
                            onClick={() => {
                              handleClosepopup();
                              DeleteImage(item?.id);
                            }}
                          > */}
                        <div className="flex items-center gap-2">
                          <i
                            onClick={() => DeleteImage(item?.id)}
                            class="fa fa-trash-o"
                          ></i>
                        </div>
                        {/* </MenuItem>
                        </Menu> */}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="no-founddatameme h-[300px] mt-[100px]">
                  NO IMAGES FOUND
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
