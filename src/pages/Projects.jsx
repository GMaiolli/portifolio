import { Github, ExternalLink, FileText } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import TiltCard from "../components/TiltCard.jsx";
import profile from "../data/profile.js";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <>
      <SEO
        title={`Projetos - ${profile.name}`}
        description={`Projeto acadêmico de ${profile.name} com artigo publicado na SODEBRAS e código no GitHub.`}
      />

      <section className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <p className="font-mono text-sm text-accent-bright">// projetos</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Alguns trabalhos recentes
          </h1>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            Projeto acadêmico com artigo publicado e código disponível no GitHub.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <TiltCard className="h-full rounded border border-border bg-surface p-6">
                <p className="font-mono text-xs text-muted">{project.id}</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-border-strong px-2 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-ink hover:text-accent-bright"
                    aria-label={`Repositório do projeto ${project.title} no GitHub`}
                  >
                    <Github size={14} aria-hidden="true" />
                    código
                  </a>
                  {project.pdfUrl && (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-ink hover:text-accent-bright"
                      aria-label={`Artigo em PDF do projeto ${project.title}`}
                    >
                      <FileText size={14} aria-hidden="true" />
                      artigo
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-ink hover:text-accent-bright"
                      aria-label={`Demonstração ao vivo do projeto ${project.title}`}
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      demo
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
