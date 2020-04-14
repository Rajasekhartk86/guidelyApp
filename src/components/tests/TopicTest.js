import React from "react";
import ReasoningAbility from "../topicTests/ReasoningAbility";

class TopicTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Quants",
    };
  }
  handleQuants = () => {
    this.setState({
      activeTab: "Quants",
    });
  };
  handleAwareness = () => {
    this.setState({
      activeTab: "awarness",
    });
  };
  handleReasoning = () => {
    this.setState({
      activeTab: "reasoning",
    });
  };
  handleEnglish = () => {
    this.setState({
      activeTab: "english",
    });
  };
  handleBanking = () => {
    this.setState({
      activeTab: "banking",
    });
  };
  handleCurrent = () => {
    this.setState({
      activeTab: "current",
    });
  };
  render() {
    return (
      <div class="container">
        <div className="topicTestTabs scrollmenu">
          <div
            onClick={this.handleQuants}
            className={this.state.activeTab === "Quants" ? "selectedTest" : "testtab"}
          >
            Quantitative Aptitude
          </div>
          <div
            onClick={this.handleAwareness}
            className={
              this.state.activeTab === "awarness" ? "selectedTest" : "testtab"
            }
          >
            General Awareness
          </div>
          <div
            onClick={this.handleReasoning}
            className={
              this.state.activeTab === "reasoning" ? "selectedTest" : "testtab"
            }
          >
            Reasoning Ability
          </div>
          <div
            onClick={this.handleEnglish}
            className={this.state.activeTab === "english" ? "selectedTest" : "testtab"}
          >
            English Language
          </div>
          <div
            onClick={this.handleBanking}
            className={this.state.activeTab === "banking" ? "selectedTest" : "testtab"}
          >
            Banking Awareness
          </div>
          <div
            onClick={this.handleCurrent}
            className={this.state.activeTab === "current" ? "selectedTest" : "testtab"}
          >
            Current Affairs Quiz
          </div>
        </div>
        <hr />
        {this.state.activeTab === "reasoning" ? (
         <ReasoningAbility />
        ) : null}
      </div>
    );
  }
}

export default TopicTest;
