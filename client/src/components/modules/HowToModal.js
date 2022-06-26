import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import { useMediaPredicate } from "react-media-hook";
import HowToButton from "./HowToButton.js";

const HowToModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };

    const lt330 = useMediaPredicate("(max-width: 330px)");
    const lt280 = useMediaPredicate("(max-width: 280px)");

    return (
        <>
        <div className="modalDef">
            <HowToButton onClick={handleOpen}> </HowToButton>
           
            <Modal className="width modalDef scroll" centered="true" show={visible} onHide={handleClose}>
                <Modal.Body classname="scroll"> 
                    {!lt330 && <div className="joinModal-Header jMHeaderSz">How To Play</div>}
                    {(lt330 && !lt280) && <div className="joinModal-Header jMHeaderSzSmall">How To Play</div>}
                    {(lt330 && lt280) && <div className="joinModal-Header jMHeaderSzSmaller">How To Play</div>}
                    <div className="joinModal-Underline"></div>
                    <div className = "modal-dialog-scrollable">
                    <h1> How To Create a Friendle</h1>
                    <p>
                        •Click the “Create a Friendle” button and enter a valid five-letter word for your friend to guess.
                    </p>
                    <p>•After you click submit, you will receive a QR code that a friend can scan to play.</p>
                    <p>•You will also receive a code that can be entered directly on the website.</p>
                    </div>
                    <div> 

                    </div>
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default HowToModal;