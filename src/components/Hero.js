import React from "react";
import "./Hero.css";
import HeroImages from "./HeroImages";
import HeroSection1 from "./HeroSection1";

function Hero() {
    return (
        <div className="Hero__container">
            <HeroSection1 />
            <HeroImages />
        </div>
    );
}

export default Hero;
