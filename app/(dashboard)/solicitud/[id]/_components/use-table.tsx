import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

import { Icon } from "@/components/atoms/icon";
import { route } from "@/app/constants";

interface Appli {
  id: number;
  codigo: string;
  descripcion: string;
  resumen: string;
  id_empleado: number;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  handleModal: () => void;
  handleAppliId: (id: string) => void;
}

export default function useTable({ handleModal, handleAppliId }: Props) {
  const router = useRouter();

  const columns: ColumnDef<Appli>[] = [
    {
      accessorKey: "codigo",
      cell: (info) => (
        <p className="text-black w-full flex justify-center">
          {info.getValue() as string}
        </p>
      ),
      header: "Codigo",
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "descripcion",
      cell: (info) => (
        <p className="text-black w-full flex justify-center">
          {info.getValue() as string}
        </p>
      ),
      header: "Descripcion",
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "resumen",
      cell: (info) => (
        <p className="text-black w-full flex justify-center">
          {info.getValue() as string}
        </p>
      ),
      header: "Resumen",
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "id",
      cell: (info) => (
        <div className="flex justify-center items-center ">
          <button
            className="border-2 border-black p-2"
            onClick={() => {
              handleModal()
              handleAppliId(info.getValue() as string);
            }}
          >
            <Icon className="text-black" type="chart" />
          </button>
        </div>
      ),
      header: "Eliminar",
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
  ];

  return {
    columns,
  };
}
