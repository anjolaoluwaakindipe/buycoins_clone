import React from "react";
import "./Card.css";

function Card({ img, children, extraStyles }) {
    return (
        <div className={"Card__card " + extraStyles}>
            {img ? <img src={img} alt="card" /> : ""}
            {children}
        </div>
    );
}

export default Card;
