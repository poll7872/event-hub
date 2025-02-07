import { AddCircleFilled } from "@fluentui/react-icons";
import { SideBar } from "../../components/SideBar";

export function Events() {
  return (
    <div className="flex gap-4">
      <SideBar />
      <div>
        <h1 className="text-xl font-bold text-blue-800 my-4">Eventos</h1>
        <button className="cursor-pointer bg-blue-800 hover:bg-blue-700 text-white p-2 flex items-center gap-1 rounded-lg">
          Agregar
          <AddCircleFilled />
        </button>
      </div>
    </div>
  );
}
