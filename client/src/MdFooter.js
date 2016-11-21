import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Breadcrumb} from 'react-bootstrap';
import './MdFooter.css'

class MdFooter extends Component{
  render(){
    return (
      <div className='mdfooter'>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            Blog
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Data
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mdabout">About some text</div>
      </div>
    )
  }
}

export default MdFooter;