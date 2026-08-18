import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { SignLink } from "@/components/ui/SignButton";
import { Lettering, Panel, Shell, Lead } from "@/components/ui/Plate";
import Reveal from "@/components/motion/Reveal";
import Wipe from "@/components/motion/Wipe";
import { INSTAGRAM_URL, type Work } from "@/lib/content";

/* Os trabalhos lideram a página: cada um é uma chapa com o pôster ocupando o
   painel inteiro e o nome pintado na tarja amarela. Nada de imagem escondida
   atrás de hover. No celular hover não existe, e é de lá que vem a maior
   parte do público.

   O iframe só monta no clique: antes eram sete embeds do YouTube carregando
   ao mesmo tempo. */
export default function PortfolioSection({ works }: { works: Work[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Panel field="asphalt" id="portfolio" className="py-24 sm:py-32">
      <Shell>
        <Wipe>
          <div className="mb-9 h-[3px] w-full bg-plate" role="presentation" />
          <Lettering className="text-enamel">
            Uma amostra
            <br />
            do portfólio
          </Lettering>
        </Wipe>
        <Lead className="mt-8 text-enamel/75">
          Sete vídeos entre muitos, em quatro frentes: eventos, empresarial,
          institucional e imobiliário. Toque em um e ele abre aqui mesmo.
        </Lead>

        <ul className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 md:gap-8">
          {works.map((work, index) => {
            const isOpen = openId === work.id;
            const featured = index === 0;

            return (
              <li key={work.id} className={clsx(featured && "md:col-span-2")}>
                <Reveal delay={Math.min(index * 0.06, 0.3)}>
                  <article className="group relative">
                    <div className="relative aspect-video w-full overflow-hidden bg-asphalt">
                      {isOpen ? (
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                          title={work.titleAttr}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setOpenId(work.id)}
                          className="absolute inset-0 h-full w-full text-left"
                        >
                          <span className="sr-only">
                            Assistir: {work.categoria}
                          </span>
                          <Image
                            src={work.poster}
                            alt=""
                            fill
                            quality={85}
                            sizes={featured ? "(min-width: 960px) 92vw, 100vw" : "(min-width: 960px) 46vw, 100vw"}
                            className="object-cover transition-transform duration-500 ease-pass group-hover:scale-[1.03]"
                          />
                          {/* Alvo de toque grande e visível: a ação não pode
                              depender de hover. */}
                          <span
                            aria-hidden
                            className="absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center bg-arrow text-enamel transition-colors duration-300 ease-pass group-hover:bg-plate group-hover:text-asphalt sm:h-20 sm:w-20"
                          >
                            <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor">
                              <path d="M5 3l16 9-16 9z" />
                            </svg>
                          </span>
                        </button>
                      )}
                    </div>

                    {/* A tarja pintada com o nome do trabalho. */}
                    <div className="flex items-center justify-between gap-4 bg-plate px-5 py-3 sm:px-6 sm:py-4">
                      <Lettering
                        as="h3"
                        size="var(--step-panel)"
                        className="text-asphalt"
                      >
                        {work.categoria}
                      </Lettering>
                      {isOpen && (
                        <button
                          type="button"
                          onClick={() => setOpenId(null)}
                          className="shrink-0 text-[0.6875rem] font-bold uppercase tracking-rule text-asphalt/70 underline transition-colors hover:text-arrow"
                        >
                          Fechar
                        </button>
                      )}
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-14">
          <SignLink href={INSTAGRAM_URL} variant="plate" external>
            Ver mais trabalhos no Instagram
          </SignLink>
        </Reveal>
      </Shell>
    </Panel>
  );
}
