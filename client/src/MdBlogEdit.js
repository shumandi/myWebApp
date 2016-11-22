/**
 * Created by mon on 2016/11/22.
 */
import React, {Component} from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock,Row,Col,Button} from 'react-bootstrap';
import './MdBlogEdit.css'

function FieldGroup({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class MdBlogEdit extends Component{
  render(){
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
                  label="标题"
                  placeholder="Enter text"
                />
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>内容</ControlLabel>
                  <FormControl bsClass="form-control style" componentClass="textarea" placeholder="textarea"/>
                </FormGroup>
                <Button type="submit">
                  发布
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

export default MdBlogEdit;