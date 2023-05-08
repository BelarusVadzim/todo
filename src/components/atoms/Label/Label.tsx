import { PropsWithChildren } from "react";
import style from "./Label.module.scss";

type LabelProps = PropsWithChildren & {
  lineThrough?: boolean;
};

const Label: React.FC<LabelProps> = ({ children, lineThrough }) => {
  const className = lineThrough ? style.label_lineThrough : style.label;

  return <span className={className}>{children}</span>;
};

export default Label;
