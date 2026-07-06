"use client";

import { useMemo, useState } from "react";
import { words } from "@/data/words";
import { unscrambleWords } from "@/lib/unscramble";

export default function UnscrambleLettersPage() {
  const [letters, setLetters] = useState("");
  const [minLength, setMinLength] = useState(2);
  const [exactLength, setExactLength] = useState(0);
  const [startsWith, setStartsWith] = useState("");
  const [endsWith, setEndsWith] = useState("");
  const [contains, setContains] = useState("");

  const results = useMemo(() => {
    return unscrambleWords(letters, words, {
      minLength,
      exactLength,
      startsWith,
      endsWith,
      contains,
    });
  }, [letters, minLength, exactLength, startsWith, endsWith, contains]);

  const visibleResults = results.slice(0, 100);

  function clearAll() {
    setLetters("");
    setMinLength(2);
    setExactLength(0);
    setStartsWith("");
    setEndsWith("");
    setContains("");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
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
            Enter your letters and filter the results by length, starting
            letters, ending letters, or letters that must appear in the word.
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

          <div className="mt-6 grid gap-4 md:grid-cols-5">
            <div>
              <label
                htmlFor="minLength"
                className="block text-sm font-medium text-slate-300"
              >
                Minimum length
              </label>

              <select
                id="minLength"
                value={minLength}
                onChange={(event) => setMinLength(Number(event.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400"
              >
                <option value={2}>2+</option>
                <option value={3}>3+</option>
                <option value={4}>4+</option>
                <option value={5}>5+</option>
                <option value={6}>6+</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="exactLength"
                className="block text-sm font-medium text-slate-300"
              >
                Exact length
              </label>

              <select
                id="exactLength"
                value={exactLength}
                onChange={(event) => setExactLength(Number(event.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400"
              >
                <option value={0}>Any</option>
                <option value={2}>2 letters</option>
                <option value={3}>3 letters</option>
                <option value={4}>4 letters</option>
                <option value={5}>5 letters</option>
                <option value={6}>6 letters</option>
                <option value={7}>7 letters</option>
                <option value={8}>8 letters</option>
                <option value={9}>9 letters</option>
                <option value={10}>10 letters</option>
                <option value={11}>11 letters</option>
                <option value={12}>12 letters</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="startsWith"
                className="block text-sm font-medium text-slate-300"
              >
                Starts with
              </label>

              <input
                id="startsWith"
                type="text"
                value={startsWith}
                onChange={(event) => setStartsWith(event.target.value)}
                placeholder="st"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="endsWith"
                className="block text-sm font-medium text-slate-300"
              >
                Ends with
              </label>

              <input
                id="endsWith"
                type="text"
                value={endsWith}
                onChange={(event) => setEndsWith(event.target.value)}
                placeholder="er"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="contains"
                className="block text-sm font-medium text-slate-300"
              >
                Contains
              </label>

              <input
                id="contains"
                type="text"
                value={contains}
                onChange={(event) => setContains(event.target.value)}
                placeholder="ea"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Try <span className="text-slate-300">aerst</span>,{" "}
            <span className="text-slate-300">tcahe</span>, or{" "}
            <span className="text-slate-300">triangle</span>.
          </p>
        </div>

        <section className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Results</h2>
              <p className="mt-1 text-sm text-slate-400">
                {letters.trim()
                  ? `${results.length} words found${
                      results.length > 100 ? " — showing first 100" : ""
                    }`
                  : "Enter letters to see results"}
              </p>
            </div>

            {(letters ||
              startsWith ||
              endsWith ||
              contains ||
              minLength !== 2 ||
              exactLength !== 0) && (
              <button
                onClick={clearAll}
                className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-900"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-900 p-6">
            {visibleResults.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {visibleResults.map((word) => (
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
                  ? "No words found. Try more letters, fewer filters, or a lower minimum length."
                  : "Your results will appear here."}
              </p>
            )}
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">For word games</h2>
            <p className="mt-2 text-sm text-slate-400">
              Find possible words from mixed letters for anagrams and word
              puzzles.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">For spelling practice</h2>
            <p className="mt-2 text-sm text-slate-400">
              Turn spelling lists into quick word-building activities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Fast filters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Narrow results by length, starting letters, ending letters, and
              included letters.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}