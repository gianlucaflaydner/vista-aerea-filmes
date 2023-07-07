import Section from "@/components/section-with-image/Section";
import { Inter } from "next/font/google";
import siteLogo from "../../public/images/vista-aerea-logo.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Section
          reverse={false}
          sectionTitle="Vista Aérea Filmes - Taquara, RS"
          sectionText="Não somente um vídeo, crio histórias em imagem para ajudar você a vender seu negócio, seu terreno, seu empreendimento através da perspectiva aérea do drone ou em solo."
          imageSource={siteLogo}
          imageAltText="Teste"
          backgroundChange
        />
        <Section
          reverse
          sectionTitle="Vista Aérea Filmes - Taquara, RS"
          sectionText="Não somente um vídeo, crio histórias em imagem para ajudar você a vender seu negócio, seu terreno, seu empreendimento através da perspectiva aérea do drone ou em solo."
          imageSource={siteLogo}
          imageAltText="Teste"
          backgroundChange={false}
        />
      </main>
    </>
  );
}
