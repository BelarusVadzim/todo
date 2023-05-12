import { Textbox } from "components/atoms";
import style from "./NoteEditor.module.scss";
import { PropsWithClassName } from "types";

type NoteEditorProps = PropsWithClassName & {
  onReturn?: (text: string) => void;
};

const NoteEditor: React.FC<NoteEditorProps> = ({
  onReturn,
  className = "",
}) => {
  const combinedClassNames = `${style.noteEditor} ${className}`;

  return (
    <div className={combinedClassNames}>
      <div className={style.leftField} />
      <Textbox onReturn={onReturn} />
      <div className={style.rightField} />
    </div>
  );
};

export default NoteEditor;
