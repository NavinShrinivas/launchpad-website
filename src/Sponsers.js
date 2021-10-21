import React from "react";
import "./Sponsers.css";
import wolfram from "./assets/wolf1.png";
import pvl from "./assets/PVL.png";
function Sponsors(props) {
  return (
    <div class="sponsors" id="sponsors">
      <div class="sponsorcard">
        <div class="sponsorthings">
          <br />
          <div class="logoflex">
            <div class="col">
              <h2>Sponsored By : </h2>
              <a href="https://www.wolfram.com/language/">
                <img class="logo" src={wolfram} alt="wolfram logo" />
              </a>
            </div>
            <div class="col">
              <h2>Supported by : </h2>
              <a class="ac" href="https://pesuventurelabs.com/#/">
                <img class="logo2" src={pvl} alt="pvl logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sponsors;
