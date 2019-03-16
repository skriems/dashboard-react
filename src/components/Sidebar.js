import React, { useState } from "react";

import { Nav } from "reactstrap";
import * as Icon from "react-feather";

/*
 * Sidebar Component
 */
const Sidebar = (props) => {
  const [menu, setMenu] = useState('nonPanels');

  const changeMenu = (name) => {
    let newMenu = name === menu ? null : name;
    setMenu( newMenu );
  }

  return (
      <Nav
        id="Accordion"
        className="col-md-2 d-none d-md-block bg-light sidebar flex-column"
      >
        <div className="sidebar-sticky">
          <li className="nav-item">
            <h6
              className="nav-link sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
              onClick={() => changeMenu("menu1")}
              data-toggle="collapse"
              data-parent="#Accordion"
            >
              <Icon.Users size={12} />
              <span>Menu 1</span>
              {menu === "menu1" ? (
                <Icon.ChevronDown size={14} />
              ) : (
                <Icon.ChevronRight size={14} />
              )}
            </h6>
            <div
              id="menu1"
              className={
                "collapse" +
                (menu === "menu1" ? " show" : "")
              }
            >
              <ul className="nav flex-column ml-3">
                <li className="nav-item">Item 1</li>
                <li className="nav-item">Item 2</li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <h6
              className="nav-link sidebar-heading d-flex justify-content-between align-items-center -px-3 mt-4 mb-1 text-muted"
              onClick={() => changeMenu("menu2")}
              data-toggle="collapse"
              data-parent="#Accordion"
            >
              <Icon.Users size={12} />
              <span>Menu 2</span>
              {menu === "menu2" ? (
                <Icon.ChevronDown size={14} />
              ) : (
                <Icon.ChevronRight size={14} />
              )}
            </h6>
            <div
              id="emeaPanels"
              className={
                "collapse" +
                (menu === "menu2" ? " show" : "")
              }
            >
              <ul className="nav flex-column ml-3">
                <li className="nav-item">Item 3</li>
                <li className="nav-item">Item 4</li>
              </ul>
            </div>
          </li>
        </div>
      </Nav>
  );
}

export default Sidebar;
