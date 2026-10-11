import FiveLetterContainingPage from "@/components/FiveLetterContainingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-containing-ai",
  },
  title: "5 Letter Words Containing AI",
  description:
    "Browse useful 5 letter words containing AI for Wordle, word games, spelling practice, crossword clues, and vocabulary building.",
};

export default function FiveLetterWordsContainingAIPage() {
  return <FiveLetterContainingPage letters="ai" />;
}
