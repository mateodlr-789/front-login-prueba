"use client";

import { useGetUsers } from "@/app/_hooks";
import useTable from "./_components/use-table";
import { Table } from "@/components/molecules/table";

export default function Page() {
  const { data, isLoading } = useGetUsers();
  const { columns } = useTable();

  if (isLoading) {
    return <p className="text-black">cargando...</p>;
  }

  return (
    <div>
      {data && data.data.usuario ? (
        <Table data={data?.data?.usuario?.map((item) => item)} columns={columns} />
      ) : (
        <p className="text-black">No hay informacion disponible.</p>
      )}
    </div>
  );
}
