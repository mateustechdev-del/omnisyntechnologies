import { cp, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";



const neutralPages = {
  "blog/index.html": {
    title: "Conteúdos | OmniSyn",
    description: "Conteúdos da OmniSyn sobre tecnologia, dados e operação agrícola.",
    eyebrow: "Conteúdos OmniSyn",
    heading: "Tecnologia aplicada ao campo",
    body: "Esta área está sendo preparada para reunir materiais sobre tecnologia agrícola, integração de dados e operação no campo.",
    links: [{ href: "/pt-br/pd/", label: "Conheça os projetos de P&D" }]
  },
  "alice-ai-solix-ag-robotics/index.html": {
    title: "Automação agrícola | OmniSyn",
    description: "Tecnologia OmniSyn para apoiar a operação agrícola.",
    eyebrow: "Automação agrícola",
    heading: "Tecnologia conectada ao campo",
    body: "A OmniSyn desenvolve frentes de tecnologia agrícola com foco em integração de máquinas, dados e atividades da lavoura.",
    links: [{ href: "/projetos/omnicore/", label: "Conheça o OmniCore" }]
  },
  "carreiras/index.html": {
    title: "Carreiras | OmniSyn",
    description: "Informações sobre oportunidades profissionais na OmniSyn.",
    eyebrow: "Carreiras",
    heading: "Faça parte da OmniSyn",
    body: "As oportunidades profissionais serão divulgadas nesta página quando estiverem disponíveis. Não há vagas listadas no momento.",
    links: [{ href: "/pt-br/nosso-time/", label: "Conheça nosso time" }]
  },
  "citros/index.html": {
    title: "Tecnologia agrícola | OmniSyn",
    description: "Frentes de tecnologia agrícola da OmniSyn.",
    eyebrow: "Tecnologia agrícola",
    heading: "Tecnologia para diferentes operações",
    body: "As frentes de tecnologia da OmniSyn são desenvolvidas para apoiar o acompanhamento das atividades agrícolas e podem ser adaptadas às necessidades de cada operação.",
    links: [{ href: "/projetos/omnicore/", label: "Conheça o OmniCore" }]
  },
  "contato/index.html": {
    title: "Contato | OmniSyn",
    description: "Informações de contato da OmniSyn.",
    eyebrow: "Contato",
    heading: "Fale com a OmniSyn",
    body: "Entre em contato com a equipe OmniSyn por telefone ou e-mail.",
    links: [{ href: "tel:+553492025940", label: "34 9202-5940" }, { href: "mailto:omnisyndev@gmail.com", label: "omnisyndev@gmail.com" }]
  },
  "estudos-de-caso/index.html": {
    title: "Projetos | OmniSyn",
    description: "Conheça as frentes de tecnologia agrícola da OmniSyn.",
    eyebrow: "Projetos",
    heading: "Tecnologia em desenvolvimento",
    body: "Os estudos de caso e resultados de campo da OmniSyn serão publicados após validação e autorização das organizações envolvidas.",
    links: [{ href: "/pt-br/pd/", label: "Conheça as frentes de P&D" }]
  },
  "etica-e-compliance/index.html": {
    title: "Ética e integridade | OmniSyn",
    description: "Informações institucionais sobre ética e integridade na OmniSyn.",
    eyebrow: "Ética e integridade",
    heading: "Compromissos em preparação",
    body: "As diretrizes e os canais formais de ética e integridade da OmniSyn estão em preparação. Este conteúdo não constitui um código ou uma política vigente.",
    links: [{ href: "/pt-br/governanca/", label: "Conheça a governança" }]
  },
  "florestal/index.html": {
    title: "Tecnologia agrícola | OmniSyn",
    description: "Frentes de tecnologia agrícola da OmniSyn.",
    eyebrow: "Tecnologia agrícola",
    heading: "Tecnologia para diferentes operações",
    body: "As frentes de tecnologia da OmniSyn são desenvolvidas para apoiar o acompanhamento das atividades agrícolas e podem ser adaptadas às necessidades de cada operação.",
    links: [{ href: "/projetos/omnicore/", label: "Conheça o OmniCore" }]
  },
  "impacto/index.html": {
    title: "Pesquisa e desenvolvimento | OmniSyn",
    description: "Frentes de pesquisa e desenvolvimento em tecnologia agrícola da OmniSyn.",
    eyebrow: "Pesquisa e desenvolvimento",
    heading: "Tecnologia desenvolvida para a realidade do campo",
    body: "A OmniSyn explora soluções que conectam máquinas, dados e práticas agrícolas. As frentes de P&D incluem monitoramento do solo, irrigação inteligente, análise de dados e aplicação precisa de insumos.",
    links: [{ href: "/pt-br/pd/", label: "Ver projetos de P&D" }]
  },
  "noticias-brasil-e-da-america-latina/index.html": {
    title: "Atualizações | OmniSyn",
    description: "Atualizações institucionais da OmniSyn.",
    eyebrow: "Atualizações",
    heading: "Novidades da OmniSyn",
    body: "As notícias, comunicados e atualizações institucionais da OmniSyn serão publicados aqui após validação.",
    links: [{ href: "/pt-br/pd/", label: "Conheça nossos projetos" }]
  },
  "operacoes-de-agronomia-latam-2/index.html": {
    title: "Operação agrícola | OmniSyn",
    description: "Tecnologia OmniSyn para apoiar a operação agrícola.",
    eyebrow: "Operação agrícola",
    heading: "Tecnologia conectada à rotina do campo",
    body: "As frentes de tecnologia OmniSyn abrangem pilotagem de precisão, plantio, monitoramento do solo e integração de dados para apoiar o acompanhamento das atividades agrícolas.",
    links: [{ href: "/projetos/omnicore/", label: "Conheça o OmniCore" }]
  },
  "politica-de-privacidade/index.html": {
    title: "Privacidade | OmniSyn",
    description: "Informações sobre privacidade no site da OmniSyn.",
    eyebrow: "Privacidade",
    heading: "Conteúdo em preparação",
    body: "A política de privacidade oficial da OmniSyn ainda não está publicada. Esta página não constitui uma política vigente; evite enviar dados pessoais por este site até que os canais e avisos apropriados estejam disponíveis.",
    links: []
  },
  "sobre-2/index.html": {
    title: "Sobre a OmniSyn",
    description: "Conheça a OmniSyn e sua proposta de tecnologia para a operação agrícola.",
    eyebrow: "Quem somos",
    heading: "Tecnologia para a operação agrícola",
    body: "A OmniSyn desenvolve tecnologia orientada aos desafios do campo. O OmniCore reúne frentes de pilotagem automática, monitoramento do solo, plantio preciso e saúde do solo.",
    links: [{ href: "/projetos/omnicore/", label: "Conheça o OmniCore" }]
  },
  "solucoes-agtech/index.html": {
    title: "Soluções agrícolas | OmniSyn",
    description: "Conheça as frentes de tecnologia agrícola da OmniSyn.",
    eyebrow: "Soluções OmniSyn",
    heading: "Tecnologia para a operação agrícola",
    body: "O OmniCore reúne frentes de pilotagem automática, monitoramento do solo, plantio preciso e saúde do solo em uma proposta integrada para o campo.",
    links: [{ href: "/projetos/omnicore/", label: "Conheça o OmniCore" }]
  },
  "solucoes-agtech/solucoes-america-do-norte/index.html": {
    title: "Soluções agrícolas | OmniSyn",
    description: "Frentes de tecnologia agrícola da OmniSyn.",
    eyebrow: "Soluções agrícolas",
    heading: "Tecnologia adaptável à operação",
    body: "A OmniSyn desenvolve frentes de tecnologia para apoiar o monitoramento e a execução das atividades agrícolas. A disponibilidade de soluções pode variar conforme o estágio de desenvolvimento e a operação.",
    links: [{ href: "/projetos/omnicore/", label: "Conheça o OmniCore" }]
  },
  "sustentabilidade/index.html": {
    title: "Pesquisa e desenvolvimento | OmniSyn",
    description: "Frentes de pesquisa e desenvolvimento em tecnologia agrícola da OmniSyn.",
    eyebrow: "Pesquisa e desenvolvimento",
    heading: "Tecnologia desenvolvida para a realidade do campo",
    body: "A OmniSyn explora soluções que conectam máquinas, dados e práticas agrícolas. As frentes de P&D incluem monitoramento do solo, irrigação inteligente, análise de dados e aplicação precisa de insumos.",
    links: [{ href: "/pt-br/pd/", label: "Ver projetos de P&D" }]
  },
  "varejistas-agricolas/index.html": {
    title: "Tecnologia agrícola | OmniSyn",
    description: "Frentes de tecnologia agrícola da OmniSyn.",
    eyebrow: "Tecnologia agrícola",
    heading: "Tecnologia para diferentes operações",
    body: "A OmniSyn desenvolve frentes de tecnologia para apoiar o acompanhamento de atividades agrícolas e a integração de dados de operação.",
    links: [{ href: "/projetos/omnicore/", label: "Conheça o OmniCore" }]
  }
};

const pageMetadata = {
  "governanca/index.html": {
    title: "Governança | OmniSyn",
    description: "Conheça os princípios de governança da OmniSyn."
  },
  "nosso-time/index.html": {
    title: "Nosso time | OmniSyn",
    description: "Conheça a equipe da OmniSyn."
  },
  "pd/index.html": {
    title: "P&D | OmniSyn",
    description: "Projetos de pesquisa e desenvolvimento da OmniSyn para a realidade do campo."
  }
};

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function removeLegacyExternalLinks(html) {
  const legacyAnchor = /<a\b[^>]*href=(["'])([^"']*(?:solinftec\.com|instagram\.com\/solinftec|linkedin\.com\/company\/3563964|youtube\.com\/@Solinftec)[^"']*)\1[^>]*>/i;
  let updated = html;
  let match = legacyAnchor.exec(updated);
  while (match) {
    const anchorStart = match.index;
    const anchorEnd = updated.indexOf("</a>", anchorStart);
    if (anchorEnd === -1) throw new Error("Unclosed legacy external link");
    const itemStart = updated.lastIndexOf("<li", anchorStart);
    const itemEnd = updated.indexOf("</li>", anchorEnd);
    if (itemStart !== -1 && itemEnd !== -1) {
      updated = updated.slice(0, itemStart) + updated.slice(itemEnd + 5);
    } else {
      updated = updated.slice(0, anchorStart) + updated.slice(anchorEnd + 4);
    }
    match = legacyAnchor.exec(updated);
  }
  updated = updated.replace(/<li\b[^>]*>\s*<ul\b[^>]*>\s*<\/ul>\s*<\/li>/gi, "");
  return updated;
}

const generatedSolutionRoutes = new Set([
  "omnicore",
  "omnisoil",
  "omniguide",
  "omniseed"
]);

async function normalizeReferencePages(root, base = root) {
  const entries = await readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) {
      if (root === base && generatedSolutionRoutes.has(entry.name)) continue;
      await normalizeReferencePages(path, base);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".html")) continue;

    const relativePath = path.slice(base.length + 1).replaceAll("\\", "/");
    const route = `/pt-br/${relativePath.replace(/index\.html$/, "")}`;
    const editorial = neutralPages[relativePath];
    const metadata = editorial ?? pageMetadata[relativePath];
    if (!metadata) throw new Error(`Missing OmniSyn page metadata for ${relativePath}`);

    const html = await readFile(path, "utf8");
    let updated = html
      .replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, `<title>${metadata.title}</title>`)
      .replace(/<meta\s+name=['"]description['"][^>]*>/i, `<meta name="description" content="${escapeAttribute(metadata.description)}" />`)
      .replace(/<meta\s+property=['"]og:title['"][^>]*>/i, `<meta property="og:title" content="${escapeAttribute(metadata.title)}" />`)
      .replace(/<meta\s+property=['"]og:description['"][^>]*>/i, `<meta property="og:description" content="${escapeAttribute(metadata.description)}" />`)
      .replace(/<meta\s+property=['"]og:site_name['"][^>]*>/i, '<meta property="og:site_name" content="OmniSyn" />')
      .replace(/<meta\s+property=['"]og:url['"][^>]*>/i, "")
      .replace(/<link\b[^>]*rel=['"]canonical['"][^>]*>/i, "")
      .replace(/<a\b[^>]*href=['"][^'"]*#content[^'"]*['"][^>]*>\s*Skip to Main Content\s*<\/a>/i, `<a href="${route}#content">Skip to Main Content</a>`)
      .replace(/<link\b(?=[^>]*rel=['"]icon['"])(?=[^>]*www\.solinftec\.com)[^>]*>/gi, "")
      .replace(/<link\b(?=[^>]*rel=['"]preload['"])(?=[^>]*href=['"][^'"]*www\.solinftec\.com[^'"]*['"])[^>]*>/gi, "")
      .replace(/<!-- global blocks -->[\s\S]*?<!-- \/global blocks -->/gi, "")
      .replace(/background-image\s*:\s*url\(\s*['"]?(?:https?:)?\/\/www\.solinftec\.com[^)]*\)(?:\s*!important)?/gi, "background-image:none")
      .replace(/srcset=['"][^'"]*www\.solinftec\.com[^'"]*['"]/gi, "")
      .replace(/\sdata-et-multi-view="[^"]*"/gi, "")
      .replace(/\sdata-et-multi-view-load-[^=\s]+="[^"]*"/gi, "");

    updated = updated.replace(/<img\b[^>]*\bsrc=['"]https?:\/\/www\.solinftec\.com\/[^'"]*['"][^>]*>/gi, "");
    updated = removeLegacyExternalLinks(updated);
    if (relativePath === "pd/index.html") {
      updated = updated
        .replace(/<!DOCTYPE html>\s*<html lang="en">\s*<head>[\s\S]*?<title>Document<\/title>/i, "")
        .replace(/<\/head>\s*<body>/i, "")
        .replace(/<\/body>\s*<\/html>/i, "");
    }

    if (editorial) {
      const links = editorial.links.map(link =>
        `<a class="omnisyn-neutral-link" href="${link.href}">${link.label}</a>`
      ).join("");
      const content = `<div class="entry-content"><main class="omnisyn-neutral-page">
  <p class="omnisyn-neutral-eyebrow">${editorial.eyebrow}</p>
  <h1>${editorial.heading}</h1>
  <p>${editorial.body}</p>
  ${links ? `<nav aria-label="Mais informa&ccedil;&otilde;es">${links}</nav>` : ""}
</main></div> <!-- .entry-content -->`;
      const entryContent = /<div class="entry-content">[\s\S]*?<!-- \.entry-content -->/i;
      if (!entryContent.test(updated)) throw new Error(`Could not find entry content in ${relativePath}`);
      updated = updated.replace(entryContent, content);
    }

    updated = updated.replace(headerPattern, () => sharedHeader).replace(footerPattern, () => sharedFooter);
    if (updated !== html) await writeFile(path, updated, "utf8");
  }
}

const homePath = join(process.cwd(), "public/previa-solinftec.html");
const homeHtml = await readFile(homePath, "utf8");
const updatedHome = removeLegacyExternalLinks(homeHtml)
  .replace(/<link\b(?=[^>]*rel=['"]icon['"])(?=[^>]*www\.solinftec\.com)[^>]*>/gi, "")
  .replace(/<link\b(?=[^>]*rel=['"]preload['"])(?=[^>]*href=['"][^'"]*www\.solinftec\.com[^'"]*['"])[^>]*>/gi, "")
  .replace(/<meta\b(?=[^>]*name=['"]msapplication-TileImage['"])(?=[^>]*www\.solinftec\.com)[^>]*>/gi, "")
  .replace(/<link\b(?=[^>]*(?:href|rel)=['"][^'"]*(?:xmlrpc\.php|wp-json|oembed|\/feed\/|comments\/feed|api\.w\.org)[^'"]*['"])[^>]*>/gi, "");
await writeFile(new URL("../out/index.html", import.meta.url), updatedHome, "utf8");

const headerPattern = /<header id="main-header"[^>]*>[\s\S]*?<\/header>/i;
const footerPattern = /<footer\b[^>]*>[\s\S]*?<\/footer>/i;
const sharedHeader = updatedHome.match(headerPattern)[0];
const sharedFooter = updatedHome.match(footerPattern)[0];
await normalizeReferencePages(join(process.cwd(), "out/reference-pages/pt-br"));
await cp(new URL("../out/reference-pages/pt-br/", import.meta.url), new URL("../out/pt-br/", import.meta.url), {
  recursive: true,
  force: true,
  filter: source => !/[\\/]pt-br[\\/](?:omnicore|omnisoil|omniguide|omniseed)(?:[\\/]|$)/.test(source)
});
