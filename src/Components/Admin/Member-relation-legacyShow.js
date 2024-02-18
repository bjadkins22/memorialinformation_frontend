import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  EnterPasswordVerficationAction,
  GetPermissionListAction,
  LagacyCodeAddAction,
  LegacyDataShowMemberAction,
  LegacyListShowAction,
  OtpVerficationAction,
} from "../../Redux/actions/LegacyAction";

import Slide from "@mui/material/Slide";
import {
  AllRoleGetAction,
  InviteUserAction,
} from "../../Redux/actions/UserAction";
import { validations } from "../../utils";
import LoaderSpinner from "../Loader/Loader-spinner";
import OtpInput from "react-otp-input";
import { Frontend_URL } from "../../environment";
import moment from "moment";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Member_relation_legacyShow() {
  const dispatch = useDispatch();

  const { legacyIdGet, ownerId } = useParams();

  const { userData } = useSelector((state) => state.authReducer);

  const { LegacyDataShowMember: LegacyListShow, error } = useSelector(
    (state) => state.LegacyDataShowMemberReducer
  );

  useEffect(() => {
    dispatch(LegacyDataShowMemberAction(legacyIdGet));
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [addCode, setAddcode] = useState("");
  const [CodeAddRender, setCodeAddRender] = useState(false);

  const [legacydata, setLegacyData] = useState([]);

  useEffect(() => {
    if (LegacyListShow) {
      setLegacyData(LegacyListShow);
    }
  }, [LegacyListShow]);

  // codeeeeeeeeeeeeee

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const {
    success: OtpSuccess,
    error: errorOtp,
    message: OtpMessge,
    loading: OtpLoading,
  } = useSelector((state) => state.OtpVerficationReducer);

  const [otp, setOtp] = useState("");

  const OtpVerficationSubmit = () => {
    const formData = new FormData();
    formData.append("otp_code", otp);
    dispatch(OtpVerficationAction(legacyIdGet, formData));
    setotpRender(true);
  };

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const renderInput = (inputProps) => <input {...inputProps} />;

  const [passwordVerfication, setPasswordVerfication] = useState();

  const PasswordVerficationSubmit = () => {
    const formData = new FormData();
    formData.append("code", passwordVerfication);
    dispatch(EnterPasswordVerficationAction(legacyIdGet, formData));
    setCodeAddRender(true);
  };

  const {
    success: passwordSuccess,
    error: errorpassword,
    message: passwordMessge,
    loading: passwordLoading,
  } = useSelector((state) => state.EnterPasswordVerficationReducer);

  useEffect(() => {
    if (passwordSuccess && CodeAddRender) {
      swal({
        title: " ",
        text: passwordMessge,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });

      setCodeAddRender(false);
      handleNext();
    }
    if (errorpassword && CodeAddRender) {
      swal({
        title: "Error",
        text: errorpassword.message,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setCodeAddRender(false);
    }
  }, [passwordSuccess, errorpassword, CodeAddRender]);

  const [otpRender, setotpRender] = useState(false);

  useEffect(() => {
    if (OtpSuccess && otpRender) {
      swal({
        title: " ",
        text: OtpMessge,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 1000,
      }).then(() => {
        // Reload the page on success
        window.location.reload();
        NavigationPreloadManager("/legacy");
      });

      setTimeout(() => {
        setLoading(false);
      }, 2000);

      setLoading(true);
      setotpRender(false);
      handleNext();
    }
    if (errorOtp && otpRender) {
      swal({
        title: "Error",
        text: errorOtp.message,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setotpRender(false);
    }
  }, [OtpSuccess, errorOtp, otpRender]);

  const { GetPermissionList } = useSelector(
    (state) => state.GetPermissionListReducer
  );

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const { LegacyListShow: loginUserLegacyPage } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  useEffect(() => {
    dispatch(GetPermissionListAction(ownerId, legacyIdGet));
  }, []);
  console.log("legacydata", loginUserLegacyPage);
  return (
    <>
      {loading || passwordLoading ? (
        <LoaderSpinner />
      ) : (
        <div>
          <div className="">
            <div className="main-page-div bg-green-200">
              <h1 className="heading-top">Legacy</h1>
              <div className="bg-white">
                <div className="Topallpage AllPageHight Custompage">
                  {error ? (
                    <>
                      <div className="">
                        {currentStep === 1 ? (
                          <>
                            <div>
                              <div
                                class="bg-no-repeat bg-cover bg-center relative"
                                style={{
                                  backgroundImage: `url(${Frontend_URL}img/beautiful-church-.jpg)`,
                                }}
                              >
                                <div class="absolute bg-gradient-to-b opacity-75 inset-0 z-0"></div>
                                <div class=" sm:flex sm:flex-row mx-0 justify-center p-4">
                                  <div class="flex justify-center self-center  z-10">
                                    <div class="p-12 bg-white mx-auto rounded-2xl w-full">
                                      <div class="mb-4">
                                        <h3 class="password-heading-contnet">
                                          Enter A password
                                        </h3>
                                      </div>
                                      <div class="space-y-5">
                                        <div class="space-y-2">
                                          <label class="password-labelenter text-sm font-medium text-gray-700 tracking-wide">
                                            Password
                                          </label>
                                          <input
                                            value={passwordVerfication}
                                            onChange={(e) => {
                                              setPasswordVerfication(
                                                e.target.value
                                              );
                                            }}
                                            class="password-auth-input w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type=""
                                            placeholder="Enter your password"
                                          />
                                        </div>
                                        <div class="flex items-center justify-between"></div>
                                        <div>
                                          <button
                                            onClick={PasswordVerficationSubmit}
                                            type="submit"
                                            class="password-submitclickbtn w-full flex justify-center  hover:bg-[#3f291d] text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                          >
                                            Get a Otp
                                          </button>
                                        </div>
                                      </div>
                                      <div class="pt-2 text-center text-gray-400 text-xs">
                                        <span>
                                          Copyright © 2022-20223{" "}
                                          <a
                                            href="https://codepen.io/uidesignhub"
                                            rel=""
                                            target="_blank"
                                            title="Ajimon"
                                            class="text-green hover:text-green-500 "
                                          ></a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                                    <div class="self-start hidden lg:flex flex-col  text-white">
                                      <img src="" class="mb-3" />
                                      <h1 class="mb-3 font-bold text-5xl">
                                        Hi ? Welcome Back Aji{" "}
                                      </h1>
                                      <p class="pr-3">
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphic, print, and
                                        publishing industries for previewing
                                        layouts and visual mockups
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <div
                                class="bg-no-repeat bg-cover bg-center relative"
                                style={{
                                  backgroundImage: `url(${Frontend_URL}img/beautiful-church-.jpg)`,
                                }}
                              >
                                <div class="absolute bg-gradient-to-b opacity-75 inset-0 z-0"></div>
                                <div class=" sm:flex sm:flex-row mx-0 justify-center p-4">
                                  <div class="flex justify-center self-center  z-10">
                                    <div class="p-12 bg-white mx-auto rounded-2xl w-full">
                                      <div class="mb-4">
                                        <h3 class="password-heading-contnet">
                                          Enter A OTP
                                        </h3>
                                      </div>
                                      <div class="space-y-5">
                                        <div class="space-y-2">
                                          <label class="password-labelenter text-sm font-medium text-gray-700 tracking-wide">
                                            Otp
                                          </label>
                                          <div className="codenumber">
                                            <OtpInput
                                              className="get-otpfunc"
                                              value={otp}
                                              onChange={handleOtpChange}
                                              numInputs={4}
                                              separator={<span>-</span>}
                                              isInputNum
                                              renderInput={renderInput} // Pass the renderInput function
                                            />
                                          </div>
                                        </div>
                                        <div class="flex items-center justify-between"></div>
                                        <div>
                                          <button
                                            onClick={OtpVerficationSubmit}
                                            type="submit"
                                            class="password-submitclickbtn w-full flex justify-center  hover:bg-[#3f291d] text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                          >
                                            Submit
                                          </button>
                                        </div>
                                      </div>
                                      <div class="pt-2 text-center text-gray-400 text-xs">
                                        <span>
                                          Copyright © 2022-20223{" "}
                                          <a
                                            href="https://codepen.io/uidesignhub"
                                            rel=""
                                            target="_blank"
                                            title="Ajimon"
                                            class="text-green hover:text-green-500 "
                                          ></a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                                    <div class="self-start hidden lg:flex flex-col  text-white">
                                      <img src="" class="mb-3" />
                                      <h1 class="mb-3 font-bold text-5xl">
                                        Hi ? Welcome Back Aji{" "}
                                      </h1>
                                      <p class="pr-3">
                                        Lorem ipsum is placeholder text commonly
                                        used in the graphic, print, and
                                        publishing industries for previewing
                                        layouts and visual mockups
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="">
                        <div class="p-8">
                          <div className="">
                            {" "}
                            <h4 class="team-name legacy-det text-4xl font-bold text-gray-800 tracking-widest uppercase text-center flex justify-center gap-6">
                              <h4 class="team-name legacy-det text-4xl font-bold text-gray-800 tracking-widest uppercase text-center flex justify-center gap-6">
                                <h1 class="diffrence-contnet">
                                  {legacydata?.first_name + "'s"} Lagacy Details
                                </h1>

                                <div class="flex items-center">
                                  <div class="edit-button-inputt">
                                    {GetPermissionList?.some(
                                      (permission) =>
                                        permission.permission_name ===
                                        "Can change legacy page"
                                    ) && (
                                      <Link
                                        to={`/edit-legacy/${legacydata?.id}`}
                                      >
                                        <button className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                          </svg>
                                        </button>
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </h4>

                              {/* <h1 class="diffrence-contnet">
                                {" "}
                                {legacydata?.first_name + "'s"} Lagacy Details{" "}
                              </h1> */}
                            </h4>
                            <p class="merorialtextinfo today-infoo mt-2 text-center">
                              Here are some of the Lagacy Details
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-6 mt-12">
                            <div className="card-legacydetailsshow">
                              <div className="details-pageleg">
                                <div className="lastupdated-date">
                                  <h6 className="team-name legacy-det">
                                    legacy accounts{" "}
                                  </h6>
                                  <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                    Updated on:{" "}
                                    {legacydata?.legacy_accounts?.[0]
                                      ?.updated_at
                                      ? moment(
                                          legacydata?.legacy_accounts?.[0]
                                            ?.updated_at
                                        ).format("MMMM Do YYYY")
                                      : "N/A"}
                                  </p>
                                </div>

                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      name
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_accounts?.[0]?.name ??
                                        "N/A"}
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_accounts?.[0]
                                        ?.description ?? "N/A"}
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet break-words">
                                      <Link
                                        to={
                                          legacydata?.legacy_accounts?.[0]
                                            ?.document
                                        }
                                        target={
                                          legacydata?.legacy_accounts?.[0]
                                            ?.document
                                        }
                                      >
                                        {legacydata?.legacy_accounts?.[0]
                                          ?.document ?? "N/A"}
                                      </Link>
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      Hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_accounts?.[0]
                                        ?.hint_video ?? "N/A"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* mappppppppppppp */}
                            <div className="card-legacydetailsshow">
                              <>
                                <div className="details-pageleg">
                                  <div className="lastupdated-date">
                                    <h6 className="team-name legacy-det">
                                      Legacy Debt
                                    </h6>
                                    <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                      Updated on:{" "}
                                      {legacydata?.legacy_debt?.[0]?.updated_at
                                        ? moment(
                                            legacydata?.legacy_debt?.[0]
                                              ?.updated_at
                                          ).format("MMMM Do YYYY")
                                        : "N/A"}
                                    </p>
                                  </div>
                                  {legacydata?.legacy_debt?.length > 0 ? (
                                    <>
                                      {legacydata?.legacy_debt?.map((item) => (
                                        <div>
                                          <div class="my-6">
                                            <h1 class="plan-ahed capitalize break-words	">
                                              lender name
                                            </h1>
                                            <p class="decisions-contnet capitalize break-words	">
                                              {item?.lender_name ?? "N/A"}
                                            </p>
                                          </div>

                                          <div class="my-6">
                                            <h1 class="plan-ahed capitalize break-words	">
                                              description
                                            </h1>
                                            <p class="decisions-contnet capitalize break-words	">
                                              {item?.description ?? "N/A"}
                                            </p>
                                          </div>

                                          <div class="my-6">
                                            <h1 class="plan-ahed capitalize break-words	">
                                              Principal amount
                                            </h1>
                                            <p class="decisions-contnet capitalize break-words	">
                                              {item?.principal_amount ?? "N/A"}
                                            </p>
                                          </div>

                                          <div class="my-6">
                                            <h1 class="plan-ahed capitalize break-words	">
                                              Interest rate
                                            </h1>
                                            <p class="decisions-contnet capitalize break-words	">
                                              {item?.interest_rate ?? "N/A"}
                                            </p>
                                          </div>
                                          <div class="my-6">
                                            <h1 class="plan-ahed capitalize break-words	">
                                              document
                                            </h1>

                                            <p class="decisions-contnet capitalize break-words">
                                              <Link
                                                to={item?.document}
                                                target={item?.document}
                                              >
                                                {item?.document ?? "N/A"}
                                              </Link>
                                            </p>
                                          </div>

                                          <div class="my-6">
                                            <h1 class="plan-ahed capitalize break-words	">
                                              hint
                                            </h1>
                                            <p class="decisions-contnet capitalize break-words">
                                              {item?.hint_video ?? "N/A"}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </>
                                  ) : (
                                    <>
                                      <div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            lender name
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            description
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            Principal amount
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            Interest rate
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            document
                                          </h1>

                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            hint
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </>
                            </div>

                            {/* mappppppppppppp */}
                            <div className="card-legacydetailsshow">
                              <>
                                <div className="details-pageleg">
                                  <div className="lastupdated-date">
                                    <h6 className="team-name legacy-det">
                                      Legacy Divorce
                                    </h6>
                                    <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                      Updated on:
                                      {legacydata?.legacy_divorce?.[0]
                                        ?.updated_at
                                        ? moment(
                                            legacydata?.legacy_divorce?.[0]
                                              ?.updated_at
                                          ).format("MMMM Do YYYY")
                                        : "N/A"}
                                    </p>
                                  </div>
                                  {legacydata?.legacy_divorce?.length > 0 ? (
                                    <>
                                      {legacydata?.legacy_divorce?.map(
                                        (item) => (
                                          <div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                name
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.name ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                description
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.description ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                divorce date
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.divorce_date ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                document
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                <Link
                                                  to={item?.document}
                                                  target={item?.document}
                                                >
                                                  {item?.document ?? "N/A"}
                                                </Link>
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                hint
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.hint_video ?? "N/A"}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            name
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            description
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            divorce date
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            document
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            hint
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </>
                            </div>

                            <div className="card-legacydetailsshow">
                              <div className="details-pageleg">
                                <div className="lastupdated-date">
                                  <h6 className="team-name legacy-det">
                                    Legacy Funeral
                                  </h6>
                                  <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                    Updated on:
                                    {legacydata?.legacy_funeral?.updated_at
                                      ? moment(
                                          legacydata?.legacy_funeral?.updated_at
                                        ).format("MMMM Do YYYY")
                                      : "N/A"}
                                  </p>
                                </div>

                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_funeral
                                        ?.description ?? "N/A"}
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      package location
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_funeral
                                        ?.package_location ?? "N/A"}
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      type
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_funeral?.type ??
                                        "N/A"}
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      wish
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_funeral?.wish ??
                                        "N/A"}
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words">
                                      <Link
                                        to={
                                          legacydata?.legacy_funeral?.document
                                        }
                                        target={
                                          legacydata?.legacy_funeral?.document
                                        }
                                      >
                                        {legacydata?.legacy_funeral?.document ??
                                          "N/A"}
                                      </Link>
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      Hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_funeral?.hint_video ??
                                        "N/A"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* mappppppppppppp */}
                            <div className="card-legacydetailsshow">
                              <>
                                <div className="details-pageleg">
                                  <div className="lastupdated-date">
                                    <h6 className="team-name legacy-det">
                                      Legacy Insurance
                                    </h6>
                                    <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                      Updated on:
                                      {legacydata?.legacy_insurance?.[0]
                                        ?.updated_at
                                        ? moment(
                                            legacydata?.legacy_insurance?.[0]
                                              ?.updated_at
                                          ).format("MMMM Do YYYY")
                                        : "N/A"}
                                    </p>
                                  </div>

                                  {legacydata?.legacy_insurance?.length > 0 ? (
                                    <>
                                      {legacydata?.legacy_insurance?.map(
                                        (item) => (
                                          <div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                company
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.company ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                description
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.description ?? "N/A"}
                                              </p>
                                            </div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                document
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                <Link
                                                  to={item?.document}
                                                  target={item?.document}
                                                >
                                                  {item?.document ?? "N/A"}
                                                </Link>
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                hint
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.hint_video ?? "N/A"}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            company
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            description
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            document
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            hint
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </>
                            </div>

                            {/* mappppppppppppp */}
                            <div className="card-legacydetailsshow">
                              <>
                                <div className="details-pageleg">
                                  <div className="lastupdated-date">
                                    <h6 className="team-name legacy-det">
                                      legacy investment
                                    </h6>
                                    <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                      Updated on:{" "}
                                      {legacydata?.legacy_investment?.[0]
                                        ?.updated_at
                                        ? moment(
                                            legacydata?.legacy_investment?.[0]
                                              ?.updated_at
                                          ).format("MMMM Do YYYY")
                                        : "N/A"}
                                    </p>
                                  </div>
                                  {legacydata?.legacy_investment?.length > 0 ? (
                                    <>
                                      {legacydata?.legacy_investment?.map(
                                        (item) => (
                                          <div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                name
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.name ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                description
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.description ?? "N/A"}
                                              </p>
                                            </div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                amount
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.amount ?? "N/A"}
                                              </p>
                                            </div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                Date invested
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.date_invested ?? "N/A"}
                                              </p>
                                            </div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                document
                                              </h1>
                                              <p class="decisions-contnet  break-words">
                                                <Link
                                                  to={item?.document}
                                                  target={item?.document}
                                                >
                                                  {item?.document ?? "N/A"}
                                                </Link>
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                hint
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.hint_video ?? "N/A"}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            name
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            description
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            amount
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            Date invested
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            document
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            hint
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </>
                            </div>

                            {/* mappppppppppppp */}
                            <div className="card-legacydetailsshow">
                              <>
                                <div className="details-pageleg">
                                  <div className="lastupdated-date">
                                    <h6 className="team-name legacy-det">
                                      legacy pension
                                    </h6>
                                    <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                      Updated on:{" "}
                                      {legacydata?.legacy_pension?.[0]
                                        ?.updated_at
                                        ? moment(
                                            legacydata?.legacy_pension?.[0]
                                              ?.updated_at
                                          ).format("MMMM Do YYYY")
                                        : "N/A"}
                                    </p>
                                  </div>

                                  {legacydata?.legacy_pension?.length > 0 ? (
                                    <>
                                      {legacydata?.legacy_pension?.map(
                                        (item) => (
                                          <div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                name
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.name ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                description
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.description ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                document
                                              </h1>
                                              <p class="decisions-contnet break-words">
                                                <Link
                                                  to={item?.document}
                                                  target={item?.document}
                                                >
                                                  {item?.document ?? "N/A"}
                                                </Link>
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                hint
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.hint_video ?? "N/A"}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            name
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            description
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            document
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            hint
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </>
                            </div>

                            {/* mappppppppppppp */}
                            <div className="card-legacydetailsshow">
                              <>
                                <div className="details-pageleg">
                                  <div className="lastupdated-date">
                                    <h6 className="team-name legacy-det">
                                      legacy property
                                    </h6>
                                    <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                      Updated on:{" "}
                                      {legacydata?.legacy_property?.[0]
                                        ?.updated_at
                                        ? moment(
                                            legacydata?.legacy_property?.[0]
                                              ?.updated_at
                                          ).format("MMMM Do YYYY")
                                        : "N/A"}
                                    </p>
                                  </div>
                                  {legacydata?.legacy_property?.length > 0 ? (
                                    <>
                                      {legacydata?.legacy_property?.map(
                                        (item) => (
                                          <div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                description
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.description ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                address
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.address ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                price
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.price ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                document
                                              </h1>
                                              <p class="decisions-contnet break-words">
                                                <Link
                                                  to={item?.document}
                                                  target={item?.document}
                                                >
                                                  {item?.document ?? "N/A"}
                                                </Link>
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                hint
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.hint_video ?? "N/A"}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            description
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            address
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            price
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            document
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            hint
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </>
                            </div>

                            <div className="card-legacydetailsshow">
                              <div className="details-pageleg">
                                <div className="lastupdated-date">
                                  <h6 className="team-name legacy-det">
                                    legacy retirement
                                  </h6>
                                  <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                    Updated on:{" "}
                                    {legacydata?.legacy_retirement?.updated_at
                                      ? moment(
                                          legacydata?.legacy_retirement
                                            ?.updated_at
                                        ).format("MMMM Do YYYY")
                                      : "N/A"}
                                  </p>
                                </div>

                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_retirement
                                        ?.description ?? "N/A"}
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet break-words">
                                      <Link
                                        to={
                                          legacydata?.legacy_retirement
                                            ?.document
                                        }
                                        target={
                                          legacydata?.legacy_retirement
                                            ?.document
                                        }
                                      >
                                        {legacydata?.legacy_retirement
                                          ?.document ?? "N/A"}
                                      </Link>
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      Hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_retirement
                                        ?.hint_video ?? "N/A"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* mappppppppppppp */}
                            <div className="card-legacydetailsshow">
                              <>
                                <div className="details-pageleg">
                                  <div className="lastupdated-date">
                                    <h6 className="team-name legacy-det">
                                      legacy vehicle
                                    </h6>
                                    <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                      Updated on:{" "}
                                      {legacydata?.legacy_vehicle?.[0]
                                        ?.updated_at
                                        ? moment(
                                            legacydata?.legacy_vehicle?.[0]
                                              ?.updated_at
                                          ).format("MMMM Do YYYY")
                                        : "N/A"}
                                    </p>
                                  </div>
                                  {legacydata?.legacy_vehicle?.length > 0 ? (
                                    <>
                                      {legacydata?.legacy_vehicle?.map(
                                        (item) => (
                                          <div>
                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                description
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.description ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                color
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words	">
                                                {item?.color ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                model
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.model ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                vin
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.vin ?? "N/A"}
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                document
                                              </h1>
                                              <p class="decisions-contnet break-words">
                                                <Link
                                                  to={item?.document}
                                                  target={item?.document}
                                                >
                                                  {item?.document ?? "N/A"}
                                                </Link>
                                              </p>
                                            </div>

                                            <div class="my-6">
                                              <h1 class="plan-ahed capitalize break-words	">
                                                hint
                                              </h1>
                                              <p class="decisions-contnet capitalize break-words">
                                                {item?.hint_video ?? "N/A"}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <div>
                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            description
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            color
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words	">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            model
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            vin
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            document
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>

                                        <div class="my-6">
                                          <h1 class="plan-ahed capitalize break-words	">
                                            hint
                                          </h1>
                                          <p class="decisions-contnet capitalize break-words">
                                            N/A
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </>
                            </div>

                            <div className="card-legacydetailsshow">
                              <div className="details-pageleg">
                                <div className="lastupdated-date">
                                  <h6 className="team-name legacy-det">
                                    legacy will
                                  </h6>
                                  <p class="decisions-contnet timeshow-contnet capitalize break-words	">
                                    Updated on:
                                    {legacydata?.legacy_will?.updated_at
                                      ? moment(
                                          legacydata?.legacy_will?.updated_at
                                        ).format("MMMM Do YYYY")
                                      : "N/A"}
                                  </p>
                                </div>
                                <div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      description
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_will?.description ??
                                        "N/A"}
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      self proven
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_will?.self_proven ? (
                                        <span className="selfproventrue">
                                          (✓)
                                        </span>
                                      ) : (
                                        <span className="selfprovenfalse">
                                          (✘)
                                        </span>
                                      )}
                                    </p>
                                  </div>

                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      document
                                    </h1>
                                    <p class="decisions-contnet break-words">
                                      <Link
                                        to={legacydata?.legacy_will?.document}
                                        target={
                                          legacydata?.legacy_will?.document
                                        }
                                      >
                                        {legacydata?.legacy_will?.document ??
                                          "N/A"}
                                      </Link>
                                    </p>
                                  </div>
                                  <div class="my-6">
                                    <h1 class="plan-ahed capitalize break-words	">
                                      Hint
                                    </h1>
                                    <p class="decisions-contnet capitalize break-words	">
                                      {legacydata?.legacy_will?.hint_video ??
                                        "N/A"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Member_relation_legacyShow;
