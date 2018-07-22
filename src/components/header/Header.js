import React from "react";
import PropTypes from "prop-types";

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
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);

    this.state = { navIsOpen: false };
  }

  /* Handlers */
  toggleNav() {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  render() {
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
            <Collapse isOpen={this.state.navIsOpen} navbar>
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
            <NavbarToggler onClick={this.toggleNav} />
          </Navbar>
        )}
      </AppContext.Consumer>
    );
  }
}

Header.propTypes = {
  /*
   * The <Header> needs to receive the props from its parent
   * which provide information about `location` and `matche`d URL parts and
   * query strings. Those get passed further down to `<NamespaceSelect>` and
   * `<Search>`.
   *
   * <Search> can take advantage of the query strings in `search`
   */
  props: PropTypes.object,
  /* handle Click events on the <NavbarToggler> */
  toggleNav: PropTypes.func
};
