"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { http } from "../http";
import { MUTATION_DELETE_APPLIS } from "@/app/constants";

interface Response {
  codigo: string;
  descripcion: string;
  resumen: string;
  id_empleado: number;
}

export function useDeleteAppli() {
  const notifyError = () => toast("hubo un fallo!");
  const notifyUSerError = () => toast("la solicitud ya se elimino o inicia sesion nuevamente!");
  
  return useMutation({
    mutationKey: [MUTATION_DELETE_APPLIS],
    mutationFn: (id: string) =>
      http("SOLICITUD").delete<Response>(`/${id}`),
    onSuccess: (data) => {
      if (data?.status === 200) {
        return console.log("eliminado", data);
      }
      if (data?.status === 401) {
        console.error("data 401", data);
        notifyUSerError()
        return 
      }
      notifyError();

    },
  });
}
