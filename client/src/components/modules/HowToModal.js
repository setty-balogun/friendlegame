import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import "./HowToModal.css";
import { useMediaPredicate } from "react-media-hook";
import HowToButton from "./HowToButton.js";
import "./NavBar.css";
import {QRCodeSVG} from 'qrcode.react';
import $ from "jquery";

const HowToModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };

    const lt330 = useMediaPredicate("(max-width: 330px)");
    const lt280 = useMediaPredicate("(max-width: 280px)");
    let short = ("SHORT".split('')).slice(0,5).map((w) => (
        <div className = "Nav-Logo green modalt" id = {w} >
            {w}
        </div>   
      ));
    let shot = (
        <>
        <div className="Nav-Logo green modalt b1">S</div>
        <div className="Nav-Logo green modalt b2">H</div>
        <div className="Nav-Logo green modalt b3">O</div>
        <div className="Nav-Logo green modalt b4">R</div>
        <div className="Nav-Logo green modalt b5">T</div>
        </>  
        
      )
    let count = (
        <>
        <div className="Nav-Logo green modalt g1">1</div>
        <div className="Nav-Logo green modalt g2">2</div>
        <div className="Nav-Logo green modalt g3">3</div>
        <div className="Nav-Logo green modalt g4">4</div>
        <div className="Nav-Logo green modalt g5">5</div>
        <div className="Nav-Logo green modalt g6">6</div>

        </>  
        
      )
    
    let greenex1 = ("MALL".split('')).slice(0,4).map((w) => (
        <div className = "Nav-Logo modalt grey">
            {w}
        </div>   
      ));
    let greenex2 = ("S".split('')).map((w) => (
        <div className = "Nav-Logo modalt green">
            {w}
        </div>   
      ));
    let greenex = greenex2.concat(greenex1)

    let yellowex1 = ("RUN".split('')).slice(0,3).map((w) => (
        <div className = "Nav-Logo modalt grey">
            {w}
        </div>   
      ));
      let yellowex2 = ("T".split('')).map((w) => (
        <div className = "Nav-Logo modalt yellow">
            {w}
        </div>   
      ));
      let yellowex3 = ("Y".split('')).map((w) => (
        <div className = "Nav-Logo modalt grey">
            {w}
        </div>   
      ));

      let greyex = ("MICRO".split('')).slice(0,5).map((w) => (
        <div className = "Nav-Logo modalt grey">
            {w}
        </div>   
      ));

      let yellowex = yellowex1.concat(yellowex2, yellowex3)

      let sett = ("SETTY".split('')).slice(0,5).map((w) => (
        <div className = "Nav-Logo modalt">
            {w}
        </div>   
      ));

      let x = ("X".split('')).slice(0,5).map((w) => (
        <div className = "Nav-Logo modalt x">
            {w}
        </div>   
      ));
    return (
        <>
        <div className="modalDef">
            <HowToButton onClick={handleOpen}> </HowToButton>
           
            <Modal className="width scroll" centered="true" show={visible} onHide={handleClose}>
                <Modal.Body className="scroll"> 
                    <div>
                        <h2 className="joinModal-Header jMHeaderSz"> How To Play</h2>
                        <div className="joinModal-Underline"></div>
                        <div>
                            <div className = "elem"> <span className ="bold"> Create </span>your puzzle by hitting the "Create a Friendle Button"</div>
                            <div className = "elem"> <span className ="bold"> Share </span>your puzzle by sending the provided link or code to your friends</div>
                            <div className = "elem"> <span className ="bold"> Play </span>puzzles from your freinds by using their link or hitting the "Join a Friendle" button and entering their code</div>
                        </div>
                        <div className = "horline"></div>
                        <h2 className="joinModal-SubHeader"> Rules </h2>
                        <div className="joinModal-Underline"></div>
                        <div className = "elems">Guess the word within 6 attempts</div> 
                        <div className ="example"> {count} </div>
                        <div className = "elems">Every guess must be a valid five-letter word <div className = "xx">{x}</div></div>
                        <div className ="example wiggle"> {sett} </div> 
                        <div className='spacing'></div>
                        <div className = "elems">Hit enter to submit.</div>
                        <div className ="flexbox">
                        <div className ="kex"></div>
                        </div>
                        <div className = "elems">After each guess, the color of the tiles will change to show how close your guess was to the word.</div>    
                        <div className='spacingLarge'></div>
                        <div className = "elemd">Green tiles indicate the letter is in the correct spot:</div>
                        <div className ="example"> {greenex} </div>
                        <div className='spacing'></div>
                        <div className = "elemd">Yellow tiles indicate the letter is in the word but in the wrong spot:</div>
                        <div className ="example"> {yellowex} </div>
                        <div className='spacing'></div>
                        <div className = "elemd">Gray tiles contain letters that are not in the word:</div>
                        <div className ="example"> {greyex} </div>
                        <div className='spacingLarge'></div>
                        <div className = "horline"></div>
                        <div className = "elems">Now have a good time and celebrate when you solve a freindle!</div>
                        <div className ="example"> {shot} </div>
                    </div>
                    <div className='spacing'></div>

                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default HowToModal;