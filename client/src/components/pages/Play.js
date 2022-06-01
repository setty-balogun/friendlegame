//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import "./Play.css";
import Row from "../modules/Row.js";

const Play = (props) => {
    const [rows, setRows] = useState([]);
    const [words, setWords] = useState([]);
    const [wordString, setWs] = useState('');
    const [wordStringL, setWsl] = useState('');
    const [completed, setCompleted] = useState(true);
    const [count, setty] = useState('');
    const wordLength = 5;

    
    useEffect(() => {

        let active = (wordStringL.indexOf(' ')/wordLength < 0) ? 6 : (wordStringL.indexOf(' ')/wordLength);
        console.log('active ' + active);
        for (let word in words) {
            console.log(words.indexOf(word));
        }

        let states = [false, false, false, false, false, false];
        for (let i = 0; i < 6; i++) {
            if (i <= active) { states[i] = true; } 
            if ((!completed && i<=active && active%1==0) && !(!completed && (i+1)<=active && active%1==0)) {
                states[i] = false;
            }
        } 

        let rows = [...Array(6).keys()].map((index) => (
            <Row
                word = {wordStringL.slice(index*wordLength, index*wordLength+wordLength)}
                length = {wordLength}
                state = {states[index]}
            />
        ));
        
        setRows(rows);
    }, [words, completed]);

    useEffect(() => {
        let temp = wordString;
        while(temp.length < wordLength*6){
            temp = temp+' ';
        }
        setWsl(temp);
        let temp2 = [];
        for (let i = 0, charsLength = temp.length; i < charsLength; i += wordLength) {
            temp2.push(temp.substring(i, i + wordLength));
        }
        setWords(temp2);
    }, [wordString]);

    let keysR1 = ('QWERTYUIOP').split('')
    let keysR2 = ('ASDFGHJKL').split('')
    let keysR3 = ('1ZXCVBNM0').split('')

    const handleClick = (x) => {
        //console.log(x);
        //console.log(wordString);
        if(wordString.length%wordLength === 0){
            if(completed){
                if(x == 0 || x == 1){
                    return
                }
                setWs(wordString+x); 
                setCompleted(false);
            }else{
                if(x == 0){
                    setWs(wordString.slice(0,-1))
                }else if(x == 1){
                    //compare to valid word database here
                    // placeholder for check function
                    setCompleted(true);
                    console.log("asldfj");
                }else{
                    return;
                }
            }
        }else if(x == 0){
            if(wordString.length !== 0){
                if(wordString.length%wordLength === 1){
                    setCompleted(true);
                    
                }
                setWs(wordString.slice(0,-1))
            }
        }else if(x == 1){
            //something to say word is not complete
            //console.log("word not complete");
        }else{
            setWs(wordString+x);
        }
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
    let validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    useEffect(() => {
        const handle = (e) => {
            let name = e.key;
            let code = e.code;
            if(validLetters.includes(name)){
                handleClick(name.toUpperCase());
            }else if(code == "Enter"){
                handleClick('1');
            }else if(code == "Backspace"){
                handleClick('0');
            }
        }
        window.addEventListener('keyup', handle)
        return () => {
            window.removeEventListener('keyup', handle)
        }
    }, [handleClick])

    
    

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