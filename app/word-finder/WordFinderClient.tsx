"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type SearchFields = {
  letters: string;
  starts: string;
  ends: string;
  contains: string;
  length: string;
};

type SearchResults = {
  query: string;
  familiar: string[];
  dictionary: string[];
  total: number;
  familiarTotal: number;
  dictionaryTotal: number;
  limited: boolean;
};

const emptyFields: SearchFields = {
  letters: "",
  starts: "",
  ends: "",
  contains: "",
  length: "",
};

function cleanLetters(value: string) {
  return value.toLowerCase().replace(/[^a-z]/g, "");
}

function buildSearchParams(fields: SearchFields) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(fields)) {
    const trimmed = value.trim();
    if (trimmed) params.set(key, trimmed);
  }

  return params;
}

function WordGrid({ words }: { words: string[] }) {
  return (
    <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
      {words.map((word) => (
        <li
          key={word}
          className="rounded-lg border border-violet-100 bg-white px-3 py-3 text-center font-bold uppercase tracking-wide text-[#293632]"
        >
          {word}
        </li>
      ))}
    </ul>
  );
}

export default function WordFinderClient({
  initialFields,
}: {
  initialFields: SearchFields;
}) {
  const [fields, setFields] = useState<SearchFields>(initialFields);
  const [results, setResults] = useState<SearchResults | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(() =>
    Boolean(
      initialFields.starts ||
        initialFields.ends ||
        initialFields.contains ||
        initialFields.length,
    ),
  );
  const requestRef = useRef<AbortController | null>(null);
  const resultsRef = useRef<HTMLElement>(null);

  const runSearch = useCallback(
    async (
      nextFields: SearchFields,
      options: { updateUrl?: boolean; moveFocus?: boolean } = {},
    ) => {
      const { updateUrl = true, moveFocus = true } = options;
      const cleaned = cleanLetters(nextFields.letters);

      if (cleaned.length < 2) {
        setResults(null);
        setStatus("error");
        setError("Enter at least two letters, such as CRANE.");
        return;
      }

      requestRef.current?.abort();
      const controller = new AbortController();
      requestRef.current = controller;

      const params = buildSearchParams(nextFields);

      if (updateUrl) {
        window.history.replaceState(null, "", `/word-finder?${params.toString()}`);
      }

      setError("");
      setResults(null);
      setStatus("loading");

      try {
        const response = await fetch(`/api/word-finder?${params.toString()}`, {
          signal: controller.signal,
        });
        const data = (await response.json()) as SearchResults | { error?: string };

        if (!response.ok || !("total" in data)) {
          throw new Error(
            "error" in data && data.error
              ? data.error
              : "The search could not be completed. Please try again.",
          );
        }

        setResults(data);
        setStatus("success");

        if (moveFocus) {
          window.setTimeout(() => {
            resultsRef.current?.focus();
            resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }
      } catch (caughtError) {
        if (caughtError instanceof DOMException && caughtError.name === "AbortError") {
          return;
        }

        setResults(null);
        setStatus("error");
        setError(
          caughtError instanceof Error
            ? caughtError.message
            : "The search could not be completed. Please try again.",
        );
      }
    },
    [],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (cleanLetters(initialFields.letters).length >= 2) {
        void runSearch(initialFields, { updateUrl: false, moveFocus: false });
      }
    }, 0);

    return () => {
      window.clearTimeout(timer);
      requestRef.current?.abort();
    };
  }, [initialFields, runSearch]);

  function updateField(field: keyof SearchFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void runSearch(fields);
  }

  function tryExample() {
    const example = { ...emptyFields, letters: "crane" };
    setFields(example);
    void runSearch(example);
  }

  function clearSearch() {
    requestRef.current?.abort();
    setFields(emptyFields);
    setResults(null);
    setStatus("idle");
    setError("");
    setFiltersOpen(false);
    window.history.replaceState(null, "", "/word-finder");
  }

  const hasOptionalFilters = Boolean(
    fields.starts || fields.ends || fields.contains || fields.length,
  );
  const primaryWords = results
    ? results.familiar.length > 0
      ? results.familiar
      : results.dictionary.slice(0, 40)
    : [];
  const additionalWords = results
    ? results.familiar.length > 0
      ? results.dictionary
      : results.dictionary.slice(40)
    : [];

  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#24302d]">
      <section className="border-b border-violet-100 px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">
            Word tool
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#1f2926] sm:text-5xl">
            Word Finder
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#66706c]">
            Enter the letters you have. LetterWise will show the words you can
            make using each letter no more than once.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-2xl border border-violet-100 bg-white p-5 shadow-sm sm:p-7"
          >
            <label htmlFor="letters" className="block font-bold text-[#24302d]">
              Letters you have
            </label>
            <p id="letters-help" className="mt-1 text-sm text-[#66706c]">
              For example, enter CRANE to find words made from C, R, A, N, and E.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                id="letters"
                value={fields.letters}
                onChange={(event) => updateField("letters", event.target.value)}
                aria-describedby="letters-help"
                autoComplete="off"
                spellCheck={false}
                placeholder="e.g. CRANE"
                className="min-h-14 flex-1 rounded-xl border border-violet-200 bg-white px-4 text-lg font-semibold uppercase tracking-wider text-[#24302d] outline-none placeholder:normal-case placeholder:tracking-normal placeholder:text-[#8a9490] focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="min-h-14 rounded-xl bg-violet-600 px-7 font-bold text-white transition hover:bg-violet-700 disabled:cursor-wait disabled:opacity-70"
              >
                {status === "loading" ? "Finding words…" : "Find words"}
              </button>
            </div>

            <details
              className="mt-5 rounded-xl border border-violet-100 bg-violet-50/70"
              open={filtersOpen}
              onToggle={(event) => setFiltersOpen(event.currentTarget.open)}
            >
              <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-[#34423e] marker:hidden">
                <span aria-hidden="true" className="mr-2 text-violet-700">+</span>
                Optional filters
              </summary>
              <div className="grid gap-4 border-t border-violet-100 px-4 py-5 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-semibold text-[#34423e]">
                  Starts with
                  <input
                    value={fields.starts}
                    onChange={(event) => updateField("starts", event.target.value)}
                    autoComplete="off"
                    className="min-h-11 rounded-lg border border-violet-200 bg-white px-3 font-normal uppercase outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold text-[#34423e]">
                  Ends with
                  <input
                    value={fields.ends}
                    onChange={(event) => updateField("ends", event.target.value)}
                    autoComplete="off"
                    className="min-h-11 rounded-lg border border-violet-200 bg-white px-3 font-normal uppercase outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold text-[#34423e]">
                  Contains this sequence
                  <input
                    value={fields.contains}
                    onChange={(event) => updateField("contains", event.target.value)}
                    autoComplete="off"
                    className="min-h-11 rounded-lg border border-violet-200 bg-white px-3 font-normal uppercase outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold text-[#34423e]">
                  Exact word length
                  <input
                    type="number"
                    min="2"
                    max="15"
                    inputMode="numeric"
                    value={fields.length}
                    onChange={(event) => updateField("length", event.target.value)}
                    className="min-h-11 rounded-lg border border-violet-200 bg-white px-3 font-normal outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
                  />
                </label>
              </div>
            </details>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <button
                type="button"
                onClick={tryExample}
                className="font-bold text-violet-700 hover:text-violet-800"
              >
                Try the example CRANE
              </button>
              {(fields.letters || hasOptionalFilters || results) && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="font-semibold text-[#66706c] hover:text-[#24302d]"
                >
                  Clear everything
                </button>
              )}
            </div>

            {error ? (
              <p role="alert" className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
                {error}
              </p>
            ) : null}

            <p className="sr-only" aria-live="polite">
              {status === "loading"
                ? "Finding words."
                : results
                  ? `${results.total} words found.`
                  : ""}
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-4xl scroll-mt-24 px-6 py-12">
        {status === "idle" ? (
          <div className="rounded-2xl border border-violet-100 bg-white px-6 py-8">
            <h2 className="text-2xl font-bold text-[#1f2926]">How it works</h2>
            <ol className="mt-5 grid gap-4 text-[#66706c] sm:grid-cols-3">
              <li>
                <strong className="block text-[#34423e]">1. Enter letters</strong>
                <span className="block">Use the tiles or letters in front of you.</span>
              </li>
              <li>
                <strong className="block text-[#34423e]">2. Add a filter</strong>
                <span className="block">Only if you need a more exact match.</span>
              </li>
              <li>
                <strong className="block text-[#34423e]">3. Find words</strong>
                <span className="block">Familiar matches appear first.</span>
              </li>
            </ol>
          </div>
        ) : null}

        {status === "loading" ? (
          <div className="rounded-2xl border border-violet-100 bg-white px-6 py-10 text-center text-[#66706c]">
            Checking the dictionary…
          </div>
        ) : null}

        {results ? (
          <section ref={resultsRef} tabIndex={-1} className="outline-none">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                  Results
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#1f2926]">
                  {results.total === 0
                    ? "No matches found"
                    : `Words from ${results.query.toUpperCase()}`}
                </h2>
              </div>
              {results.total > 0 ? (
                <p className="text-sm font-semibold text-[#66706c]">
                  {results.total} {results.total === 1 ? "match" : "matches"}
                </p>
              ) : null}
            </div>

            {results.total === 0 ? (
              <div className="mt-6 rounded-2xl border border-violet-100 bg-white p-7">
                <p className="leading-7 text-[#66706c]">
                  Check the spelling, remove an optional filter, or try a different
                  group of letters.
                </p>
              </div>
            ) : (
              <div className="mt-7">
                <h3 className="text-xl font-bold text-[#24302d]">
                  {results.familiar.length > 0 ? "Familiar matches" : "Dictionary matches"}
                </h3>
                <p className="mt-1 text-sm text-[#66706c]">
                  {results.familiar.length > 0
                    ? "Common, recognizable words are shown first."
                    : "These matches appear in the LetterWise dictionary."}
                </p>
                <WordGrid words={primaryWords} />

                {additionalWords.length > 0 ? (
                  <details className="mt-7 rounded-xl border border-violet-100 bg-white">
                    <summary className="cursor-pointer px-5 py-4 font-bold text-violet-700">
                      Show more dictionary words ({results.dictionaryTotal})
                    </summary>
                    <div className="border-t border-violet-100 p-5">
                      <p className="text-sm leading-6 text-[#66706c]">
                        This section can include uncommon, regional, or specialist
                        dictionary entries.
                      </p>
                      <WordGrid words={additionalWords} />
                      {results.limited ? (
                        <p className="mt-5 text-sm text-[#66706c]">
                          Only the first group of matches is shown. Add a filter to
                          narrow the result.
                        </p>
                      ) : null}
                    </div>
                  </details>
                ) : null}
              </div>
            )}
          </section>
        ) : null}
      </section>

      <section className="border-t border-violet-100 bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[#1f2926]">Other useful tools</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Link href="/wordle-solver" className="rounded-xl border border-violet-100 p-4 font-bold hover:bg-violet-50">
              Wordle Solver
            </Link>
            <Link href="/word-lists" className="rounded-xl border border-violet-100 p-4 font-bold hover:bg-violet-50">
              Browse Word Lists
            </Link>
            <Link href="/daily-word-puzzle" className="rounded-xl border border-violet-100 p-4 font-bold hover:bg-violet-50">
              Daily Word Puzzle
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
