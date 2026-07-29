import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Word Finder: Find Words From Letters",
  description:
    "Enter your letters to find possible words for word games, puzzles, spelling practice, and vocabulary building.",
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
