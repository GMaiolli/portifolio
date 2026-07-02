import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Hook responsável pelo efeito interativo de "revelação ao rolar a página".
 * Usa a Intersection Observer API (nativa do navegador) para detectar quando
 * um elemento entra na viewport e então marca isVisible como true, disparando
 * a transição CSS definida em .reveal / .reveal.is-visible (src/index.css).
 *
 * Optamos por Intersection Observer em vez de escutar o evento "scroll"
 * diretamente por ser mais performático: o navegador só notifica o
 * componente quando a visibilidade do elemento realmente muda, sem exigir
 * cálculos manuais a cada pixel rolado.
 */
export default function useScrollReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Após revelar uma vez, não precisamos mais observar o elemento.
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isVisible };
}
