import { AddCircleFilled, SearchRegular } from "@fluentui/react-icons";
import { SideBar } from "../../components/SideBar";
import { Table } from "../../components/Table";
import { Modal } from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { EventForm } from "../../components/admin/EventForm";
import { Button } from "../../components/Button";

export function Events() {
  const columns = ["Titulo", "Descripcion", "Fecha", "Ubicacion"];
  const data = [
    {
      Titulo: "Prueba",
      Descripcion: "descripcion prueba",
      Fecha: "05-30-23",
      Ubicacion: "Cali",
    },
    {
      Titulo: "Conferencia de Tecnología",
      Descripcion: "Evento anual de tecnología",
      Fecha: "06-15-23",
      Ubicacion: "Bogotá",
    },
  ];

  const addEventModal = useModal();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <div className="flex-1 p-6 bg-white shadow-md rounded-lg m-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">Eventos</h1>
          <Button
            size="medium"
            icon={<AddCircleFilled className="text-xl" />}
            onClick={addEventModal.openModal}
          >
            Crear Evento
          </Button>
        </div>

        {/* Contenedor de búsqueda */}
        <div className="flex flex-col">
          <div className="flex justify-start mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar evento..."
                className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <SearchRegular className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
            </div>
          </div>

          {/* Tabla */}
          <Table columns={columns} data={data} />
        </div>
      </div>

      {/*MODALS*/}
      <Modal isOpen={addEventModal.isOpen} onClose={addEventModal.closeModal}>
        <EventForm />
      </Modal>
    </div>
  );
}
