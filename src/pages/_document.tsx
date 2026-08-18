import { Html, Head, Main, NextScript } from "next/document";

/* Contrato de direção. Sobrevive ao build de produção e pode ser auditado
   com grep pela seed key. Não remover. */
const DIRECTION_CONTRACT = `<!--
impeccable-direction seed:b3915f53

THESIS: A placa é o que você vê do chão; o vídeo é o que ele vê do ar, e a
página faz essa travessia. Recusa o hero de drone em loop escuro com acento
laranja que toda produtora de vídeo aéreo entrega.

OWN-WORLD: Sinalização de loteamento e placa de corretor da RS-115. Chapa de
aço esmaltada em amarelo-placa #F2B705 sangrando de borda a borda, asfalto
#14140F, seta #D6300F reservada a direção e ação, verde-rodovia #0E5C3A. Anton
em caixa alta para o nome pintado, Archivo para a plaqueta de informação.
Chapas retas, sem canto arredondado e sem sombra suave; a cor manda em regiões
inteiras, nunca em respingos sobre neutro.

STORY: Quem chega vê o trabalho primeiro, em sete pôsteres grandes, acredita
por causa dos doze clientes reais, e sai puxando conversa no WhatsApp.

FIRST VIEWPORT: Campo amarelo-placa de borda a borda, manchete condensada
pesada em asfalto ocupando a maior parte da tela, painel vermelho com seta
para FALAR NO WHATSAPP, e a plaqueta de dados parafusada na borda inferior.

FORM: Placa de beira de estrada, candidata 4 da lista fundamentada, atribuída
pelo sorteio e escolhida pelo usuário após um primeiro build descartado.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md
-->`;

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
