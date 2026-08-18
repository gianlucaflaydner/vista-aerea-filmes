import { Shell } from "@/components/ui/Plate";
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL, YOUTUBE_URL } from "@/lib/content";

const social = [
  { href: INSTAGRAM_URL, label: "Instagram", handle: "@vistaaereafilmes" },
  { href: YOUTUBE_URL, label: "YouTube", handle: "@vistaaereafilmes" },
  { href: FACEBOOK_URL, label: "Facebook", handle: "vistaaereadrone" },
];

/* As redes aparecem como palavra, não como ícone: os PNGs sociais do projeto
   vêm em tratamentos diferentes entre si, uns claros e outros escuros, e
   nenhum deles pertence a este sistema. Os arquivos seguem no repositório,
   intocados. */
export default function Footer() {
  return (
    <footer className="border-t-[3px] border-plate bg-asphalt text-enamel">
      <Shell className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="lettering text-3xl text-plate sm:text-4xl">
              Vista Aérea Filmes
            </p>
            <p className="mt-5 max-w-measure leading-[1.6] text-enamel/70">
              Vídeo aéreo e em solo no Vale do Paranhana, Rio Grande do Sul.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lettering mt-7 inline-block text-2xl text-enamel transition-colors duration-300 ease-pass hover:text-plate sm:text-3xl"
            >
              +55 51 98406-5735
            </a>
          </div>

          <nav aria-label="Redes sociais" className="md:col-span-6 md:col-start-7">
            <ul className="border-t border-enamel/20">
              {social.map((item) => (
                <li key={item.label} className="border-b border-enamel/20">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-4"
                  >
                    <span className="lettering text-2xl text-enamel transition-colors duration-300 ease-pass group-hover:text-plate">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-rule text-enamel/50">
                      {item.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-enamel/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold uppercase tracking-rule text-enamel/50">
            © {new Date().getFullYear()} Vista Aérea Filmes · Leandro Laydner
          </p>
          <a
            href="https://www.linkedin.com/in/gianluca-laydner/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs italic text-enamel/50 transition-colors duration-300 ease-pass hover:text-plate"
          >
            Proudly made by Gianluca Laydner
          </a>
        </div>
      </Shell>
    </footer>
  );
}
