import React, { Component } from "react";
import "./Landing.css";
import logo from "./assets/lgo1.png";
import { useEffect, useState } from "react";

function calculateTimeLeft() {
  let retval = {};
  let lauchpadtime = new Date("Oct 21, 2021 00:00:00 GMT+05:30");
  let date_obj = new Date();
  let diff = lauchpadtime.getTime() - date_obj.getTime();
  if (diff > 0) {
    retval = {
      days:
        Math.floor(diff / (1000 * 60 * 60 * 24)) < 9
          ? "0" + Math.floor(diff / (1000 * 60 * 60 * 24))
          : Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:
        Math.floor((diff / (1000 * 60 * 60)) % 24) < 9
          ? "0" + Math.floor((diff / (1000 * 60 * 60)) % 24)
          : Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes:
        Math.floor((diff / 1000 / 60) % 60) < 9
          ? "0" + Math.floor((diff / 1000 / 60) % 60)
          : Math.floor((diff / 1000 / 60) % 60),
      seconds:
        Math.floor((diff / 1000) % 60) < 9
          ? "0" + Math.floor((diff / 1000) % 60)
          : Math.floor((diff / 1000) % 60),
    };
    return retval;
  } else {
    retval = {
      days: "Event over",
      hours: "",
      minutes: "",
      seconds: "",
    };

    return retval;
  }
}

function Landing(props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  console.log(timeLeft);
  /*
   *let timer = setInterval(() => {
   *  setTimeLeft(new Date());
   *  console.log(timeLeft.seconds);
   *}, 1000);
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <div className="mainlogo">
        <img
          src={logo}
          width={props.width}
          height={props.height}
          alt="LauchPad logo"
          class="lplogo"
        />
      </div>
      <div className="timer">
        <p className="timecard">
          {timeLeft.days}
          <br />
          DD
        </p>
        <p className="timecard">
          {timeLeft.hours}
          <br />
          HH
        </p>
        <p className="timecard">
          {timeLeft.minutes}
          <br />
          MM
        </p>
        <p className="timecard">
          {timeLeft.seconds}
          <br />
          SS
        </p>
      </div>
    </div>
  );
}

export default Landing;
