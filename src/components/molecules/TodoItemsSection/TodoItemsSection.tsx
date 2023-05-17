import { TodoItem } from "components/molecules/TodoItem";
import style from "./TodoItemsSection.module.scss";
import { PropsWithClassName, TodoNote } from "types";
import { SortableContainer } from "react-sortable-hoc";

type TodoItemsSectionProps = PropsWithClassName & {
  todoItems: TodoNote[];
};

const TodoItemsSection: React.FC<TodoItemsSectionProps> = ({ todoItems }) => (
  <div className={style.todoList}>
    {todoItems.map((value, index) => (
      <TodoItem key={`item-${index}`} index={index} note={value} />
    ))}
  </div>
);

export default SortableContainer<TodoItemsSectionProps>(TodoItemsSection);
