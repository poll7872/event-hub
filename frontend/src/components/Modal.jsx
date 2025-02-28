import { DismissCircleFilled } from "@fluentui/react-icons";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo semitransparente */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>

      {/* Contenido del modal con animación */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative mx-4 z-10 animate-[var(--animate-fade-in-down)]">
        <button className="absolute -top-0 right-1" onClick={onClose}>
          <DismissCircleFilled className="text-red-500 text-xl hover:text-red-400 cursor-pointer" />
        </button>
        {children}
      </div>
    </div>
  );
}
