import React from 'react';

const Input = ({ label, id, focus, color, isDisable, type, placeholder, hasError, defaultValue, errorMessage, hasLeftIcon, hasRightIcon, clickableIcon, icon, register, handleClick, textColor }) => {

    return (
        <div className='group'>
            <label htmlFor={id} className="block">{label}</label>
            <div className={hasError ? "" : `flex items-center justify-between relative bg-[#3A3A3A] rounded-xl  border border-[#3A3A3A] px-4 py-2 peer  ${focus}`}>
                {hasLeftIcon ? <span className='mr-2'>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{icon}</button> : icon}
                </span> : ""}
                <input
                    id={id}
                    type={type}
                    disabled={isDisable}
                    placeholder={placeholder}
                    className={`bg-transparent border-none outline-none w-10/12 peer placeholder-[#CCCCCC] ${textColor}`}
                    defaultValue={defaultValue}
                    {...register}
                />
                {hasRightIcon ? <>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{icon}</button> : icon}
                </> : ""}
                <div className={`absolute bottom-0 -translate-x-[100%] w-1/3 h-1 blur-md hidden peer-focus:block ${color}`} ></div>
            </div>
            <small className="">{errorMessage}</small>
        </div>
    );
}

export default Input;