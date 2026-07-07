import type { MetadataRoute } from "next";

const baseUrl = "https://letterwise-site.vercel.app";

const staticPages = [
  "",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/word-finder",
  "/unscramble-letters",
  "/wordle-solver",
  "/5-letter-words",
  "/daily-word-puzzle",
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
