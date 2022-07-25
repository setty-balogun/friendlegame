import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import { useMediaPredicate } from "react-media-hook";

const BlankButton = () => {
    const lt630 = useMediaPredicate("(max-width: 630px)");
    const lt520 = useMediaPredicate("(max-width: 520px)");

    return (
        <>
            {!lt630 && <span className = "blankButton button-size-n" > </span>}
            {(lt630 && lt520) && <span className = "blankButton button-size-sm2" > </span>}
            {(lt630 && !lt520) && <span className = "blankButton button-size-sm" >  </span>}
        </>
    );
};

export default BlankButton;