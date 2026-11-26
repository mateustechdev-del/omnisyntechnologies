import SharedHeader from "../components/SharedHeader";
import SharedFooter from "../components/SharedFooter";
import "../components/solution-page.css";

export default function NotFound() {
  return <div className="solution-site"><SharedHeader/>
    <main className="frame solution-content"><h1>Página não encontrada</h1><a className="solution-action" href="/">Voltar ao início</a></main>
    <SharedFooter/></div>;
}
