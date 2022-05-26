import React, { useState, useEffect } from "react";
import "../pages/Play.css";
import Tile from "./Tile.js";


const Row = (props) =>{
    const [types, setTypes] = useState([]);
    let word = props.word.split('');
    let typtemp = [];
    const check = (str) => {
        //check completed rows to be implemented
        //updates types to be array len 5 with types of each letter
    }
    useEffect(() => {
        if(props.state === 0){
            setTypes(['Inactive','Inactive','Inactive','Inactive','Inactive'])
        }else if(props.word.length === props.length)
        {
            check(props.word)
        /*}else if(props.word.length === 0){
            setTypes(['Active','Inactive','Inactive','Inactive','Inactive'])*/
        }else{
            typtemp = [];
            for(let i = 0; i < word.length; i++)
            {
                if(word[i] !== ' '){
                    typtemp.push('Active');
                }else{
                    typtemp.push('Inactive');
                }
            }
            typtemp[typtemp.indexOf[' ']] = 'Active'
            setTypes[typtemp];
        }
    },[word])
    //assign types to each tile

    useEffect(() => {
        while(word.length < props.length){
            word.push(' ');
        }
    },[])
    //make all word arrays the length of a row


    let content = [...Array(props.length).keys()].map((index) => (
        <Tile
            value = {word[index]}
            type = {types[index]}
        />
    ));
    /*useEffect(() => {
        if(word.length === props.length){
            content = [...Array(props.length).keys()].map((index) => (
                <Tile
                    value = {word[index]}
                    type = {types[index]}
                />
            ));
            console.log("y");
        }
    },[word])*/
    
    //create tile objects to populate rows. 

    return(
        <div className = "Play-Row">
            {content}
        </div>
    )

}
export default Row;