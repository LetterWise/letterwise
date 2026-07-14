import type { Metadata } from "next";
import LetterLinksGame from "./LetterLinksGame";
import { words } from "@/data/words";

export const metadata: Metadata = {
  title: "Letter Links Daily Word Ladder",
  description:
    "Play Letter Links, a free daily word ladder. Change one letter at a time to connect the starting word to the goal word.",
  alternates: {
    canonical: "/letter-links",
  },
};

export default function LetterLinksPage() {
  const validWords = words.filter(
    (word) => word.length === 4 && /^[a-z]+$/.test(word),
  );

  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black text-violet-50">
            A fresh puzzle every day
          </p>
          <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
            Letter Links
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Turn the starting word into the goal word. Change exactly one letter at a time, and make a real word at every step.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6">
        <LetterLinksGame validWords={validWords} />

        <section className="mt-12 rounded-3xl border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
          <h2 className="text-3xl font-black">How to play Letter Links</h2>
          <ol className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <li><strong className="text-slate-950">1.</strong> Start with the violet word.</li>
            <li><strong className="text-slate-950">2.</strong> Change one letter to make another valid four-letter word.</li>
            <li><strong className="text-slate-950">3.</strong> Keep linking words until you reach the amber goal.</li>
            <li><strong className="text-slate-950">4.</strong> Match or beat par using the shortest route you can find.</li>
          </ol>
          <p className="mt-6 leading-7 text-slate-600">
            Today’s puzzle is the same for every player. Your completion is stored only in this browser, and a new challenge appears each day.
          </p>
        </section>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href="/daily-word-puzzle"
            className="rounded-2xl bg-violet-100 px-6 py-5 text-center font-black text-violet-800 hover:bg-violet-200"
          >
            Play Daily Word Puzzle
          </a>
          <a
            href="/tools"
            className="rounded-2xl bg-amber-200 px-6 py-5 text-center font-black text-amber-950 hover:bg-amber-300"
          >
            Explore Word Tools
          </a>
        </div>
      </section>
    </main>
  );
}

