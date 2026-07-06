import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const wordListModule = require("word-list");
const wordListPath =
  typeof wordListModule === "string"
    ? wordListModule
    : wordListModule.default || wordListModule.wordListPath || wordListModule.path;

if (!wordListPath) {
  console.error("Could not find the word-list file path.");
  console.error(wordListModule);
  process.exit(1);
}

const rawWords = fs.readFileSync(wordListPath, "utf8").split("\n");

const words = Array.from(
  new Set(
    rawWords
      .map((word) => word.trim().toLowerCase())
      .filter((word) => /^[a-z]+$/.test(word))
      .filter((word) => word.length >= 2)
      .filter((word) => word.length <= 12)
  )
).sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  return a.localeCompare(b);
});

const output = `export const words = ${JSON.stringify(words, null, 2)};\n`;

const outputPath = path.join(process.cwd(), "data", "words.ts");

fs.writeFileSync(outputPath, output);

console.log(`Generated ${words.length} words at data/words.ts`);