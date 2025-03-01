import { Button } from "./Button";

export function EventForm() {
  return (
    <>
      <form>
        <legend className="text-xl font-bold text-center">Crear Evento</legend>
        <div className="mb-4 grid gap-2">
          <label htmlFor="title">Titulo</label>
          <input
            placeholder="Ingresa el titulo..."
            id="title"
            name="title"
            type="text"
            className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          />
        </div>
        <div className="mb-4 grid gap-3">
          <label htmlFor="description">Descripción</label>
          <textarea
            className="p-2 rounded-lg border-b-4 border-t-2 border-gray-200 outline-none focus:border-blue-800"
            rows="5"
            placeholder="Descripción del evento..."
          ></textarea>
        </div>
        <div className="mb-4 grid gap-2">
          <label htmlFor="date">Fecha</label>
          <input
            id="date"
            name="date"
            type="date"
            className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          />
        </div>
        <div className="mb-4 grid gap-2">
          <label htmlFor="location">Ubicación</label>
          <input
            id="location"
            name="location"
            placeholder="Ubicación del evento"
            className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          />
        </div>
        <div className="mb-4 grid gap-2">
          <label htmlFor="speakers">Speakers</label>
          <select
            name="speakers"
            id="speakers"
            className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          >
            <option value="" disabled>
              -- Selecciona un speaker --
            </option>
            <option>Carlos Ortiz</option>
            <option>Brayan Muñoz</option>
          </select>
        </div>

        <Button size="large" type="submit">
          Crear Evento
        </Button>
      </form>
    </>
  );
}
