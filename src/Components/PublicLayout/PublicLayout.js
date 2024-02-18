import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <>
      <div className="publicmain">
        <div className="publi-header">
          <Header />
        </div>
        <div className="publi-centersection">
          <Outlet />
        </div>

        <div className="publi-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PublicLayout;
