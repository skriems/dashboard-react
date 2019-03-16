import React from "react";

import { Row } from "reactstrap";

import Header from "./header/Header";
import Sidebar from "./Sidebar";

/*
 * Dashboard Component
 */
const Dashboard = (props) => {
    return (
      <main>
        <Header {...props} />
        <Sidebar />
        <Row>
          <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>Dashboard</h2>
            </div>
            <h4>Content goes here...</h4>
          </div>
        </Row>
      </main>
    );
}

export default Dashboard;
