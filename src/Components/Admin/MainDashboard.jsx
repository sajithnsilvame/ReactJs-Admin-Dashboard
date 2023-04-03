import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../../assets/admin/css/sb-admin-2.css";
import "../../assets/admin/css/sb-admin-2.min.css";
import "../../assets/admin/fontawesome-free/css/all.min.css";
import "./Admin.css";
import "../../assets/admin/jquery/jquery.js";
import "../../assets/admin/bootstrap/js/bootstrap.bundle.min.js";
import "../../assets/admin/js/sb-admin-2.js";

const MainDashboard = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
