"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { http } from "../http";
import { MUTATION_CREATE_APPLIS } from "@/app/constants";

interface Response {
  codigo: string;
  descripcion: string;
  resumen: string;
  id_empleado: number;
}

export function useCreateAppli() {
  const notifyError = () => toast("hubo un fallo!");
  const notifyUSerError = () => toast("Porfavor vuelve a iniciar sesion!");
  
  return useMutation({
    mutationKey: [MUTATION_CREATE_APPLIS],
    mutationFn: (response: Response) =>
      http("SOLICITUD").post<Response[]>(`/`, response),
    onSuccess: (data) => {
      if (data?.status === 200) {
        return console.log("creado", data);
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
