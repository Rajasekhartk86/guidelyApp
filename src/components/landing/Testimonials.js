import React from 'react';
import { TestimonialsData } from '../../jsondata/TestimonialsData';
import Slider from 'react-slick';

function Testimonials(){
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        
      };
    return(
        <div className="marginTestimonials">
            <h3>What Users Say?</h3>
            <Slider {...settings}>
              {TestimonialsData.map((item) => (
                  <div className="flexColoumnPub">
                <div class="publication-each-container">
                    <img src={require("./../../assests/" + item.image)} style={{height:"50px",width:"50px",borderRadius:"50%",}}/>
                  <div className="publication-name">{item.user_name}</div></div>
                  <div className="publication-name">{item.review}</div>
                </div>
              ))}
            </Slider>
        </div>
    )
}

export default Testimonials