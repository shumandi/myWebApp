/**
 * Created by mon on 2016/11/21.
 */
import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';

class MdAbout extends Component{
  render(){
    return (
      <div className="mdabout">
        <Row className="show-grid">
          <Col xs={1} md={2}></Col>
          <Col xs={10} md={8}>
            <div>this about page</div>
          </Col>
          <Col xs={1} md={2}></Col>
        </Row>
      </div>
    )
  }
}

export default MdAbout;

