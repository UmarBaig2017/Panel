import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const SigupLayout = ({ children, noNavbar, noFooter }) => (
  <Container >
    <Row>
      
      <Col
        className="main-content p-0"
        lg={{ size: 30, offset: 20 }}
        md={{ size: 30, offset: 30 }}
        sm="12"
        tag="main"
      >
      
        {children}
    
      </Col>
    </Row>
  </Container>
);

SigupLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

SigupLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default SigupLayout;
