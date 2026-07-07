export type PuzzleLevel = "easy" | "medium" | "hard";

export type DailyPuzzle = {
  date: string;
  easy: string;
  medium: string;
  hard: string;
};

export const dailyPuzzles: DailyPuzzle[] = [
  { date: "2026-07-07", easy: "chair", medium: "flame", hard: "vivid" },
  { date: "2026-07-08", easy: "bread", medium: "stone", hard: "nymph" },
  { date: "2026-07-09", easy: "plant", medium: "crane", hard: "glyph" },
  { date: "2026-07-10", easy: "smile", medium: "brave", hard: "fjord" },
  { date: "2026-07-11", easy: "house", medium: "grape", hard: "quill" },
  { date: "2026-07-12", easy: "water", medium: "climb", hard: "zesty" },
  { date: "2026-07-13", easy: "light", medium: "proud", hard: "waltz" },
  { date: "2026-07-14", easy: "green", medium: "track", hard: "knack" },
  { date: "2026-07-15", easy: "table", medium: "charm", hard: "jazzy" },
  { date: "2026-07-16", easy: "happy", medium: "blend", hard: "vixen" },
  { date: "2026-07-17", easy: "music", medium: "frost", hard: "crypt" },
  { date: "2026-07-18", easy: "river", medium: "claim", hard: "proxy" },
  { date: "2026-07-19", easy: "beach", medium: "drift", hard: "spiky" },
  { date: "2026-07-20", easy: "cloud", medium: "sharp", hard: "wharf" },
  { date: "2026-07-21", easy: "fruit", medium: "brisk", hard: "oxide" },
  { date: "2026-07-22", easy: "sleep", medium: "grove", hard: "quack" },
  { date: "2026-07-23", easy: "heart", medium: "slope", hard: "pixel" },
  { date: "2026-07-24", easy: "dream", medium: "twist", hard: "buxom" },
  { date: "2026-07-25", easy: "field", medium: "crown", hard: "jinxy" },
  { date: "2026-07-26", easy: "glass", medium: "mirth", hard: "wryly" },
  { date: "2026-07-27", easy: "world", medium: "crisp", hard: "azure" },
  { date: "2026-07-28", easy: "peace", medium: "shard", hard: "equip" },
  { date: "2026-07-29", easy: "story", medium: "plume", hard: "vapor" },
  { date: "2026-07-30", easy: "sound", medium: "trace", hard: "khaki" },
  { date: "2026-07-31", easy: "dance", medium: "blush", hard: "zippy" },

  { date: "2026-08-01", easy: "apple", medium: "orbit", hard: "quilt" },
  { date: "2026-08-02", easy: "grass", medium: "fable", hard: "lymph" },
  { date: "2026-08-03", easy: "train", medium: "spice", hard: "jumpy" },
  { date: "2026-08-04", easy: "party", medium: "forge", hard: "axiom" },
  { date: "2026-08-05", easy: "laugh", medium: "creek", hard: "zonal" },
  { date: "2026-08-06", easy: "phone", medium: "stark", hard: "vouch" },
  { date: "2026-08-07", easy: "sunny", medium: "grind", hard: "hymns" },
  { date: "2026-08-08", easy: "share", medium: "cloak", hard: "mucky" },
  { date: "2026-08-09", easy: "fresh", medium: "prism", hard: "jaunt" },
  { date: "2026-08-10", easy: "north", medium: "cider", hard: "zebra" },
  { date: "2026-08-11", easy: "south", medium: "wring", hard: "fjord" },
  { date: "2026-08-12", easy: "paint", medium: "crush", hard: "evoke" },
  { date: "2026-08-13", easy: "round", medium: "glide", hard: "quirk" },
  { date: "2026-08-14", easy: "sweet", medium: "flock", hard: "nymph" },
  { date: "2026-08-15", easy: "clean", medium: "brand", hard: "vivid" },
  { date: "2026-08-16", easy: "bring", medium: "truce", hard: "glyph" },
  { date: "2026-08-17", easy: "young", medium: "plank", hard: "zesty" },
  { date: "2026-08-18", easy: "money", medium: "shove", hard: "waltz" },
  { date: "2026-08-19", easy: "watch", medium: "crave", hard: "quill" },
  { date: "2026-08-20", easy: "brown", medium: "spine", hard: "vixen" },
  { date: "2026-08-21", easy: "white", medium: "tread", hard: "crypt" },
  { date: "2026-08-22", easy: "black", medium: "moist", hard: "proxy" },
  { date: "2026-08-23", easy: "clear", medium: "swoop", hard: "wharf" },
  { date: "2026-08-24", easy: "small", medium: "grasp", hard: "oxide" },
  { date: "2026-08-25", easy: "large", medium: "hinge", hard: "quack" },
  { date: "2026-08-26", easy: "carry", medium: "blaze", hard: "pixel" },
  { date: "2026-08-27", easy: "start", medium: "faint", hard: "buxom" },
  { date: "2026-08-28", easy: "final", medium: "crept", hard: "jinxy" },
  { date: "2026-08-29", easy: "learn", medium: "broil", hard: "wryly" },
  { date: "2026-08-30", easy: "teach", medium: "snare", hard: "azure" },
  { date: "2026-08-31", easy: "smart", medium: "dwell", hard: "equip" },
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
