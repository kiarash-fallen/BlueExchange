import React, { useState } from "react";

const Input5 = ({
  register,
  errors,
  type,
  id,
  changeType,
  placeHolder,
  borderText,
  active,
  deActive,
  width,
}) => {
  const [inpType, setInpType] = useState(true);
  return (
    <div className={`relative ${width}`}>
      <input
        id={id}
        type={changeType ? inpType ? "password" : "tex" : type}
        {...register("email", { required: true })}
        className="peer w-full rounded-2xl focus:border-white bg-[#252525] border border-[#AAAAAA] px-3 py-4 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
        placeholder={placeHolder}
      />
      <label
        htmlFor={id}
        className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-white"
      >
        <span>{borderText}</span>
        {errors.password && <span className="text-red-700">*</span>}
      </label>
      {changeType ? (
        <label
          htmlFor="password"
          className="absolute bottom-2 left-4 cursor-pointer"
          onClick={() => setInpType(!inpType)}
        >
          {inpType ? <span>{active}</span> : <span>{deActive}</span>}
        </label>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input5;
