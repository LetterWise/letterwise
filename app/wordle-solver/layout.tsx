import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Wordle Solver: Find Possible Answers",
  description:
    "Use confirmed, misplaced, and excluded letters to find possible five-letter Wordle answers.",
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
