import type { PortfolioSource } from "./youtube";

/* Contato. O número estava sem código de país nem DDD, por isso o link do
   WhatsApp só funcionava por acidente. */
export const WHATSAPP_NUMBER = "5551984065735";
export const WHATSAPP_MESSAGE =
  "Olá, Leandro! Vi seu portfólio no site e gostaria de um orçamento.";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/vistaaereafilmes/";
export const FACEBOOK_URL = "https://www.facebook.com/vistaaereadrone";
export const YOUTUBE_URL = "https://www.youtube.com/@vistaaereafilmes/videos";

export interface Work {
  id: string;
  /** Rótulo da tarja amarela: a categoria do trabalho. */
  categoria: string;
  youtubeId: string;
  /** Título acessível do iframe. */
  titleAttr: string;
  /** URL do pôster, já resolvida na melhor resolução que existe para o vídeo. */
  poster: string;
}

/* ---------------------------------------------------------------------------
   DE ONDE VÊM OS VÍDEOS DO PORTFÓLIO
   ---------------------------------------------------------------------------
   Para trocar, acrescentar ou remover vídeo NÃO é preciso mexer em código:
   basta pôr ou tirar o vídeo da playlist correspondente no YouTube. O site
   relê as playlists sozinho a cada 15 minutos, sem republicar nada.

   Duas formas de organizar, e as duas funcionam ao mesmo tempo:

   1. UMA PLAYLIST POR CATEGORIA (recomendado). Preencha `categoria` aqui: o
      nome da tarja amarela vem deste arquivo, e os títulos dos vídeos no
      YouTube ficam intocados. Adicionar trabalho é arrastar para a playlist.

   2. UMA PLAYLIST SÓ, com a categoria no título. Deixe `categoria` vazio e
      escreva o título como "Eventos | Casamento Ana e João". O site usa o que
      vem antes de `|`, `—`, `–` ou `:`. Exige renomear os vídeos no YouTube.

   As playlists precisam estar PÚBLICAS ("não listada" não funciona), e o feed
   entrega até 15 vídeos por playlist.

   Enquanto esta lista estiver vazia, o site mostra a seleção fixa abaixo. */
export const PORTFOLIO_SOURCES: PortfolioSource[] = [
  // { playlistId: "PLxxxxxxxxxxxxxxxxxxxx", categoria: "Eventos" },
  // { playlistId: "PLxxxxxxxxxxxxxxxxxxxx", categoria: "Empresarial" },
  // { playlistId: "PLxxxxxxxxxxxxxxxxxxxx", categoria: "Institucional" },
  // { playlistId: "PLxxxxxxxxxxxxxxxxxxxx", categoria: "Imobiliário" },
];

/* Seleção de reserva: exatamente o que estava no site antes. Fica no ar
   enquanto as playlists não forem configuradas, e volta a valer sozinha se o
   YouTube estiver fora do ar na hora de revalidar. O portfólio nunca aparece
   vazio. */
export const FALLBACK_WORKS: Work[] = [
  {
    id: "eventos",
    categoria: "Eventos",
    youtubeId: "mE9et4biPgs",
    titleAttr: "Vídeo de gravação de eventos",
    poster: "https://i.ytimg.com/vi/mE9et4biPgs/maxresdefault.jpg",
  },
  {
    id: "empresarial",
    categoria: "Empresarial",
    youtubeId: "v33g_LEVk3w",
    titleAttr: "Vídeo de gravação de propaganda empresarial",
    poster: "https://i.ytimg.com/vi/v33g_LEVk3w/maxresdefault.jpg",
  },
  {
    id: "institucional",
    categoria: "Institucional",
    youtubeId: "YBO7tqJDLyU",
    titleAttr: "Vídeo de gravação institucional",
    poster: "https://i.ytimg.com/vi/YBO7tqJDLyU/maxresdefault.jpg",
  },
  {
    id: "imobiliario",
    categoria: "Imobiliário",
    youtubeId: "gYyZac-mPoI",
    titleAttr: "Vídeo de setor imobiliário",
    poster: "https://i.ytimg.com/vi/gYyZac-mPoI/maxresdefault.jpg",
  },
  {
    id: "eventos-organizacionais",
    categoria: "Eventos organizacionais",
    youtubeId: "4Ek0g1Ws6ys",
    titleAttr: "Vídeo de gravação de eventos organizacionais",
    poster: "https://i.ytimg.com/vi/4Ek0g1Ws6ys/maxresdefault.jpg",
  },
  {
    id: "sobre-mim",
    categoria: "Um pouco sobre mim",
    youtubeId: "jym3R8kso_I",
    titleAttr: "Vídeo de apresentação pessoal",
    poster: "https://i.ytimg.com/vi/jym3R8kso_I/maxresdefault.jpg",
  },
  {
    id: "apresentacao-empresarial",
    categoria: "Apresentação empresarial",
    youtubeId: "J2mDWGbRbMM",
    titleAttr: "Vídeo de apresentação empresarial",
    poster: "https://i.ytimg.com/vi/J2mDWGbRbMM/maxresdefault.jpg",
  },
];

export interface EquipmentGroup {
  rotulo: string;
  itens: string[];
}

/* Equipamento confirmado. "Phanton" era erro de digitação do site anterior. */
export const equipment: EquipmentGroup[] = [
  { rotulo: "Câmeras", itens: ["Sony a57", "Sony ZV1 4K"] },
  { rotulo: "Drones", itens: ["DJI Mavic Mini", "Phantom 3 Advanced"] },
  { rotulo: "Apoio", itens: ["Setup de iluminação", "Captação de áudio"] },
];
