import type { Metadata } from "next";
import { Field } from "@/components/Field";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact True Point Valuations for appraisal management services, customer support, and invoice questions."
};

export default function ContactPage() {
  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F58220]">Contact</p>
          <h1 className="mt-3 text-5xl font-black text-[#083B7A]">Contact {site.name}</h1>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-[#083B7A]">{site.name}</h2>
            <div className="mt-4 space-y-3 text-slate-700">
              <p><strong>Email:</strong> <a className="text-[#0B4EA2]" href={`mailto:${site.email}`}>{site.email}</a></p>
              <p><strong>Phone:</strong> {site.phoneHref ? <a className="text-[#0B4EA2]" href={site.phoneHref}>{site.phone}</a> : site.phone}</p>
              <p><strong>Address:</strong><br />{site.address}<br />{site.cityStateZip}</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-[#083B7A]">Customer Support</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Contact us for appraisal order questions, invoice questions, cancellation requests, refund requests, or documentation support. Refund and dispute requests must be submitted by email so they can be reviewed with the related order or invoice record.
            </p>
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
