import { PropsWithChildren } from "react";
import style from "./RadioButton.module.scss";
import { PropsWithClassName } from "types";

export type RadioButtonProps = PropsWithChildren &
  PropsWithClassName & {
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
  className = "",
}) => {
  let combinedClassName = `${style.radioButton} ${className}`;

  return (
    <label className={combinedClassName} htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={groupName}
        value={value as string}
        checked={value === selectedValue}
        onChange={(val) => onChange(val.target.value)}
      />
      <span>{children}</span>
    </label>
  );
};

export default RadioButton;
