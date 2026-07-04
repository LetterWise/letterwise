"use client";

import { useMemo, useState } from "react";
import { words } from "@/data/words";
import { unscrambleWords } from "@/lib/unscramble";

export default function UnscrambleLettersPage() {
  const [letters, setLetters] = useState("");
  const [minLength, setMinLength] = useState(2);

  const results = useMemo(() => {
    return unscrambleWords(letters, words, minLength);
  }, [letters, minLength]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Letter unscrambler
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Unscramble Letters
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Enter your letters to find possible words for word games, puzzles,
            spelling practice, and vocabulary building.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <label
            htmlFor="letters"
            className="block text-sm font-medium text-slate-300"
          >
            Your letters
          </label>

          <input
            id="letters"
            type="text"
            value={letters}
            onChange={(event) => setLetters(event.target.value)}
            placeholder="Example: tcahe"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
          />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <label
              htmlFor="minLength"
              className="text-sm font-medium text-slate-300"
            >
              Minimum word length
            </label>

            <select
              id="minLength"
              value={minLength}
              onChange={(event) => setMinLength(Number(event.target.value))}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400 sm:w-40"
            >
              <option value={2}>2 letters</option>
              <option value={3}>3 letters</option>
              <option value={4}>4 letters</option>
              <option value={5}>5 letters</option>
            </select>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Try typing <span className="text-slate-300">tcahe</span> or{" "}
            <span className="text-slate-300">aerst</span>.
          </p>
        </div>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Results</h2>
              <p className="mt-1 text-sm text-slate-400">
                {letters.trim()
                  ? `${results.length} words found`
                  : "Enter letters to see results"}
              </p>
            </div>

            {letters && (
              <button
                onClick={() => setLetters("")}
                className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-900"
              >
                Clear
              </button>
            )}
          </div>

          <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-900 p-6">
            {results.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {results.map((word) => (
                  <div
                    key={word}
                    className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3"
                  >
                    <p className="text-lg font-semibold">{word}</p>
                    <p className="text-xs text-slate-500">
                      {word.length} letters
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-400">
                {letters.trim()
                  ? "No words found yet. Try more letters or lower the minimum word length."
                  : "Your results will appear here."}
              </p>
            )}
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Word games</h2>
            <p className="mt-2 text-sm text-slate-400">
              Useful for Scrabble-style games, anagrams, and puzzle solving.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Spelling practice</h2>
            <p className="mt-2 text-sm text-slate-400">
              Turn mixed-up spelling words into classroom activities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Fast filters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Length filters are live. More filters are coming soon.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}