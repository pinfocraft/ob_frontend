import React from 'react';
import './Button.css';

const Button = ({buttonWidth, buttonInnerText , buttonBackground, buttonTextColor, buttonArrow, className, ...other }) => {
  return (
      <>
      <button className={`deafult-button ${className}`} style={{width : `${buttonWidth}`, background : `${buttonBackground}`, color : `${buttonTextColor}`}} {...other}>{buttonInnerText}{buttonArrow}</button>
      </>
  )
};

export default Button;
