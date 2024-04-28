import React from 'react'

function Heart({ color }) {
    if (color === "blue") {
        return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_124_589)">
                <g filter="url(#filter0_d_124_589)">
                    <path d="M17.4951 1.91699C16.369 1.93451 15.2675 2.24885 14.3018 2.82826C13.3361 3.40768 12.5404 4.23166 11.9951 5.21699C11.4497 4.23166 10.654 3.40768 9.68831 2.82826C8.72262 2.24885 7.62113 1.93451 6.49508 1.91699C4.70002 1.99498 3.00878 2.78025 1.79086 4.10122C0.572935 5.4222 -0.0726751 7.17152 -0.00492452 8.96699C-0.00492452 13.514 4.78108 18.48 8.79508 21.847C9.69129 22.6001 10.8244 23.013 11.9951 23.013C13.1657 23.013 14.2989 22.6001 15.1951 21.847C19.2091 18.48 23.9951 13.514 23.9951 8.96699C24.0628 7.17152 23.4172 5.4222 22.1993 4.10122C20.9814 2.78025 19.2901 1.99498 17.4951 1.91699Z" fill="#2D74FF" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d_124_589" x="-12.0098" y="-10.083" width="48.0098" height="45.0961" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.176471 0 0 0 0 0.454902 0 0 0 0 1 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_124_589" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_124_589" result="shape" />
                </filter>
                <clipPath id="clip0_124_589">
                    <rect width="24" height="24" fill="white" transform="translate(-0.00488281)" />
                </clipPath>
            </defs>
        </svg>)
    }
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_124_574)">
                <path d="M17.5 1.91699C16.3739 1.93451 15.2724 2.24885 14.3067 2.82826C13.341 3.40768 12.5453 4.23166 12 5.21699C11.4546 4.23166 10.6589 3.40768 9.6932 2.82826C8.7275 2.24885 7.62601 1.93451 6.49996 1.91699C4.7049 1.99498 3.01366 2.78025 1.79574 4.10122C0.577818 5.4222 -0.0677922 7.17152 -4.17093e-05 8.96699C-4.17093e-05 13.514 4.78596 18.48 8.79996 21.847C9.69618 22.6001 10.8293 23.013 12 23.013C13.1706 23.013 14.3037 22.6001 15.2 21.847C19.214 18.48 24 13.514 24 8.96699C24.0677 7.17152 23.4221 5.4222 22.2042 4.10122C20.9863 2.78025 19.295 1.99498 17.5 1.91699ZM13.915 20.317C13.3789 20.7684 12.7007 21.0159 12 21.0159C11.2992 21.0159 10.621 20.7684 10.085 20.317C4.94696 16.006 1.99996 11.87 1.99996 8.96699C1.9316 7.70171 2.36632 6.46072 3.20932 5.51469C4.05232 4.56866 5.23519 3.99434 6.49996 3.91699C7.76472 3.99434 8.9476 4.56866 9.7906 5.51469C10.6336 6.46072 11.0683 7.70171 11 8.96699C11 9.23221 11.1053 9.48656 11.2929 9.6741C11.4804 9.86164 11.7347 9.96699 12 9.96699C12.2652 9.96699 12.5195 9.86164 12.7071 9.6741C12.8946 9.48656 13 9.23221 13 8.96699C12.9316 7.70171 13.3663 6.46072 14.2093 5.51469C15.0523 4.56866 16.2352 3.99434 17.5 3.91699C18.7647 3.99434 19.9476 4.56866 20.7906 5.51469C21.6336 6.46072 22.0683 7.70171 22 8.96699C22 11.87 19.053 16.006 13.915 20.313V20.317Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_124_574">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Heart