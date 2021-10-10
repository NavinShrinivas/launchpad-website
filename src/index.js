import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Landing from "./Landing";
import Nav from "./Nav";

ReactDOM.render(<Nav />, document.getElementById("navbar"));

ReactDOM.render(
  <React.StrictMode>
    <Landing width="400" height="300" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
