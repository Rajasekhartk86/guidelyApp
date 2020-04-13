import React from "react";
import Slider from "react-slick";
import "./../../css/mediaQuery.css"

function WhyGuidely() {
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
      };
  return (
    <div>
        <br />
        <br />
      <h3>Why Guidely?</h3>
      <br />
        <br />
        <Slider {...settings} className="sliderWhyGuidely">
      <div class="">
        <div class="row">
          <div class="col-xs-2 col-sm-6 col-lg-6 col-md-6">
            <div className="flexrow">
              <div className="flexcolumn fontmq">
                <div><b>Stay up to date</b></div>
                <div>
                  we provide timely notifications and 
                  updates on the latest job vacancies and 
                  exams when you subscribe to our website.
                </div>
              </div>
              <img
                src={require("./../../assests/stayUpToDateLady.png")}
                alt="lady"
                className="whyGuideluLadymq"
              />
            </div>
          </div>
          <div class="col-xs-2 col-sm-6 col-lg-6 col-md-6">
          <div className="flexrow">
              <div className="flexcolumn fontmq">
                  <div>
                  <b>Get Everything in one place</b>
                  </div>
                  <div>Choose from our wide range of 
                  publications, e-books, test series, and video 
                  courses to prepare for any upcoming 
                  competative exams.</div>
              </div>
              
              <img
                src={require("./../../assests/everyThing1PlaceGuy.png")}
                alt="boy"
                className="whyGuideluLadymq"
              />
              </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="row">
          <div class="col-sm-6">
            <div className="flexrow">
              <div className="flexcolumn fontmq">
                <div><b>Stay up to date</b></div>
                <div>
                  we provide timely notifications and 
                  updates on the latest job vacancies and 
                  exams when you subscribe to our website.
                </div>
              </div>
              <img
                src={require("./../../assests/stayUpToDateLady.png")}
                alt="lady"
                className="whyGuideluLadymq"
              />
            </div>
          </div>
          <div class="col-sm-6">
          <div className="flexrow">
              <div className="flexcolumn fontmq">
                  <div>
                  <b>Get Everything in one place</b>
                  </div>
                  <div>Choose from our wide range of 
                  publications, e-books, test series, and video 
                  courses to prepare for any upcoming 
                  competative exams.</div>
              </div>
              
              <img
                src={require("./../../assests/everyThing1PlaceGuy.png")}
                alt="boy"
                className="whyGuideluLadymq"
              />
              </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="row">
          <div class="col-sm-6">
            <div className="flexrow">
              <div className="flexcolumn fontmq">
                <div><b>Stay up to date</b></div>
                <div>
                  we provide timely notifications and 
                  updates on the latest job vacancies and 
                  exams when you subscribe to our website.
                </div>
              </div>
              <img
                src={require("./../../assests/stayUpToDateLady.png")}
                alt="lady"
                className="whyGuideluLadymq"
              />
            </div>
          </div>
          <div class="col-sm-6">
          <div className="flexrow">
              <div className="flexcolumn fontmq">
                  <div>
                  <b>Get Everything in one place</b>
                  </div>
                  <div>Choose from our wide range of 
                  publications, e-books, test series, and video 
                  courses to prepare for any upcoming 
                  competative exams.</div>
              </div>
              
              <img
                src={require("./../../assests/everyThing1PlaceGuy.png")}
                alt="boy"
                className="whyGuideluLadymq"
              />
              </div>
          </div>
        </div>
      </div>
      </Slider>
      <div className="tryForFree">
          Try for Free
      </div>
    </div>
  );
}

export default WhyGuidely;
