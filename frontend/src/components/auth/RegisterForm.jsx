import { register } from "../../api/auth";
import { useForm } from "../../hooks/useForm";
import { validationRegisterForm } from "../../utils/validations";
import { Form } from "../Form";

export function RegisterForm() {
  const {
    values,
    setValues,
    errors,
    setErrors,
    isLoading,
    setIsLoading,
    handleChange,
    validateForm,
  } = useForm(
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "user",
    },
    validationRegisterForm,
  );

  const fields = [
    {
      name: "firstname",
      label: "Nombre",
      type: "text",
      placeholder: "Ingresa tu nombre...",
    },
    {
      name: "lastname",
      label: "Apellido",
      type: "text",
      placeholder: "Ingresa tu apellido...",
    },
    {
      name: "email",
      label: "Correo",
      type: "email",
      placeholder: "Ingresa tu correo...",
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
      placeholder: "Ingresa tu contraseña...",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await register(values);

      //Limpiar el form
      setValues({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role: "user",
      });

      //Limpiar los errores
      setErrors({});
    } catch (error) {
      console.error("Error al registrar usuario: ", error);
      setErrors({ submit: "Error al registrar. Intentalo de nuevo" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      title="Registrarse"
      fields={fields}
      errors={errors}
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText="Registrar"
    />
  );
}
