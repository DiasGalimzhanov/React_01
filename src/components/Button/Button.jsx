import React from "react";
import s from "./Button.module.scss";

function Button({ children, className, onClick }) {
  return (
    <button
      className={`${s.button} ${className ? className : " "}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
