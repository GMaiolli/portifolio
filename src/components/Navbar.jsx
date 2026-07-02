import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import profile from "../data/profile.js";

const links = [
  { to: "/", label: "home" },
  { to: "/sobre", label: "sobre" },
  { to: "/projetos", label: "projetos" },
  { to: "/contato", label: "contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `font-mono text-sm tracking-tight transition-colors ${
      isActive ? "text-accent-bright" : "text-muted hover:text-ink"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Navegação principal"
      >
        <NavLink to="/" className="font-mono text-sm text-ink" aria-label="Ir para a página inicial">
          <span className="text-accent-bright">&gt;</span> {profile.name.replace(/[[\]]/g, "")}
        </NavLink>

        {/* Menu para telas maiores */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={linkClasses}>
                // {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botão do menu mobile */}
        <button
          type="button"
          className="text-ink md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <ul id="menu-mobile" className="flex flex-col gap-1 border-t border-border px-6 pb-6 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                <span className="block py-3">// {link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
