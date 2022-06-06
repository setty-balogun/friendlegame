import React, { useState, useEffect } from "react";
import "../pages/Play.css";
import Tile from "./Tile.js";
import $ from "jquery";

const Row = (props) =>{
    const [types, setTypes] = useState([]);
    //const [content, setContent] = useState([]);
    const [word, setWord] = useState(props.word.split('')); 
    const [win, setWin] = useState(false); 
    let typtemp = [];
    useEffect(() => {
        setWord(props.word.split(''));
        //console.log(props.id)
    },[props])
    useEffect(() => {
        console.log(props.state)
        if(!props.state){
            setTypes(['Inactive','Inactive','Inactive','Inactive','Inactive'])
            //console.log("get fucked");
        }else if(props.completed)
        {
            setTypes(props.check(props.word,props.id))
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
            key = {props.id+index.toString()}
            id = {props.id+index.toString()}
            win = {win.toString()}
        />
    ));
    useEffect(() => {
        let right = true
        if(types.length !== props.length){
            right = false
        }
        for(let i = 0; i < types.length; i++){
            if(types[i] != "Green"){
                right = false
            }
        }
        if(right){
            //content.addClass("Play-TileVictory");
            setWin(true)
            props.vic(props.id)

        }
    },[types])
    

    return(
        <div className = "Play-Row" key = {props.id} id = {props.id}>
            {content}
        </div>
    )

}
export default Row;