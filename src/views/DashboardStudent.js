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
  Button,
  InputGroupText,
  InputGroup, InputGroupAddon
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
  constructor(props) {
    super(props)
    this.state = {
      Region: "Karachi",
      Exam: "BSCS",
      Subject: "Python",
      Post: "",
      studentFirebaseUID: "",
      studentProfilePic: "",
      subjects: [],
      chatID: "",
      offerRate: 0
    }
   
  
    this.onChange = this.onChange.bind(this)
    this.submitPost = this.submitPost.bind(this)
  }

    componentDidMount(){
      let details= JSON.parse(localStorage.getItem('CurrentUser'))
      console.log(details)
      this.setState({
        studentFirebaseUID: details.firebaseUID
      })
   
     
  }

  // submitPost() {
  //   console.log(this.state)
  //   let data = {
  //     offerRate: this.state.offerRate,
  //     exam: this.state.Exam,
  //     Region: this.state.Region,
  //     description: this.state.Post,
  //     studentFirebaseUID: this.state.studentFirebaseUID,
  //     studentProfilePic: "https://instagram.fkhi11-1.fna.fbcdn.net/vp/f97b38f8bbe2fc4e723e6a1a3d371d84/5E6A28BB/t51.2885-19/s150x150/53396441_367497184097338_483845318778028032_n.jpg?_nc_ht=instagram.fkhi11-1.fna.fbcdn.net",
  //     chatID: "9328fds9384",
  //     subjects:[this.state.Subject]

  //   }
    
  
  
  
  // }
  async submitPost(){
    let data = {
      offerRate: this.state.offerRate,
      exam: this.state.Exam,
      Region: this.state.Region,
      description: this.state.Post,
      studentFirebaseUID: this.state.studentFirebaseUID,
      studentProfilePic: "https://instagram.fkhi11-1.fna.fbcdn.net/vp/f97b38f8bbe2fc4e723e6a1a3d371d84/5E6A28BB/t51.2885-19/s150x150/53396441_367497184097338_483845318778028032_n.jpg?_nc_ht=instagram.fkhi11-1.fna.fbcdn.net",
      chatID: "9328fds9384",
      subjects:[this.state.Subject]

    }
    console.log(data)
  
 
    await fetch("http://localhost:5000/api/createPost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then(res => res.json())  
        .then(data => {
        if(data.message==="Success"){
        alert("Post Created")
       this.setState({
        Region: "Karachi",
        Exam: "BSCS",
        Subject: "Python",
        Post: "",
        offerRate: 0
        
       })
         
        }

          
        }).catch(err => alert(" Post not Created"))
    
    
    
      }
    onChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      }, () => {

      });
    }
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
                              <Col md="3" className="form-group">
                                <label htmlFor="feExam">Select Region </label>
                                <FormSelect value={this.state.Region} name="Region" onChange={this.onChange} id="feInputState">

                                  <option value="Karachi">Karachi</option>
                                  <option value="Lahore">Lahore</option>
                                </FormSelect>
                              </Col>
                              <Col md="3" className="form-group">
                                <label htmlFor="feExam">Choose Exam  </label>
                                <FormSelect value={this.state.Exam} name="Exam" onChange={this.onChange} id="feInputState">

                                  <option value="BSCS">BSCS</option>
                                  <option value="MBA">MBA</option>
                                </FormSelect>
                              </Col>
                              <Col md="3" className="form-group">
                                <label htmlFor="feExam">Choose Subjects  </label>
                                <FormSelect value={this.state.Subject} name="Subject" onChange={this.onChange} id="feInputState">


                                  <option value="Data Sciences">Data Sciences</option>
                                  <option value="Computer architecture ">Computer architecture </option>
                                  <option value="Python">Python</option>
                                </FormSelect>
                              </Col>
                              <Col md="3" className="form-group">
                                <label htmlFor="feExam">Rate your Preference  </label>
                                <InputGroup className="mb-3">
                                  <FormInput value={this.state.offerRate} name="offerRate" onChange={this.onChange} />
                                  <InputGroupAddon type="append">
                                    <InputGroupText>$/hr</InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>

                              </Col>
                            </Row>

                            <Row>
                              <Col md="12" className="form-group" >
                                <label htmlFor="feFirstName"> <b>  Post</b></label>
                                <textarea value={this.state.Post} onChange={this.onChange} name="Post" class="form-control" rows="5" id="comment"></textarea>




                              </Col>

                            </Row>


                            <div style={{ "float": "right" }} >
                              { /*<div className="custom-file mb-3">
                              <input type="file" className="custom-file-input" id="customFile2" />
                              <label className="custom-file-label" htmlFor="customFile2">
                                Choose file...
        </label>
    </div>*/}
                              <Button onClick={this.submitPost} theme="success" className="">
                                <b>  Post</b>
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
