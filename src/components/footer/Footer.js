import React from "react";
import "./../../css/footer.css";

function Footer() {
  return (
    <div className="foot">
      <div class="container-fluid row">
        <div class="col-sm-4 aboutGuidely">
          <div>About Guidely</div>
          <div>
            Guidely is one of India's leading bank exam preparation
            platforms.Our
            <br />
            mission is to provide the best online learning platform for all{" "}
            <br />
            government job aspirants. We bring you all the latest news,
            <br />
            notifications, and updates related to every important exam and offer
            <br />
            you the top online practice and preparation platform to help you get
            <br />
            closer to your success.
          </div>
          <img src="" alt="" height="50px" width="50px" />
          <div>
            42/10, Appaji arcade, Thindal, Erode,Tamil
            <br />
            nadu, India - 638012
          </div>
        </div>
        <div class="col-sm-2">
            <ul className="guidelyCompanyFooter">
            <li>Company</li>
            <br />
                <li>Test Series</li>
                <li>E-books</li>
                <li>Publication</li>
                <li>Video Course</li>
                <li>Practice</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Sitemap</li>
                <li>Offers</li>
                <li>Refer & Earn</li>
                <li>Refund Policy</li>
                <li>Payment FAQs</li>
            </ul>
        </div>
        <div class="col-sm-2">
            <ul className="guidelyCompanyFooter">
            <li>Useful Links</li>
            <br />
                <li>Free Mock Test</li>
                <li>Topic Test</li>
                <li>Combo Mock Test Series</li>
                <li>IBPS RRB</li>
                <li>IBPS RRB PO Mock Test</li>
                <li>IBPS PO Mock Test</li>
                <li>IBPS Clerk Mock Test</li>
                <li>SBI PO Mock Test</li>
                <li>SBI Clerk Mock Test</li>
                <li>IBPS SO Mock Test</li>
                <li>LIC HFL Mock Test</li>
            </ul>
        </div>
        <div class="col-sm-4 aboutGuidely">
          Get mobile App one
          <div>Follow Us On</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
