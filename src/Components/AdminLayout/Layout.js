import React from "react";
import Header from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Header">
        <Header toggle={props.toggle} setToggle={props.setToggle} />
      </div>
      <div className="DashBoard">
        <div className="Sidebar bg-texture">
          <Sidebar toggle={props.toggle} setToggle={props.setToggle} />
        </div>{" "}
        <div className="Outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
