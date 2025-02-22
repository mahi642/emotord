import React from "react";
import Menubar from "../components/MenuBar";
import Metrics from "../components/Metrics";
import "./Dashboard.css"; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Menubar />
      <div className="metrics1">
        <Metrics />
      </div>
    </div>
  );
};

export default Dashboard;

