import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoaderSpinner from "../Loader/Loader-spinner";
import {
  AdminShowPlanListAction,
  PurchasePlanAction,
} from "../../Redux/actions/paymentAction";
import { Button } from "antd";
import {
  Box,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";
import { FormControl } from "@material-ui/core";
import DialogContentText from "@mui/material/DialogContentText";

const User_Choose_Plan = () => {
  const dispatch = useDispatch();

  const { AdminShowPlanList } = useSelector(
    (state) => state.AdminShowPlanListReducer
  );
  const { userData } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(AdminShowPlanListAction("user"));
  }, []);

  const { PurchasePlan, success, loading } = useSelector(
    (state) => state.PurchasePlanRedcuer
  );

  const { PartnerAddUser } = useSelector(
    (state) => state.PartnerAddUserReducer
  );
  const [planId, setPlanId] = useState("");

  console.log("planId", planId);

  const handleClick = () => {
    dispatch(
      PurchasePlanAction({
        package_id: planId,
        user_id: PartnerAddUser?.user?.id,
      })
    );
  };

  useEffect(() => {
    const url = PurchasePlan?.redirect_url;
    if (url) {
      window.location.href = url;
    }
  }, [success]);

  const [open, setOpen] = useState(false); // State to manage dialog open/close

  const handleOpenDialog = (id) => {
    setOpen(true);
    setPlanId(id);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    handleClick();
  };

  return (
    <div>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="pricing-planchoose">
          <section class="">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {AdminShowPlanList?.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col p-6 mx-auto w-full text-center text-gray-900 rounded-lg border border-gray-100 shadow ${
                      index === 0
                        ? "bg-gray-300"
                        : index === 1
                        ? "bg-yellow-300"
                        : index === 2
                        ? "bg-red-500"
                        : ""
                    }`}
                    line
                  >
                    <h3 class="membership_type">
                      {item?.membership_type ?? "N/A"}
                    </h3>

                    <div class="flex justify-center items-baseline my-8">
                      <span class="userprricongtype">
                        ${item?.price ?? "N/A"}
                      </span>
                    </div>
                    <ul role="list" class="mb-8 space-y-4 text-left">
                      <li class="flex items-center space-x-3">
                        <span className="pricinglistshow">
                          {item.description.split(",").map((line, index) => (
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
                          description
                        </span>
                      </li>
                    </ul>
                    <a
                      onClick={() => handleOpenDialog(item.id)}
                      class="bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white cursor-pointer"
                    >
                      BUY
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div>
            <Dialog
              open={open}
              onClose={handleCloseDialog}
              scroll="paper"
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
              <DialogContent dividers>
                <DialogContentText id="scroll-dialog-description">
                  <div>
                    <h1 className="welcomeinfome">
                      {" "}
                      Memorial Information Subscription Account Terms of Service
                    </h1>
                    <h1 className="memocontnetshow">
                      Welcome to Memorial Information!!! We're excited to have
                      you as a user and appreciate your trust in our platform.
                      Before you start exploring the various user-friendly
                      functions and applications we offer, please take a moment
                      to read through our User Terms of Service. By using our
                      website, user agree to comply with these terms. If user do
                      not agree with any part of the terms, please do not use
                      our services.
                    </h1>
                    <h1 className="memocontnetshow">
                      1. Acceptance of Terms: By accessing or using Memorial
                      Information (MI), user acknowledge that user have read,
                      understood, and agree to be bound by all Terms of Service.
                      These terms may be updated from time to time, and it is
                      your responsibility to review them periodically. 2. User
                      Accounts: a. You must be at least 18 years old to create
                      an account. b. You are responsible for maintaining the
                      confidentiality of your account and password. MI does not
                      share, publish, sell, or otherwise distribute your
                      password or any other person or financial information. c.
                      You agree to provide accurate and up-to-date information
                      during the registration process especially for the Owner
                      and/or the Heirs. Information provide within your profile
                      is deemed to be true and accurate and information,
                      documents, statements, calculations, pictures, materials,
                      media, or any other material information user upload
                      belongs to user, the owner or heirs of the account and
                      does not, knowingly or unknowingly, misrepresent or
                      defraud anyone or entity. MI bears no responsibility or
                      liability for the accuracy or accuracy of ownership of any
                      material, media, documents, or anything associate with
                      your account. MI only provides the platform for users to
                      use and does not bear any responsibility for the
                      protection of your data or material if user have provided
                      anyone other than your access to your account via
                      password, security question(s), 2 factor authentication,
                      or any other measure to access your account. 3. User
                      Content: You retain ownership of the content user submit
                      or upload to the platform. b. By posting content for
                      public display, user grant MI a non-exclusive,
                      transferable, sub-licensable, royalty-free, worldwide
                      license to use, display, reproduce, and distribute your
                      content. MI will not share, publish, sell, or otherwise
                      distribute your personal documents, financial information,
                      will, or any other secure material user upload to your
                      account. MI staff, managers, executive, nor developers can
                      NOT access, view, modify, print, or duplicate any of your
                      confidential material that your password protect within
                      your account for the entire duration of your active
                      account. Once inactive, the material in your account will
                      be permanently DELETED without being viewed, documented,
                      copied, printed, duplicated, or otherwise distributed to
                      anyone for any reason whatsoever. 4. Prohibited
                      Activities: a. You may not engage in any illegal or
                      unauthorized use of the platform. b. You may not violate
                      any laws in your jurisdiction while using our services. c.
                      You may not attempt to gain unauthorized access to our
                      systems or anyone else’s account at anytime. 5.
                      Intellectual Property a. MI and its logo are trademarks
                      owned by MI. You may not use these trademarks without our
                      prior written consent. b. All content on our website,
                      including text, graphics, and logos, is the property of MI
                      and is protected by copyright laws. 6. User-Friendly
                      Functions and Applications: a. MI Legacy Builder provides
                      users access to the full Owners & Heirs Studio with a many
                      of the main functions of the MI platform with limited
                      Friends & Family page as presented at MI website or MI
                      brochure. b. The Family Transition provides users with
                      full access to the Owners & Heirs Studio and the full
                      Friends & Family Studio and includes access to MI Partners
                      Concierge and MI Family Coordinator support along with
                      access to MI Vendors. c. Family Legacy Plus offers full
                      access to the Owners & Heirs Studio as well as full access
                      to the Friends & Family Studio along with access to MI
                      Vendors along with access to MI Property Disposition
                      Marketplaces and an MI Property Disposition Specialist
                      (MIPDS) who will take pictures of user’s property that
                      heirs are authorized to sale and find potential purchasers
                      for the user’s property. Items to be sold must be readily
                      visible, free of obstructions, in working and presentable
                      condition not considered rubbish or overly tarnished for
                      MIPDS to take property pictures without physically moving,
                      fixing, altering, modifying, or otherwise adjusting item.
                      d. Current Family Legacy Plus plan is limited to 50 items
                      valued at least at $100 per item. e. The Full MI Estate
                      Sale Package including obtaining pictures, 3 Estate Sale
                      staging or 3 MI Garage Sales, property disposition
                      management, property negotiations, and payment collection
                      can be provided to users for 25% of gross sales with a
                      minimum total property value of $10,000. f. MI does NOT
                      guarantee the sale of any, nor all of user’s items but
                      will make every reasonable effort to market, negotiate,
                      and dispose of user’s property. g. In the event, user
                      and/or heirs elect to donate some or all property MI
                      Family Give-Aways will assist with identifying MI Vendors
                      for disposing of property. Any and all fees associated
                      with physically moving and/or organizing, loading,
                      picking-up, and disposing will be the sole responsibility
                      of the user and/or heirs. h. Deeded property or physical
                      homes, timeshares, investment properties, rental property
                      or other portfolio investments are not covered under the
                      Family Legacy Plus but can be serviced by our MI Real
                      Estate Disposition team and must be valued in excess of
                      $50,000. i. MI do not guarantee customers satisfaction,
                      warrantees, guarantees, or accuracy for the services or
                      products provided by Vendors as MI Vendors are independent
                      of MI are are only suggested vendors. Users are not
                      obligated to purchase any or all of the MI Vendors
                      products or services. Users are welcome to utilize their
                      own vendors for services or products associated with your
                      account. We strive to provide a positive user experience,
                      but we do not guarantee the availability of specific
                      features or functions. 7. Privacy Policy a. Our Privacy
                      Policy explains how we collect, use, and disclose
                      information. By using our services, user/heir(s) has
                      reviewed the MI Privacy Policy and agrees to the MI
                      Privacy Policy. 8. Termination of Services a. We reserve
                      the right to terminate or suspend your account at any time
                      for any reason without notice. 9. Subscription Service
                      Subscription Agreement: a. The Service is offered on an
                      annual subscription basis with an annual fee of 10% of
                      your selected service level. By subscribing to the
                      Service, user agree to pay the annual subscription fee as
                      specified by the MI. b. The subscription period is for one
                      year from the date of initial subscription, unless
                      otherwise stated. c. The Family Legacy Plus plan waives
                      the 1st annual subscription fee, therefore, the 1st
                      annually subscription for this option, and only this
                      option, will begin 24 months from the date of initial
                      subscription. d. Your subscription will automatically
                      renew for successive one-year periods, unless user or
                      heirs cancel it before the renewal date. e. You agree to
                      receive payment reminder, marketing material, upgrade
                      notifications, and service notifications via e-mail and
                      text for Users, Heirs, User’s Friends, and User’s Family
                      unless recipients opt-out. f. Payment methods and details
                      will be provided during the subscription process. Failure
                      to pay may result in the suspension or termination of your
                      access to the Service. g. You may cancel your subscription
                      at any time. However, no refunds will be provided for the
                      remaining subscription period. h. You have a 3-day refund
                      period from the date of initial subscription. If user
                      decide to cancel within this period, user will receive a
                      full refund. Cancellations outside the 3-day refund period
                      will not be eligible for a refund for the current
                      subscription period. To cancel, follow the cancellation
                      process specified by the MI. Subscription cancelation
                      request will only be honored when sent to
                      mailto:cancelsubscription@memorialinformation.com within
                      the appropriate allowable timeline and with the correctly
                      spelled first and last name of the Owner of the account
                      and birthday and last 4 digits of the card number used to
                      pay for the user account. 10. MI reserves the right to
                      modify, suspend, or discontinue the Service, or any part
                      of it, at any time with or without notice. 11. User
                      Responsibilities: Users are responsible for maintaining
                      the confidentiality of your account information. User
                      agrees to notify the Company promptly of any unauthorized
                      use or access to User’s account. 12. Intellectual
                      Property: All content and materials provided as part of
                      the Service are the property of the MI and are protected
                      by intellectual property laws. 13. Disclaimer of Warranty:
                      The Service is provided "as is" without any warranty of
                      any kind. MI disclaims all warranties, express or implied.
                      14. Limitation of Liability: MI shall not be liable for
                      any indirect, incidental, special, consequential, or
                      punitive damages, or any loss of profits or revenues.
                      Limitation of Liability: Memorial Information is not
                      liable for any direct, indirect, incidental, special, or
                      consequential damages arising out of or in any way
                      connected with the use of our services. Contact
                      Information: If user have any questions or concerns about
                      these Terms of Service, please contact us at
                      mailto:services@memorialinformation.com. Thank you for
                      using Memorial Information. We hope you enjoy our
                      user-friendly functions and applications
                    </h1>
                  </div>
                </DialogContentText>
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={shouldClose}
                      onChange={handleCloseDialog}
                    />
                  }
                  label="Close on Checkbox Check"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  );
};

export default User_Choose_Plan;
