import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="TruePoint Valuations home">
      <img src="/logo.svg" alt="" className="h-12 w-12 rounded-lg shadow-sm" />
      <span className="leading-tight">
        <span className="block text-lg font-extrabold text-[#083B7A]">TruePoint</span>
        <span className="block text-sm font-semibold text-[#1F2937]">Valuations</span>
      </span>
    </Link>
  );
}
