import React from "react";
import { Container, Row, Col,  Card, CardHeader, CardBody , Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

const AddNewPost = () => (
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
                    #
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
                  <td>1</td>
                  <td>Ali Altaf</td>
                  <td>12-3-2019</td>
                  <td>
                  <Button size="sm" theme="info" className="mb-2 mr-1">
                  Open
                </Button>
                </td>
                 
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark Meagan</td>
                  <td>23-3-2019</td>
                 <td>
                 <Button size="sm" theme="info" className="mb-2 mr-1">
                 Open
               </Button> </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry</td>
                  <td>20-5-05-2019</td>
                  <td> <Button size="sm" theme="info" className="mb-2 mr-1">
                  Open
                </Button></td>
                 
                </tr>
                <tr>
                  <td>4</td>
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

export default AddNewPost;
