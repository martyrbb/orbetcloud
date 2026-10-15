import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarketingPage from "@/components/MarketingPage";
import { resources } from "@/lib/resources";
export function generateStaticParams() { return resources.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug }=await params; const item=resources.find(item=>item.slug===slug); return { title:item?.title??"Guide",description:item?.description }; }
export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) { const { slug }=await params;const item=resources.find(item=>item.slug===slug);if(!item)notFound();return <MarketingPage eyebrow="Orbet resources" title={item.title} intro={item.description}><div className="max-w-3xl space-y-5">{item.sections.map((section,i)=><section key={section.title} className="rounded-3xl border border-zinc-700 bg-[#191d23] p-7 md:p-9"><p className="font-mono text-xs text-zinc-500 mb-4">0{i+1}</p><h2 className="font-bold text-2xl">{section.title}</h2><p className="mt-4 text-zinc-300 leading-relaxed">{section.copy}</p></section>)}<div className="flex flex-wrap gap-5 pt-5 text-sm font-bold"><Link href="/resources">← All resources</Link><Link href="/pricing">Compare plans →</Link><Link href="/contact">Ask us a question →</Link></div></div></MarketingPage>; }
