import WordLengthPage from "@/components/WordLengthPage";

export const metadata = {
  title: "3 Letter Words: 1,300-Word List",
  description:
    "Search and browse 1,300 three-letter words, with list counts, starting-letter patterns, examples, and filters for word games and puzzles.",
};

export default function ThreeLetterWordsPage() {
  return <WordLengthPage length={3} />;
}
