import React, { Component } from "react";
import "./reach.css";
import instalogo from "./assets/inslogo.svg";

class Reach extends Component {
  render() {
    return (
      <div>
        <div className="maintext">
          <p className="mainp">Reach us on any of the following places : </p>
        </div>
        <div>
          <div className="reachlogo">
            <div className="logopcap">
              <a href="https://www.instagram.com/peshackerspace.ecc/">
                <img src={instalogo} alt="instagram logo" />
              </a>
              <p className="logocap">HackerSpace ECC</p>
            </div>
            <div className="logopcap">
              <a href="https://www.instagram.com/peshackerspace/">
                <img src={instalogo} alt="instagram logo" />
              </a>
              <p className="logocap">HackerSpace RR</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reach;
