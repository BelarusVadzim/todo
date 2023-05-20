import { Button, Checkbox, Label } from "components/atoms";
import style from "./TodoItem.module.scss";
import { TodoNote } from "types";
import { SortableElement } from "react-sortable-hoc";
import { useTodoStateService } from "hooks";

export type TodoItemProps = {
  note: TodoNote;
};

const TodoItem: React.FC<TodoItemProps> = ({ note }) => {
  const { dispatchTodoItemEdited, dispatchTodoItemDeleted } =
    useTodoStateService();

  const labelClass = note.done ? style.label_lineThrough : style.label;
  const deleteButtonClick = () => {
    note.id && dispatchTodoItemDeleted(note.id);
  };
  const checkBoxToggle = () =>
    dispatchTodoItemEdited({ ...note, done: !note.done });

  return (
    <div className={style.todoItem}>
      <Checkbox
        checked={note.done}
        extendStyleClass={style.checkbox}
        onToggle={checkBoxToggle}
      />
      <Label draggable lineThrough={note.done} className={labelClass}>
        {note.text}
      </Label>
      <Button
        glyph
        className={style.closeButton}
        value={"close"}
        onClick={deleteButtonClick}
      />
    </div>
  );
};

export default SortableElement<TodoItemProps>(TodoItem);
