import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#083B7A] text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div>
            <p className="text-2xl font-black text-white">TruePoint Valuations</p>
            <p className="mt-1 text-sm font-semibold text-blue-100">Professional Appraisal & Valuation Services</p>
          </div>
          <div className="mt-5 space-y-2 text-sm text-blue-50">
            <p>{site.address}</p>
            <p>{site.cityStateZip}</p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </p>
            <p>
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-blue-100">Company</h2>
          <div className="mt-4 grid gap-2 text-sm text-blue-50">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/order-appraisal">Order Appraisal</Link>
            <Link href="/payment">Payment</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-blue-100">Policies</h2>
          <div className="mt-4 grid gap-2 text-sm text-blue-50">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-5">
        <p className="container-shell text-sm text-blue-100">© 2026 TruePoint Valuations. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
