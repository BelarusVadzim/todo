import style from "./ScrolableSection.module.scss";
import { arrayMoveImmutable } from "array-move";
import { useEffect } from "react";
import { SortEvent, SortEventWithTag } from "react-sortable-hoc";
import { useDataService } from "hooks";
import { filterTypes } from "constants/filterTypes";
import { SortableSection } from "../SortableSection";

type SortEndArg = { oldIndex: number; newIndex: number };

const ScrolableSection: React.FC = () => {
  const {
    isAppInitialised,
    todosState,
    todoFilter,
    dispatchGetTodoList,
    dispatchSetTodoList,
  } = useDataService();

  const onSortEnd = ({ oldIndex, newIndex }: SortEndArg) => {
    const todoList = arrayMoveImmutable(todosState, oldIndex, newIndex);
    dispatchSetTodoList(todoList);
  };

  useEffect(() => {
    !isAppInitialised && dispatchGetTodoList();
  }, [dispatchGetTodoList, isAppInitialised]);

  const checkIsElementDraggable = (element: Element) =>
    !!element.getAttribute("data-draggable");
  const shouldCancelDrag = (event: SortEvent | SortEventWithTag) =>
    todoFilter === filterTypes.Active ||
    todoFilter === filterTypes.Completed ||
    todosState.length < 2 ||
    !checkIsElementDraggable(event.target as Element);

  return (
    <div className={style.scrolableSection}>
      <SortableSection
        onSortEnd={onSortEnd}
        shouldCancelStart={shouldCancelDrag}
      />
      {/* <TodoItemsListMenu /> */}
    </div>
  );
};

export default ScrolableSection;
