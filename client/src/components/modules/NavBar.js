import { Link } from "@reach/router";
import React, { useState, useEffect } from "react";
import HowToModal from "../modules/HowToModal.js";
import SettingsModal from "../modules/SettingsModal.js";
import { get, post } from "../../utilities";

import "./NavBar.css";
import "../../utilities.css";

const NavBar = (props) => {
  let title = ('FRIENDLE').split('');
  let frien = title.slice(0,5).map((w) => (
    <div className = "Nav-Logo green">
        {w}
    </div>   
  ));

  let dle = title.slice(5).map((w) => (
    <div className = "Nav-Logo yellow">
        {w}
    </div>   
  ));

let friendle = frien.concat(dle);
  return (
    <>
    <div className = "Nav-Container">
      <div className="Nav-icon">
        <div className="uhleft">
          <HowToModal />
        </div>
        <div className="anothercont">
          {friendle}
        </div>
        <div className="uhright">
          <SettingsModal />
        </div>
      </div>
    </div>
    </>
  );
};

export default NavBar;
