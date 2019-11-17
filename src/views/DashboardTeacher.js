import React, { Component } from 'react'
import PropTypes from "prop-types";
import {
  Container, Row, Col, Card,
  CardHeader,
  Form,
  Button,
  ListGroup,
  ListGroupItem, Badge, CardBody,FormSelect, CardFooter
} from "shards-react";


import PageTitle from "../components/common/PagetitleTeacher";
import SmallStats from "../components/common/SmallStats";
import UsersOverview from "../components/blog/UsersOverview";
import UsersByDevice from "../components/blog/UsersByDevice";
import NewDraft from "../components/blog/NewDraft";
import Discussions from "../components/blog/Discussions";
import TopReferrals from "../components/common/TopReferrals";



export default class DashboardTeacher extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const PostsListTwo = [{

      backgroundImage: require("../images/content-management/5.jpeg"),
      category: "CEO",
      categoryTheme: "info",
      author: "Anna Ken",
      authorAvatar: require("../images/avatars/0.jpg"),
      Region:
        "Karachi",
      Exam:
        "Masters in Marketing",
        
        Subject:
        " Data Sciences",
      body:
        "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
      date: "29 February 2019"


    },
    {

      backgroundImage: require("../images/content-management/5.jpeg"),
      category: "CEO",
      categoryTheme: "info",
      author: "Anna Ken",
      authorAvatar: require("../images/avatars/0.jpg"),
      Region:
      "Karachi",
    Exam:
      "Masters in Marketing",
      
      Subject:
      " Data Sciences",
      body:
        "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
      date: "29 February 2019"


    },
    {

      backgroundImage: require("../images/content-management/5.jpeg"),
      category: "CEO",
      categoryTheme: "info",
      author: "Anna Ken",
      authorAvatar: require("../images/avatars/0.jpg"),
      Region:
        "Karachi",
      Exam:
        "Masters in Marketing",
        
        Subject:
        " Data Sciences",
      body:
        "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
      date: "29 February 2019"
    }, {
      backgroundImage: require("../images/content-management/6.jpeg"),
      category: "Director ",
      categoryTheme: "dark",
      author: "John James",
      authorAvatar: require("../images/avatars/1.jpg"),
      title:
        "Totally words widow one downs few age every seven if miss part by fact",
      body:
        "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
      date: "29 February 2019"
    }]
    const PostsListOne = [
      {
        
          backgroundImage: "https://instagram.fkhi11-1.fna.fbcdn.net/vp/4693f33127c5df9d075eeec4e017f48d/5E429BBB/t51.2885-19/s150x150/53396441_367497184097338_483845318778028032_n.jpg?_nc_ht=instagram.fkhi11-1.fna.fbcdn.net",
          category: "Mnnager",
          categoryTheme: "info",
          author: "Anna Ken",
          authorAvatar: require("../images/avatars/0.jpg"),
          title:
            "Attention he extremity unwilling on otherwise cars backwards yet",
          body:
            "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
          date: "29 February 2019"
        }
      ]
      const smallStats=[
        {
          label: "Students",
          value: "1230",
          percentage: "68.7%",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(102, 153, 255)",
              borderColor: "rgb(0, 184, 216)",
              data: [1, 2, 1, 3, 5, 4, 7]
            }
          ]
        } , {
          label: "Teachers",
          value: "908",
          percentage: "12.4",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(102, 153, 205)",
              borderColor: "rgb(23,198,113)",
              data: [1, 2, 3, 3, 3, 4, 4]
            }
          ]
        },
        {
          label: "Subjects",
          value: "1245",
          percentage: "89.8%",
          increase: true,
          decrease: false,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(102, 153, 245)",
              borderColor: "rgb(255,180,0)",
              data: [2, 3, 3, 3, 4, 3, 3]
            }
          ]
        },
        {
          label: "Chats",
          value: "1598",
          percentage: "101.4%",
          increase: true,
          decrease: false,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(102, 153, 240)",
              borderColor: "rgb(255,65,105)",
              data: [1, 7, 1, 3, 1, 4, 8]
            }
          ]
        },

      ]
    return (
      <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Posts"  className="text-sm-left" />
      </Row>
      <Row>
     
    </Row>
    <Row >
            <Col lg="12" sm="12" className="mb-4">
              <Card small>
                <CardHeader className="border-bottom">
                  <h6 className="m-0"><b>Apply Filters</b></h6>
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



                        </Form>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Card>



            </Col>
          </Row>

      {/* First Row of Posts*/}
     {/* <Row>
        {PostsListOne.map((post, idx) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(${post.backgroundImage})` }}
              >
                <Badge
                  pill
                  className={`card-post__category bg-${post.categoryTheme}`}
                >
                  {post.category}
                </Badge>
                <div className="card-post__author d-flex">
                  <a
                    href="#"
                    className="card-post__author-avatar card-post__author-avatar--small"
                    style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                  >
                    Written by {post.author}
                  </a>
                </div>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    {post.title}
                  </a>
                </h5>
                <p className="card-text d-inline-block mb-3">{post.body}</p>
                <span className="text-muted">{post.date}</span>
              </CardBody>
            </Card>
          </Col>
        ))}
        </Row>*/}

      {/* Second Row of Posts */}
      <Row>
        {PostsListTwo.map((post, idx) => (
          <Col lg="6" sm="12" className="mb-4" key={idx}>
            <Card small  className="card-post card-post--aside card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url('${post.backgroundImage}')` }}
              >
                
                <div className="card-post__author d-flex">
                 
                   
                </div>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a className="text-fiord-blue" href="#">
                  Region: {post.Region}<br/>
                   Exam: {post.Exam}<br/>
                   Subject: {post.Subject}<br/>
                  </a>
                </h5>
                <p className="card-text d-inline-block mb-3">{post.body}</p>
                <Button theme="primary"> Chat</Button><br/>
                <span className="text-muted">{post.date}</span>
              </CardBody>
            </Card>
          </Col>
        ))}
        </Row>

      {/* Third Row of Posts */}
  

      {/* Fourth Row of posts */}
     {/* <Row>
        {PostsListFour.map((post, idx) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post h-100">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url('${post.backgroundImage}')` }}
              />
              <CardBody>
                <h5 className="card-title">
                  <a className="text-fiord-blue" href="#">
                    {post.title}
                  </a>
                </h5>
                <p className="card-text">{post.body}</p>
              </CardBody>
              <CardFooter className="text-muted border-top py-3">
                <span className="d-inline-block">
                  By
                  <a className="text-fiord-blue" href={post.authorUrl}>
                    {post.author}
                  </a>{" "}
                  in
                  <a className="text-fiord-blue" href={post.categoryUrl}>
                    {post.category}
                  </a>
                </span>
              </CardFooter>
            </Card>
          </Col>
        ))}
        </Row>*/}
    </Container>
    )
  }
}


