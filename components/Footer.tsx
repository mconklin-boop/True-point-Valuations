import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund & Dispute Policy" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#083B7A] text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-lg bg-white p-2 shadow-sm ring-1 ring-white/30">
            <Image
              src="/logo-header-white.jpg"
              alt="TruePoint Valuations"
              width={360}
              height={142}
              unoptimized
              className="h-16 w-auto max-w-[300px] rounded-md bg-white object-contain"
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-blue-100">Appraisal Coordination & Valuation Support</p>
          <div className="mt-5 space-y-2 text-sm text-blue-50">
            <p>{site.address}</p>
            <p>{site.cityStateZip}</p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </p>
            <p>
              {site.phoneHref ? (
                <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
              ) : (
                site.phone
              )}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-blue-100">Company</h2>
          <div className="mt-4 grid gap-2 text-sm text-blue-50">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/order-appraisal">Order / Pay Invoice</Link>
            <Link href="/contact">Contact</Link>
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
        <p className="container-shell text-sm text-blue-100">&copy; 2026 True Point Valuations. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
