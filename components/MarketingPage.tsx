import type { ReactNode } from "react";
export default function MarketingPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <div className="min-h-screen bg-[#0d0f12] pt-36 md:pt-44 pb-24 px-6 lg:px-10"><div className="max-w-7xl mx-auto"><header className="max-w-3xl mb-12"><p className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest mb-5">{eyebrow}</p><h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1><p className="text-zinc-300 leading-relaxed mt-6">{intro}</p></header>{children}</div></div>;
}
