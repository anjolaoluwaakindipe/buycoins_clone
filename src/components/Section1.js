import React from "react";
import Card from "./Card";
import "./Section1.css";

function Section1() {
    return (
        <div className="Section1__container">
            <div className="Section1__innercontainer">
                <div className="Section1__header">
                    <p className="Section1__headertitle">
                        THIS IS THE FUTURE OF MONEY
                    </p>
                    <h2 className="Section1__headerdescription">
                        The easiest place to trade & manage your investment
                        portfolio
                    </h2>
                </div>

                <div className="Section1__cardwrapper">
                    <Card extraStyles="Section1__card">
                        <span className="Section1__svg">
                            <svg
                                width="38"
                                height="46"
                                viewBox="0 0 38 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d)">
                                    <path
                                        d="M23.096 2.12753C23.2795 2.23392 23.4215 2.39939 23.4988 2.59692C23.5761 2.79444 23.5842 3.01235 23.5216 3.21503L20.1447 14.1875H26.3754C26.5585 14.1875 26.7376 14.241 26.8906 14.3416C27.0436 14.4421 27.1639 14.5853 27.2364 14.7534C27.309 14.9215 27.3308 15.1072 27.2991 15.2875C27.2673 15.4678 27.1835 15.6349 27.0579 15.7682L12.0579 31.7057C11.9127 31.86 11.7196 31.9606 11.5099 31.9911C11.3003 32.0217 11.0865 31.9803 10.9034 31.8737C10.7203 31.7671 10.5787 31.6017 10.5016 31.4043C10.4246 31.207 10.4166 30.9893 10.4791 30.7869L13.856 19.8125H7.62537C7.44227 19.8126 7.26315 19.7591 7.11014 19.6585C6.95712 19.5579 6.83689 19.4148 6.76431 19.2467C6.69172 19.0786 6.66995 18.8929 6.70169 18.7126C6.73342 18.5322 6.81726 18.3651 6.94287 18.2319L21.9429 2.29441C22.0878 2.14028 22.2807 2.03973 22.49 2.00909C22.6994 1.97845 22.913 2.01953 23.096 2.12566V2.12753Z"
                                        fill="#04000C"
                                    ></path>
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d"
                                        x="-4"
                                        y="-0.000793457"
                                        width="46"
                                        height="46.0017"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        ></feFlood>
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        ></feColorMatrix>
                                        <feOffset dx="2" dy="6"></feOffset>
                                        <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0.323438 0 0 0 0 0.337833 0 0 0 0 0.375 0 0 0 0.15 0"
                                        ></feColorMatrix>
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow"
                                        ></feBlend>
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow"
                                            result="shape"
                                        ></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </span>

                        <span className="Section1__cardtext">
                            <h4>Instant Deposit</h4>
                            <p>
                                Your Buycoins wallet is credited instantly when
                                you deposit
                            </p>
                        </span>
                    </Card>
                    <Card extraStyles="Section1__card">
                        <span className="Section1__svg">
                            <svg
                                width="42"
                                height="41"
                                viewBox="0 0 42 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d_985_875)">
                                    <path
                                        d="M28.8214 3.39282H9.17857C8.46841 3.3936 7.78756 3.67606 7.2854 4.17822C6.78324 4.68038 6.50078 5.36123 6.5 6.07139V16.7857C6.50078 17.4958 6.78324 18.1767 7.2854 18.6789C7.78756 19.181 8.46841 19.4635 9.17857 19.4643H18.1071V23.5588L16.9527 22.4044C16.7843 22.2418 16.5587 22.1518 16.3246 22.1538C16.0905 22.1559 15.8666 22.2498 15.7011 22.4153C15.5355 22.5808 15.4416 22.8048 15.4396 23.0389C15.4375 23.273 15.5275 23.4985 15.6902 23.6669L18.3688 26.3455C18.3766 26.3534 18.3875 26.3558 18.3955 26.3634C18.4717 26.4374 18.5607 26.4969 18.6581 26.5391L18.6609 26.5396C18.7684 26.5842 18.8836 26.6071 19 26.6071C19.2367 26.6069 19.4637 26.5128 19.6313 26.3455L22.3098 23.6669C22.4725 23.4985 22.5625 23.273 22.5604 23.0389C22.5584 22.8048 22.4645 22.5808 22.2989 22.4153C22.1334 22.2498 21.9095 22.1559 21.6754 22.1538C21.4413 22.1518 21.2157 22.2418 21.0473 22.4044L19.8929 23.5588V19.4643H28.8214C29.5316 19.4635 30.2124 19.181 30.7146 18.6789C31.2168 18.1767 31.4992 17.4958 31.5 16.7857V6.07139C31.4992 5.36123 31.2168 4.68038 30.7146 4.17822C30.2124 3.67606 29.5316 3.3936 28.8214 3.39282V3.39282ZM11.8571 7.41068H10.0714C9.95303 7.41068 9.83948 7.36364 9.75576 7.27992C9.67203 7.1962 9.625 7.08265 9.625 6.96425C9.625 6.84585 9.67203 6.7323 9.75576 6.64858C9.83948 6.56486 9.95303 6.51782 10.0714 6.51782H11.8571C11.9755 6.51782 12.0891 6.56486 12.1728 6.64858C12.2565 6.7323 12.3036 6.84585 12.3036 6.96425C12.3036 7.08265 12.2565 7.1962 12.1728 7.27992C12.0891 7.36364 11.9755 7.41068 11.8571 7.41068ZM19 15.4464C17.9953 15.3828 17.0563 14.9249 16.3874 14.1724C15.7186 13.42 15.374 12.4338 15.4286 11.4285C15.374 10.4233 15.7186 9.4371 16.3874 8.68463C17.0563 7.93217 17.9953 7.47431 19 7.41068C20.0047 7.47431 20.9437 7.93217 21.6126 8.68463C22.2814 9.4371 22.626 10.4233 22.5714 11.4285C22.626 12.4338 22.2814 13.42 21.6126 14.1724C20.9437 14.9249 20.0047 15.3828 19 15.4464ZM27.817 16.3393H25.808C25.6896 16.3393 25.5761 16.2922 25.4924 16.2085C25.4086 16.1248 25.3616 16.0112 25.3616 15.8928C25.3616 15.7744 25.4086 15.6609 25.4924 15.5771C25.5761 15.4934 25.6896 15.4464 25.808 15.4464H27.817C27.9354 15.4464 28.0489 15.4934 28.1326 15.5771C28.2164 15.6609 28.2634 15.7744 28.2634 15.8928C28.2634 16.0112 28.2164 16.1248 28.1326 16.2085C28.0489 16.2922 27.9354 16.3393 27.817 16.3393Z"
                                        fill="#04000C"
                                    ></path>
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d_985_875"
                                        x="-2"
                                        y="-2"
                                        width="46"
                                        height="46"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        ></feFlood>
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        ></feColorMatrix>
                                        <feOffset dx="2" dy="6"></feOffset>
                                        <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0.323438 0 0 0 0 0.337833 0 0 0 0 0.375 0 0 0 0.15 0"
                                        ></feColorMatrix>
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_985_875"
                                        ></feBlend>
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_985_875"
                                            result="shape"
                                        ></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                        <span className="Section1__cardtext">
                            <h4>Fast withdrawals</h4>
                            <p>Withdrawals are fast and hassle-free</p>
                        </span>
                    </Card>
                    <Card extraStyles="Section1__card">
                        <span className="Section1__svg">
                            <svg
                                width="44"
                                height="40"
                                viewBox="0 0 44 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d_985_892)">
                                    <path
                                        d="M23.2431 4.26355C22.7894 4.26664 22.3364 4.2984 21.8868 4.35864C23.9023 5.31745 25.6047 6.82794 26.7967 8.71494C27.9886 10.6019 28.6213 12.7882 28.6213 15.0201C28.6213 17.252 27.9886 19.4383 26.7967 21.3253C25.6047 23.2123 23.9023 24.7227 21.8868 25.6816C23.3446 25.8676 24.8251 25.7528 26.2368 25.3442C27.6485 24.9357 28.9615 24.2421 30.0946 23.3062C31.2278 22.3704 32.1571 21.2122 32.8251 19.9031C33.4931 18.5941 33.8856 17.162 33.9785 15.6953C34.0714 14.2286 33.8626 12.7585 33.3651 11.3756C32.8675 9.99275 32.0918 8.72658 31.0857 7.65527C30.0797 6.58396 28.8647 5.73027 27.5158 5.14691C26.1669 4.56355 24.7127 4.26291 23.2431 4.26355V4.26355Z"
                                        fill="#04000C"
                                    ></path>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.7805 6.04486C12.5494 4.86292 14.6291 4.23206 16.7566 4.23206C19.6084 4.2353 22.3425 5.36962 24.359 7.38616C26.3755 9.4027 27.5099 12.1368 27.5131 14.9886C27.5131 17.116 26.8822 19.1957 25.7003 20.9646C24.5184 22.7335 22.8384 24.1122 20.8729 24.9264C18.9074 25.7405 16.7446 25.9535 14.6581 25.5385C12.5715 25.1234 10.6549 24.099 9.15052 22.5946C7.64619 21.0903 6.62173 19.1737 6.20669 17.0871C5.79164 15.0005 6.00466 12.8378 6.8188 10.8723C7.63294 8.90675 9.01163 7.22681 10.7805 6.04486ZM13.9587 11.6004H15.3431L16.8727 14.0883H18.2764V11.6004H19.5543V14.0883H20.2707V14.7854H19.5543V15.2016H20.261V15.8987H19.5543V18.377H18.1796L16.65 15.8987H15.2366V18.377H13.9587V15.8987H13.2423V15.2016H13.9587V14.7854H13.252V14.0883H13.9587V11.6004ZM15.2366 14.7854V15.2016H16.2241L15.9627 14.7854H15.2366ZM15.2366 13.6043V14.0883H15.5367L15.2366 13.6043ZM18.2764 14.7854H17.2986L17.5503 15.2016H18.2764V14.7854ZM18.2764 15.8987H17.9763L18.2764 16.3827V15.8987Z"
                                        fill="#04000C"
                                    ></path>
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d_985_892"
                                        x="-1"
                                        y="-2"
                                        width="46"
                                        height="46"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        ></feFlood>
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        ></feColorMatrix>
                                        <feOffset dx="2" dy="6"></feOffset>
                                        <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0.323438 0 0 0 0 0.337833 0 0 0 0 0.375 0 0 0 0.15 0"
                                        ></feColorMatrix>
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_985_892"
                                        ></feBlend>
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_985_892"
                                            result="shape"
                                        ></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </span>

                        <span className="Section1__cardtext">
                            <h4>Start trading with 500NGN</h4>
                            <p>
                                With as little as 500 NGN, you can buy any
                                crypto and stocks of your choice
                            </p>
                        </span>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Section1;
