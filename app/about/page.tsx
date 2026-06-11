import type { Metadata } from "next";
import { PrimaryCta } from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about True Point Valuations and our appraisal coordination and valuation support services."
};

const commitments = [
  "Clear communication from order intake through delivery",
  "Coordination with qualified appraisal professionals based on scope and location",
  "Professional support for valuation order questions, status, and documentation",
  "Conservative service descriptions with no guarantee of valuation outcome"
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#F5F7FA] py-16">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">About {site.name}</p>
          <h1 className="mt-3 text-5xl font-black text-[#083B7A]">Professional appraisal coordination and valuation support.</h1>
          <p className="mt-6 text-xl leading-9 text-slate-700">
            {site.name} provides appraisal coordination and valuation support services for residential and commercial real estate transactions.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We assist lenders, investors, brokers, and property owners by coordinating appraisal orders, facilitating communication throughout the valuation process, providing valuation review support, and managing appraisal-related workflows. Appraisal availability, pricing, timing, and completion depend on property type, location, scope, assignment conditions, and client or lender requirements.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-shell grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Mission</p>
            <h2 className="mt-3 text-3xl font-black text-[#083B7A]">
              To provide dependable appraisal coordination and responsive support throughout the valuation process.
            </h2>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-black text-[#083B7A]">How we work</h2>
            <ul className="mt-5 grid gap-3 text-slate-700">
              {commitments.map((item) => (
                <li key={item} className="flex gap-3"><span className="font-bold text-[#F58220]">&#10003;</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <PrimaryCta />
    </>
  );
}
