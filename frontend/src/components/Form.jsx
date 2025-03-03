import { Button } from "./Button";

export function Form({
  title,
  fields,
  errors,
  values,
  onChange,
  onSubmit,
  isLoading,
  buttonText,
}) {
  return (
    <form className="mt-3" onSubmit={onSubmit}>
      <legend className="text-2xl font-bold text-center mb-2">{title}</legend>

      {errors?.submit && (
        <p className="text-red-500 text-center w-96 mb-4">{errors.submit}</p>
      )}

      {fields.map((field) => (
        <div key={field.name} className="mb-4 grid gap-2">
          <label htmlFor={field.name}>{field.label}</label>

          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
              rows="5"
              value={values[field.name] || ""}
              onChange={onChange}
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
              value={values[field.name] || ""}
              onChange={onChange}
            >
              <option value="" disabled>
                {field.placeholder}
              </option>
              {field.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
              value={values[field.name] || ""}
              onChange={onChange}
            />
          )}

          {errors?.[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name]}</p>
          )}
        </div>
      ))}

      <Button size="large" type="submit" disabled={isLoading}>
        {isLoading ? "Cargando..." : buttonText}
      </Button>
    </form>
  );
}
