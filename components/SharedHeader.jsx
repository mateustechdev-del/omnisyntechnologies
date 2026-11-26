import { readFileSync } from "node:fs";
import { join } from "node:path";
import Script from "next/script";

const home = readFileSync(join(process.cwd(), "public/previa-solinftec.html"), "utf8");
const head = home.split("</head>")[0];
const styles = [...head.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>|<link\b[^>]*>/gi)]
  .map(([tag]) => tag)
  .filter(tag => tag.startsWith("<style") || /rel=['"]stylesheet['"]/.test(tag))
  .join("\n");
const classes = home.match(/<body class="([^"]+)"/)[1];
const header = home.match(/<header id="main-header"[^>]*>[\s\S]*?<\/header>/)[0];

// Keep Home's cascade and its selector ancestry isolated from the product layout.
const markup = `<template shadowrootmode="open">${styles}
<style>:host{display:block;width:100%;min-width:0}#page-container{display:contents}#page-container>#main-header{position:relative!important;width:100%!important}
@media(min-width:981px){#main-header{font-size:18px}#main-header #et-top-navigation{padding-top:0}}
@media(max-width:980px){#main-header .et_menu_container{width:100%}#main-header .logo_container{padding-left:15px}#main-header #logo{position:relative;top:5px}#main-header #et-top-navigation{padding-right:15px}}
</style>
<div class="${classes}" id="home-header-body"><div id="page-container">${header}</div></div></template>`
  .replace(/(<style\b[^>]*>)([\s\S]*?)(<\/style>)/gi, (_, start, css, end) =>
    start + css.replace(/\bbody(?=[\s.,:#>{])/g, ":where(#home-header-body)").replaceAll(":root", ":host") + end);

export default function SharedHeader() {
  return <>
    <link rel="stylesheet" href="https://use.typekit.net/wwk6tbq.css"/>
    <div className="product-shared-header" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: markup }}/>
    <Script src="/omnisyn-menu.js" strategy="afterInteractive"/>
  </>;
}
