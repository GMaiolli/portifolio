import { Braces, Database, Workflow, Sparkles } from 'lucide-react';

const nodes = [
  { Icon: Braces, label: 'Software', position: 'left-4 top-12 sm:left-10 sm:top-16', color: 'text-[#b6a5ff]' },
  { Icon: Database, label: 'Dados', position: 'right-2 top-10 sm:right-10 sm:top-16', color: 'text-[#6ed7bd]' },
  { Icon: Workflow, label: 'Sistemas', position: 'left-2 bottom-8 sm:left-12 sm:bottom-14', color: 'text-[#6ed7bd]' },
  { Icon: Sparkles, label: 'IA aplicada', position: 'right-4 bottom-8 sm:right-10 sm:bottom-14', color: 'text-[#b6a5ff]' },
];
export default function HeroVisual() {
  return <div aria-hidden="true" className="grid-lines relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-[2rem] border border-border bg-[radial-gradient(circle_at_center,#222449_0%,#111932_46%,#0b1125_77%)] shadow-[0_30px_100px_rgba(53,40,104,.25)]">
    <div className="orbit left-[10%] top-[10%] h-[80%] w-[80%]" /><div className="orbit left-[22%] top-[22%] h-[56%] w-[56%]" />
    <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-accent/70 bg-[#241d4f] text-center font-display text-3xl font-bold shadow-[0_0_60px_rgba(143,117,255,.32)] sm:h-40 sm:w-40"><span>GM<span className="text-[#6ed7bd]">.</span></span></div>
    {nodes.map(({ Icon, label, position, color }) => <div key={label} className={`absolute ${position} flex items-center gap-2 rounded-xl border border-border-strong bg-[#151b34]/95 px-3 py-2 text-xs font-medium text-ink shadow-xl sm:px-4 sm:py-3 sm:text-sm`}><Icon className={color} size={18} />{label}</div>)}
    <span className="absolute left-1/2 top-[12%] h-2 w-2 rounded-full bg-[#6ed7bd] shadow-[0_0_18px_#6ed7bd]" /><span className="absolute bottom-[13%] left-1/2 h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_#a891ff]" />
  </div>;
}
