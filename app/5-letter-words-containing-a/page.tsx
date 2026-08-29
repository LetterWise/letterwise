import FiveLetterContainingPage from "@/components/FiveLetterContainingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-containing-a",
  },
  title: "5 Letter Words Containing A",
  description:
    "Browse useful 5 letter words containing A for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsContainingAPage() {
  return <FiveLetterContainingPage letters="a" />;
}
