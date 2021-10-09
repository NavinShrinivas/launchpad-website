import React, { Component } from "react";
import "./Landing.css";
import logo from "./assets/lgo1.png";

class Landing extends Component {
  render() {
    return (
      <div className="mainlogo">
        <img
          src={logo}
          width={this.props.width}
          height={this.props.height}
          alt="LauchPad logo"
          class="lplogo"
        />
      </div>
    );
  }
}

export default Landing;
