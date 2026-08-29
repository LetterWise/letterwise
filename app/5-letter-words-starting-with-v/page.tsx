import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-v",
  },
  title: "5 Letter Words Starting With V",
  description:
    "Browse useful 5 letter words starting with V for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithVPage() {
  return <FiveLetterStartingPage letter="v" />;
}
