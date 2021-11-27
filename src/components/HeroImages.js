import React, { useEffect, useState } from "react";
import Herobackground from "../assets/Herobackground.webp";
import MobileHerobackground from "../assets/mobileherobackground.webp";
import "./HeroImages.css";
import PhoneRight from "../assets/phoneright.png";
import PhoneLeft from "../assets/phoneleft.png";

function HeroImages() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const { innerWidth } = window;
            setScreenSize(innerWidth);
        });

        return () =>
            window.removeEventListener("resize", () => {
                const { innerWidth } = window;
                setScreenSize(innerWidth);
            });
    }, []);
    return (
        <figure className="HeroImages__container">
            {screenSize > 768 ? (
                <img
                    src={Herobackground}
                    style={{ height: "auto", width: "100%" }}
                    alt="Hero Background"
                />
            ) : (
                <img
                    src={MobileHerobackground}
                    style={{ height: "auto", width: "100%" }}
                    alt="Hero Background"
                />
            )}

            <picture className="HeroImages__phones">
                <img
                    className="HeroImages__phoneleft"
                    src={PhoneLeft}
                    alt="Light mode "
                />
                <img
                    className="HeroImages__phoneright"
                    src={PhoneRight}
                    alt="Dark mode"
                />
            </picture>
        </figure>
    );
}

export default HeroImages;
