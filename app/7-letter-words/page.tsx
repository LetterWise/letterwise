import WordLengthPage from "@/components/WordLengthPage";

export const metadata = {
  title: "7 Letter Words: 33,192-Word List",
  description:
    "Search and browse 33,192 seven-letter words, with list counts, starting-letter patterns, examples, and filters for word games and puzzles.",
};

export default function SevenLetterWordsPage() {
  return <WordLengthPage length={7} />;
}
