import type { Metadata } from "next";
import { Field } from "@/components/Field";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order Appraisal / Pay Invoice",
  description: "Submit an appraisal request or review secure invoice payment information for True Point Valuations."
};

const paymentNotes = [
  "Payments are processed securely through Stripe.",
  "We do not store full credit card numbers on our servers.",
  "Card payments are subject to invoice and order terms.",
  "Approved refunds return to the original payment method."
];

export default function OrderAppraisalPage() {
  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Order Appraisal / Pay Invoice</p>
          <h1 className="mt-3 text-5xl font-black text-[#083B7A]">Submit an appraisal request or pay an issued invoice.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Complete the request form and {site.name} will review the order scope, property type, location, timeline, and client requirements before confirming availability and fees.
          </p>
          <div className="mt-6 rounded-xl border border-blue-100 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm">
            <p className="font-black text-[#083B7A]">Invoice payments</p>
            <p className="mt-2">
              Payments are made from invoices issued by {site.name}. If you have received an invoice, follow the secure payment link included with that invoice or contact support at <a className="font-bold text-[#0B4EA2]" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black text-[#083B7A]">Secure Card Payments</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Card payments are processed securely through {site.paymentProcessor}. We do not store full credit card numbers on our servers.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold text-slate-700">
              {["Visa", "Mastercard", "American Express", "Discover"].map((card) => (
                <span key={card} className="rounded-md border border-slate-200 bg-[#F5F7FA] px-3 py-2">{card}</span>
              ))}
            </div>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
              {paymentNotes.map((note) => (
                <li key={note} className="flex gap-2"><span className="font-bold text-[#F58220]">&#10003;</span>{note}</li>
              ))}
            </ul>
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
            <Field label="Requested Service" name="requested-service" required options={["Residential Appraisal Coordination", "Commercial Appraisal Coordination", "Valuation/Order Support", "AMC Appraisal Management", "Appraisal Review"]} />
          </div>
          <Field label="Invoice Number (if paying an invoice)" name="invoice-number" />
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
