import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import service1 from "../../images/icon-1.png";
import service2 from "../../images/icon-2.png";
import service3 from "../../images/icon-3.png";
import service4 from "../../images/icon-4.png";
import service5 from "../../images/icon-5.png";
import service6 from "../../images/icon-6.png";
import service7 from "../../images/icon-7.png";
import service8 from "../../images/icon-8.png";
import "./Service.css";
function Service() {
  return (
    <div className="service">
      <Container>
        <div className="section-header">
          <p>Consulting Services</p>
          <h2>Our Best Consulating Service</h2>
        </div>
        <Row>
          <Col lg={3} md={6}>
            <div className="service-item">
              <img src={service1} alt="" />
              <h3>Business Strategy</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare
                velit non
              </p>
              <a href="">Read More</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="service-item">
              <img src={service2} alt="" />
              <h3>Projet Management</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare
                velit non
              </p>
              <a href="">Read More</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="service-item">
              <img src={service3} alt="" />
              <h3>Market Research</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare
                velit non
              </p>
              <a href="">Read More</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="service-item">
              <img src={service4} alt="" />
              <h3>Human Resource</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare
                velit non
              </p>
              <a href="">Read More</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="service-item">
              <img src={service5} alt="" />
              <h3>Online Business</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare
                velit non
              </p>
              <a href="">Read More</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="service-item">
              <img src={service6} alt="" />
              <h3>Capital Management</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare
                velit non
              </p>
              <a href="">Read More</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="service-item">
              <img src={service7} alt="" />
              <h3>Business Insurance</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare
                velit non
              </p>
              <a href="">Read More</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="service-item">
              <img src={service8} alt="" />
              <h3>Online Marketing</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare
                velit non
              </p>
              <a href="">Read More</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Service;
