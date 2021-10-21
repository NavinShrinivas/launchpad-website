import React from "react";
import "./Sponsers.css";
import wolfram from "./assets/wolf1.png";
import pvl from "./assets/PVL.png";
import balsamiq from "./assets/balasmiq.svg";
function Sponsors(props) {
  return (
    <div class="sponsors" id="sponsors">
      <div class="sponsorcard">
        <div class="sponsorthings">
          <br />
          <div class="logoflex">
            <div class="col">
              <h1>Sponsored By : </h1>
              <a href="https://www.wolfram.com/language/">
                <img class="logo1" src={wolfram} alt="wolfram logo" />
              </a>
              <p>The Wolfram language</p>
            </div>
          </div>
          <div class="logoflex">
            <div class="col">
              <h1>Supported by : </h1>
              <a class="ac" href="https://pesuventurelabs.com/#/">
                <img class="logo2" src={pvl} alt="pvl logo" />
              </a>
              <p>PESU Venture Labs</p>
              <a href="https://www.balsamiq.com">
                <img class="logo1" src={balsamiq} alt="balsamiq logo" />
              </a>
              <p>Balsamiq</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sponsors;
