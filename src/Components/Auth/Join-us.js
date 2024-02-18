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

function Join_us() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error, message } = useSelector(
    (state) => state.PartnerRegsiterReducer
  );

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
  const [bank_account_number, setbank_account_number] = useState("");
  const [gst_number, setgst_number] = useState("");
  const [company_name, setcompany_name] = useState("");
  const [partner_type, setpartner_type] = useState("");

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    bank_account_number: "",
    gst_number: "",
    company_name: "",
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
      bank_account_number: validations.bank_account_number(bank_account_number),
      gst_number: validations.gst_number(gst_number),
      company_name: validations.company_name(company_name),
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
    formData.append("bank_account_number", bank_account_number);
    formData.append("gst_number", gst_number);
    formData.append("company_name", company_name);
    formData.append("partner_type", partner_type);
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
      navigate("/thank-you");
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

  const [imageUrl, setImageUrl] = useState("https://picsum.photos/800/600");
  const imageList = [
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/601",
    "https://picsum.photos/800/602",
    "https://source.unsplash.com/random",
    // Add more image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imageList.length);
      const newImageUrl = imageList[randomIndex];
      setImageUrl(newImageUrl);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageUrl]);


  return (
    <div>
      <div className="">
        <div
          className="main-containerabout"
          style={{
            backgroundImage: `url(${Frontend_URL}img/beautiful-church-.jpg)`,
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
                      <span className="land-text-contnet">
                        Became a Partner
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
          <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
            <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
              <img
                src="https://cdn.devdojo.com/images/december2020/productivity.png"
                class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
              />
            </div>

            <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Boost Productivity
              </h2>
              <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Build an atmosphere that creates productivity in your
                organization and your company culture.
              </p>
              <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  Maximize productivity and growth
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  Speed past your competition
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  Learn the top techniques
                </li>
              </ul>
            </div>
          </div>
          <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
            <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
              <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Automated Tasks
              </h2>
              <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                Save time and money with our revolutionary services. We are the
                leaders in the industry.
              </p>
              <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  Automated task management workflow
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  Detailed analytics for your data
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  Some awesome integrations
                </li>
              </ul>
            </div>
            <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
              <img
                src="https://cdn.devdojo.com/images/december2020/settings.png"
                class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
              />
            </div>
          </div>
        </section>
        <section class="">
          <div>
            <div className="">
              <div className="">
                <div>
                  <div className="">
                    <div className="welcom-black bg-white w-full md:px-10 py-10">
                      <div className="w-full h-100 px-[200px]">
                        <div className="imageheader-contnet flex justify-center items-center">
                          {/* <div>
                            <img className="memoriallogoinfo" src="/img/Memorial 1.png" />
                          </div> */}
                        </div>
                        <h1 className="text-center text-xl text-black md:text-2xl font-bold leading-tight md:mt-4 header-welcom-back">
                          Became A Partner
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
                                  setErrors({ ...errors, first_name: null });
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
                                  setErrors({ ...errors, last_name: null });
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
                                  setErrors({ ...errors, phone_number: null });
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
                                  setErrors({ ...errors, password: null });
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
                                Partner Type
                              </label>
                              <select
                                value={partner_type}
                                onChange={(e) => {
                                  setpartner_type(e.target.value);
                                  setErrors({ ...errors, partner_type: null });
                                }}
                                className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                              >
                                <option selected>Select Partner Type</option>
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

                            <div className="input-boxdiv mt-4">
                              <label className="block text-grey-700">
                                Bank Account Number
                              </label>
                              <input
                                value={bank_account_number}
                                onChange={(e) => {
                                  setbank_account_number(e.target.value);
                                  setErrors({
                                    ...errors,
                                    bank_account_number: null,
                                  });
                                }}
                                type="text"
                                placeholder="Bank Account Number"
                                className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                              />
                              <span
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                  opacity: errors.bank_account_number ? 1 : 0,
                                }}
                              >
                                {errors.bank_account_number ?? "valid"}
                              </span>
                            </div>

                            <div className="input-boxdiv mt-4">
                              <label className="block text-grey-700">
                                Gst Number
                              </label>
                              <input
                                value={gst_number}
                                onChange={(e) => {
                                  setgst_number(e.target.value);
                                  setErrors({ ...errors, gst_number: null });
                                }}
                                type="text"
                                placeholder="Gst Number"
                                className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                              />
                              <span
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                  opacity: errors.gst_number ? 1 : 0,
                                }}
                              >
                                {errors.gst_number ?? "valid"}
                              </span>
                            </div>
                            <div className="input-boxdiv mt-4 mb-2">
                              <label className="block text-grey-700">
                                Company Name
                              </label>
                              <input
                                value={company_name}
                                onChange={(e) => {
                                  setcompany_name(e.target.value);
                                  setErrors({ ...errors, company_name: null });
                                }}
                                type="text"
                                placeholder="Company Name"
                                className="w-full px-4 py-3 rounded-lg  bg-blue-50 mt-2 border focus:outline-none"
                              />
                              <span
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                  opacity: errors.company_name ? 1 : 0,
                                }}
                              >
                                {errors.company_name ?? "valid"}
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
        </section>
      </div>
    </div>
  );
}

export default Join_us;
