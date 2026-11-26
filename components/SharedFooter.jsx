import { readFileSync } from "node:fs";
import { join } from "node:path";

const home = readFileSync(join(process.cwd(), "public/previa-solinftec.html"), "utf8");
const content = home.match(/<footer id="main-footer"[^>]*>([\s\S]*?)<\/footer>/)[1];

export default function SharedFooter() {
  return <>
    <link rel="stylesheet" href="/omnisyn-reference-theme.css" precedence="site-theme"/>
    <footer id="main-footer" className="omnisyn-home-footer" dangerouslySetInnerHTML={{ __html: content }}/>
  </>;
}
