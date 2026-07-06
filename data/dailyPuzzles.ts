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

export function getTodayPuzzle() {
  const today = new Date().toISOString().slice(0, 10);

  return (
    dailyPuzzles.find((puzzle) => puzzle.date === today) ||
    dailyPuzzles[dailyPuzzles.length - 1]
  );
}