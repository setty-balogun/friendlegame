import React, { Component } from "react";
import "./Create.css";
import QRCode from "react-qr-code";

const Create = () => {
    return (
      <>
        <QRCode value="12319847" />
      </>
    );
  };
  
  export default Create;