import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  AllVenderListShowToAdminAction,
  ContractAcceptRejectAction,
} from "../../Redux/actions/VenderAction";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import moment from "moment";
import {
  GetHiredPersonListAction,
  GetAllPersonListAction,
} from "../../Redux/actions/PartnerAction";
import { UserGetHiredPatnerAction } from "../../Redux/actions/VenderAction";
import { Link } from "react-router-dom";
import LoaderSpinner from "../Loader/Loader-spinner";

const VendorContractList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.authReducer);
  const { UserGetHiredPatner } = useSelector(
    (state) => state.UserGetHiredPatnerReducer
  );

  const {
    venderAcceptReject,
    success: AccRejSucc,
    error: AccRejErr,
  } = useSelector((state) => state.VenderUpdateProdcutReducer);
  console.log("venderAcceptReject", venderAcceptReject);
  const [rerender, setrerender] = useState(false);
  const handleAcceptRejectAction = (id, status) => {
    const formdata = new FormData();
    formdata.append("status", status);
    dispatch(ContractAcceptRejectAction(id, formdata));
    setrerender(true);
  };
  useEffect(() => {
    if (userData?.user?.account_type == 3) {
      dispatch(UserGetHiredPatnerAction());
    }
  }, [userData, AccRejSucc]);

  useEffect(() => {
    if (AccRejSucc && rerender) {
      swal({
        title: "Successful",
        text: venderAcceptReject?.status,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 3000,
      });
      setrerender(false);
    }
    if (AccRejErr && rerender) {
      swal({
        title: "Error",
        text: "Something went wrong",
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setrerender(false);
    }
  }, [AccRejErr, AccRejSucc, rerender]);
  console.log("UserGetHiredPatner", UserGetHiredPatner);
  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Contract List</h1>
          <div className="common-divbg bg-white">
            <div className="Topallpage AllPageHight Custompage">
              {/* <div className="ContentDiv Categoriesdiv1">
                  
                  <MDBDataTable
                    style={{}}
                    responsive
                    striped
                    bordered
                    small
                    data={data}
                  />
                </div> */}

              <div
                class="grid grid-cols-3   gap-4"
                style={{ fontFamily: "Montserrat" }}
              >
                {UserGetHiredPatner?.map((item) => (
                  <div class="bg-white border border-white shadow-lg  rounded-3xl p-4">
                    <div class="flex-none sm:flex">
                      <div class="flex-auto sm:ml-5 justify-evenly">
                        <div class="flex items-center justify-between sm:mt-2">
                          <div class="flex items-center">
                            <div class="flex flex-col">
                              <div class="partner-username flex justify-content-between">
                                {item?.title}
                                <span class="mr-3 border-r border-gray-200  max-h-0">
                                  ${item.project_price}
                                </span>
                              </div>
                              {item?.hirer?.first_name} {item?.hirer?.last_name}
                              <div class="flex-auto text-gray-500 my-1">
                                Contract :{" "}
                                <span class="mr-3 ">{item?.status}</span>
                                <Link to={`/partner/chat/${item?.hirer?.id}`}>
                                  <button class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                                    Chat
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="block">
                          <div>
                            Start Date:{" "}
                            {moment(item?.contract_start_date).format("LL")}
                          </div>
                          <div>
                            End Date:{" "}
                            {moment(item?.contract_end_date).format("LL")}
                          </div>
                        </div>
                        <div class="flex pt-2  text-sm text-gray-500">
                          <div class="flex-1 inline-flex items-center">
                            <p class="">{item?.project_information}</p>
                          </div>
                        </div>
                        <div>
                          {item?.status == "PENDING" ? (
                            <>
                              <button
                                onClick={() =>
                                  handleAcceptRejectAction(item?.id, "ACCEPTED")
                                }
                                class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() =>
                                  handleAcceptRejectAction(item?.id, "REJECTED")
                                }
                                class="flex-no-shrink bg-gray-400 hover:bg-gray-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-gray-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                              >
                                Reject
                              </button>
                            </>
                          ) : item?.status == "ACCEPTED" ? (
                            <button class="flex-no-shrink bg-gray-400 hover:bg-gray-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-gray-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                              Accepted
                            </button>
                          ) : item?.status == "REJECTED" ? (
                            <button class="flex-no-shrink bg-gray-400 hover:bg-gray-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-gray-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                              Rejected
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorContractList;
