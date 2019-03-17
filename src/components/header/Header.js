import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown
} from "reactstrap";

import * as Icon from "react-feather";

import { AppContext } from "../../contexts/App";
import { Search } from "./Search";

/*
 * Header Component
 */
const Header = (props) => {
  const [navIsOpen, setNav] = useState(false);

  /* Handlers */
  const toggleNav = () => {
    setNav(!navIsOpen);
  }

  return (
    <AppContext.Consumer>
      {({ fooFn }) => (
        <Navbar
          className="navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow"
          expand="lg"
        >
          <NavbarBrand tag={Link} to="/" className="col-sm-2 col-md-2 mr-0">
            <span className="brandName">Dashboard</span>
          </NavbarBrand>

          {/* <Collapse>'able part of the NavMenu */}
          <Collapse data-testid="collapse" isOpen={navIsOpen} navbar>
            <ul className="navbar-nav">
              <li className="nav-item text-nowrap">
                <Link to="#" className="nav-link">
                  Link 1
                </Link>
              </li>
              <li className="nav-item text-nowrap">
                <Link to="#" className="nav-link">
                  Link 2
                </Link>
              </li>
            </ul>
          </Collapse>

          {/* Search */}
          <Search />

          {/* User Menu */}
          <ul className="navbar-nav px-3">
            <UncontrolledDropdown className="nav-item text-nowrap">
              <DropdownToggle nav caret>
                <Icon.User />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={fooFn} >Foo</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ul>

          {/* NavbarToggle for the <Collapse> */}
          <NavbarToggler data-testid="toggler" onClick={toggleNav} />
        </Navbar>
      )}
    </AppContext.Consumer>
  );
}

export default Header;
