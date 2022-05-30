import React, { useState, useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";
import "./CreateModal.css";

const RedirectButton = (props) => {
    const lt500 = useMediaPredicate("(max-width: 500px)");

    return (
        <>
            <span onClick = {props.onClick} className = "redirButton szLargeR"> {props.text} </span>
        </>
    );
};

export default RedirectButton;