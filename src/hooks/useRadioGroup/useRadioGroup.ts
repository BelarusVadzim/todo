import { RadioButtonProps } from "components/atoms/RadioButton/RadioButton";
import { useDataService } from "hooks/useDataService";
import { useEffect } from "react";

const useRadioGroup = (groupName: string, onToggle: (value: string) => void) => {
  const { dispatchSetFilter, todoFilter, isAppInitialised } = useDataService();
  const onChange = (value: string) => {
    dispatchSetFilter(value);
    onToggle(value);
  };

  let newId = 0;
  let startValue = "";

  useEffect(() => {
    !isAppInitialised && dispatchSetFilter(startValue) 
  }, [dispatchSetFilter, isAppInitialised, startValue])

  const createNewRadioButton = (value: string, selected?: boolean): RadioButtonProps => {
    const id = newId.toString();
    newId++;

    if (selected) startValue = value;

    return {
        onChange,
        id,
        groupName,
        value,
        selectedValue: todoFilter,
    }
  };

  return [createNewRadioButton] as const;
};

export default useRadioGroup;
