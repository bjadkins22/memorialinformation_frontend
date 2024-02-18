import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import {
  IsVerifiedUserListAction,
  IsVerifiedVedioSeeUserAction,
  MyVideoDeleteAction,
  MyVideoGetAllListAction,
  PartnerTutorialDeleteAction,
} from "../../Redux/actions/PartnerAction";
import ReactPlayer from "react-player";

const My_videosList = () => {
  const dispatch = useDispatch();

  const playerRef = useRef(null);

  const { MyVideoGetAllList } = useSelector(
    (state) => state.MyVideoGetAllListReducer
  );

  const { success: deleteGalleryPhoto } = useSelector(
    (state) => state.MyVideoDeleteReducer
  );

  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(MyVideoGetAllListAction());
  }, [deleteGalleryPhoto]);

  const Deletetutorial = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this Video?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(MyVideoDeleteAction(id));
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
          <h1 className="heading-top">All Video</h1>
          <div className="common-divbg bg-white">
            <div className="addevent-detailscalendar mb-6">
              <Link to="/myvideo">
                <button className="add-event-showtab">All Video</button>
              </Link>
            </div>

            {MyVideoGetAllList?.length > 0 ? (
              <>
                <div class="grid grid-cols-2 gap-4">
                  {MyVideoGetAllList?.map((item, index) => (
                    <div key={item.id} className="">
                      <div>
                        <ReactPlayer
                          controls
                          url={item.my_video}
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
                              {/* <a
                                href="#"
                                className="py-3 px-6 bg-white text-primary-200 paragraph-m rounded-full"
                                onClick={() => playVideo(index)}
                              >
                                Play
                              </a> */}
                            </div>
                            <>
                              <div className="flex flex-col justify-end">
                                <Link
                                  to={`/myvideo/${item.id}`}
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
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* {isAllVideosPlayed() && (
                    <button className="py-3 px-6 bg-green-500 text-white paragraph-m rounded-full">
                      Done
                    </button>
                  )} */}
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

export default My_videosList;
