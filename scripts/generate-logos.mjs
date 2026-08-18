import fs from "node:fs";
import path from "node:path";
import url from "node:url";

/* Gera src/lib/logos.generated.ts a partir do que existir em
   public/images/logos/.

   O objetivo é que acrescentar um cliente seja SOLTAR O ARQUIVO NA PASTA:
   sem editar código, sem JSON, sem cadastro. O nome que aparece no site vem do
   nome do arquivo, então "Viacava Imóveis.png" já vira "Viacava Imóveis".

   Os imports são estáticos de propósito: é o que dá ao next/image a dimensão
   real do arquivo sem precisar medir em tempo de execução. */

const raiz = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const pasta = path.join(raiz, "public", "images", "logos");
const saida = path.join(raiz, "src", "lib", "logos.generated.ts");

const EXTENSOES = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

/* Os doze arquivos originais vieram em kebab-case sem acento, e acento não dá
   para deduzir. Arquivo novo não precisa entrar aqui: basta nomeá-lo com o
   nome real, acentos e espaços inclusive. */
const NOMES_LEGADOS = {
  "band-rs": "Band RS",
  "bloque": "Bloque",
  "carros-e-carangas": "Carros e Carangas",
  "cristofoli": "Cristofoli",
  "fontana": "Fontana",
  "hoffmann": "Hoffmann",
  "lions-clube": "Lions Clube",
  "milhas-do-zero": "Milhas do Zero",
  "paulo-andre-imoveis": "Paulo André Imóveis",
  "plastcromo-design": "Plastcromo Design",
  "smaniotto": "Smaniotto",
  "viacava-imoveis": "Viacava Imóveis",
};

const CONECTIVOS = new Set(["de", "do", "da", "dos", "das", "e", "em", "no", "na"]);

function nomeVisivel(base) {
  if (NOMES_LEGADOS[base]) return NOMES_LEGADOS[base];

  // Nome de arquivo já escrito por gente: respeita como está.
  if (/[A-ZÀ-Ý]/.test(base) || base.includes(" ")) return base.trim();

  return base
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((palavra, i) =>
      i > 0 && CONECTIVOS.has(palavra)
        ? palavra
        : palavra.charAt(0).toUpperCase() + palavra.slice(1)
    )
    .join(" ");
}

function identificador(base, i) {
  const limpo = base
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "");
  return `logo${limpo.charAt(0).toUpperCase()}${limpo.slice(1)}${i}`;
}

if (!fs.existsSync(pasta)) {
  console.error(`[logos] pasta não encontrada: ${pasta}`);
  process.exit(1);
}

const arquivos = fs
  .readdirSync(pasta)
  .filter((nome) => EXTENSOES.has(path.extname(nome).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, "pt-BR"));

if (arquivos.length === 0) {
  console.error("[logos] nenhuma imagem encontrada em public/images/logos/");
  process.exit(1);
}

const entradas = arquivos.map((arquivo, i) => {
  const base = path.basename(arquivo, path.extname(arquivo));
  return { arquivo, id: identificador(base, i), nome: nomeVisivel(base) };
});

const conteudo = `// GERADO AUTOMATICAMENTE. Nao edite a mao.
// Fonte: public/images/logos/ · gerador: scripts/generate-logos.mjs
// Para acrescentar um cliente, solte o arquivo naquela pasta e publique.
import type { StaticImageData } from "next/image";
${entradas.map((e) => `import ${e.id} from "../../public/images/logos/${e.arquivo}";`).join("\n")}

export interface ClientLogo {
  id: string;
  src: StaticImageData;
  alt: string;
  nome: string;
}

export const clientLogos: ClientLogo[] = [
${entradas
  .map(
    (e) =>
      `  { id: ${JSON.stringify(e.arquivo)}, src: ${e.id}, alt: ${JSON.stringify(
        `Logotipo ${e.nome}`
      )}, nome: ${JSON.stringify(e.nome)} },`
  )
  .join("\n")}
];
`;

fs.mkdirSync(path.dirname(saida), { recursive: true });
fs.writeFileSync(saida, conteudo, "utf8");
console.log(`[logos] ${entradas.length} logotipos → src/lib/logos.generated.ts`);
