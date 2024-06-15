import { Metadata } from "next";
import BackHeader from "./_components/back-header";

interface Props {
  children: React.ReactNode;
  params: { id: string }
}

export const metadata: Metadata = {
  title: "Nueva",
};

export default function Layout({ children, params }: Props) {
  const id = params.id ?? "";

  return (
    <BackHeader id={id}>
      <div className="px-10 w-full h-screen items-center flex justify-center bg-white">
        {children}
      </div>
    </BackHeader>
  );
}
