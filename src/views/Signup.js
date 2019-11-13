import React from "react";
import { Container, Row, Col, Card,CardHeader ,ListGroup,Button,
  ListGroupItem,Form,FormInput,} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const SignUp = () => (
 
 <Container fluid className="main-content- center container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Signup"  md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row >
     
      <Col lg="6">
      <Card small className="mb-4">
     
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
              
                <Row form>
                  {/* Email */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feEmail"><b>First Name</b></label>
                    <FormInput
                      type="text"
                      id="feFName"
                      placeholder="First Name"
                      value="Jackson"
                      onChange={() => {}}
                      autoComplete="Firstname"
                    />
                  </Col>
                  <Col md="12" className="form-group">
                    <label htmlFor="feEmail"><b>Last Name</b></label>
                    <FormInput
                      type="text"
                      id="feLName"
                      placeholder="Last Name"
                      value="Wang"
                      onChange={() => {}}
                      autoComplete="Lastname"
                    />
                  </Col>
                  <Col md="12" className="form-group">
                    <label htmlFor="feEmail"><b>Email</b></label>
                    <FormInput
                      type="email"
                      id="feEmail"
                      placeholder="Email Address"
                      value="xyz@gmail.com"
                      onChange={() => {}}
                      autoComplete="email"
                    />
                  </Col>
                  </Row>
                  <Row>
                  {/* Password */}
                  <Col md="12" className="form-group">
                    <label htmlFor="fePassword"><b>Password</b></label>
                    <FormInput
                      type="password"
                      id="fePassword"
                      placeholder="Password"
                      value="EX@MPL#P@$$w0RD"
                      onChange={() => {}}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                  <Row>
                  {/* Password */}
                  <Col md="12" className="form-group">
                    <label htmlFor="fePassword"><b>Re-Enter Password</b></label>
                    <FormInput
                      type="password"
                      id="fePassword"
                      placeholder="Password"
                      value="EX@MPL#P@$$w0RD"
                      onChange={() => {}}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <Row>
                <Col md="12" style={{"fontSize":"10"}} className="form-group">
               
                <p>  {/* eslint-disable-next-line */}{"Already Having Account..? "}
                 <a href="/">Click here to Sigin</a>.</p>
              
              </Col>
              </Row>
               
            
              
                <Button theme="primary" className="mb-2 mr-1">
              Sign Up
              </Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
      </Col>
    </Row>
  </Container>
 
 
);
export default SignUp;
