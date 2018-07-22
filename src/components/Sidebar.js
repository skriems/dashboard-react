import React from "react";

import { Nav } from "reactstrap";
import * as Icon from "react-feather";

/*
 * Sidebar Component
 */
export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: "nonPanels" };
  }

  handleMenu(name) {
    let menu = name === this.state.showMenu ? null : name;
    this.setState({ showMenu: menu });
  }

  render() {
    return (
        <Nav
          id="Accordion"
          className="col-md-2 d-none d-md-block bg-light sidebar flex-column"
        >
          <div className="sidebar-sticky">
            <li className="nav-item">
              <h6
                className="nav-link sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
                onClick={() => this.handleMenu("menu1")}
                data-toggle="collapse"
                data-parent="#Accordion"
              >
                <Icon.Users size={12} />
                <span>Menu 1</span>
                {this.state.showMenu === "menu1" ? (
                  <Icon.ChevronDown size={14} />
                ) : (
                  <Icon.ChevronRight size={14} />
                )}
              </h6>
              <div
                id="menu1"
                className={
                  "collapse" +
                  (this.state.showMenu === "menu1" ? " show" : "")
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
                onClick={() => this.handleMenu("menu2")}
                data-toggle="collapse"
                data-parent="#Accordion"
              >
                <Icon.Users size={12} />
                <span>Menu 2</span>
                {this.state.showMenu === "menu2" ? (
                  <Icon.ChevronDown size={14} />
                ) : (
                  <Icon.ChevronRight size={14} />
                )}
              </h6>
              <div
                id="emeaPanels"
                className={
                  "collapse" +
                  (this.state.showMenu === "menu2" ? " show" : "")
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
}
