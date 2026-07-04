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

export function canMakeWord(word: string, letters: string) {
  const wordCounts = countLetters(word);
  const letterCounts = countLetters(letters);

  for (const letter in wordCounts) {
    if (!letterCounts[letter] || wordCounts[letter] > letterCounts[letter]) {
      return false;
    }
  }

  return true;
}

export function unscrambleWords(
  lettersInput: string,
  wordList: string[],
  minLength = 2
) {
  const letters = cleanLetters(lettersInput);

  if (!letters) {
    return [];
  }

  const results = wordList
    .filter((word) => word.length >= minLength)
    .filter((word) => word.length <= letters.length)
    .filter((word) => canMakeWord(word, letters))
    .sort((a, b) => {
      if (b.length !== a.length) {
        return b.length - a.length;
      }

      return a.localeCompare(b);
    });

  return results;
}