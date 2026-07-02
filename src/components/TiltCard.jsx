import { useRef } from "react";

/**
 * TiltCard
 * Efeito interativo 2: inclinação sutil (tilt) e brilho que acompanham a
 * posição do cursor do mouse sobre o card. Implementado com JavaScript puro
 * (sem bibliotecas externas), calculando a posição relativa do mouse dentro
 * do elemento e aplicando uma transformação 3D via CSS.
 *
 * O brilho (radial-gradient) é controlado pelas variáveis CSS --mx/--my,
 * definidas em .tilt-card no arquivo src/index.css.
 */
export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Posição percentual do cursor dentro do card, usada pelo brilho radial.
    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);

    // Inclinação (tilt) proporcional à distância do centro do card.
    // Faixa pequena (±4deg) para manter o efeito discreto e minimalista.
    const centerX = x / rect.width - 0.5;
    const centerY = y / rect.height - 0.5;
    const rotateX = (-centerY * 8).toFixed(2);
    const rotateY = (centerX * 8).toFixed(2);

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
