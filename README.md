# Milen Capital — Site institucional

Projeto em **Next.js 16 (App Router) + TypeScript + Tailwind CSS**.

## Etapa 1 (esta entrega)

- Estrutura base do projeto
- `Navbar` responsiva (com menu mobile) e `Footer`
- Paleta de marca configurada no `tailwind.config.ts` (dourado extraído do logo, azul-marinho, creme)
- Fontes auto-hospedadas via `@fontsource` (Fraunces para títulos, Inter para texto) — não dependem do Google Fonts em runtime
- Logo processado: `public/logo-icon.png` (ícone, fundo transparente) e `public/logo-full.png` (versão completa, fundo transparente)
- Textos em espanhol centralizados em `content/site.ts`
- Páginas placeholder para todas as rotas da navbar (Início, Soluções, Sobre Nós, Blog, Contato) — o conteúdo completo de cada uma vem nas próximas etapas

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Comandos úteis

```bash
npm run build   # build de produção (testei aqui, passou limpo)
npm run lint    # eslint
npm start       # roda o build de produção localmente
```

## Como subir pro GitHub / Netlify

```bash
git init
git add .
git commit -m "feat: estrutura inicial, navbar e footer"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
```

Na Netlify, ao conectar o repositório, ele detecta Next.js automaticamente
(build command: `next build`, publish directory: gerenciado pelo plugin
oficial da Netlify para Next.js — não precisa configurar nada manual).

## O que verifiquei antes de entregar

- ✅ `npm install` — 0 vulnerabilidades
- ✅ `npx tsc --noEmit` — sem erros de tipo
- ✅ `npm run build` — build de produção completo, sem erros
- ✅ `npm run lint` — sem erros nem avisos

## Próximas etapas (a combinar)

1. Home: Hero + seções introdutórias de cada aba (Blog, Sobre Nós, Produtos/Soluções, Contato)
2. Home: seções exclusivas — Asesoría (equipo), Testimonios, Patrocinadores, Dónde encontrarnos (mapa)
3. Páginas internas completas (Soluções, Sobre Nós, Blog, Contato)
4. Integração com o Sanity (conteúdo dinâmico do blog/ofertas)
