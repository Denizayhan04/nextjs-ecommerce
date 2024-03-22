import React from 'react'

interface ButtonProps {
    width: number
    text : string
    disabled? : boolean
    outline?: boolean
}

const Button:React.FC<ButtonProps> = ({width , text ,disabled , outline }) => {
  return (
    <button disabled={disabled}  style={{width:width}} className={`rounded-lg p-3 ${outline ? "border text-black" : "bg-black text-white" } `}>{text}</button>
  )
}

export default Button