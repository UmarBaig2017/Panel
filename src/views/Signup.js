import React, { Component } from 'react'
import {
  Container, Row, Col, Card, CardHeader, ListGroup, Button,
  ListGroupItem, Form, FormInput, FormSelect, InputGroupAddon, InputGroup, InputGroupText, FormTextarea
} from "shards-react";
import firebase from "firebase"
import PageTitle from "../components/common/PagetitleTeacher";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";


import { Link } from 'react-router-dom';

let firebaseConfig = {
  apiKey: "AIzaSyDtPnKZmVs_ZvC0eMEaxmmId7aw0NpUDRI",
  authDomain: "student-teacher-portal.firebaseapp.com",
  databaseURL: "https://student-teacher-portal.firebaseio.com",
  projectId: "student-teacher-portal",
  storageBucket: "student-teacher-portal.appspot.com",
  messagingSenderId: "927975138372",
  appId: "1:927975138372:web:75ba185088f2d6ce73c811",
  measurementId: "G-CZ9QWGZ14L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Email: "",
      Password: "",
      Repass: "",
      Gender: "Male",
      Contact: "",
      FName: "",
      LName: "",
      Offer: "",
      Description: "",
      UserType: true,
      Selected: "",
      isLoggedIn: false,
      firebaseUID: "",
      OfferRate: 0,
      Title: "",
      Description: "",
      butColour:"secondary",



    }
    this.handlestateteacher = this.handlestateteacher.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleSignupTeacher = this.handleSignupTeacher.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {

    });
  }
   async SubmitDataToDatabaseTeacher(){
    let User = {
      fName: this.state.FName,
      lName: this.state.LName,
      gender: this.state.Gender === "Male" ? true : false,
      telephone: this.state.Contact,
      email: this.state.Email,
      userType: this.state.UserType,
      firebaseUID: this.state.firebaseUID,
      offerRate: this.state.OfferRate,
      title: this.state.Title,
      Description: this.state.Description,

    }
    console.log(User)

    await fetch("http://localhost:5000/api/addUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(User)
      }).then(res => res.json())
      .then(data => {
        if (data.message === "Success") {
          localStorage.setItem('CurrentUser', JSON.stringify(User))
          alert("User Created")
          this.props.history.push("/TeachersPortal")
        }


      }).catch(err => alert("User Not created . Try again"))





  }

  async SubmitDataToDatabase() {

    let User = {
      fName: this.state.FName,
      lName: this.state.LName,
      gender: this.state.Gender === "Male" ? true : false,
      telephone: this.state.Contact,
      email: this.state.Email,
      userType: this.state.UserType,
      firebaseUID: this.state.firebaseUID
    }
    console.log(User)


    await fetch("http://localhost:5000/api/addUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(User)
      }).then(res => res.json())
      .then(data => {
        console.log( data.doc)
        if (data.message === "Success" ) {
          localStorage.setItem('CurrentUser', JSON.stringify(User))
          alert("User Created")
          this.props.history.push("/StudentPortal") 
        }
       


      }).catch(err => alert("User Not created . Try again"))



  }

  handleSignupTeacher(e) {
    e.preventDefault()
    console.log(this.state.Email, this.state.Password)
    if (this.state.Password === this.state.Repass) {
      firebase
        .auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password)
        .then((user) => {
          console.log(user)

          //
          this.setState({
            firebaseUID: user.user.uid
          })
          this.SubmitDataToDatabaseTeacher()


          // console.log("success")
          // this.props.history.push("/")
        })
        .catch(e => {
          let err = e.message;
          alert(err);
        })
    }
    else {
      alert("Password doesn't Match")
    }
  }


  handleSignup(e) {
    e.preventDefault()
    console.log(this.state)

    console.log(this.state.Email, this.state.Password)
    if (this.state.Password === this.state.Repass) {
      firebase
        .auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password)
        .then((user) => {
          console.log(user)

          //
          this.setState({
            firebaseUID: user.user.uid
          })
          this.SubmitDataToDatabase()

          // console.log("success")
          // this.props.history.push("/")
        })
        .catch(e => {
          let err = e.message;
          alert(err);
        })
    }
    else {
      alert("Password doesn't Match")
    }

  }
  handleState() {
    this.setState({
      UserType: true,
      butColour: "Danger"
    })

  }
  handlestateteacher() {
    this.setState({
      UserType: false
    })

  }

  render() {

    return (
      <div>

        <Container fluid className="main-content- center container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle title="Signup Form " md="12" className="ml-sm-auto mr-sm-auto" />
          </Row>
          <Row style={{ "textAlign": "center" }}>
            <Col md="2" className="form-group">



            </Col>
            <Col md="2" className="form-group">



            </Col>
            <Col md="2" className="form-group">
              <Button onClick={this.handleState} theme="secondary" className="mb-2 mr-1">
                Signup As Student
       </Button>


            </Col>
            <Col md="2" className="form-group">

              <Button onClick={this.handlestateteacher} theme="secondary" className="mb-2 mr-1">
                Signup As Teacher
      </Button>

            </Col>
            <Col md="2" className="form-group">

            </Col>
            <Col md="2" className="form-group">



            </Col>
          </Row>
          <Row >
            <Col lg="3">

            </Col>



            <Col lg="6">
              {this.state.UserType && <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 style={{ "color": "#0099ff" }} className="m-0">Student Signup</h6>
                </CardHeader>

                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Row>
                      <Col>
                        <Form>

                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="feFirstName">First Name</label>
                              <FormInput
                                type="text"
                                id="feFirstName"
                                placeholder="First Name"
                                name="FName"
                                value={this.state.FName}
                                onChange={this.onChange}
                              />
                            </Col>
                            {/* Last Name */}
                            <Col md="6" className="form-group">
                              <label htmlFor="feLastName">Last Name</label>
                              <FormInput
                                id="feLastName"
                                placeholder="Last Name"
                                name="LName"
                                value={this.state.LName}
                                onChange={this.onChange}
                              />
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="fePassword"><b>Gender</b></label>
                              <FormSelect value={this.state.Gender} name="Gender" onChange={this.onChange} id="feInputState">

                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </FormSelect>

                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="fePassword"><b>Contact</b></label>
                              <FormInput
                                type="number"
                                id="Contact number"
                                placeholder="Contact"
                                name="Contact"
                                value={this.state.Contact}
                                onChange={this.onChange}

                              />


                            </Col>
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
                                name="Password"
                                value={this.state.Password}
                                onChange={this.onChange}

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
                                name="Repass"
                                value={this.state.Repass}
                                onChange={this.onChange}
                              />
                            </Col>
                          </Row>

                          <Row>
                            <Col md="6" style={{ "fontSize": "10" }} className="form-group">

                              <p>Already Having Account..?{" "}
                                <Link to="/">Click here to Sigin</Link>
                              </p>

                            </Col>
                          </Row>



                          <Button onClick={this.handleSignup} theme="primary" className="mb-2 mr-1">
                            Sign Up
           </Button>
                        </Form>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Card>}
              {!this.state.UserType && <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 style={{ "color": "green" }} className="m-0">Teacher Signup</h6>
                </CardHeader>
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Row>
                      <Col>
                        <Form>

                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="feFirstName">First Name</label>
                              <FormInput
                                type="text"
                                id="feFirstName"
                                placeholder="First Name"
                                name="FName"
                                value={this.state.FName}
                                onChange={this.onChange}
                              />
                            </Col>
                            {/* Last Name */}
                            <Col md="6" className="form-group">
                              <label htmlFor="feLastName">Last Name</label>
                              <FormInput
                                id="feLastName"
                                placeholder="Last Name"
                                name="LName"
                                value={this.state.LName}
                                onChange={this.onChange}
                              />
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="fePassword"><b>Gender</b></label>
                              <FormSelect value={this.state.Gender} name="Gender" onChange={this.onChange} id="feInputState">

                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </FormSelect>

                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="fePassword"><b>Contact</b></label>
                              <FormInput
                                type="number"
                                id="Contact number"
                                placeholder="Contact"
                                name="Contact"
                                value={this.state.Contact}
                                onChange={this.onChange}

                              />


                            </Col>
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
                                name="Password"
                                value={this.state.Password}
                                onChange={this.onChange}

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
                                name="Repass"
                                value={this.state.Repass}
                                onChange={this.onChange}
                              />
                            </Col>
                          </Row>

                          <Row>

                          </Row>
                          <Row>
                            {/* Password */}
                            <Col md="6" className="form-group">
                              <label htmlFor="fePassword"><b>Offer Rate</b></label>

                              <InputGroup className="mb-3">
                                <FormInput name="OfferRate"
                                  value={this.state.OfferRate}
                                  onChange={this.onChange} />
                                <InputGroupAddon type="append">
                                  <InputGroupText><b>$/hr</b></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="fePassword"><b>Title</b></label>
                              <FormInput
                                type="text"
                                id="title"
                                placeholder="Title"
                                name="Title"
                                value={this.state.Title}
                                onChange={this.onChange}
                              />
                            </Col>


                          </Row>
                          <Row>
                            <Col md="12">
                              <label htmlFor="fePassword"><b>Description</b></label>
                              <FormTextarea value={this.state.Description} onChange={this.onChange} name="Description" id="feDescription" rows="3" />


                            </Col>




                          </Row>

                          <Row>
                            <Col md="6" style={{ "fontSize": "10" }} className="form-group">

                              <p>Already Having Account..?{" "}
                                <Link to="/">Click here to Sigin</Link>
                              </p>

                            </Col>
                          </Row>
                          <Button onClick={this.handleSignupTeacher} theme="success" className="mb-2 mr-1">
                            Sign Up
         </Button>
                        </Form>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Card>}


            </Col>
            <Col lg="3">




            </Col>




          </Row>
        </Container>
      </div>
    )
  }
}

