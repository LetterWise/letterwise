import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-l",
  },
  title: "5 Letter Words Starting With L",
  description:
    "Browse useful 5 letter words starting with L for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithLPage() {
  return <FiveLetterStartingPage letter="l" />;
}
