import type { ReactNode } from 'react';

export default function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><span className="text-[#6ed7bd]">{number} /</span> {label}</p><h2 className="section-title text-ink">{title}</h2>{children && <p className="section-copy mt-5 max-w-2xl">{children}</p>}</div>;
}
