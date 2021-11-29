import React from "react";
import "./Section2.css";
import GirlSittingImage from "../assets/girlsittingimage.webp";
import Section2List from "./Section2List";

const listContent = [
    {
        key: 0,
        title: "Buy and Sell",
        content:
            "Easily buy and sell assets like Google, Apple, XRP, DOGE and many more",
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-28 -30 88 88"
            >
                <path
                    d="M14.4607 25.6822H9.80646V10.4766C9.80646 9.92434 10.2542 9.47663 10.8065 9.47663H13.4607C14.0129 9.47663 14.4607 9.92434 14.4607 10.4766V25.6822ZM31.7878 25.6822H27.1336V5.31775C27.1336 4.76546 27.5813 4.31775 28.1336 4.31775H30.7878C31.34 4.31775 31.7878 4.76546 31.7878 5.31775V25.6822Z"
                    fill="#E8DDFE"
                ></path>
                <path
                    d="M6.44199 25.6822H1.78778V18.7757C1.78778 18.2234 2.2355 17.7757 2.78778 17.7757H5.44199C5.99427 17.7757 6.44199 18.2234 6.44199 18.7757V25.6822ZM23.5448 25.6822H18.8906V16.0841C18.8906 15.5318 19.3383 15.0841 19.8906 15.0841H22.5448C23.0971 15.0841 23.5448 15.5318 23.5448 16.0841V25.6822Z"
                    fill="#B38CFC"
                ></path>
            </svg>
        ),
    },
    {
        key: 1,
        title: "Earn some BTC everytime you tell someone about Buycoins",
        content: "We'll make it rain each time you refer someone on the app",
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-29 -30 88 88"
            >
                <path
                    d="M7.22202 3.35942C9.52415 1.82119 12.2307 1.00011 14.9994 1C18.7113 1.00438 22.2698 2.48083 24.8945 5.1055C27.519 7.73004 28.9955 11.2884 29 15C29 17.7689 28.1789 20.4757 26.6406 22.778C25.1022 25.0803 22.9157 26.8747 20.3576 27.9343C17.7994 28.9939 14.9845 29.2712 12.2687 28.731C9.55301 28.1908 7.05845 26.8574 5.10051 24.8995C3.14258 22.9416 1.80921 20.447 1.26901 17.7313C0.72882 15.0155 1.00607 12.2006 2.06569 9.64243C3.12532 7.08426 4.91973 4.89776 7.22202 3.35942Z"
                    fill="white"
                    stroke="#B38CFC"
                    stroke-width="2"
                ></path>
                <path
                    d="M18.3464 15.2139C19.1598 15.0049 19.7627 14.4511 19.8995 13.3355C20.089 11.8111 18.9123 11.0235 17.3176 10.5184L17.7199 8.71444C17.7216 8.70875 17.7257 8.70444 17.727 8.69847C17.7578 8.56087 17.6711 8.42463 17.5336 8.39369L16.7743 8.22402C16.7083 8.20933 16.6391 8.22144 16.5821 8.2577C16.525 8.29395 16.4847 8.35138 16.4699 8.41736L16.4642 8.41607L16.0704 10.183C15.739 10.109 15.399 10.0399 15.0613 9.97174L15.4536 8.21327C15.4559 8.20583 15.4612 8.20011 15.4629 8.19234C15.4937 8.05474 15.407 7.91851 15.2695 7.88756L14.5102 7.7179C14.4442 7.70321 14.3751 7.71532 14.318 7.75157C14.2609 7.78783 14.2206 7.84525 14.2058 7.91124L14.2059 7.91188L14.1997 7.9105L13.7933 9.73125C13.5192 9.67587 13.2501 9.6218 12.9889 9.56342L12.9901 9.5568L11.2525 9.16852L11.2519 9.17111C11.2192 9.16378 11.1854 9.16296 11.1523 9.16871C11.1193 9.17447 11.0877 9.18668 11.0594 9.20464C11.0311 9.22261 11.0066 9.24598 10.9874 9.27343C10.9681 9.30087 10.9544 9.33184 10.9471 9.36456L10.7591 10.2061C10.7284 10.3437 10.815 10.4801 10.9526 10.5109L10.9536 10.5109L10.9527 10.5147C10.9527 10.5147 11.8871 10.7044 11.8679 10.7175C12.378 10.8317 12.4782 11.165 12.4695 11.4313L11.9435 13.7898L11.9417 13.7988L11.2046 17.102C11.1464 17.2576 10.9948 17.4928 10.6382 17.4137C10.6512 17.4314 9.72245 17.2089 9.72245 17.2089L9.72198 17.21C9.72039 17.2097 9.71941 17.2084 9.71782 17.208C9.59814 17.1813 9.48373 17.2461 9.4345 17.3532L9.42448 17.3503L8.96507 18.3284L8.97023 18.3306C8.96719 18.3395 8.96103 18.3465 8.95889 18.356C8.92934 18.4883 9.00966 18.6172 9.13807 18.6545L9.13663 18.6581L10.7762 19.0239C11.0813 19.0921 11.3805 19.1641 11.6748 19.2318L11.264 21.0765L11.2646 21.0766C11.2339 21.214 11.3205 21.3504 11.4581 21.3812L12.2174 21.5508C12.2835 21.5655 12.3526 21.5533 12.4097 21.517C12.4667 21.4807 12.5071 21.4233 12.5218 21.3573L12.5222 21.3574L12.9285 19.5353C13.2724 19.6195 13.6062 19.6968 13.933 19.769L13.5282 21.5824L13.5288 21.5825C13.4983 21.72 13.5847 21.8563 13.7221 21.8871L14.4814 22.0567C14.5474 22.0714 14.6165 22.0592 14.6736 22.0229C14.7307 21.9866 14.771 21.9292 14.7857 21.8632L14.7858 21.863L14.7874 21.8633L15.1984 20.0219C17.3436 20.3726 18.9453 20.1698 19.5729 18.2216C20.0785 16.6534 19.4844 15.7705 18.3464 15.2139V15.2139ZM14.7603 11.4594C15.4715 11.6179 17.7561 11.89 17.4252 13.3745C17.1073 14.798 14.9102 14.1335 14.199 13.975L14.7603 11.4594ZM13.297 18.0183L13.9162 15.2444C14.7701 15.4352 17.5025 15.7869 17.1385 17.4186C16.7901 18.9832 14.1512 18.2077 13.297 18.0183V18.0183Z"
                    fill="#E8DDFE"
                ></path>
            </svg>
        ),
    },
    {
        key: 2,
        title: "Trade anywhere",
        content:
            "Build and keep track of your crypto portfolio from any device you own",
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-28 -30 88 88"
            >
                <g clip-path="url(#clip0_984_712)">
                    <path
                        d="M4.40068 28.9355H29.1749C30.1331 28.9355 31.052 28.5548 31.7296 27.8773C32.4071 27.1997 32.7878 26.2808 32.7878 25.3226V19.129C32.7878 18.1708 32.4071 17.2519 31.7296 16.5743C31.052 15.8968 30.1331 15.5161 29.1749 15.5161H28.6587V4.67742C28.6587 3.71922 28.2781 2.80026 27.6006 2.12271C26.923 1.44516 26.004 1.06451 25.0458 1.06451H8.52972C7.57151 1.06451 6.65256 1.44516 5.97501 2.12271C5.29746 2.80026 4.91681 3.71922 4.91681 4.67742V11.3871H4.40068C3.44248 11.3871 2.52353 11.7677 1.84598 12.4453C1.16843 13.1228 0.787781 14.0418 0.787781 15V25.3226C0.787781 26.2808 1.16843 27.1997 1.84598 27.8773C2.52353 28.5548 3.44248 28.9355 4.40068 28.9355ZM29.1749 18.6129C29.3118 18.6129 29.443 18.6673 29.5398 18.7641C29.6366 18.8609 29.691 18.9921 29.691 19.129C29.691 19.2659 29.691 25.3226 29.691 25.3226C29.691 25.4595 29.6366 25.5907 29.5398 25.6875C29.443 25.7843 29.3118 25.8387 29.1749 25.8387H20.4007V19.129C20.4007 18.9921 20.4551 18.8609 20.5519 18.7641C20.6486 18.6673 20.7799 18.6129 20.9168 18.6129H29.1749ZM8.01359 4.67742C8.01359 4.54053 8.06796 4.40925 8.16476 4.31246C8.26155 4.21567 8.39283 4.16129 8.52972 4.16129H25.0458C25.1827 4.16129 25.314 4.21567 25.4108 4.31246C25.5076 4.40925 25.562 4.54053 25.562 4.67742V15.5161H20.9168C19.9586 15.5161 19.0397 15.8968 18.3621 16.5743C17.6846 17.2519 17.3039 18.1708 17.3039 19.129V25.8387H12.1426V15C12.1426 14.0418 11.762 13.1228 11.0844 12.4453C10.4069 11.7677 9.48792 11.3871 8.52972 11.3871H8.01359V4.67742ZM3.88455 15C3.88455 14.8631 3.93893 14.7318 4.03573 14.635C4.13252 14.5382 4.2638 14.4839 4.40068 14.4839H8.52972C8.6666 14.4839 8.79788 14.5382 8.89467 14.635C8.99147 14.7318 9.04585 14.8631 9.04585 15V25.8387H4.40068C4.2638 25.8387 4.13252 25.7843 4.03573 25.6875C3.93893 25.5907 3.88455 25.4595 3.88455 25.3226V15Z"
                        fill="#B38CFC"
                        stroke="white"
                    ></path>
                    <path
                        d="M29.7083 18.08C29.864 18.08 30.0133 18.1428 30.1233 18.2546C30.2334 18.3663 30.2952 18.5179 30.2952 18.676V25.828C30.2952 25.9861 30.2334 26.1377 30.1233 26.2494C30.0133 26.3612 29.864 26.424 29.7083 26.424H19.7306V18.676C19.7306 18.5179 19.7925 18.3663 19.9025 18.2546C20.0126 18.1428 20.1619 18.08 20.3176 18.08H29.7083Z"
                        fill="#E8DDFE"
                    ></path>
                </g>
                <defs>
                    <clipPath id="clip0_984_712">
                        <rect width="33.5756" height="30" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>
        ),
    },
];

