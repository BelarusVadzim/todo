import React, { PropsWithChildren } from "react";
import style from "./BaseButton.module.scss";

type ButtonProps = PropsWithChildren & {
  className?: string;
}

export const BaseButton: React.FC<ButtonProps> = ({ className = style.baseButton, children }) => {
  return (
      <button
        className={className}
        onClick={() => alert("I am base button")}
        children = {children}
      />
  );
};
