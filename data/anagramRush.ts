export type AnagramChallenge = {
  letters: string;
  validWords: string[];
};

export const anagramRacks = [
  "retains",
  "planets",
  "coastal",
  "painter",
  "sunrise",
  "treason",
  "earnest",
  "section",
  "details",
  "reading",
  "gardens",
  "streams",
  "players",
  "teacher",
  "largest",
  "fitness",
  "another",
  "related",
  "natural",
  "picture",
  "station",
  "country",
  "service",
  "thought",
  "special",
  "forward",
  "popular",
  "weather",
  "morning",
  "evening",
];

export function canBuildWord(word: string, letters: string) {
  const available = new Map<string, number>();

  for (const letter of letters) {
    available.set(letter, (available.get(letter) ?? 0) + 1);
  }

  for (const letter of word) {
    const remaining = available.get(letter) ?? 0;

    if (remaining === 0) {
      return false;
    }

    available.set(letter, remaining - 1);
  }

  return true;
}

export function getAnagramChallengeIndex(date: string, challengeCount: number) {
  const dayNumber = Math.floor(
    new Date(`${date}T00:00:00Z`).getTime() / 86_400_000,
  );
  return dayNumber % challengeCount;
}

export function scoreAnagramWord(word: string) {
  const scores: Record<number, number> = {
    3: 1,
    4: 2,
    5: 4,
    6: 7,
    7: 10,
  };
  return scores[word.length] ?? 0;
}

