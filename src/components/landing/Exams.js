import React from "react";
import Slider from "react-slick";
import { Examdata } from "./Examdata";
import { Link } from "react-router-dom";
import "../../css/exams.css";
import "./../../css/mediaQuery.css"

class Exams extends React.Component {
  state = {
    activeTab: "exams",
  };
  handletabs() {
    this.setState({
      activeTab: "popular",
    });
  }
  handletabsrecent() {
    this.setState({
      activeTab: "recent",
    });
  }
  handletabsexams() {
    this.setState({
      activeTab: "exams",
    });
  }
  render() {
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
    return (
      <div>
        <div className="examsTabs">
          <div
            className={
              this.state.activeTab === "exams" ? "selectExams" : "beforExams"
            }
            onClick={()=>this.handletabsexams()}
          >
            Upcoming exams
          </div>
          <div
            className={
              this.state.activeTab === "popular" ? "selectExams" : "beforExams"
            }
            onClick={() => this.handletabs()}
          >
            Popular
          </div>
          <div
            className={
              this.state.activeTab === "recent" ? "selectExams" : "beforExams"
            }
            onClick={() => this.handletabsrecent()}
          >
            Recent
          </div>
        </div>
        {this.state.activeTab === "exams" ? (
          <div className="examsContainer">
            <Slider {...settings}>
              {Examdata.map((item) => (
                <Link to={"/exams/" + item.name} className="anchortagStyleRemove">
                <div class="exams-each-container">
                <img src={require("./../../assests/" + item.image)} style={{width:"85%"}} className="examsImage"/>
                <div className="examImageinsideContent">
                  <div classname="">{item.exam_name}</div>
                  <div>{item.tests}</div>
                  <div>{item.point1}</div>
                  <div>{item.point2}</div>
                  <div>{item.point3}</div>
                  <div>{item.point4}</div>
                  <div><del>{item.oldPrice}</del></div>
                  <div>{item.newPrice}</div>
                  </div>
                </div>
                </Link>
              ))}
            </Slider>
          </div>
        ) : null}
        {this.state.activeTab === "popular" ? (
          <div className="examsContainer">
            <Slider {...settings}>
              {Examdata.map((item) => (
                 <Link to={"/exams/" + item.name} className="anchortagStyleRemove">
                <div class="exams-each-container">
                <img src={require("./../../assests/" + item.image)}/>
                <div className="examImageinsideContent">
                  <div classname="">{item.exam_name}</div>
                  <div>{item.tests}</div>
                  <div>{item.point1}</div>
                  <div>{item.point2}</div>
                  <div>{item.point3}</div>
                  <div>{item.point4}</div>
                  <div><del>{item.oldPrice}</del></div>
                  <div>{item.newPrice}</div>
                  </div>
                </div>
                </Link>
              ))}
            </Slider>
          </div>
        ) : null}
        {this.state.activeTab === "recent" ? (
          <div className="examsContainer">
            <Slider {...settings}>
              {Examdata.map((item) => (
                 <Link to={"/exams/" + item.name} className="anchortagStyleRemove">
                <div class="exams-each-container">
                <img src={require("./../../assests/" + item.image)}/>
                <div className="examImageinsideContent">
                  <div classname="">{item.exam_name}</div>
                  <div>{item.tests}</div>
                  <div>{item.point1}</div>
                  <div>{item.point2}</div>
                  <div>{item.point3}</div>
                  <div>{item.point4}</div>
                  <div><del>{item.oldPrice}</del></div>
                  <div>{item.newPrice}</div>
                  </div>
                </div>
                </Link>
              ))}
            </Slider>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Exams;
