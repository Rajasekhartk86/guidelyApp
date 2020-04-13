import React from "react";
import { Link } from "react-router-dom";

function BankingMenu() {
  return (
    <div>
      <div className="flexRow containerBanking">
        <div className="firstRow">
          <Link to="/topic-test" className="anchortagStyleRemove">
            <div>
              <img
                src={require("./../../assests/nav/topicTest.png")}
                alt="topic"
              />
              <span className="bankingTextOptions">Topic Test</span>
            </div>
          </Link>
          <div>
            <img
              src={require("./../../assests/nav/sectionalTest.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">Sectional Test</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/sbiClerk (1).png")}
              alt="topic"
            />
            <span className="bankingTextOptions">SBI Clerk</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/sbiPo.png")} alt="topic" />
            <span className="bankingTextOptions">SBI PO</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/rbiAssistant.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">RBI Assisstant</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/ibpsRrbPo.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">IBPS RRB PO</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/ibpsRrbClerk.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">IBPS RRB Clerk</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/ibpsCLERK.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">IBPS Clerk</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/ibpsSO.png")} alt="topic" />
            <span className="bankingTextOptions">IBPS SO</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/harcoBank.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">HARCO Bank</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/epfo.png")} alt="topic" />
            <span className="bankingTextOptions">EPFO</span>
          </div>
        </div>
        <div className="firstRow">
          <div>
            <img src={require("./../../assests/nav/ibpspo.png")} alt="topic" />
            <span className="bankingTextOptions">IBPS PO</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/papco.png")} alt="topic" />
            <span className="bankingTextOptions">PAPCO Bank</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/southIndian.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">South Indian</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/FCI.png")} alt="topic" />
            <span className="bankingTextOptions">FCI</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/CWC.png")} alt="topic" />
            <span className="bankingTextOptions">CWC</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/RBIGradeB.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">RBI Grade B</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/jkbank.png")} alt="topic" />
            <span className="bankingTextOptions">J&K Bank</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/vizag.png")} alt="topic" />
            <span className="bankingTextOptions">Vizg Bank</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/synndicate.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">Syndicate Bank</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/canara.png")} alt="topic" />
            <span className="bankingTextOptions">Canara Bank</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/adbi.png")} alt="topic" />
            <span className="bankingTextOptions">ICBI Bank</span>
          </div>
        </div>
        <div>
          <div>
            <img
              src={require("./../../assests/nav/abhyadhaya.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">Abhyadhaya Bank</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/bihar.png")} alt="topic" />
            <span className="bankingTextOptions">Bihar Cooperative</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/lvb.png")} alt="topic" />
            <span className="bankingTextOptions">LVB</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/telangana.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">Telangana State</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/baroda.png")} alt="topic" />
            <span className="bankingTextOptions">Bank Of Baroda</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/indianBank.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">Indian Bank</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/dena.png")} alt="topic" />
            <span className="bankingTextOptions">Dena Bank</span>
          </div>
          <div>
            <img
              src={require("./../../assests/nav/maharashtra.png")}
              alt="topic"
            />
            <span className="bankingTextOptions">Bank of Maharashtra</span>
          </div>
          <div>
            <img src={require("./../../assests/nav/ippb.png")} alt="topic" />
            <span className="bankingTextOptions">IPPB</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankingMenu;
