import { RadioButton } from "components/atoms";
import style from "./TodoItemsListFilterSection.module.scss";
import { useRadioGroup } from "hooks";
import { PropsWithClassName } from "types";

type TodoItemsListFilterSectionProps = PropsWithClassName & {
  onFilterChanged: (value: string) => void;
};

const radioGroupName = "radioGroup1";

const TodoItemsListFilterSection: React.FC<TodoItemsListFilterSectionProps> = ({
  onFilterChanged,
  className = "",
}) => {
  const [createNewRadioButton] = useRadioGroup(radioGroupName, onFilterChanged);

  const allRadioButtonProps = createNewRadioButton("All", true);
  const activeRadioButtonProps = createNewRadioButton("Active");
  const completedRadioButtonProps = createNewRadioButton("Completed");

  const radioButtonClassName = style.radioButton;

  const combinedClassNames = `${style.filterSection} ${className}`;

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
