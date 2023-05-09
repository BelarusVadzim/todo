import { TodoTitle } from "components/molecules";
import style from "./TodoList.module.scss";

const TodoList: React.FC = () => (
  <div className={style.todoList}>
    <TodoTitle>TODO</TodoTitle>
  </div>
);

export default TodoList;
