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

    useEffect(() => {
        if (props.finishedGame === true) {
            handleOpen();
        }
    }, [props.finishedGame]);

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
                        <div className="settings-row-1">Percent Won</div>
                        <div className="settings-row-2"> {props.gameData[2] === 0 ? 0 : Math.round(100 * props.gameData[0] / props.gameData[2])}% </div>
                    </div>

                    <div className="settings-row settings-row-size-def">
                        <div className="settings-row-1">Played</div>
                        <div className="settings-row-2"> {props.gameData[2]} </div>
                    </div>

                    <div className="settings-row settings-row-size-def">
                        <div className="settings-row-1">Current Streak</div>
                        <div className="settings-row-2"> {props.gameData[3]} </div>
                    </div>

                    <div className="settings-row settings-row-size-def exmarg">
                        <div className="settings-row-1">Best Streak</div>
                        <div className="settings-row-2"> {props.gameData[4]} </div>
                    </div>
                        
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default StatsModal;