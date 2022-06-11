import React, { useState, useEffect } from "react";
import "./CreateModal.css";

const SettingsButton = (props) => {

    return (
        <>
            <span onClick = {props.onClick} className = "settingsButton"> {props.text} </span>
        </>
    );
};

export default SettingsButton;