import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-200"
      aria-label="TruePoint Valuations home"
    >
      <img
        src="/logo.jpg"
        alt="TruePoint Valuations"
        className="h-14 w-auto max-w-[260px] rounded-md object-contain"
      />
    </Link>
  );
}
