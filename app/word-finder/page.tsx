"use client";

import { useEffect, useMemo, useState } from "react";
import { words } from "@/data/words";
import { unscrambleWords, cleanLetters } from "@/lib/unscramble";

function groupWordsByLength(wordList: string[]) {
  const grouped = new Map<number, string[]>();

  for (const word of wordList) {
    const length = word.length;
    const current = grouped.get(length) || [];
    current.push(word);
    grouped.set(length, current);
  }

  return Array.from(grouped.entries()).sort((a, b) => b[0] - a[0]);
}

export default function WordFinderPage() {
  const [letters, setLetters] = useState("");
  const [starts, setStarts] = useState("");
  const [ends, setEnds] = useState("");
  const [contains, setContains] = useState("");
  const [length, setLength] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(window.location.search);

      setLetters(params.get("letters") || "");
      setStarts(params.get("starts") || "");
      setEnds(params.get("ends") || "");
      setContains(params.get("contains") || "");
      setLength(params.get("length") || "");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const results = useMemo(() => {
    const exactLength = Number(length);

    return unscrambleWords(letters, words, {
      minLength: 2,
      exactLength: Number.isFinite(exactLength) ? exactLength : 0,
      startsWith: starts,
      endsWith: ends,
      contains,
    }).slice(0, 500);
  }, [letters, starts, ends, contains, length]);

  const groupedResults = useMemo(() => {
    return groupWordsByLength(results);
  }, [results]);

  const cleanedLetters = cleanLetters(letters);
  const hasSearched = cleanedLetters.length > 0;
  const hasFilters = starts || ends || contains || length;

  function updateUrl() {
    const params = new URLSearchParams();

    if (letters) params.set("letters", letters);
    if (starts) params.set("starts", starts);
    if (ends) params.set("ends", ends);
    if (contains) params.set("contains", contains);
    if (length) params.set("length", length);

    window.history.replaceState(null, "", `/word-finder?${params.toString()}`);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateUrl();
  }

  function clearSearch() {
    setLetters("");
    setStarts("");
    setEnds("");
    setContains("");
    setLength("");
    window.history.replaceState(null, "", "/word-finder");
  }

  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word Solver
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Word Finder
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Enter letters and find possible words for word games, puzzles,
            spelling practice, and vocabulary building.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-5 shadow-xl shadow-violet-950/20"
          >
            <div className="rounded-2xl border-2 border-slate-900 bg-white px-5 py-4 text-left">
              <label htmlFor="letters" className="sr-only">
                Enter letters
              </label>

              <input
                id="letters"
                value={letters}
                onChange={(event) => setLetters(event.target.value)}
                placeholder="Enter letters, like crane or stone"
                className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-4">
              <input
                value={starts}
                onChange={(event) => setStarts(event.target.value)}
                placeholder="Starts"
                className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-900 outline-none placeholder:text-slate-500"
              />

              <input
                value={ends}
                onChange={(event) => setEnds(event.target.value)}
                placeholder="Ends"
                className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-900 outline-none placeholder:text-slate-500"
              />

              <input
                value={contains}
                onChange={(event) => setContains(event.target.value)}
                placeholder="Contains"
                className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-900 outline-none placeholder:text-slate-500"
              />

              <input
                value={length}
                onChange={(event) => setLength(event.target.value)}
                placeholder="Length"
                inputMode="numeric"
                className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-900 outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button
                type="submit"
                className="rounded-full bg-amber-300 px-12 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
              >
                Search
              </button>

              {(hasSearched || hasFilters) && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="rounded-full border border-slate-200 px-8 py-4 text-sm font-black text-slate-700 hover:bg-slate-50"
                >
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-3 sm:grid-cols-5">
          <a
            href="/word-lists"
            className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100"
          >
            Word Lists
          </a>
          <a
            href="/unscramble-letters"
            className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100"
          >
            Unscrambler
          </a>
          <a
            href="/word-finder"
            className="rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700"
          >
            Word Finder
          </a>
          <a
            href="/wordle-solver"
            className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100"
          >
            Wordle
          </a>
          <a
            href="/daily-word-puzzle"
            className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100"
          >
            Daily Game
          </a>
        </div>

        <section className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-black">
                {hasSearched ? "Words you can make" : "Start by entering letters"}
              </h2>

              <p className="mt-2 text-slate-600">
                {hasSearched
                  ? `Showing possible words from "${cleanedLetters.toUpperCase()}".`
                  : "Type your letters above to find possible words."}
              </p>
            </div>

            {hasSearched && (
              <p className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
                {results.length} results
              </p>
            )}
          </div>

          {hasSearched ? (
            results.length > 0 ? (
              <div className="mt-6 grid gap-8">
                {groupedResults.map(([wordLength, group]) => (
                  <section
                    key={wordLength}
                    className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-2xl font-black">
                        {wordLength} Letter Words
                      </h3>

                      <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
                        {group.length} words
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                      {group.map((word) => (
                        <a
                          key={word}
                          href={`/word-finder?letters=${word}`}
                          className="rounded-2xl border border-violet-100 bg-white px-4 py-3 text-center text-lg font-black uppercase tracking-wide shadow-sm hover:border-violet-300 hover:bg-violet-50"
                        >
                          {word}
                        </a>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-3xl border border-violet-100 bg-white p-8 text-center shadow-sm">
                <h3 className="text-2xl font-black">No words found</h3>
                <p className="mt-2 text-slate-600">
                  Try using fewer filters or entering different letters.
                </p>
              </div>
            )
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <button
                type="button"
                onClick={() => setLetters("crane")}
                className="rounded-2xl border border-violet-100 bg-white p-6 text-left shadow-sm hover:border-violet-300 hover:bg-violet-50"
              >
                <h3 className="text-2xl font-black">Try CRANE</h3>
                <p className="mt-2 text-slate-600">
                  See how the Word Finder groups possible words.
                </p>
              </button>

              <a
                href="/5-letter-words"
                className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:border-violet-300 hover:bg-violet-50"
              >
                <h3 className="text-2xl font-black">5 Letter Words</h3>
                <p className="mt-2 text-slate-600">
                  Browse useful words for Wordle and other games.
                </p>
              </a>

              <a
                href="/wordle-solver"
                className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:border-violet-300 hover:bg-violet-50"
              >
                <h3 className="text-2xl font-black">Wordle Solver</h3>
                <p className="mt-2 text-slate-600">
                  Use known letters to narrow down answers.
                </p>
              </a>
            </div>
          )}
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            What is Word Finder?
          </h2>

          <p className="mt-4">
            Word Finder helps you turn letters into possible words. It is useful
            for word games, spelling practice, vocabulary building, and puzzle
            solving.
          </p>

          <h2 className="mt-10 text-3xl font-black text-slate-900">
            How to use it
          </h2>

          <p className="mt-4">
            Enter your letters, then add optional filters. You can search by
            starting letters, ending letters, contained letters, or exact word
            length.
          </p>
        </section>
      </section>
    </main>
  );
}
