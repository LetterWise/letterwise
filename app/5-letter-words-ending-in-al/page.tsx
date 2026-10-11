import FiveLetterEndingPage from "@/components/FiveLetterEndingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-ending-in-al",
  },
  title: "5 Letter Words Ending In AL",
  description:
    "Browse useful 5 letter words ending in AL for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsEndingInALPage() {
  return <FiveLetterEndingPage ending="al" />;
}
