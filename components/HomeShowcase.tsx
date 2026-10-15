"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Users, CreditCard, Check, Gift, ChefHat, Monitor, Clock, Globe, Mail, MessageSquare, Sparkles } from "lucide-react";

const workspaceViews = {
  Bookings: {
    heading: "A clearer view of the day.",
    copy: "Keep sessions, availability and customer bookings together, so your team knows what’s happening next.",
    columns: ["Session", "Time", "Booking"],
    rows: [["Open play", "10:00", "Confirmed"], ["Birthday party", "11:30", "Deposit paid"], ["Family session", "14:00", "Confirmed"]],
    notes: ["Sessions & availability", "Deposits & booking extras", "Digital waivers"],
  },
  Customers: {
    heading: "Know the people behind the booking.",
    copy: "Bring customer details and booking history together, with membership and marketing tools available in Pro.",
    columns: ["Customer", "Latest booking", "Relationship"],
    rows: [["Alex Morgan", "Open play", "Returning"], ["Sam Taylor", "Birthday party", "New customer"], ["Jamie Lee", "Family session", "Member"]],
    notes: ["Customer records", "Gift vouchers", "Memberships with Pro"],
  },
  Operations: {
    heading: "Keep the whole team moving.",
    copy: "With Pro, connect in-venue sales, kitchen orders and staff planning with the rest of your operation.",
    columns: ["Area", "Activity", "Status"],
    rows: [["Front desk", "Booking check-in", "Ready"], ["Café", "Food & drink order", "In progress"], ["Kitchen", "Order preparation", "Preparing"]],
    notes: ["OrbetPOS™ & OrbetKDS™", "Order at table", "Rotas & timesheets"],
  },
};
type WorkspaceView = keyof typeof workspaceViews;
const faqs = [
  { q: "What can I manage with Orbet?", a: "Orbet brings online bookings, customer management, payments and everyday venue operations together. Growth covers the foundations; Pro adds sales, kitchen, team, marketing and branding tools." },
  { q: "Which plan is right for my business?", a: "Choose Growth for core booking and customer tools. Pro is the complete package, including a custom domain and removal of Orbet branding. Enterprise offers tailored arrangements for larger venues and multi-venue operations." },
  { q: "Can I use my own branding?", a: "Yes. Pro includes a custom domain, custom email templates and removal of Orbet branding from your customer-facing booking experience." },
  { q: "What does Orbet connect with?", a: "Stripe, Square and Twilio connections are available. Mailchimp is in development. Provider accounts and applicable processing or usage fees are separate." },
  { q: "Can you help with a larger operation?", a: "Contact us to discuss Enterprise. We’ll work through your venue requirements, team needs, rollout and commercial arrangements." },
];

