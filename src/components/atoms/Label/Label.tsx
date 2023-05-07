import { PropsWithChildren } from "react";
import style from "./Label.module.scss";

type LabelProps = PropsWithChildren;

const Label: React.FC<LabelProps> = ({ children }) => {
  return <span className={style.label}>{children}</span>;
};

export default Label;
