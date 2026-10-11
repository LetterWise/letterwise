import { commonFiveLetterWords, commonShortWords } from "@/data/commonWords";
import { dailyPuzzles } from "@/data/dailyPuzzles";
import { publicWords } from "@/data/publicWords";
import { cleanLetters, unscrambleWords } from "@/lib/unscramble";

const puzzleWords = dailyPuzzles.flatMap((puzzle) => [
  puzzle.easy,
  puzzle.medium,
  puzzle.hard,
]);

const familiarWordSet = new Set<string>([
  ...commonShortWords,
  ...commonFiveLetterWords,
  ...puzzleWords,
]);

const MAX_LETTERS = 15;
const MAX_FAMILIAR_RESULTS = 80;
const MAX_DICTIONARY_RESULTS = 160;

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const letters = cleanLetters(searchParams.get("letters") || "");
  const starts = cleanLetters(searchParams.get("starts") || "");
  const ends = cleanLetters(searchParams.get("ends") || "");
  const contains = cleanLetters(searchParams.get("contains") || "");
  const lengthValue = searchParams.get("length")?.trim() || "";

  if (letters.length < 2) {
    return jsonError("Enter at least two letters to find words.", 400);
  }

  if (letters.length > MAX_LETTERS) {
    return jsonError(`Enter no more than ${MAX_LETTERS} letters.`, 400);
  }

  let exactLength = 0;

  if (lengthValue) {
    exactLength = Number(lengthValue);

    if (
      !Number.isInteger(exactLength) ||
      exactLength < 2 ||
      exactLength > letters.length
    ) {
      return jsonError(
        `Word length must be a whole number from 2 to ${letters.length}.`,
        400,
      );
    }
  }

  const results = unscrambleWords(letters, publicWords, {
    minLength: exactLength === 2 ? 2 : 3,
    exactLength,
    startsWith: starts,
    endsWith: ends,
    contains,
  });

  const familiar = results.filter((word) => familiarWordSet.has(word));
  const dictionary = results.filter((word) => !familiarWordSet.has(word));

  return Response.json(
    {
      query: letters,
      familiar: familiar.slice(0, MAX_FAMILIAR_RESULTS),
      dictionary: dictionary.slice(0, MAX_DICTIONARY_RESULTS),
      total: results.length,
      familiarTotal: familiar.length,
      dictionaryTotal: dictionary.length,
      limited:
        familiar.length > MAX_FAMILIAR_RESULTS ||
        dictionary.length > MAX_DICTIONARY_RESULTS,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=86400",
      },
    },
  );
}
