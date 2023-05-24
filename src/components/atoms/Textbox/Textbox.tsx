import React, { useState } from 'react';
import style from './Textbox.module.scss';

type TextboxProps = {
  onReturn?: (text: string) => void;
};

const EnterKey = 'Enter';

const Textbox: React.FC<TextboxProps> = ({ onReturn }) => {
  const [text, setText] = useState('');

  const keyDownHandler = (key: string, value: string) => {
    if (EnterKey === key) {
      if ( onReturn ) onReturn(value);
      setText('');
    }
  };

  return (
    <input
      type="text"
      className={style.textbox}
      onChange={(changeEventArg) => setText(changeEventArg.target.value)}
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
