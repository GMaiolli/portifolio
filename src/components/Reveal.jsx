import useScrollReveal from "../hooks/useScrollReveal.js";

/**
 * Reveal
 * Componente utilitário que envolve qualquer conteúdo e aplica o efeito de
 * revelação ao rolar a página (ver useScrollReveal.js e .reveal em index.css).
 *
 * Uso: <Reveal delay={100}><h2>Título</h2></Reveal>
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
