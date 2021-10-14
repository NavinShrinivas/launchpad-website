import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing.js";
import Reach from "./reach.js";
import Landing2 from "./landing2.js";
/*
 *ReactDOM.render(<Nav />, document.getElementById("navbar"));
 */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Route exact path="/reachus" component={() => <Reach />} />
      <Route
        exact
        path="/"
        component={() => (
          <div>
            <Landing width="400" height="300" />
            <Landing2 />
          </div>
        )}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

//If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
