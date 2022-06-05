import React, { useState, useEffect } from "react";
import "../pages/Play.css";
import Tile from "./Tile.js";


const Row = (props) =>{
    const [types, setTypes] = useState([]);
    //const [content, setContent] = useState([]);
    const [word, setWord] = useState(props.word.split('')); 
    let typtemp = [];
    useEffect(() => {
        setWord(props.word.split(''));
    },[props])
    useEffect(() => {
        console.log(props.state)
        if(!props.state){
            setTypes(['Inactive','Inactive','Inactive','Inactive','Inactive'])
            //console.log("get fucked");
        }else if(props.completed)
        {
            setTypes(props.check(props.word))
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
            typtemp[word.indexOf(' ')] = 'Active'
            //console.log(typtemp);
            setTypes(typtemp);
        }
    },[word])
    //make all word arrays the length of a row
    let content = null;
    //console.log(types);
    content = [...Array(props.length).keys()].map((index) => (
        <Tile
            value = {word[index]}
            type = {types.at(index)}
        />
    ));

    return(
        <div className = "Play-Row">
            {content}
        </div>
    )

}
export default Row;