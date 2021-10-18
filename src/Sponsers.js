import React from "react";
import "./Sponsers.css";
import wolfram from "./assets/wolfram.svg";
import balsmiq from "./assets/balsmiq.svg";
import pvl from "./assets/PVL.png";
function Sponsors(props) {
  return (
    <div class="sponsors" id="sponsors">
      <div class="sponsorcard">
        <div class="sponsorthings">
          <br />
          <div class="logoflex">
            <a href="https://www.instagram.com/peshackerspace.ecc/">
              <img class="logo" src={wolfram} alt="wolfram logo" />
            </a>
            <a href="https://www.instagram.com/peshackerspace.ecc/">
              <img class="logo" src={balsmiq} alt="balsmiq logo" />
            </a>
            <a href="https://www.instagram.com/peshackerspace.ecc/">
              <img class="logo2" src={pvl} alt="balsmiq logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sponsors;
