import PortfolioSection from "@/components/portfolio-section/PortfolioSection";
import Fab from "@/components/fab/Fab";
import ContactSection from "@/components/contact-section/ContactSection";
import SimpleSection from "@/components/section/SimpleSection";
import AboutSection from "@/components/about-section/AboutSection";
import SpecificationsSection from "@/components/specifications-section/SpecificationsSection";
import siteLogo from "../../public/images/vista-aerea-logo.png";
import Head from "next/head";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"], weight: "300" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Vista Aérea Filmes</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between pt-24 ${oswald.className}`}
      >
        <SimpleSection
          reverse={false}
          sectionTitle="Vista Aérea Filmes - Vale do Paranhana, RS"
          sectionText="Não somente um vídeo, crio histórias em imagem para ajudar você a vender seu negócio, seu terreno ou seu empreendimento através da perspectiva aérea do drone ou em solo."
          imageSource={siteLogo}
          imageAltText="Teste"
          backgroundChange
        />
        <PortfolioSection />
        <AboutSection />
        <SpecificationsSection />
        <ContactSection />
        <Fab />
      </main>
    </>
  );
}
