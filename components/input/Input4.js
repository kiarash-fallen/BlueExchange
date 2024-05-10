import React from 'react';

const Input4 = ({ label, id, focus, color, isDisable, type, placeholder, hasError, defaultValue, errorMessage, clickableIcon, register, handleClick, textColor, LeftIcon, RightIcon }) => {

    return (
        <div className='group'>
            <label htmlFor={id} className="block">{label}</label>
            <div className={hasError ? "" : `flex items-center justify-between relative bg-[#1C1C1C] rounded-xl px-4 py-2 peer`}>
                <span className='mr-2'>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{LeftIcon}</button> : LeftIcon}
                </span>
                <input
                    id={id}
                    type={type}
                    disabled={isDisable}
                    placeholder={placeholder}
                    className={`bg-transparent border-none outline-none w-full peer placeholder-[#AAAAAA] text-white ${textColor}`}
                    defaultValue={defaultValue}
                    {...register}
                />
                {clickableIcon ? <button type="button" onClick={handleClick}>{RightIcon}</button> : RightIcon}
            </div>
            <small className="">{errorMessage}</small>
        </div>
    );
}

export default Input4;