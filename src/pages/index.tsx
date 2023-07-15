import Section from "@/components/section/Section";
import { Roboto } from "next/font/google";
import siteLogo from "../../public/images/vista-aerea-logo.png";
import PortfolioSection from "@/components/portfolio-section/PortfolioSection";
const roboto = Roboto({ subsets: ["latin"], weight: "100" });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${roboto.className}`}
      >
        <Section
          reverse={false}
          sectionTitle="Vista Aérea Filmes - Taquara, RS"
          sectionText="Não somente um vídeo, crio histórias em imagem para ajudar você a vender seu negócio, seu terreno ou seu empreendimento através da perspectiva aérea do drone ou em solo."
          imageSource={siteLogo}
          imageAltText="Teste"
          backgroundChange
          italic
        />
        <PortfolioSection />
      </main>
    </>
  );
}
