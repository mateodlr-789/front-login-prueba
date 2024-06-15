"use client";

import { useGetAppli } from "@/app/_hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { route } from "@/app/constants";
import useTable from "./_components/use-table";
import { Table } from "@/components/molecules/table";
import Modal from "./_components/modalDelete";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id ?? "";
  const [modalState, setModalState] = useState({
    isOpen: false,
    appliId: "",
  });
  const handleAppliId = (idss: string) => {
    setModalState(prevState => ({
      ...prevState,
      appliId: idss
    }));
  };
  const toggleModal = () => {
    setModalState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  };

  const { data, isLoading } = useGetAppli(id);
  const { columns } = useTable({ handleModal: toggleModal, handleAppliId });
  const router = useRouter();
  if (isLoading) {
    return <p className="text-black">cargando...</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-end mb-4">
        <button
          className="border-2 text-black border-black p-2"
          onClick={() => router.push(`${route.nuevaSolicitud}/${id}`)}
        >
          Nueva solicitud
        </button>
      </div>
      {data && data.data ? (
        <Table
          data={data.data ? data?.data?.map((item) => item) : []}
          columns={columns}
        />
      ) : (
        <p className="text-black">No hay informacion disponible. </p>
      )}
      <Modal isOpen={modalState.isOpen} onClose={toggleModal} id={modalState.appliId} />
    </div>
  );
}
