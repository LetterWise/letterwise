import FiveLetterEndingPage from "@/components/FiveLetterEndingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-ending-in-le",
  },
  title: "5 Letter Words Ending In LE",
  description:
    "Browse useful 5 letter words ending in LE for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsEndingInLEPage() {
  return <FiveLetterEndingPage ending="le" />;
}
