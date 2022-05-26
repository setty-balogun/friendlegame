import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import OpenButton from "./OpenButton.js";

const CreateModal = (props) => {
    const [visible, setVisibility] = useState(false);
    const handleOpen = () => { setVisibility(true) };
    const handleClose = () => { setVisibility(false) };

    return (
        <>
        <div>
            <OpenButton text={props.text} onClick={handleOpen}> </OpenButton>
           
            <Modal centered="true" show={visible} onHide={handleClose}>
                <Modal.Body> 

                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}

export default CreateModal;