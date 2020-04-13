import React from "react";
import { TestData } from "../../jsondata/TestData";
import { Link } from "react-router-dom";

class Test extends React.Component {
  state = {
    activeTabTest: "Banking",
  };
  handletabsbanking() {
    this.setState({
      activeTabTest: "Banking",
    });
  }
  handletabsssc() {
    this.setState({
      activeTabTest: "ssc",
    });
  }
  handletabsrailway() {
    this.setState({
      activeTabTest: "railway",
    });
  }
  handletabsinsurance() {
    this.setState({
      activeTabTest: "insurance",
    });
  }
  render() {
    return (
      <div>
        <div className="examsTabs">
          <div className="beforExams">Category</div>
          <div
            className={
              this.state.activeTabTest === "Banking"
                ? "selectExams"
                : "beforExams"
            }
            onClick={() => this.handletabsbanking()}
          >
            Banking
          </div>
          <div
            className={
              this.state.activeTabTest === "ssc" ? "selectExams" : "beforExams"
            }
            onClick={() => this.handletabsssc()}
          >
            SSC
          </div>
          <div
            className={
              this.state.activeTabTest === "railway"
                ? "selectExams"
                : "beforExams"
            }
            onClick={() => this.handletabsrailway()}
          >
            Railway
          </div>
          <div
            className={
              this.state.activeTabTest === "insurance"
                ? "selectExams"
                : "beforExams"
            }
            onClick={() => this.handletabsinsurance()}
          >
            Insurance
          </div>
        </div>
        {this.state.activeTabTest === "Banking" ? (
          <div className="testsContainer">
            <Link to="/topic-test" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/Topic Test.png")} />
                <div className="testNamePadding">Topic Test</div>
              </div>
            </Link>
            <Link to="/sectional-test" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/Section Test.png")} />
                <div className="testNamePadding">Sectional Test</div>
              </div>
            </Link>
            <Link to="/sbi-clerk" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/SBIClerk.png")} />
                <div className="testNamePadding">SBI Clerk</div>
              </div>
            </Link>
            <Link to="/sbi-po" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/SBI PO.png")} />
                <div className="testNamePadding">SBI PO</div>
              </div>
            </Link>
            <Link to="/rbi-assisstance" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/RBIAssistant.png")} />
                <div className="testNamePadding">RBI Assistance</div>
              </div>
            </Link>
            <Link to="/ibps-rrb-po" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/IBPSRRBClerk.png")} />
                <div className="testNamePadding">IBPS RRB PO</div>
              </div>
            </Link>
            <Link to="/ibps-rrb-clerk" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/IBPSRRBClerk.png")} />
                <div className="testNamePadding">IBPS RRB Clerk</div>
              </div>
            </Link>
            <Link to="/ibps-so" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/IBPSSO.png")} />
                <div className="testNamePadding">IBPS SO</div>
              </div>
            </Link>
            <Link to="/test-series" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <div className="testNamePadding">View All</div>
              </div>
            </Link>
          </div>
        ) : null}
        {this.state.activeTabTest === "ssc" ? (
          <div className="testsContainer">
            <Link to="/ibps-rrb-po" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/IBPSRRBClerk.png")} />
                <div className="testNamePadding">IBPS RRB PO</div>
              </div>
            </Link>
            <Link to="/ibps-rrb-clerk" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/IBPSRRBClerk.png")} />
                <div className="testNamePadding">IBPS RRB Clerk</div>
              </div>
            </Link>
            <Link to="/ibps-so" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/IBPSSO.png")} />
                <div className="testNamePadding">IBPS SO</div>
              </div>
            </Link>
            <Link to="/harco-bank" className="anchortagStyleRemove">
              <div className="testEachContainer">
                <img src={require("./../../assests/HarcoBank.png")} />
                <div className="testNamePadding">Harco Bank</div>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Test;
