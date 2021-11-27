import React from "react";
import "./Button.css";

function Button({ color, extraStyle, children, innerButtonStyle }) {
    return (
        <div className={"Button__container " + extraStyle}>
            <a href="/" className={"Button__button " + innerButtonStyle}>
                {children}
            </a>
        </div>
    );
}

export default Button;
