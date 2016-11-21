/**
 * Created by mon on 2016/11/21.
 */
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Navbar, Nav, NavItem, NavDropdown,MenuItem} from 'react-bootstrap';

class MdNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">MdMake</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Blog</NavItem>
              <NavItem eventKey={2} href="#">About</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="https://github.com/shumandi/myWebApp">GitHub</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MdNavbar;