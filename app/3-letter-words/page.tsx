import WordLengthPage from "@/components/WordLengthPage";

export const metadata = {
  title: "3 Letter Words | LetterWise",
  description:
    "Browse useful 3 letter words for word games, spelling practice, crossword clues, vocabulary building, and puzzle solving.",
};

export default function ThreeLetterWordsPage() {
  return <WordLengthPage length={3} />;
}
