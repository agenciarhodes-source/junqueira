# PRD — Landing Page BPC/LOAS | Junqueira Advogados

## Problem statement (original)
"Crie uma landing page" + briefing anexado (01_bpc_loas.md): landing page independente, de alta conversão, para campanhas de Google Ads do Junqueira Advogados sobre BPC/LOAS (Direito Previdenciário). Fluxo: Google Ads → Landing → botão único "INICIAR TRIAGEM" → formulário externo Flipform → lead qualificado → central de atendimento. Identidade: #804040 (principal), #F1F1F1 (fundo), branco, dourado discreto, tipografia Poppins, estética sóbria/jurídica/elegante. Mobile first (390px), CTA sticky inferior no mobile, FAQ accordion, captura de UTM/GCLID, eventos de tracking, sem promessas nem sensacionalismo (conformidade OAB).

## User personas
- Visitante de alta intenção vindo de anúncio Google Ads buscando informações sobre BPC/LOAS (pessoa idosa, familiar ou cuidador)
- Equipe de marketing do escritório (precisa de tracking de campanha e URL configurável do Flipform)

## Core requirements (static)
- CTA único "INICIAR TRIAGEM" abrindo formulário externo (Flipform), preservando UTM/GCLID
- Estrutura: Hero / Situações (4 cards) / Conteúdo 4 blocos / O que é analisado (4 cards) / Como funciona (3 passos, sem botão) / FAQ (6 perguntas) / Institucional / Rodapé com links legais
- Páginas legais: Política de Privacidade, Termos de Uso, LGPD (textos padrão gerados)
- Rastreamento: dataLayer (landing_view, cta_click, flipform_start), captura de UTM/GCLID em sessionStorage
- URL curta: /bpc-loas

## Architecture
- Frontend: React 19 + Tailwind + framer-motion (reveal/parallax) + lenis (smooth scroll) + react-router-dom
- Backend: FastAPI template intacto (landing é frontend-only, sem endpoints próprios)
- Config editável: /app/frontend/src/config/site.js (dados do escritório) e REACT_APP_FLIPFORM_URL em /app/frontend/.env
- Rotas: / → redirect /bpc-loas; /bpc-loas; /politica-de-privacidade; /termos-de-uso; /lgpd

## Implemented (2026-08-19)
- Landing completa /bpc-loas com hero cinético (reveal mascarado linha a linha), parallax na imagem, marquee editorial lento, capítulos numerados estilo manifesto, scroll suave Lenis, reveals por seção
- CTA único com tracking (cta_click + flipform_start) e abertura do Flipform com UTM/GCLID preservados
- Sticky CTA mobile (aparece após 420px de scroll)
- 3 páginas legais com textos padrão
- SEO: title/meta exclusivos, lang pt-BR, imagens com lazy loading/auto-format
- Verificado: desktop + mobile 390px via screenshots; eventos dataLayer e URL do Flipform validados com curl/browser

## Backlog
- P0: Inserir URL real do Flipform (editar REACT_APP_FLIPFORM_URL em /app/frontend/.env)
- P0: Substituir dados placeholder do rodapé (OAB, endereço, telefone, e-mail) em /app/frontend/src/config/site.js
- P1: Integrar Google Tag Manager / Google Ads reais (IDs fornecidos pelo cliente)
- P1: Revisão jurídica final dos textos legais pelo escritório
- P2: Versões /bpc-loas idoso e /bpc-loas pcd para anúncios segmentados
- P2: Teste A/B de H1/CTA

## Known notes
- landing_view dispara 2x no ambiente de preview dev (React StrictMode); em build de produção dispara 1x
