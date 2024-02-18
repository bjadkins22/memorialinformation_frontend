import React, { useState, useEffect } from "react";
import { RegisterAction } from "../../Redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validations } from "../../utils";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {
  PartnerRegsiterAction,
  PartneruserListGetAction,
} from "../../Redux/actions/UserAction";
import { Frontend_URL } from "../../environment";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import LoaderSpinner from "../Loader/Loader-spinner";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Partner_Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    success,
    error,
    message,
    loading: partnerloading,
  } = useSelector((state) => state.PartnerRegsiterReducer);

  const { PartneruserListGet } = useSelector(
    (state) => state.PartneruserListGetReducer
  );

  useEffect(() => {
    dispatch(PartneruserListGetAction());
  }, []);

  const [rerender, setRerender] = useState(false);
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [phone_number, setphone_number] = useState("");
  // const [partner_type, setpartner_type] = useState("");

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    // partner_type: "",
  });

  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      first_name: validations.firstName(first_name),
      last_name: validations.lastName(last_name),
      email: validations.email(email),
      phone_number: validations.mobileNumber(phone_number),
      password: validations.password(password),
      confirm_password: validations.confirmPassword(confirm_password, password),
      // partner_type: validations.partner_type(partner_type),
    };

    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleSubmitData();
  };

  const [funerals_per_month, setfunerals_per_month] = useState("");
  const [customers_served_per_month, setcustomers_served_per_month] =
    useState("");
  const [physical_locations, setphysical_locations] = useState("");
  const [business_start, setbusiness_start] = useState("");

  const handleSubmitData = async (e) => {
    // e.preventDefault();
    const formData = new FormData();

    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm_password", confirm_password);
    formData.append("phone_number ", phone_number);

    formData.append("funerals_per_month ", funerals_per_month);
    formData.append("customers_served_per_month ", customers_served_per_month);
    formData.append("physical_locations ", physical_locations);
    formData.append("business_start ", business_start);

    // formData.append("partner_type", partner_type);
    formData.append("account_type", 2);

    dispatch(PartnerRegsiterAction(formData));

    setRerender(true);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: " ",
        text: message,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/thankyou/partner");
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [success, error, rerender]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {loading || partnerloading ? (
        <LoaderSpinner />
      ) : (
        <div className="">
          <div
            className="main-containerabout"
            style={{
              backgroundImage: `url(${Frontend_URL}img/handshake-businessme.jpg)`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="bgimage-contnet">
              <div className="container p-3  mx-auto ">
                <div className="toptextabout">
                  <div className="image-textcontnet">
                    <div className="center-sectioncontnet">
                      <p className="merorialtext">Memorial Information</p>
                      <h1 className="letus-text-contnet text-white">
                        <span className="land-text-contnet start-busines">
                          MI partners with End-of-Life Services
                        </span>
                      </h1>
                      <p className="funeral-contnet mt-4">
                        MI Partners experience 2-3X GROWTH with out platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <div className="">
              <div class="">
                <div className="mt-12">
                  <div
                    class="text-gray-700 bg-white antialiased"
                    style={{ fontFamily: "Roboto" }}
                  >
                    <section class="container mx-auto px-6 p-10">
                      <h1 class="letus-text-contnet text-white">
                        <span class="land-text-contnet start-busines">
                          MI Partners
                        </span>
                      </h1>
                      <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2 pr-10">
                          <p class="partnercontnettextad mb-8">
                            Navigating the emotional devastation while also
                            managing the operational duties that come with the
                            death of a mother or father, sister or brother, or
                            any family member is daunting to say the least. Many
                            professionals in the end-of-life services and family
                            estate planning arenas simply focus on addressing
                            one or two of the many pieces to the family
                            transition puzzle.
                          </p>
                          <p class="partnercontnettextad mb-8">
                            This leaves many loved-ones in a mountain of mayhem
                            with aimless searches, years of exorbitant probate
                            proceedings, property theft, or, even worse, sibling
                            infighting and rivalries. I’m very sure that this is
                            NOT what mom or dad would have wanted or even full
                            foresaw. Memorial Information believed that we, as
                            professional community service providers, can do
                            better and more for all families to help build and
                            preserve their legacy.
                          </p>
                        </div>
                        <div class="w-full md:w-1/2">
                          <img
                            class="partnerimagesee"
                            src="/img/Rememberance Photo.png"
                            alt="Vortex"
                          />
                        </div>
                      </div>
                      <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2">
                          <img
                            class="partnerimagesee"
                            src="/img/Family together in sunset.png"
                            alt="use the force"
                          />
                        </div>
                        <div class="w-full md:w-1/2 pl-10">
                          <p class="partnercontnettextad mb-8">
                            Accordingly, Memorial Information has developed a
                            nationwide network of highly motivated and MI
                            Certified industry professionals who provide expert
                            guidance and compassion to families seeking to
                            preserve a legacy. The MI platform is a multi-level
                            security enhanced system that allows our MI
                            customers to engage directly with MI Partners who
                            help organize, manage, plan, allocate property,
                            communicate with family & friends, suggest helpful
                            vendors, and so much more. MI provides a tremendous
                            value-add to MI Partners ability to deliver high
                            quality, technically advanced services with the
                            personal touch that families and friends are looking
                            for in a time of difficulty.
                          </p>
                          <p class="partnercontnettextad mb-8">
                            Ideally, our MI Partners are industry professionals
                            operating as a sole proprietorship or a fully
                            operational LLC, nonprofit, or corporation that has
                            successfully been in business for 2 or more years
                            with a great report in your local community as a
                            sincere passion for helping others. You might be a
                            funeral home or crematory, maybe a financial planner
                            or clergy organization or social services nonprofit
                            or other family legacy advocate.
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2 pr-10">
                          <p class="partnercontnettextad mb-8">
                            Our MI Partners go through background and company
                            screening process as well as online MI training
                            course to become an expert certified MI Partner. Our
                            MI Partners enjoy exclusive access to vendor
                            networks, inherent automated marketing campaigns,
                            national recognition for excellence in service,
                            compensation for servicing clients, participation in
                            referral and review acquisition campaigns, and so
                            much more.
                          </p>
                          <p class="partnercontnettextad mb-8">
                            So if you (or your employer) is looking for a
                            phenomenal opportunity to expand your book of
                            business and services by helping families navigate
                            the ultimate eternal transition while preserving
                            their legacy seamlessly, then complete the form
                            below. Once a complete questionnaire is submitted
                            and your company is deemed a good fit to potentially
                            become an MI Partner, one of our MI Family First
                            Team members will reach out to you with some next
                            steps.
                          </p>
                        </div>
                        <div class="w-full md:w-1/2">
                          <img
                            class="partnerimagesee"
                            next
                            src="/img/the-good-funeral-guide-AQN0rO3OpSc-unsplash.jpg"
                            alt="Syncing"
                          />
                        </div>
                      </div>

                      <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2">
                          <img
                            class="partnerimagesee"
                            src="/img/the-good-funeral-guide-u27jrTVcbMQ-unsplash.jpg"
                            alt="use the force"
                          />
                        </div>
                        <div class="w-full md:w-1/2 pl-10">
                          <p class="partnercontnettextad mb-8">
                            Thanks for your commitment to serving families to
                            assist in preserving life, legacy, and prosperity
                            for generations to come. Your partnership will help
                            to ease the burden and provide leadership before and
                            after the death of a loved-one.
                          </p>
                        </div>
                      </div>
                    </section>
                    <div
                      class="py-20 bg-cover bg-no-repeat bg-fixed"
                      style={{
                        backgroundImage:
                          "url(/img/dan-meyers-f1WMJR8pLqo-unsplash.jpg)",
                      }}
                    >
                      <div class="container m-auto text-center px-6 opacity-100">
                        <h1 className="becamepartnertext">
                          Became a partner and grow your business
                        </h1>
                        <h3 class="text-2xl mb-8 text-gray-200">
                          Not much, but it could be a life form. This is Rouge
                          Two. this is Rouge Two. Captain Solo, so you copy?
                        </h3>

                        <button
                          onClick={handleClickOpen}
                          class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all"
                        >
                          Register as Partner
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>

                {/* <Button autoFocus color="inherit" onClick={handleClose}>
                  save
                </Button> */}
              </Toolbar>
            </AppBar>

            <div className="my-8">
              <div className="main-containerpartner">
                <div class="container">
                  <div className="flex justify-center">
                    <div className="mainseconddivprodcts venderregister">
                      <div class="well-box">
                        <div className="welcom-black bg-white w-full md:px-10 py-10">
                          <div className="w-full h-100">
                            <div className="imageheader-contnet flex justify-center items-center"></div>
                            <h1 className="text-center text-xl text-black md:text-2xl font-bold leading-tight md:mt-4 header-welcom-back">
                              Became a partner and grow your business
                            </h1>
                            <form onSubmit={validateSubmit} className="mt-6">
                              <div className="grid sm:grid-cols-2 gap-4 xs:grid-cols-1">
                                <div className="input-boxdiv">
                                  <label className="block text-grey-700">
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    value={first_name}
                                    onChange={(e) => {
                                      setfirst_name(e.target.value);
                                      setErrors({
                                        ...errors,
                                        first_name: null,
                                      });
                                    }}
                                    placeholder="First Name"
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  />
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "15px",
                                      opacity: errors.first_name ? 1 : 0,
                                    }}
                                  >
                                    {errors.first_name ?? "valid"}
                                  </span>
                                </div>
                                <div className="input-boxdiv">
                                  <label className="block text-grey-700">
                                    Last Name
                                  </label>
                                  <input
                                    value={last_name}
                                    onChange={(e) => {
                                      setlast_name(e.target.value);
                                      setErrors({
                                        ...errors,
                                        last_name: null,
                                      });
                                    }}
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  />
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "15px",
                                      opacity: errors.last_name ? 1 : 0,
                                    }}
                                  >
                                    {errors.last_name ?? "valid"}
                                  </span>
                                </div>
                                <div className="input-boxdiv mt-4">
                                  <label className="block text-gray-700">
                                    Email Address
                                  </label>
                                  <input
                                    value={email}
                                    onChange={(e) => {
                                      setemail(e.target.value);
                                      setErrors({ ...errors, email: null });
                                    }}
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  />
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "15px",
                                      opacity: errors.email ? 1 : 0,
                                    }}
                                  >
                                    {errors.email ?? "valid"}
                                  </span>
                                </div>
                                <div className="input-boxdiv mt-4">
                                  <label className="block text-grey-700">
                                    Phone Number
                                  </label>
                                  <input
                                    value={phone_number}
                                    onChange={(e) => {
                                      setphone_number(e.target.value);
                                      setErrors({
                                        ...errors,
                                        phone_number: null,
                                      });
                                    }}
                                    type="text"
                                    placeholder="Enter Phone number"
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  />
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "15px",
                                      opacity: errors.phone_number ? 1 : 0,
                                    }}
                                  >
                                    {errors.phone_number ?? "valid"}
                                  </span>
                                </div>

                                <div className="input-boxdiv mt-4">
                                  <label className="block text-gray-700">
                                    Password
                                  </label>
                                  <input
                                    value={password}
                                    onChange={(e) => {
                                      setpassword(e.target.value);
                                      setErrors({
                                        ...errors,
                                        password: null,
                                      });
                                    }}
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  />
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "15px",
                                      opacity: errors.password ? 1 : 0,
                                    }}
                                  >
                                    {errors.password ?? "valid"}
                                  </span>
                                </div>

                                <div className="input-boxdiv mt-4">
                                  <label className="block text-gray-700">
                                    Confirm Password
                                  </label>
                                  <input
                                    value={confirm_password}
                                    onChange={(e) => {
                                      setconfirm_password(e.target.value);
                                      setErrors({
                                        ...errors,
                                        confirm_password: null,
                                      });
                                    }}
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  />
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "15px",
                                      opacity: errors.confirm_password ? 1 : 0,
                                    }}
                                  >
                                    {errors.confirm_password ?? "valid"}
                                  </span>
                                </div>

                                {/* new fileds  */}

                                <div className="input-boxdiv mt-4">
                                  <label className="block text-gray-700">
                                    Funerals per Month
                                  </label>
                                  <select
                                    value={funerals_per_month}
                                    onChange={(e) => {
                                      setfunerals_per_month(e.target.value);
                                    }}
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  >
                                    <option value="" disabled selected>
                                      Select Funerals
                                    </option>
                                    {[...Array(21).keys()].map((value) => (
                                      <option key={value} value={value}>
                                        {value}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <div className="input-boxdiv mt-4">
                                  <label className="block text-gray-700">
                                    Customers Served per Month
                                  </label>
                                  <select
                                    value={customers_served_per_month}
                                    onChange={(e) => {
                                      setcustomers_served_per_month(
                                        e.target.value
                                      );
                                    }}
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  >
                                    <option selected>Select Customers</option>
                                    <option selected>1+</option>
                                    <option selected>5+</option>
                                    <option selected>10+</option>
                                    <option selected>15+</option>
                                    <option selected>20+</option>
                                    <option selected>30+</option>
                                    <option selected>40+</option>
                                  </select>
                                </div>
                                <div className="input-boxdiv mt-4">
                                  <label className="block text-gray-700">
                                    Physical Locations
                                  </label>
                                  <select
                                    value={physical_locations}
                                    onChange={(e) => {
                                      setphysical_locations(e.target.value);
                                    }}
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  >
                                    <option selected>Select Locations</option>
                                    {[...Array(21).keys()].map((value) => (
                                      <option key={value} value={value}>
                                        {value}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <div className="input-boxdiv mt-4">
                                  <label className="block text-gray-700">
                                    What year did this business start?
                                  </label>
                                  <input
                                    value={business_start}
                                    onChange={(e) => {
                                      setbusiness_start(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="What year did this business start?"
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  />
                                </div>
                              </div>

                              <button
                                type="submit"
                                className="w-full block bg-[#486173] hover:bg-gray-200-400  text-white font-semibold rounded-lg
                      px-4 py-3 mt-6"
                              >
                                Sign Up
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      )}
    </div>
  );
}

export default Partner_Register;
