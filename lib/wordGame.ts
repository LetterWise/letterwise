export type LetterStatus = "correct" | "present" | "absent" | "empty";

export function cleanGuess(input: string) {
  return input.toLowerCase().replace(/[^a-z]/g, "").slice(0, 5);
}

export function scoreGuess(guess: string, answer: string): LetterStatus[] {
  const result: LetterStatus[] = Array(5).fill("absent");
  const answerLetters = answer.split("");
  const used = Array(5).fill(false);

  for (let i = 0; i < 5; i++) {
    if (guess[i] === answer[i]) {
      result[i] = "correct";
      used[i] = true;
    }
  }

  for (let i = 0; i < 5; i++) {
    if (result[i] === "correct") continue;

    const matchingIndex = answerLetters.findIndex(
      (letter, index) => letter === guess[i] && !used[index]
    );

    if (matchingIndex !== -1) {
      result[i] = "present";
      used[matchingIndex] = true;
    }
  }

  return result;
}