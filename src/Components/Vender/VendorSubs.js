import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  AdminShowPlanListAction,
  getVendorSubsAction,
  VendorBuyPlanAction,
} from "../../Redux/actions/paymentAction";
import swal from "sweetalert";

const Subscription_List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { GetVendorSubs } = useSelector((state) => state.getVendorSubsReducer);

  // useEffect(() => {
  //   dispatch(getVendorSubsAction());
  // }, []);
  const { AdminCreatePlan, success: paymentSucc } = useSelector(
    (state) => state.VendorBuyPlanReducer
  );
  const { AdminShowPlanList } = useSelector(
    (state) => state.AdminShowPlanListReducer
  );

  useEffect(() => {
    dispatch(AdminShowPlanListAction("vendor"));
  }, []);

  const buySubscription = (id) => {
    const formdata = new FormData();
    formdata.append("subscription_id", id);
    dispatch(VendorBuyPlanAction(formdata));
  };
  useEffect(() => {
    const url = AdminCreatePlan?.redirect_url;
    if (url) {
      window.location.href = url;
    }
  }, [paymentSucc]);

  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Plan</h1>
          <div className="common-divbg bg-white">
            <section class="bg-white dark:bg-gray-900">
              <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                  {AdminShowPlanList?.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col p-6 mx-auto w-full text-center text-gray-900 rounded-lg border border-gray-100 shadow ${
                        index === 0
                          ? "bg-gray-300" // Apply red background to the first card
                          : index === 1
                          ? "bg-yellow-300" // Apply yellow background to the second card
                          : index === 2
                          ? "bg-red-500" // Apply blue background to the third card
                          : "" // Default background for the rest
                      }`}
                    >
                      <h3 class="membership_type">
                        {item?.membership_type ?? "N/A"}
                      </h3>

                      <div class="flex justify-center items-baseline my-8">
                        <span class="userprricongtype">
                          ${item?.price ?? "N/A"}
                        </span>
                      </div>
                      <div className="flex gap-4 items-center">
                        <label className="">
                          Product Allowed
                        </label>
                        <p class="productdescription mb-2 text-base ">
                          {item?.number_of_hit ? item?.number_of_hit : null}
                        </p>
                      </div>
                      <ul role="list" class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                          <span className="pricinglistshow">
                            {item?.description
                              ?.split(",")
                              .map((line, index) => (
                                <div
                                  key={index}
                                  class="flex items-center space-x-3"
                                >
                                  <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                  <span>{line.trim()}</span>
                                </div>
                              ))}
                          </span>
                        </li>
                      </ul>
                      <a
                        onClick={() => {
                          buySubscription(item.id);
                        }}
                        class="bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white cursor-pointer"
                      >
                        Buy now
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription_List;
