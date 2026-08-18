import type { Work } from "./content";

/* Portfólio alimentado por playlist do YouTube, sem chave de API.

   O YouTube publica um feed Atom para qualquer playlist pública em
   `/feeds/videos.xml?playlist_id=...`. Não exige projeto no Google Cloud, não
   exige credencial e não tem cota. A contrapartida é que o feed devolve no
   máximo 15 itens por playlist, o que é folgado para um portfólio curado.

   O feed do CANAL não serve para isto: ele traz os últimos uploads, que no
   caso do Leandro são vídeos regionais e pessoais, não a seleção comercial. */

const FEED = "https://www.youtube.com/feeds/videos.xml?playlist_id=";

interface FeedItem {
  videoId: string;
  title: string;
}

function decodeEntities(text: string) {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, "&");
}

/** Lê uma playlist pública. Devolve lista vazia em qualquer falha, nunca lança. */
async function readPlaylist(playlistId: string): Promise<FeedItem[]> {
  try {
    const response = await fetch(`${FEED}${encodeURIComponent(playlistId)}`, {
      headers: { "user-agent": "vista-aerea-filmes/1.0" },
    });
    if (!response.ok) return [];
    const xml = await response.text();

    const entries = xml.split("<entry>").slice(1);
    return entries.flatMap((entry) => {
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
      const title = entry.match(/<media:title>([^<]*)<\/media:title>/)?.[1];
      if (!id || !title) return [];
      return [{ videoId: id, title: decodeEntities(title).trim() }];
    });
  } catch {
    return [];
  }
}

/* O pôster: `maxresdefault` é 1280x720 e 16:9 de verdade, mas não existe para
   todo vídeo e falha em silêncio com um 404, que no `next/image` vira imagem
   quebrada. Então a disponibilidade é conferida, do melhor para o pior. */
const POSTER_SIZES = ["maxresdefault", "sddefault", "hqdefault"] as const;

async function resolvePoster(videoId: string): Promise<string> {
  for (const size of POSTER_SIZES) {
    const url = `https://i.ytimg.com/vi/${videoId}/${size}.jpg`;
    try {
      const response = await fetch(url, { method: "HEAD" });
      if (response.ok) return url;
    } catch {
      /* tenta o próximo tamanho */
    }
  }
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

/** Separadores aceitos quando a categoria vem embutida no título do vídeo. */
const SEPARATORS = ["|", "—", "–", ":"];

function splitTitle(title: string) {
  for (const separator of SEPARATORS) {
    const at = title.indexOf(separator);
    if (at > 0) {
      const categoria = title.slice(0, at).trim();
      if (categoria && categoria.length <= 40) {
        return { categoria, resto: title.slice(at + separator.length).trim() };
      }
    }
  }
  return { categoria: null, resto: title };
}

export interface PortfolioSource {
  playlistId: string;
  /* Quando preenchido, todos os vídeos desta playlist recebem esta categoria e
     o título do vídeo no YouTube fica intocado. Quando vazio, a categoria é
     lida do próprio título, antes de `|`, `—`, `–` ou `:`. */
  categoria?: string;
}

export async function fetchWorks(sources: PortfolioSource[]): Promise<Work[]> {
  const listas = await Promise.all(
    sources.map(async (source) => {
      const itens = await readPlaylist(source.playlistId);
      return itens.map((item) => ({ item, source }));
    })
  );

  const vistos = new Set<string>();
  const works: Work[] = [];

  for (const { item, source } of listas.flat()) {
    if (vistos.has(item.videoId)) continue;
    vistos.add(item.videoId);

    const { categoria, resto } = splitTitle(item.title);
    works.push({
      id: item.videoId,
      categoria: source.categoria ?? categoria ?? item.title,
      youtubeId: item.videoId,
      titleAttr: resto || item.title,
      poster: await resolvePoster(item.videoId),
    });
  }

  return works;
}
