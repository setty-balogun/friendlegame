import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import { useMediaPredicate } from "react-media-hook";
import HowToButton from "./HowToButton.js";
import "./NavBar.css";
import {QRCodeSVG} from 'qrcode.react';

const HowToModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };

    const lt330 = useMediaPredicate("(max-width: 330px)");
    const lt280 = useMediaPredicate("(max-width: 280px)");
    let short = ("SHORT".split('')).slice(0,5).map((w) => (
        <div className = "Nav-Logo green modalt">
            {w}
        </div>   
      ));
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

      let greyex = ("XYLEM".split('')).slice(0,5).map((w) => (
        <div className = "Nav-Logo modalt grey">
            {w}
        </div>   
      ));

      let yellowex = yellowex1.concat(yellowex2, yellowex3)


    return (
        <>
        <div className="modalDef">
            <HowToButton onClick={handleOpen}> </HowToButton>
           
            <Modal className="width scroll" centered="true" show={visible} onHide={handleClose}>
                <Modal.Body classname="scroll"> 
                    {/*{!lt330 && <div className="joinModal-Header jMHeaderSz">How To Play</div>}
                    {(lt330 && !lt280) && <div className="joinModal-Header jMHeaderSzSmall">How To Play</div>}
    {(lt330 && lt280) && <div className="joinModal-Header jMHeaderSzSmaller">How To Play</div>}*/}
                    {/*<div className="joinModal-Underline"></div>*/}
                    <div className = "modal-dialog-scrollable">
                    <h2 className="joinModal-Header jMHeaderSz"> How To Create a Friendle</h2>
                    <div className="joinModal-Underline"></div>
                    <div className ="columns">
                        <div className ="column">
                            <p>Click the “Create a Friendle” button</p>
                            <div className='spacingLarge'></div>
                            <p>Type a five letter word</p>
                            <div className='spacingLarge'></div>
                            <p>Share the link or QR code with a friend!</p>
                        </div>
                        <div className = "column">
                            <div className = "startButtonM">
                                Create a Friendle
                            </div>
                            <div className='spacingLarge'></div>
                            <div className='spacingLarge'></div>
                            <div className = "shareButtonM">
                                Share Friendle
                            </div>
                        </div>
                    </div>     
                    <h2 className="joinModal-Header jMHeaderSz"> How to Join a Friendle </h2>
                    <div className="joinModal-Underline"></div>
                    <div className ="columns">
                        <div className = "column">
                            <p>Scan the QR code</p>
                            <div className='spacingLarge'></div>
                            <p className ="orr">-or-</p>
                            <div className='spacingLarge'></div>
                            <p>Click "Join a Friendle"</p>
                        </div>
                        <div className = "column">
                            <QRCodeSVG className="qr" bgColor={'transparent'} size={128} value={"https://friendle.herokuapp.com/play/ISHRLULYAM"} />
                        </div>
                    </div>
                    <h2 className="joinModal-Header jMHeaderSz">How To Play A Freindle</h2>
                    <div className="joinModal-Underline"></div>
                    <div className ="columns">
                        <div className ="column">
                            <h2 className="joinModal-SubHeader"> Rules </h2>
                            <p>Guess the word within 6 attempts</p>
                            <div className='spacingLarge'></div>
                            <p>Every guess must be a valid five-letter word</p>
                            <div className='spacingLarge'></div>
                            <p>Hit enter to submit.</p>
                            <div className='spacingLarge'></div>
                            <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>    
                        </div>
                        <div className = "column">
                            <h2 className="joinModal-SubHeader"> Examples </h2>
                            <div className ="u-flex"> {greenex} </div>
                            <p1>Green tiles indicate the letter is in the correct spot.</p1>
                            <div className='spacing'></div>
                            <div className ="u-flex"> {yellowex} </div>
                            <p1>Yellow tiles indicate the letter is in the word but in the wrong spot.</p1>
                            <div className='spacing'></div>
                            <div className ="u-flex"> {greyex} </div>
                            <p1>Gray tiles contain letters that are not in the word.</p1>
                            <div className='spacing'></div>
                            <div className ="u-flex"> {short} </div>
                        </div>
                    </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default HowToModal;