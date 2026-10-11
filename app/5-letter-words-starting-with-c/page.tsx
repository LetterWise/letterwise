import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-c",
  },
  title: "5 Letter Words Starting With C",
  description:
    "Browse useful 5 letter words starting with C for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithCPage() {
  return <FiveLetterStartingPage letter="c" />;
}
