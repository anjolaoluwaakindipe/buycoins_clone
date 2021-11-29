import React from "react";
import "./Section2List.css";

function Section2List({ image, title, content }) {
    return (
        <div className="Section2List__container">
            <span className="Section2List__svg">{image}</span>

            <span className="Section2List__content">
                <h4 className="Section2List__title">{title}</h4>
                <p className="Section2List__description">{content}</p>
            </span>
        </div>
    );
}

export default Section2List;
