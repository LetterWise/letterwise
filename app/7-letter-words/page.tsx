import WordLengthPage from "@/components/WordLengthPage";

export const metadata = {
  title: "7 Letter Words | LetterWise",
  description:
    "Browse useful 7 letter words for word games, spelling practice, crossword clues, vocabulary building, and puzzle solving.",
};

export default function SevenLetterWordsPage() {
  return <WordLengthPage length={7} />;
}
