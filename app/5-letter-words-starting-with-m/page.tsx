import FiveLetterStartingPage from "@/components/FiveLetterStartingPage";

export const metadata = {
  alternates: {
    canonical: "/5-letter-words-starting-with-m",
  },
  title: "5 Letter Words Starting With M",
  description:
    "Browse useful 5 letter words starting with M for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithMPage() {
  return <FiveLetterStartingPage letter="m" />;
}
