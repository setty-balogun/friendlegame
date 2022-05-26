import React, { useState, useEffect } from "react";
import "../pages/Play.css";

const Tile = (props) =>{
    //type to be implemented
    return(
        <div className = "Play-Tile" >
            {props.value}
        </div>
    )
}
export default Tile;