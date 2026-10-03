"use client";

import { useMemo, useState } from "react";

type MatchMode = "contains" | "starts" | "ends";
type SortOrder = "az" | "za";

type WordListBrowserProps = {
  words: string[];
  totalCount?: number;
  title: string;
  description: string;
  emptyMessage?: string;
};

export default function WordListBrowser({
  words,
  totalCount = words.length,
  title,
  description,
  emptyMessage = "No matching words found.",
}: WordListBrowserProps) {
  const [query, setQuery] = useState("");
  const [matchMode, setMatchMode] = useState<MatchMode>("contains");
  const [sortOrder, setSortOrder] = useState<SortOrder>("az");

  const cleanQuery = query.toLowerCase().replace(/[^a-z]/g, "");

  const filteredWords = useMemo(() => {
    const matches = cleanQuery
      ? words.filter((word) => {
          if (matchMode === "starts") return word.startsWith(cleanQuery);
          if (matchMode === "ends") return word.endsWith(cleanQuery);
          return word.includes(cleanQuery);
        })
      : words;

    return [...matches].sort((a, b) =>
      sortOrder === "az" ? a.localeCompare(b) : b.localeCompare(a),
    );
  }, [cleanQuery, matchMode, sortOrder, words]);

  const countLabel = cleanQuery
    ? `${filteredWords.length} shown matches`
    : words.length < totalCount
      ? `${words.length} of ${totalCount} words`
      : `${totalCount} words`;

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
          {countLabel}
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
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

        <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-[1fr_1fr_auto]">
          <label className="text-sm font-bold text-slate-700">
            Match
            <select
              value={matchMode}
              onChange={(event) => setMatchMode(event.target.value as MatchMode)}
              className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:border-violet-400"
            >
              <option value="contains">Contains</option>
              <option value="starts">Starts with</option>
              <option value="ends">Ends with</option>
            </select>
          </label>

          <label className="text-sm font-bold text-slate-700">
            Sort
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as SortOrder)}
              className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:border-violet-400"
            >
              <option value="az">A to Z</option>
              <option value="za">Z to A</option>
            </select>
          </label>

          <button
            type="button"
            onClick={() => {
              setQuery("");
              setMatchMode("contains");
              setSortOrder("az");
            }}
            className="self-end rounded-xl border border-violet-200 px-5 py-2 text-sm font-black text-violet-700 hover:bg-violet-50"
          >
            Reset
          </button>
        </div>
      </div>

      {filteredWords.length > 0 ? (
        <div
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          aria-live="polite"
        >
          {filteredWords.map((word) => (
            <a
              key={word}
              href={`/word-finder?letters=${word}`}
              rel="nofollow"
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
