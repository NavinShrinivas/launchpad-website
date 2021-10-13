import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <ul class="logo">
          <li class="logostyle">
            <Link exact to="/">
              &lt;/HackerSpace&gt;
            </Link>
          </li>
        </ul>
        <ul class="links">
          <li class="linkstyle">
            <Link exact to="/reachus">
              Reach Us!
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
