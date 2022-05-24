import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { post } from "../../utilities";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  const test = () => {
    const body = {code: "1234", word: "apple"};
    post("/api/words", body);
  }
  
  return (
    <>
      <div id="container">
      <h1>Good luck on your project :)</h1>
      <h2> What you need to change in this skeleton</h2>
      <button onClick={test}> jet</button>
      <ul>
        <li>
          Change the Frontend CLIENT_ID (Skeleton.js) to your team's CLIENT_ID (obtain this at
          http://weblab.to/clientid)
        </li>
        <li>Change the Server CLIENT_ID to the same CLIENT_ID (auth.js)</li>
        <li>
          Change the Database SRV (mongoConnectionURL) for Atlas (server.js). You got this in the
          MongoDB setup.
        </li>
        <li>Change the Database Name for MongoDB to whatever you put in the SRV (server.js)</li>
      </ul>
      <h2>How to go from this skeleton to our actual app</h2>
      <a href="https://docs.google.com/document/d/110JdHAn3Wnp3_AyQLkqH2W8h5oby7OVsYIeHYSiUzRs/edit?usp=sharing">Check out this getting started guide</a>
      </div>
    </>
  );
};

export default Skeleton;
