export function cleanLetters(input: string) {
  return input.toLowerCase().replace(/[^a-z]/g, "");
}

type WordleOptions = {
  pattern: string;
  includes: string;
  excludes: string;
};

export function solveWordle(
  wordList: string[],
  options: WordleOptions
) {
  const pattern = options.pattern.toLowerCase();
  const includes = cleanLetters(options.includes);
  const excludes = cleanLetters(options.excludes);

  const results = wordList
    .filter((word) => word.length === 5)
    .filter((word) => {
      if (pattern.length !== 5) return true;

      for (let i = 0; i < 5; i++) {
        const patternLetter = pattern[i];

        if (patternLetter !== "_" && patternLetter !== "." && patternLetter !== "-") {
          if (word[i] !== patternLetter) {
            return false;
          }
        }
      }

      return true;
    })
    .filter((word) => {
      for (const letter of includes) {
        if (!word.includes(letter)) {
          return false;
        }
      }

      return true;
    })
    .filter((word) => {
      for (const letter of excludes) {
        if (word.includes(letter)) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => a.localeCompare(b));

  return results;
}