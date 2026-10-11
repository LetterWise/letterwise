import FiveLetterContainingPage from "@/components/FiveLetterContainingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-containing-u",
  },
  title: "5 Letter Words Containing U",
  description:
    "Browse useful 5 letter words containing U for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsContainingUPage() {
  return <FiveLetterContainingPage letters="u" />;
}
