import React from "react";
import { Container, Row, Col,  Card, CardHeader, CardBody , Button } from "shards-react";

import PageTitle from "../components/common/PagetitleTeacher";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

const ChatsStudents = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Chats"  className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="8" md="12">
      
       <Editor />
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="4" md="12">
      <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0"><b>Current Chats</b></h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-5">
                    
                  </th>
                  <th scope="col" className="border-5">
                    User Name
                  </th>
                  <th scope="col" className="border-5">
                    Date Created
                  </th>
                  <th scope="col" className="border-5">
               
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img
                  className="user-avatar rounded-circle mr-2" height="50" width="50"   src="https://scontent-sin6-2.cdninstagram.com/vp/ba897beb712bb4f8c1940c89f19441b4/5E429BBB/t51.2885-19/s150x150/53396441_367497184097338_483845318778028032_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com"
                  alt="User Avatar"
                /></td>
                  <td>Ali Altaf</td>
                  <td>12-3-2019</td>
                  <td>
                  <Button size="sm" theme="info" className="mb-2 mr-1">
                  Open
                </Button>
                </td>
                 
                </tr>
                <tr>
                  <td><img
                  className="user-avatar rounded-circle mr-2" height="50" width="50"   src="https://scontent-sin6-2.cdninstagram.com/vp/ba897beb712bb4f8c1940c89f19441b4/5E429BBB/t51.2885-19/s150x150/53396441_367497184097338_483845318778028032_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com"
                  alt="User Avatar"
                /></td>
                  <td>Clark Meagan</td>
                  <td>23-3-2019</td>
                 <td>
                 <Button size="sm" theme="info" className="mb-2 mr-1">
                 Open
               </Button> </td>
                </tr>
                <tr>
                  <td><img
                  className="user-avatar rounded-circle mr-2" height="50" width="50"   src="https://scontent-sin6-2.cdninstagram.com/vp/ba897beb712bb4f8c1940c89f19441b4/5E429BBB/t51.2885-19/s150x150/53396441_367497184097338_483845318778028032_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com"
                  alt="User Avatar"
                /></td>
                  <td>Jerry</td>
                  <td>20-5-05-2019</td>
                  <td> <Button size="sm" theme="info" className="mb-2 mr-1">
                  Open
                </Button></td>
                 
                </tr>
                <tr>
                  <td><img
                  className="user-avatar rounded-circle mr-2" height="50" width="50"   src="https://scontent-sin6-2.cdninstagram.com/vp/ba897beb712bb4f8c1940c89f19441b4/5E429BBB/t51.2885-19/s150x150/53396441_367497184097338_483845318778028032_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com"
                  alt="User Avatar"
                /></td>
                  <td>Angela Liberia</td>
                  <td> 03-5-2019</td>
                  <td> <Button size="sm" theme="info" className="mb-2 mr-1">
                  Open
                </Button></td>
                 
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>


       {/* <SidebarActions />
       <SidebarCategories />*/}
      </Col>
    </Row>
  </Container>
);

export default ChatsStudents;
