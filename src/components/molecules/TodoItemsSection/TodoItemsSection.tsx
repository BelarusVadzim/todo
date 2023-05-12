import { TodoItem } from "components/molecules/TodoItem";
import style from "./TodoItemsSection.module.scss";
import { PropsWithClassName, TodoNote } from "types";

type TodoItemsSectionProps = PropsWithClassName & {
  todoItems: TodoNote[];
};

const TodoItemsSection: React.FC<TodoItemsSectionProps> = ({ todoItems }) => (
  <div className={style.todoList}>
    {todoItems.map((item, i) => (
      <TodoItem key={i} note={item} />
    ))}
  </div>
);

export default TodoItemsSection;
