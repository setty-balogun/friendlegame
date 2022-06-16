//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import "./Play.css";
import Row from "../modules/Row.js";
import { get, post } from "../../utilities";
import $ from "jquery";
import { Router } from "@reach/router";

const Play = (props) => {
    const [rows, setRows] = useState([]);
    const [words, setWords] = useState([]);
    const [wordString, setWs] = useState('');
    const [wordStringL, setWsl] = useState('');
    const [completed, setCompleted] = useState(true);
    const [secretWord, setSecretWord] = useState('SHORT');
    const [guessed, setGuessed] = useState({});
    const [sw, setSW] = useState({});
    //counts for letters in secret word
    const wordLength = 5;

    useEffect(() => {
        let c = props.code
        get("/api/gamecodes", {code: [c]}).then((obj)=>{
            setSecretWord((obj[0].word).toUpperCase())
        })
        let hist = localStorage.getItem(props.code);
        console.log(hist)
        if(hist){
            setWs(hist)
        }
        /*get("/api/history", {id: localStorage.getItem('id'), code: [c]}).then((obj) => {
            //check if obj contains word code
            console.log(obj)
            console.log(obj["$$c"])
            if(obj[c]){
                setWs(obj[c])
            }
        })*/
    }, []);

    const victory = (row) => {
        console.log("You Win");
        for(let i = 0; i < wordLength; i++)
        {
            let delay = (i*.2+3).toString()+'s'
            $(".Play-Tile").filter("#"+row.toString()+i.toString()).addClass("Play-TileVictory")
            $(".Play-Tile").filter("#"+row.toString()+i.toString()).css("animation-delay", delay)
            
        }
        $(".Play-Tile").filter("#"+(Number(row)+1).toString()+"0").removeClass("Active")
        $(".Play-Tile").filter("#"+(Number(row)+1).toString()+"0").addClass("Inactive")
    }

    useEffect(() => {
        let temp = {}
        var a = 97;
        for (var i = 0; i<26; i++)
            temp[String.fromCharCode(a + i).toUpperCase()] = 0;
        for(let l = 0; l < secretWord.length; l++){
            temp[secretWord[l]]+=1
        }
        setSW(temp)
    }, [secretWord]);

    const check = (str, row) => {
        let res = []
        let gw = {...sw}
        let guess = {...guessed}
        let seen = [];
        for( let i = 0; i < str.length; i++){
            let word = secretWord
            let letter = str[i]
            let sletter = word[i]
            if(word.indexOf(letter) === -1){
                res.push(['Grey'])
                if(guess[letter] !== 'Green' && guess[letter] !== 'Yellow'){
                    guess[letter] = 'Grey'
                }     
            }else if(letter === sletter){
                res.push(['Green'])
                guess[letter] = 'Green'
            }else{
                res.push(['Yellow'])
                if(guess[letter] !== 'Green'){
                    guess[letter] = 'Yellow'
                }
            }
            gw[letter]-=1;
        }
        for(let i = 0; i < str.length; i++){
            let letter = str[i]
            let numLet = sw[letter]
            if(!(seen.includes(letter))){
                seen.push[letter]
                if(gw[letter]<0 && numLet>0){
                    for(let j = 0; j < str.length; j++){
                        if(res[j] == 'Green' && str[j] == letter){
                            numLet-=1;
                        }
                    }
                    for(let j = 0; j < str.length; j++){
                        if(res[j] == 'Yellow' && str[j] == letter){
                            if(numLet == 0){
                                res[j] = "Grey"
                            }else{
                                numLet-=1;
                            }
                        }
                    }
                }
            }
            
        }
        setGuessed(guess)
        /*for(let i = 0; i < wordLength; i++)
        {
            let delay = (i*.2).toString()+'s'
            $(".Play-Tile").filter("#"+row.toString()+i.toString()).addClass("Play-TileVictory")
            $(".Play-Tile").filter("#"+row.toString()+i.toString()).css("animation-delay", delay)
            
        }*/
        for(let i = 0; i<  res.length; i++){
            //res[i] = res[i] + " Play-TileVictory "
        }
        //$(".Play-KeyTile").css("transtion-delay", 2.5)
        //$(".Play-KeyTile").css("transtion-delay", 0)
        return(res)
    }
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
        let comp = [...states];
        comp[comp.lastIndexOf(true)] = false;
        let rows = [...Array(6).keys()].map((index) => (
            <Row
                word = {wordStringL.slice(index*wordLength, index*wordLength+wordLength)}
                length = {wordLength}
                state = {states[index]}
                completed = {comp[index]}
                check = {check}
                id = {index.toString()}
                key = {index.toString()}
                vic = {victory}
            />
        ));
        
        setRows(rows);
    }, [words, completed]);

    useEffect(() => {
        //localStorage.setItem('ws', wordString)
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
        //post("/api/updateHistory", {id: localStorage.getItem('id'), code: props.code, ws: wordString}).then(() => console.log("updated"))
        localStorage.setItem(props.code,wordString);
    }, [wordString]);

    let keysR1 = ('QWERTYUIOP').split('')
    let keysR2 = ('ASDFGHJKL').split('')
    let keysR3 = ('1ZXCVBNM0').split('')

    const handleClick = (x) => {
        if($(".Play-Tile").hasClass("Active"))
        {
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

                        get("/api/words", {word: wordString.slice(-wordLength).toLowerCase()}).then((words) => {
                            if (words.length === 0) {
                                setTimeout(() => {
                                    $(".Play-Row").filter("#"+(Math.floor(wordString.length/wordLength)-1).toString()).removeClass("wiggle")
                                }, 1000);
                                $(".Play-Row").filter("#"+(Math.floor(wordString.length/wordLength)-1).toString()).addClass("wiggle")
                            } else {
                                setCompleted(true);  
                            }   
                        });
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
            <div onClick = {() => {handleClick(x)}} className = {"Play-KeyTile " + guessed[x]}>
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