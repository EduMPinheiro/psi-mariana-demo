# Plano: Landing Page — Mariana Oliveira Santos (Psicóloga Clínica)

## Objetivo
Site one-page elegante, acolhedor e profissional para portfólio, com foco em gerar confiança e incentivar agendamento. Inclui mapa interativo Google Maps via conector Lovable.

## Estrutura da página (`src/routes/index.tsx`)

Seções na ordem:
1. **Navbar fixa** — logo "Mariana Oliveira" + links âncora (Sobre, Abordagem, Serviços, FAQ, Contato) + CTA "Agendar consulta"
2. **Hero** — split layout: à esquerda título serif ("Um espaço seguro para você cuidar de si"), subtítulo, CRP, dois CTAs (Agendar / Conhecer); à direita retrato (mariana-hero.jpg) com moldura suave
3. **Sobre mim** — imagem (mariana-about.jpg) + bio em 2-3 parágrafos, lista de formação/especializações
4. **Abordagem terapêutica** — 3-4 cards (TCC, escuta acolhedora, sigilo, plano personalizado) com ícones lucide
5. **Para quem é** — grid de temas tratados (ansiedade, depressão, autoestima, relacionamentos, luto, estresse, transições de vida)
6. **Modalidades & investimento** — 2 cards: Presencial e Online, com descrição e duração; nota discreta sobre valores sob consulta
7. **Depoimentos** — 3 cards anônimos (iniciais + idade), estilo blockquote suave
8. **FAQ** — accordion shadcn com 6 perguntas (primeira consulta, sigilo, frequência, duração, online funciona?, plano de saúde)
9. **Localização** — split: à esquerda endereço completo, horários, transporte; à direita **mapa Google Maps interativo** centrado em R. Maj. Maragliano, 241 - Vila Mariana, SP, com marker
10. **Contato / CTA final** — fundo sage, título "Dê o primeiro passo", botões WhatsApp e e-mail
11. **Footer** — CRP, redes, copyright, aviso ético

## Componentes a criar

- `src/components/site/Navbar.tsx`
- `src/components/site/Hero.tsx`
- `src/components/site/About.tsx`
- `src/components/site/Approach.tsx`
- `src/components/site/ForWhom.tsx`
- `src/components/site/Services.tsx`
- `src/components/site/Testimonials.tsx`
- `src/components/site/FAQ.tsx` (usa `@/components/ui/accordion`)
- `src/components/site/LocationMap.tsx` — carrega Maps JS API via `VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY`, callback global `initMap`, `google.maps.Marker` (sem `mapId`/AdvancedMarker), `loading=async`
- `src/components/site/ContactCTA.tsx`
- `src/components/site/Footer.tsx`

## Mapa Google (detalhe técnico)

- Coordenadas fixas: lat -23.5897, lng -46.6402 (Vila Mariana, aprox.)
- Script injetado uma única vez via `useEffect`; cleanup do callback global
- Fallback: se chave ausente, mostra card estático com endereço + link "Abrir no Google Maps"
- Estilo: altura 400px, bordas arredondadas, sombra suave

## SEO (`src/routes/index.tsx` head)

- Title: "Mariana Oliveira — Psicóloga Clínica em São Paulo | CRP 06/234567" (<60 chars adaptado)
- Meta description acolhedora (<160 chars)
- og:title, og:description, og:image (hero), twitter:card
- JSON-LD `MedicalBusiness` / `Psychologist` com endereço e geo
- H1 único no Hero, alt em todas as imagens

## Design system

Tokens já configurados em `src/styles.css` (sage, sand, clay, gold, Fraunces+Inter). Usar apenas classes semânticas (`bg-sage`, `text-foreground`, `bg-gradient-warm`, `shadow-soft`, `animate-fade-up`). Sem cores hardcoded.

## Fora de escopo
- Backend / formulário funcional (CTAs são `mailto:` e `https://wa.me/`)
- Blog, área de pacientes, login
- Animações pesadas além de fade-up sutil no scroll