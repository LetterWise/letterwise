import type { Metadata } from "next";
import AnagramRushGame from "./AnagramRushGame";
import { anagramRacks, canBuildWord } from "@/data/anagramRush";
import { words } from "@/data/words";

export const metadata: Metadata = {
  title: "Anagram Rush Daily Word Game",
  description:
    "Play Anagram Rush, a free daily word game. Make as many words as possible from seven letters in 60 seconds.",
  alternates: {
    canonical: "/anagram-rush",
  },
};

export default function AnagramRushPage() {
  const gameWords = words.filter(
    (word) => word.length >= 3 && word.length <= 7 && /^[a-z]+$/.test(word),
  );
  const challenges = anagramRacks.map((letters) => ({
    letters,
    validWords: gameWords.filter((word) => canBuildWord(word, letters)),
  }));

  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black text-violet-50">
            Seven letters · Sixty seconds
          </p>
          <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
            Anagram Rush
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Make as many words as you can from today’s seven letters before the clock reaches zero.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6">
        <AnagramRushGame challenges={challenges} />

        <section className="mt-12 rounded-3xl border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
          <h2 className="text-3xl font-black">How to play Anagram Rush</h2>
          <ul className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <li>Use only the seven letters shown. Each letter can be used only as many times as it appears.</li>
            <li>Words must contain at least three letters.</li>
            <li>Three-letter words earn 1 point; four-letter words earn 2. Longer words earn up to 10 points.</li>
            <li>Shuffle the letters whenever you need a fresh perspective.</li>
          </ul>
          <p className="mt-6 leading-7 text-slate-600">
            A new letter set appears each day. Your best result is saved only in this browser, so the game does not require an account or database.
          </p>
        </section>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href="/letter-links"
            className="rounded-2xl bg-violet-100 px-6 py-5 text-center font-black text-violet-800 hover:bg-violet-200"
          >
            Play Letter Links
          </a>
          <a
            href="/daily-word-puzzle"
            className="rounded-2xl bg-amber-200 px-6 py-5 text-center font-black text-amber-950 hover:bg-amber-300"
          >
            Play Daily Word Puzzle
          </a>
        </div>
      </section>
    </main>
  );
}

