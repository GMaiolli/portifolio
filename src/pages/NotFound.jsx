import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Página não encontrada - 404" description="A página que você procura não existe." />

      <section className="mx-auto flex min-h-[70vh] max-w-content flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-sm text-accent-bright">// erro 404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
          Esta página não existe.
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded border border-border px-5 py-3 font-mono text-sm text-muted transition-colors hover:border-border-strong hover:text-ink"
        >
          voltar para o início
        </Link>
      </section>
    </>
  );
}
