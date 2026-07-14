import type { MetadataRoute } from "next";

const baseUrl = "https://www.tryletterwise.com";

const staticPages = [
  "",
  "/about",
  "/faq",
  "/updates",
  "/contact",
  "/privacy",
  "/terms",
  "/tools",
  "/word-finder",
  "/how-to-use-word-finder",
  "/best-words-for-word-games",
  "/unscramble-letters",
  "/wordle-solver",
  "/wordle-starter-words",
  "/word-lists",
  "/word-guides",
  "/best-two-word-starts-by-data",
  "/best-5-letter-starter-words-by-data",
  "/most-common-letters-in-5-letter-words",
  "/3-letter-words",
  "/4-letter-words",
  "/5-letter-words",
  "/common-5-letter-words",
  "/5-letter-words-with-vowels",
  "/5-letter-words-no-repeats",
  "/6-letter-words",
  "/7-letter-words",
  "/daily-word-puzzle",
  "/daily-word-puzzle/how-to-play",
  "/daily-word-puzzle/archive",
];

const fiveLetterStartingPages = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((letter) => `/5-letter-words-starting-with-${letter}`);

const fiveLetterEndingPages = ["al", "ed", "el", "er", "ing", "le", "ly", "se"].map(
  (ending) => `/5-letter-words-ending-in-${ending}`,
);

const fiveLetterContainingPages = ["a", "ai", "ch", "e", "i", "o", "ou", "st", "u"].map(
  (letters) => `/5-letter-words-containing-${letters}`,
);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...staticPages,
    ...fiveLetterStartingPages,
    ...fiveLetterEndingPages,
    ...fiveLetterContainingPages,
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" || page === "/daily-word-puzzle" ? "daily" : "weekly",
    priority: page === "" ? 1 : page === "/daily-word-puzzle" ? 0.9 : 0.7,
  }));
}
