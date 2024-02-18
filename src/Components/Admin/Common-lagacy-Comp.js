import React, { useState, useEffect } from "react";
import {
  EnterPasswordVerficationAction,
  LegacyListShowAction,
  OtpVerficationAction,
} from "../../Redux/actions/LegacyAction";
import Legacy from "./Legacy";
import Legacy_detailsShow from "./Legacy-detailsShow";
import { useDispatch, useSelector } from "react-redux";
import LoaderSpinner from "../Loader/Loader-spinner";
import OtpInput from "react-otp-input";
import swal from "sweetalert";

const Common_lagacy_Comp = () => {
  const dispatch = useDispatch();

  const { LegacyListShow, success, error, message } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  const { userData } = useSelector((state) => state.authReducer);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const [totalLenght, setTotalLenght] = useState();

  useEffect(() => {
    if (LegacyListShow) {
      setTotalLenght(Object.keys(LegacyListShow).length);
    }
  }, [LegacyListShow]);

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
    dispatch(OtpVerficationAction(72, formData));
    setotpRender(true);
  };

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
    // You can perform validation or other actions here
  };

  const renderInput = (inputProps) => <input {...inputProps} />;

  const [passwordVerfication, setPasswordVerfication] = useState();

  const PasswordVerficationSubmit = () => {
    const formData = new FormData();
    formData.append("code", passwordVerfication);
    dispatch(EnterPasswordVerficationAction(72, formData));
    setCodeAddRender(true);
  };

  const {
    success: passwordSuccess,
    error: errorpassword,
    message: passwordMessge,
    loading: passwordLoading,
  } = useSelector((state) => state.EnterPasswordVerficationReducer);

  const [CodeAddRender, setCodeAddRender] = useState(false);

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
        timer: 5000,
      });

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

  return (
    <div>
      {loading ? (
        <>
          <LoaderSpinner />
        </>
      ) : (
        <>
          {totalLenght == 0 ? (
            <>
              <Legacy />
            </>
          ) : (
            <>
              <Legacy_detailsShow />
            </>
          )}
        </>
      )}

      {/* <Legacy_detailsShow /> */}
    </div>
  );
};

export default Common_lagacy_Comp;
