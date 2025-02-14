import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginUser = await login(user);
      login(loginUser);

      //Redirigir de acuerdo al role
      if (loginUser.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }

      //Limpiar form
      setUser({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="p-4 m-auto rounded-lg">
      <form className="mt-3" onSubmit={handleSubmit}>
        <legend className="text-2xl font-bold text-center mb-2">
          Bienvenido
        </legend>
        <div className="mb-4 grid gap-2">
          <label htmlFor="email">Correo</label>
          <input
            placeholder="Ingresa tu correo..."
            id="email"
            name="email"
            value={user.email}
            type="text"
            className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
            onChange={handleChange}
          />
        </div>
        <div className="mb-2 grid gap-2">
          <label htmlFor="password">Contraseña</label>
          <input
            placeholder="Ingresa tu contraseña..."
            id="password"
            name="password"
            value={user.password}
            type="password"
            className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-800 hover:bg-blue-700 cursor-pointer text-white font-bold w-full rounded-lg p-2 my-4"
          type="submit"
        >
          Ingresar
        </button>
      </form>
      <div className="text-center text-sm">
        <p>¿No tienes una cuenta?</p>
        <Link to="/register" className="underline">
          Registrate
        </Link>
      </div>
    </div>
  );
}
