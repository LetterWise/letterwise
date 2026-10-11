import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Wordle Solver: Find Matching Words",
  description:
    "Use confirmed, included, and excluded letters to find matching five-letter words from the broad LetterWise word list.",
  alternates: {
    canonical: "/wordle-solver",
  },
};

export default function WordleSolverLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
