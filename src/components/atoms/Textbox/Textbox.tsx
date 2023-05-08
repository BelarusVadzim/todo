import style from "./Textbox.module.scss";
import { useCallback, useState } from "react";

type TextboxProps = {
  onReturn: (text: string) => void;
};

const EnterKey = "Enter";

const Textbox: React.FC<TextboxProps> = ({ onReturn }) => {
  const [text, setText] = useState("");

  const keyDownHandler = useCallback(
    (key: string, text: string) => {
      if (EnterKey === key) {
        onReturn(text);
        setText("");
      }
    },
    [onReturn]
  );

  return (
    <input
      className={style.textbox}
      onChange={(ChangeEventArg) => setText(ChangeEventArg.target.value)}
      onKeyDown={(keyboardEventArg) =>
        keyDownHandler(
          keyboardEventArg.key,
          keyboardEventArg.currentTarget.value
        )
      }
      value={text}
    />
  );
};

export default Textbox;
