import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * Em uma SPA (Single Page Application), o React Router troca o conteúdo da
 * página sem recarregar o navegador, o que significa que a posição de
 * rolagem da página anterior é mantida por padrão. Este componente corrige
 * esse comportamento, levando o usuário ao topo sempre que a rota muda.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "auto" faz o salto ser instantâneo, evitando concorrer com o
    // "scroll-behavior: smooth" usado para os links internos (âncoras).
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
