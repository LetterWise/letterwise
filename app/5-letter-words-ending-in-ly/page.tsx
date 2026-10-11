import FiveLetterEndingPage from "@/components/FiveLetterEndingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-ending-in-ly",
  },
  title: "5 Letter Words Ending In LY",
  description:
    "Browse useful 5 letter words ending in LY for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsEndingInLYPage() {
  return <FiveLetterEndingPage ending="ly" />;
}
