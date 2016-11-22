/**
 * Created by mon on 2016/11/22.
 */
import React, {Component} from 'react';
import {Grid, Row, Col, Image,FormGroup,FormControl,Button} from 'react-bootstrap';

class MdBlogPage extends Component {
  render() {
    return (
      <div className="blogmain">
        <Grid>
          <Row className="show-grid">
            <Col xs={0} md={1}><p></p></Col>
            <Col xs={12} md={10}>
              <Row className="show-grid content">
                <Col xs={1} md={2}><Image src="http://img2.imgtn.bdimg.com/it/u=2565618262,4249539566&fm=21&gp=0.jpg" rounded/></Col>
                <Col xs={11} md={10}>
                  <div>
                    <h1>一篇博客</h1>
                    <hr/>
                    <p>
                      The React-Bootstrap media content components offer ways to present images and other media to your users in a responsive way, along with support for styling those components.
                      The React-Bootstrap media content components offer ways to present images and other media to your users in a responsive way, along with support for styling those components.
                      The React-Bootstrap media content components offer ways to present images and other media to your users in a responsive way, along with support for styling those components.
                      The React-Bootstrap media content components offer ways to present images and other media to your users in a responsive way, along with support for styling those components.
                    </p>
                    <div>
                      <p className="date">2016-10-11 11:11</p>
                      <p className="liulan">浏览（10）</p>
                      <p className="liuyan">留言（10）</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="show-grid content">
                <Col xs={1} md={2}></Col>
                <Col xs={11} md={10}>
                  <div>
                    <h1>留言</h1>
                    <hr/>
                    <div>
                      <Row className="show-grid content">
                        <Col xs={1} md={2}><Image src="http://img2.imgtn.bdimg.com/it/u=2565618262,4249539566&fm=21&gp=0.jpg" rounded/></Col>
                        <Col xs={11} md={10}>
                          <div>
                            <h3>mondear</h3><span>2016-11-11</span>
                            <hr/>
                            <p>
                              The React-Bootstrap media content components offer ways to present images and other media to your users in a responsive way, along with support for styling those components.
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <hr/>
                      <div>
                        <FormGroup controlId="formControlsTextarea">
                          <FormControl bsClass="form-control style" componentClass="textarea" placeholder="textarea"/>
                        </FormGroup>
                        <Button type="submit">
                          发布
                        </Button>
                      </div>
                    </div>

                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={6} md={1}><p></p></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default MdBlogPage;