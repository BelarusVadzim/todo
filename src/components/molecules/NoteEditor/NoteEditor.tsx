import { Textbox } from "components/atoms";
import style from "./NoteEditor.module.scss";
import { PropsWithClassName, TodoNote } from "types";

type NoteEditorProps = PropsWithClassName & {
  note?: TodoNote;
};

const NoteEditor: React.FC<NoteEditorProps> = ({ className = "", note }) => {
  const combinedClassNames = `${style.noteEditor} ${className}`;
  const editFinished = () =>
    note ? alert(`item ${note.id} edited`) : alert(`new item created`);

  return (
    <div className={combinedClassNames}>
      <div className={style.leftField} />
      <Textbox onReturn={editFinished} />
      <div className={style.rightField} />
    </div>
  );
};

export default NoteEditor;
