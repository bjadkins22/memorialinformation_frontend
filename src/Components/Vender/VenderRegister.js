import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validations } from "../../utils";
import swal from "sweetalert";
import { PartneruserListGetAction } from "../../Redux/actions/UserAction";
import { Frontend_URL } from "../../environment";
import LoaderSpinner from "../Loader/Loader-spinner";
import { VenderRegisterAction } from "../../Redux/actions/VenderAction";
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function VenderRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    success,
    error,
    message,
    loading: venderloading,
  } = useSelector((state) => state.VenderRegisterReducer);

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
  const [partner_type, setpartner_type] = useState("");

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    partner_type: "",
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
      partner_type: validations.partner_type(partner_type),
    };

    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleSubmitData();
  };

  const handleSubmitData = async (e) => {
    // e.preventDefault();
    const formData = new FormData();

    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm_password", confirm_password);
    formData.append("phone_number ", phone_number);
    formData.append("partner_type", partner_type);
    formData.append("account_type", 3);

    dispatch(VenderRegisterAction(formData));

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
      {loading || venderloading ? (
        <LoaderSpinner />
      ) : (
        <div className="">
          <div
            className="main-containerabout"
            style={{
              backgroundImage: `url(${Frontend_URL}img/aerial-view-business-team.jpg)`,
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
                          MI Venders
                        </span>
                      </h1>
                      <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2 pr-10">
                          <p class="partnercontnettextad venderpartnercontnet mb-8">
                            Memorial Information actively partners with and
                            provides consistent customers to local, dependable,
                            high-quality, trust-worthy service and product
                            vendors with our MI Vendor Affiliates Program. MI
                            provides our MI Vendors with the opportunity to
                            market their products or services to families for a
                            variety of needs. MI Vendors provide just-in-time
                            solutions for MI Families seeking specific products
                            or services for such purposes as funerals, family
                            reunions, property disposition and management,
                            transportation, lodging and event venues, legal
                            matters, event decorations, and so much more.
                          </p>
                        </div>
                        <div class="w-full md:w-1/2">
                          <img
                            class="partnerimagesee"
                            src="/img/funera.png"
                            alt="Vortex"
                          />
                        </div>
                      </div>
                      <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2">
                          <img
                            class="partnerimagesee"
                            src="/img/7506389.png"
                            alt="use the force"
                          />
                        </div>
                        <div class="w-full md:w-1/2 pl-10">
                          <p class="partnercontnettextad venderpartnercontnet mb-8">
                            Our MI Families and their friends travel great
                            distances nationally and even internationally to
                            celebrate their loved-ones, especially for funerals
                            and family reunions, and are looking for trusted
                            vendors just like you. With our MI Vendor Affiliates
                            platform, you will have the opportunity to showcase
                            your company’s products and services and offer
                            attractive packages that will conveniently meet the
                            needs of our MI Families. Additionally, you will be
                            able to communicate with your customers live and
                            track your sales activities.
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2 pr-10">
                          <p class="partnercontnettextad venderpartnercontnet mb-8">
                            For a limited time, you can become an MI Vendor for
                            FREE. Start advertising your services or products to
                            our MI Families now. Grow your business by reaching
                            more sales-qualified customers who are urgently
                            looking for your services or products. Our MI Vendor
                            Marketing Program offers reliable e-mail marketing
                            and customer nurturing strategies that can help you
                            maintain contact with future customers as well.
                          </p>
                        </div>
                        <div class="w-full md:w-1/2">
                          <img
                            class="partnerimagesee"
                            next
                            src="/img/7513337.png"
                            alt="Syncing"
                          />
                        </div>
                      </div>

                      <div class="flex items-center flex-wrap mb-20">
                        <div class="w-full md:w-1/2">
                          <img
                            class="partnerimagesee"
                            src="/img/Wavy_Bus-21_Single-10 [Converted] (2).png"
                            alt="use the force"
                          />
                        </div>
                        <div class="w-full md:w-1/2 pl-10">
                          <p class="partnercontnettextad venderpartnercontnet mb-8">
                            So, if you are ready to 2X or even 3X your business,
                            then you have found the right partner. Our MI Vendor
                            profiles are limited based upon service type and
                            location. So, if you haven’t created your MI Vendor
                            account yet, don’t wait, now is the time. There is a
                            need for your services and products.
                          </p>
                        </div>
                      </div>
                    </section>
                    <div
                      class="py-20 bg-cover bg-no-repeat bg-fixed"
                      style={{
                        backgroundImage: "url(/img/person-using-ai-tool-job.jpg)",
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
                          Register as Vender
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
                  <div className="main-productsshow gap-6">
                    <div className="mainseconddivprodcts venderregister">
                      <div class="well-box">
                        <div className="welcom-black bg-white w-full md:px-10 py-10">
                          <div className="w-full h-100">
                            <div className="imageheader-contnet flex justify-center items-center"></div>
                            <h1 className="text-center text-xl text-black md:text-2xl font-bold leading-tight md:mt-4 header-welcom-back">
                              Became a MI Vender and grow your business
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

                                <div className="input-boxdiv mt-4">
                                  <label className="block text-gray-700">
                                    Vender Type
                                  </label>
                                  <select
                                    value={partner_type}
                                    onChange={(e) => {
                                      setpartner_type(e.target.value);
                                      setErrors({
                                        ...errors,
                                        partner_type: null,
                                      });
                                    }}
                                    className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                                  >
                                    <option selected>
                                      Select Partner Type
                                    </option>
                                    {PartneruserListGet?.map((partner) => (
                                      <option value={partner?.id}>
                                        {partner?.type}
                                      </option>
                                    ))}
                                  </select>
                                  <span
                                    style={{
                                      color: "red",
                                      fontSize: "15px",
                                      opacity: errors.partner_type ? 1 : 0,
                                    }}
                                  >
                                    {errors.partner_type ?? "valid"}
                                  </span>
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

export default VenderRegister;
