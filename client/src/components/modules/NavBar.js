import { Link } from "@reach/router";
import React, { useState, useEffect } from "react";
import HowToModal from "../modules/HowToModal.js";
import SettingsModal from "../modules/SettingsModal.js";
import StatsModal from "../modules/StatsModal.js";
import BlankButton from "./BlankButton.js";
import { get, post } from "../../utilities";
import { useMediaPredicate } from "react-media-hook";

import "./NavBar.css";
import "../../utilities.css";

const NavBar = (props) => {
  const lt630 = useMediaPredicate("(max-width: 630px)");
  const lt520 = useMediaPredicate("(max-width: 520px)");

  let title = ('FRIENDLE').split('');
  const handleClick = () => {
    window.location.href = '/';
  }

  let frien;
  if (lt630) {
    if (lt520) {
      frien = title.slice(0,5).map((w) => (
        <div className = "Nav-Logo green letter-size-sm2">
            {w}
        </div>   
      ));
    } else {
      frien = title.slice(0,5).map((w) => (
        <div className = "Nav-Logo green letter-size-sm">
            {w}
        </div>   
      ));
    }
  } else {
    frien = title.slice(0,5).map((w) => (
      <div className = "Nav-Logo green letter-size-n">
          {w}
      </div>   
    ));
  }

  let dle;
  if (lt630) {
    if (lt520) {
      dle = title.slice(5).map((w) => (
        <div className = "Nav-Logo yellow letter-size-sm2">
            {w}
        </div>   
      ));
    } else {
      dle = title.slice(5).map((w) => (
        <div className = "Nav-Logo yellow letter-size-sm">
            {w}
        </div>   
      ));
    }
  } else {
    dle = title.slice(5).map((w) => (
      <div className = "Nav-Logo yellow letter-size-n ">
          {w}
      </div>   
    ));
  }

  

let friendle = frien.concat(dle);
  return (
    <>
    <div className = "Nav-Container">
      <div className="Nav-icon">
        <div className="uhleft">
          <HowToModal />
          <BlankButton />
        </div>
        {(lt630 && lt520) && <div className="anothercont cont-sm2" onClick = {handleClick}> {friendle} </div>}
        {!lt630 && <div className="anothercont cont-nm" onClick = {handleClick}> {friendle} </div>}
        {(!lt520 && lt630) && <div className="anothercont cont-sm" onClick = {handleClick}> {friendle} </div>}
        <div className="uhright">
          <StatsModal finishedGame={props.finishedGame} gameData={props.gameData} />
          <SettingsModal />
          
        </div>
      </div>
    </div>
    </>
  );
};

export default NavBar;
