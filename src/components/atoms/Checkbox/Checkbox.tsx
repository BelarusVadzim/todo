import { useEffect, useReducer } from "react";
import style from "./Checkbox.module.scss";

type CheckboxProps = {
  checked?: boolean;
  onToggle?: (value: boolean) => void;
};

const Label: React.FC<CheckboxProps> = ({ checked = false, onToggle }) => {
  const [isChecked, toggle] = useReducer((isChecked) => !isChecked, checked);

  useEffect(() => onToggle && onToggle(isChecked), [isChecked, onToggle]);

  const materialIconName = isChecked
    ? "check_circle"
    : "radio_button_unchecked";

  return (
    <span className={`material-icons ${style.checkbox}`} onClick={toggle}>
      {materialIconName}
    </span>
  );
};

export default Label;
