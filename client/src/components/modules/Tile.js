import React, { useState, useEffect } from "react";
import "../pages/Play.css";

const Tile = (props) =>{
    //type to be implemented
    console.log(props.type);
    return(
        <div className = {"Play-Tile " + props.type}>
            {props.value}
        </div>
    )
}
export default Tile;