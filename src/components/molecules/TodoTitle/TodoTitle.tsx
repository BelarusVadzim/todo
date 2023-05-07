import { Title } from "components/atoms/Title";
import { PropsWithChildren } from "react";
import style from "./TodoTitle.module.scss";

type TodoTitleProps = PropsWithChildren;

const TodoTitle: React.FC<TodoTitleProps> = ({ children }) => {
  return (
    <div className={style.todoTitle}>
      <Title>{children}</Title>
    </div>
  );
};

export default TodoTitle;
