import { Link } from "react-router-dom";

export function LoginForm() {
  return (
    <div className="p-4 m-auto rounded-lg">
      <form className="mt-3">
        <legend className="text-2xl font-bold text-center mb-2">
          Bienvenido
        </legend>
        <div className="mb-4 grid gap-2">
          <label htmlFor="email">Correo</label>
          <input
            placeholder="Ingresa tu correo..."
            id="email"
            name="email"
            type="text"
            className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          />
        </div>
        <div className="mb-2 grid gap-2">
          <label htmlFor="password">Contraseña</label>
          <input
            placeholder="Ingresa tu contraseña..."
            id="password"
            name="password"
            type="password"
            className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
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
