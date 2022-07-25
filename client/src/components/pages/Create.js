import React, { useState, useEffect } from "react";
import "./Create.css";
import {QRCodeSVG} from 'qrcode.react';
import { useMediaPredicate } from "react-media-hook";

import "../../utilities.css";

const Create = (props) => {
    const [copied, setCopied] = useState(false);
    const lt500 = useMediaPredicate("(max-width: 500px)");
    const lt300 = useMediaPredicate("(max-width: 300px)");
    const lt240 = useMediaPredicate("(max-width: 240px)");

    const copy = () => {
      const el = document.createElement('input');
      el.value = "https://friendle.herokuapp.com/play/" + localStorage.getItem("code");
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
    }

    return (
      <>
        <div id="container">
            { (lt500 && lt300) && <div class="header headerSmaller">Share to a Friend</div> }
            { !lt500 && <div class="header headerDefault">Share to a Friend</div> }
            { (lt500 && !lt300) && <div class="header headerSmall">Share to a Friend</div> }
            <div className="create-Underline"></div>
            {!lt500 && <div className="containerQR qrContDefault">
                <div class="smallHeader sHDef">Your Friendle Code:</div>
                <div class="codeText cTDef"> {localStorage.getItem("code")} </div>
                <QRCodeSVG className="qr" bgColor={'transparent'} size={256} value={"https://friendle.herokuapp.com/play/" + localStorage.getItem("code")} />
            </div> }
            {lt500 && <div className="containerQR qrContSmall">
                <div class="smallHeader sHSmall">Your Friendle Code:</div>
                <div class="codeText bold cTSmall"> {localStorage.getItem("code")} </div>
                <QRCodeSVG className="qr qrSmall" bgColor={'transparent'} value={"https://friendle.herokuapp.com/play/" + localStorage.getItem("code")} />
            </div> }
            {!lt500 && <div className="containerLink cLDef">
                <div class="smallHeader sHDef">Share Link:</div>
                <div className="containerText contTDef">
                    <input className="w-1 px-2 linkText linkTextDef" disabled value={"https://friendle.herokuapp.com/play/" + localStorage.getItem("code")}></input>
                    <div className="linkButton linkButtonDef" onClick={copy}>{!copied ? "Copy" : "Copied!"}</div>
                </div>
            </div> }
            {lt500 && <div className="containerLink cLSmall">
                <div class="smallHeader sHSmall">Share Link:</div>
                <div className="containerText contTSmall">
                    <input className="w-1 px-2 linkText linkTextSmall" disabled value={"https://friendle.herokuapp.com/play/" + localStorage.getItem("code")}></input>
                    <div className="linkButton linkButtonSmall" onClick={copy}>{!copied ? "Copy" : "Copied!"}</div>
                </div>
            </div> }
        </div>
      </>
    );
  };
  
  export default Create;