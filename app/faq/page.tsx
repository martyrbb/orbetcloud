import type { Metadata } from "next";
import Link from "next/link";
import MarketingPage from "@/components/MarketingPage";
import { publicFaqs } from "@/lib/resources";
export const metadata: Metadata={title:"Frequently asked questions",description:"Answers about Orbet plans, billing, branding, integrations and support."};
export default function FAQPage(){return <MarketingPage eyebrow="Questions, answered" title="A little more clarity." intro="Learn what’s included, how billing works and where to get help."><div className="max-w-4xl space-y-3">{publicFaqs.map(item=><details key={item.q} className="rounded-2xl border border-zinc-700 bg-[#191d23] px-6 py-5"><summary className="font-bold cursor-pointer">{item.q}</summary><p className="text-zinc-300 leading-relaxed mt-4 text-sm">{item.a}</p></details>)}<Link href="/contact" className="inline-block mt-8 font-bold text-sm text-[#C8FF00]">Still have a question? Talk to us →</Link></div></MarketingPage>;}
