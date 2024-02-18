import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "../../Redux/actions/AuthAction";
import swal from "sweetalert";
import { useMediaQuery } from "@material-ui/core";
import { PartneruserListGetAction } from "../../Redux/actions/UserAction";
import { PartnerSearchFilterAction } from "../../Redux/actions/PartnerAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.authReducer);

  const location = useLocation();
  const { pathname } = location;

  const [Showmenu, setShowmenu] = useState(false);

  const isGreaterThanOrEqual800px = useMediaQuery("(max-width: 800px)");
  const lessthen = useMediaQuery("(min-width: 800px)");

  useEffect(() => {
    if (lessthen) {
      setShowmenu(true);
    } else if (isGreaterThanOrEqual800px) {
      setShowmenu(false);
    }
  }, [lessthen, isGreaterThanOrEqual800px]);

  const handleLogout = () => {
    localStorage.removeItem("userData");

    dispatch(LogoutAction());
    navigate("/login");
    swal({
      title: "",
      icon: "/img/Memorial Information Logo.png",
      text: "Log out successfully!  ",
      className: "successAlert",
      buttons: false,
      timer: 1000,
      open: true,
    });
  };

  const { PartneruserListGet } = useSelector(
    (state) => state.PartneruserListGetReducer
  );

  useEffect(() => {
    dispatch(PartneruserListGetAction());
  }, []);

  return (
    <>
      <div className="">
        <header className="bg-[#486173] w-full  shadow-sm ">
          <div className="container flex flex-col items-center p-2 mx-auto md:flex-row">
            <a className="topheader flex items-center  font-medium text-white title-font ">
              Helping Families Manage The Final Transition Seamlessly
            </a>
            <nav className="flex items-center justify-center text-base md:ml-auto">
              <Link
                to="/vender/register"
                className="font-medium text-white text-[12px] mx-2 uppercase"
              >
                Become An MI Vender
              </Link>
              <Link
                to="/Partner/register"
                className="font-medium text-white text-[12px] mx-2 uppercase"
              >
                Become An MI Partner
              </Link>
              {!userData ? (
                <>
                  <Link
                    to="/login"
                    className="font-medium text-white text-[12px] mx-2 uppercase"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="font-medium text-white text-[12px] mx-2 uppercase"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    onClick={handleLogout}
                    className="font-medium text-white text-[12px] mx-2 uppercase"
                  >
                    Logout
                  </Link>
                </>
              )}

              <a href="#_" className="font-medium text-white text-[22px] mx-2">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#_" className="font-medium text-white text-[22px] mx-2">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#_" className="font-medium text-white text-[22px] mx-2">
                <i className="fa fa-facebook-f"></i>
              </a>
            </nav>
          </div>
        </header>
        <header className="bg-white w-full">
          <div className="container flex flex-col items-center p-2 py-3 mx-auto md:flex-row">
            <a className="topheader flex items-center font-medium text-white title-font md:mb-0">
              <img className="memoriallogoinfo" src="/img/Memorial 1.png" />
            </a>
            <nav className="flex items-center justify-center text-base md:ml-auto">
              <a href="#_" className="font-medium  mx-2">
                <img src="/img/Vector.png" />
              </a>
              <a href="#_" className="font-medium  mx-2">
                <h2 className="nedd-helptext">Need Help?</h2>
                <h2 className="nedd-helpnumber">941-334-2991</h2>
              </a>
            </nav>
          </div>
        </header>
        <header className="w-full border-t-[2px]">
          <i
            onClick={() => {
              setShowmenu(!Showmenu);
            }}
            className="fa fa-bars responsive-bars"
          ></i>

          <div className={Showmenu ? "activemenu" : "unactivemenu"}>
            {Showmenu && (
              <div className="container menuebar-list flex flex-col items-center  py-3 mx-auto md:flex-row">
                <Link
                  to="/"
                  className={
                    pathname == "/"
                      ? "activemainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                      : "mainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                  }
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  // className="mainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                  className={
                    pathname == "/about"
                      ? "activemainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                      : "mainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                  }
                >
                  About
                </Link>

                <Link
                  to="/services"
                  className={
                    pathname == "/services"
                      ? "activemainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                      : "mainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                  }
                >
                  Services
                </Link>

                <Link
                  to="/business/:businesType"
                  className={
                    pathname == "/business"
                      ? "activemainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                      : "mainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                  }
                >
                  <div class="dropdown">
                    <span>MI Vender</span>
                    <div class="dropdown-content">
                      {PartneruserListGet?.map((item) => (
                        <Link to={`/business/${item?.type}`}>
                          <div className="venderlist">{item?.type}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Link>

                <Link
                  to="/careers"
                  className={
                    pathname == "/careers"
                      ? "activemainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                      : "mainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                  }
                >
                  Careers
                </Link>

                {/* <Link
                  to="/blog"
                  className="mainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                >
                  Blog
                </Link> */}

                <Link
                  to="/contact"
                  className={
                    pathname == "/contact"
                      ? "activemainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                      : "mainmenu-heading flex items-center  font-medium title-font mx-8 md:mb-0"
                  }
                >
                  Contact an MI Partner
                </Link>
                <nav className="auth-login-signup flex items-center justify-center text-base md:ml-auto">
                  {userData && (
                    <>
                      {/* <Link to="/pre-plan" className="">
                        <button type="button" className="preplan-btn">
                          Pre-Plan
                        </button>
                      </Link> */}

                      <Link to="/dashboard" className="ml-4 ">
                        <button
                          type="button"
                          // onClick={handleLogout}
                          className="preplan-btn"
                        >
                          Dashboard
                        </button>
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
