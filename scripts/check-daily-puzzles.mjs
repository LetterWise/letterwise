import fs from "fs";

const file = fs.readFileSync("data/dailyPuzzles.ts", "utf8");

const rows = [
  ...file.matchAll(
    /\{ date: "([^"]+)", easy: "([^"]+)", medium: "([^"]+)", hard: "([^"]+)" \}/g,
  ),
];

let hasError = false;
const seenDates = new Set();
let previousDate = "";

for (const row of rows) {
  const [, date, easy, medium, hard] = row;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    console.log(`Invalid date format: ${date}`);
    hasError = true;
  }

  if (seenDates.has(date)) {
    console.log(`Duplicate puzzle date: ${date}`);
    hasError = true;
  }

  if (previousDate && date <= previousDate) {
    console.log(`Puzzle dates are not in ascending order: ${previousDate}, ${date}`);
    hasError = true;
  }

  seenDates.add(date);
  previousDate = date;

  for (const [level, word] of [
    ["easy", easy],
    ["medium", medium],
    ["hard", hard],
  ]) {
    if (word.length !== 5) {
      console.log(`Invalid length: ${date} ${level} "${word}" has ${word.length} letters`);
      hasError = true;
    }

    if (!/^[a-z]+$/.test(word)) {
      console.log(`Invalid characters: ${date} ${level} "${word}"`);
      hasError = true;
    }
  }
}

if (!rows.length) {
  console.log("No daily puzzles found.");
  process.exit(1);
}

if (hasError) {
  process.exit(1);
}

console.log(`Checked ${rows.length} daily puzzle dates. All answers are 5 letters.`);
