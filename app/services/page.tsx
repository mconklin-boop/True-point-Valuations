import type { Metadata } from "next";
import { PrimaryCta } from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Residential appraisal coordination, commercial appraisal coordination, valuation order support, and AMC services from True Point Valuations."
};

const groups = [
  {
    title: "Residential Appraisal Coordination",
    body: "Order intake and coordination support for common residential property valuation needs.",
    items: ["Single family homes", "Condominiums", "Small multi-family properties", "Residential investment properties"]
  },
  {
    title: "Commercial Appraisal Coordination",
    body: "Commercial appraisal coordination may be available depending on property type, location, scope, and appraiser availability.",
    items: ["Office properties", "Retail properties", "Industrial properties", "Mixed-use properties"]
  },
  {
    title: "Valuation and Order Support",
    body: "Support for documentation, status communication, valuation scope questions, and order management.",
    items: ["Property/order intake", "Scope review", "Status updates", "Invoice support"]
  },
  {
    title: "AMC Appraisal Management Services",
    body: "Appraisal management coordination for client-directed valuation workflows.",
    items: ["Appraiser assignment coordination", "Client/lender requirement tracking", "Report delivery support", "Appraisal review support"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#F5F7FA] py-16">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Services</p>
          <h1 className="mt-3 text-5xl font-black text-[#083B7A]">Appraisal and valuation support for property decisions.</h1>
          <p className="mt-6 text-xl leading-9 text-slate-700">
            {site.name} coordinates valuation services for residential, commercial, investor, lender, and appraisal management needs. Service availability depends on scope, property type, location, and client requirements.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-[#083B7A]">{group.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{group.body}</p>
              <ul className="mt-5 grid gap-3 text-slate-700">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3"><span className="font-bold text-[#F58220]">&#10003;</span>{item}</li>
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
