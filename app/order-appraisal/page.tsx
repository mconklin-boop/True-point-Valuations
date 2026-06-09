import type { Metadata } from "next";
import { Field } from "@/components/Field";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order an Appraisal",
  description: "Submit an appraisal request or valuation inquiry to TruePoint Valuations."
};

export default function OrderAppraisalPage() {
  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Order Appraisal</p>
          <h1 className="mt-3 text-5xl font-black text-[#083B7A]">Submit an appraisal request.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Complete the form and TruePoint Valuations will review your request. This form is ready for integration with {site.email}.
          </p>
          <div className="mt-6 rounded-xl border border-blue-100 bg-white p-5 text-sm text-slate-700 shadow-sm">
            For urgent requests, email <a className="font-bold text-[#0B4EA2]" href={`mailto:${site.email}`}>{site.email}</a>.
          </div>
        </div>
        <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="card-shadow grid gap-5 rounded-2xl bg-white p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
          </div>
          <Field label="Property Address" name="property-address" required />
          <div className="grid gap-5 md:grid-cols-3">
            <Field label="Property Type" name="property-type" required options={["Single Family", "Condominium", "Multi-Family", "Commercial", "Investment Property", "Other"]} />
            <Field label="Loan Type" name="loan-type" options={["Purchase", "Refinance", "Private Lending", "Hard Money", "Portfolio Review", "Other"]} />
            <Field label="Requested Service" name="requested-service" required options={["Residential Appraisal", "Commercial Valuation", "Investment Analysis", "Market Value Assessment", "Appraisal Review"]} />
          </div>
          <label className="block text-sm font-bold text-slate-700">
            Additional Notes
            <textarea name="additional-notes" rows={6} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-[#0B4EA2]" />
          </label>
          <button type="submit" className="rounded-lg bg-[#0B4EA2] px-6 py-4 font-extrabold text-white hover:bg-[#083B7A]">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
