import { useState } from "react";

export function useForm(initialState, validate) {
  const [values, setValues] = useState(initialState); //Estado del form
  const [errors, setErrors] = useState({}); //Estados de validación
  const [isLoading, setIsLoading] = useState(false); //Estados de carga

  //Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //Función para validar el formulario
  const validateForm = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; //Return true si no hay errors
  };

  //Función para reset el formulario
  const resetForm = () => {
    setValues(initialState);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    isLoading,
    setIsLoading,
    handleChange,
    validateForm,
    resetForm,
  };
}
