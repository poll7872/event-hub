import { useState } from "react";
import { register } from "../../api/auth";

export function RegisterForm() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const createdUser = await register(user);
      console.log(createdUser);
      //Limpiar el form
      setUser({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role: "user",
      });
    } catch (error) {
      console.error("Error al registrar usuario: ", error);
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
    <form className="mt-3 p-4" onSubmit={handleSubmit}>
      <legend className="text-2xl font-bold text-center mb-2">
        Regístrate
      </legend>
      <div className="mb-4 grid gap-2">
        <label htmlFor="firstname">Nombre</label>
        <input
          placeholder="Ingresa tu correo..."
          id="firstname"
          name="firstname"
          value={user.firstname}
          type="text"
          className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 grid gap-2">
        <label htmlFor="lastname">Apellido</label>
        <input
          placeholder="Ingresa tu correo..."
          id="lastname"
          name="lastname"
          value={user.lastname}
          type="text"
          className="p-2 rounded-lg border-b-4 border-gray-200 outline-none focus:border-blue-800"
          onChange={handleChange}
        />
      </div>
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
        Regístrarse
      </button>
    </form>
  );
}
