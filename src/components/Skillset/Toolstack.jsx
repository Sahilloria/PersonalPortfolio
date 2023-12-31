import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiAndroid,
  SiAmazonaws 
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VsCode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Android Studio">
        <SiAndroid title="Android Studio"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify title="Netlify" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <SiAmazonaws title="AWS" />
      </Col>
    </Row>
  );
}

export default Toolstack;
