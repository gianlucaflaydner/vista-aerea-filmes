# Como mexer no conteúdo do site

Sem programar. Duas coisas se editam sozinhas: **os vídeos do portfólio** e **os
logotipos de clientes**.

---

## Vídeos: é só usar playlist do YouTube

O site lê playlists do YouTube. Pôr um vídeo no ar é **arrastar o vídeo para a
playlist certa**, nada mais. O site se atualiza sozinho em até 15 minutos, sem
republicar nada e sem avisar ninguém.

### Uso do dia a dia (Leandro)

1. Abrir o YouTube, na conta do Vista Aérea Filmes.
2. No vídeo, clicar em **Salvar** e escolher a playlist da categoria
   (ex.: *Site Imobiliário*).
3. Pronto. Em até 15 minutos ele aparece no site.

Para tirar um vídeo do site, é o contrário: remover da playlist. **O vídeo
continua no YouTube**, só deixa de aparecer no site.

Para mudar a ordem, arrastar dentro da playlist. A ordem do site é a da
playlist.

> A **capa** e o **título acessível** vêm do próprio YouTube. Trocar a
> miniatura lá troca a capa aqui.

### Configuração inicial (uma vez, Gianluca)

1. No YouTube, criar uma playlist por categoria e deixá-la **Pública**.
   *Não listada não funciona*, o site não consegue ler.
2. Copiar o ID de cada playlist. Ele está na URL, depois de `list=`:

   ```
   https://www.youtube.com/playlist?list=PLabc123def456
                                          └── este pedaço
   ```

3. Abrir `src/lib/content.ts` e preencher `PORTFOLIO_SOURCES`:

   ```ts
   export const PORTFOLIO_SOURCES: PortfolioSource[] = [
     { playlistId: "PLabc123def456", categoria: "Eventos" },
     { playlistId: "PLghi789jkl012", categoria: "Imobiliário" },
     { playlistId: "PLmno345pqr678", categoria: "Empresarial" },
   ];
   ```

   O texto de `categoria` é exatamente o que aparece na tarja amarela.

4. Publicar. A partir daí, só se mexe em código para **criar uma categoria
   nova**. Acrescentar vídeo nunca mais.

### Alternativa: uma playlist só

Se preferir uma playlist única, deixe `categoria` de fora e escreva o título do
vídeo no YouTube assim:

```
Eventos | Casamento da Ana e do João
```

O site usa o que vem antes do `|` como tarja. Também aceita `—`, `–` e `:`.

A contrapartida: isso obriga a renomear os vídeos no YouTube, o que muda o
título público deles. Por isso o recomendado é uma playlist por categoria.

### Limites, sem letra miúda

- Cada playlist entrega **até 15 vídeos** ao site. Passou disso, os mais
  recentes ganham.
- A playlist tem de ser **pública**.
- Se o YouTube estiver fora do ar na hora de atualizar, o site mantém o que já
  estava no ar. O portfólio nunca fica vazio.
- Enquanto `PORTFOLIO_SOURCES` estiver vazio, o site mostra a seleção fixa de
  sete vídeos que já estava lá.

---

## Logotipos de clientes: é só soltar o arquivo na pasta

Os logos saem do que existir em **`public/images/logos/`**. Não há lista para
atualizar, nem cadastro: o site descobre sozinho.

### Acrescentar um cliente

1. Salvar o logotipo com **o nome da empresa no nome do arquivo**, com acento e
   espaço mesmo:

   ```
   Madeireira Fontana.png
   Imobiliária São Jorge.png
   ```

   É esse nome que o site usa para o leitor de tela e para o `title` do logo.

2. Colocar o arquivo em `public/images/logos/`.

3. Publicar (`git push`, ou pelo botão **Add file → Upload files** no GitHub).
   A Vercel republica sozinha em 1 a 2 minutos.

Para tirar um cliente, apagar o arquivo.

### Cuidados com o arquivo

- Formatos aceitos: `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.gif`.
- **PNG com fundo transparente é o ideal.** Cada logo é exibido sobre uma chapa
  branca; logo com fundo colorido vai aparecer com o retângulo dele.
- Logo escuro ou colorido funciona. Logo **branco** some na chapa branca.
- Largura em torno de 400 a 800px basta. Arquivo gigante só deixa o site pesado.
- A ordem na tela é alfabética pelo nome do arquivo.

---

## Resumo de quem faz o quê

| Tarefa | Quem consegue | Onde | Vai ao ar em |
|---|---|---|---|
| Pôr / tirar / reordenar vídeo | Leandro sozinho | YouTube | até 15 min |
| Trocar a capa de um vídeo | Leandro sozinho | YouTube | até 15 min |
| Pôr / tirar logotipo | Leandro ou Gianluca | pasta `logos/` (ou upload no GitHub) | 1 a 2 min |
| Criar categoria nova | Gianluca | `src/lib/content.ts` | 1 a 2 min |
| Textos, manchetes, equipamentos | Gianluca | código | 1 a 2 min |
