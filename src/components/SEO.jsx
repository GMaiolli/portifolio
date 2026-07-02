import { useEffect } from "react";

/**
 * SEO
 * Componente leve para SEO básico por página: atualiza o <title> do documento
 * e a meta tag "description" sempre que a rota muda.
 *
 * Optamos por implementar isso com um useEffect simples em vez de adicionar
 * uma dependência externa (como react-helmet-async), já que o projeto é uma
 * SPA pequena e essa abordagem cobre as necessidades de SEO sem aumentar o
 * tamanho do bundle, uma decisão de arquitetura documentada no relatório
 * técnico.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
