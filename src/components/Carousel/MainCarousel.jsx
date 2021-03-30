import React from "react";
import { Carousel, Container } from "react-bootstrap";
import carousel1 from "../../images/carousel-1.jpg";
import carousel2 from "../../images/carousel-2.jpg";
import carousel3 from "../../images/carousel-3.jpg";
import "./MainCarousel.css";
function MainCarousel() {
  return (
    <>
      <div className="carousel">
        <Container fluid>
          <Carousel>
            <Carousel.Item>
              <div className="carousel-img">
                <img src={carousel1} alt="" />
              </div>
              <Carousel.Caption>
                <h1>Fastest Way to Achieve Success</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac consequat at lectus in
                  malesuada
                </p>
                <div className="carousel-btn">
                  <a href="" className="btn">
                    <i className="fa fa-link"></i> Get Started
                  </a>
                  <a
                    href=""
                    className="btn btn-play"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-toggle="modal"
                    data-target="#videoModal"
                  >
                    <i className="fa fa-play"></i> Watch Video
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                <img src={carousel2} alt="" />
              </div>
              <Carousel.Caption>
                <h1>Fastest Way to Achieve Success</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac consequat at lectus in
                  malesuada:
                </p>
                <div className="carousel-btn">
                  <a href="" className="btn">
                    <i className="fa fa-link"></i>Get Started
                  </a>
                  <a
                    href=""
                    className="btn btn-play"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-toggle="modal"
                    data-target="#videoModal"
                  >
                    <i className="fa fa-play"></i>Watch Video
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                <img src={carousel3} alt="" />
              </div>
              <Carousel.Caption>
                <h1>Fastest Way to Achieve Success</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac consequat at lectus in
                  malesuada:
                </p>
                <div className="carousel-btn">
                  <a href="" className="btn">
                    <i className="fa fa-link"></i>Get Started
                  </a>
                  <a
                    href=""
                    className="btn btn-play"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-toggle="modal"
                    data-target="#videoModal"
                  >
                    <i className="fa fa-play"></i>Watch Video
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default MainCarousel;
