import { Metadata } from "next";
import BackHeader from "./_components/back-header";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Solicitudes",
};

export default function Layout({ children }: Props) {
  return (
    <BackHeader>
      <div className="px-10 w-full h-full items-center flex justify-center bg-white">
        {children}
      </div>
    </BackHeader>
  );
}
