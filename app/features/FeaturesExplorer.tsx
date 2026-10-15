"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Users, Building2, Sparkles, Check, CreditCard, Gift, ClipboardCheck, BarChart3, SlidersHorizontal, Ticket, Monitor, ChefHat, ShoppingBag, Clock, MessageSquare, Mail, ListChecks, Globe, Palette, type LucideIcon } from "lucide-react";

type Category = "Bookings" | "Customers" | "Operations" | "Branding";
interface Feature {
  title: string;
  description: string;
  category: Category;
  plan: "Growth" | "Pro";
  icon: LucideIcon;
}
const categories: { name: Category; description: string; icon: LucideIcon }[] = [
  { name: "Bookings", description: "From choosing a session to checking in.", icon: CalendarDays },
  { name: "Customers", description: "Keep relationships growing.", icon: Users },
  { name: "Operations", description: "Bring your team and sales together.", icon: Building2 },
  { name: "Branding", description: "Make the experience your own.", icon: Sparkles },
];
const features: Feature[] = [
  { title: "Online bookings", description: "Let customers choose a session and book online, with availability managed in one place.", category: "Bookings", plan: "Growth", icon: CalendarDays },
  { title: "Sessions & events", description: "Organise regular sessions and one-off events around the way your business works.", category: "Bookings", plan: "Growth", icon: Ticket },
  { title: "Deposits & no-show protection", description: "Take deposits and capture card details to help protect bookings from no-shows.", category: "Bookings", plan: "Growth", icon: CreditCard },
  { title: "Booking extras & custom fields", description: "Offer extras during booking and collect the details your team needs before customers arrive.", category: "Bookings", plan: "Growth", icon: SlidersHorizontal },
  { title: "Digital waivers", description: "Collect signed waivers before arrival and keep them connected to the guest record.", category: "Bookings", plan: "Growth", icon: ClipboardCheck },
  { title: "Pre-orders & wait lists", description: "Collect food and drink choices ahead of time and manage demand when sessions fill up.", category: "Bookings", plan: "Pro", icon: ListChecks },
  { title: "Customer management", description: "Keep customer details and booking history together, so your team has the context it needs.", category: "Customers", plan: "Growth", icon: Users },
  { title: "Gift vouchers", description: "Sell, track and redeem gift vouchers, giving customers another way to share your experience.", category: "Customers", plan: "Growth", icon: Gift },
  { title: "Memberships & member events", description: "Offer recurring memberships, member pricing and events for your member community.", category: "Customers", plan: "Pro", icon: Ticket },
  { title: "Marketing campaigns", description: "Build email campaigns and automations for your customer audience, with consent preferences respected.", category: "Customers", plan: "Pro", icon: Mail },
  { title: "Booking & revenue reporting", description: "Understand bookings and revenue with reporting that helps you plan your next move.", category: "Operations", plan: "Growth", icon: BarChart3 },
  { title: "OrbetPOS™", description: "Manage in-venue sales and payments alongside your bookings with a connected point of sale.", category: "Operations", plan: "Pro", icon: Monitor },
  { title: "OrbetKDS™", description: "Send food and drink orders to a kitchen display, helping your team keep service moving.", category: "Operations", plan: "Pro", icon: ChefHat },
  { title: "Order at table & online ordering", description: "Give customers ways to order at the table or place orders online.", category: "Operations", plan: "Pro", icon: ShoppingBag },
  { title: "Staff rotas & timesheets", description: "Plan shifts and keep working hours organised alongside your everyday operations.", category: "Operations", plan: "Pro", icon: Clock },
  { title: "Custom domain", description: "Bring your booking experience to your own domain for a more consistent customer journey.", category: "Branding", plan: "Pro", icon: Globe },
  { title: "Your brand, front and centre", description: "Remove Orbet branding from your customer-facing booking experience and make it your own.", category: "Branding", plan: "Pro", icon: Palette },
  { title: "Custom email templates", description: "Make booking emails feel like part of your business with templates tailored to your brand.", category: "Branding", plan: "Pro", icon: Mail },
];

