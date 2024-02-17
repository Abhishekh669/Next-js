import React, { HTMLProps, InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      label,
      labelClassName = "",
      className = "",
      type = "text",
      placeholder = "",
      ...props
    },
    ref
  ) {
    return (
      <>
        <div className='lg:mx-10 my-2'>
          {label && <label className={`text-[20px] my-1 ${labelClassName}`}>{label}</label>} <br />
          <input
            type={type}
            className={`border border-transparent outline-none w-full lg:w-[80%] rounded-md h-[2.3rem] px-2 placeholder:text-[1rem] ${className}`}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
        </div>
      </>
    );
  }
);

export default Input;
