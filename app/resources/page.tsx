import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MarketingPage from "@/components/MarketingPage";
import { resources } from "@/lib/resources";
export const metadata: Metadata = { title: "Resources", description: "Getting started, choosing an Orbet plan and preparing your payment integrations." };
export default function ResourcesPage() { return <MarketingPage eyebrow="A little more clarity" title="A good place to start." intro="Practical overviews to help you plan your Orbet setup, choose your tools and understand what comes next."><div className="grid md:grid-cols-3 gap-5">{resources.map(item => <Link key={item.slug} href={`/resources/${item.slug}`} className="rounded-3xl border border-zinc-700 bg-[#191d23] p-8 hover:border-zinc-500"><p className="text-xs uppercase tracking-widest text-zinc-400">Guide</p><h2 className="text-2xl font-bold mt-5">{item.title}</h2><p className="text-sm leading-relaxed text-zinc-300 mt-4">{item.description}</p><span className="inline-flex gap-2 items-center mt-7 text-sm font-bold">Read guide <ArrowUpRight size={17} /></span></Link>)}</div><div className="mt-12 border-t border-zinc-700 pt-8 flex flex-wrap gap-6 text-sm font-bold"><Link href="/faq">Frequently asked questions →</Link><Link href="/support">Get support →</Link></div></MarketingPage>; }
