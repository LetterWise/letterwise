import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-i",
  },
  title: "5 Letter Words Starting With I",
  description:
    "Browse useful 5 letter words starting with I for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithIPage() {
  return <FiveLetterStartingPage letter="i" />;
}
