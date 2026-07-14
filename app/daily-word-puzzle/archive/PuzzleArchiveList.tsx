"use client";

import { useSyncExternalStore } from "react";
import { getArchivePuzzles } from "@/data/dailyPuzzles";

function subscribe() {
  return () => {};
}

export default function PuzzleArchiveList() {
  const isBrowser = useSyncExternalStore(subscribe, () => true, () => false);
  const puzzles = isBrowser ? getArchivePuzzles() : [];

  return (
    <section className="mt-12">
      {!isBrowser ? (
        <div className="rounded-3xl border border-violet-100 bg-white p-8 text-center text-slate-600">
          Loading available puzzles…
        </div>
      ) : (
        <div className="grid gap-4">
          {puzzles.map((puzzle) => (
            <div
              key={puzzle.date}
              className="rounded-3xl border border-violet-100 bg-white p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{puzzle.date}</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Replay the easy, medium, or hard challenge from this date.
                  </p>
                </div>

                <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-600">
                  Answers hidden
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  href={`/daily-word-puzzle?date=${puzzle.date}&level=easy`}
                  className="rounded-2xl border border-violet-100 bg-violet-50 p-4 hover:bg-violet-100"
                >
                  <p className="text-sm text-slate-600">Easy</p>
                  <p className="mt-1 text-xl font-bold">Play Easy</p>
                  <p className="mt-2 text-sm text-slate-600">
                    A simpler five-letter word.
                  </p>
                </a>

                <a
                  href={`/daily-word-puzzle?date=${puzzle.date}&level=medium`}
                  className="rounded-2xl border border-violet-100 bg-violet-50 p-4 hover:bg-violet-100"
                >
                  <p className="text-sm text-slate-600">Medium</p>
                  <p className="mt-1 text-xl font-bold">Play Medium</p>
                  <p className="mt-2 text-sm text-slate-600">
                    A balanced daily challenge.
                  </p>
                </a>

                <a
                  href={`/daily-word-puzzle?date=${puzzle.date}&level=hard`}
                  className="rounded-2xl border border-violet-100 bg-violet-50 p-4 hover:bg-violet-100"
                >
                  <p className="text-sm text-slate-600">Hard</p>
                  <p className="mt-1 text-xl font-bold">Play Hard</p>
                  <p className="mt-2 text-sm text-slate-600">
                    A more difficult word.
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
