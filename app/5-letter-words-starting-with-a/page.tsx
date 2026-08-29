import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-a",
  },
  title: "5 Letter Words Starting With A",
  description:
    "Browse useful 5 letter words starting with A for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithAPage() {
  return <FiveLetterStartingPage letter="a" />;
}
