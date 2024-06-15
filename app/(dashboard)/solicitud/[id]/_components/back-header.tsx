"use client";
import { useRouter } from "next/navigation";

import { route } from "@/app/constants";
import { Icon } from "@/components/atoms/icon";

interface Props {
  children: React.ReactNode;
}
export default function BackHeader({ children }: Props) {
      const router = useRouter()
  return (
    <div className="bg-white h-screen overflow-hidden">
      <header className="right-0 w-8">
        <button className=" text-black border-2 border-black p-2" onClick={() => router.push(route.principal)}>
          <Icon className="text-black" type="row-left" />
        </button>
      </header>
      {children}
    </div>
  );
}
