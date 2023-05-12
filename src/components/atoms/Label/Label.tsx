import { PropsWithChildren } from "react";
import style from "./Label.module.scss";
import { PropsWithClassName } from "types";

type LabelProps = PropsWithChildren &
  PropsWithClassName & {
    lineThrough?: boolean;
  };

const Label: React.FC<LabelProps> = ({
  children,
  lineThrough,
  className = "",
}) => {
  let combinedClassName = lineThrough ? style.label_lineThrough : style.label;
  combinedClassName = className
    ? `${combinedClassName} ${className}`
    : combinedClassName;

  return <div className={combinedClassName}>{children}</div>;
};

export default Label;
