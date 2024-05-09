import React from 'react'

function Circles() {
    return (
        <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_509_1006)">
                <circle cx="28" cy="12" r="12" fill="white" fill-opacity="0.8" />
                <circle cx="16.5723" cy="12" r="12" transform="rotate(90 16.5723 12)" fill="url(#paint0_linear_509_1006)" />
            </g>
            <defs>
                <filter id="filter0_d_509_1006" x="0.572266" y="0" width="43.4277" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_509_1006" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_509_1006" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_509_1006" x1="16.5723" y1="-9.53674e-07" x2="16.5723" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default Circles