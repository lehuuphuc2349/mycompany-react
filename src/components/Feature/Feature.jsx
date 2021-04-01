import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import feature1 from "../../images/business-man.png";
import "./Feature.css";
function Feature() {
  return (
    <div className="feature">
      <Container>
        <Row className="align-items-ends">
          <Col md={6}>
            <div className="feature-img">
              <img src={feature1} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="section-header">
              <p>Our Feature</p>
              <h2>Why Choose Us</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec pretium mi. Curabitur facilisis ornare velit non vulputate.
              Aliquam metus tortor, auctor id gravida condimentum, viverra quis
              sem. Curabitur non nisl nec nisi scelerisque maximus
            </p>
            <Row className="counters">
              <Col xs={6}>
                <i className="fa fa-user"></i>
                <div className="counters-text">
                  <h2 data-toggle="counter-up">500</h2>
                  <p>Our Staffs</p>
                </div>
              </Col>
              <Col xs={6}>
                <i className="fa fa-user"></i>
                <div className="counters-text">
                  <h2 data-toggle="counter-up">200</h2>
                  <p>Our Clients</p>
                </div>
              </Col>
              <Col xs={6}>
                <i className="fa fa-check"></i>
                <div className="counters-text">
                  <h2 data-toggle="counter-up">300</h2>
                  <p>Compleated Projects</p>
                </div>
              </Col>
              <Col xs={6}>
                <i className="fa fa-running"></i>
                <div className="counters-text">
                  <h2 data-toggle="counter-up">300</h2>
                  <p>Running Projects</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Feature;
