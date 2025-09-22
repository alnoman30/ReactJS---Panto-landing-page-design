import React from "react";
import btnIcon from '../assets/button-arrow.png'
const Button = ({btnText}) => {
  return (
    <button className="text-sm text-primary flex items-center gap-1 cursor-pointer">
      <p>{btnText}</p>
      <img src={btnIcon} alt="btn icon" />
    </button>
  );
};

export default Button;
