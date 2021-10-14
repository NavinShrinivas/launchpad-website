import React from "react";
import "./landing2.css";
function Landing2(props) {
  return (
    <div class="about" id="about">
      <div class="aboutcard">
        <div class="aboutthings">
          <h2 class="abouthead">About LaunchPad</h2>
          <br />
          <p class="abouttext1">
            HackerSpace LaunchPad is an ideathon where students think of
            solutions to some of the world's most pressing issues whilst keeping
            technology as a major driver of change.
            <br /> Today's rapidly changing world presents a unique set of
            challenges that require innovation at the intersection of technology
            and systems thinking applied to the world around us, and we at
            HackerSpace EC Campus believe we can help foster this very spirit of
            innovation, future-oriented thinking and cross-domain creativity
            through LaunchPad, our first ever ideathon. <br />{" "}
          </p>
          <p class="abouttext2">
            LaunchPad is a three-stage ideathon conducted in a Hybrid mode,
            where the first two rounds will be held online, and the last round
            will be held offline. A segment of problem statements shall be
            provided upon which students can base their ideas, but there's no
            effective restriction on the problems that can be solved. <br /> The
            solutions presented must make use of technology, including, but not
            limited to, at least one of the following : <br /> <br />
            <ul class="tlist">
              <li> Artifical Intelligence</li>
              <li> Machine Learning </li>
              <li> Blockchain and Smart Contracts </li>
              <li>Cloud Computing </li>
              <li>Distributed Systems</li>
              <li>IOT</li>
              <li>Big Data</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Landing2;
