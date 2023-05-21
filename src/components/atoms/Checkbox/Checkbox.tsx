import React from 'react';
import style from './Checkbox.module.scss';

type CheckboxProps = {
  checked?: boolean;
  onToggle?: () => void;
  extendStyleClass?: string;
};

const Label: React.FC<CheckboxProps> = ({
  checked = false,
  onToggle,
  extendStyleClass,
}) => {
  const click = () => onToggle && onToggle();

  const materialIconName = checked ? 'check_circle' : 'radio_button_unchecked';
  let className = checked ? style.checkbox_checked : style.checkbox_unchecked;
  className = extendStyleClass ? `${className} ${extendStyleClass}` : className;

  return (
    <div className={`material-icons ${className}`} onClick={click}>
      {materialIconName}
    </div>
  );
};

export default Label;
