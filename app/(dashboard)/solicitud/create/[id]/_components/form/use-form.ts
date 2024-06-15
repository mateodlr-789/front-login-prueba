"use client";
import { useForm } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { route } from "@/app/constants";
import { containsSQLInjection, messageSqlInjection } from "@/app/_helpers";
import { useCreateAppli } from "@/app/_hooks";

interface FormType {
  codigo: string;
  descripcion: string;
  resumen: string;
}

export function useFormHook(id: number) {
  const mutation = useCreateAppli();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const notify = () => toast("Creado correctamente!");
  const notifyError = () => toast("hubo un fallo!");

  const schema = object({
    codigo: string()
      .trim()
      .required()
      .test(
        "sql-injection",
        messageSqlInjection,
        (value) => !containsSQLInjection(value || "")
      ),
    descripcion: string()
      .trim()
      .required()
      .test(
        "sql-injection",
        messageSqlInjection,
        (value) => !containsSQLInjection(value || "")
      ),
    resumen: string()
      .trim()
      .required()
      .test(
        "sql-injection",
        messageSqlInjection,
        (value) => !containsSQLInjection(value || "")
      ),
  }).required();

  const methods = useForm<FormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      codigo: "",
      descripcion: "",
      resumen: "",
    },
  });

  const onSubmit = methods.handleSubmit(
    (dataForm) => {
      setLoading(true);
      try {
        const response = mutation
          .mutateAsync({
            codigo: dataForm.codigo,
            descripcion: dataForm.descripcion,
            resumen: dataForm.resumen,
            id_empleado: id,
          })
          .then((data) => {
            if (data.status === 200) {
              notify();
              router.push(route.principal);
            }
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          });
        response.catch(() => {
          notifyError();
          setLoading(false);
        });
      } catch (error: any) {
        setLoading(false);
        notifyError();
        console.error(error);
      }
    },
    (err) => {
      console.error("error form", err);
      setLoading(false);
    }
  );

  return {
    control: methods.control,
    onSubmit,
    isLoading: loading,
  };
}
