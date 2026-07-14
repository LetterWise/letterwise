"use client";

import { FormEvent, useMemo, useState, useSyncExternalStore } from "react";
import {
  differsByOneLetter,
  getDailyLetterLink,
  type LetterLinkPuzzle,
} from "@/data/letterLinks";

type SavedResult = {
  moves: number;
  hints: number;
};

const STORAGE_KEY = "letterwise-letter-links-v1";

function subscribe() {
  return () => {};
}

function getLocalDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function findNextStep(current: string, target: string, validWords: Set<string>) {
  const queue = [current];
  const previous = new Map<string, string | null>([[current, null]]);

  while (queue.length > 0) {
    const word = queue.shift();

    if (!word) {
      break;
    }

    if (word === target) {
      const path = [target];
      let step = previous.get(target);

      while (step) {
        path.unshift(step);
        step = previous.get(step) ?? null;
      }

      return path[1] ?? target;
    }

    for (let position = 0; position < word.length; position += 1) {
      for (let code = 97; code <= 122; code += 1) {
        const letter = String.fromCharCode(code);
        const candidate = `${word.slice(0, position)}${letter}${word.slice(position + 1)}`;

        if (validWords.has(candidate) && !previous.has(candidate)) {
          previous.set(candidate, word);
          queue.push(candidate);
        }
      }
    }
  }

  return null;
}

export default function LetterLinksGame({ validWords }: { validWords: string[] }) {
  const isBrowser = useSyncExternalStore(subscribe, () => true, () => false);

  if (!isBrowser) {
    return (
      <div className="rounded-3xl border border-violet-100 bg-white p-8 text-center text-slate-600 shadow-sm">
        Preparing today’s Letter Links puzzle…
      </div>
    );
  }

  const puzzle = getDailyLetterLink(getLocalDate());

  return (
    <PlayableLetterLinksGame
      key={puzzle.date}
      puzzle={puzzle}
      validWords={validWords}
    />
  );
}

