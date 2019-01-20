import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.scss';
class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Navbar className="navbar" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/projects">
                <NavItem className="nav-item" eventKey={1}>
                  Projects
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/technicians">
                <NavItem eventKey={2}>Technicians</NavItem>
              </LinkContainer>
              <NavDropdown
                eventKey={3}
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/login">
                <NavItem eventKey={1}>Login</NavItem>
              </LinkContainer>
              <NavItem eventKey={2} href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
