import { Github, Linkedin, FileText } from "lucide-react";
import profile from "../data/profile.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name.replace(/[[\]]/g, "")}. Construído com React e Tailwind CSS.
        </p>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={profile.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil no GitHub"
              className="text-muted transition-colors hover:text-accent-bright"
            >
              <Github size={18} />
            </a>
          </li>
          <li>
            <a
              href={profile.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil no LinkedIn"
              className="text-muted transition-colors hover:text-accent-bright"
            >
              <Linkedin size={18} />
            </a>
          </li>
          <li>
            <a
              href={profile.publication.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Artigo científico publicado na SODEBRAS (PDF)"
              className="text-muted transition-colors hover:text-accent-bright"
            >
              <FileText size={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
