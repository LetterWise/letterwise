import FiveLetterContainingPage from "@/components/FiveLetterContainingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-containing-o",
  },
  title: "5 Letter Words Containing O",
  description:
    "Browse useful 5 letter words containing O for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsContainingOPage() {
  return <FiveLetterContainingPage letters="o" />;
}
