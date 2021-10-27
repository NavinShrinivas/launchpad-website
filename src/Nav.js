import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <ul class="logo">
          <li class="logostyle">
            <a href="https://hackerspace-pesu.herokuapp.com/">
              &lt;/HackerSpace&gt;&nbsp;
              <span class="cshidden"></span>
              <span class="campus">EC Campus</span>
            </a>
          </li>
        </ul>
        <div class="links">
          <a class="linktext" href="/#about">
            About
          </a>
          <Link class="linktext" exact to="/reachus">
            Reach Us!
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
