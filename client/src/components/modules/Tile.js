import React, { useState, useEffect } from "react";
import "../pages/Play.css";

const Tile = (props) =>{
    const [w, setW] = useState('false');


    useEffect(() => {
    },[])

    useEffect(() => {
        if(props.win){
            setW('true');
        }
    },[props.win])
    

    return(
        <div className = {"Play-Tile " + props.type} win = {props.win} key = {props.id} id = {props.id}>
            {props.value}
        </div>
    )
}
export default Tile;