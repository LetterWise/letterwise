export type LetterLinkPuzzle = {
  date: string;
  start: string;
  target: string;
  par: number;
  solution: string[];
};

const canonicalLadders = [
  ["cold", "cord", "card", "ward", "warm"],
  ["head", "heal", "teal", "tell", "tall", "tail"],
  ["lead", "load", "goad", "gold"],
  ["sand", "wand", "wane", "wave"],
  ["mind", "mild", "mold", "gold"],
  ["same", "came", "cane", "cone", "bone"],
  ["work", "word", "wood", "good"],
  ["farm", "form", "foam", "roam"],
  ["time", "tame", "game", "gate"],
  ["rise", "rose", "pose", "post"],
  ["cats", "cots", "dots", "dogs"],
  ["hand", "band", "bond", "fond", "food", "foot"],
  ["dark", "bark", "bare", "bale", "pale"],
  ["fast", "last", "lest", "lost"],
  ["sing", "ring", "rung", "rune", "tune"],
  ["milk", "mill", "mall", "mail", "tail"],
  ["duck", "luck", "lack", "lark"],
  ["bell", "belt", "melt", "meat"],
  ["pine", "wine", "wing", "sing"],
  ["coat", "boat", "boot", "book"],
  ["ring", "sing", "sang", "sand"],
  ["bite", "site", "side", "ride"],
  ["kind", "mind", "mine", "line"],
  ["fall", "wall", "will", "wild"],
  ["find", "fond", "food", "foot", "loot", "lost"],
  ["hate", "late", "lane", "lone", "love"],
  ["rain", "main", "mail", "mall", "male", "mile", "mild", "mind", "wind"],
  ["hill", "will", "wall", "wale", "vale"],
  ["frog", "flog", "flag", "flap", "slap", "slop", "slot"],
];

function buildPuzzlePaths() {
  return canonicalLadders.flatMap((ladder) => {
    const paths: string[][] = [];

    for (let start = 0; start < ladder.length - 3; start += 1) {
      for (let end = start + 3; end < ladder.length; end += 1) {
        const path = ladder.slice(start, end + 1);
        paths.push(path, [...path].reverse());
      }
    }

    return paths;
  });
}

const puzzlePaths = buildPuzzlePaths();

export function getDailyLetterLink(date: string): LetterLinkPuzzle {
  const dayNumber = Math.floor(
    new Date(`${date}T00:00:00Z`).getTime() / 86_400_000,
  );
  const solution = puzzlePaths[dayNumber % puzzlePaths.length];

  return {
    date,
    start: solution[0],
    target: solution[solution.length - 1],
    par: solution.length - 1,
    solution,
  };
}

export function differsByOneLetter(first: string, second: string) {
  if (first.length !== second.length) {
    return false;
  }

  let differences = 0;

  for (let index = 0; index < first.length; index += 1) {
    if (first[index] !== second[index]) {
      differences += 1;
    }
  }

  return differences === 1;
}
