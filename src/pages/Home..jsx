import React from "react";
import About from "../components/About/About";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import Fact from "../components/Fact/Fact";
import Feature from "../components/Feature/Feature";
import Review from "../components/Review/Review";
import Service from "../components/Services/Service";
function Home() {
  return (
    <>
      <CarouselContainer />
      <Fact />
      <About />
      <Service />
      <Feature />
      <Review />
    </>
  );
}

export default Home;
