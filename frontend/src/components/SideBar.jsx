import {
  ArrowExitFilled,
  CalendarFilled,
  HomeFilled,
  MicFilled,
  PeopleAudienceFilled,
} from "@fluentui/react-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function SideBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="bg-blue-800 text-white font-bold text-sm h-screen w-32 rounded-r-lg">
      <img className="relative left-3" src="/logo.png" />
      <nav className="my-10">
        <ul className="grid justify-center gap-5">
          <li className="flex flex-col items-center hover:bg-white rounded-lg hover:text-blue-800 p-1 cursor-pointer">
            <HomeFilled className="text-2xl" />
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="flex flex-col items-center hover:bg-white rounded-lg hover:text-blue-800 p-1 cursor-pointer">
            <CalendarFilled className="text-2xl" />
            <Link to="/events">Eventos</Link>
          </li>

          <li className="flex flex-col items-center hover:bg-white rounded-lg hover:text-blue-800 p-1 cursor-pointer">
            <MicFilled className="text-2xl" />
            <Link to="/speakers">Speakers</Link>
          </li>

          <li className="flex flex-col items-center hover:bg-white rounded-lg hover:text-blue-800 p-1 cursor-pointer">
            <PeopleAudienceFilled className="text-2xl" />
            <Link>Registrados</Link>
          </li>

          <li
            className="flex flex-col items-center hover:bg-white rounded-lg hover:text-blue-800 p-1 cursor-pointer mt-18"
            onClick={handleLogout}
          >
            <ArrowExitFilled className="text-2xl" />
            <Link>Cerrar Sesión</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
