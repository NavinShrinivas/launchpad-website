import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <ul class="logo">
          <li class="logostyle">
            <a href="/">&lt;/HackerSpace&gt;</a>
          </li>
        </ul>
        <ul class="links">
          <li class="linkstyle">
            <a href="link">link2</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
