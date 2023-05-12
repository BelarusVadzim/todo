import { RadioButtonProps } from "components/atoms/RadioButton/RadioButton";
import { useEffect, useState } from "react";

const useRadioGroup = (groupName: string, onToggle: (value: string) => void) => {
  const [selectedValue, setSelectedValue] = useState<string>();
  const onChange = (value: string) => {
    setSelectedValue(value);
    onToggle(value);
  };

  let newId = 0;
  let startValue = "";

  useEffect(() => setSelectedValue(startValue), [startValue])

  const createNewRadioButton = (value: string, selected?: boolean): RadioButtonProps => {
    const id = newId.toString();
    console.log(newId);
    newId++;

    if (selected) startValue = value;

    return {
        onChange,
        id,
        groupName,
        value,
        selectedValue,
    }
  };

  return [createNewRadioButton] as const;
};

export default useRadioGroup;
