import { redirect } from "next/navigation";
import { route } from "./constants";

export default function Home() {
  redirect(route.login)
}
