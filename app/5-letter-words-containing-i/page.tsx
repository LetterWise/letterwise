import FiveLetterContainingPage from "@/components/FiveLetterContainingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-containing-i",
  },
  title: "5 Letter Words Containing I",
  description:
    "Browse useful 5 letter words containing I for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsContainingIPage() {
  return <FiveLetterContainingPage letters="i" />;
}
