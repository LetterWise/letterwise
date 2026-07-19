export const metadata = {
  title: "How to Play Daily Word Puzzle",
  description:
    "Learn how to play the LetterWise Daily Word Puzzle, including the rules, color clues, levels, guesses, stats, and archive puzzles.",
};

const steps = [
  {
    title: "Choose a level",
    description:
      "Pick easy, medium, or hard. Each level has a different five-letter word to solve.",
  },
  {
    title: "Guess a five-letter word",
    description:
      "Enter a five-letter word using your keyboard or the on-screen keyboard.",
  },
  {
    title: "Use the color clues",
    description:
      "Green means the letter is correct and in the right place. Yellow means the letter is in the word but in the wrong place. Gray means the letter is not in the word.",
  },
  {
    title: "Solve in six guesses",
    description:
      "You have up to six guesses to find the correct word.",
  },
  {
    title: "Track your stats",
    description:
      "Your browser can save basic stats such as games played, win rate, current streak, and best streak.",
  },
];

export default function HowToPlayDailyWordPuzzlePage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a
          href="/daily-word-puzzle"
          className="text-sm text-slate-600 hover:text-white"
        >
          ← Back to Daily Word Puzzle
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-700">
            Daily Word Puzzle
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            How to Play the Daily Word Puzzle
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            The LetterWise Daily Word Puzzle is a five-letter word game. Choose
            a level, make guesses, use the color clues, and try to solve the
            word in six guesses.
          </p>
        </div>

        <section className="mt-12 grid gap-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-violet-100 bg-white p-6"
            >
              <p className="text-sm font-semibold text-violet-600">
                Step {index + 1}
              </p>

              <h2 className="mt-2 text-2xl font-semibold">{step.title}</h2>

              <p className="mt-3 leading-7 text-slate-700">
                {step.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-violet-100 bg-white p-6">
          <h2 className="text-2xl font-semibold">Color clues</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-emerald-500 bg-emerald-600 text-2xl font-bold">
                A
              </div>
              <h3 className="font-semibold text-emerald-600">Green</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The letter is correct and in the correct position.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-yellow-500 bg-yellow-600 text-2xl font-bold">
                A
              </div>
              <h3 className="font-semibold text-yellow-400">Yellow</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The letter is in the word but in the wrong position.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-2xl font-bold">
                A
              </div>
              <h3 className="font-semibold text-slate-700">Gray</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The letter is not in the answer.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/daily-word-puzzle"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Play today&apos;s puzzle</h2>
            <p className="mt-2 text-sm text-slate-600">
              Try the easy, medium, or hard daily challenge.
            </p>
          </a>

          <a
            href="/daily-word-puzzle/archive"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">View puzzle archive</h2>
            <p className="mt-2 text-sm text-slate-600">
              Replay previous Daily Word Puzzle challenges.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
