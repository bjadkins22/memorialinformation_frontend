import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteimagesgalleryAction,
  GetImagesgalleryAction,
} from "../../Redux/actions/LegacyAction";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import {
  IsVerifiedUserListAction,
  IsVerifiedVedioSeeUserAction,
  PartnerTutorialDeleteAction,
  PartnerTutorialListAction,
} from "../../Redux/actions/PartnerAction";
import ReactPlayer from "react-player";

const AdminPartner_Tutorial_List = () => {
  const dispatch = useDispatch();

  const { PartnerTutorialList } = useSelector(
    (state) => state.PartnerTutorialListReducer
  );

  const { success: deleteGalleryPhoto } = useSelector(
    (state) => state.PartnerTutorialDeleteReducer
  );

  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(PartnerTutorialListAction());
  }, [deleteGalleryPhoto]);

  const Deletetutorial = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this tutorial?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(PartnerTutorialDeleteAction(id));
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

  const [currentlyPlaying, setCurrentlyPlaying] = useState(0);

  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Tutorials</h1>
          <div className="common-divbg bg-white">
            {userData?.user?.account_type == 0 && (
              <div className="addevent-detailscalendar mb-6">
                <Link to="/tutorial">
                  <button className="add-event-showtab">Add Tutorial</button>
                </Link>
              </div>
            )}

            {PartnerTutorialList?.length > 0 ? (
              <>
                <div class="grid grid-cols-2 gap-4">
                  {PartnerTutorialList?.map((item, index) => (
                    <div className="">
                      <div>
                        <ReactPlayer
                          url={item.video}
                          controls={true}
                          className="custom-video-player-class"
                        />
                        <div className="px-9 py-6 bg-yellow-500 rounded-b-lg">
                          <div className="text-white space-y-4">
                            <div className="descrption-vediocontnet">
                              {item.description}
                            </div>
                          </div>
                          <div className="flex justify-between pt-8">
                            <div className="flex flex-col justify-end">
                              <a
                                href="#"
                                className="py-3 px-6 bg-white text-primary-200 paragraph-m rounded-full"
                              >
                                Play
                              </a>
                            </div>
                            {userData?.user?.account_type == 0 && (
                              <>
                                <div className="flex flex-col justify-end">
                                  <Link
                                    // to={`/tutorial/${item.id}`}
                                    className="py-3 px-6 bg-white text-primary-200 paragraph-m rounded-full"
                                  >
                                    Edit
                                  </Link>
                                </div>
                                <div className="flex flex-col justify-end">
                                  <button
                                    onClick={() => Deletetutorial(item.id)}
                                    href="#"
                                    className="py-3 px-6 bg-white text-primary-200 paragraph-m rounded-full outline-none"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="no-founddatameme h-[300px] mt-[100px]">
                  NO TUTORIALS FOUND
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPartner_Tutorial_List;
