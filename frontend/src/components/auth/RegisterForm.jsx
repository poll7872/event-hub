import { register } from "../../api/auth";
import { useForm } from "../../hooks/useForm";
import { validationRegisterForm } from "../../utils/validations";
import { Button } from "../Button";

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
    <form className="mt-3 p-4" onSubmit={handleSubmit}>
      <legend className="text-2xl font-bold text-center mb-2">
        Regístrate
      </legend>
      {/*Error general de error al crear user*/}
      {errors.submit && (
        <p className="text-red-500 text-center w-96 mb-4">{errors.submit}</p>
      )}
      <div className="mb-4 grid gap-2">
        <label htmlFor="firstname">Nombre</label>
        <input
          placeholder="Ingresa tu nombre..."
          id="firstname"
          name="firstname"
          value={values.firstname}
          type="text"
          className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          onChange={handleChange}
        />
        {errors.firstname && (
          <p className="text-red-500 text-sm">{errors.firstname}</p>
        )}
      </div>

      <div className="mb-4 grid gap-2">
        <label htmlFor="lastname">Apellido</label>
        <input
          placeholder="Ingresa tu apellido..."
          id="lastname"
          name="lastname"
          value={values.lastname}
          type="text"
          className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          onChange={handleChange}
        />
        {errors.lastname && (
          <p className="text-red-500 text-sm">{errors.lastname}</p>
        )}
      </div>

      <div className="mb-4 grid gap-2">
        <label htmlFor="email">Correo</label>
        <input
          placeholder="Ingresa tu correo..."
          id="email"
          name="email"
          value={values.email}
          type="email"
          className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-5 grid gap-2">
        <label htmlFor="password">Contraseña</label>
        <input
          placeholder="Ingresa tu contraseña..."
          id="password"
          name="password"
          value={values.password}
          type="password"
          className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <Button size="large" type="submit" disabled={isLoading}>
        {isLoading ? "Registrando..." : "Registrar"}
      </Button>
    </form>
  );
}
