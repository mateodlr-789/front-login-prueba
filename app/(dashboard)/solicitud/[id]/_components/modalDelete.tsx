import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useDeleteAppli } from "@/app/_hooks";
import { QUERY_GET_APPLIS } from "@/app/constants";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

export default function Modal({ isOpen, onClose, id }: IModal) {
  const mutation = useDeleteAppli();
  const queryClient = useQueryClient();
  const notifySucces = () => toast("Eliminado correctamente!");
  const notifyError = () => toast("hubo un fallo!");
  
  const handleAccept = () => {
    const response = mutation.mutateAsync(id).then((data) => {
      if (data.status === 200) {
        queryClient.invalidateQueries({ queryKey: [QUERY_GET_APPLIS] });
        notifySucces();
        onClose();
      }
    });
    response.catch(() => {
      notifyError();
      onClose();
    });
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <h2 className="flex justify-center text-2xl text-black font-bold mb-4">
          Atencion!
        </h2>
        <p className="mb-4 text-black">
          Seguro que quieres eliminar este registro?
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
            onClick={handleAccept}
          >
            Aceptar
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
