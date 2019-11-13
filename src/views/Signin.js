import React from "react";
import { Container, Row, Col, Card,CardHeader ,ListGroup,Button,
  ListGroupItem,Form,FormInput,} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const Signin = () => (
 
 <Container fluid className="main-content- center container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle  md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row >
     
      <Col lg="6">
      <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Signin</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
              
                <Row form>
                  {/* Email */}
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
                <Col md="12" style={{"fontSize":"10"}} className="form-group">
               
                <p>  {/* eslint-disable-next-line */}{"No Account..? "}
                 <a href="/Signup">Click here to Register Yourself</a>.</p>
              
              </Col>
              </Row>
               
            
              
                <Button theme="primary" className="mb-2 mr-1">
              Signin
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
export default Signin;
