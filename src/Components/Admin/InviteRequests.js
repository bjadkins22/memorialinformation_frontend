import React, { useEffect, useState } from "react";
import {
  AllInviteMemberListAction,
  InviteUserRequestAcceptAction,
} from "../../Redux/actions/UserAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { IsVerifiedUserListAction } from "../../Redux/actions/PartnerAction";

const InviteRequests = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.authReducer);

  const { AllInviteMemberList } = useSelector(
    (state) => state.AllInviteMemberListReducer
  );
  const {
    success: successinviteaccept,
    error: errorinviteaccept,
    message: inviteMessage,
  } = useSelector((state) => state.InviteUserRequestAcceptReducer);

  useEffect(() => {
    dispatch(AllInviteMemberListAction());
  }, [successinviteaccept]);

  const handleAccpetRequest = (userid, statustype) => {
    const fromData = new FormData();

    fromData.append("invitee_accepted", statustype);
    dispatch(InviteUserRequestAcceptAction(userid, fromData, statustype));

    setRerender(true);
  };

  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (successinviteaccept && rerender) {
      swal({
        title: " ",
        text: inviteMessage,
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
    }
    if (errorinviteaccept && rerender) {
      swal({
        title: "Error",
        text: errorinviteaccept,
        className: "errorAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [successinviteaccept, errorinviteaccept, rerender]);

  const deleteHandler = (userid, statustype) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to Reject Request?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const fromData = new FormData();
        fromData.append("invitee_accepted", statustype);
        dispatch(InviteUserRequestAcceptAction(userid, fromData, statustype));
        swal({
          title: "",
          text: "Successfully Rejected!",
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
      {" "}
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Invite Requests</h1>
          <div className="common-divbg bg-white">
            <div class="main-notifaication">
              <div class="main-notifaicationshow p-4  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flow-root">
                  <ul
                    role="list"
                    class="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    {AllInviteMemberList?.length > 0 ? (
                      <>
                        {AllInviteMemberList?.map((item) => (
                          <>
                            <li class="py-3 sm:py-4">
                              <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                  <img
                                    class="w-8 h-8 rounded-full"
                                    src="/img/noimage.png"
                                    alt="Bonnie image"
                                  />
                                </div>
                                <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {item?.inviter_first_name}{" "}
                                    {item?.inviter_last_name}
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {item?.invitee_email}
                                  </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold ">
                                  <button
                                    onClick={() =>
                                      handleAccpetRequest(item.id, true)
                                    }
                                    type="button"
                                    class="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                  >
                                    Accept
                                  </button>
                                  <button
                                    onClick={() =>
                                      deleteHandler(item.id, false)
                                    }
                                    type="button"
                                    class="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2  text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                  >
                                    Reject
                                  </button>
                                </div>
                              </div>
                              <p className="requestuser-contnet capitalize">
                                {item?.inviter_first_name}
                                {item?.inviter_last_name} has sent you a request
                                to become his {item?.invitee_role?.role} for his
                                memorial page
                              </p>
                            </li>
                          </>
                        ))}
                      </>
                    ) : (
                      <div className="noNotifacinapnl">No Notifications</div>
                    )}
                    <></>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteRequests;
