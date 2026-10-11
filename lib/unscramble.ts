export function cleanLetters(input: string) {
  return input.toLowerCase().replace(/[^a-z]/g, "");
}

function countLetters(text: string) {
  const counts: Record<string, number> = {};

  for (const letter of text) {
    counts[letter] = (counts[letter] || 0) + 1;
  }

  return counts;
}

function canMakeWordWithCounts(
  word: string,
  letterCounts: Record<string, number>,
) {
  const wordCounts = countLetters(word);

  for (const letter in wordCounts) {
    if (!letterCounts[letter] || wordCounts[letter] > letterCounts[letter]) {
      return false;
    }
  }

  return true;
}

export function canMakeWord(word: string, letters: string) {
  const letterCounts = countLetters(letters);
  return canMakeWordWithCounts(word, letterCounts);
}

type UnscrambleOptions = {
  minLength?: number;
  exactLength?: number;
  startsWith?: string;
  endsWith?: string;
  contains?: string;
};

export function unscrambleWords(
  lettersInput: string,
  wordList: string[],
  options: UnscrambleOptions = {}
) {
  const letters = cleanLetters(lettersInput);
  const startsWith = cleanLetters(options.startsWith || "");
  const endsWith = cleanLetters(options.endsWith || "");
  const contains = cleanLetters(options.contains || "");
  const minLength = options.minLength ?? 2;
  const exactLength = options.exactLength ?? 0;

  if (!letters) {
    return [];
  }

  const letterCounts = countLetters(letters);

  const results = wordList
    .filter((word) => word.length >= minLength)
    .filter((word) => word.length <= letters.length)
    .filter((word) => (exactLength ? word.length === exactLength : true))
    .filter((word) => (startsWith ? word.startsWith(startsWith) : true))
    .filter((word) => (endsWith ? word.endsWith(endsWith) : true))
    .filter((word) => (contains ? word.includes(contains) : true))
    .filter((word) => canMakeWordWithCounts(word, letterCounts))
    .sort((a, b) => {
      if (b.length !== a.length) {
        return b.length - a.length;
      }

      return a.localeCompare(b);
    });

  return results;
}
