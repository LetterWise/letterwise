import FiveLetterContainingPage from "@/components/FiveLetterContainingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-containing-ch",
  },
  title: "5 Letter Words Containing CH",
  description:
    "Browse useful 5 letter words containing CH for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsContainingCHPage() {
  return <FiveLetterContainingPage letters="ch" />;
}