export default function FeaturesExplorer() {
  const [selected, setSelected] = useState<Category | "All">("All");
  useEffect(() => {
    const showLinkedFeature = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname !== "/features" || !destination.hash) return;
      setSelected("All");
      requestAnimationFrame(() => {
        document.getElementById(destination.hash.slice(1))?.scrollIntoView({ block: "start" });
      });
    };
    document.addEventListener("click", showLinkedFeature);
    return () => document.removeEventListener("click", showLinkedFeature);
  }, []);
  const visible = selected === "All" ? features : features.filter(feature => feature.category === selected);

  return (
    <div className="min-h-screen bg-black text-zinc-100 pb-20">
      <section className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C8FF00]/25 bg-[#C8FF00]/5 px-4 py-1.5 text-[#C8FF00] text-sm font-bold mb-5"><Sparkles size={14} /> Everything, connected</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">Less juggling.<br /><span className="text-zinc-400">More running your business.</span></h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">From the first booking to the last order, bring your customers, team and everyday operations together with Orbet.</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-white hover:text-[#C8FF00]">Find your plan <ArrowUpRight size={17} /></Link>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-6 lg:px-10">
        <section aria-labelledby="explore-features">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 id="explore-features" className="text-2xl font-bold tracking-tight">Built around your day.</h2>
            <button type="button" onClick={() => setSelected("All")} aria-pressed={selected === "All"} className={`rounded-full px-4 py-2 text-sm font-bold border transition-colors ${selected === "All" ? "bg-zinc-100 text-black border-zinc-100" : "text-zinc-400 border-zinc-700 hover:text-white"}`}>All features</button>
          </div>
          <div role="group" aria-label="Feature categories" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {categories.map(category => <button key={category.name} type="button" aria-pressed={selected === category.name} onClick={() => setSelected(category.name)}
              className={`p-5 rounded-2xl border text-left transition-colors ${selected === category.name ? "border-[#C8FF00]/60 bg-zinc-900/70" : "border-zinc-800 hover:border-zinc-600 bg-zinc-950"}`}>
              <span className="flex items-center gap-3 font-bold text-lg"><category.icon size={21} className={selected === category.name ? "text-[#C8FF00]" : "text-zinc-400"} />{category.name}</span>
              <span className="block mt-3 text-xs leading-relaxed text-zinc-400">{category.description}</span>
            </button>)}
          </div>
        </section>

        <section aria-labelledby="feature-results" className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
            <h2 id="feature-results" className="text-xl font-bold">{selected === "All" ? "Explore the toolkit" : `${selected}, made simpler`}</h2>
            <p aria-live="polite" aria-atomic="true" className="text-zinc-500 text-sm">{visible.length} features · Pro includes everything in Growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map(feature => <motion.article id={feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")} key={feature.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
              className="scroll-mt-32 rounded-3xl border border-zinc-800 bg-zinc-950/50 p-7 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3"><span className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-zinc-300"><feature.icon size={22} /></span><span className="text-xs font-medium text-zinc-400 rounded-full border border-zinc-800 px-3 py-1">{feature.plan === "Growth" ? "Growth + Pro" : "Pro"}</span></div>
              <div><h3 className="font-bold text-lg text-white">{feature.title}</h3><p className="mt-3 text-sm leading-relaxed text-zinc-400">{feature.description}</p></div>
            </motion.article>)}
          </div>
          <p className="mt-6 text-zinc-500 text-xs leading-relaxed">Enterprise includes the full Pro toolkit, with arrangements tailored to larger venues and multi-venue operations. Payment processing and transaction fees are separate.</p>
        </section>

        {(selected === "All" || selected === "Operations") && (
          <section id="integrations" aria-labelledby="integrations-heading" className="scroll-mt-32 mt-12 rounded-3xl border border-zinc-800 p-7 md:p-10">
            <p className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest mb-4">Integrations</p>
            <h2 id="integrations-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight">Connected to the way you work.</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">Bring your booking experience together with the services that support your business.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              {[
                { name: "Stripe", category: "Online payments", description: "Take booking payments and deposits through Stripe, with payment management connected to your bookings.", icon: CreditCard, available: true },
                { name: "Square", category: "Payments", description: "Connect Square with your Orbet setup to support your payment workflows.", icon: Monitor, available: true },
                { name: "Twilio", category: "SMS communications", description: "Connect Twilio for SMS communications with your customers.", icon: MessageSquare, available: true },
                { name: "Mailchimp", category: "Email marketing", description: "A Mailchimp connection for your marketing workflows is in development. Availability will be confirmed when ready.", icon: Mail, available: false },
              ].map(integration => <article key={integration.name} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col">
                <div className="flex items-center justify-between gap-3"><h3 className="text-xl font-bold text-white">{integration.name}</h3><integration.icon size={22} className="text-zinc-400 shrink-0" /></div>
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mt-3">{integration.category}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mt-4 grow">{integration.description}</p>
                <span className={`self-start text-xs rounded-full border px-3 py-1 mt-5 ${integration.available ? "border-zinc-700 text-zinc-300" : "border-zinc-800 text-zinc-500"}`}>{integration.available ? "Available" : "In development"}</span>
              </article>)}
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#C8FF00] mt-6">Discuss your integration needs <ArrowUpRight size={17} /></a>
            <p className="text-xs text-zinc-500 mt-5">Provider accounts and applicable usage or processing fees are separate.</p>
          </section>
        )}

        <section className="my-20 grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-zinc-800 p-8 md:p-12">
          <div><p className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest mb-4">Make it yours</p><h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Your business.<br /><span className="text-zinc-400">Your customer experience.</span></h2><p className="mt-5 text-zinc-400 leading-relaxed">Pro brings the complete toolkit together with a custom domain and your own branding. Keep Orbet behind the scenes while your business takes centre stage.</p></div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8"><h3 className="text-white font-bold text-lg mb-6">Included with Pro</h3><ul className="space-y-5">{["Your own custom domain", "Orbet branding removed", "Email templates that feel like your business", "Every Growth feature, plus the full Pro toolkit"].map(text => <li key={text} className="flex items-start gap-3 text-zinc-300 text-sm"><Check size={18} className="shrink-0 text-zinc-400" />{text}</li>)}</ul><Link href="/pricing" className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-[#C8FF00]">Explore Pro <ArrowUpRight size={17} /></Link></div>
        </section>

        <section className="text-center rounded-3xl border border-zinc-800 px-6 py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Find your next step.</h2><p className="text-zinc-400 mt-5 max-w-xl mx-auto leading-relaxed">Choose the essentials with Growth, make it your own with Pro, or talk to us about a larger operation.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8"><Link href="/pricing" className="rounded-full bg-[#C8FF00] text-black px-7 py-3 font-bold text-sm hover:bg-[#d7ff4d]">Compare plans</Link><a href="/contact" className="rounded-full border border-zinc-700 text-white px-7 py-3 font-bold text-sm hover:bg-zinc-900">Talk to us</a></div>
        </section>
      </main>
    </div>
  );
}
