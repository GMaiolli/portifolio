import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import Research from './pages/Research';

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const research = pathname.startsWith('/projetos/');
    document.title = research ? 'Pesquisa NDVI e CNN | Gabriel Maiolli' : 'Gabriel Maiolli | Software, automação e IA';
    document.querySelector('meta[name="description"]')?.setAttribute('content', research
      ? 'Estudo de caso da pesquisa publicada por Gabriel Maiolli sobre NDVI, imagens Sentinel-2, Google Earth Engine e redes neurais convolucionais.'
      : 'Gabriel Maiolli: desenvolvimento Full Stack, Linux, APIs, automação e IA. Disponível para oportunidades de trabalho e projetos freelancer.');
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return <div className="min-h-screen"><a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:p-3 focus:text-bg" href="#conteudo">Pular para o conteúdo</a><RouteEffects /><SiteHeader /><main id="conteudo"><Routes><Route path="/" element={<Home />} /><Route path="/projetos/pesquisa-ndvi-cnn" element={<Research />} /><Route path="*" element={<div className="section-shell min-h-[60vh]"><h1 className="section-title">Página não encontrada</h1><a className="text-link mt-8" href="/">Voltar ao início</a></div>} /></Routes></main><SiteFooter /></div>;
}
