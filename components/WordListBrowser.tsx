"use client";

import { useMemo, useState } from "react";

type WordListBrowserProps = {
  words: string[];
  title: string;
  description: string;
  emptyMessage?: string;
};

export default function WordListBrowser({
  words,
  title,
  description,
  emptyMessage = "No matching words found.",
}: WordListBrowserProps) {
  const [query, setQuery] = useState("");

  const filteredWords = useMemo(() => {
    const cleanQuery = query.toLowerCase().replace(/[^a-z]/g, "");

    if (!cleanQuery) {
      return words;
    }

    return words.filter((word) => word.includes(cleanQuery));
  }, [query, words]);

  return (
    <section className="mt-12 rounded-3xl border border-violet-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-black">{title}</h2>

          <p className="mt-2 text-sm text-slate-600">
            {description}
          </p>
        </div>

        <span className="w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
          {filteredWords.length} words
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 py-4">
        <label htmlFor="word-search" className="sr-only">
          Search this word list
        </label>

        <input
          id="word-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search within this list"
          className="w-full bg-transparent text-base font-semibold text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>

      {filteredWords.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredWords.map((word) => (
            <a
              key={word}
              href={`/word-finder?letters=${word}`}
              className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3 text-center text-lg font-black uppercase tracking-wide hover:border-violet-300 hover:bg-white"
            >
              {word}
            </a>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50 p-6 text-center">
          <h3 className="text-xl font-black">{emptyMessage}</h3>
          <p className="mt-2 text-sm text-slate-600">
            Try a shorter search, or clear the search box.
          </p>
        </div>
      )}
    </section>
  );
}
