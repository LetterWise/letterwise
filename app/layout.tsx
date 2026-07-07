import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LetterWise | Word Finder, Wordle Solver & Daily Word Puzzle",
  description:
    "LetterWise gives you word tools for games, puzzles, spelling practice, Wordle-style solving, and daily word challenges.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
