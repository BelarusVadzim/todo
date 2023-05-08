import React, { useMemo } from "react";
import style from "./Button.module.scss";

type ButtonProps = {
  value: string;
  onClick: () => void;
  glyph?: boolean;
};

const Button: React.FC<ButtonProps> = ({ value, onClick, glyph }) => {
  const className = useMemo(
    () => `${glyph ? "material-icons" : ""} ${style.button}`,
    [glyph]
  );

  return (
    <span onClick={onClick} className={className}>
      {value}
    </span>
  );
};

export default Button;
