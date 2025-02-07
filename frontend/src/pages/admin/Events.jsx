import { AddCircleFilled } from "@fluentui/react-icons";
import { SideBar } from "../../components/SideBar";
import { Table } from "../../components/Table";

export function Events() {
  const columns = ["Titulo", "Descripcion", "Fecha", "Ubicacion", "Acciones"];
  const data = [
    {
      Titulo: "Prueba",
      Descripcion: "descripcion prueba",
      Fecha: "05-30-23",
      Ubicacion: "Cali",
      Acciones: "ELiminar",
    },
  ];
  return (
    <div className="flex gap-4">
      <SideBar />
      <div className="w-full">
        <h1 className="text-xl font-bold text-blue-800 my-4">Eventos</h1>
        <button className="cursor-pointer bg-blue-800 hover:bg-blue-700 text-white p-2 flex items-center gap-1 rounded-lg">
          Agregar
          <AddCircleFilled />
        </button>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
