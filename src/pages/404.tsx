import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Custom404() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center  ${inter.className}`}
    >
      <h1 className="text-slate-300 md:text-6xl text-2xl font-bold">
        Ops... Essa rota não existe.
      </h1>
      <Link
        className="md:text-2xl text-xl text-slate-300 underline mt-5"
        href="/"
      >
        Voltar
      </Link>
    </main>
  );
}
