import Link from "next/link";

export function PrimaryCta() {
  return (
    <section className="bg-[#0B4EA2] py-16 text-white">
      <div className="container-shell grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-100">Ready to get started?</p>
          <h2 className="mt-2 text-3xl font-extrabold">Order an appraisal or request invoice support.</h2>
          <p className="mt-3 max-w-2xl text-blue-50">
            TruePoint Valuations provides professional appraisal coordination with invoice-based billing for all services.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/order-appraisal" className="rounded-lg bg-white px-5 py-3 font-bold text-[#0B4EA2]">Order Appraisal</Link>
          <Link href="/contact" className="rounded-lg bg-[#F58220] px-5 py-3 font-bold text-white">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