function PlayableLetterLinksGame({
  puzzle,
  validWords,
}: {
  puzzle: LetterLinkPuzzle;
  validWords: string[];
}) {
  const dictionary = useMemo(() => new Set(validWords), [validWords]);
  const [chain, setChain] = useState<string[]>([puzzle.start]);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Change one letter to make a new word.");
  const [hints, setHints] = useState(0);
  const [complete, setComplete] = useState(false);
  const [playedToday, setPlayedToday] = useState<SavedResult | null>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") as Record<
        string,
        SavedResult
      >;
      return saved[puzzle.date] ?? null;
    } catch {
      return null;
    }
  });

  const currentWord = chain[chain.length - 1];
  const moves = chain.length - 1;

  function saveResult(result: SavedResult) {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") as Record<
        string,
        SavedResult
      >;
      saved[puzzle.date] = result;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      setPlayedToday(result);
    } catch {
      // The game still works when browser storage is unavailable.
    }
  }

  function submitGuess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (complete) {
      return;
    }

    const nextWord = guess.trim().toLowerCase();

    if (!/^[a-z]{4}$/.test(nextWord)) {
      setMessage("Enter a four-letter word.");
      return;
    }

    if (!differsByOneLetter(currentWord, nextWord)) {
      setMessage(`Change exactly one letter in ${currentWord.toUpperCase()}.`);
      return;
    }

    if (!dictionary.has(nextWord)) {
      setMessage("That word is not in the LetterWise word list.");
      return;
    }

    if (chain.includes(nextWord)) {
      setMessage("That word is already in your chain.");
      return;
    }

    const nextChain = [...chain, nextWord];
    setChain(nextChain);
    setGuess("");

    if (nextWord === puzzle.target) {
      const result = { moves: nextChain.length - 1, hints };
      setComplete(true);
      saveResult(result);
      setMessage(
        result.moves <= puzzle.par
          ? `Perfect link! You matched par in ${result.moves} moves.`
          : `Linked! You reached the goal in ${result.moves} moves.`,
      );
      return;
    }

    setMessage("Good link. Change one more letter.");
  }

  function useHint() {
    if (complete) {
      return;
    }

    const nextStep = findNextStep(currentWord, puzzle.target, dictionary);

    if (nextStep) {
      setGuess(nextStep);
      setHints((count) => count + 1);
      setMessage(`Hint: try ${nextStep.toUpperCase()} next.`);
    } else {
      setMessage("Try undoing your last move to return to a clear path.");
    }
  }

  function undoMove() {
    if (chain.length <= 1 || complete) {
      return;
    }

    setChain((words) => words.slice(0, -1));
    setGuess("");
    setMessage("Last move removed.");
  }

  function restart() {
    setChain([puzzle.start]);
    setGuess("");
    setMessage("Change one letter to make a new word.");
    setHints(0);
    setComplete(false);
  }

  async function shareResult() {
    const result = `Letter Links ${puzzle.date}\n${moves} moves • Par ${puzzle.par}\ntryletterwise.com/letter-links`;

    try {
      await navigator.clipboard.writeText(result);
      setMessage("Result copied—answers stay hidden.");
    } catch {
      setMessage("Your result is ready to share.");
    }
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white shadow-xl shadow-violet-100/60">
      <div className="bg-violet-600 px-6 py-6 text-white sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-100">
              Daily challenge · {puzzle.date}
            </p>
            <p className="mt-2 text-lg font-bold text-white">
              Reach the goal by changing one letter per move.
            </p>
          </div>
          <div className="rounded-full bg-white/15 px-4 py-2 font-black">
            Par {puzzle.par}
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {playedToday && !complete ? (
          <div className="mb-6 rounded-2xl bg-amber-100 px-5 py-4 font-bold text-amber-950">
            You completed today’s puzzle in {playedToday.moves} moves. Replay it anytime.
          </div>
        ) : null}

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
          <div className="rounded-2xl bg-violet-100 px-3 py-5">
            <p className="text-xs font-black uppercase tracking-wider text-violet-700">Start</p>
            <p className="mt-1 text-3xl font-black uppercase tracking-[0.15em] text-slate-950">
              {puzzle.start}
            </p>
          </div>
          <span className="text-2xl font-black text-violet-400" aria-hidden="true">→</span>
          <div className="rounded-2xl bg-amber-200 px-3 py-5">
            <p className="text-xs font-black uppercase tracking-wider text-amber-900">Goal</p>
            <p className="mt-1 text-3xl font-black uppercase tracking-[0.15em] text-slate-950">
              {puzzle.target}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-md">
          <div className="space-y-3" aria-label="Your word chain">
            {chain.map((word, index) => (
              <div
                key={`${word}-${index}`}
                className={`rounded-2xl border-2 px-5 py-3 text-center text-2xl font-black uppercase tracking-[0.2em] ${
                  index === chain.length - 1
                    ? "border-violet-500 bg-violet-50 text-violet-800"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                {word}
              </div>
            ))}
          </div>

          {!complete ? (
            <form onSubmit={submitGuess} className="mt-5">
              <label htmlFor="letter-link-guess" className="sr-only">
                Enter the next four-letter word
              </label>
              <input
                id="letter-link-guess"
                value={guess}
                onChange={(event) =>
                  setGuess(event.target.value.replace(/[^a-z]/gi, "").slice(0, 4))
                }
                autoComplete="off"
                autoCapitalize="none"
                placeholder="Next word"
                className="w-full rounded-2xl border-2 border-slate-300 px-5 py-4 text-center text-xl font-black uppercase tracking-[0.15em] outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-full bg-amber-300 px-6 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
              >
                Add word
              </button>
            </form>
          ) : (
            <button
              type="button"
              onClick={shareResult}
              className="mt-5 w-full rounded-full bg-amber-300 px-6 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
            >
              Share result
            </button>
          )}

          <p className="mt-4 min-h-6 text-center font-semibold text-slate-700" aria-live="polite">
            {message}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={useHint}
              disabled={complete}
              className="rounded-full border border-violet-200 px-5 py-2 font-bold text-violet-700 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Hint ({hints})
            </button>
            <button
              type="button"
              onClick={undoMove}
              disabled={chain.length <= 1 || complete}
              className="rounded-full border border-slate-200 px-5 py-2 font-bold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Undo
            </button>
            <button
              type="button"
              onClick={restart}
              className="rounded-full border border-slate-200 px-5 py-2 font-bold text-slate-700 hover:bg-slate-50"
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
