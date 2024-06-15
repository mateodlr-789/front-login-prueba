import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

import { route } from "@/app/constants";
import { Icon } from "@/components/atoms/icon";

interface User {
  id: number;
  fecha_ingreso: string;
  nombre: string;
  salario: number;
  correo: string;
  contrasena: string;
  createdAt: string;
  updatedAt: string;
}

export default function useTable() {
  const router = useRouter()
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "nombre",
      cell: (info) => (
        <p className="text-black w-full flex justify-center">
          {info.getValue() as string}
        </p>
      ),
      header: "Nombre",
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "correo",
      cell: (info) => (
        <p className="text-black w-full flex justify-center">
          {info.getValue() as string}
        </p>
      ),
      header: "Correo",
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "fecha_ingreso",
      cell: (info) => (
        <p className="text-black w-full flex justify-center">
          {info.getValue() as string}
        </p>
      ),
      header: "Fecha de ingreso",
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "id",
      cell: (info) => (
        <div className="flex justify-center items-center ">
          <button className="border-2 border-black p-2" onClick={() => router.push(`${route.solicitud}/${info.getValue() as string}`)}>
            <Icon className="text-black" type="chart"  />
          </button>
        </div>
      ),
      header: "solicitud",
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    }
  ];

  return {
    columns
  };
}
