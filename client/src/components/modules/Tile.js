import React, { useState, useEffect } from "react";
import "../pages/Play.css";

const Tile = (props) =>{
    const [w, setW] = useState('false');
    //type to be implemented
    //console.log(props.type);

    useEffect(() => {
        console.log(props.id)
    },[])

    useEffect(() => {
        if(props.win){
            setW('true');
        }
        console.log(props.win) 
    },[props.win])
    

    return(
        <div className = {"Play-Tile " + props.type} win = {props.win} key = {props.id} id = {props.id}>
            {props.value}
        </div>
    )
}
export default Tile;