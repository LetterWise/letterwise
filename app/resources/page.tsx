import type { Metadata } from "next";
import Link from "next/link";
import { resourceGuides } from "@/data/resources";

export const metadata: Metadata = {
  title: "Word Game Resources",
  description:
    "Browse practical LetterWise guides for choosing word game references, vocabulary tools, and other useful learning resources.",
  alternates: {
    canonical: "/resources",
  },
};

const reviewPrinciples = [
  {
    title: "Useful first",
    description:
      "Every guide starts with the problem a reader needs to solve, not with a product list.",
  },
  {
    title: "Clear tradeoffs",
    description:
      "Recommendations explain who each option suits, where it falls short, and what to consider before paying.",
  },
  {
    title: "Editorial independence",
    description:
      "Commercial relationships do not guarantee a favorable mention or determine the order of a comparison.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word Game Resources
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Choose word tools with confidence
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium leading-8 text-violet-50">
            Practical guides for comparing word references and vocabulary tools,
            with clear selection criteria, honest tradeoffs, and no pressure to
            buy.
          </p>

          <Link
            href="#resource-guides"
            className="mt-8 inline-block rounded-full bg-amber-300 px-8 py-4 font-black text-slate-950 hover:bg-amber-200"
          >
            Browse resource guides
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <section id="resource-guides" className="scroll-mt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-600">
              Featured guides
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Start with the resource you need
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              Each guide is designed around a specific choice, so you can compare
              the details that matter without sorting through unrelated options.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {resourceGuides.map((guide, index) => (
              <article
                key={guide.href}
                className="flex h-full flex-col rounded-3xl border border-violet-100 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-violet-100 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-violet-700">
                    {guide.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-200 text-xl font-black text-slate-950"
                  >
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-950">
                  {guide.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {guide.description}
                </p>

                <div className="mt-5 rounded-2xl bg-violet-50 p-4">
                  <p className="text-sm font-black text-violet-800">Best for</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {guide.bestFor}
                  </p>
                </div>

                <Link
                  href={guide.href}
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-violet-600 px-6 py-3 font-black text-white hover:bg-violet-700"
                >
                  Read the guide
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">
              How recommendations work
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Helpful comparisons, clearly explained
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              LetterWise separates editorial judgments from commercial
              relationships. When a link can earn a commission, the relationship
              will be disclosed near the recommendation.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reviewPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-xl font-black text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/affiliate-disclosure"
            className="mt-8 inline-block font-black text-amber-300 underline decoration-amber-300/50 underline-offset-4 hover:text-amber-200"
          >
            Read the Affiliate Disclosure
          </Link>
        </section>

        <section className="mx-auto mt-16 max-w-4xl rounded-3xl border border-violet-100 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-600">
            Prefer a free tool?
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">
            Keep solving with LetterWise
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            LetterWise word solvers, word lists, games, and strategy guides remain
            available without requiring an account or purchase.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/tools"
              className="rounded-full bg-amber-300 px-7 py-3 font-black text-slate-950 hover:bg-amber-200"
            >
              Explore free tools
            </Link>
            <Link
              href="/word-guides"
              className="rounded-full bg-violet-100 px-7 py-3 font-black text-violet-800 hover:bg-violet-200"
            >
              Browse word guides
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
