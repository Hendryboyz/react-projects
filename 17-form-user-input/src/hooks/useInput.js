import {useState} from "react";

export default function useInput(initialValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const isValueValid = validationFn(enteredValue);

  function handleInputChange(event) {
    const { value } = event.target;
    setEnteredValue(value);
    setDidEdit(false);
  }

  function handleInputBlur(event) {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !isValueValid,
  };
}