"use client";

import {
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  getAnagramChallengeIndex,
  scoreAnagramWord,
  type AnagramChallenge,
} from "@/data/anagramRush";

type GamePhase = "ready" | "playing" | "finished";

type SavedResult = {
  score: number;
  words: number;
};

const STORAGE_KEY = "letterwise-anagram-rush-v1";
const ROUND_SECONDS = 60;

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

function shuffleLetters(letters: string[]) {
  const shuffled = [...letters];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export default function AnagramRushGame({
  challenges,
}: {
  challenges: AnagramChallenge[];
}) {
  const isBrowser = useSyncExternalStore(subscribe, () => true, () => false);

  if (!isBrowser) {
    return (
      <div className="rounded-3xl border border-violet-100 bg-white p-8 text-center text-slate-600 shadow-sm">
        Preparing today’s Anagram Rush…
      </div>
    );
  }

  const date = getLocalDate();
  const challenge = challenges[getAnagramChallengeIndex(date, challenges.length)];

  return <PlayableAnagramRush key={date} date={date} challenge={challenge} />;
}

function PlayableAnagramRush({
  date,
  challenge,
}: {
  date: string;
  challenge: AnagramChallenge;
}) {
  const validWords = useMemo(
    () => new Set(challenge.validWords),
    [challenge.validWords],
  );
  const [phase, setPhase] = useState<GamePhase>("ready");
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [letters, setLetters] = useState(() => challenge.letters.split(""));
  const [guess, setGuess] = useState("");
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Press start when you are ready.");
  const foundWordsRef = useRef<string[]>([]);
  const scoreRef = useRef(0);
  const [bestResult, setBestResult] = useState<SavedResult | null>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") as Record<
        string,
        SavedResult
      >;
      return saved[date] ?? null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (phase !== "playing") {
      return;
    }

    const interval = window.setInterval(() => {
      setTimeLeft((seconds) => Math.max(0, seconds - 1));
    }, 1_000);

    const timeout = window.setTimeout(() => {
      const result = {
        score: scoreRef.current,
        words: foundWordsRef.current.length,
      };

      setTimeLeft(0);
      setPhase("finished");
      setMessage(`Time! You found ${result.words} words for ${result.score} points.`);

      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") as Record<
          string,
          SavedResult
        >;
        const previous = saved[date];

        if (!previous || result.score > previous.score) {
          saved[date] = result;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
          setBestResult(result);
        }
      } catch {
        // The game still works when browser storage is unavailable.
      }
    }, ROUND_SECONDS * 1_000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [date, phase]);

  function startGame() {
    foundWordsRef.current = [];
    scoreRef.current = 0;
    setFoundWords([]);
    setScore(0);
    setGuess("");
    setTimeLeft(ROUND_SECONDS);
    setLetters(shuffleLetters(challenge.letters.split("")));
    setMessage("Make words using only the seven letters.");
    setPhase("playing");
  }

  function submitWord(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (phase !== "playing") {
      return;
    }

    const word = guess.trim().toLowerCase();

    if (word.length < 3) {
      setMessage("Words must contain at least three letters.");
      return;
    }

    if (!validWords.has(word)) {
      setMessage("That word cannot be made from today’s letters.");
      return;
    }

    if (foundWordsRef.current.includes(word)) {
      setMessage("You already found that word.");
      return;
    }

    const points = scoreAnagramWord(word);
    const nextWords = [word, ...foundWordsRef.current];
    const nextScore = scoreRef.current + points;

    foundWordsRef.current = nextWords;
    scoreRef.current = nextScore;
    setFoundWords(nextWords);
    setScore(nextScore);
    setGuess("");
    setMessage(`+${points} ${points === 1 ? "point" : "points"} for ${word.toUpperCase()}.`);
  }

  async function shareResult() {
    const result = `Anagram Rush ${date}\n${foundWords.length} words • ${score} points\ntryletterwise.com/anagram-rush`;

    try {
      await navigator.clipboard.writeText(result);
      setMessage("Result copied—your words stay hidden.");
    } catch {
      setMessage("Your result is ready to share.");
    }
  }

  const urgent = phase === "playing" && timeLeft <= 10;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white shadow-xl shadow-violet-100/60">
      <div className="bg-violet-600 px-6 py-6 text-white sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-100">
              Daily challenge · {date}
            </p>
            <p className="mt-2 font-bold text-white">
              Three-letter words score 1 point. Longer words score more.
            </p>
          </div>
          <div
            className={`min-w-24 rounded-2xl px-5 py-3 text-center ${
              urgent ? "bg-rose-500" : "bg-white/15"
            }`}
          >
            <p className="text-xs font-black uppercase tracking-wider">Time</p>
            <p className="text-3xl font-black tabular-nums">{timeLeft}</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {bestResult ? (
          <div className="mb-6 rounded-2xl bg-amber-100 px-5 py-4 font-bold text-amber-950">
            Today’s best: {bestResult.words} words and {bestResult.score} points.
          </div>
        ) : null}

        <div className="flex flex-wrap justify-center gap-2" aria-label="Available letters">
          {letters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="grid h-14 w-12 place-items-center rounded-xl border-b-4 border-violet-300 bg-violet-100 text-2xl font-black uppercase text-violet-900 sm:h-16 sm:w-14 sm:text-3xl"
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setLetters((current) => shuffleLetters(current))}
            disabled={phase === "finished"}
            className="rounded-full border border-violet-200 px-5 py-2 font-bold text-violet-700 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Shuffle letters
          </button>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 text-center">
          <div className="rounded-2xl bg-slate-50 px-4 py-4">
            <p className="text-sm font-bold text-slate-600">Words</p>
            <p className="text-3xl font-black text-slate-950">{foundWords.length}</p>
          </div>
          <div className="rounded-2xl bg-amber-100 px-4 py-4">
            <p className="text-sm font-bold text-amber-900">Score</p>
            <p className="text-3xl font-black text-amber-950">{score}</p>
          </div>
        </div>

        {phase === "ready" ? (
          <button
            type="button"
            onClick={startGame}
            className="mt-6 w-full rounded-full bg-amber-300 px-6 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
          >
            Start 60-second rush
          </button>
        ) : null}

        {phase === "playing" ? (
          <form onSubmit={submitWord} className="mt-6">
            <label htmlFor="anagram-rush-word" className="sr-only">
              Enter a word
            </label>
            <input
              id="anagram-rush-word"
              value={guess}
              onChange={(event) =>
                setGuess(event.target.value.replace(/[^a-z]/gi, "").slice(0, 7))
              }
              autoFocus
              autoComplete="off"
              autoCapitalize="none"
              placeholder="Type a word"
              className="w-full rounded-2xl border-2 border-slate-300 px-5 py-4 text-center text-xl font-black uppercase tracking-[0.12em] outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            />
            <button
              type="submit"
              className="mt-3 w-full rounded-full bg-amber-300 px-6 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
            >
              Add word
            </button>
          </form>
        ) : null}

        {phase === "finished" ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={shareResult}
              className="rounded-full bg-amber-300 px-6 py-4 font-black text-slate-950 hover:bg-amber-200"
            >
              Share result
            </button>
            <button
              type="button"
              onClick={startGame}
              className="rounded-full bg-violet-100 px-6 py-4 font-black text-violet-800 hover:bg-violet-200"
            >
              Play again
            </button>
          </div>
        ) : null}

        <p className="mt-4 min-h-6 text-center font-semibold text-slate-700" aria-live="polite">
          {message}
        </p>

        {foundWords.length > 0 ? (
          <div className="mt-6 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-black">Words found</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {foundWords.map((word) => (
                <span
                  key={word}
                  className="rounded-full bg-violet-50 px-4 py-2 font-bold uppercase text-violet-800"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

