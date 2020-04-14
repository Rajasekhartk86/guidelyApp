import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Exams from "./Exams";
import Test from "./Test";
import Type from "./Type";
import Publication from "./Publication";
import WhyGuidely from "./WhyGuidely";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <section className="">
        <Carousel interval={1000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:"20%"}}
              src={require("./../../assests/offer.png")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:"20%"}}
              src={require("./../../assests/offer.png")}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:"20%"}}
              src={require("./../../assests/offer.png")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section>
      <div class="container">
        <Exams />
        </div>
      </section>
      <section>
      <div class="container">
        <Test />
        </div>
      </section>
      <section>
      <div class="container">
        <Type />
        </div>
      </section>
      <section>
      <div class="container">
        <Publication />
        </div>
      </section>
      <section class="whyGuidely">
      <div class="container">
        <WhyGuidely />
        </div>
      </section>
      <section>
        <div class="container">
        <Testimonials />
        </div>
        
      </section>
    </div>
  );
}

export default Home;
