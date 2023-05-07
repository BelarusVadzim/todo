import React, { PropsWithChildren } from "react";
import style from "./Button.module.scss";

type ButtonProps = PropsWithChildren & {
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} className={style.button}>
    {children}
  </button>
);

export default Button;
