import { PropsWithChildren } from "react";
import style from "./Checkbox.module.scss";

type CheckboxProps = PropsWithChildren;

const Label: React.FC<CheckboxProps> = ({ children }) => {
  return <span className={style.checkbox}>{children}</span>;
};

export default Label;
