import React, { useState, useEffect } from "react";
import "./CreateModal.css";

const HowToButton = (props) => {

    return (
        <>
            <span onClick = {props.onClick} className = "howToButton" > {props.text} </span>
        </>
    );
};

export default HowToButton;