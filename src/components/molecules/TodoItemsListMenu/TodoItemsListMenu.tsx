import { Button, Label } from "components/atoms";
import style from "./TodoItemsListMenu.module.scss";
import { TodoItemsListFilterSection } from "../TodoItemsListFilterSection";

type TodoItemProps = {
  itemsLeft: number;
};

const TodoItemsListMenu: React.FC<TodoItemProps> = ({ itemsLeft }) => {
  const amount = itemsLeft.toString();

  return (
    <div className={style.todoItemsListMenu}>
      <Label className={style.label}>{amount} items left</Label>
      <TodoItemsListFilterSection onFilterChanged={(val) => alert(val)} />
      <Button className={style.button} value="Clear Completed" />
    </div>
  );
};

export default TodoItemsListMenu;
