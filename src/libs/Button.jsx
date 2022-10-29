import React from 'react'
import Tag from "../styles/anchorTag.module.css";
const Button = ({heading,subText,customName,webAddress}) => {
  return (
    <>
   <a id={customName}  href={webAddress}>
    <button>{heading} <span>{subText}</span></button>

   </a>
    </>
  )
}

Button.defaultProps={
    subText: '',
}

export default Button
