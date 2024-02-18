import React, { useEffect, useState } from "react";
import LoaderSpinner from "../Loader/Loader-spinner";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const { userData } = useSelector((state) => state.authReducer);

  return (
    <>
      {/* {loading ? (
        <LoaderSpinner />
      ) : ( */}
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Dashboard</h1>
          <div className="common-divbg bg-white">
            <h1 className="welcome-user h-[600px]">
              Welcome {userData?.user?.first_name}
            </h1>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Dashboard;