export default function HomeShowcase() {
  const [view, setView] = useState<WorkspaceView>("Bookings");
  const workspace = workspaceViews[view];

  return (
    <div className="bg-[#0d0f12] text-zinc-100">
      <section id="explore-orbet" className="scroll-mt-24 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-end mb-10">
          <div><Eyebrow>One connected platform</Eyebrow><h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Your day.<br /><span className="text-zinc-400">All in view.</span></h2></div>
          <p className="text-zinc-300 text-base leading-relaxed max-w-lg">Bookings at the front desk. Orders in the café. Customers coming back. Orbet brings the moving parts together so you can focus on the experience.</p>
        </div>
        <div className="rounded-[28px] border border-zinc-700 overflow-hidden shadow-2xl">
          <div className="bg-[#181b20] px-5 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3"><span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#C8FF00] text-black font-black text-lg">o</span><span className="text-sm font-bold">Your workspace</span></div>
            <div role="group" aria-label="Workspace examples" className="flex flex-wrap gap-1 rounded-xl bg-black/25 p-1">{(Object.keys(workspaceViews) as WorkspaceView[]).map(name => <button type="button" key={name} onClick={() => setView(name)} aria-pressed={view === name} className={`rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm font-bold transition-colors ${view === name ? "bg-white text-black" : "text-zinc-300 hover:bg-white/5"}`}>{name}</button>)}</div>
          </div>
          <div className="bg-[#f1f2f0] text-zinc-900 p-5 md:p-8 lg:p-10">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-center">
              <div className="min-w-0" aria-live="polite" aria-atomic="true"><p className="text-[11px] uppercase tracking-widest font-bold text-zinc-500 mb-4">{view} at a glance</p><h3 className="text-3xl font-extrabold tracking-tight">{workspace.heading}</h3><p className="text-zinc-600 text-sm leading-relaxed mt-4">{workspace.copy}</p><ul className="mt-6 space-y-3">{workspace.notes.map(note => <li key={note} className="flex items-start gap-2 text-sm font-semibold"><Check size={16} className="mt-0.5 shrink-0 text-zinc-500" />{note}</li>)}</ul></div>
              <div className="min-w-0 bg-white rounded-2xl border border-zinc-200 p-4 md:p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3 mb-6"><span className="font-bold">{view === "Customers" ? "Customer overview" : view === "Operations" ? "Across your venue" : "Today’s bookings"}</span><span className="bg-zinc-100 text-zinc-600 rounded-full px-3 py-1 text-xs">Example</span></div>
                <div className="overflow-x-auto"><table className="w-full min-w-80 text-left text-xs md:text-sm"><thead><tr>{workspace.columns.map(column => <th key={column} scope="col" className="text-zinc-500 font-medium pb-4 pr-3 border-b border-zinc-100">{column}</th>)}</tr></thead><tbody>{workspace.rows.map(row => <tr key={row[0]}>{row.map((cell, index) => <td key={cell} className="py-4 pr-3 border-b border-zinc-100 last:pr-0">{index === 2 ? <span className="inline-block rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-700 whitespace-nowrap">{cell}</span> : cell}</td>)}</tr>)}</tbody></table></div>
                <p className="mt-5 text-[11px] text-zinc-500">Illustrative workspace and sample data.</p>
              </div>
            </div>
          </div>
        </div>
        <Link href="/features" className="inline-flex items-center gap-2 mt-7 text-sm font-bold text-white hover:text-[#C8FF00]">Explore the full toolkit <ArrowUpRight size={17} /></Link>
      </section>

      <section className="bg-[#12151a] border-y border-white/5 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12"><Eyebrow>From booking to arrival</Eyebrow><h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Make the first impression<br /><span className="text-zinc-400">a good one.</span></h2><p className="mt-5 text-zinc-300 leading-relaxed max-w-2xl">Give customers a straightforward way to book. Give your team the details they need to welcome them.</p></div>
          <div className="grid lg:grid-cols-3 gap-5">
            {[
              { icon: CalendarDays, step: "01", title: "Choose an experience", copy: "Online sessions and events help customers find a time that works for them.", detail: "Sessions · Events · Availability" },
              { icon: CreditCard, step: "02", title: "Make it a booking", copy: "Take deposits, offer booking extras and collect the details that matter.", detail: "Payments · Extras · Custom fields" },
              { icon: Users, step: "03", title: "Be ready to welcome", copy: "Keep the booking, customer record and digital waivers together before arrival.", detail: "Customer records · Digital waivers" },
            ].map(item => <article key={item.step} className="rounded-3xl border border-zinc-700/60 bg-[#191d23] p-7 md:p-8"><div className="flex items-center justify-between mb-9"><item.icon size={27} className="text-zinc-200" /><span className="font-mono text-sm text-zinc-500">{item.step}</span></div><h3 className="text-xl font-bold">{item.title}</h3><p className="text-zinc-300 mt-4 text-sm leading-relaxed">{item.copy}</p><p className="text-zinc-400 mt-7 text-xs leading-relaxed">{item.detail}</p></article>)}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10"><div><Eyebrow>Beyond the booking</Eyebrow><h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">The rest of your day,<br /><span className="text-zinc-400">connected.</span></h2></div><Link href="/features" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[#C8FF00]">See all features <ArrowUpRight size={17} /></Link></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <article className="md:col-span-2 lg:col-span-2 rounded-3xl border border-zinc-700 bg-[#191d23] p-7 md:p-9">
            <div className="flex flex-wrap justify-between gap-3"><Monitor size={28} className="text-zinc-200" /><PlanBadge /></div><h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-8">Front desk to kitchen.<br />Keep service moving.</h3><p className="text-zinc-300 leading-relaxed mt-4 max-w-xl">OrbetPOS™ connects in-venue sales with your operation. OrbetKDS™ keeps food and drink orders in view for the kitchen, with ordering tools alongside.</p>
            <div className="grid sm:grid-cols-3 gap-3 mt-8">{[{ icon: Monitor, label: "OrbetPOS™", detail: "Sales & payments" }, { icon: ChefHat, label: "OrbetKDS™", detail: "Kitchen orders" }, { icon: CreditCard, label: "Ordering", detail: "At table & online" }].map(item => <div key={item.label} className="rounded-2xl border border-zinc-700/70 p-4 bg-black/15"><item.icon size={20} className="text-zinc-400 mb-4" /><p className="text-sm font-bold">{item.label}</p><p className="text-xs text-zinc-400 mt-2">{item.detail}</p></div>)}</div>
          </article>
          <article className="rounded-3xl border border-zinc-700 bg-[#191d23] p-7 md:p-9"><div className="flex justify-between gap-3"><Clock size={28} className="text-zinc-200" /><PlanBadge /></div><h3 className="text-2xl font-bold tracking-tight mt-8">A team<br />on the same page.</h3><p className="text-zinc-300 leading-relaxed text-sm mt-4">Plan staff rotas and keep working hours organised, alongside the tools your team uses every day.</p><div className="mt-7 pt-6 border-t border-zinc-700"><p className="text-xs text-zinc-400">Staff planning</p><p className="text-lg font-bold mt-2">Rotas & timesheets</p></div></article>
          <article className="rounded-3xl border border-zinc-700 bg-[#191d23] p-7 md:p-9"><Gift size={28} className="text-zinc-200" /><h3 className="text-2xl font-bold tracking-tight mt-8">Give them a reason<br />to come back.</h3><p className="text-zinc-300 leading-relaxed text-sm mt-4">Gift vouchers in Growth. Memberships, member events and marketing campaigns in Pro. More ways to build relationships beyond a single visit.</p></article>
          <article className="md:col-span-2 rounded-3xl bg-[#e8eae5] text-zinc-900 p-7 md:p-9"><div className="flex justify-between gap-3"><Globe size={28} /><span className="text-xs border border-zinc-400 rounded-full px-3 py-1 h-fit">Included with Pro</span></div><h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-8">Your experience.<br />Your name on it.</h3><p className="text-zinc-600 leading-relaxed mt-4 max-w-xl">Use your own domain, remove Orbet branding from the customer-facing booking experience and make emails feel like part of your business.</p><Link href="/pricing" className="inline-flex gap-2 items-center text-sm font-bold mt-7">Discover Pro <ArrowUpRight size={17} /></Link></article>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#12151a] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div><Eyebrow>Integrations</Eyebrow><h2 className="text-3xl font-extrabold tracking-tight">Your tools.<br /><span className="text-zinc-400">Working together.</span></h2><Link href="/features#integrations" className="inline-flex items-center gap-2 mt-6 text-sm font-bold hover:text-[#C8FF00]">Explore integrations <ArrowUpRight size={17} /></Link></div>
          <div className="grid grid-cols-2 gap-3">{[{ name: "Stripe", detail: "Payments", icon: CreditCard }, { name: "Square", detail: "Payments", icon: Monitor }, { name: "Twilio", detail: "SMS", icon: MessageSquare }, { name: "Mailchimp", detail: "In development", icon: Mail }].map(item => <div key={item.name} className="rounded-2xl border border-zinc-700/60 bg-[#191d23] p-5"><item.icon size={20} className="text-zinc-400 mb-4" /><p className="font-bold">{item.name}</p><p className="text-xs text-zinc-400 mt-2">{item.detail}</p></div>)}</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16">
        <div><Eyebrow>A little more clarity</Eyebrow><h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Good questions.<br /><span className="text-zinc-400">Straight answers.</span></h2><p className="text-zinc-300 text-sm leading-relaxed mt-5">Thinking about how Orbet could fit your business? Here’s where to start.</p></div>
        <div className="space-y-3">{faqs.map(faq => <details key={faq.q} className="group rounded-2xl border border-zinc-700/60 bg-[#191d23] px-6 py-5"><summary className="cursor-pointer text-sm md:text-base font-bold marker:text-zinc-500">{faq.q}</summary><p className="mt-4 text-sm leading-relaxed text-zinc-300">{faq.a}</p></details>)}</div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="rounded-[32px] border border-zinc-700 bg-[#191d23] p-8 md:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"><div><div className="flex items-center gap-2 text-[#C8FF00] text-xs font-bold uppercase tracking-widest mb-5"><Sparkles size={15} /> Make space for what matters</div><h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Bring your business together.</h2><p className="text-zinc-300 mt-5 max-w-xl leading-relaxed">Start with Growth, unlock the complete toolkit with Pro, or talk to us about a larger operation.</p></div><div className="flex flex-col gap-3 w-full sm:w-auto lg:shrink-0"><Link href="/pricing" className="rounded-full bg-[#C8FF00] text-black px-8 py-4 text-center text-sm font-bold hover:bg-[#d7ff4d]">Find your plan</Link><a href="/contact" className="rounded-full border border-zinc-600 px-8 py-4 text-center text-sm font-bold hover:bg-white/5">Talk to us</a></div></div>
      </section>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest mb-5">{children}</p>;
}
function PlanBadge() {
  return <span className="text-xs border border-zinc-600 text-zinc-300 rounded-full px-3 py-1 h-fit">Included with Pro</span>;
}
