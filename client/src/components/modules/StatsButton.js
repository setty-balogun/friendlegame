import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import { useMediaPredicate } from "react-media-hook";

const StatsButton = (props) => {
    const lt630 = useMediaPredicate("(max-width: 630px)");
    const lt520 = useMediaPredicate("(max-width: 520px)");

    return (
        <>
            {!lt630 && <span onClick = {props.onClick} className = "statsButton button-size-n" > {props.text} </span>}
            {(lt630 && lt520) && <span onClick = {props.onClick} className = "statsButton button-size-sm2" > {props.text} </span>}
            {(lt630 && !lt520) && <span onClick = {props.onClick} className = "statsButton button-size-sm" > {props.text} </span>}
        </>
    );
}

export default StatsButton;