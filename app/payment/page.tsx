import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Secure Payment Portal",
  description: "Pay appraisal and valuation fees securely online through Stripe."
};

const trust = ["SSL Secure", "Powered by Stripe", "Visa", "Mastercard", "American Express", "Discover"];

export default function PaymentPage() {
  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Secure online payments</p>
          <h1 className="mt-3 text-5xl font-black text-[#083B7A]">Secure Payment Portal</h1>
          <p className="mt-6 text-xl leading-9 text-slate-700">Use our secure payment portal to pay appraisal and valuation fees online.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trust.map((item) => (
              <div key={item} className="rounded-lg bg-white p-4 font-bold text-slate-800 shadow-sm">
                <span className="mr-2 text-[#F58220]">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
        <aside className="card-shadow rounded-2xl bg-white p-8">
          <h2 className="text-2xl font-black text-[#083B7A]">Pay appraisal fees</h2>
          <p className="mt-3 text-slate-700">All payments are securely processed through Stripe. TruePoint Valuations does not store credit card information.</p>
          <a href={site.stripePaymentLink} className="mt-7 block rounded-lg bg-[#F58220] px-6 py-4 text-center text-lg font-extrabold text-white hover:bg-[#d96f18]">
            Make Secure Payment
          </a>
          <p className="mt-5 text-sm text-slate-500">You will be redirected to Stripe to complete payment.</p>
        </aside>
      </div>
    </section>
  );
}
