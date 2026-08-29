import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-q",
  },
  title: "5 Letter Words Starting With Q",
  description:
    "Browse useful 5 letter words starting with Q for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithQPage() {
  return <FiveLetterStartingPage letter="q" />;
}
