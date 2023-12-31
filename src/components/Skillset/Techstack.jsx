import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiGit,

} from "react-icons/di";
import {
  // SiMaterialui,
  SiRedux,
  SiExpress,
  SiHtml5
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML/CSS">
        <SiHtml5 title="HTML/CSS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript" >
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact title="React"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs title="Node.js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express.js">
        <SiExpress title="Express.js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  title="MySQL">
        <DiMysql title="MySQL"/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons"  title="Redux">
        <SiRedux  title="Redux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit title="Git"/>
      </Col>
    </Row>
  );
}

export default Techstack;
