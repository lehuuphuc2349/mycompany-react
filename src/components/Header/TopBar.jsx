import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TopBar.css";
function TopBar() {
  return (
    <div className="top-bar">
      <Container fluid>
        <Row>
          <Col md={8}>
            <div className="top-bar-left">
              <div className="text">
                <i className="far fa-clock"></i>
                <h2>8:00 - 9:00</h2>
                <p>Mon-Fri</p>
              </div>
              <div className="text">
                <i className="fa fa-phone-alt"></i>
                <h2>+123 456 7890</h2>
                <p>For Appointment</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="top-bar-right">
              <div className="social">
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopBar;
