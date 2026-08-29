import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-o",
  },
  title: "5 Letter Words Starting With O",
  description:
    "Browse useful 5 letter words starting with O for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithOPage() {
  return <FiveLetterStartingPage letter="o" />;
}
