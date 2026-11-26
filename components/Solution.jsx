import Link from "next/link";
import { notFound } from "next/navigation";
import SharedHeader from "./SharedHeader";
import SharedFooter from "./SharedFooter";
import { products, coreSlug, productHighlights, proposedScopes } from "./product-pages";
import "./solution-page.css";

export function solutionMetadata(slug) {
  const product = products[slug];
  if (!product) return {};
  const title = product.name + " | OmniSyn Technologies";
  return { title, description: product.intro, openGraph: { title, description: product.intro } };
}

export function Solution({ slug }) {
  const product = products[slug];
  if (!product) notFound();
  const core = slug === coreSlug;
  const highlight = productHighlights[product.name];
  const scope = proposedScopes[slug];
  const contact = process.env.OMNISYN_CONTACT_URL;
  return <div className="solution-site">
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <SharedHeader/>
    <main id="conteudo">
      <section className="solution-hero solution-hero-photo" style={{"--solution-background": "url(/" + product.name.toLowerCase() + "-fundo.webp)"}}><div className="frame">
        <nav className="solution-crumb" aria-label="Localização"><a href="/">Início</a><a href="/#solucoes">Soluções</a><span aria-current="page">{product.name}</span></nav>
        <div className="product-hero-layout">
          <div><h1>{product.headline}</h1><p>{product.intro}</p>
            <a className="solution-action" href="#funcionalidades">Ver aplicação no campo</a>
          </div>
          <div className="product-orbit" aria-label={product.title}>
            <strong>Omni<span>{product.name.slice(4)}</span></strong>
            {product.orbitTerms.map((term, index) => <span className="orbit-term" key={term} style={{animationDelay: `-${index * 20 + 5}s`}}>{term}</span>)}
          </div>
        </div>
      </div></section>
      {scope ? <section className="frame solution-content" id="funcionalidades">
        <h2>Escopo proposto</h2>
        <p className="scope-question">{scope.question}</p>
        <table className="scope-table">
          <thead><tr><th scope="col">Parte da solução</th><th scope="col">Como funcionaria</th></tr></thead>
          <tbody>{scope.rows.map(([title, description]) => <tr key={title}><th scope="row">{title}</th><td>{description}</td></tr>)}</tbody>
        </table>
        <aside className="scope-example"><h3>Exemplo no campo</h3><p>{scope.example}</p></aside>
      </section> :
      <section className="frame solution-content" id="funcionalidades">
        <h2>Uma situação de campo</h2><p>{product.scenario}</p>
        {slug === "omniseed" && <figure className="seed-measures" aria-label="Esquema de espaçamento e profundidade">
          <div className="seed-spacing">← Espaçamento →</div>
          <div className="seed-soil"><span>↕ Profundidade</span><i/><i/></div>
          <figcaption>Espaçamento medido entre sementes. Profundidade medida da superfície até a semente.</figcaption>
        </figure>}
        <ol className="solution-steps">{product.steps.map(([title,description])=><li key={title}><h3>{title}</h3><p>{description}</p></li>)}</ol>
      </section>}
      <section className="solution-highlight">
        <div className="frame solution-grid">
          <div><h2>{highlight.headline}</h2><p>{highlight.description}</p></div>
          <figure className="solution-figure">
            <img src={highlight.image} alt={highlight.alt} loading="lazy"/>
            <figcaption>Imagem ilustrativa de aplicação no campo</figcaption>
          </figure>
        </div>
      </section>
      <section className="frame solution-content">
        <h2>Vantagens no campo</h2>
        <div className="solution-advantage-grid">
          {highlight.advantages.map(([title, description]) => <article key={title}>
            <h3>{title}</h3><p>{description}</p>
          </article>)}
        </div>
      </section>
      {core && <section className="solution-family"><div className="frame solution-content">
        <h2>As três soluções do OmniCore</h2>
        <div className="solution-steps solution-family-grid">{Object.entries(products).filter(([key])=>key!==coreSlug).map(([key,item])=><article key={key}><h3>{item.name}</h3><p>{item.title}</p><Link href={'/pt-br/'+key+'/'}>Conhecer {item.name} →</Link></article>)}</div>
      </div></section>}
      <section className="solution-close"><div className="frame">
        <h2>{core ? "OmniCore na operação agrícola" : "Integração com o OmniCore"}</h2>
        {!core && <Link className="solution-action" href={'/pt-br/'+coreSlug+'/'}>Conhecer o OmniCore</Link>}
        {contact && <a className="solution-action" href={contact}>Conversar sobre {product.name}</a>}
        {core && !contact && <Link className="solution-action" href="/#solucoes">Explorar soluções</Link>}
      </div></section>
    </main>
    <SharedFooter/>
  </div>;
}
