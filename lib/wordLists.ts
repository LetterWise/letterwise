export function getWordsByLength(wordList: string[], length: number) {
  return wordList
    .filter((word) => word.length === length)
    .sort((a, b) => a.localeCompare(b));
}

export function getWordsStartingWith(wordList: string[], prefix: string) {
  const cleanPrefix = prefix.toLowerCase().replace(/[^a-z]/g, "");

  return wordList
    .filter((word) => word.startsWith(cleanPrefix))
    .sort((a, b) => a.localeCompare(b));
}

export function getWordsEndingWith(wordList: string[], suffix: string) {
  const cleanSuffix = suffix.toLowerCase().replace(/[^a-z]/g, "");

  return wordList
    .filter((word) => word.endsWith(cleanSuffix))
    .sort((a, b) => a.localeCompare(b));
}

export function getWordsContaining(wordList: string[], letters: string) {
  const cleanLetters = letters.toLowerCase().replace(/[^a-z]/g, "");

  return wordList
    .filter((word) => word.includes(cleanLetters))
    .sort((a, b) => a.localeCompare(b));
}