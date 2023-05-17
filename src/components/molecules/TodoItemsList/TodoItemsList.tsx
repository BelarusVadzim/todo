import style from "./TodoItemsList.module.scss";
import { TodoItemsSection } from "../TodoItemsSection";
import { TodoNote } from "types";
import { TodoItemsListMenu } from "../TodoItemsListMenu";
import { arrayMoveImmutable } from "array-move";
import { useState } from "react";
import { SortEvent, SortEventWithTag } from "react-sortable-hoc";

type SortEndArg = { oldIndex: number; newIndex: number };

const todoItems: TodoNote[] = [
  {
    id: 1,
    done: true,
    text: "item1 item1 item1item1item1item1item1 item1 item1 item1item1item1item1item1item1 item1 item1item1item1item1item1item1 item1 item1item1item1item1item1",
  },
  {
    id: 2,
    done: false,
    text: "item2 item1 item1item1item1item1item1 item1 item1 item1item1item1item1item1item1 item1 item1item1item1item1item1",
  },
  { id: 3, done: false, text: "item3 item1 item1item1item1item1item1" },
  { id: 4, done: false, text: "item4 item1 item1item1item1item1item1" },
  { id: 5, done: false, text: "item5 item1 item1item1item1item1item1" },
  { id: 6, done: false, text: "item6 item1 item1item1item1item1item1" },
];

const TodoItemsList: React.FC = () => {
  console.log("TodoItemsList");
  const [items, setItems] = useState(todoItems);

  const onSortEnd = ({ oldIndex, newIndex }: SortEndArg) => {
    setItems((prevItem) => arrayMoveImmutable(prevItem, oldIndex, newIndex));
  };
  const checkIsElementDraggable = (element: Element) =>
    !!element.getAttribute("data-draggable");
  const shouldCancelDrag = (event: SortEvent | SortEventWithTag) =>
    items.length < 2 || !checkIsElementDraggable(event.target as Element);

  return (
    <div className={style.todoItemsList}>
      <TodoItemsSection
        todoItems={items}
        onSortEnd={onSortEnd}
        shouldCancelStart={shouldCancelDrag}
      />
      <TodoItemsListMenu itemsLeft={items.length} />
    </div>
  );
};

export default TodoItemsList;
