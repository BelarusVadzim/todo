import style from "./TodoItemsList.module.scss";
import { TodoItemsSection } from "../TodoItemsSection";
import { TodoItemsListMenu } from "../TodoItemsListMenu";
import { arrayMoveImmutable } from "array-move";
import { useEffect } from "react";
import { SortEvent, SortEventWithTag } from "react-sortable-hoc";
import { useDataService } from "hooks";

type SortEndArg = { oldIndex: number; newIndex: number };

const TodoItemsList: React.FC = () => {
  const {
    isAppInitialised,
    todosState,
    dispatchGetTodoList,
    dispatchSetTodoList,
  } = useDataService();

  const onSortEnd = ({ oldIndex, newIndex }: SortEndArg) => {
    const todoList = arrayMoveImmutable(todosState, oldIndex, newIndex);
    dispatchSetTodoList(todoList);
  };

  useEffect(() => {
    console.log("useEffect");
    !isAppInitialised && dispatchGetTodoList();
  }, [dispatchGetTodoList, isAppInitialised]);

  const checkIsElementDraggable = (element: Element) =>
    !!element.getAttribute("data-draggable");
  const shouldCancelDrag = (event: SortEvent | SortEventWithTag) =>
    todosState.length < 2 || !checkIsElementDraggable(event.target as Element);

  console.log(todosState);

  return (
    <div className={style.todoItemsList}>
      <TodoItemsSection
        onSortEnd={onSortEnd}
        shouldCancelStart={shouldCancelDrag}
      />
      <TodoItemsListMenu />
    </div>
  );
};

export default TodoItemsList;
