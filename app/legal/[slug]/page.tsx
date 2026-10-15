import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPage from "@/components/MarketingPage";
const documents:Record<string,string>={"terms-of-service":"Terms of Service","privacy-policy":"Privacy Policy","service-level-agreement":"Service Level Agreement","refund-policy":"Refund Policy"};
export const metadata:Metadata={title:"Document information",robots:{index:false,follow:false}};
export function generateStaticParams(){return Object.keys(documents).map(slug=>({slug}));}
export default async function DocumentPage({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const title=documents[slug];if(!title)notFound();return <MarketingPage eyebrow="Document information" title={title} intro="This document is awaiting Orbet’s approved wording."><div className="max-w-3xl rounded-3xl border border-zinc-700 bg-[#191d23] p-8"><h2 className="text-2xl font-bold">Please contact us for current information.</h2><p className="text-zinc-300 leading-relaxed mt-5">Contact support@orbet.co.uk for the applicable document before relying on any subscription, privacy, refund or service-level arrangements. This page does not set out those terms.</p><a className="inline-block mt-7 font-bold text-[#C8FF00]" href="mailto:support@orbet.co.uk">Email Orbet →</a></div></MarketingPage>;}
