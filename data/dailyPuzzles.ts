export type PuzzleLevel = "easy" | "medium" | "hard";

export type DailyPuzzle = {
  date: string;
  easy: string;
  medium: string;
  hard: string;
};

export const dailyPuzzles: DailyPuzzle[] = [
  {
    date: "2026-07-06",
    easy: "plant",
    medium: "crane",
    hard: "glyph",
  },
  {
    date: "2026-07-07",
    easy: "chair",
    medium: "flame",
    hard: "vivid",
  },
  {
    date: "2026-07-08",
    easy: "bread",
    medium: "stone",
    hard: "nymph",
  },
];

export function getTodayDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getTodayPuzzle() {
  const today = getTodayDate();

  return (
    dailyPuzzles.find((puzzle) => puzzle.date === today) ||
    dailyPuzzles[dailyPuzzles.length - 1]
  );
}

export function getPuzzleByDate(date: string | null) {
  if (!date) {
    return getTodayPuzzle();
  }

  return dailyPuzzles.find((puzzle) => puzzle.date === date) || getTodayPuzzle();
}

export function isPuzzleLevel(value: string | null): value is PuzzleLevel {
  return value === "easy" || value === "medium" || value === "hard";
}