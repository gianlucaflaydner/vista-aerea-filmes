import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import siteLogo from "../../../public/images/vista-aerea-logo.png";
import { WHATSAPP_URL } from "@/lib/content";

/* A ordem segue a página. Antes o menu listava "Clientes" primeiro enquanto
   o portfólio vinha antes na tela. */
const links = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#clientes", label: "Clientes" },
  { href: "#equipamentos", label: "Equipamentos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-plate bg-asphalt">
      <div
        className="mx-auto flex h-[4.5rem] w-full max-w-shell items-center justify-between gap-6"
        style={{ paddingLeft: "var(--shell-gutter)", paddingRight: "var(--shell-gutter)" }}
      >
        <Link href="#topo" className="flex items-center gap-3" aria-label="Vista Aérea Filmes, início">
          <span className="bg-enamel p-1">
            <Image src={siteLogo} alt="" width={30} height={30} className="h-[26px] w-auto" priority />
          </span>
          <span className="lettering text-xl text-plate sm:text-2xl">
            Vista Aérea Filmes
          </span>
        </Link>

        <nav aria-label="Seções do site" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-rule text-enamel/75 transition-colors duration-300 ease-pass hover:text-plate"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-arrow px-6 py-3 text-xs font-bold uppercase tracking-rule text-enamel transition-colors duration-300 ease-pass hover:bg-plate hover:text-asphalt sm:inline-block"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="flex h-11 w-11 items-center justify-center border-[3px] border-plate text-plate md:hidden"
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M2 6h16M2 14h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Painel mobile. Antes não existia nenhum: quatro links espremidos
          disputavam a mesma linha em telas pequenas. */}
      <div
        id="menu-mobile"
        className={clsx(
          "overflow-hidden bg-asphalt transition-[max-height] duration-500 ease-pass md:hidden",
          open ? "max-h-[30rem]" : "max-h-0"
        )}
      >
        <ul
          className="flex flex-col pb-6"
          style={{ paddingLeft: "var(--shell-gutter)", paddingRight: "var(--shell-gutter)" }}
        >
          {links.map((link) => (
            <li key={link.href} className="border-t border-enamel/15">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="lettering block py-5 text-3xl text-plate"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block bg-arrow px-6 py-5 text-center text-sm font-bold uppercase tracking-rule text-enamel"
            >
              Falar no WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
