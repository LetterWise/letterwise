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
  "/unscramble-letters",
  "/wordle-solver",
  "/wordle-starter-words",
  "/word-lists",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...staticPages, ...fiveLetterStartingPages];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" || page === "/daily-word-puzzle" ? "daily" : "weekly",
    priority: page === "" ? 1 : page === "/daily-word-puzzle" ? 0.9 : 0.7,
  }));
}
