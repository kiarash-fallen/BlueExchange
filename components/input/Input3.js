import React from 'react';

const Input3 = ({ label, id, focus, color, isDisable, type, placeholder, hasError, defaultValue, errorMessage, hasLeftIcon, hasRightIcon, clickableIcon, icon, register, handleClick, textColor, value }) => {

    return (
        <div className='relative'>
            <label htmlFor={id} className="absolute -top-3 right-3 bg-[#252525] px-1 bg-opacity-100 text-[#AAAAAA] focus-within:text-white">{label}</label>
            <div className={hasError ? "" : `w-full flex items-center justify-between rounded-2xl hover-animation border  focus-within:border- focus-within:border-white bg-[#252525] bg-opacity-[32%] border-[#AAAAAA] px-3 py-4 outline-none placeholder:text-[#AAAAAA]`}>
                {hasLeftIcon ? <span className='mr-2'>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{icon}</button> : icon}
                </span> : ""}

                <input
                    id={id}
                    type={type}
                    disabled={isDisable}
                    placeholder={placeholder}
                    className={`bg-transparent border-none outline-none w-10/12 peer placeholder-[#CCCCCC] text-white`}
                    defaultValue={defaultValue}
                    value={value}
                    {...register}
                />
                {hasRightIcon ? <>
                    {clickableIcon ? <button type="button" onClick={handleClick}>{icon}</button> : icon}
                </> : ""}
            </div>
            <small className="">{errorMessage}</small>
        </div>
    );
}

export default Input3;