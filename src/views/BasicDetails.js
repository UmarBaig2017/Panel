import React, { Component } from 'react'

import {
  Container, Row, Col, Card, CardHeader, ListGroup, Button,
  ListGroupItem, Form, FormInput, FormSelect
} from "shards-react";
import App from "../App"
import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

export default class BasicDetailsStudent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Email: "",
      Password: ""
    }
    this.onChange = this.onChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)

  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleLogin(e) {



  }
  render() {
    return (

      <Container fluid className="main-content-container px-4">
        <Col lg="6" sm="12">
       
            
            
      

        </Col>
        <Col lg="6" sm="12">

      
      
      


        </Col>
            </Container>


    )
  }
}
