"use client";

import { useMemo, useState } from "react";
import { words } from "@/data/words";
import { solveWordle } from "@/lib/wordle";

export default function WordleSolverPage() {
  const [pattern, setPattern] = useState("_____");
  const [includes, setIncludes] = useState("");
  const [excludes, setExcludes] = useState("");

  const results = useMemo(() => {
    return solveWordle(words, {
      pattern,
      includes,
      excludes,
    });
  }, [pattern, includes, excludes]);

  const visibleResults = results.slice(0, 100);

  function clearAll() {
    setPattern("_____");
    setIncludes("");
    setExcludes("");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Wordle helper
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Wordle Solver
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Find possible five-letter words using correct letters, included
            letters, and letters to exclude.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <label
            htmlFor="pattern"
            className="block text-sm font-medium text-slate-300"
          >
            Correct letter pattern
          </label>

          <input
            id="pattern"
            type="text"
            maxLength={5}
            value={pattern}
            onChange={(event) => setPattern(event.target.value)}
            placeholder="Example: s__re"
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
          />

          <p className="mt-2 text-sm text-slate-500">
            Use underscores for unknown letters. Example:{" "}
            <span className="text-slate-300">s__re</span>
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="includes"
                className="block text-sm font-medium text-slate-300"
              >
                Must include letters
              </label>

              <input
                id="includes"
                type="text"
                value={includes}
                onChange={(event) => setIncludes(event.target.value)}
                placeholder="Example: a t"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
              />

              <p className="mt-2 text-sm text-slate-500">
                Add yellow letters here.
              </p>
            </div>

            <div>
              <label
                htmlFor="excludes"
                className="block text-sm font-medium text-slate-300"
              >
                Exclude letters
              </label>

              <input
                id="excludes"
                type="text"
                value={excludes}
                onChange={(event) => setExcludes(event.target.value)}
                placeholder="Example: b c d"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
              />

              <p className="mt-2 text-sm text-slate-500">
                Add gray letters here.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Try pattern <span className="text-slate-300">s__re</span>, include{" "}
            <span className="text-slate-300">a</span>, and exclude{" "}
            <span className="text-slate-300">t</span>.
          </p>
        </div>

        <section className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Possible words</h2>
              <p className="mt-1 text-sm text-slate-400">
                {pattern || includes || excludes
                  ? `${results.length} words found${
                      results.length > 100 ? " — showing first 100" : ""
                    }`
                  : "Enter clues to see results"}
              </p>
            </div>

            {(pattern !== "_____" || includes || excludes) && (
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
                    <p className="text-xs text-slate-500">5 letters</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-400">
                No possible words found. Try fewer excluded letters or leave
                more unknown spaces in the pattern.
              </p>
            )}
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Use green letters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Put known correct-position letters into the pattern.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Use yellow letters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Add letters that must appear somewhere in the word.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Remove gray letters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Exclude letters that are not in the answer.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}