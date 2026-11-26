# OmniSyn Technologies

Site institucional de tecnologia agrícola, com as páginas do OmniGuide, OmniSoil, OmniSeed e OmniCore.

## Desenvolvimento

Use Node.js 24.x. Execute `npm ci` e `npm run dev`. O Next.js informa a porta local no terminal.

## Build estática

Execute `npm run build`. A publicação usa o diretório `out/`, que inclui a Home, as páginas de soluções e as páginas institucionais acessíveis pelo menu. Para servir a build com Docker, execute `docker compose up` e acesse a porta 8080.

A Home está em `public/previa-solinftec.html`. As páginas de soluções usam o componente `components/Solution.jsx` e os dados de `components/product-pages.js`. As páginas institucionais em HTML estão em `public/reference-pages`. Configure `OMNISYN_CONTACT_URL` antes da build para ativar o contato nas páginas de soluções.

## Publicação na Vercel

Envie a branch `main` ao repositório Git da equipe e importe esse repositório na Vercel. Selecione a raiz do repositório como Root Directory. O arquivo `vercel.json` configura a instalação com `npm ci`, a compilação com `npm run build` e a publicação estática do diretório `out`. O preset é **Other**, pois o pós-build monta a Home e as páginas institucionais depois da exportação do Next.js.

O site funciona com os contatos que já constam no rodapé. A variável `OMNISYN_CONTACT_URL` é opcional. As imagens otimizadas do site estão em `public/`. Alguns estilos, fontes e imagens das páginas HTML ainda são carregados de servidores externos.

Após o deploy, confira a Home, abra as quatro opções em Soluções e teste P&D e Contato. Os caminhos com barra final permitem abrir e atualizar as páginas diretamente.
