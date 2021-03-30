import React from "react";
import About from "../components/About/About";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import Fact from "../components/Fact/Fact";
import Service from "../components/Services/Service";
function Home() {
  return (
    <>
      <CarouselContainer />
      <Fact />
      <About />
      <Service />
    </>
  );
}

export default Home;
