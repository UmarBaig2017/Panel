import React, { Component } from 'react'
import PropTypes from "prop-types";
import {
  Container, Row, Col, Card,
  CardHeader,

  ListGroup,
  ListGroupItem, Badge, CardBody,

  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import PageTitle from "../components/common/PageTitle";
import SmallStats from "../components/common/SmallStats";
import UsersOverview from "../components/blog/UsersOverview";
import UsersByDevice from "../components/blog/UsersByDevice";
import NewDraft from "../components/blog/NewDraft";
import Discussions from "../components/blog/Discussions";
import TopReferrals from "../components/common/TopReferrals";
import Store from '../flux/store'



export default class DashboardStudent extends Component {
  render() {
    return (
      <div >
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle
              sm="5"
              title="Post Create"
              subtitle=""
              className="text-lg-left"
            />
          </Row>
          <Row >
            <Col lg="12" sm="12" className="mb-4">
              <Card small>
                <CardHeader className="border-bottom">
                  <h6 className="m-0"><b>Form Example</b></h6>
                </CardHeader>
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Row>
                      <Col>
                        <Form>
                          <Row form>
                            <Col md="4" className="form-group">

                              <FormSelect id="feInputState">
                                <option>Select Region</option>
                                <option>Karachi</option>
                                <option>Lahore</option>
                              </FormSelect>
                            </Col>
                            <Col md="4" className="form-group">

                              <FormSelect id="feInputState">
                                <option>Select Exam</option>
                                <option>BSCS</option>
                                <option>MBA</option>
                              </FormSelect>
                            </Col>
                            <Col md="4" className="form-group">

                              <FormSelect id="feInputState">
                                <option>Select Subject</option>
                                <option>Data Science</option>
                                <option>Computer architecture </option>
                                <option>Python</option>
                              </FormSelect>
                            </Col>
                          </Row>

                          <Row>
                            <Col md="12" className="form-group" >
                              <label htmlFor="feFirstName">Post</label>
                              <textarea class="form-control" rows="5" id="comment"></textarea>




                            </Col>

                          </Row>


                          <div style={{ "float": "right" }} >
                            <div className="custom-file mb-3">
                              <input type="file" className="custom-file-input" id="customFile2" />
                              <label className="custom-file-label" htmlFor="customFile2">
                                Choose file...
        </label>
                            </div>
                            <Button theme="success" className="">
                              Post
                 </Button>


                          </div>




                        </Form>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Card>



            </Col>
          </Row>



        </Container>
      </div>
    )
  }
}
