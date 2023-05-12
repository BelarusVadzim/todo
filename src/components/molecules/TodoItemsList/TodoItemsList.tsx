import style from "./TodoItemsList.module.scss";
import { TodoItemsSection } from "../TodoItemsSection";
import { TodoNote } from "types";
import { TodoItemsListMenu } from "../TodoItemsListMenu";
import { arrayMoveImmutable } from "array-move";
import { useState } from "react";

type SortEndArg = { oldIndex: number; newIndex: number };

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

const TodoItemsList: React.FC = () => {
  const [items, setItems] = useState(todoItems);

  const onSortEnd = ({ oldIndex, newIndex }: SortEndArg) => {
    setItems((prevItem) => arrayMoveImmutable(prevItem, oldIndex, newIndex));
  };

  return (
    <div className={style.todoItemsList}>
      <TodoItemsSection todoItems={items} onSortEnd={onSortEnd} />
      <TodoItemsListMenu itemsLeft={5} />
    </div>
  );
};

export default TodoItemsList;
