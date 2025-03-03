import { Form } from "../Form";

export function SpeakerForm() {
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
  return (
    <Form title="Crear Speaker" fields={fields} buttonText="Crear Speaker" />
  );
}
