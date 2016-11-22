/**
 * Created by mon on 2016/11/21.
 */
import React, {Component} from 'react';
import {Navbar, NavDropdown, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router';

class MdNavbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">MdMake</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav navbar-nav">
              <li role="presentation">
                <Link to="blogmain">Blog</Link>
              </li>
              <li role="presentation">
                <Link to="about">About</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li role="presentation">
                <a href="https://github.com/shumandi/myWebApp">GitHub</a>
              </li>
              <NavDropdown title="用户管理" id="basic-nav-dropdown">
                <li role="presentation" ><Link to="login">登陆</Link></li>
                <li role="presentation" ><Link to="signin">注册</Link></li>
                <MenuItem divider />
                <li><a href="#">注销</a></li>
              </NavDropdown>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MdNavbar;