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

    const [isCheckedDM, setCheckedDM] = useState(localStorage.getItem("checked-dm") === "true");
    const [isCheckedHC, setCheckedHC] = useState(localStorage.getItem("checked-hc") === "true");
    
    const lt475 = useMediaPredicate("(max-width: 475px)");
    const lt330 = useMediaPredicate("(max-width: 330px)");
    const lt280 = useMediaPredicate("(max-width: 280px)");

    const handleDM = () => {
        if (isCheckedDM) { setCheckedDM(false); }
        else { setCheckedDM(true); }

        var element = document.body;
        element.classList.toggle("dark-mode");
    };

    const handleHC = () => {
        if (isCheckedHC) { setCheckedHC(false); }
        else { setCheckedHC(true); }

        var element = document.body;
        element.classList.toggle("high-contrast");
    };

    useEffect(() => {
         localStorage.setItem("checked-dm", isCheckedDM);
     }, [isCheckedDM]);

     useEffect(() => {
        localStorage.setItem("checked-hc", isCheckedHC);
    }, [isCheckedHC]);

    return (
        <>
        <div className="modalDef">
            <SettingsButton onClick={handleOpen}> </SettingsButton>
           
            <Modal className="width settings-modalDef" centered="true" show={visible} onHide={handleClose}>
                <Modal.Body> 
                    {!lt330 && <div className="joinModal-Header jMHeaderSz">Settings</div>}
                    {(lt330 && !lt280) && <div className="joinModal-Header jMHeaderSzSmall">Settings</div>}
                    {(lt330 && lt280) && <div className="joinModal-Header jMHeaderSzSmaller">Settings</div>}
                    <div className="joinModal-Underline"></div>

                    {!lt475 && <div className="settings-row settings-row-size-def">
                        <div className="settings-row-1">Dark Mode</div>
                        <div className="settings-row-2">
                            <input className="settings-inp" type="checkbox" id="toggle-dm" checked={isCheckedDM ? "checked" : ""} onChange={handleDM}/>
                            <label for="toggle-dm"> </label>
                        </div>
                    </div> }
                    {lt475 && <div className="settings-row settings-row-size-sm">
                        <div className="settings-row-1">Dark Mode</div>
                        <div className="settings-row-2">
                            <input className="settings-inp" type="checkbox" id="toggle-dm" checked={isCheckedDM ? "checked" : ""} onChange={handleDM}/>
                            <label for="toggle-dm"> </label>
                        </div>
                    </div> }

                    {!lt475 && <div className="settings-row settings-row-size-def">
                        <div className="settings-row-1">High Contrast</div>
                        <div className="settings-row-2">
                            <input className="settings-inp" type="checkbox" id="toggle-hc" checked={isCheckedHC ? "checked" : ""} onChange={handleHC} />
                            <label for="toggle-hc"> </label>
                        </div>
                    </div> }
                    {lt475 && <div className="settings-row settings-row-size-sm">
                        <div className="settings-row-1">High Contrast</div>
                        <div className="settings-row-2">
                            <input className="settings-inp" type="checkbox" id="toggle-hc" checked={isCheckedHC ? "checked" : ""} onChange={handleHC} />
                            <label for="toggle-hc"> </label>
                        </div>
                    </div> }

                    <div className="settings-row settings-row-size-def">
                        
                    </div>
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default SettingsModal;