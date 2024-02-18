import React, { useEffect, useState } from "react";
import { AdminCreatePlanAction } from "../../../Redux/actions/paymentAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { validations } from "../../../utils";

function Plan_Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    success: postSuccess,
    error: errorSuccess,
    message: postMessage,
  } = useSelector((state) => state.AdminCreatePlanReducer);

  const [membership_type, setMembership_type] = useState("");
  const [subscription_for, setsubscription_for] = useState();
  const [price, setPrice] = useState("");
  const [productAllowed, setproductAllowed] = useState(null);

  const [render, setRender] = useState("");

  // description
  const [inputList, setInputList] = useState([{ description: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    setInputList(remove);
  };
  const handleSelectChange = (e) => {
    setsubscription_for(e.target.value);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { description: "" }]);
  };

  const [errors, setErrors] = useState({
    subscription_for: "",
    membership_type: "",
    productAllowed: null,
    price: "",
    description: "",
  });

  const validateSubmit = (e) => {
    e?.preventDefault();

    const tempErrors = {
      membership_type: validations.RequiredFiled(membership_type),
      price: validations.RequiredFiled(price),
      subscription_for: validations.RequiredFiled(subscription_for),
      productAllowed: validations.RequiredFiled(productAllowed),
      // description: validations.RequiredFiled(description),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    handleSubmit();
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("subscription_for", subscription_for);
    formData.append("membership_type", membership_type);
    if (subscription_for == "vendor") {
      formData.append("number_of_hit", productAllowed);
    }
    formData.append("price", price);

    inputList.forEach((item, index) => {
      formData.append(`description[${index}]`, item.description);
    });

    dispatch(AdminCreatePlanAction(formData));

    setRender(true);
  };

  useEffect(() => {
    if (postSuccess && render) {
      swal({
        title: " ",
        text: postMessage,
        className: "successAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 5000,
      });
      setRender(false);
      setPrice("");
      setMembership_type("");
      navigate("/plan-list");
    }
    if (errorSuccess && render) {
      swal({
        title: "Error",
        text: errorSuccess,
        className: "errorAlert",
        icon: "/img/Memorial Information Logo.png",
        buttons: false,
        timer: 2000,
      });
      setRender(false);
    }
  }, [postSuccess, errorSuccess, render]);

  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Plan Add</h1>
          <div className="common-divbg bg-white">
            <div className="events-div my-12 ">
              <div className="">
                <div className="input-boxdiv useradd ">
                  <label className="heading-title mr-[28px] ">
                    Subscription for{" "}
                  </label>
                  <select
                    value={subscription_for}
                    onChange={handleSelectChange}
                    class="sortbb"
                  >
                    <option value="">Subscription for :</option>
                    <option value="user">User</option>
                    <option value="vendor">Vendor</option>
                  </select>
                  <span
                    style={{
                      color: "red",
                      margin: "0px 5px",
                      fontFamily: "Montserrat",
                      opacity: errors.subscription_for ? 1 : 0,
                    }}
                  >
                    {errors.subscription_for ?? "valid"}
                  </span>
                </div>
                <div className="input-boxdiv useradd mb-4">
                  <label className="heading-title my-2">Membership type</label>
                  <input
                    value={membership_type}
                    onChange={(e) => {
                      setErrors({ ...errors, membership_type: null });
                      setMembership_type(e.target.value);
                    }}
                    type="text"
                    placeholder="Membership type"
                    className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                  />
                  <span
                    style={{
                      color: "red",
                      margin: "0px 5px",
                      fontFamily: "Montserrat",
                      opacity: errors.membership_type ? 1 : 0,
                    }}
                  >
                    {errors.membership_type ?? "valid"}
                  </span>
                </div>
                {subscription_for == "vendor" ? (
                  <div className="input-boxdiv useradd mb-4">
                    <label className="heading-title my-2">
                      Product Allowed
                    </label>
                    <input
                      value={productAllowed}
                      onChange={(e) => {
                        setErrors({ ...errors, productAllowed: null });
                        setproductAllowed(e.target.value);
                      }}
                      type="number"
                      placeholder="Product allowed"
                      className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                    />
                    <span
                      style={{
                        color: "red",
                        margin: "0px 5px",
                        fontFamily: "Montserrat",
                        opacity: errors.productAllowed ? 1 : 0,
                      }}
                    >
                      {errors.productAllowed ?? "valid"}
                    </span>
                  </div>
                ) : null}

                <div className="input-boxdiv useradd mb-4">
                  <label className="heading-title my-2">Price</label>
                  <input
                    value={price}
                    onChange={(e) => {
                      setErrors({ ...errors, price: null });
                      setPrice(e.target.value);
                    }}
                    type="price"
                    placeholder="price"
                    className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                  />
                  <span
                    style={{
                      color: "red",
                      margin: "0px 5px",
                      fontFamily: "Montserrat",
                      opacity: errors.price ? 1 : 0,
                    }}
                  >
                    {errors.price ?? "valid"}
                  </span>
                </div>

                {/* <div className="input-boxdiv useradd mb-4">
                  <label className="heading-title my-2">Description</label>
                  <input
                    value={description}
                    onChange={(e) => {
                      setErrors({ ...errors, description: null });
                      setDescription(e.target.value);
                    }}
                    type="price"
                    placeholder="price"
                    className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                  />
                  <span
                    style={{
                      color: "red",
                      margin: "0px 5px",
                      fontFamily: "Montserrat",
                      opacity: errors.description ? 1 : 0,
                    }}
                  >
                    {errors.description ?? "valid"}
                  </span>
                </div> */}

                {inputList.map((x, i) => {
                  return (
                    <div className="box">
                      <div className="input-boxdiv useradd">
                        <label className="heading-title my-2">
                          Description
                        </label>
                        <input
                          name="description"
                          value={x.description}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="description"
                          className="adduserinput w-full px-4 py-3 rounded-lg  mt-2 border focus:outline-none"
                        />
                      </div>

                      <div className="">
                        {inputList.length !== 1 && (
                          <button
                            className="mr10"
                            onClick={() => handleRemoveClick(i)}
                          >
                            Remove
                          </button>
                        )}
                        {inputList.length - 1 === i && (
                          <button onClick={handleAddClick}>Add</button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="input-add">
                <div className="flex gap-4 mt-12 mb-12">
                  <button
                    onClick={validateSubmit}
                    type="submit"
                    className="py-3 px-5 mr-2 mb-2 w-full text-sm font-medium text-gray-900 bg-[#c99e59] rounded-lg border border-gray-200  "
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="w-full py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-[#c99e59]  "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan_Add;
