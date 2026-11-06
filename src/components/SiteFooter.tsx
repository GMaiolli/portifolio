import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/content';

export default function SiteFooter() {
  return <footer className="border-t border-border bg-[#090d1d]"><div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-9 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
    <p>© {new Date().getFullYear()} {profile.fullName}. Feito com atenção aos detalhes.</p>
    <div className="flex flex-wrap gap-5"><a className="hover:text-ink" href={`mailto:${profile.email}`}>E-mail <ArrowUpRight size={13} className="inline" /></a><a className="hover:text-ink" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} className="inline" /></a>{profile.github && <a className="hover:text-ink" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} className="inline" /></a>}</div>
  </div></footer>;
}
