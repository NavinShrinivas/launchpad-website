import React from "react";
import "./Landing.css";
import logo from "./assets/lgo1.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function calculateTimeLeft() {
  let retval = {};
  let lauchpadtime = new Date("Oct 26, 2021 23:59:00 GMT+05:30");
  let date_obj = new Date();
  let diff = lauchpadtime.getTime() - date_obj.getTime();
  if (diff > 0) {
    retval = {
      days:
        Math.floor(diff / (1000 * 60 * 60 * 24)) <= 9
          ? "0" + Math.floor(diff / (1000 * 60 * 60 * 24))
          : Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:
        Math.floor((diff / (1000 * 60 * 60)) % 24) <= 9
          ? "0" + Math.floor((diff / (1000 * 60 * 60)) % 24)
          : Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes:
        Math.floor((diff / 1000 / 60) % 60) <= 9
          ? "0" + Math.floor((diff / 1000 / 60) % 60)
          : Math.floor((diff / 1000 / 60) % 60),
      seconds:
        Math.floor((diff / 1000) % 60) <= 9
          ? "0" + Math.floor((diff / 1000) % 60)
          : Math.floor((diff / 1000) % 60),
    };
    return retval;
  } else {
    retval = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    return retval;
  }
}

function regsiterrender() {
  return (
    <>
      <a href="https://bit.ly/3BSbXyl">
        <button className="registerbutton">Register Now!</button>
      </a>
      <a href="https://discord.gg/9zbDAh76Y2">
        <button className="registerbutton">Event Discord Server!</button>
      </a>
    </>
  );
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
    <div class="aboutcard">
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
          {timeLeft.days} <br />
          DD
        </p>
        <p className="timecard">
          {timeLeft.hours}
          <br /> HH
        </p>
        <p className="timecard">
          {timeLeft.minutes} <br /> MM
        </p>
        <p className="timecard">
          {timeLeft.seconds}
          <br /> SS
        </p>
      </div>
      <div className="register">{regsiterrender()}</div>
      <div class="mainlogo">
        <p
          style={{
            "text-align": "center",
            color: "white",
            padding: "60px 10px 0px 20px",
          }}
        >
          Keep an eye out for updates about the event on this website.
          <br />
          You can also follow up through other platforms listed{" "}
          <Link exact to="/reachus" className="platformlink">
            here
          </Link>
          !
        </p>
      </div>
    </div>
  );
}
export default Landing;
