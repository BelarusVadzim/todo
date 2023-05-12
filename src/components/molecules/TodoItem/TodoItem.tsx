import { Button, Checkbox, Label } from "components/atoms";
import style from "./TodoItem.module.scss";
import { TodoNote } from "types";
import { SortableElement } from "react-sortable-hoc";

export type TodoItemProps = {
  note: TodoNote;
};

const TodoItem: React.FC<TodoItemProps> = ({ note }) => {
  const labelClass = note.done ? style.label_lineThrough : style.label;

  return (
    <div className={style.todoItem}>
      <Checkbox checked={note.done} extendStyleClass={style.checkbox} />
      <Label lineThrough={note.done} className={labelClass}>
        {note.text}
      </Label>
      <Button
        glyph
        className={style.closeButton}
        value={"close"}
        onClick={() => alert("123")}
      />
    </div>
  );
};

//export default TodoItem;
export default SortableElement<TodoItemProps>(TodoItem);
