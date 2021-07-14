import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import ImageCarousel from './ImageCarousel';
import { v1 as uuidv4 } from 'uuid';
import '../../App.css';

function ImgVideoAccordion(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    return (
        <div className="accordion__section" >
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
            >
                <ImageCarousel key={uuidv4()} />
            </div>
        </div>
    );
}

export default ImgVideoAccordion;
/*
{
    props.content.split(', ').map((image, i) => (
        { i > 0}
    ))} */