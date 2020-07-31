import { useState } from 'react';

/**
 * Custom react hook to handle Form
 * @param {Function} defaultValues
 * @returns {object} object
 */
function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  function clearForm() {
    setValue(defaultValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;