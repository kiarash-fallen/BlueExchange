import React from 'react';

const Textarea = ({ Children, cols, rows, label, id, isDisable, type, placeholder, hasError, defaultValue, errorMessage, register }) => {

    return (
        <div className='relative'>
            <label htmlFor={id} className="absolute -top-3 right-3 bg-[#252525] px-1 bg-opacity-100 text-[#AAAAAA] focus-within:text-white text-sm">{label}</label>
            <div className={hasError ? "" : `w-full flex items-center justify-between rounded-2xl hover-animation border focus-within:border-white bg-[#252525] bg-opacity-[32%] border-[#AAAAAA] px-3 py-4 outline-none placeholder:text-[#AAAAAA]`}>
                <textarea
                    cols={cols}
                    rows={rows}
                    id={id}
                    type={type}
                    disabled={isDisable}
                    placeholder={placeholder}
                    className={`bg-transparent border-none outline-none w-full peer placeholder-[#CCCCCC] resize-none text-white`}
                    defaultValue={defaultValue}
                    {...register}
                >
                    {Children}
                </textarea>
            </div>
            <small className="">{errorMessage}</small>
        </div>
    );
}

export default Textarea;