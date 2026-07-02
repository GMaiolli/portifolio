import { FileText, ExternalLink } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import profile from "../data/profile.js";

export default function About() {
  return (
    <>
      <SEO
        title={`Sobre - ${profile.name}`}
        description={`Conheça a trajetória de ${profile.name}, ${profile.role}, e o artigo científico publicado na SODEBRAS.`}
      />

      <section className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <p className="font-mono text-sm text-accent-bright">// sobre</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Um pouco da minha trajetória
          </h1>
        </Reveal>

        <div className="mt-8 space-y-5">
          {profile.bio.map((paragraph, index) => (
            <Reveal key={index} delay={index * 100}>
              <p className="leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        {/* Publicação científica em destaque */}
        <Reveal delay={150}>
          <div className="mt-12 rounded border border-border bg-surface p-6">
            <div className="flex items-start gap-4">
              <FileText className="mt-1 shrink-0 text-accent-bright" size={24} aria-hidden="true" />
              <div>
                <p className="font-mono text-xs text-accent-bright">// publicação científica</p>
                <h2 className="mt-1 font-display text-xl font-semibold text-ink">
                  {profile.publication.title}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {profile.publication.journal} · {profile.publication.year}
                </p>
                <p className="mt-3 leading-relaxed text-muted">{profile.publication.description}</p>
                <a
                  href={profile.publication.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-ink underline decoration-accent underline-offset-4 hover:text-accent-bright"
                >
                  Ler artigo em PDF
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Habilidades */}
        <Reveal delay={200}>
          <div className="mt-14">
            <p className="font-mono text-xs text-accent-bright">// tecnologias</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-border px-3 py-1.5 font-mono text-sm text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
