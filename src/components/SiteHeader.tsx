import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { href: '#sobre', label: 'Sobre' }, { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' }, { href: '#servicos', label: 'Serviços' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const home = pathname === '/';
  return <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-xl">
    <nav aria-label="Navegação principal" className="mx-auto flex h-20 max-w-content items-center justify-between gap-5 px-6">
      <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 font-display text-lg font-bold tracking-tight text-ink">
        <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/50 bg-accent-dim/50 text-accent-bright">gm<span className="text-[#6ed7bd]">.</span></span>
        <span className="hidden sm:inline">gabriel<span className="text-accent-bright">maiolli</span></span>
      </Link>
      <div className="hidden items-center gap-8 lg:flex">
        {links.map(link => <a key={link.href} href={`${home ? '' : '/'}${link.href}`} className="text-sm font-medium text-muted transition hover:text-ink">{link.label}</a>)}
      </div>
      <a className="button-secondary hidden text-sm sm:inline-flex" href={`${home ? '' : '/'}#contato`}>Vamos conversar <ArrowUpRight size={16} aria-hidden="true" /></a>
      <button type="button" className="rounded-md p-2 text-ink lg:hidden" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-controls="menu-mobile" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
    </nav>
    {open && <div id="menu-mobile" className="border-t border-border bg-surface px-6 py-3 lg:hidden">{links.map(link => <a key={link.href} href={`${home ? '' : '/'}${link.href}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-ink">{link.label}</a>)}<a href={`${home ? '' : '/'}#contato`} onClick={() => setOpen(false)} className="block py-3 text-accent-bright">Contato</a></div>}
  </header>;
}
