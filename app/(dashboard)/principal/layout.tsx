import { Metadata } from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Principal",
};

export default function Layout({ children }: Props) {
    return <div className="px-10 w-full h-screen items-center flex justify-center bg-white">{children}</div>
}