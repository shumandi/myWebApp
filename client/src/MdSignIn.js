/**
 * Created by mon on 2016/11/22.
 */
import React, {Component} from 'react';
import {FormGroup,ControlLabel,HelpBlock,FormControl,Col,Row,Button,} from 'react-bootstrap';
import './MdSignIn.css'

function FieldGroup({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class MdSignIn extends Component {
  render() {
    return (
      <div className="signin">
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
                <FieldGroup
                  id="formControlsPassword"
                  label="重复密码"
                  type="Password"
                />
                <FieldGroup
                  id="formControlsFile"
                  type="file"
                  label="头像"
                  help="友情提示：这是你在本网站的面子。"
                />
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>性别</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="boy">男</option>
                    <option value="girl">女</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>个人简介</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="textarea"/>
                </FormGroup>
                <Button type="submit">
                  注册
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

export default MdSignIn;