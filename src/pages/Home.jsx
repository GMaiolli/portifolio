import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import profile from "../data/profile.js";

export default function Home() {
  return (
    <>
      <SEO
        title={`${profile.name} - ${profile.role}`}
        description={`Portfólio de ${profile.name}, ${profile.role}. Conheça projetos, artigo científico publicado na SODEBRAS e formas de contato.`}
      />

      <section className="mx-auto flex min-h-[80vh] max-w-content flex-col justify-center px-6 py-20">
        <p className="mb-4 font-mono text-sm text-accent-bright">$ whoami</p>

        <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl">
          {profile.name}
          <span className="blinking-cursor" aria-hidden="true"> </span>
        </h1>

        <p className="mt-4 font-mono text-lg text-muted sm:text-xl">{profile.role}</p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projetos"
            className="group inline-flex items-center gap-2 rounded border border-accent bg-accent-dim px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-accent-bright hover:bg-accent/20"
          >
            ver projetos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded border border-border px-5 py-3 font-mono text-sm text-muted transition-colors hover:border-border-strong hover:text-ink"
          >
            entrar em contato
          </Link>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3">
          <Reveal delay={0}>
            <p className="font-mono text-xs text-accent-bright">// localização</p>
            <p className="mt-2 text-ink">{profile.location}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono text-xs text-accent-bright">// atuação atual</p>
            <p className="mt-2 text-ink">{profile.company.name}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-mono text-xs text-accent-bright">// publicação</p>
            <Link to="/sobre" className="mt-2 block text-ink underline decoration-accent underline-offset-4 hover:text-accent-bright">
              Artigo na SODEBRAS
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
