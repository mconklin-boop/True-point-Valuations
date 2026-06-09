import Link from "next/link";
import { PrimaryCta } from "@/components/CTA";
import { site } from "@/lib/site";

const services = [
  "Residential Appraisals",
  "Commercial Valuations",
  "Investment Property Analysis",
  "Market Value Assessments",
  "Appraisal Review Services"
];

const reasons = [
  "Fast Turn Times",
  "Nationwide Coverage",
  "Certified Appraiser Network",
  "Transparent Communication",
  "Secure Ordering Process"
];

export default function HomePage() {
  return (
    <>
      <section className="bg-[#F5F7FA]">
        <div className="container-shell grid min-h-[680px] gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Real Estate Appraisal Management Company</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-[#083B7A] md:text-6xl">
              Reliable Valuation Solutions Nationwide
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
              Professional appraisal management and valuation services for lenders, investors, brokers, private lenders, and financial institutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/order-appraisal" className="rounded-lg bg-[#0B4EA2] px-6 py-3 font-bold text-white shadow-sm hover:bg-[#083B7A]">
                Order an Appraisal
              </Link>
              <Link href="/payment" className="rounded-lg border border-[#0B4EA2] bg-white px-6 py-3 font-bold text-[#0B4EA2] hover:bg-blue-50">
                Make a Payment
              </Link>
            </div>
          </div>
          <div className="card-shadow rounded-2xl bg-white p-6">
            <img src="/valuation-hero.svg" alt="Appraisal report, valuation chart, and property documentation" className="h-auto w-full rounded-xl" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Services</p>
            <h2 className="mt-2 text-4xl font-black text-[#083B7A]">Valuation services built for lending, investment, and property decisions.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <div key={service} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#1F2937]">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Why Choose TruePoint</p>
            <h2 className="mt-2 text-4xl font-black text-[#083B7A]">Professional coordination from order intake to delivery.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              TruePoint Valuations supports appraisal workflows with responsive communication, organized documentation, and secure customer payment options.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-xl bg-white p-5 font-bold text-slate-800 shadow-sm">
                <span className="mr-2 text-[#F58220]">✓</span>{reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-shell rounded-2xl bg-[#083B7A] p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-blue-100">Secure online payments</p>
              <h2 className="mt-2 text-4xl font-black">Pay for Your Appraisal</h2>
              <p className="mt-4 max-w-2xl text-lg text-blue-50">Secure online payment processing powered by Stripe.</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-blue-50">
                <span>SSL Secured</span>
                <span>Stripe Payments</span>
                <span>Major Credit Cards Accepted</span>
              </div>
            </div>
            <a href={site.stripePaymentLink} className="rounded-lg bg-[#F58220] px-7 py-4 text-center text-lg font-extrabold text-white shadow-sm hover:bg-[#d96f18]">
              Make Secure Payment
            </a>
          </div>
        </div>
      </section>

      <PrimaryCta />
    </>
  );
}
