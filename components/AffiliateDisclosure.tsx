import Link from "next/link";

export default function AffiliateDisclosure() {
  return (
    <aside
      aria-label="Affiliate disclosure"
      className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-slate-800"
    >
      <p className="font-black text-slate-950">Affiliate note</p>
      <p className="mt-2 leading-7">
        This guide contains affiliate links. If you make a qualifying purchase
        or signup through one, LetterWise may earn a commission at no extra cost
        to you. Commercial relationships do not determine our recommendations.
      </p>
      <Link
        href="/affiliate-disclosure"
        className="mt-3 inline-block font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
      >
        Read the full affiliate disclosure
      </Link>
    </aside>
  );
}
