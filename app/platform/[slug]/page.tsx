import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CalendarDays, Building2, Monitor, ChefHat, CreditCard, Check } from "lucide-react";
import { platformPages } from "@/lib/platform-pages";

const icons = { CalendarDays, Building2, Monitor, ChefHat, CreditCard };
export function generateStaticParams() { return platformPages.map(page => ({ slug: page.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = platformPages.find(page => page.slug === slug);
  return { title: page?.name ?? "Platform", description: page?.intro };
}
export default async function PlatformDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = platformPages.find(page => page.slug === slug);
  if (!page) notFound();
  const Icon = icons[page.icon as keyof typeof icons];
  return <div className="bg-[#0d0f12] text-zinc-100 pb-24">
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 md:pt-44 pb-20">
      <Link href="/platform" className="text-xs text-zinc-400 hover:text-white">Platform / {page.name}</Link>
      <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 items-center mt-10">
        <div><p className="text-xs uppercase tracking-widest font-bold text-[#C8FF00] mb-5">{page.eyebrow}</p><h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{page.title}<br /><span className="text-zinc-400">{page.accent}</span></h1><p className="text-zinc-300 leading-relaxed mt-6 max-w-2xl">{page.intro}</p><div className="flex flex-wrap gap-4 mt-8"><Link href="/pricing" className="bg-[#C8FF00] text-black px-6 py-3 rounded-full font-bold text-sm">Explore plans</Link><Link href="/contact" className="border border-zinc-600 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/5">Talk to us</Link></div></div>
        <aside className="rounded-3xl border border-zinc-700 bg-[#191d23] p-8 md:p-10"><Icon size={36} className="text-zinc-200" /><h2 className="text-2xl font-bold mt-8">{page.name}</h2><p className="inline-block border border-zinc-600 text-zinc-300 rounded-full px-3 py-1 text-xs mt-4">{page.plan}</p><ul className="mt-7 space-y-4">{page.features.slice(0,3).map(feature => <li key={feature.title} className="flex gap-3 items-start text-sm text-zinc-300"><Check size={17} className="shrink-0 mt-0.5" />{feature.title}</li>)}</ul></aside>
      </div>
    </section>
    <section className="max-w-7xl mx-auto px-6 lg:px-10"><h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">The tools behind the experience.</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{page.features.map(feature => <article key={feature.title} className="rounded-3xl border border-zinc-700/60 bg-[#191d23] p-7"><h3 className="text-lg font-bold">{feature.title}</h3><p className="text-zinc-300 text-sm leading-relaxed mt-4">{feature.copy}</p></article>)}</div></section>
    <section className="my-20 bg-[#e8eae5] text-zinc-900"><div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-20"><p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-5">How it comes together</p><div className="grid md:grid-cols-3 gap-8">{page.steps.map((step, i) => <article key={step.title}><span className="font-mono text-sm text-zinc-500">0{i+1}</span><h2 className="text-2xl font-bold mt-4">{step.title}</h2><p className="text-zinc-600 mt-4 text-sm leading-relaxed">{step.copy}</p></article>)}</div></div></section>
    <section className="max-w-7xl mx-auto px-6 lg:px-10"><div className="rounded-3xl border border-zinc-700 bg-[#191d23] p-8 md:p-12"><h2 className="text-3xl font-extrabold tracking-tight">{page.detailTitle}</h2><p className="text-zinc-300 leading-relaxed mt-5 max-w-3xl">{page.detailCopy}</p><Link href="/pricing" className="inline-flex gap-2 items-center mt-7 font-bold text-sm text-[#C8FF00]">Compare Growth, Pro and Enterprise <ArrowUpRight size={17} /></Link></div><div className="mt-12"><h2 className="text-xl font-bold mb-5">Explore more of Orbet</h2><div className="flex flex-wrap gap-3">{platformPages.filter(other => other.slug!==slug).map(other => <Link key={other.slug} href={`/platform/${other.slug}`} className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:text-white hover:border-zinc-500">{other.name}</Link>)}</div></div></section>
  </div>;
}
