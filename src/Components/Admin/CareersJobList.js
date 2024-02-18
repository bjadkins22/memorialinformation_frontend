import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  AdminDeleteJobAction,
  AdminGetAllJobAction,
  AdminGetByIDJobAction,
} from "../../Redux/actions/SuperAdminAction";

const CareersJobList = () => {
  const dispatch = useDispatch();

  const { AdminGetAllJob } = useSelector(
    (state) => state.AdminGetAllJobReducer
  );

  const { success: deleteSuccess } = useSelector(
    (state) => state.AdminDeleteJobReducer
  );

  useEffect(() => {
    dispatch(AdminGetAllJobAction());
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
        dispatch(AdminDeleteJobAction(id));
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
          <h1 className="heading-top">Job List</h1>
          <div className="common-divbg bg-white">
            <div className="addevent-detailscalendar">
              <Link to="/alljob/add">
                <button className="add-event-showtab">Add Job</button>
              </Link>
            </div>

            <div class="grid grid-cols-4 gap-6 flex justify-center mt=3">
              {AdminGetAllJob?.map((item) => (
                <div className="jobtitleadd ">
                  <div className="text-center">
                    <i class="fa fa-briefcase jobiconshow"></i>
                    <h1 className="developeradd uppercase">{item?.title}</h1>
                  </div>

                  <div>
                    <h2 className="yearnaccount">
                      ({item?.salary_range}) {item?.location}
                    </h2>
                  </div>

                  <div className="">
                    <Link to={`/alljob/edit/${item?.id}/`}>
                      <button className="applaybuttonshow mb-2">Edit</button>
                    </Link>
                    <div>
                      <button
                        onClick={() => deleteHandler(item?.id)}
                        className="applaybuttonshow mb-2"
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
    </div>
  );
};

export default CareersJobList;
