import React from 'react';
import style from './Textbox.module.scss';
import { useCallback, useState } from 'react';

type TextboxProps = {
  onReturn?: (text: string) => void;
};

const EnterKey = 'Enter';

const Textbox: React.FC<TextboxProps> = ({ onReturn }) => {
  const [text, setText] = useState('');

  const keyDownHandler = useCallback(
    (key: string, value: string) => {
      if (EnterKey === key) {
        if ( onReturn ) onReturn(value);
        setText('');
      }
    },
    [onReturn],
  );

  return (
    <input
      type="text"
      className={style.textbox}
      onChange={(ChangeEventArg) => setText(ChangeEventArg.target.value)}
      onKeyDown={(keyboardEventArg) =>
        keyDownHandler(
          keyboardEventArg.key,
          keyboardEventArg.currentTarget.value,
        )
      }
      value={text}
      maxLength={50}
    />
  );
};

export default Textbox;
