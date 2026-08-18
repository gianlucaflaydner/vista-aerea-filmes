import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import HeroSection from "@/components/hero-section/HeroSection";
import PortfolioSection from "@/components/portfolio-section/PortfolioSection";
import AboutSection from "@/components/about-section/AboutSection";
import ClientsSection from "@/components/clients-section/ClientsSection";
import SpecificationsSection from "@/components/specifications-section/SpecificationsSection";
import ContactSection from "@/components/contact-section/ContactSection";
import Fab from "@/components/fab/Fab";
import { FALLBACK_WORKS, PORTFOLIO_SOURCES, type Work } from "@/lib/content";
import { fetchWorks } from "@/lib/youtube";

const TITLE = "Vista Aérea Filmes | Vídeo aéreo e em solo no Vale do Paranhana";
const DESCRIPTION =
  "Leandro Laydner filma negócios, terrenos, empreendimentos e eventos no Vale do Paranhana, RS. Do ar, com drone, e também em solo.";

export const getStaticProps: GetStaticProps<{ works: Work[] }> = async () => {
  const daPlaylist = PORTFOLIO_SOURCES.length
    ? await fetchWorks(PORTFOLIO_SOURCES)
    : [];

  return {
    /* Playlist vazia, não configurada ou YouTube fora do ar: cai na seleção
       fixa. O portfólio nunca renderiza vazio. */
    props: { works: daPlaylist.length > 0 ? daPlaylist : FALLBACK_WORKS },
    /* Regeneração incremental: vídeo novo na playlist entra no ar em até 15
       minutos, sem republicar o site. */
    revalidate: 900,
  };
};

export default function Home({
  works,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://vistaaereafilmes.com.br/" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Vista Aérea Filmes" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta
          property="og:image"
          content="/images/taquara-visao-de-cima-colorida.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Head>

      {/* Uma superfície contínua: as seções são regiões da mesma chapa, não
          faixas empilhadas com fundo próprio. */}
      <main>
        <HeroSection featured={works[0]} />
        <PortfolioSection works={works} />
        <AboutSection />
        <ClientsSection />
        <SpecificationsSection />
        <ContactSection />
      </main>
      <Fab />
    </>
  );
}
