import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import OpenButton from "./OpenButton.js";
import RedirectButton from "./RedirectButton.js";
import { get, post } from "../../utilities";
import { useMediaPredicate } from "react-media-hook";

const JoinModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const [redir, redirect] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };
    const lt330 = useMediaPredicate("(max-width: 330px)");
    const lt280 = useMediaPredicate("(max-width: 280px)");

    const handleSubmit = () => {
        console.log(document.getElementById('only').value);
        var inp = document.getElementById('only').value;
        get("/api/gamecodes", {code: inp}).then((words) => {
            if (words.length === 0) {
                setTimeout(() => {
                    document.getElementById('only').classList.remove('wiggle');
                }, 1000);
                document.getElementById('only').classList.add('wiggle');
            } else {
                window.location.href = '/play/:inp';
            }
        });
    }

    return (
        <>
        <div className="modalDef">
            <OpenButton text={props.text} onClick={handleOpen}> </OpenButton>
           
            <Modal className="width modalDef" centered="true" show={visible} onHide={handleClose}>
                <Modal.Body> 
                    {!lt330 && <div className="joinModal-Header jMHeaderSz">Enter Code Below:</div>}
                    {(lt330 && !lt280) && <div className="joinModal-Header jMHeaderSzSmall">Enter Code Below:</div>}
                    {(lt330 && lt280) && <div className="joinModal-Header jMHeaderSzSmaller">Enter Code Below:</div>}
                    <div className="joinModal-Underline"></div>
                    {!lt330 && <input id="only" type="email" className="joinInp inpSizeDefault border block rounded" placeholder="Enter code..." />}
                    {(lt330 && !lt280) && <input id="only" type="email" className="joinInp inpSizeSmall border block rounded" placeholder="Enter code..." />}
                    {(lt330 && lt280) && <input id="only" type="email" className="joinInp inpSizeSmaller border block rounded" placeholder="Enter code..." />}
                    <RedirectButton className="margredir" text={'Submit'} onClick={handleSubmit}> </RedirectButton>
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default JoinModal;