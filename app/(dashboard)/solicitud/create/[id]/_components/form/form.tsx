"use client";
import Link from "next/link";
import { Controller } from "react-hook-form";
import cls from "classnames";

import { useFormHook } from "./use-form";

export default function Form({ id }: { id: number }) {
  const { control, onSubmit, isLoading } = useFormHook(id);

  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-2 text-black">
          Codigo
        </label>
        <Controller
          name="codigo"
          control={control}
          render={({
            field: { value, onChange, ...all },
            fieldState: { error },
          }) => (
            <>
              <input
                onChange={onChange}
                value={value}
                type="email"
                className={cls(
                  "py-3 px-4 block w-full border-2 rounded-lg text-sm  focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900  dark:text-gray-400 dark:focus:ring-gray-600",
                  error?.message ? "border-red-600" : ""
                )}
                placeholder="Ingrese su codigo"
              />
              {error?.message && (
                <p className="text-sm text-red-600">
                  falta campo o esta incorrecto
                </p>
              )}
            </>
          )}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-black">
          Descripcion
        </label>
        <Controller
          name="descripcion"
          control={control}
          render={({
            field: { value, onChange, ...all },
            fieldState: { error },
          }) => (
            <>
              <input
                onChange={onChange}
                value={value}
                type="email"
                className={cls(
                  "py-3 px-4 block w-full border-2 rounded-lg text-sm  focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900  dark:text-gray-400 dark:focus:ring-gray-600",
                  error?.message ? "border-red-600" : ""
                )}
                placeholder="Ingrese su descripcion"
              />
              {error?.message && (
                <p className="text-sm text-red-600">
                  falta campo o esta incorrecto
                </p>
              )}
            </>
          )}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-black">
          Resumen
        </label>
        <Controller
          name="resumen"
          control={control}
          render={({
            field: { value, onChange, ...all },
            fieldState: { error },
          }) => (
            <>
              <input
                onChange={onChange}
                value={value}
                type="email"
                className={cls(
                  "py-3 px-4 block w-full border-2 rounded-lg text-sm  focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900  dark:text-gray-400 dark:focus:ring-gray-600",
                  error?.message ? "border-red-600" : ""
                )}
                placeholder="Ingrese su resumen"
              />
              {error?.message && (
                <p className="text-sm text-red-600">
                  falta campo o esta incorrecto
                </p>
              )}
            </>
          )}
        />
      </div>

      <button
        disabled={isLoading}
        onClick={() => {
          onSubmit();
        }}
        className="w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-700 text-white hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Crear
      </button>

      <p className="text-black">{isLoading}</p>
    </>
  );
}
