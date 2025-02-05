import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white flex items-center justify-center text-blue-800 px-20 text-sm">
      <img src="/logo-blue.png" />
      <nav>
        <ul className="flex font-semibold">
          <li className="hover:bg-blue-700 rounded-2xl p-2 w-20 text-center hover:text-white">
            <a>Inicio</a>
          </li>
          <li className="hover:bg-blue-700 rounded-2xl p-2 w-20 text-center hover:text-white">
            <a>Eventos</a>
          </li>
          <li className="hover:bg-blue-700 rounded-2xl p-2 w-20 text-center hover:text-white">
            <a>Speakers</a>
          </li>
          <li className="hover:bg-blue-700 rounded-2xl p-2 w-20 text-center hover:text-white">
            <Link to="/login">Ingresar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
