import React, { Component } from 'react'
import {
    Container, Row, Col, Card, CardHeader, ListGroup, Button,
    ListGroupItem, Form, FormInput, FormSelect
} from "shards-react";
import Store from "../flux/store"

import MultiSelectReact from 'multi-select-react';
import PageTitle from "../components/common/PageTitle";
export default class BasicDetailsSTP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FName: "",
            Email: "",
            LName:"",
            Gender: "",
            Email: "",
            Telephone:"",
            StdExam:"",
            Subject: "",
            Region:"",
            ExamQua: "",
            EduQua:"",
            CurrStu: "" ,         

            multiSelect: []
        }
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.optionClicked = this.optionClicked.bind(this)
        this.selectedBadgeClicked = this.selectedBadgeClicked.bind(this)

    }
    componentDidMount(){
        console.log(Store.getloginstatus())
      }
      
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
 e.preventDefault()
console.log(this.state)

    }

    optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }
    selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }




    render() {
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#dff0d8",
            color: "#3c763d"
        };
        return (
            <Container fluid className="main-content-container px-4">
            <h1 style={{ "marginTop": "50","fontFamily": "Courier"}}>Details Of User</h1>
            <hr/>
                <Row>
                    <Col lg="4" sm="12" className="mb-4">

                        <Row noGutters className="page-header py-4">
                            <PageTitle title="" md="12" className="ml-sm-auto mr-sm-auto" />
                        </Row>

                        <Row >

                            <Col lg="12">
                                <Card small className="mb-4">
                                    <CardHeader className="border-bottom">
                                        <h6 className="m-0">Basic Details</h6>
                                    </CardHeader>
                                    <ListGroup flush>
                                        <ListGroupItem className="p-3">
                                            <Row>
                                                <Col>
                                                    <Form>
                                                        <Row >
                                                            {/* Email */}
                                                            <Col md="6" className="form-group">
                                                                <label htmlFor="feEmail"><b>first Name</b></label>
                                                                <FormInput
                                                                    type="text"
                                                                    id="feName"
                                                                    placeholder="Last Name"
                                                                    name="FName"
                                                                    value={this.state.FName}
                                                                    onChange={this.onChange}

                                                                />
                                                            </Col>

                                                            {/* Email */}
                                                            <Col md="6" className="form-group">
                                                                <label htmlFor="feEmail"><b>Last Name</b></label>
                                                                <FormInput
                                                                    type="text"
                                                                    id="feName"
                                                                    placeholder="First Name"
                                                                    name="LName"
                                                                    value={this.state.LName}
                                                                    onChange={this.onChange}

                                                                />
                                                            </Col>
                                                        </Row>



                                                        <Row >
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
                                                            {/* Gender */}
                                                            <Col md="12" className="form-group">
                                                                <label htmlFor="feInputState"><b>Gender</b></label>
                                                                <FormInput
                                                                    type="text"
                                                                    id=""
                                                                    placeholder="Male or Female..."
                                                                    name="Gender"
                                                                    value={this.state.Gender}
                                                                    onChange={this.onChange}
                                                                   
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row >
                                                            {/* Email */}
                                                            <Col md="12" className="form-group">
                                                                <label htmlFor="feEmail"><b> Cell / Telephone</b></label>
                                                                <FormInput
                                                                    type="number"
                                                                    id=""
                                                                    placeholder="Contact Number"
                                                                    name="Telephone"
                                                                    value={this.state.Telephone}
                                                                    onChange={this.onChange}
                                                                    autoComplete=""
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row>

                                                            <Col md="12" style={{ "fontSize": "10" }} className="form-group">

                                                            </Col>
                                                        </Row>


                                                    </Form>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>

                    </Col>

                    <Col lg="4" sm="12" className="mb-4">



                        <Row noGutters className="page-header py-4">
                            <PageTitle title="" md="12" className="ml-sm-auto mr-sm-auto" />
                        </Row>

                        <Row >

                            <Col lg="12">
                                <Card small className="mb-4">
                                    <CardHeader className="border-bottom">
                                        <h6 className="m-0">Student Details</h6>
                                    </CardHeader>
                                    <ListGroup flush>
                                        <ListGroupItem className="p-3">
                                            <Row>
                                                <Col>
                                                    <Form>
                                                        <Row >
                                                            {/* Email */}
                                                            <Col md="12" className="form-group">
                                                                <label htmlFor="feEmail"><b>Exam</b></label>
                                                                <FormInput
                                                                    type="text"
                                                                    id="feName"
                                                                    placeholder="Complete Name with Surname"
                                                                    name="StdExam"
                                                                    value={this.state.StdExam}
                                                                    onChange={this.onChange}

                                                                />
                                                            </Col>

                                                            {/* Email */}
                                                           
                                                        </Row>
                                                        <Row>
                                                        <Col md="12" className="form-group">
                                                        <label htmlFor="feEmail"><b>Subject</b></label>
                                                        <FormInput
                                                            type="text"
                                                            id="feName"
                                                            placeholder="subject"
                                                            name="Subject"
                                                            value={this.state.Subject}
                                                            onChange={this.onChange}

                                                        />
                                                    </Col>
                                                        
                                                        
                                                        
                                                        
                                                        </Row>



                                                        <Row >
                                                            {/* Email */}
                                                            <Col md="12" className="form-group">
                                                                <label htmlFor="feEmail"><b>Region</b></label>
                                                                <FormInput
                                                                type="text"
                                                                id="feName"
                                                                placeholder="Type your Region"
                                                                name="Region"
                                                                value={this.state.Region}
                                                                onChange={this.onChange}

                                                            />
                                                                
                                                            </Col>
                                                        </Row>
                                                        
                                                      
                                                        <Row>

                                                            <Col md="12" style={{ "fontSize": "10" }} className="form-group">

                                                            </Col>
                                                        </Row>


                                                    </Form>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </Col>





                    <Col lg="4" sm="12" className="mb-4">



                        <Row noGutters className="page-header py-4">
                            <PageTitle title="" md="12" className="ml-sm-auto mr-sm-auto" />
                        </Row>

                        <Row >

                            <Col lg="12">
                                <Card small className="mb-4">
                                    <CardHeader className="border-bottom">
                                        <h6 className="m-0">Teacher Details</h6>
                                    </CardHeader>
                                    <ListGroup flush>
                                        <ListGroupItem className="p-3">
                                            <Row>
                                                <Col>
                                                    <Form>
                                                        <Row >
                                                           

                                                            {/* Email */}
                                                            <Col md="12" className="form-group">
                                                                <label htmlFor="feEmail"><b>Exam Qualifiction </b></label>
                                                                <FormInput
                                                                    type="text"
                                                                    id="feName"
                                                                    placeholder="Exam Qualifications"
                                                                    name="ExamQua"
                                                                    value={this.state.ExamQua}
                                                                    onChange={this.onChange}

                                                                />
                                                            </Col>
                                                        </Row>



                                                        <Row >
                                                            {/* Email */}
                                                            <Col md="12" className="form-group">
                                                                <label htmlFor="feEmail"><b>Education Qualification</b></label>
                                                                <FormInput
                                                                    type="email"
                                                                    id="feEmail"
                                                                    placeholder="Education Qualification"
                                                                    name="EduQua"
                                                                    value={this.state.EduQua}
                                                                    onChange={this.onChange}
                                                                    
                                                                />
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            {/* Gender */}
                                                            <Col md="12" className="form-group">
                                                                <label htmlFor="feInputState"><b>Current Status</b></label>
                                                                <FormInput
                                                                type="email"
                                                                id="feEmail"
                                                                placeholder="Half time , Full Time , Studying.."
                                                                name="CurrStu"
                                                                value={this.state.CurrStu}
                                                                onChange={this.onChange}
                                                                
                                                            />
                                                            </Col>
                                                        </Row>
                                                        
                                                        <Row>

                                                            <Col md="12" style={{ "fontSize": "10" }} className="form-group">

                                                            </Col>
                                                        </Row>


                                                    </Form>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </Col>



                </Row>
<hr/>
<Row>
<Col lg="6" sm="12" className="mb-4">


</Col>
<Col lg="4" sm="12" className="mb-4">


</Col>
<Col lg="2" sm="12" className="mb-4">
<div>
<Button onClick={this.handleSubmit}  theme="success" className="btn btn-success btn-lg">
Submit
</Button></div>

</Col>





</Row>



            </Container>
        )
    }
}
