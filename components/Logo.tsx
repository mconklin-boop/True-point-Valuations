import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="TruePoint Valuations home">
      <img
        src="/logo.jpg"
        alt="TruePoint Valuations"
        className="h-14 w-auto max-w-[260px] rounded-md object-contain shadow-sm"
      />
    </Link>
  );
}
