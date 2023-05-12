import { useEffect, useReducer } from "react";
import style from "./Checkbox.module.scss";

type CheckboxProps = {
  checked?: boolean;
  onToggle?: (value: boolean) => void;
  extendStyleClass?: string;
};

const Label: React.FC<CheckboxProps> = ({
  checked = false,
  onToggle,
  extendStyleClass,
}) => {
  const [isChecked, toggle] = useReducer((isChecked) => !isChecked, checked);

  useEffect(() => onToggle && onToggle(isChecked), [isChecked, onToggle]);

  const materialIconName = isChecked
    ? "check_circle"
    : "radio_button_unchecked";

  let className = isChecked ? style.checkbox_checked : style.checkbox_unchecked;

  className = extendStyleClass ? `${className} ${extendStyleClass}` : className;

  return (
    <div className={`material-icons ${className}`} onClick={toggle}>
      {materialIconName}
    </div>
  );
};

export default Label;
