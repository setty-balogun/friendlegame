import React, { useState, useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";
import "./OpenButton.css";
import "./CreateModal.css";

const OpenButton = (props) => {
    const lt500 = useMediaPredicate("(max-width: 500px)");

    return (
        <>
            {lt500 && <span onClick = {props.onClick} className = "startButton sz"> {props.text} </span>}
            {!lt500 && <span onClick = {props.onClick} className = "startButton szLarge"> {props.text} </span>}
        </>
    );
};

export default OpenButton;