function Section2() {
    return (
        <div className="Section2__container">
            <div className="Section2__innercontainer">
                <div className="Section2__textcontainer">
                    <div className="Section2__header">
                        <h2 className="Section2__headertitle">
                            Try the Buycoins app
                        </h2>
                        {listContent.map((item) => (
                            <Section2List
                                content={item.content}
                                title={item.title}
                                image={item.image}
                                key={item.key}
                            />
                        ))}
                    </div>
                    <div className="Section2__buttonwrapper">
                        <a href="/" className="Section2__playstore">
                            <span className="Section2__playstorelogo">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 40 41"
                                >
                                    <defs></defs>
                                    <path
                                        fill="#B38CFC"
                                        d="M3.75 5.148V35.85a.338.338 0 00.576.24L20.312 20.5 4.326 4.907a.338.338 0 00-.576.24zM27.015 14.094L6.97 3.05l-.013-.007c-.345-.188-.673.28-.39.551L22.28 18.62l4.735-4.525zM6.569 37.405c-.284.272.044.74.39.552l.013-.007 20.044-11.044-4.735-4.527L6.569 37.405zM35.107 18.547l-5.598-3.083-5.263 5.036 5.263 5.033 5.598-3.08c1.523-.841 1.523-3.065 0-3.906z"
                                    ></path>
                                </svg>
                            </span>
                            <span className="playstorecontent">
                                <p>Get it on </p>
                                <h4>Google Play</h4>
                            </span>
                        </a>
                        <a href="/" className="Section2__applestore">
                            <span className="Section2__applestorelogo">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 41 41"
                                >
                                    <path
                                        fill="#B38CFC"
                                        d="M34.83 31.055a19.535 19.535 0 01-1.934 3.48c-1.017 1.452-1.852 2.456-2.492 3.015-.995.913-2.063 1.382-3.205 1.409-.819 0-1.807-.233-2.959-.707-1.155-.471-2.216-.702-3.188-.702-1.017 0-2.108.23-3.276.702-1.167.474-2.11.722-2.832.745-1.093.047-2.186-.434-3.275-1.447-.695-.606-1.564-1.648-2.608-3.122-1.117-1.57-2.036-3.398-2.756-5.476-.77-2.248-1.157-4.422-1.157-6.528 0-2.412.52-4.493 1.564-6.236a9.2 9.2 0 013.277-3.316 8.808 8.808 0 014.432-1.254c.872 0 2.014.269 3.429.8 1.415.53 2.324.799 2.72.799.299 0 1.305-.317 3.017-.944 1.615-.581 2.98-.822 4.097-.727 3.03.244 5.305 1.438 6.818 3.59-2.708 1.641-4.047 3.939-4.02 6.888.022 2.297.857 4.209 2.494 5.726a8.2 8.2 0 002.49 1.634c-.2.582-.413 1.137-.636 1.67zM27.884 3.722c0 1.799-.659 3.48-1.968 5.036-1.583 1.849-3.496 2.919-5.57 2.75a5.588 5.588 0 01-.04-.682c0-1.73.75-3.578 2.09-5.091.666-.765 1.515-1.404 2.543-1.911 1.027-.5 1.996-.777 2.91-.824.024.242.035.483.035.722z"
                                    ></path>
                                </svg>
                            </span>
                            <span className="Section2__applestorecontent">
                                <p>Get it on </p>
                                <h4>Apple Store</h4>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="Section2__imagecontainer">
                    <figure>
                        <img
                            className="Section2_girlsittingimage"
                            src={GirlSittingImage}
                            alt="girl sitting"
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Section2;
