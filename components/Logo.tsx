import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-200"
      aria-label="TruePoint Valuations home"
    >
      <Image
        src="/logo-header-white.jpg"
        alt="TruePoint Valuations"
        width={360}
        height={142}
        unoptimized
        className="h-14 w-auto max-w-[260px] rounded-md bg-white object-contain"
      />
    </Link>
  );
}
