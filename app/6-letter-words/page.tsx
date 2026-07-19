import WordLengthPage from "@/components/WordLengthPage";

export const metadata = {
  title: "6 Letter Words: 22,342-Word List",
  description:
    "Search and browse 22,342 six-letter words, with list counts, starting-letter patterns, examples, and filters for word games and puzzles.",
};

export default function SixLetterWordsPage() {
  return <WordLengthPage length={6} />;
}
