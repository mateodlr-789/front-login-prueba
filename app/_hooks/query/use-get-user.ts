"use client";

import { useQuery } from "@tanstack/react-query";

import { http } from "../http";
import { QUERY_GET_USERS } from "@/app/constants";

interface response {
  usuario: {
    id: number;
    fecha_ingreso: string;
    nombre: string;
    salario: number;
    correo: string;
    contrasena: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export function useGetUsers() {
  return useQuery({
    queryKey: [QUERY_GET_USERS],
    queryFn: () => http("USUARIO").get<response>("", {}),
  });
}
