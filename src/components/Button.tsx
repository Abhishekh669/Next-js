import React, {ButtonHTMLAttributes} from 'react'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
function Button({
  children ,
  className  ="",
  ...props


}: ButtonProps) {
  
  return (
   <button {...props} className={`contact-button border w-full border-red-600 bg-red-600 rounded-lg  md:px-[1rem] lg:py-[0.7rem] px-[0.89rem] py-2 text-white hover:bg-transparent hover:text-black hover:border-red-600 ${className}`}>{children}</button>
  )
}

export default Button;