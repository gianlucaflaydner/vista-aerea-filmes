# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Donos de negócio, corretores e organizadores de eventos do Vale do Paranhana (RS): Taquara, Igrejinha, Parobé, Três Coroas, Rolante e arredores. Chegam ao site precisando de um vídeo para vender alguma coisa concreta: um terreno, um empreendimento, uma empresa, um evento que vão realizar. Quase sempre nunca contrataram vídeo antes e não sabem avaliar o que é um bom trabalho. Precisam **ver** antes de decidir. A decisão é rápida e local: assistem a um ou dois vídeos e, se gostam, chamam no WhatsApp.

Audiência secundária: empresas e instituições da região contratando material institucional ou de apresentação.

## Product Purpose

Vista Aérea Filmes é a produtora audiovisual de Leandro Laydner. Produz vídeo aéreo (drone) e em solo para negócios, imóveis, empreendimentos, eventos e material institucional na região.

O site existe para uma coisa: fazer alguém da região assistir ao trabalho e iniciar uma conversa no WhatsApp. Sucesso é uma mensagem recebida, não uma visita.

## Positioning

Não é serviço de "imagens de drone". É narrativa em imagem a serviço de uma venda. A frase do próprio Leandro define o mecanismo: *não somente um vídeo, histórias em imagem para ajudar a vender o negócio, o terreno ou o empreendimento*, do ar ou do solo. O que um concorrente da região não copia: o portfólio real e variado (eventos, empresarial, institucional, imobiliário) e a combinação aéreo + solo no mesmo fornecedor, com trato direto com quem filma e edita.

Produtora de uma pessoa só, tratada como qualidade e não como limitação: quem atende é quem filma, edita e entrega.

## Operating Context

- Atendimento regional, presencial, com deslocamento pelo Vale do Paranhana.
- Primeiro contato quase sempre por WhatsApp; Instagram é a vitrine contínua do trabalho.
- O portfólio vive no YouTube; o site incorpora os vídeos, não os hospeda.
- Muitos visitantes chegam pelo celular, em rede móvel, então peso de página e tempo até o primeiro vídeo importam.

## Capabilities and Constraints

**Serviços confirmados** (as sete peças do portfólio): eventos, empresarial, institucional, imobiliário, eventos organizacionais, apresentação empresarial, e um vídeo de apresentação pessoal.

**Equipamento confirmado:**
- Câmeras: Sony a57, Sony ZV1 4K
- Drones: DJI Mavic Mini, Phantom 3 Advanced
- Setup com iluminação e captação de áudio

**Contato:**
- WhatsApp: +55 51 98406-5735 (`5551984065735`), ação primária do site
- Formulário de contato via EmailJS, via secundária, deve continuar funcionando
- Instagram: `@vistaaereafilmes` · Facebook: `vistaaereadrone` · YouTube: `@vistaaereafilmes`

**Alcance:** Vale do Paranhana e região. O site se posiciona como regional.

**Restrições técnicas:** Next.js 13 Pages Router, TypeScript, Tailwind. Site de página única. Vídeos servidos por embed do YouTube. Sem backend próprio, e o formulário depende do EmailJS no cliente.

**Não decidido / não afirmar:** preço, prazo de entrega, pacotes, número de projetos realizados, tempo de atuação.

## Brand Commitments

- Nome: **Vista Aérea Filmes**. Profissional: **Leandro Laydner**.
- Logotipo existente em `public/images/vista-aerea-logo.png`, permanece a marca, não deve ser redesenhado nem substituído.
- Idioma: português do Brasil, tom em primeira pessoa (é o Leandro falando, não uma empresa).
- Os 7 vídeos do YouTube e os 12 logos de clientes são conteúdo fixo no site: mesma seleção, mesmos arquivos. São uma amostra do que existe, e o site deve apresentá-los como tal.

## Evidence on Hand

**Prova real disponível, e é uma AMOSTRA, não o total.** Confirmado pelo Gianluca em 2026-08-17: o Leandro atendeu diversos clientes além dos que aparecem no site, e filmou muito mais do que os sete vídeos publicados. O site precisa deixar isso explícito; qualquer texto que sugira que estes são os únicos clientes ou os únicos trabalhos é falso e subvende o serviço. O número exato de clientes e de trabalhos NÃO é conhecido e não pode ser inventado. Use "alguns", "uma amostra", "entre outros", nunca uma contagem.

- 7 vídeos publicados no YouTube, cobrindo quatro áreas distintas de atuação, a prova mais forte que existe, porque é o próprio produto. São uma seleção do portfólio.
- 12 logos de clientes disponíveis em `public/images/logos/`, alguns dos clientes atendidos: Band RS, Bloque, Smaniotto, Viacava Imóveis, Paulo André Imóveis, Plastcromo Design, Cristofoli, Milhas do Zero, Lions Clube, Carros e Carangas, Hoffmann, Fontana.
- Foto aérea autoral de Taquara/RS em `public/images/taquara-visao-de-cima-colorida.jpg` (4000×2250).
- Texto biográfico do Leandro, na voz dele.

**Ausências que não podem ser fabricadas:** não há depoimentos de clientes, não há estudos de caso escritos, não há métricas, não há certificação ANAC/SARPAS declarada, não há tempo de atuação declarado, não há foto do Leandro, e não há contagem conhecida de clientes ou de trabalhos realizados. Nada disso deve ser inventado nem sugerido visualmente por um placeholder que pareça real.

## Product Principles

1. **O trabalho é o argumento.** Qualquer viewport que fale sobre o vídeo em vez de mostrar o vídeo está gastando a atenção errada.
2. **Uma ação, sempre visível: WhatsApp.** Todo caminho da página termina em uma conversa. O formulário existe para quem prefere e-mail, não para competir com o botão.
3. **Regional é força, não limite.** A página fala de um lugar concreto e reconhecível. Isso é o que um concorrente de fora não tem.
4. **Primeira pessoa.** Quem escreve é o Leandro. Nada de "nossa equipe", "soluções" ou linguagem de agência.
5. **Provar só o que existe.** Sem selo, sem número inventado, sem depoimento fictício. A escassez de prova formal se resolve mostrando mais trabalho, nunca inventando credencial.

## Accessibility & Inclusion

Público majoritariamente mobile, em rede móvel e frequentemente em luz do dia, então contraste e alvos de toque generosos importam mais que o normal. Faixa etária ampla entre corretores e organizadores: o corpo de texto não desce abaixo de 16px e a ação primária nunca depende de hover.
