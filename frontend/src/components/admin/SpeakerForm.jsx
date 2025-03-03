import { createSpeaker } from "../../api/speaker";
import { useForm } from "../../hooks/useForm";
import { Form } from "../Form";

export function SpeakerForm() {
  const {
    values,
    setValues,
    errors,
    setErrors,
    isLoading,
    setIsLoading,
    handleChange,
    validateForm,
  } = useForm({
    firstname: "",
    lastname: "",
    bio: "",
    expertise: "",
  });

  const fields = [
    {
      name: "firstname",
      label: "Nombre",
      type: "text",
      placeholder: "Ingresa el nombre...",
    },
    {
      name: "lastname",
      label: "Apellido",
      type: "text",
      placeholder: "Ingresa el apellido...",
    },
    {
      name: "bio",
      label: "Biografia",
      type: "textarea",
      placeholder: "Ingresa la biografia...",
    },
    {
      name: "expertise",
      label: "Conocimientos",
      type: "textarea",
      placeholder: "Ingresa sus conocimientos...",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await createSpeaker(values);

      //Limpiar el Form
      setValues({
        firstname: "",
        lastname: "",
        bio: "",
        expertise: "",
      });

      //Limpiar errores
      setErrors({});
    } catch (error) {
      console.error("Error al crear speaker: ", error);
      setErrors({ submit: "Error al crear. Intentalo de nuevo" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      title="Crear Speaker"
      fields={fields}
      errors={errors}
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText="Crear Speaker"
    />
  );
}
