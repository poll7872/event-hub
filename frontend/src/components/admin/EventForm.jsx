import { Button } from "../Button";
import { Form } from "../Form";

export function EventForm() {
  const fields = [
    {
      name: "title",
      label: "Título",
      type: "text",
      placeholder: "Ingresa el título...",
    },
    {
      name: "description",
      label: "Descripción",
      type: "textarea",
      placeholder: "Descripción del evento...",
    },
    { name: "date", label: "Fecha", type: "date", placeholder: "" },
    {
      name: "location",
      label: "Ubicación",
      type: "text",
      placeholder: "Ubicación del evento",
    },
    {
      name: "speakers",
      label: "Speakers",
      type: "select",
      placeholder: "-- Selecciona un speaker --",
      options: ["Carlos Ortiz", "Brayan Muñoz"],
    },
  ];

  return (
    <Form title="Crear Evento" fields={fields} buttonText="Crear Evento" />
  );
}
