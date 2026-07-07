import fs from "fs";

const file = fs.readFileSync("data/dailyPuzzles.ts", "utf8");

const rows = [...file.matchAll(/\{ date: "([^"]+)", easy: "([^"]+)", medium: "([^"]+)", hard: "([^"]+)" \}/g)];

let hasError = false;

for (const row of rows) {
  const [, date, easy, medium, hard] = row;

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
