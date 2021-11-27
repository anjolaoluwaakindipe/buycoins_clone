import React from "react";
import Button from "./Button";
import "./HeroSection1.css";

function HeroSection1() {
    return (
        <div className="HeroSection1__container">
            <div className="HeroSection1__innercontainer">
                <h1 className="HeroSection1__header">
                    <span>Trading</span> <span>made</span> <span>easy</span>
                </h1>
                <p className="HeroSection1__description">
                    Easily buy and sell assets like BTC, ETH, Tesla, Amazon and
                    many more with as little as N500.
                </p>
                <Button
                    innerButtonStyle="HeroSection1__innerbutton"
                    extraStyle="HeroSection1__outerbutton"
                >
                    Get Started Today{" "}
                    <span className="HeroSection1__buttonlogo">
                        <svg
                            width="18"
                            height="17"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.5601 5.26475L12.9122 7.73029C12.9475 7.76728 12.9648 7.8133 12.9919 7.85439C13.0215 7.89877 13.0568 7.93822 13.0774 7.98753C13.1177 8.08697 13.1398 8.19217 13.1398 8.29737C13.1398 8.40503 13.1177 8.51187 13.0766 8.61213C13.0347 8.7124 12.9747 8.80363 12.8982 8.87924L10.4335 11.344C10.1122 11.6653 9.59194 11.6653 9.27141 11.344C8.95007 11.0234 8.95007 10.5032 9.27141 10.1819L10.3341 9.11922H5.74323C5.28874 9.11922 4.92138 8.75185 4.92138 8.29737C4.92138 7.84371 5.28874 7.47552 5.74323 7.47552H10.3973L9.37086 6.39972C9.05773 6.07098 9.06924 5.55158 9.39798 5.23763C9.72672 4.92369 10.2469 4.93683 10.5601 5.26475ZM0.812134 8.29733C0.812134 12.8298 4.49894 16.5158 9.0306 16.5158C13.5623 16.5158 17.2491 12.8298 17.2491 8.29733C17.2491 3.76566 13.5623 0.0788574 9.0306 0.0788574C4.49894 0.0788574 0.812134 3.76566 0.812134 8.29733Z"
                                fill="white"
                            ></path>
                        </svg>
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection1;
