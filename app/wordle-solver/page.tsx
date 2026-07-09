"use client";

import { useMemo, useState } from "react";
import { words } from "@/data/words";
import { solveWordle } from "@/lib/wordle";

export default function WordleSolverPage() {
  const [pattern, setPattern] = useState("");
  const [includes, setIncludes] = useState("");
  const [excludes, setExcludes] = useState("");

  const results = useMemo(() => {
    return solveWordle(words, {
      pattern,
      includes,
      excludes,
    }).slice(0, 300);
  }, [pattern, includes, excludes]);

  const hasClues = pattern || includes || excludes;

  function clearSolver() {
    setPattern("");
    setIncludes("");
    setExcludes("");
  }

  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Wordle Helper
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Wordle Solver
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Use your green, yellow, and gray letters to narrow down possible
            five-letter Wordle answers.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-5 shadow-xl shadow-violet-950/20">
            <div className="grid gap-3">
              <div className="rounded-2xl border-2 border-slate-900 bg-white px-5 py-4 text-left">
                <label htmlFor="pattern" className="block text-sm font-black text-slate-900">
                  Green letters
                </label>
                <input
                  id="pattern"
                  value={pattern}
                  onChange={(event) => setPattern(event.target.value)}
                  placeholder="Use dots for unknown letters, like c...e"
                  className="mt-2 w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-600"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left">
                  <label htmlFor="includes" className="block text-sm font-black text-slate-900">
                    Yellow letters
                  </label>
                  <input
                    id="includes"
                    value={includes}
                    onChange={(event) => setIncludes(event.target.value)}
                    placeholder="Letters in the word"
                    className="mt-2 w-full bg-transparent text-base font-semibold text-slate-900 outline-none placeholder:text-slate-600"
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left">
                  <label htmlFor="excludes" className="block text-sm font-black text-slate-900">
                    Gray letters
                  </label>
                  <input
                    id="excludes"
                    value={excludes}
                    onChange={(event) => setExcludes(event.target.value)}
                    placeholder="Letters not in the word"
                    className="mt-2 w-full bg-transparent text-base font-semibold text-slate-900 outline-none placeholder:text-slate-600"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                className="rounded-full bg-amber-300 px-10 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
              >
                Solve
              </button>

              {hasClues && (
                <button
                  type="button"
                  onClick={clearSolver}
                  className="rounded-full border border-slate-200 px-8 py-4 text-sm font-black text-slate-700 hover:bg-slate-50"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-3 sm:grid-cols-5">
          <a href="/word-lists" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Lists
          </a>
          <a href="/word-finder" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Finder
          </a>
          <a href="/unscramble-letters" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Unscrambler
          </a>
          <a href="/wordle-solver" className="rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700">
            Wordle
          </a>
          <a href="/daily-word-puzzle" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Daily Game
          </a>
        </div>

        <section className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-black">
                {hasClues ? "Possible Wordle answers" : "Add your Wordle clues"}
              </h2>

              <p className="mt-2 text-slate-600">
                {hasClues
                  ? "These words match the clues you entered."
                  : "Enter green, yellow, or gray letters above to start narrowing the list."}
              </p>
            </div>

            {hasClues && (
              <p className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
                {results.length} results
              </p>
            )}
          </div>

          {hasClues ? (
            results.length > 0 ? (
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {results.map((word) => (
                  <a
                    key={word}
                    href={`/word-finder?letters=${word}`}
                    className="rounded-2xl border border-violet-100 bg-white px-4 py-3 text-center text-lg font-black uppercase tracking-wide shadow-sm hover:border-violet-300 hover:bg-violet-50"
                  >
                    {word}
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-3xl border border-violet-100 bg-white p-8 text-center shadow-sm">
                <h3 className="text-2xl font-black">No matching words</h3>
                <p className="mt-2 text-slate-600">
                  Check your clues or remove some gray letters.
                </p>
              </div>
            )
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black">Green</h3>
                <p className="mt-2 text-slate-600">
                  Put correct letters in their exact positions. Use dots for unknown spots.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black">Yellow</h3>
                <p className="mt-2 text-slate-600">
                  Add letters that are in the word, but not necessarily in the right place.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black">Gray</h3>
                <p className="mt-2 text-slate-600">
                  Add letters that are not in the answer.
                </p>
              </div>
            </div>
          )}
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            How to use the Wordle Solver
          </h2>

          <p className="mt-4">
            Type your green letters in the correct places and use dots for
            unknown positions. Add yellow letters that are in the word, then add
            gray letters that should be removed from the answer list.
          </p>

          <h2 className="mt-10 text-3xl font-black text-slate-900">
            Example
          </h2>

          <p className="mt-4">
            If you know the word starts with C and ends with E, type
            <strong> c...e </strong> in the green letters box. Then add any
            yellow or gray letters from your guesses.
          </p>
        </section>
      </section>
    </main>
  );
}
