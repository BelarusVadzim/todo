import { PropsWithChildren, useCallback } from "react";
import style from "./RadioButton.module.scss";

type RadioButtonProps = PropsWithChildren & {
  groupName: string;
  selectedValue?: string;
  onChange: (value: string) => void;
  id?: string;
  value: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  groupName,
  selectedValue,
  onChange,
  id,
  value,
}) => {
  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <label className={style.radioButton} htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={groupName}
        value={value}
        checked={value === selectedValue}
        onChange={(val) => handleChange(val.target.value)}
      />
      <span>{children}</span>
    </label>
  );
};

export default RadioButton;
