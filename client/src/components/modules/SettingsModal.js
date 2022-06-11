import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import { useMediaPredicate } from "react-media-hook";
import SettingsButton from "./SettingsButton.js";

const SettingsModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };

    const lt330 = useMediaPredicate("(max-width: 330px)");
    const lt280 = useMediaPredicate("(max-width: 280px)");

    return (
        <>
        <div className="modalDef">
            <SettingsButton onClick={handleOpen}> </SettingsButton>
           
            <Modal className="width modalDef" centered="true" show={visible} onHide={handleClose}>
                <Modal.Body> 
                    {!lt330 && <div className="joinModal-Header jMHeaderSz">Settings</div>}
                    {(lt330 && !lt280) && <div className="joinModal-Header jMHeaderSzSmall">Settings</div>}
                    {(lt330 && lt280) && <div className="joinModal-Header jMHeaderSzSmaller">Settings</div>}
                    <div className="joinModal-Underline"></div>
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default SettingsModal;