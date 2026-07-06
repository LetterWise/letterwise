"use client";

import { useState } from "react";
import { getTodayPuzzle, PuzzleLevel } from "@/data/dailyPuzzles";
import { cleanGuess, scoreGuess, LetterStatus } from "@/lib/wordGame";

const levelLabels: Record<PuzzleLevel, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

function getTileClass(status: LetterStatus) {
  if (status === "correct") return "border-emerald-500 bg-emerald-600";
  if (status === "present") return "border-yellow-500 bg-yellow-600";
  if (status === "absent") return "border-slate-700 bg-slate-800";
  return "border-slate-700 bg-slate-950";
}

export default function DailyWordPuzzlePage() {
  const puzzle = getTodayPuzzle();
  const [level, setLevel] = useState<PuzzleLevel>("easy");
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const answer = puzzle[level];
  const won = guesses.includes(answer);
  const lost = guesses.length >= 6 && !won;
  const gameOver = won || lost;

  function submitGuess() {
    const cleaned = cleanGuess(currentGuess);

    if (gameOver) return;

    if (cleaned.length !== 5) {
      setMessage("Please enter a 5-letter word.");
      return;
    }

    const nextGuesses = [...guesses, cleaned];
    setGuesses(nextGuesses);
    setCurrentGuess("");

    if (cleaned === answer) {
      setMessage("Correct! You solved today's puzzle.");
    } else if (nextGuesses.length >= 6) {
      setMessage(`Game over. The word was ${answer.toUpperCase()}.`);
    } else {
      setMessage("");
    }
  }

  function resetLevel(newLevel: PuzzleLevel) {
    setLevel(newLevel);
    setCurrentGuess("");
    setGuesses([]);
    setMessage("");
  }

  const rows = Array.from({ length: 6 }, (_, rowIndex) => {
    const guess = guesses[rowIndex];
    const isCurrentRow = rowIndex === guesses.length && !gameOver;
    const rowWord = guess || (isCurrentRow ? currentGuess : "");
    const statuses = guess ? scoreGuess(guess, answer) : Array(5).fill("empty");

    return {
      rowWord,
      statuses,
    };
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-8 text-center">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            LetterWise Daily
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Daily Word Puzzle
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Guess today&apos;s five-letter word. Choose easy, medium, or hard
            and try to solve it in six guesses.
          </p>

          <p className="mt-3 text-sm text-slate-500">Puzzle date: {puzzle.date}</p>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {(["easy", "medium", "hard"] as PuzzleLevel[]).map((levelOption) => (
            <button
              key={levelOption}
              onClick={() => resetLevel(levelOption)}
              className={`rounded-xl px-5 py-3 text-sm font-semibold ${
                level === levelOption
                  ? "bg-sky-500 text-white"
                  : "border border-slate-700 text-slate-300 hover:bg-slate-900"
              }`}
            >
              {levelLabels[levelOption]}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <div className="grid gap-2">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-5 gap-2">
                {Array.from({ length: 5 }, (_, letterIndex) => {
                  const letter = row.rowWord[letterIndex] || "";
                  const status = row.statuses[letterIndex] as LetterStatus;

                  return (
                    <div
                      key={letterIndex}
                      className={`flex aspect-square items-center justify-center rounded-lg border text-3xl font-bold uppercase ${getTileClass(
                        status
                      )}`}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <label
              htmlFor="guess"
              className="block text-sm font-medium text-slate-300"
            >
              Your guess
            </label>

            <div className="mt-3 flex gap-3">
              <input
                id="guess"
                type="text"
                maxLength={5}
                value={currentGuess}
                disabled={gameOver}
                onChange={(event) => setCurrentGuess(cleanGuess(event.target.value))}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    submitGuess();
                  }
                }}
                placeholder="Type 5 letters"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400 disabled:opacity-50"
              />

              <button
                onClick={submitGuess}
                disabled={gameOver}
                className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-400 disabled:opacity-50"
              >
                Enter
              </button>
            </div>

            {message && <p className="mt-4 text-sm text-slate-300">{message}</p>}
          </div>

          <div className="mt-6 grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <span className="font-semibold text-emerald-400">Green</span> =
              correct spot
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <span className="font-semibold text-yellow-400">Yellow</span> =
              in the word
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <span className="font-semibold text-slate-300">Gray</span> = not
              in the word
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}