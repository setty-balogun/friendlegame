//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import "./Play.css";
import Row from "../modules/Row.js";

const Play = () => {
    const [rows, setRows] = useState([]);
    const [words, setWords] = useState(['JAZZY', 'XYLEM', 'SHORT','FU','','']);
    const [wordString, setWs] = useState('')
    const wordLength = 5;
    //let rows = null;
    //let words = ['JAZZY', 'XYLEM', 'SHORT','FU','',''];
    //setWords(['JAZZY', 'XYLEM', 'SHORT','FU','',''])
    useEffect(() => {
        setRows( words.map((w) => (
            <Row
                word = {w}
                length = {wordLength}
            />
            //creates row features
        )))
    }, [words]);

    useEffect(() => {
        let temp = wordString;
        while(temp.length < wordLength*6){
            temp = temp+' ';
        }
        let temp2 = [];
        for (let i = 0, charsLength = temp.length; i < charsLength; i += wordLength) {
            temp2.push(temp.substring(i, i + wordLength));
        }
        console.log(temp2);
        setWords(temp2);
    }, [wordString]);

    /*rows = words.map((w) => (
        <Row
            word = {w}
            length = {5}
        />
        //creates row features
    ));*/
    let keysR1 = ('QWERTYUIOP').split('')
    let keysR2 = ('ASDFGHJKL').split('')
    let keysR3 = ('1ZXCVBNM0').split('')

    const handleClick = (x) => {
        console.log(x);
        setWs(wordString+x);
        //handles onscreen button click
    }
    

    const RowsK = (x) => {
        let bttn = null
        if(x == 0){
            bttn = (
                <div onClick = {() => {handleClick(x)}} className = "Play-KeyTile Back">
                    Back
                </div>
            )
        }else if(x == 1){
            bttn = (
                <div onClick = {() => {handleClick(x)}} className = "Play-KeyTile Enter">
                    Enter
                </div>
            )
        }else{
            bttn = (
            <div onClick = {() => {handleClick(x)}} className = "Play-KeyTile">
                {x}
            </div>
            )
        }
        return(bttn);
    }
    let keyboardR1 = keysR1.map((w) => (
        RowsK(w)
    ));
    let keyboardR2 = keysR2.map((w) => (
        RowsK(w)
    ));
    let keyboardR3 = keysR3.map((w) => (
        RowsK(w)
    ));
    /*const keyBoard = document.querySelector('.keyboard')
    
    if(keyBoard){
        console.log("here");
        keyBoard.addEventListener('keydown', e => {
            let name = e.key;
            let code = e.code;
            console.log(name);
            if(code < 91 && code > 64){
                handleClick(name.toUpperCase());
            }
        })
    }*/
    let validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let allowed = true;
    //need to control repeats so keystroke only causes one key input on being held
    //for useability i dont want to use keyup
    document.addEventListener('keyup', e => {
        let name = e.key;
        let code = e.code;
        console.log(e.key)
        if(validLetters.includes(e.key)){
            console.log('here')
            handleClick(name.toUpperCase());
            allowed = false;
        }
    })
    document.addEventListener('keyup', e => {
        let name = e.key;
        let code = e.code;
        allowed = true;
    })
    
    
    

    return(
        <>
        <div className="Play-Container">
            <div className = "Play-BoardContainer">
                <div className = "Play-Board">
                    {rows}
                </div>
            </div>
            <div className = "Play-KeyboardContainer">
                <div className = "Play-Keyboard">
                    <div className = "Play-KeyboardRow1">
                        {keyboardR1}
                    </div>
                    <div className = "Play-KeyboardRow2">
                        {keyboardR2}
                    </div>
                    <div className = "Play-KeyboardRow3">
                        {keyboardR3}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Play;