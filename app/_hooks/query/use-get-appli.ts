"use client";

import { useQuery } from "@tanstack/react-query";

import { http } from "../http";
import { QUERY_GET_APPLIS } from "@/app/constants";

interface response {
    id: number;
    codigo: string;
    descripcion: string;
    resumen: string;
    id_empleado: number;
    createdAt: string;
    updatedAt: string;
}

export function useGetAppli(id: string) {
  return useQuery({
    queryKey: [QUERY_GET_APPLIS],
    queryFn: () => http("SOLICITUD").get<response[]>(`/${id}`, {}),
  });
}
