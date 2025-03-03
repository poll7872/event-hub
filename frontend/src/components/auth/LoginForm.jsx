import { Link, useNavigate } from "react-router-dom";
import { login as loginApi } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { validationLoginForm } from "../../utils/validations";
import { Form } from "../Form";

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

  const fields = [
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
      <Form
        title="Bienvenido"
        fields={fields}
        errors={errors}
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        buttonText="Ingresar"
      />
      <div className="text-center text-sm my-4">
        <p>¿No tienes una cuenta?</p>
        <Link to="/register" className="underline">
          Registrate
        </Link>
      </div>
    </div>
  );
}
