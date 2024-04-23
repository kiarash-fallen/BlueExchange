import React from 'react'

function fillArrow({ bgColor, arrowColor }) {
    return (
        <svg className='-translate-x-[50%]' width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="8" className={bgColor} />
            <path d="M9 8.00049C8.44772 8.00049 8 8.4482 8 9.00049L8 18.0005C8 18.5528 8.44772 19.0005 9 19.0005C9.55229 19.0005 10 18.5528 10 18.0005L10 10.0005L18 10.0005C18.5523 10.0005 19 9.55277 19 9.00049C19 8.4482 18.5523 8.00049 18 8.00049L9 8.00049ZM19.2847 17.871L9.70711 8.29338L8.29289 9.7076L17.8705 19.2852L19.2847 17.871Z" className={arrowColor} />
        </svg>
    )
}

export default fillArrow