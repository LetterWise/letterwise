"use client";

import { useEffect, useState } from "react";
import { getTodayPuzzle, PuzzleLevel } from "@/data/dailyPuzzles";
import { cleanGuess, scoreGuess, LetterStatus } from "@/lib/wordGame";

const levelLabels: Record<PuzzleLevel, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const keyboardRows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "Back"],
];

function getTileClass(status: LetterStatus) {
  if (status === "correct") return "border-emerald-500 bg-emerald-600";
  if (status === "present") return "border-yellow-500 bg-yellow-600";
  if (status === "absent") return "border-slate-700 bg-slate-800";
  return "border-slate-700 bg-slate-950";
}

function getKeyClass(status: LetterStatus | undefined) {
  if (status === "correct") return "bg-emerald-600 text-white";
  if (status === "present") return "bg-yellow-600 text-white";
  if (status === "absent") return "bg-slate-800 text-slate-300";
  return "bg-slate-600 text-white hover:bg-slate-500";
}

function getBestStatus(
  current: LetterStatus | undefined,
  next: LetterStatus
): LetterStatus {
  const rank: Record<LetterStatus, number> = {
    empty: 0,
    absent: 1,
    present: 2,
    correct: 3,
  };

  if (!current) return next;
  return rank[next] > rank[current] ? next : current;
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

  const keyStatuses: Record<string, LetterStatus> = {};

  for (const guess of guesses) {
    const statuses = scoreGuess(guess, answer);

    guess.split("").forEach((letter, index) => {
      keyStatuses[letter] = getBestStatus(keyStatuses[letter], statuses[index]);
    });
  }

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

  function addLetter(letter: string) {
    if (gameOver) return;
    if (currentGuess.length >= 5) return;

    setCurrentGuess((current) => cleanGuess(current + letter));
  }

  function deleteLetter() {
    if (gameOver) return;

    setCurrentGuess((current) => current.slice(0, -1));
  }

  function handleKeyPress(key: string) {
    if (key === "Enter") {
      submitGuess();
      return;
    }

    if (key === "Back") {
      deleteLetter();
      return;
    }

    addLetter(key);
  }

  useEffect(() => {
    function handlePhysicalKeyboard(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === "Enter") {
        event.preventDefault();
        submitGuess();
        return;
      }

      if (event.key === "Backspace") {
        event.preventDefault();
        deleteLetter();
        return;
      }

      if (/^[a-zA-Z]$/.test(event.key)) {
        event.preventDefault();
        addLetter(event.key.toLowerCase());
      }
    }

    window.addEventListener("keydown", handlePhysicalKeyboard);

    return () => {
      window.removeEventListener("keydown", handlePhysicalKeyboard);
    };
  });

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

          <p className="mt-3 text-sm text-slate-500">
            Puzzle date: {puzzle.date}
          </p>
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

          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-4">
            <p className="mb-3 text-center text-sm text-slate-400">
              Type on your keyboard or use the buttons below.
            </p>

            <div className="space-y-2">
              {keyboardRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-1.5">
                  {row.map((key) => {
                    const isSpecialKey = key === "Enter" || key === "Back";
                    const status = !isSpecialKey ? keyStatuses[key] : undefined;

                    return (
                      <button
                        key={key}
                        onClick={() => handleKeyPress(key)}
                        disabled={gameOver}
                        className={`h-12 rounded-md px-3 text-sm font-bold uppercase disabled:opacity-50 ${
                          isSpecialKey
                            ? "bg-slate-500 text-white hover:bg-slate-400"
                            : getKeyClass(status)
                        } ${isSpecialKey ? "min-w-16" : "min-w-9"}`}
                      >
                        {key === "Back" ? "⌫" : key}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {message && (
              <p className="mt-4 text-center text-sm text-slate-300">
                {message}
              </p>
            )}
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