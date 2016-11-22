/**
 * Created by mon on 2016/11/22.
 */
import React, {Component} from 'react';
import {FormGroup,ControlLabel,HelpBlock,FormControl,Col,Row,Button,} from 'react-bootstrap';
import './MdLogIn.css'

function FieldGroup({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class MdLogIn extends Component {
  render() {
    return (
      <div className="login">
        <Row className="show-grid">
          <Col xs={1} md={2}></Col>
          <Col xs={10} md={8}>
            <div>
              <form>
                <FieldGroup
                  id="formControlsText"
                  type="Text"
                  label="用户名"
                  placeholder="Enter text"
                />
                <FieldGroup
                  id="formControlsEmail"
                  type="Password"
                  label="密码"
                />
                <Button type="submit">
                  登陆
                </Button>
              </form>
            </div>
          </Col>
          <Col xs={1} md={2}></Col>
        </Row>
      </div>
    )
  }
}

export default MdLogIn;