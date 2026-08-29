import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-r",
  },
  title: "5 Letter Words Starting With R",
  description:
    "Browse useful 5 letter words starting with R for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithRPage() {
  return <FiveLetterStartingPage letter="r" />;
}
