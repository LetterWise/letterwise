import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tryletterwise.com"),
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
    url: "https://www.tryletterwise.com",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber-300 focus:px-5 focus:py-3 focus:font-bold focus:text-slate-950 focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-violet-200"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
