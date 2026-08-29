import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Word Solver & Word Finder: Find Words From Letters",
  description:
    "Use this free word solver and word finder to make words from letters for word games, puzzles, spelling practice, and vocabulary building.",
  alternates: {
    canonical: "/word-finder",
  },
};

export default function WordFinderLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
