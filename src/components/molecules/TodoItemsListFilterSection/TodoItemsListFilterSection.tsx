import { RadioButton } from "components/atoms";
import style from "./TodoItemsListFilterSection.module.scss";
import { useRadioGroup } from "hooks";
import { PropsWithClassName } from "types";
import { filterTypes } from "constants/filterTypes";

type TodoItemsListFilterSectionProps = PropsWithClassName;

const radioGroupName = "radioGroup1";

const TodoItemsListFilterSection: React.FC<TodoItemsListFilterSectionProps> = ({
  className = "",
}) => {
  const [createNewRadioButton] = useRadioGroup(radioGroupName);

  const allRadioButtonProps = createNewRadioButton(filterTypes.All, true);
  const activeRadioButtonProps = createNewRadioButton(filterTypes.Active);
  const completedRadioButtonProps = createNewRadioButton(filterTypes.Completed);

  const radioButtonClassName = style.radioButton;
  const combinedClassNames = `${style.filterSection ?? ""} ${className}`;

  return (
    <div className={combinedClassNames}>
      <RadioButton className={radioButtonClassName} {...allRadioButtonProps}>
        All
      </RadioButton>
      <RadioButton className={radioButtonClassName} {...activeRadioButtonProps}>
        Active
      </RadioButton>
      <RadioButton
        className={radioButtonClassName}
        {...completedRadioButtonProps}
      >
        Completed
      </RadioButton>
    </div>
  );
};

export default TodoItemsListFilterSection;
