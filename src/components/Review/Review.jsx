import React from "react";
import { Container } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import review1 from "../../images/testimonial-1.jpg";
import review2 from "../../images/testimonial-2.jpg";
import review3 from "../../images/testimonial-3.jpg";
import review4 from "../../images/testimonial-4.jpg";
import ReactOwlCarousel from "react-owl-carousel";
import "./Review.css";
function Review() {
  const options = {
    autoPlay: true,
    animateIn: "slideInDown",
    animateOut: "slideOutDown",
    items: 1,
    smartSpeed: 450,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    reponsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };
  return (
    <div className="review">
      <Container>
        <div className="section-header">
          <p>Review Carousel</p>
          <h2>100% Postive Customer Reviews</h2>
        </div>
        <ReactOwlCarousel
          className="review-carousel"
          autoPlay="true"
          animateIn="slideInDown"
          animateOut="slideOutDown"
          items={1}
          smartSpeed={450}
          dots="false"
          loop="true"
          nav="true"
          navText={[
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
          ]}
          responsive={{
            0: {
              items: 1,
            },
            576: {
              items: 1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          }}
        >
          <div className="review-item">
            <img src={review1} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>StarkLee</h2>
            <h3>Profession</h3>
          </div>
          <div className="review-item">
            <img src={review2} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>StarkLee</h2>
            <h3>Profession</h3>
          </div>
          <div className="review-item">
            <img src={review3} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>StarkLee</h2>
            <h3>Profession</h3>
          </div>
          <div className="review-item">
            <img src={review4} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>StarkLee</h2>
            <h3>Profession</h3>
          </div>
        </ReactOwlCarousel>
      </Container>
    </div>
  );
}

export default Review;
