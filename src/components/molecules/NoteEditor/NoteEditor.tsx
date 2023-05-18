import { Textbox } from "components/atoms";
import style from "./NoteEditor.module.scss";
import { PropsWithClassName, TodoNote } from "types";
import { useDataService } from "hooks";

type NoteEditorProps = PropsWithClassName & {
  note?: TodoNote;
};

const NoteEditor: React.FC<NoteEditorProps> = ({ className = "", note }) => {
  const combinedClassNames = `${style.noteEditor} ${className}`;

  const { dispatchCreateNewTodoItem, dispatchEditTodoItem } = useDataService();

  const editFinished = (text: string) =>
    note
      ? dispatchEditTodoItem({ ...note, text })
      : dispatchCreateNewTodoItem(text);

  return (
    <div className={combinedClassNames}>
      <div className={style.leftField} />
      <Textbox onReturn={editFinished} />
      <div className={style.rightField} />
    </div>
  );
};

export default NoteEditor;
