import WordLengthPage from "@/components/WordLengthPage";

export const metadata = {
  title: "4 Letter Words: 5,469-Word List",
  description:
    "Search and browse 5,469 four-letter words, with list counts, starting-letter patterns, examples, and filters for word games and puzzles.",
};

export default function FourLetterWordsPage() {
  return <WordLengthPage length={4} />;
}
