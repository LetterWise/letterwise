import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://letterwise-site.vercel.app"),
  title: {
    default: "LetterWise | Word Finder, Wordle Solver & Daily Word Puzzle",
    template: "%s | LetterWise",
  },
  description:
    "LetterWise gives you simple word tools for finding words, unscrambling letters, solving Wordle-style clues, browsing word lists, and playing daily word puzzles.",
  applicationName: "LetterWise",
  keywords: [
    "word finder",
    "unscramble letters",
    "Wordle solver",
    "5 letter words",
    "word lists",
    "daily word puzzle",
    "spelling practice",
    "vocabulary",
  ],
  authors: [{ name: "LetterWise" }],
  creator: "LetterWise",
  publisher: "LetterWise",
  openGraph: {
    title: "LetterWise | Word Finder, Wordle Solver & Daily Word Puzzle",
    description:
      "Simple word tools for finding words, unscrambling letters, solving Wordle-style clues, browsing word lists, and playing daily word puzzles.",
    url: "https://letterwise-site.vercel.app",
    siteName: "LetterWise",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "LetterWise | Word Finder, Wordle Solver & Daily Word Puzzle",
    description:
      "Simple word tools for finding words, unscrambling letters, solving Wordle-style clues, browsing word lists, and playing daily word puzzles.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
