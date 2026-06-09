import type { Metadata } from "next";
import { PrimaryCta } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description: "Residential, commercial, investor, and appraisal review services from TruePoint Valuations."
};

const groups = [
  {
    title: "Residential Appraisals",
    items: ["Single Family Homes", "Condominiums", "Multi-Family Properties", "Investment Properties"]
  },
  {
    title: "Commercial Valuations",
    items: ["Office Buildings", "Retail Properties", "Industrial Facilities", "Mixed Use Developments"]
  },
  {
    title: "Investor Services",
    items: ["Fix and Flip Analysis", "Rental Property Valuations", "BRRRR Property Analysis", "Portfolio Reviews"]
  },
  {
    title: "Appraisal Review Services",
    items: ["Quality Control Reviews", "Compliance Reviews", "Risk Analysis", "Second Opinion Reviews"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#F5F7FA] py-16">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Services</p>
          <h1 className="mt-3 text-5xl font-black text-[#083B7A]">Appraisal and valuation support for property decisions nationwide.</h1>
          <p className="mt-6 text-xl leading-9 text-slate-700">
            TruePoint Valuations coordinates valuation services for residential, commercial, investor, lender, and review needs.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-[#083B7A]">{group.title}</h2>
              <ul className="mt-5 grid gap-3 text-slate-700">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3"><span className="font-bold text-[#F58220]">✓</span>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <PrimaryCta />
    </>
  );
}
