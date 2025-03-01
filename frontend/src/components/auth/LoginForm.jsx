import { Link, useNavigate } from "react-router-dom";
import { login as loginApi } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { validationLoginForm } from "../../utils/validations";
import { Button } from "../Button";

export function LoginForm() {
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
      email: "",
      password: "",
    },
    validationLoginForm,
  );

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validar el form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const loginUser = await loginApi(values);
      login(loginUser);

      //Redirigir de acuerdo al role
      if (loginUser.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }

      //Limpiar form
      setValues({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      setErrors({ submit: "Verifica tus credenciales." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 m-auto rounded-lg">
      <form className="mt-3" onSubmit={handleSubmit}>
        <legend className="text-2xl font-bold text-center mb-2">
          Bienvenido
        </legend>
        {errors.submit && (
          <p className="text-red-500 text-center w-96 mb-4">{errors.submit}</p>
        )}
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
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-6 grid gap-2">
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

        <Button
          loading={isLoading}
          type="submit"
          size="large"
          disabled={isLoading}
        >
          {isLoading ? "Ingresando ..." : "Ingresar"}
        </Button>
      </form>
      <div className="text-center text-sm my-4">
        <p>¿No tienes una cuenta?</p>
        <Link to="/register" className="underline">
          Registrate
        </Link>
      </div>
    </div>
  );
}
