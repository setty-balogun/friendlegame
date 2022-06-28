import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import { useMediaPredicate } from "react-media-hook";
import StatsButton from "./StatsButton.js";

const StatsModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };

    const lt330 = useMediaPredicate("(max-width: 330px)");
    const lt280 = useMediaPredicate("(max-width: 280px)");

    return (
        <>
        <div className="modalDef">
            <StatsButton onClick={handleOpen}> </StatsButton>
           
            <Modal className="width settings-modalDef" centered="true" show={visible} onHide={handleClose}>
                <Modal.Body> 
                    {!lt330 && <div className="joinModal-Header jMHeaderSz">Statistics</div>}
                    {(lt330 && !lt280) && <div className="joinModal-Header jMHeaderSzSmall">Statistics</div>}
                    {(lt330 && lt280) && <div className="joinModal-Header jMHeaderSzSmaller">Statistics</div>}
                    <div className="joinModal-Underline"></div>

                    <div className="settings-row settings-row-size-def">
                        <div className="settings-row-1">Dark Mode</div>
                        <div className="settings-row-2">
                            
                        </div>
                    </div>

                    <div className="settings-row settings-row-size-def">
                        <div className="settings-row-1">High Contrast</div>
                        <div className="settings-row-2">
                            
                        </div>
                    </div>

                    <div className="settings-row settings-row-size-def">
                        
                    </div>
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default StatsModal;