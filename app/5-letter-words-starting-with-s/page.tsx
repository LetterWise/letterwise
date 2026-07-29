import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  title: "5 Letter Words Starting With S",
  description:
    "Browse useful 5 letter words starting with S for Wordle, word games, spelling practice, and vocabulary building.",
  alternates: {
    canonical: "/5-letter-words-starting-with-s",
  },
};

export default function FiveLetterWordsStartingWithSPage() {
  return <FiveLetterStartingPage letter="s" />;
}
