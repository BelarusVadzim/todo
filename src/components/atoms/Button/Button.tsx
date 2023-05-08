import React from "react";
import style from "./Button.module.scss";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <span onClick={onClick} className={style.button}>
    {label}
  </span>
);

export default Button;
