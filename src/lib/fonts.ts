import { Anton, Archivo } from "next/font/google";

/* Duas famílias, e a divisão é a da própria placa: o nome pintado enorme e a
   plaqueta de informação embaixo dele.

   Anton é grotesca condensada pesadíssima, a letra de sinalização de estrada
   e de placa de loteamento, que existe para ser lida a sessenta por hora.
   Archivo é a grotesca de trabalho para tudo que é informação: foi desenhada
   justamente para chamadas e alta performance em corpo pequeno. */
export const display = Anton({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

export const sans = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});
