import React, { useState, useEffect } from "react";
import "../pages/Play.css";
import Tile from "./Tile.js";


const Row = (props) =>{
    const [types, setTypes] = useState([]);
    //const [content, setContent] = useState([]);
    const [word, setWord] = useState(props.word.split('')); 
    let typtemp = [];
    const check = (str) => {
        //check completed rows to be implemented
        //updates types to be array len 5 with types of each letter
    }
    useEffect(() => {
        setWord(props.word.split(''));
    },[props])
    useEffect(() => {
        console.log(props.state)
        if(!props.state){
            setTypes(['Inactive','Inactive','Inactive','Inactive','Inactive'])
            console.log("get fucked");
        }else if(props.completed)
        {
            check(word)
        /*}else if(props.word.length === 0){
            setTypes(['Active','Inactive','Inactive','Inactive','Inactive'])*/
        }else{
            typtemp = [];
            for(let i = 0; i < props.word.length; i++)
            {
                if(word[i] == ' '){
                    typtemp.push('Inactive');
                }else{
                    typtemp.push('Active');
                }
            }
            //typtemp[word.indexOf(' ')] = 'Active'
            console.log(typtemp);
            setTypes(typtemp);
        }
    },[word])

    /*typtemp = [];
            for(let i = 0; i < word.length; i++)
            {
                if(word[i] !== ' '){
                    typtemp.push('Active');
                }else{
                    typtemp.push('Inactive');
                }
            }
            typtemp[typtemp.indexOf[' ']] = 'Active'
            //console.log(typtemp);
            setTypes(typtemp);*/

    //assign types to each tile

    /*useEffect(() => {
        while(word.length < props.length){
            word.push(' ');
        }
    },[])*/
    //make all word arrays the length of a row
    let content = null;
    //console.log(types);
    content = [...Array(props.length).keys()].map((index) => (
        <Tile
            value = {word[index]}
            type = {types.at(index)}
        />
    ));
    /*useEffect(() => {
        let cont = [...Array(props.length).keys()].map((index) => (
            <Tile
                value = {word[index]}
                type = {types[index]}
            />
        ));
        console.log("y");
        setContent(cont);
    },[types])*/
    
    //create tile objects to populate rows. 

    return(
        <div className = "Play-Row">
            {content}
        </div>
    )

}
export default Row;