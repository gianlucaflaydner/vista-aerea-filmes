import Image from "next/image";
import cameraPng from "../../../public/images/camera-image.png";
import dronePng from "../../../public/images/drone-image.png";
import { Lettering, Panel, Shell } from "@/components/ui/Plate";
import Reveal from "@/components/motion/Reveal";
import Wipe from "@/components/motion/Wipe";
import { equipment } from "@/lib/content";

/* Ficha técnica parafusada na chapa: rótulo à esquerda, valores em letra
   pintada à direita. A seção não tinha `id` nenhum antes e por isso era
   inalcançável pelo menu.

   Os recortes de drone e câmera moram na coluna da esquerda, embaixo do
   título, e não numa faixa de largura inteira: assim a altura da seção é a da
   coluna mais alta em vez da soma das duas, e o vazio que sobrava ao lado do
   título some. A barra de asfalto embaixo deles é a linha de chão, porque os
   PNGs trazem sombra solta e este mundo recusa sombra suave. */
export default function SpecificationsSection() {
  return (
    <Panel field="plate" id="equipamentos" className="py-20 sm:py-24">
      <Shell>
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Wipe>
              <div className="mb-8 h-[3px] w-full bg-asphalt" role="presentation" />
              <Lettering className="text-asphalt">
                O que sobe
                <br />e o que fica
                <br />
                no chão
              </Lettering>
            </Wipe>

            {/* Painel de foto na chapa branca, com a mesma moldura de asfalto
                do trabalho em destaque no hero. É o componente que o sistema
                já tem para imagem, e resolve a sombra solta dos PNGs melhor do
                que uma barra: o fundo branco deles multiplica no esmalte e
                some, então os objetos pousam na chapa em vez de flutuar. */}
            <Reveal delay={0.12} className="mt-8">
              <div className="border-[6px] border-asphalt bg-enamel px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex items-center justify-center gap-5 sm:gap-7">
                  <Image
                    src={dronePng}
                    alt="Drone usado nas gravações aéreas"
                    width={460}
                    height={360}
                    className="h-auto w-[55%] max-w-[19rem] object-contain mix-blend-multiply"
                  />
                  <Image
                    src={cameraPng}
                    alt="Câmera usada nas gravações em solo"
                    width={360}
                    height={360}
                    className="h-auto w-[40%] max-w-[14rem] object-contain mix-blend-multiply"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <dl className="border-t-[3px] border-asphalt">
              {equipment.map((group) => (
                <div
                  key={group.rotulo}
                  className="grid grid-cols-3 items-start gap-5 border-b-[3px] border-asphalt py-7"
                >
                  <dt className="text-[0.6875rem] font-bold uppercase tracking-rule text-asphalt/70">
                    {group.rotulo}
                  </dt>
                  <dd className="col-span-2 space-y-1">
                    {group.itens.map((item) => (
                      <p
                        key={item}
                        className="lettering text-asphalt"
                        style={{ fontSize: "var(--step-panel)" }}
                      >
                        {item}
                      </p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Shell>
    </Panel>
  );
}
