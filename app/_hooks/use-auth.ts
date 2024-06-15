"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

import { MUTATION_LOGIN, MUTATION_REGISTER } from "../constants";

interface ILogin {
  user: string;
  password: string;
}

interface IRegister extends ILogin {
  name: string;
}

export function useLogin() {
  const notifyError = () => toast("hubo un fallo!");
  const notifyUSerError = () => toast("Usuario o contraseña incorrectos!");

  // const setToken = useAuthStore((state) => state.setToken);
  return useMutation({
    mutationKey: [MUTATION_LOGIN],
    // mutationFn: (form: ILogin) =>
    //   axios.post("http://localhost:8000/api/usuario/login", {
    //     correo: form.user,
    //     contrasena: form.password,
    //   }),
    mutationFn: (request: ILogin) => {
      return signIn("user", {
        ...{ correo: request.user, contrasena: request.password },
        redirect: false,
      });
    },
    onSuccess: (data) => {
      // setToken(data.data.token);
      if (data?.status === 200) {
        return console.log("Loggueado", data);
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

export function useRegister() {
  return useMutation({
    mutationKey: [MUTATION_REGISTER],
    mutationFn: (form: IRegister) =>
      axios.post("http://localhost:8000/api/usuario", {
        correo: form.user,
        nombre: form.name,
        contrasena: form.password,
      }),
    onSuccess: (data) => {
      console.log("creado exitosamente");
    },
  });
}
