import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-j",
  },
  title: "5 Letter Words Starting With J",
  description:
    "Browse useful 5 letter words starting with J for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithJPage() {
  return <FiveLetterStartingPage letter="j" />;
}
