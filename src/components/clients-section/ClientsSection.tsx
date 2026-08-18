import Image from "next/image";
import clsx from "clsx";
import { Lead, Lettering, Panel, Shell } from "@/components/ui/Plate";
import Reveal from "@/components/motion/Reveal";
import Wipe from "@/components/motion/Wipe";
import { clientLogos, type ClientLogo } from "@/lib/logos.generated";

/* Os clientes atendidos são a única prova formal que o projeto tem, então cada
   logotipo ganha sua chapa branca, que é como logotipo de cliente aparece numa
   placa de verdade, e as faixas correm de borda a borda.

   REGRA DA PISTA: uma cópia da lista precisa ser MAIS LARGA que a tela, senão
   em parte do ciclo o fim da pista entra no viewport e abre um vazio na ponta.
   Por isso cada faixa carrega os doze logotipos (não seis), repetidos três
   vezes, e a animação desloca exatamente um terço da pista, que é uma cópia
   inteira. Doze chapas dão cerca de 2640px por cópia, e três cópias cobrem até
   telas 4K sem buraco.

   A segunda faixa começa pela metade da lista e corre no sentido oposto, então
   as duas nunca mostram o mesmo logotipo lado a lado. */
const REPETICOES = 3;

const faixaSuperior = clientLogos;
const faixaInferior = [...clientLogos.slice(6), ...clientLogos.slice(0, 6)];

function Faixa({ logos, back }: { logos: ClientLogo[]; back?: boolean }) {
  return (
    <div className="group relative overflow-hidden">
      <ul
        className={clsx(
          "flex w-max items-stretch gap-5 group-hover:[animation-play-state:paused] sm:gap-7",
          back ? "animate-drift-back" : "animate-drift"
        )}
      >
        {Array.from({ length: REPETICOES }).map((_, copia) => (
          // Só a primeira cópia é lida: as outras existem para fechar o laço.
          <li key={copia} aria-hidden={copia > 0} className="contents">
            {logos.map((logo) => (
              <span
                key={`${copia}-${logo.id}`}
                className="flex h-24 w-40 shrink-0 items-center justify-center bg-enamel px-5 sm:h-28 sm:w-48"
                title={logo.nome}
              >
                <Image
                  src={logo.src}
                  alt={copia === 0 ? logo.alt : ""}
                  height={80}
                  width={140}
                  className="h-auto max-h-14 w-auto max-w-full object-contain sm:max-h-16"
                />
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <Panel field="route" id="clientes" className="py-24 sm:py-28">
      <Shell>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Wipe>
              <div className="mb-8 h-[3px] w-full bg-plate" role="presentation" />
              <Lettering className="text-enamel">
                Quem já confiou
                <br />o próprio nome
              </Lettering>
            </Wipe>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:pt-4">
            <Lead className="text-enamel/80">
              Alguns dos que já confiaram o trabalho a mim. Vai de emissora e
              clube de serviço a imobiliária e indústria.
            </Lead>
          </div>
        </div>
      </Shell>

      {/* Sangra até a borda: as faixas não respeitam a goteira do texto. */}
      <Reveal className="mt-14 space-y-5 sm:mt-16 sm:space-y-7" from={20}>
        <Faixa logos={faixaSuperior} />
        <Faixa logos={faixaInferior} back />
      </Reveal>

      <Shell>
        {/* As chapas mostram uma parte: a lista não termina aqui. */}
        <p className="mt-8 text-xs font-bold uppercase tracking-plate text-plate">
          entre outros
        </p>
      </Shell>
    </Panel>
  );
}
