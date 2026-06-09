import type { Metadata } from "next";
import { Field } from "@/components/Field";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact TruePoint Valuations for appraisal management services and payment support."
};

export default function ContactPage() {
  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Contact</p>
          <h1 className="mt-3 text-5xl font-black text-[#083B7A]">Contact TruePoint Valuations</h1>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-[#083B7A]">{site.name}</h2>
            <div className="mt-4 space-y-3 text-slate-700">
              <p><strong>Email:</strong> <a className="text-[#0B4EA2]" href={`mailto:${site.email}`}>{site.email}</a></p>
              <p><strong>Phone:</strong> <a className="text-[#0B4EA2]" href={site.phoneHref}>{site.phone}</a></p>
              <p><strong>Address:</strong><br />{site.address}<br />{site.cityStateZip}</p>
            </div>
          </div>
          <div className="mt-6 grid min-h-64 place-items-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            Google Maps placeholder for {site.address}, {site.cityStateZip}
          </div>
        </div>
        <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="card-shadow grid gap-5 rounded-2xl bg-white p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Company" name="company" />
          </div>
          <Field label="Subject" name="subject" required />
          <label className="block text-sm font-bold text-slate-700">
            Message
            <textarea name="message" rows={7} required className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-[#0B4EA2]" />
          </label>
          <button type="submit" className="rounded-lg bg-[#0B4EA2] px-6 py-4 font-extrabold text-white hover:bg-[#083B7A]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
