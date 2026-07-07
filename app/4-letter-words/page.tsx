import WordLengthPage from "@/components/WordLengthPage";

export const metadata = {
  title: "4 Letter Words | LetterWise",
  description:
    "Browse useful 4 letter words for word games, spelling practice, crossword clues, vocabulary building, and puzzle solving.",
};

export default function FourLetterWordsPage() {
  return <WordLengthPage length={4} />;
}
