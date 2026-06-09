import Link from "next/link";
import { navLinks } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Logo />
        <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-[#0B4EA2]">
              {link.label}
            </Link>
          ))}
          <Link href="/order-appraisal" className="rounded-md bg-[#F58220] px-4 py-2 font-bold text-white shadow-sm hover:bg-[#d96f18]">
            Start Order
          </Link>
        </nav>
      </div>
    </header>
  );
}
