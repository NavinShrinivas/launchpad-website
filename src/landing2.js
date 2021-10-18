import React from "react";
import "./landing2.css";
function Landing2(props) {
  return (
    <div class="about" id="about">
      <div class="aboutcard">
        <div class="aboutthings">
          <br />
          <br />
          <h1>What's LaunchPad?</h1>
          <br />

          <p class="abouttext2">
            LaunchPad is a{" "}
            <span class="emphasis">two-stage technical ideathon</span> organized
            by HackerSpace PESU EC Campus, conducted in a Hybrid mode, where the
            first round will be held online,{" "}
            <span class="emphasis">
              {" "}
              and the final round will be held offline
            </span>
            .
            <br />
            <br />
            We've got a number of exciting problem statements for you, but
            there's <span class="emphasis">
              {" "}
              no limit to the innovation
            </span>{" "}
            one can bring to the table!
            <br />
            <br />
            The solutions presented{" "}
            <span class="emphasis">should ideally make use of technology</span>,
            including, but not limited to, at least one of the following :{" "}
            <br /> <br />
            <ul class="tlist">
              <li>
                <span class="emphasis"> ARTIFICAL INTELLIGENCE</span>
              </li>
              <li>
                <span class="emphasis"> BLOCKCHAIN AND SMART CONTRACTS</span>
              </li>
              <li>
                <span class="emphasis"> CLOUD COMPUTING</span>
              </li>
              <li>
                <span class="emphasis"> DISTRIBUTED SYSTEMS</span>
              </li>
              <li>
                <span class="emphasis"> IOT (INTERNET OF THINGS)</span>
              </li>
              <li>
                <span class="emphasis"> BIG DATA</span>
              </li>
            </ul>
          </p>
        </div>

        <div class="probthings">
          <h1>Problem Statements</h1>
          <br />
          <p>
            <ol class="tlist">
              <li> Improving the State of the Hybrid Education Model</li>
              <li> Smart Carbon Footprint Tracking and Reduction</li>
              <li> Financial Inclusion For All</li>
              <li> Technologically Enabling Small Businesses</li>
            </ol>
          </p>
        </div>

        <div class="probthings">
          <h1>Sponsors</h1>
          Coming Soon!
        </div>

        <div class="probthings">
          <h1>Event Timeline</h1>
          <br />
          <p>
            <ol class="tlist">
              <li>
                REGISTRATIONS OPEN => <span class="emphasis">18/10/2021</span>
              </li>
              <li>
                TEAM FORMATION DEADLINE =>{" "}
                <span class="emphasis">22/10/2021</span>
              </li>
              <li>
                ROUND ONE FINAL SUBMISSION DEADLINE =>{" "}
                <span class="emphasis">26/10/2021</span>
              </li>
              <li>
                FINAL ROUND => <span class="emphasis">28/10/2021</span>
              </li>
            </ol>
          </p>
        </div>

        <div class="probthings">
          <h1>Additional Details</h1>
          <br />
          <p>
            <ol class="tlist">
              <li>
                <span class="emphasis">TEAM SIZE: 2-3</span>
              </li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Landing2;
