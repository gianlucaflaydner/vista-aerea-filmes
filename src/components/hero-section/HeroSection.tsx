import { useMemo } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { SignLink } from "@/components/ui/SignButton";
import { Panel, Shell } from "@/components/ui/Plate";
import { WHATSAPP_URL, type Work } from "@/lib/content";
import { EASE_PASS } from "@/lib/motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/* A moldura informativa que toda placa carrega na borda: dado real, tipo
   funcional denso, sem margem educada. */
const border = [
  "Taquara · Igrejinha · Parobé · Três Coroas · Rolante",
  "Aéreo com drone + captação em solo",
  "+55 51 98406-5735",
];

/* O trabalho em destaque no primeiro viewport é o mesmo que abre o portfólio. */
export default function HeroSection({ featured }: { featured: Work }) {
  const reduced = useReducedMotionSafe();

  /* Movimento reduzido neutraliza os valores e mantém a estrutura de nós
     idêntica. Trocar a estrutura aqui quebraria a hidratação e deixaria o
     hero inteiro preso em opacity 0. */
  const rise = useMemo<Variants>(
    () => ({
      hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
      show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: reduced
          ? { duration: 0 }
          : { duration: 1, delay: 0.1 + i * 0.09, ease: EASE_PASS },
      }),
    }),
    [reduced]
  );

  const step = (i: number) =>
    ({ initial: "hidden", animate: "show", variants: rise, custom: i }) as const;

  return (
    <Panel field="plate" id="topo" className="flex min-h-[100svh] flex-col pt-[4.5rem]">
      <Shell className="flex flex-1 flex-col justify-center py-8 sm:py-14">
        <div className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
        <motion.h1
          {...step(1)}
          className="lettering text-asphalt"
          style={{ fontSize: "var(--step-hero)" }}
        >
          Do alto,
          <br />
          tudo conta
          <br />
          outra história
        </motion.h1>

        <motion.p
          {...step(2)}
          className="mt-5 max-w-measure font-medium leading-[1.45] text-asphalt/85 sm:mt-7"
          style={{ fontSize: "var(--step-lead)" }}
        >
          Sou Leandro Laydner. Filmo negócios, terrenos e eventos da região, do
          ar e do chão, para que quem assiste queira estar ali.
        </motion.p>

        <motion.div
          {...step(3)}
          className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4"
        >
          <SignLink href={WHATSAPP_URL} external>
            Falar no WhatsApp
          </SignLink>
          <SignLink href="#portfolio" variant="outline" arrow={false}>
            Ver os trabalhos
          </SignLink>
        </motion.div>
          </div>

          {/* O painel de imagem que toda placa de loteamento carrega ao lado
              da letra. Aqui é o trabalho em destaque, para o primeiro
              viewport já dizer que isto é vídeo. */}
          <motion.div {...step(4)} className="lg:col-span-5">
            <a href="#portfolio" className="group block">
              <div className="relative aspect-video w-full overflow-hidden border-[6px] border-asphalt">
                <Image
                  src={featured.poster}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 34vw, (min-width: 576px) 90vw, 100vw"
                  quality={85}
                  priority
                  className="object-cover transition-transform duration-500 ease-pass group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden
                  className="absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center bg-arrow text-enamel transition-colors duration-300 ease-pass group-hover:bg-plate group-hover:text-asphalt"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M5 3l16 9-16 9z" />
                  </svg>
                </span>
              </div>
              <p className="bg-asphalt px-4 py-3 text-[0.6875rem] font-bold uppercase tracking-rule text-plate">
                Em destaque · {featured.categoria}
              </p>
            </a>
          </motion.div>
        </div>
      </Shell>

      {/* Rodapé da chapa: a plaqueta de dados parafusada na borda inferior. */}
      <motion.div {...step(5)} className="border-t-[3px] border-asphalt">
        <Shell>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 py-3 sm:flex-nowrap sm:gap-0 sm:py-0">
            {border.map((item, i) => (
              <li
                key={item}
                className={`text-[0.6875rem] font-bold uppercase tracking-rule text-asphalt/75 sm:flex-1 sm:py-5 ${
                  i > 0 ? "sm:border-l-[3px] sm:border-asphalt/20 sm:pl-6" : ""
                }`}
              >
                <span aria-hidden className="mr-3 text-asphalt/35 sm:hidden">
                  /
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Shell>
      </motion.div>
    </Panel>
  );
}
