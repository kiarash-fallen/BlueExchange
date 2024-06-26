import React from 'react'

function Check({ style, black }) {
    return (
        black ? <svg width="15" height="12" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            < path d="M2 5.5L6 9.5L13.5 2" stroke="#363636" width="3" />
        </svg > : <svg className={style} width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.34766 6.02814L4.60742 9.28767L12.6527 1.24243" stroke="white" stroke-width="2" />
        </svg>
    )
}

export default Check