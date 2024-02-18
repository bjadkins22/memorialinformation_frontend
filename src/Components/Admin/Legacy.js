import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EventsPostAction } from "../../Redux/actions/EventsAction";
import swal from "sweetalert";
import moment from "moment";
import { FileUploader } from "react-drag-drop-files";
import {
  LegacyAddAction,
  LegacyListShowAction,
} from "../../Redux/actions/LegacyAction";
import Legacy_detailsShow from "./Legacy-detailsShow";
import LoaderSpinner from "../Loader/Loader-spinner";
import Collapsible from "react-collapsible";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Collapse } from "antd";

const { Panel } = Collapse;

const fileTypes = ["csv", "xlsx", "pdf"];

const Legacy = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, error, message } = useSelector(
    (state) => state.LegacyAddReducer
  );

  const { userData } = useSelector((state) => state.authReducer);

  const { LegacyListShow } = useSelector(
    (state) => state.LegacyListShowReducer
  );

  useEffect(() => {
    dispatch(LegacyListShowAction(userData?.user?.user_id));
  }, []);

  const [totalLenght, setTotalLenght] = useState();

  useEffect(() => {
    if (LegacyListShow) {
      setTotalLenght(Object.keys(LegacyListShow).length);
    }
  }, [LegacyListShow]);

  const [rerender, setRerender] = useState(false);
  // legacy will
  const [description, setdescription] = useState("");
  const [hint_video, sethint_video] = useState("");
  const [document, setdocument] = useState("");
  const [self_proven, setself_proven] = useState("");
  const [distribution_sheet, setdistribution_sheet] = useState("");

  const handleDocumet = (file) => {
    setdocument(file);
  };
  // Legacy Funeral
  const [Funeraldescription, setFuneraldescription] = useState("");
  const [Funeralhint_video, setFuneralhint_video] = useState("");
  const [Funeraldocument, setFuneraldocument] = useState("");
  const [Funeralpackage_location, setFuneralpackage_location] = useState("");
  const [Funeralwish, setFuneralwish] = useState("");
  const [Funeraltype, setFuneraltype] = useState("");

  // Legacy Funeral
  const [legacy_retirementdescription, setlegacy_retirementdescription] =
    useState("");
  const [legacy_retirementhint_video, setlegacy_retirementhint_video] =
    useState("");
  const [legacy_retirementdocument, setlegacy_retirementdocument] =
    useState("");

  const legacy_retirementhandleDocumet = (file) => {
    setlegacy_retirementdocument(file);
  };

  const FuneralhandleDocumet = (file) => {
    setFuneraldocument(file);
  };

  const handleDistribution = (file) => {
    setdistribution_sheet(file);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("owner", userData?.user?.user_id);
    if (distribution_sheet) {
      formData.append("distribution_sheet", distribution_sheet);
    }
    // legacy will
    if (self_proven) {
      formData.append("legacy_will.self_proven", self_proven);
    }
    if (hint_video) {
      formData.append("legacy_will.hint_video", hint_video);
    }
    if (document) {
      formData.append("legacy_will.document", document);
    }
    if (description) {
      formData.append("legacy_will.description", description);
    }

    // legacy Insurance
    legacy_insurance.forEach((item, index) => {
      if (item.description) {
        formData.append(
          `legacy_insurance[${index}].description`,
          item.description
        );
      }
      if (item.company) {
        formData.append(`legacy_insurance[${index}].company`, item.company);
      }
      // Add other properties as needed and check for their values before appending
      if (item.document) {
        formData.append(`legacy_insurance[${index}].document`, item.document);
      }
      if (item.hint_video) {
        formData.append(
          `legacy_insurance[${index}].hint_video`,
          item.hint_video
        );
      }
    });

    // Legacy Funeral

    if (Funeraldescription) {
      formData.append("legacy_funeral.description", Funeraldescription);
    }
    if (Funeralhint_video) {
      formData.append("legacy_funeral.hint_video", Funeralhint_video);
    }
    if (Funeraldocument) {
      formData.append("legacy_funeral.document", Funeraldocument);
    }
    if (Funeralpackage_location) {
      formData.append(
        "legacy_funeral.package_location",
        Funeralpackage_location
      );
    }
    if (Funeralwish) {
      formData.append("legacy_funeral.wish", Funeralwish);
    }
    if (Funeraltype) {
      formData.append("legacy_funeral.type", Funeraltype);
    }

    /* legacy Accounts */

    legacy_accounts.forEach((item, index) => {
      if (item.description) {
        formData.append(
          `legacy_accounts[${index}].description`,
          item.description
        );
      }
      if (item.name) {
        formData.append(`legacy_accounts[${index}].name`, item.name);
      }
      // Add other properties as needed and check for their values before appending
      if (item.document) {
        formData.append(`legacy_accounts[${index}].document`, item.document);
      }
      if (item.hint_video) {
        formData.append(
          `legacy_accounts[${index}].hint_video`,
          item.hint_video
        );
      }
    });

    /* Legacy Pension */

    legacy_pension.forEach((item, index) => {
      if (item.description) {
        formData.append(
          `legacy_pension[${index}].description`,
          item.description
        );
      }
      if (item.name) {
        formData.append(`legacy_pension[${index}].name`, item.name);
      }
      // Add other properties as needed and check for their values before appending
      if (item.document) {
        formData.append(`legacy_pension[${index}].document`, item.document);
      }
      if (item.hint_video) {
        formData.append(`legacy_pension[${index}].hint_video`, item.hint_video);
      }
    });

    /* Legacy Dept */

    legacy_debt.forEach((item, index) => {
      if (item.description) {
        formData.append(`legacy_debt[${index}].description`, item.description);
      }
      if (item.lender_name) {
        formData.append(`legacy_debt[${index}].lender_name`, item.lender_name);
      }
      if (item.principal_amount) {
        formData.append(
          `legacy_debt[${index}].principal_amount`,
          item.principal_amount
        );
      }

      if (item.interest_rate) {
        formData.append(
          `legacy_debt[${index}].interest_rate`,
          item.interest_rate
        );
      }

      if (item.document) {
        formData.append(`legacy_debt[${index}].document`, item.document);
      }
      if (item.hint_video) {
        formData.append(`legacy_debt[${index}].hint_video`, item.hint_video);
      }
    });

    /* Legacy Divorce */

    legacy_divorce.forEach((item, index) => {
      if (item.description) {
        formData.append(
          `legacy_divorce[${index}].description`,
          item.description
        );
      }
      if (item.name) {
        formData.append(`legacy_divorce[${index}].name`, item.name);
      }
      if (item.divorce_date) {
        const formattedDate = moment(item.divorce_date).format("YYYY-MM-DD");
        formData.append(`legacy_divorce[${index}].divorce_date`, formattedDate);
      }
      if (item.document) {
        formData.append(`legacy_divorce[${index}].document`, item.document);
      }
      if (item.hint_video) {
        formData.append(`legacy_divorce[${index}].hint_video`, item.hint_video);
      }
    });

    // Legacy Retirement
    if (legacy_retirementdescription) {
      formData.append(
        "legacy_retirement.description",
        legacy_retirementdescription
      );
    }
    if (legacy_retirementhint_video) {
      formData.append(
        "legacy_retirement.hint_video",
        legacy_retirementhint_video
      );
    }
    if (legacy_retirementdocument) {
      formData.append("legacy_retirement.document", legacy_retirementdocument);
    }

    /* Legacy property */

    LegacyProperty.forEach((item, index) => {
      if (item.description) {
        formData.append(
          `legacy_property[${index}].description`,
          item.description
        );
      }
      if (item.price) {
        formData.append(`legacy_property[${index}].price`, item.price);
      }
      if (item.address) {
        formData.append(`legacy_property[${index}].address`, item.address);
      }
      if (item.document) {
        formData.append(`legacy_property[${index}].document`, item.document);
      }
      if (item.hint_video) {
        formData.append(
          `legacy_property[${index}].hint_video`,
          item.hint_video
        );
      }
    });

    /* Legacy property */

    legacy_vehicle.forEach((item, index) => {
      if (item.description) {
        formData.append(
          `legacy_vehicle[${index}].description`,
          item.description
        );
      }
      if (item.model) {
        formData.append(`legacy_vehicle[${index}].model`, item.model);
      }

      if (item.color) {
        formData.append(`legacy_vehicle[${index}].color`, item.color);
      }
      if (item.vin) {
        formData.append(`legacy_vehicle[${index}].vin`, item.vin);
      }
      if (item.document) {
        formData.append(`legacy_vehicle[${index}].document`, item.document);
      }

      if (item.hint_video) {
        formData.append(`legacy_vehicle[${index}].hint_video`, item.hint_video);
      }
    });

    /* Legacy Investment */

    legacy_investment.forEach((item, index) => {
      if (item.description) {
        formData.append(
          `legacy_investment[${index}].description`,
          item.description
        );
      }

      if (item.date_invested) {
        const formattedDate = moment(item.date_invested).format("YYYY-MM-DD");
        formData.append(
          `legacy_investment[${index}].date_invested`,
          formattedDate
        );
      }
      if (item.name) {
        formData.append(`legacy_investment[${index}].name`, item.name);
      }
      if (item.amount) {
        formData.append(`legacy_investment[${index}].amount`, item.amount);
      }
      if (item.document) {
        formData.append(`legacy_investment[${index}].document`, item.document);
      }

      if (item.hint_video) {
        formData.append(
          `legacy_investment[${index}].hint_video`,
          item.hint_video
        );
      }
    });

    dispatch(LegacyAddAction(formData));
    setRerender(true);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: " ",
        text: "Sucsuccessfully Added!",
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 1000,
      }).then(() => {
        window.location.reload();
      });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setLoading(true);
      setRerender(true);
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
    }, 2000);
  }, []);

  // lagacy Iegacy insurance

  const [legacy_insurance, setlegacy_insurance] = useState([
    { description: "", company: "", document: "", hint_video: "" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...legacy_insurance];
    list[index][name] = value;
    setlegacy_insurance(list);
  };

  const handleFileUpload = (file, field, index) => {
    const list = [...legacy_insurance];
    list[index][field] = file;
    setlegacy_insurance(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...legacy_insurance];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    setlegacy_insurance(remove);
  };

  const handleAddClick = () => {
    setlegacy_insurance([
      ...legacy_insurance,
      { description: " ", company: "", document: null, hint_video: "" },
    ]);
  };

  // lagacy Iegacy insurance

  /* legacy Accounts */

  const [legacy_accounts, setlegacy_accounts] = useState([
    { description: "", name: "", document: null, hint_video: "" },
  ]);

  const handleChangeLegacyAcc = (e, index) => {
    const { name, value } = e.target;
    const list = [...legacy_accounts];
    list[index][name] = value;
    setlegacy_accounts(list);
  };

  const handleLegacyAccFileUpload = (file, field, index) => {
    const list = [...legacy_accounts];
    list[index][field] = file;
    setlegacy_accounts(list);
  };

  const handleRemoveClickAcc = (index) => {
    const list = [...legacy_accounts];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    setlegacy_accounts(remove);
  };

  const handleAddClickAcc = () => {
    setlegacy_accounts([
      ...legacy_accounts,
      { description: "", name: "", document: null, hint_video: "" },
    ]);
  };

  /* legacy Accounts */

  /* Legacy Pension */

  const [legacy_pension, setlegacy_pension] = useState([
    { description: "", name: "", document: null, hint_video: "" },
  ]);

  const handleChangelegacy_pension = (e, index) => {
    const { name, value } = e.target;
    const list = [...legacy_pension];
    list[index][name] = value;
    setlegacy_pension(list);
  };

  const handlelegacy_pensionFileUpload = (file, field, index) => {
    const list = [...legacy_pension];
    list[index][field] = file;
    setlegacy_pension(list);
  };

  const handleRemoveClicklegacy_pension = (index) => {
    const list = [...legacy_pension];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    setlegacy_pension(remove);
  };

  const handleAddClicklegacy_pension = () => {
    setlegacy_pension([
      ...legacy_pension,
      { description: "", name: "", document: null, hint_video: "" },
    ]);
  };

  /* Legacy Pension */

  /* Legacy Debt */

  const [legacy_debt, setlegacy_debt] = useState([
    {
      description: "",
      lender_name: "",
      principal_amount: "",
      interest_rate: "",
      document: null,
      hint_video: "",
    },
  ]);

  const handleChangelegacy_debt = (e, index) => {
    const { name, value } = e.target;
    const list = [...legacy_debt];
    list[index][name] = value;
    setlegacy_debt(list);
  };

  const handlelegacy_debtFileUpload = (file, field, index) => {
    const list = [...legacy_debt];
    list[index][field] = file;
    setlegacy_debt(list);
  };

  const handleRemoveClicklegacy_debt = (index) => {
    const list = [...legacy_debt];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    setlegacy_debt(remove);
  };

  const handleAddClicklegacy_debt = () => {
    setlegacy_debt([
      ...legacy_debt,
      {
        description: "",
        lender_name: "",
        principal_amount: "",
        interest_rate: "",
        document: null,
        hint_video: "",
      },
    ]);
  };

  /* Legacy Debt */

  /* Legacy Divorce */

  const [legacy_divorce, setlegacy_divorce] = useState([
    {
      description: "",
      name: "",
      divorce_date: null,
      document: null,
      hint_video: "",
    },
  ]);

  const handleChangelegacy_divorce = (e, index) => {
    const { name, value } = e.target;
    const list = [...legacy_divorce];
    list[index][name] = value;
    setlegacy_divorce(list);
  };

  const handlelegacy_divorceFileUpload = (file, field, index) => {
    const list = [...legacy_divorce];
    list[index][field] = file;
    setlegacy_divorce(list);
  };

  const handleRemoveClicklegacy_divorce = (index) => {
    const list = [...legacy_divorce];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    setlegacy_divorce(remove);
  };

  const handleAddClicklegacy_divorce = () => {
    setlegacy_divorce([
      ...legacy_divorce,
      {
        description: "",
        name: "",
        divorce_date: null,
        document: null,
        hint_video: "",
      },
    ]);
  };

  // newwwwwwwwwwwwww

  /* Legacy Property */

  const [LegacyProperty, setLegacyProperty] = useState([
    {
      description: "",
      address: "",
      price: "",
      document: null,
      hint_video: "",
    },
  ]);

  const handleChangeLegacyProperty = (e, index) => {
    const { name, value } = e.target;
    const list = [...LegacyProperty];
    list[index][name] = value;
    setLegacyProperty(list);
  };

  const handleLegacyPropertyFileUpload = (file, field, index) => {
    const list = [...LegacyProperty];
    list[index][field] = file;
    setLegacyProperty(list);
  };

  const handleRemoveClickLegacyProperty = (index) => {
    const list = [...LegacyProperty];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    setLegacyProperty(remove);
  };

  const handleAddClickLegacyProperty = () => {
    setLegacyProperty([
      ...LegacyProperty,
      {
        description: "",
        address: "",
        price: "",
        document: null,
        hint_video: "",
      },
    ]);
  };

  /*Legacy Vehicle */

  const [legacy_vehicle, setlegacy_vehicle] = useState([
    {
      model: "",
      color: "",
      vin: "",
      description: "",
      document: null,
      hint_video: "",
    },
  ]);

  const handleChangelegacy_vehicle = (e, index) => {
    const { name, value } = e.target;
    const list = [...legacy_vehicle];
    list[index][name] = value;
    setlegacy_vehicle(list);
  };

  const handlelegacy_vehicleFileUpload = (file, field, index) => {
    const list = [...legacy_vehicle];
    list[index][field] = file;
    setlegacy_vehicle(list);
  };

  const handleRemoveClicklegacy_vehicle = (index) => {
    const list = [...legacy_vehicle];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    setlegacy_vehicle(remove);
  };

  const handleAddClicklegacy_vehicle = () => {
    setlegacy_vehicle([
      ...legacy_vehicle,
      {
        model: "",
        color: "",
        vin: "",
        description: "",
        document: null,
        hint_video: "",
      },
    ]);
  };

  /*Legacy Investment */

  const [legacy_investment, setlegacy_investment] = useState([
    {
      name: "",
      amount: "",
      description: "",
      document: null,
      hint_video: "",
    },
  ]);

  const handleChangelegacy_investment = (e, index) => {
    const { name, value } = e.target;
    const list = [...legacy_investment];
    list[index][name] = value;
    setlegacy_investment(list);
  };

  const handlelegacy_investmentFileUpload = (file, field, index) => {
    const list = [...legacy_investment];
    list[index][field] = file;
    setlegacy_investment(list);
  };

  const handleRemoveClicklegacy_investment = (index) => {
    const list = [...legacy_investment];
    const remove = list.filter((_, indexFilter) => !(indexFilter === index));
    setlegacy_investment(remove);
  };

  const handleAddClicklegacy_investment = () => {
    setlegacy_investment([
      ...legacy_investment,
      {
        name: "",
        amount: "",
        description: "",
        document: null,
        hint_video: "",
      },
    ]);
  };

  return (
    <div>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          {totalLenght == 0 ? (
            <>
              <div className="">
                <div className="main-page-div bg-green-200">
                  <h1 className="heading-top">Add Legacy</h1>
                  <div className="common-divbg bg-white">
                    <div className="events-div my-12 ">
                      <div className="mb-6">
                        <label className="heading-title">
                          Distribution sheet
                        </label>
                        <FileUploader
                          handleChange={(e) => {
                            handleDistribution(e);
                          }}
                          name="file"
                          types={fileTypes}
                        />
                      </div>
                      <div className="mb-12">
                        <Collapse>
                          <Panel header="Legacy will" key="1">
                            <>
                              {/* legacy will */}
                              <div className="legacy">
                                <h1 className="legacy-headingmainshow text-2xl ">
                                  Legacy will :{" "}
                                </h1>
                                <div className="">
                                  <label className="heading-title">
                                    Description
                                  </label>
                                  <textarea
                                    value={description}
                                    onChange={(e) => {
                                      setdescription(e.target.value);
                                    }}
                                    placeholder="Add Description"
                                    className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                  ></textarea>
                                </div>

                                <div className="flex items-center gap-4">
                                  <label className="heading-title">
                                    Self Proven
                                  </label>
                                  <input
                                    checked={self_proven}
                                    onChange={(e) => {
                                      setself_proven(e.target.checked);
                                    }}
                                    type="checkbox"
                                    className="w-5 h-5"
                                  />
                                </div>

                                <div className="">
                                  <label className="heading-title">
                                    Document
                                  </label>
                                  <FileUploader
                                    handleChange={(e) => {
                                      handleDocumet(e);
                                    }}
                                    name="file"
                                    types={fileTypes}
                                  />
                                </div>

                                <div className="">
                                  <label className="heading-title">
                                    Add Hint
                                  </label>
                                  {/* <FileUploader
                                    handleChange={(e) => {
                                      handleVedio(e);
                                    }}
                                    name="file"
                                    types={fileTypes}
                                  /> */}
                                  <input
                                    type="text"
                                    placeholder="Add hint"
                                    className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                    value={hint_video}
                                    onChange={(e) => {
                                      sethint_video(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          </Panel>
                          <Panel header="Legacy Insurance" key="2">
                            <>
                              {/* legacy Insurance */}

                              <div>
                                <h1 className="legacy-headingmainshow text-2xl mt-6">
                                  Legacy Insurance :{" "}
                                </h1>

                                {legacy_insurance.map((item, i) => {
                                  return (
                                    <div className="box">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="">
                                          <label className="heading-title">
                                            Description
                                          </label>
                                          <textarea
                                            value={item.description}
                                            onChange={(e) =>
                                              handleInputChange(e, i)
                                            }
                                            name="description"
                                            placeholder="Add Description"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>
                                        <div className="">
                                          <label className="heading-title">
                                            Company
                                          </label>
                                          <textarea
                                            value={item.company}
                                            onChange={(e) =>
                                              handleInputChange(e, i)
                                            }
                                            name="company"
                                            placeholder="Add Company"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Document
                                        </label>
                                        <FileUploader
                                          name="document" // Use the field name from your state
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handleFileUpload(
                                              file,
                                              "document",
                                              i
                                            )
                                          } // Pass field name as "document"
                                        />
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Add Hint
                                        </label>
                                        {/* <FileUploader
                                          name="hint_video" // Use the field name from your state
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handleFileUpload(
                                              file,
                                              "hint_video",
                                              i
                                            )
                                          } // Pass field name as "hint_video"
                                        /> */}
                                        <input
                                          type="text"
                                          placeholder="Add Hint"
                                          className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                          value={item.hint_video}
                                          name="hint_video"
                                          onChange={(e) =>
                                            handleInputChange(e, i)
                                          }
                                        />
                                      </div>

                                      <div className="btn-box">
                                        {legacy_insurance.length - 1 === i && (
                                          <button
                                            className="add-legacybtn"
                                            onClick={handleAddClick}
                                          >
                                            Add
                                          </button>
                                        )}

                                        {legacy_insurance.length !== 1 && (
                                          <button
                                            className="remove-legacybtn"
                                            onClick={() => handleRemoveClick(i)}
                                          >
                                            Remove
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          </Panel>
                          <Panel header="Legacy Funeral" key="3">
                            <>
                              {/* Legacy Funeral */}
                              <div className="legacy">
                                <h1 className="legacy-headingmainshow text-2xl ">
                                  Legacy Funeral :{" "}
                                </h1>
                                <div className="">
                                  <label className="heading-title">
                                    Description
                                  </label>
                                  <textarea
                                    value={Funeraldescription}
                                    onChange={(e) => {
                                      setFuneraldescription(e.target.value);
                                    }}
                                    placeholder="Add Description"
                                    className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                  ></textarea>
                                </div>

                                <div className="input-boxdiv mb-4">
                                  <label className="heading-title">
                                    {" "}
                                    Package Location
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Add  Package Location"
                                    className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                    value={Funeralpackage_location}
                                    onChange={(e) => {
                                      setFuneralpackage_location(
                                        e.target.value
                                      );
                                    }}
                                  />
                                </div>

                                <div className="input-boxdiv mb-4">
                                  <label className="heading-title">Wish</label>
                                  <input
                                    type="text"
                                    placeholder="Add Wish"
                                    className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                    value={Funeralwish}
                                    onChange={(e) => {
                                      setFuneralwish(e.target.value);
                                    }}
                                  />
                                </div>

                                <div className="input-boxdiv mb-4">
                                  <label className="heading-title">Type</label>
                                  <input
                                    type="text"
                                    placeholder="Add Type"
                                    className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                    value={Funeraltype}
                                    onChange={(e) => {
                                      setFuneraltype(e.target.value);
                                    }}
                                  />
                                </div>

                                <div className="">
                                  <label className="heading-title">
                                    Document
                                  </label>
                                  <FileUploader
                                    handleChange={(e) => {
                                      FuneralhandleDocumet(e);
                                    }}
                                    name="file"
                                    types={fileTypes}
                                  />
                                </div>

                                <div className="">
                                  <label className="heading-title">
                                    Add Hint
                                  </label>
                                  {/* <FileUploader
                                    handleChange={(e) => {
                                      FuneralhandleVedio(e);
                                    }}
                                    name="file"
                                    types={fileTypes}
                                  /> */}
                                  <input
                                    type="text"
                                    placeholder="Add Hint"
                                    className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                    value={Funeralhint_video}
                                    onChange={(e) => {
                                      setFuneralhint_video(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          </Panel>
                          <Panel header="Legacy Accounts" key="4">
                            <>
                              {/* legacy Accounts */}

                              <div>
                                <h1 className="legacy-headingmainshow text-2xl mt-6">
                                  legacy Accounts :{" "}
                                </h1>

                                {legacy_accounts.map((item, i) => {
                                  return (
                                    <div className="box">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="">
                                          <label className="heading-title">
                                            Description
                                          </label>
                                          <textarea
                                            value={item.description}
                                            onChange={(e) =>
                                              handleChangeLegacyAcc(e, i)
                                            }
                                            name="description"
                                            placeholder="Add Description"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="">
                                          <label className="heading-title">
                                            Name
                                          </label>
                                          <textarea
                                            value={item.name}
                                            onChange={(e) =>
                                              handleChangeLegacyAcc(e, i)
                                            }
                                            name="name"
                                            placeholder="Add Name"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Document
                                        </label>
                                        <FileUploader
                                          name="document"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handleLegacyAccFileUpload(
                                              file,
                                              "document",
                                              i
                                            )
                                          }
                                        />
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Add Hint
                                        </label>
                                        {/* <FileUploader
                                          name="hint_video" // Use the field name from your state
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handleLegacyAccFileUpload(
                                              file,
                                              "hint_video",
                                              i
                                            )
                                          } // Pass field name as "hint_video"
                                        /> */}
                                        <input
                                          type="text"
                                          placeholder="Add Hint"
                                          className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                          value={item.hint_video}
                                          name="hint_video"
                                          onChange={(e) =>
                                            handleChangeLegacyAcc(e, i)
                                          }
                                        />
                                      </div>

                                      <div className="btn-box">
                                        {legacy_accounts.length - 1 === i && (
                                          <button
                                            className="add-legacybtn"
                                            onClick={handleAddClickAcc}
                                          >
                                            Add
                                          </button>
                                        )}
                                        {legacy_accounts.length !== 1 && (
                                          <button
                                            className="remove-legacybtn"
                                            onClick={() =>
                                              handleRemoveClickAcc(i)
                                            }
                                          >
                                            Remove
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          </Panel>
                          <Panel header="Legacy Pension" key="5">
                            <>
                              {/* Legacy Pension */}

                              <div>
                                <h1 className="legacy-headingmainshow text-2xl mt-6">
                                  Legacy Pension :{" "}
                                </h1>

                                {legacy_pension.map((item, i) => {
                                  return (
                                    <div className="box">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="">
                                          <label className="heading-title">
                                            Description
                                          </label>
                                          <textarea
                                            value={item.description}
                                            onChange={(e) =>
                                              handleChangelegacy_pension(e, i)
                                            }
                                            name="description"
                                            placeholder="Add Description"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="">
                                          <label className="heading-title">
                                            Name
                                          </label>
                                          <textarea
                                            value={item.name}
                                            onChange={(e) =>
                                              handleChangelegacy_pension(e, i)
                                            }
                                            name="name"
                                            placeholder="Add Name"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Document
                                        </label>
                                        <FileUploader
                                          name="document"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_pensionFileUpload(
                                              file,
                                              "document",
                                              i
                                            )
                                          }
                                        />
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Add Hint
                                        </label>
                                        {/* <FileUploader
                                          name="hint_video" // Use the field name from your state
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_pensionFileUpload(
                                              file,
                                              "hint_video",
                                              i
                                            )
                                          } // Pass field name as "hint_video"
                                        /> */}
                                        <input
                                          type="text"
                                          placeholder="Add Hint"
                                          className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                          value={item.hint_video}
                                          name="hint_video"
                                          onChange={(e) =>
                                            handleChangelegacy_pension(e, i)
                                          }
                                        />
                                      </div>

                                      <div className="btn-box">
                                        {legacy_pension.length - 1 === i && (
                                          <button
                                            className="add-legacybtn"
                                            onClick={
                                              handleAddClicklegacy_pension
                                            }
                                          >
                                            Add
                                          </button>
                                        )}
                                        {legacy_pension.length !== 1 && (
                                          <button
                                            className="remove-legacybtn"
                                            onClick={() =>
                                              handleRemoveClicklegacy_pension(i)
                                            }
                                          >
                                            Remove
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          </Panel>
                          <Panel header="Legacy Debt" key="6">
                            <>
                              {/* Legacy Debt */}

                              <div>
                                <h1 className="legacy-headingmainshow text-2xl mt-6">
                                  Legacy Debt :{" "}
                                </h1>

                                {legacy_debt.map((item, i) => {
                                  return (
                                    <div className="box">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="">
                                          <label className="heading-title">
                                            Description
                                          </label>
                                          <textarea
                                            value={item.description}
                                            onChange={(e) =>
                                              handleChangelegacy_debt(e, i)
                                            }
                                            name="description"
                                            placeholder="Add Description"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="">
                                          <label className="heading-title">
                                            Lender Name
                                          </label>
                                          <textarea
                                            value={item.lender_name}
                                            onChange={(e) =>
                                              handleChangelegacy_debt(e, i)
                                            }
                                            name="lender_name"
                                            placeholder="Add Lender Name"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="">
                                          <label className="heading-title">
                                            Principal Amount
                                          </label>
                                          <textarea
                                            value={item.principal_amount}
                                            onChange={(e) =>
                                              handleChangelegacy_debt(e, i)
                                            }
                                            name="principal_amount"
                                            placeholder="Add Principal Amount"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="">
                                          <label className="heading-title">
                                            Interest Rate
                                          </label>
                                          <textarea
                                            value={item.interest_rate}
                                            onChange={(e) =>
                                              handleChangelegacy_debt(e, i)
                                            }
                                            name="interest_rate"
                                            placeholder="Add Interest Rate"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Document
                                        </label>
                                        <FileUploader
                                          name="document"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_debtFileUpload(
                                              file,
                                              "document",
                                              i
                                            )
                                          }
                                        />
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Add Hint
                                        </label>
                                        {/* <FileUploader
                                          name="hint_video"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_debtFileUpload(
                                              file,
                                              "hint_video",
                                              i
                                            )
                                          }
                                        /> */}
                                        <input
                                          type="text"
                                          placeholder="Add Hint"
                                          className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                          value={item.hint_video}
                                          name="hint_video"
                                          onChange={(e) =>
                                            handleChangelegacy_debt(e, i)
                                          }
                                        />
                                      </div>

                                      <div className="btn-box">
                                        {legacy_debt.length - 1 === i && (
                                          <button
                                            className="add-legacybtn"
                                            onClick={handleAddClicklegacy_debt}
                                          >
                                            Add
                                          </button>
                                        )}
                                        {legacy_debt.length !== 1 && (
                                          <button
                                            className="remove-legacybtn"
                                            onClick={() =>
                                              handleRemoveClicklegacy_debt(i)
                                            }
                                          >
                                            Remove
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          </Panel>
                          <Panel header="Legacy Divorce" key="7">
                            <>
                              {/* legacy_divorce */}

                              <div>
                                <h1 className="legacy-headingmainshow text-2xl mt-6">
                                  Legacy Divorce :{" "}
                                </h1>
                                {legacy_divorce.map((item, i) => {
                                  return (
                                    <div className="box">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="">
                                          <label className="heading-title">
                                            Description
                                          </label>
                                          <textarea
                                            value={item.description}
                                            onChange={(e) =>
                                              handleChangelegacy_divorce(e, i)
                                            }
                                            name="description"
                                            placeholder="Add Description"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="">
                                          <label className="heading-title">
                                            Name
                                          </label>
                                          <textarea
                                            value={item.name}
                                            onChange={(e) =>
                                              handleChangelegacy_divorce(e, i)
                                            }
                                            name="name"
                                            placeholder="Add Name"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="input-add">
                                          <div>
                                            <label className="heading-title">
                                              Divorce Date
                                            </label>
                                          </div>
                                          <div>
                                            <LocalizationProvider
                                              dateAdapter={AdapterDateFns}
                                            >
                                              <DesktopDatePicker
                                                formatDate={(divorce_date) =>
                                                  moment(divorce_date).format(
                                                    "DD-MM-YYYY"
                                                  )
                                                }
                                                name="divorce_date"
                                                minDate={new Date()}
                                                value={item.divorce_date}
                                                onChange={(newDate) => {
                                                  const list = [
                                                    ...legacy_divorce,
                                                  ];
                                                  list[i].divorce_date =
                                                    newDate;
                                                  setlegacy_divorce(list);
                                                }}
                                                disablePast
                                                renderInput={(params) => (
                                                  <TextField {...params} />
                                                )}
                                              />
                                            </LocalizationProvider>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Document
                                        </label>
                                        <FileUploader
                                          name="document"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_divorceFileUpload(
                                              file,
                                              "document",
                                              i
                                            )
                                          }
                                        />
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Add Hint
                                        </label>
                                        {/* <FileUploader
                                          name="hint_video"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_divorceFileUpload(
                                              file,
                                              "hint_video",
                                              i
                                            )
                                          }
                                        /> */}
                                        <input
                                          type="text"
                                          placeholder="Add Hint"
                                          className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                          value={item.hint_video}
                                          name="hint_video"
                                          onChange={(e) =>
                                            handleChangelegacy_divorce(e, i)
                                          }
                                        />
                                      </div>

                                      <div className="btn-box">
                                        {legacy_divorce.length - 1 === i && (
                                          <button
                                            className="add-legacybtn"
                                            onClick={
                                              handleAddClicklegacy_divorce
                                            }
                                          >
                                            Add
                                          </button>
                                        )}
                                        {legacy_divorce.length !== 1 && (
                                          <button
                                            className="remove-legacybtn"
                                            onClick={() =>
                                              handleRemoveClicklegacy_divorce(i)
                                            }
                                          >
                                            Remove
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          </Panel>
                          <Panel header="Legacy Retirement" key="8">
                            <>
                              {/* legacy will */}
                              <div className="legacy">
                                <h1 className="legacy-headingmainshow text-2xl ">
                                  Legacy Retirement :{" "}
                                </h1>
                                <div className="">
                                  <label className="heading-title">
                                    Description
                                  </label>
                                  <textarea
                                    value={legacy_retirementdescription}
                                    onChange={(e) => {
                                      setlegacy_retirementdescription(
                                        e.target.value
                                      );
                                    }}
                                    placeholder="Add Description"
                                    className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                  ></textarea>
                                </div>

                                <div className="">
                                  <label className="heading-title">
                                    Document
                                  </label>
                                  <FileUploader
                                    handleChange={(e) => {
                                      legacy_retirementhandleDocumet(e);
                                    }}
                                    name="file"
                                    types={fileTypes}
                                  />
                                </div>

                                <div className="">
                                  <label className="heading-title">
                                    Add Hint
                                  </label>
                                  {/* <FileUploader
                                    handleChange={(e) => {
                                      legacy_retirementhandleVedio(e);
                                    }}
                                    name="file"
                                    types={fileTypes}
                                  /> */}
                                  <input
                                    type="text"
                                    placeholder="Add Hint"
                                    className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                    value={legacy_retirementhint_video}
                                    name="hint_video"
                                    onChange={(e) =>
                                      setlegacy_retirementhint_video(
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </>
                          </Panel>

                          {/* New modal  */}

                          <Panel header="Legacy Property" key="9">
                            <>
                              {/* LegacyProperty */}

                              <div>
                                <h1 className="legacy-headingmainshow text-2xl mt-6">
                                  Legacy Property :{" "}
                                </h1>
                                {LegacyProperty.map((item, i) => {
                                  return (
                                    <div className="box">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="">
                                          <label className="heading-title">
                                            Description
                                          </label>
                                          <textarea
                                            value={item.description}
                                            onChange={(e) =>
                                              handleChangeLegacyProperty(e, i)
                                            }
                                            name="description"
                                            placeholder="Add Description"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="">
                                          <label className="heading-title">
                                            Address
                                          </label>
                                          <textarea
                                            value={item.address}
                                            onChange={(e) =>
                                              handleChangeLegacyProperty(e, i)
                                            }
                                            name="address"
                                            placeholder="Add Address"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="input-boxdiv mb-4">
                                          <label className="heading-title">
                                            {" "}
                                            Price
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="Add Price"
                                            name="price"
                                            className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                            value={item.price}
                                            onChange={(e) =>
                                              handleChangeLegacyProperty(e, i)
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Document
                                        </label>
                                        <FileUploader
                                          name="document"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handleLegacyPropertyFileUpload(
                                              file,
                                              "document",
                                              i
                                            )
                                          }
                                        />
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Add Hint
                                        </label>
                                        {/* <FileUploader
                                          name="hint_video"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handleLegacyPropertyFileUpload(
                                              file,
                                              "hint_video",
                                              i
                                            )
                                          }
                                        /> */}
                                        <input
                                          type="text"
                                          placeholder="Add Hint"
                                          className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                          value={item.hint_video}
                                          name="hint_video"
                                          onChange={(e) =>
                                            handleChangeLegacyProperty(e, i)
                                          }
                                        />
                                      </div>

                                      <div className="btn-box">
                                        {LegacyProperty.length - 1 === i && (
                                          <button
                                            className="add-legacybtn"
                                            onClick={
                                              handleAddClickLegacyProperty
                                            }
                                          >
                                            Add
                                          </button>
                                        )}
                                        {LegacyProperty.length !== 1 && (
                                          <button
                                            className="remove-legacybtn"
                                            onClick={() =>
                                              handleRemoveClickLegacyProperty(i)
                                            }
                                          >
                                            Remove
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          </Panel>

                          <Panel header="Legacy Vehicle" key="10">
                            <>
                              {/* LegacyProperty */}

                              <div>
                                <h1 className="legacy-headingmainshow text-2xl mt-6">
                                  Legacy Vehicle :{" "}
                                </h1>
                                {legacy_vehicle?.map((item, i) => {
                                  return (
                                    <div className="box">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="">
                                          <label className="heading-title">
                                            Description
                                          </label>
                                          <textarea
                                            value={item.description}
                                            onChange={(e) =>
                                              handleChangelegacy_vehicle(e, i)
                                            }
                                            name="description"
                                            placeholder="Add Description"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="">
                                          <label className="heading-title">
                                            Model
                                          </label>
                                          <textarea
                                            value={item.model}
                                            onChange={(e) =>
                                              handleChangelegacy_vehicle(e, i)
                                            }
                                            name="model"
                                            placeholder="Add Model"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="input-boxdiv mb-4">
                                          <label className="heading-title">
                                            {" "}
                                            Vin
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="Add Vin"
                                            name="vin"
                                            className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                            value={item.vin}
                                            onChange={(e) =>
                                              handleChangelegacy_vehicle(e, i)
                                            }
                                          />
                                        </div>

                                        <div className="input-boxdiv mb-4">
                                          <label className="heading-title">
                                            {" "}
                                            Color
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="Add color"
                                            name="color"
                                            className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                            value={item.color}
                                            onChange={(e) =>
                                              handleChangelegacy_vehicle(e, i)
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Document
                                        </label>
                                        <FileUploader
                                          name="document"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_vehicleFileUpload(
                                              file,
                                              "document",
                                              i
                                            )
                                          }
                                        />
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Add Hint
                                        </label>
                                        {/* <FileUploader
                                          name="hint_video"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_vehicleFileUpload(
                                              file,
                                              "hint_video",
                                              i
                                            )
                                          }
                                        /> */}
                                        <input
                                          type="text"
                                          placeholder="Add Hint"
                                          className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                          value={item.hint_video}
                                          name="hint_video"
                                          onChange={(e) =>
                                            handleChangelegacy_vehicle(e, i)
                                          }
                                        />
                                      </div>

                                      <div className="btn-box">
                                        {legacy_vehicle.length - 1 === i && (
                                          <button
                                            className="add-legacybtn"
                                            onClick={
                                              handleAddClicklegacy_vehicle
                                            }
                                          >
                                            Add
                                          </button>
                                        )}
                                        {legacy_vehicle.length !== 1 && (
                                          <button
                                            className="remove-legacybtn"
                                            onClick={() =>
                                              handleRemoveClicklegacy_vehicle(i)
                                            }
                                          >
                                            Remove
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          </Panel>

                          <Panel header="Legacy Insurance" key="11">
                            <>
                              {/* LegacyProperty */}

                              <div>
                                <h1 className="legacy-headingmainshow text-2xl mt-6">
                                  Legacy Investment :{" "}
                                </h1>
                                {legacy_investment.map((item, i) => {
                                  return (
                                    <div className="box">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="">
                                          <label className="heading-title">
                                            Description
                                          </label>
                                          <textarea
                                            value={item.description}
                                            onChange={(e) =>
                                              handleChangelegacy_investment(
                                                e,
                                                i
                                              )
                                            }
                                            name="description"
                                            placeholder="Add Description"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="">
                                          <label className="heading-title">
                                            name
                                          </label>
                                          <textarea
                                            value={item.name}
                                            onChange={(e) =>
                                              handleChangelegacy_investment(
                                                e,
                                                i
                                              )
                                            }
                                            name="name"
                                            placeholder="Add Name"
                                            className="w-full px-4 py-3 rounded-lg mt-2 border focus:outline-none"
                                          ></textarea>
                                        </div>

                                        <div className="input-boxdiv mb-4">
                                          <label className="heading-title">
                                            {" "}
                                            Amount
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="Add Amount"
                                            name="amount"
                                            className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                            value={item.amount}
                                            onChange={(e) =>
                                              handleChangelegacy_investment(
                                                e,
                                                i
                                              )
                                            }
                                          />
                                        </div>

                                        <div className="input-add">
                                          <div>
                                            <label className="heading-title">
                                              Date Invested
                                            </label>
                                          </div>
                                          <div>
                                            <LocalizationProvider
                                              dateAdapter={AdapterDateFns}
                                            >
                                              <DesktopDatePicker
                                                formatDate={(date_invested) =>
                                                  moment(date_invested).format(
                                                    "DD-MM-YYYY"
                                                  )
                                                }
                                                name="date_invested"
                                                minDate={new Date()}
                                                value={item.date_invested}
                                                onChange={(newDate) => {
                                                  const list = [
                                                    ...legacy_investment,
                                                  ];
                                                  list[i].date_invested =
                                                    newDate;
                                                  setlegacy_investment(list);
                                                }}
                                                disablePast
                                                renderInput={(params) => (
                                                  <TextField {...params} />
                                                )}
                                              />
                                            </LocalizationProvider>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Document
                                        </label>
                                        <FileUploader
                                          name="document"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_investmentFileUpload(
                                              file,
                                              "document",
                                              i
                                            )
                                          }
                                        />
                                      </div>

                                      <div className="">
                                        <label className="heading-title">
                                          Add Hint
                                        </label>
                                        {/* <FileUploader
                                          name="hint_video"
                                          types={fileTypes}
                                          handleChange={(file) =>
                                            handlelegacy_investmentFileUpload(
                                              file,
                                              "hint_video",
                                              i
                                            )
                                          }
                                        /> */}
                                        <input
                                          type="text"
                                          placeholder="Add Hint"
                                          className="w-full px-4 py-3 rounded-lg   mt-2 border focus:outline-none"
                                          value={item.hint_video}
                                          name="hint_video"
                                          onChange={(e) =>
                                            handleChangelegacy_investment(e, i)
                                          }
                                        />
                                      </div>

                                      <div className="btn-box">
                                        {legacy_investment.length - 1 === i && (
                                          <button
                                            className="add-legacybtn"
                                            onClick={
                                              handleAddClicklegacy_investment
                                            }
                                          >
                                            Add
                                          </button>
                                        )}
                                        {legacy_investment.length !== 1 && (
                                          <button
                                            className="remove-legacybtn"
                                            onClick={() =>
                                              handleRemoveClicklegacy_investment(
                                                i
                                              )
                                            }
                                          >
                                            Remove
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          </Panel>
                        </Collapse>
                      </div>

                      <div className="input-add">
                        <div className="flex gap-4 mt-12 mb-12">
                          <button
                            onClick={handleSubmit}
                            type="button"
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
            </>
          ) : (
            <>
              <Legacy_detailsShow />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Legacy;
