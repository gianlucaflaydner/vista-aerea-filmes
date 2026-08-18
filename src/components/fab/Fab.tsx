import { useEffect, useState } from "react";
import clsx from "clsx";
import { WHATSAPP_URL } from "@/lib/content";

/* A ação primária acompanha a travessia inteira.

   No celular ela é um trilho de largura inteira ancorado no rodapé, não um
   botão flutuante: flutuante de 56px estacionava em cima de tipo vivo. Comia
   o "D" de PHANTOM 3 ADVANCED e o fim do parágrafo do Leandro. O trilho tem
   banda própria, e o `body` ganha recuo equivalente para nada passar por baixo.
   Em telas maiores sobra margem e a chapa quadrada volta.

   O href antigo trazia uma quebra de linha literal com indentação dentro da
   URL e o número sem código de país nem DDD, então o link falhava na prática. */
export default function Fab() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const contato = document.getElementById("contato");
    let passouOHero = window.scrollY > window.innerHeight * 0.6;
    let contatoAVista = false;

    const aplicar = () => setShown(passouOHero && !contatoAVista);

    const onScroll = () => {
      passouOHero = window.scrollY > window.innerHeight * 0.6;
      aplicar();
    };

    /* Some quando a seção de contato está na tela: lá o botão já existe em
       tamanho real e o trilho só cobriria o formulário. */
    const io = contato
      ? new IntersectionObserver(
          ([entry]) => {
            contatoAVista = entry.isIntersecting;
            aplicar();
          },
          { threshold: 0.1 }
        )
      : null;
    if (contato && io) io.observe(contato);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const hidden = !shown;

  return (
    <>
      {/* Trilho no celular */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden={hidden}
        tabIndex={hidden ? -1 : undefined}
        className={clsx(
          "fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-3 border-t-[3px] border-plate bg-arrow py-4 text-sm font-bold uppercase tracking-rule text-enamel transition-transform duration-500 ease-pass sm:hidden",
          hidden ? "pointer-events-none translate-y-full" : "translate-y-0"
        )}
      >
        Falar no WhatsApp
        <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
        </svg>
      </a>

      {/* Chapa quadrada onde há margem para ela */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden={hidden}
        tabIndex={hidden ? -1 : undefined}
        className={clsx(
          "fixed bottom-8 right-8 z-40 hidden h-16 w-16 items-center justify-center bg-arrow text-enamel transition-all duration-500 ease-pass hover:bg-plate hover:text-asphalt sm:flex",
          hidden ? "pointer-events-none translate-y-5 opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        <span className="sr-only">Falar no WhatsApp</span>
        <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
        </svg>
      </a>
    </>
  );
}
