import type { Metadata } from "next";
import DailyWordPuzzleClient from "./DailyWordPuzzleClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Daily Word Puzzle",
  description:
    "Play LetterWise's free daily five-letter word puzzle in easy, medium, or hard mode, then explore past puzzles in the archive.",
  alternates: {
    canonical: "/daily-word-puzzle",
  },
};

export default function DailyWordPuzzlePage() {
  return <DailyWordPuzzleClient />;
}
