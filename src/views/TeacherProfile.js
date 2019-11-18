import React, { Component } from 'react'
import { Container, Row, Col,Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem, Form,
  
  FormInput,
  FormSelect,
  FormTextarea,
  
  FormRadio,
  InputGroup,
  InputGroupAddon,
  InputGroupText } from "shards-react";

import PageTitle from "../components/common/PagetitleTeacher";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountStudent";


export default class TeacherProfile extends Component {
  constructor(props){
    super()
    this.state={

    }

  }
  render() {
    const userDetails={
      
        name: "Umar Baig",
        avatar: "https://scontent-sin2-1.cdninstagram.com/vp/5c79bc6b72045b86798854f4f26f67d5/5E429BBB/t51.2885-19/s150x150/53396441_367497184097338_483845318778028032_n.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com",
        jobTitle: "10th Grade",
        performanceReportTitle: "Workload",
        performanceReportValue: 74,
        metaTitle: "Description",
        metaValue:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
      
    }
    const title= "Teacher Details"
    return (
      <div>
      <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="Teacher Profile" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        {/*User Profile Showed */}
        <Col lg="4">
        <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={userDetails.avatar}
              alt={userDetails.name}
              width="110"
            />
          </div>
          <h4 className="mb-0">{userDetails.name}</h4>
          <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
        
        </CardHeader>
        <ListGroup flush>
         
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              {userDetails.metaTitle}
            </strong>
            <span>{userDetails.metaValue}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
        </Col>




        {/*User Profile form */}
        <Col lg="8">
        <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    {/* First Name */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feFirstName">First Name</label>
                      <FormInput
                        id="feFirstName"
                        placeholder="First Name"
                        value="Sierra"
                        onChange={() => {}}
                      />
                    </Col>
                    {/* Last Name */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feLastName">Last Name</label>
                      <FormInput
                        id="feLastName"
                        placeholder="Last Name"
                        value="Brooks"
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>
                  <Row form>
                   
                  </Row>
                  <Row form>
                  <Col md="6" className="form-group">
                  <label htmlFor="fePassword"><b>Gender</b></label>
                  <FormSelect  value={this.state.Usertype} onChange={this.onChange} id="feInputState">
                  
                  <option value="Student">Male</option>
                  <option value="Teacher">Female</option>
                  </FormSelect>
                
                </Col> <Col md="6" className="form-group">
                <label htmlFor="feLastName">Contact Number
    </label>
                <FormInput
                  type="number"
                  id="feLastName"
                  placeholder="Enter Contact Number"

                  onChange={() => { }}
                />


              </Col>
                
                </Row>
                  <Row form>
                  <Col  md="12" className="form-group">
                <label htmlFor="feExam"><b>Exam Qualifications</b></label>
                <FormInput
                id="feLastName"
                placeholder="Exam"
               
                onChange={() => {}}
              /><br/>
                <FormInput
                id="feLastName"
                placeholder="Subject"
                onChange={() => {}}
              /><br/> 
                <FormInput
                id="feLastName"
                placeholder="Year of attending eg: 2012-2016"
                
                onChange={() => {}}
              />

                
                </Col>
                 
                   
                    {/* Zip Code */}
                   
                  </Row>
                  <Row>
                  <Col md="6" className="form-group">
                  <label htmlFor="feExam">Education Qualifications  </label>
                  <FormInput
                id="feLastName"
                placeholder="Secondry School"
               
                onChange={() => {}}
              />
              <br/>
              <FormInput
                id="feLastName"
                placeholder="University"
               
                onChange={() => {}}
              />
                  
          </Col>
         


                  </Row>
                  <Row form>
                    {/* Description */}
                    <Col md="8" className="form-group">
                    <FormSelect  value={this.state.Usertype} onChange={this.onChange} id="feInputState">
                  
                    <option value="Student">Half Time</option>
                    <option value="Teacher">Full Time</option>
                    <option value="Teacher">Studying</option>
                    </FormSelect>
                    </Col>
                  </Row>
                  <Button theme="primary">Update Account</Button>
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

