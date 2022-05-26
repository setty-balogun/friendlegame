import React, { useState, useEffect } from "react";
import "../pages/Play.css";
import Tile from "./Tile.js";


const Row = (props) =>{
    const [types, setTypes] = useState([]);
    const word = props.word.split();
    const typtemp = [];
    const check = (str) => {
        //check completed rows to be implemented
        //updates types to be array len 5 with types of each letter
    }
    useEffect(() => {
        if(props.state === 0){
            setTypes(['Inactive','Inactive','Inactive','Inactive','Inactive'])
        }else if(props.word.length() === props.length)
        {
            check(props.word)
        /*}else if(props.word.length === 0){
            setTypes(['Active','Inactive','Inactive','Inactive','Inactive'])*/
        }else{
            typtemp = [];
            for(let i = 0; i < word.length; i++)
            {
                if(word[i] !== ' '){
                    typtemp.append['Active'];
                }else{
                    typtemp.append['Inactive'];
                }
            }
            typtemp[typtemp.indexOf[' ']] = 'Active'
            setTypes[typtemp];
        }
    },[word])
    //assign types to each tile

    useEffect(() => {
        while(word.length < props.length){
            word.append[' '];
        }
    },[props.word])
    //make all word arrays the length of a row


    const content = ' ';
    const type = null;
    
    if(word.length === props.length){
        content = [...Array(props.length).keys()].map((index)=> (
            <Tile
                value = {word[index]}
                type = {types[index]}
            />
        ));
    }
    //create tile objects to populate rows. 

    return(
        <div className = "Play-Row">
            {content}
        </div>
    )

}
export default Row;