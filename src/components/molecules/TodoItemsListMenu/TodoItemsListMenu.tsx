import { Button, Label } from "components/atoms";
import style from "./TodoItemsListMenu.module.scss";
import { TodoItemsListFilterSection } from "../TodoItemsListFilterSection";
import { useDataService } from "hooks";

const TodoItemsListMenu: React.FC = () => {
  const { dispatchGetTodoList, todosState, dispatchDeleteCompletedTodos } =
    useDataService();
  const filterChanged = (filter: string) => dispatchGetTodoList();
  const buttonClearClick = () => dispatchDeleteCompletedTodos();

  return (
    <div className={style.todoItemsListMenu}>
      <Label className={style.label}>{todosState.length} items left</Label>
      <TodoItemsListFilterSection onFilterChanged={filterChanged} />
      <Button
        className={style.button}
        value="Clear Completed"
        onClick={buttonClearClick}
      />
    </div>
  );
};

export default TodoItemsListMenu;
