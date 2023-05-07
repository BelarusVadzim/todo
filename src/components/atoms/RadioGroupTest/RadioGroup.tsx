import { PropsWithChildren, useState } from "react";
import { RadioButton } from "../RadioButton";

type RadioButtonProps = PropsWithChildren & {
  onToggle: (value: string) => void;
};

const defaultOption = "2";
const radioGroupName = "radio1";

const RadioGroup: React.FC<RadioButtonProps> = ({ onToggle }) => {
  const [option, setOption] = useState(defaultOption);
  const onOptionChange = (value: string) => {
    setOption(value);
    onToggle(value);
  };

  return (
    <>
      <RadioButton
        onChange={onOptionChange}
        groupName={radioGroupName}
        value="Radio All" //TODO: Use enum
        selectedValue={option}
      >
        All
      </RadioButton>
      <span> </span>
      <RadioButton
        onChange={onOptionChange}
        id="234"
        groupName={radioGroupName}
        value="Radio Active"
        selectedValue={option}
      >
        Active
      </RadioButton>
      <span> </span>
      <RadioButton
        onChange={onOptionChange}
        id="345"
        groupName={radioGroupName}
        value="Radio Completed"
        selectedValue={option}
      >
        Completed
      </RadioButton>
    </>
  );
};

export default RadioGroup;
