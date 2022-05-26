import React, { Component } from "react";
import "./Play.css";
import Row from "../modules/Row.js";

const Play = () => {
    let rows = null;
    let words = ['1', '1', '1','1','1'];
    rows = words.map((w) => (
        <Row
            word = {w}
            length = {5}
        />
        //creates row features
    ));


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
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                    </div>
                    <div className = "Play-KeyboardRow2">
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                    </div>
                    <div className = "Play-KeyboardRow3">
                        <div className = "Play-KeyTile Back">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile">
                            Q
                        </div>
                        <div className = "Play-KeyTile Enter">
                            Q
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Play;