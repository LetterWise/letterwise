import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Unscramble Letters: Make Words From Letters",
  description:
    "Unscramble letters into possible words, filter by length, and explore results for word games and vocabulary practice.",
  alternates: {
    canonical: "/unscramble-letters",
  },
};

export default function UnscrambleLettersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
