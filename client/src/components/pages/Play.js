import React, { Component } from "react";
import "./Play.css";
import Row from "../modules/Row.js";
//import { Button } from "react-bootstrap";

const Play = () => {
    let rows = null;
    let words = ['JAZZY', 'XYLEM', 'SHORT','FU','',''];
    rows = words.map((w) => (
        <Row
            word = {w}
            length = {5}
        />
        //creates row features
    ));
    let keysR1 = ('QWERTYUIOP').split('')
    let keysR2 = ('ASDFGHJKL').split('')
    let keysR3 = ('1ZXCVBNM0').split('')

    const handleClick = (x) => {
        console.log(x);
    }
    let keyboardR1 = keysR1.map((w) => (
        <div id={w} value = {w} onClick = {() => {handleClick(w)}} className = "Play-KeyTile">
            {w}
        </div>
        
    ));
    let keyboardR2 = keysR2.map((w) => (
        <div value = {w} onClick = {() => {handleClick(w)}} className = "Play-KeyTile">
            {w}
        </div>
    ));

    const Row3 = (x) => {
        let bttn = null
        if(x == 0){
            bttn = (
                <div id = {x} onClick = {() => {handleClick(x)}} className = "Play-KeyTile Back">
                    Back
                </div>
            )
        }else if(x == 1){
            bttn = (
                <div name = {x} id = '1' onClick = {() => {handleClick(x)}} className = "Play-KeyTile Enter">
                    Enter
                </div>
            )
        }else{
            bttn = (
            <div id = {x} onClick = {() => {handleClick(x)}} className = "Play-KeyTile">
                {x}
            </div>
            )
        }
        /*console.log(bttn)
        document.getElementsByClassName("Play-KeyTile").addEventListener("keydown", (event) => {
            if(event.key == x){
                document.getElementById(x).click();
            }
        }, false);*/
        return(bttn);

    }
    let keyboardR3 = keysR3.map((w) => (
        Row3(w)
    ));
    //console.log(document.getElementsById('1'));
    return(
        <>
        <div className="Play-Container">
            <div className = "Play-BoardContainer">
                <div className = "Play-Board">
                    {/*<div className = "Play-Row">
                        <div className = "Play-Tile Green">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                    </div><div className = "Play-Row">
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                    </div><div className = "Play-Row">
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                    </div><div className = "Play-Row">
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                    </div>
                    <div className = "Play-Row">
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                    </div>
                    <div className = "Play-Row">
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
                        <div className = "Play-Tile">1</div>
    </div>*/}
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