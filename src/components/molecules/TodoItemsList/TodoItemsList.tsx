import { TodoItem } from "components/molecules/TodoItem";
import style from "./TodoItemsList.module.scss";
import { TodoItemsSection } from "../TodoItemsSection";
import { PropsWithClassName, TodoNote } from "types";
import { TodoItemsListMenu } from "../TodoItemsListMenu";

const todoItems: TodoNote[] = [
  {
    done: true,
    text: "item1 item1 item1item1item1item1item1 item1 item1 item1item1item1item1item1item1 item1 item1item1item1item1item1item1 item1 item1item1item1item1item1",
  },
  {
    done: false,
    text: "item2 item1 item1item1item1item1item1 item1 item1 item1item1item1item1item1item1 item1 item1item1item1item1item1",
  },
  { done: false, text: "item3 item1 item1item1item1item1item1" },
  { done: false, text: "item4 item1 item1item1item1item1item1" },
  { done: false, text: "item5 item1 item1item1item1item1item1" },
  { done: false, text: "item6 item1 item1item1item1item1item1" },
];

const TodoItemsList: React.FC = () => (
  <div className={style.todoItemsList}>
    <TodoItemsSection todoItems={todoItems} />
    <TodoItemsListMenu itemsLeft={5} />
  </div>
);

export default TodoItemsList;
