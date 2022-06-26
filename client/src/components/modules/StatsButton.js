import React, { useState, useEffect } from "react";
import "./CreateModal.css";

const StatsButton = (props) => {

    return (
        <>
            <span onClick = {props.onClick} className = "statsButton"> {props.text} </span>
        </>
    );
};

export default StatsButton;