import { Lettering, Panel, Shell } from "@/components/ui/Plate";
import Wipe from "@/components/motion/Wipe";

/* Mesmos fatos do texto original: corredor amador, pai de família, produtora
   caseira, o drone como porta de entrada, a expansão para o solo. Só a
   composição e o ritmo mudaram.

   A identificação vem numa chapa preta inteira, do jeito que a plaqueta do
   fabricante é parafusada na placa: chapa cheia ocupando a coluna, não filete
   colorido na borda nem tipo preto flutuando em campo claro. É o que impede
   esta seção, a única pausa clara entre dois campos saturados, de ler como
   vazio lavado. */
const paragrafos = [
  "A Vista Aérea Filmes começou em casa, com um drone e a vontade de fazer o que eu via em comercial de TV, em filme e em documentário.",
  "O drone foi a porta de entrada. O estudo tomou corpo, o trabalho cresceu e passou a acontecer também no chão. Hoje a câmera sobe e desce conforme a história pede.",
  "Amo o que faço, e isso basta para continuar estudando, aprimorando e entregando.",
];

export default function AboutSection() {
  return (
    <Panel field="enamel" id="sobre" className="py-20 sm:py-24">
      <Shell>
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* A chapa aperta o que carrega. Esticá-la até a altura da coluna de
              texto abria um vazio no meio, com o nome no topo e a qualificação
              lá embaixo: plaqueta de identificação é densa, não espaçosa. */}
          <div className="md:col-span-5">
            <Wipe className="bg-asphalt p-8 sm:p-9">
              <Lettering className="text-plate">
                Leandro
                <br />
                Laydner
              </Lettering>
              <p className="mt-6 border-t-[3px] border-plate/25 pt-6 text-base font-bold uppercase leading-[1.5] tracking-wide text-enamel sm:text-lg">
                Corredor amador,
                <br />
                pai de família
                <br />e produtor
              </p>
            </Wipe>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="border-t-[3px] border-asphalt">
              {paragrafos.map((texto, i) => (
                <p
                  key={i}
                  className="border-b border-asphalt/20 py-6 leading-[1.55] text-asphalt/85 last:border-b-0"
                  style={{ fontSize: "var(--step-lead)" }}
                >
                  {texto}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Shell>
    </Panel>
  );
}
