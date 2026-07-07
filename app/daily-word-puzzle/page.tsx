"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getPuzzleByDate,
  getTodayDate,
  isPuzzleLevel,
  PuzzleLevel,
} from "@/data/dailyPuzzles";
import { cleanGuess, scoreGuess, LetterStatus } from "@/lib/wordGame";
import { words } from "@/data/words";

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

const validFiveLetterWords = new Set(
  words.filter((word) => word.length === 5)
);

type GameStats = {
  played: number;
  won: number;
  currentStreak: number;
  bestStreak: number;
  completedPuzzleIds: string[];
};

const defaultStats: GameStats = {
  played: 0,
  won: 0,
  currentStreak: 0,
  bestStreak: 0,
  completedPuzzleIds: [],
};

function getTileClass(status: LetterStatus) {
  if (status === "correct") return "border-emerald-500 bg-emerald-600 text-white";
  if (status === "present") return "border-yellow-500 bg-yellow-600 text-white";
  if (status === "absent") return "border-slate-700 bg-slate-800 text-white";
  return "border-slate-700 bg-slate-950 text-white";
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

function statusToEmoji(status: LetterStatus) {
  if (status === "correct") return "🟩";
  if (status === "present") return "🟨";
  return "⬛";
}

function loadStats(): GameStats {
  if (typeof window === "undefined") {
    return defaultStats;
  }

  const saved = window.localStorage.getItem("letterwise-daily-stats");

  if (!saved) {
    return defaultStats;
  }

  try {
    const parsed = JSON.parse(saved) as GameStats;

    return {
      played: parsed.played || 0,
      won: parsed.won || 0,
      currentStreak: parsed.currentStreak || 0,
      bestStreak: parsed.bestStreak || 0,
      completedPuzzleIds: parsed.completedPuzzleIds || [],
    };
  } catch {
    return defaultStats;
  }
}

function saveStats(stats: GameStats) {
  window.localStorage.setItem("letterwise-daily-stats", JSON.stringify(stats));
}

export default function DailyWordPuzzlePage() {
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [level, setLevel] = useState<PuzzleLevel>("easy");
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  const [stats, setStats] = useState<GameStats>(defaultStats);

  useEffect(() => {
    setStats(loadStats());

    const params = new URLSearchParams(window.location.search);
    const dateFromUrl = params.get("date");
    const levelFromUrl = params.get("level");

    if (dateFromUrl) {
      setSelectedDate(dateFromUrl);
    }

    if (isPuzzleLevel(levelFromUrl)) {
      setLevel(levelFromUrl);
    }
  }, []);

  const puzzle = useMemo(() => {
    return getPuzzleByDate(selectedDate);
  }, [selectedDate]);

  const answer = puzzle[level];
  const puzzleId = `${puzzle.date}-${level}`;
  const isArchivePuzzle = puzzle.date !== getTodayDate();

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

  function recordGameResult(didWin: boolean) {
    if (stats.completedPuzzleIds.includes(puzzleId)) {
      return;
    }

    const nextCurrentStreak = didWin ? stats.currentStreak + 1 : 0;
    const nextBestStreak = Math.max(stats.bestStreak, nextCurrentStreak);

    const nextStats: GameStats = {
      played: stats.played + 1,
      won: didWin ? stats.won + 1 : stats.won,
      currentStreak: nextCurrentStreak,
      bestStreak: nextBestStreak,
      completedPuzzleIds: [...stats.completedPuzzleIds, puzzleId],
    };

    setStats(nextStats);
    saveStats(nextStats);
  }

  function submitGuess() {
    const cleaned = cleanGuess(currentGuess);

    if (gameOver) return;

    if (cleaned.length !== 5) {
      setMessage("Please enter a 5-letter word.");
      return;
    }

    if (!validFiveLetterWords.has(cleaned) && cleaned !== answer) {
      setMessage("That does not look like a real word.");
      return;
    }

    const nextGuesses = [...guesses, cleaned];
    setGuesses(nextGuesses);
    setCurrentGuess("");
    setShareMessage("");

    if (cleaned === answer) {
      setMessage("Correct! You solved the puzzle.");
      recordGameResult(true);
    } else if (nextGuesses.length >= 6) {
      setMessage(`Game over. The word was ${answer.toUpperCase()}.`);
      recordGameResult(false);
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
    setShareMessage("");

    const params = new URLSearchParams(window.location.search);
    params.set("date", puzzle.date);
    params.set("level", newLevel);
    window.history.replaceState(null, "", `?${params.toString()}`);
  }

  function startOverSameLevel() {
    setCurrentGuess("");
    setGuesses([]);
    setMessage("");
    setShareMessage("");
  }

  function createShareText() {
    const emojiRows = guesses
      .map((guess) =>
        scoreGuess(guess, answer).map((status) => statusToEmoji(status)).join("")
      )
      .join("\n");

    const resultText = won ? `Solved in ${guesses.length}/6` : "Not solved";

    return `LetterWise Daily ${puzzle.date} ${levelLabels[level]}
${resultText}

${emojiRows}

Play: ${window.location.origin}/daily-word-puzzle`;
  }

  async function shareResult() {
    const text = createShareText();

    try {
      await navigator.clipboard.writeText(text);
      setShareMessage("Result copied to clipboard.");
    } catch {
      setShareMessage("Could not copy automatically. Select and copy your result manually.");
    }
  }

  function resetStats() {
    setStats(defaultStats);
    window.localStorage.removeItem("letterwise-daily-stats");
    setMessage("Stats reset.");
    setShareMessage("");
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

  const winRate =
    stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a href="/" className="text-sm text-slate-400 hover:text-white">
              ← Back to LetterWise
            </a>

            <div className="flex flex-wrap gap-4">
              <a
                href="/daily-word-puzzle/how-to-play"
                className="text-sm text-slate-400 hover:text-white"
              >
                How to play
              </a>

              <a
                href="/daily-word-puzzle/archive"
                className="text-sm text-slate-400 hover:text-white"
              >
                Puzzle archive →
              </a>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              LetterWise Daily
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Daily Word Puzzle
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Guess the five-letter word. Choose easy, medium, or hard and try
              to solve it in six guesses.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Puzzle date: {puzzle.date}{" "}
              {isArchivePuzzle ? (
                <span className="text-sky-400">(archive puzzle)</span>
              ) : (
                <span className="text-emerald-400">(today&apos;s puzzle)</span>
              )}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-xl grid-cols-4 gap-3 text-center">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-2xl font-black">{stats.played}</p>
              <p className="text-xs text-slate-400">Played</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-2xl font-black">{winRate}%</p>
              <p className="text-xs text-slate-400">Win rate</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-2xl font-black">{stats.currentStreak}</p>
              <p className="text-xs text-slate-400">Streak</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-2xl font-black">{stats.bestStreak}</p>
              <p className="text-xs text-slate-400">Best</p>
            </div>
          </div>

          {stats.played > 0 && (
            <div className="mt-4 text-center">
              <button
                onClick={resetStats}
                className="text-xs font-semibold text-slate-500 hover:text-slate-300"
              >
                Reset stats
              </button>
            </div>
          )}

          <div className="mt-8 flex justify-center gap-3">
            {(["easy", "medium", "hard"] as PuzzleLevel[]).map((levelOption) => (
              <button
                key={levelOption}
                onClick={() => resetLevel(levelOption)}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                  level === levelOption
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-950/30"
                    : "border border-slate-700 bg-slate-900/80 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {levelLabels[levelOption]}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6">
              <div className="grid gap-2">
                {rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-5 gap-2">
                    {Array.from({ length: 5 }, (_, letterIndex) => {
                      const letter = row.rowWord[letterIndex] || "";
                      const status = row.statuses[letterIndex] as LetterStatus;

                      return (
                        <div
                          key={letterIndex}
                          className={`flex aspect-square items-center justify-center rounded-xl border text-3xl font-black uppercase shadow-sm ${getTileClass(
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

              {message && (
                <p className="mt-5 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-center text-sm text-slate-300">
                  {message}
                </p>
              )}

              {gameOver && (
                <div className="mt-5 text-center">
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={shareResult}
                      className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-400"
                    >
                      Share result
                    </button>

                    <button
                      onClick={startOverSameLevel}
                      className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                      Try again
                    </button>
                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    You can also choose another level above.
                  </p>

                  {shareMessage && (
                    <p className="mt-3 text-sm text-slate-400">{shareMessage}</p>
                  )}
                </div>
              )}
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6">
              <p className="mb-4 text-center text-sm text-slate-400">
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

              <div className="mt-6 grid gap-3 text-sm text-slate-400">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <span className="font-semibold text-emerald-400">Green</span>{" "}
                  = correct spot
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <span className="font-semibold text-yellow-400">Yellow</span>{" "}
                  = in the word
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <span className="font-semibold text-slate-300">Gray</span> =
                  not in the word
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
