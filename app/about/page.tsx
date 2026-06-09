import type { Metadata } from "next";
import { PrimaryCta } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about TruePoint Valuations and our professional appraisal management services."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#F5F7FA] py-16">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">About TruePoint Valuations</p>
          <h1 className="mt-3 text-5xl font-black text-[#083B7A]">Professional valuation management services.</h1>
          <p className="mt-6 text-xl leading-9 text-slate-700">
            TruePoint Valuations provides professional valuation management services designed to deliver accurate, reliable, and timely appraisal solutions.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Our nationwide network of qualified appraisers helps lenders, investors, brokers, and property owners make informed decisions with confidence.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-shell rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Mission Statement</p>
          <h2 className="mt-3 text-3xl font-black text-[#083B7A]">
            To provide accurate, dependable, and timely valuation services while delivering exceptional customer service and transparency throughout the appraisal process.
          </h2>
        </div>
      </section>
      <PrimaryCta />
    </>
  );
}
