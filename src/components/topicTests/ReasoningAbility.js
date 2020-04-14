import React,{Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class ReasoningAbility extends Component{
    constructor(props) {
        super(props);
        this.state = {
          activeTopic: "order",
        };
      }
      
  handleTopicOrder = () => {
    this.setState({
      activeTopic: "order",
    });
  };
  handleTopicIO = () => {
    this.setState({
      activeTopic: "io",
    });
  };
  handleTopicBlood = () => {
    this.setState({
      activeTopic: "blood",
    });
  };
  handleTopicSylgsm = () => {
    this.setState({
      activeTopic: "sylgsm",
    });
  };
  handleTopicCodeco = () => {
    this.setState({
      activeTopic: "codeco",
    });
  };
  handleTopicSeries = () => {
    this.setState({
      activeTopic: "series",
    });
  };
  handleTopicEqineq = () => {
    this.setState({
      activeTopic: "eqineq",
    });
  };
  handleTopicSeatingArrange = () => {
    this.setState({
      activeTopic: "seatingarange",
    });
  };
  handleTopicPuzzles = () => {
    this.setState({
      activeTopic: "puzzles",
    });
  };
    render(){
        return(
            <div class="container-fluid row">
            <div class="col-sm-2 col-md-3 col-lg-3">
              <div className="testTopics hideTopics">
                <div
                  className={
                    this.state.activeTopic === "order"
                      ? "eachTopicbg"
                      : "eachTopics"
                  }
                  onClick={this.handleTopicOrder}
                >
                  Order and Banking
                </div>
                <div
                  className={
                    this.state.activeTopic === "io"
                      ? "eachTopicbg"
                      : "eachTopics"
                  }
                  onClick={this.handleTopicIO}
                >
                  Input - Output
                </div>
                <div
                  className={
                    this.state.activeTopic === "blood"
                      ? "eachTopicbg"
                      : "eachTopics"
                  }
                  onClick={this.handleTopicBlood}
                >
                  Blood Relations
                </div>
                <div
                  className={
                    this.state.activeTopic === "sylgsm"
                      ? "eachTopicbg"
                      : "eachTopics"
                  }
                  onClick={this.handleTopicSylgsm}
                >
                  Syllogism
                </div>
                <div
                  className={
                    this.state.activeTopic === "codeco"
                      ? "eachTopicbg"
                      : "eachTopics"
                  }
                  onClick={this.handleTopicCodeco}
                >
                  Coding & Decoding
                </div>
                <div
                  className={
                    this.state.activeTopic === "series"
                      ? "eachTopicbg"
                      : "eachTopics"
                  }
                  onClick={this.handleTopicSeries}
                >
                  Alphanumeric Series
                </div>
                <div
                  className={
                    this.state.activeTopic === "eqineq"
                      ? "eachTopicbg"
                      : "eachTopics"
                  }
                  onClick={this.handleTopicEqineq}
                >
                  Equality & Inequality
                </div>
                <div
                  className={
                    this.state.activeTopic === "seatingarange"
                      ? "eachTopicbg"
                      : "eachTopics"
                  }
                  onClick={this.handleTopicSeatingArrange}
                >
                  Seating Arrangements
                </div>
                <div
                  className={
                    this.state.activeTopic === "puzzles"
                      ? "eachTopicbg"
                      : "eachTopics"
                  }
                  onClick={this.handleTopicPuzzles}
                >
                  Puzzles
                </div>
                
              </div>
              <Dropdown className="hidedrop">
  <Dropdown.Toggle variant="secondary">
    Topics
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.handleTopicOrder}>Order and Bankig</Dropdown.Item>
    <Dropdown.Item onClick={this.handleTopicIO}>Input - Output</Dropdown.Item>
    <Dropdown.Item onClick={this.handleTopicBlood}>Blood Relations</Dropdown.Item>
    <Dropdown.Item onClick={this.handleTopicSylgsm}>Syllagism</Dropdown.Item>
    <Dropdown.Item onClick={this.handleTopicCodeco}>Coding & Decoding</Dropdown.Item>
    <Dropdown.Item onClick={this.handleTopicSeries}>Alphanumeric Series</Dropdown.Item>
    <Dropdown.Item onClick={this.handleTopicEqineq}>Equality & Inequality</Dropdown.Item>
    <Dropdown.Item onClick={this.handleTopicSeatingArrange}>Seating Arrangements</Dropdown.Item>
    <Dropdown.Item onClick={this.handleTopicPuzzles}>Puzzles</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>
            <div class="col-sm-10 col-md-9 col-lg-9 scrollmenu scolltab">
                {this.state.activeTopic === "order" ? 
                <div className="orderAndBanking">
                    <img src={require("./../../assests/topicTest/orderBanking.png")} />
                    <div className="ordersContent">Order and Banking - Level Based</div>
                </div>
            :null}
            {this.state.activeTopic === "seatingarange" ? 
            <div className="seatingmq">
                <div className="orderAndBanking">
                    <img src={require("./../../assests/topicTest/Top50pdf.png")} className="imageWidth"/>
                    <div className="ordersContent">Seating arrangement for IBPS PO - 2019</div>
                </div>
                <div className="orderAndBanking">
                    <img src={require("./../../assests/topicTest/seatingArrangement.png")} className="imageWidth"/>
                    <div className="ordersContent">Seating arrangement Questions and Answers</div>
                </div>
                <div className="orderAndBanking">
                    <img src={require("./../../assests/topicTest/highLevelSeating.png")} className="imageWidth" />
                    <div className="ordersContent">High Level Seating Arrangement Quiz-2017</div>
                </div>
                <div className="orderAndBanking">
                    <img src={require("./../../assests/topicTest/circularSeating.png")} className="imageWidth"/>
                    <div className="ordersContent">Circular Seating Arrangement Questions-2020</div>
                </div>
                <div className="orderAndBanking">
                    <img src={require("./../../assests/topicTest/seatingArrangement.png")} className="imageWidth"/>
                    <div className="ordersContent">Seating arrangement Questions and Answers</div>
                </div>
                <div className="orderAndBanking">
                    <img src={require("./../../assests/topicTest/CirIBPSClerk.png")} className="imageWidth"/>
                    <div className="ordersContent">Circular Seating Arrangement - 2</div>
                </div>

                </div>
            :null}
            </div>
          </div>
        )
    }
}


export default ReasoningAbility