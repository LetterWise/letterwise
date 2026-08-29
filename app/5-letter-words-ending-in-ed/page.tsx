import FiveLetterEndingPage from "@/components/FiveLetterEndingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-ending-in-ed",
  },
  title: "5 Letter Words Ending In ED",
  description:
    "Browse useful 5 letter words ending in ED for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsEndingInEDPage() {
  return <FiveLetterEndingPage ending="ed" />;
}
