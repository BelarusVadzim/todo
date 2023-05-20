import { Button, Label } from "components/atoms";
import style from "./TodoItemsListMenu.module.scss";
import { TodoItemsListFilterSection } from "../TodoItemsListFilterSection";
import { useTodoStateService } from "hooks";

const TodoItemsListMenu: React.FC = () => {
  const { dispatchTodoListLoaded, todos, dispatchCompletedTodosDeleted } =
    useTodoStateService();
  const filterChanged = () => dispatchTodoListLoaded();
  const buttonClearClick = () => dispatchCompletedTodosDeleted();

  return (
    <div className={style.todoItemsListMenu}>
      <Label className={style.label}>{todos.length} items left</Label>
      <TodoItemsListFilterSection
        className={style.filterSection}
        onFilterChanged={filterChanged}
      />
      <Button
        className={style.button}
        value="Clear Completed"
        onClick={buttonClearClick}
      />
    </div>
  );
};

export default TodoItemsListMenu;
