import React, { Component } from "react";
import "./reach.css";
import instalogo from "./assets/inslogo.svg";
import disclogo from "./assets/dislogo.svg";
class Reach extends Component {
  render() {
    return (
      <div class="linkmain">
        <div className="maintext">
          <p className="mainp">
            Reach us on <span class="emphasis">any</span> of the following
            places :{" "}
          </p>
        </div>
        <div>
          <div className="reachlogo">
            <div className="logopcap">
              <a href="https://www.instagram.com/peshackerspace.ecc/">
                <img src={instalogo} alt="instagram logo" />
              </a>
              <a
                href="https://www.instagram.com/peshackerspace.ecc/"
                className="logocap"
              >
                HackerSpace ECC
              </a>
            </div>
            <div className="logopcap">
              <a href="https://www.instagram.com/peshackerspace/">
                <img src={instalogo} alt="instagram logo" />
              </a>
              <a
                href="https://www.instagram.com/peshackerspace/"
                className="logocap"
              >
                HackerSpace RR
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="reachlogo">
            <div className="logopcap">
              <a href="https://discord.gg/SF83DTDu8r">
                <img src={disclogo} alt="instagram logo" />
              </a>
              <a href="https://discord.gg/SF83DTDu8r" className="logocap">
                HackerSpace Server
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reach;
