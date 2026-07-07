import WordLengthPage from "@/components/WordLengthPage";

export const metadata = {
  title: "6 Letter Words | LetterWise",
  description:
    "Browse useful 6 letter words for word games, spelling practice, crossword clues, vocabulary building, and puzzle solving.",
};

export default function SixLetterWordsPage() {
  return <WordLengthPage length={6} />;
}
