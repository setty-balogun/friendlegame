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
    },[props])
    useEffect(() => {
        if(!props.state){
            setTypes(['Inactive','Inactive','Inactive','Inactive','Inactive'])
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
            setTypes(typtemp);
        }
    },[word])
    //make all word arrays the length of a row
    let content = null;
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

        if(props.completed){
            for(let i = 0; i < props.length; i++)
            {
                let delay = (i*.5).toString()+'s'
                $(".Play-Tile").filter("#"+props.id.toString()+i.toString()).css("animation", "pulse-tile")
                $(".Play-Tile").filter("#"+props.id.toString()+i.toString()).css("animation-delay", delay)
                $(".Play-Tile").filter("#"+props.id.toString()+i.toString()).css("transition-delay", delay)
                $(".Play-Tile").filter("#"+props.id.toString()+i.toString()).css("animation", "")
                
            }
        }

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
            

        }
    },[types])
    
    useEffect(() => {
        if(win){
            props.vic(props.id)
        }
    },[win])

    return(
        <div className = "Play-Row" key = {props.id} id = {props.id}>
            {content}
        </div>
    )

}
export default Row;