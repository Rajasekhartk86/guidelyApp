import React from 'react';
import { PublicationData } from '../../jsondata/PublicationData';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function Publication(){
    var settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return(
        <div className="typeContainer">
            <div className="type_text">Publication</div>
            <div className="">
            <Slider {...settings}>
              {PublicationData.map((item) => (
                 <Link to="/publication" className="anchortagStyleRemove">
                  <div className="flexColoumnPub">
                    <div style={{display:"flex",flexDirection:"row",}}>
                <div class="">
                    <img src={require("./../../assests/" + item.image)} style={{height:"auto",width:"80px"}}/></div>
                    <div>
                  <div className="publication-name">{item.publication_name}</div>
                  <div className="publicationBuyNow">Buy Now</div>
                  <div style={{display:'flex',flexDirection:'row',justifyContent:"flex-end"}}>Free Download Sample</div>
                  </div>
                </div>
                </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
    )
}


export default Publication