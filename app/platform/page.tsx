import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { platformPages } from "@/lib/platform-pages";
export const metadata: Metadata = { title: "Platform", description: "Explore Orbet’s connected booking, venue, sales, kitchen and payment tools." };
export default function PlatformPage() {
  return <div className="bg-[#0d0f12] min-h-screen pt-40 pb-24 px-6 lg:px-10"><div className="max-w-7xl mx-auto"><p className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest mb-5">One connected platform</p><h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Every part of your day.<br /><span className="text-zinc-400">Working together.</span></h1><p className="text-zinc-300 max-w-2xl leading-relaxed mt-6">Explore the tools behind Orbet, from the first online booking to the last order of the day.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">{platformPages.map(page => <Link key={page.slug} href={`/platform/${page.slug}`} className="rounded-3xl border border-zinc-700 bg-[#191d23] p-8 hover:border-zinc-500"><span className="text-xs text-zinc-400">{page.plan}</span><h2 className="text-2xl font-bold mt-5">{page.name}</h2><p className="mt-4 text-sm text-zinc-300 leading-relaxed">{page.intro}</p><span className="inline-flex items-center gap-2 mt-7 text-sm font-bold">Explore <ArrowUpRight size={17} /></span></Link>)}</div></div></div>;
}
