import { PropsWithChildren } from "react";
import style from "./Title.module.scss";

type TitleProps = PropsWithChildren;

const Title: React.FC<TitleProps> = ({ children }) => {
  return <span className={style.title}>{children}</span>;
};

export default Title;
