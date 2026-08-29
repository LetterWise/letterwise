import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-p",
  },
  title: "5 Letter Words Starting With P",
  description:
    "Browse useful 5 letter words starting with P for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithPPage() {
  return <FiveLetterStartingPage letter="p" />;
}
