import React, { Component } from 'react'
import { Container, Row, Col, Card,CardHeader ,ListGroup,Button,
  ListGroupItem,Form,FormInput,} from "shards-react";
import App from "../App"
import PageTitle from "../components/common/PagetitleTeacher";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import firebase from "firebase"
import * as actions from "../flux/actions"


export default class Signin extends Component {
constructor(props){
  super(props)
  this.state={
    Email:"",
    Password:""
  }
  this.onChange= this.onChange.bind(this)
  this.handleLogin= this.handleLogin.bind(this)

}
onChange(e){
   this.setState({
      [e.target.name]: e.target.value
    });
  }
handleLogin(e) {
    e.preventDefault()
    actions.handlelogin()
    console.log(this.state.Email, this.state.Password)
    firebase
  .auth()
  .signInWithEmailAndPassword(this.state.Email, this.state.Password)
  .then(res => {
    let yes= true
   localStorage.setItem('myData', yes );
   this.props.history.push("/Details")
   
  }).catch(err => {
      alert(err)
    })

  
  }
  render() {
    
    return (
      <div>
      
      <div >
      <Container fluid className="main-content- center container px-4">
      <Row noGutters className="page-header py-4">
   <PageTitle title="Signin"  md="12" className="ml-sm-auto mr-sm-auto" />
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
                        name="Email"
                        value={this.state.Email}
                        onChange={this.onChange}
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
                        name="Password"
                        value={this.state.Password}
                        onChange={this.onChange}
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
                 
              
                
                  <Button onClick={this.handleLogin} theme="primary" className="mb-2 mr-1">
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
      </div>
      </div>
    )
  }
}



