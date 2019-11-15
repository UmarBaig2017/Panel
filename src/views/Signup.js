import React, { Component } from 'react'
import { Container, Row, Col, Card,CardHeader ,ListGroup,Button,
  ListGroupItem,Form,FormInput,} from "shards-react";
  import firebase from "firebase"
import PageTitle from "../components/common/PagetitleTeacher";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";


import { Link } from 'react-router-dom';

let firebaseConfig = {
  apiKey: "AIzaSyDjeHbUQRGkuFGKZu1WX67CATwEBud4vIs",
  authDomain: "students-teachers-portal.firebaseapp.com",
  databaseURL: "https://students-teachers-portal.firebaseio.com",
  projectId: "students-teachers-portal",
  storageBucket: "students-teachers-portal.appspot.com",
  messagingSenderId: "706172600266",
  appId: "1:706172600266:web:5eee0bed8e03bce3da5933"
};

firebase.initializeApp(firebaseConfig);

export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state={
      Email: "",
      Password: "",
      Repass: ""
    }
    this.onChange= this.onChange.bind(this)
  this.handleSignup= this.handleSignup.bind(this)
  }
onChange(e){
    this.setState({
       [e.target.name]: e.target.value
     });
}

handleSignup(e){
  e.preventDefault()
console.log(this.state.Email,this.state.Password)
if(this.state.Password===this.state.Repass){
  firebase
  .auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password)
          .then(() => {
            console.log("success")
           this.props.history.push("/")
                
          })
          .catch(e => {
              let err = e.message;
              alert(err);
          })
}
else{
  alert("Password doesn't Match")
}

   }

  render() {

    return (
      <div>
        
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
             <Col md="12" style={{"fontSize":"10"}} className="form-group">
            
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
 </Card>
   </Col>
 </Row>
</Container>
      </div>
    )
  }
}

