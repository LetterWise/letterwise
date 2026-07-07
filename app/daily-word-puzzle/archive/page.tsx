import { dailyPuzzles } from "@/data/dailyPuzzles";

export const metadata = {
  title: "Daily Word Puzzle Archive | LetterWise",
  description:
    "Browse past LetterWise Daily word puzzles and replay previous easy, medium, and hard word challenges.",
};

export default function DailyWordPuzzleArchivePage() {
  const puzzles = [...dailyPuzzles].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a
          href="/daily-word-puzzle"
          className="text-sm text-slate-400 hover:text-white"
        >
          ← Back to Daily Word Puzzle
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Puzzle archive
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Daily Word Puzzle Archive
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Replay previous LetterWise Daily puzzles. Choose a date and level,
            then try to solve the word without seeing the answer.
          </p>
        </div>

        <section className="mt-12">
          <div className="grid gap-4">
            {puzzles.map((puzzle) => (
              <div
                key={puzzle.date}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold">{puzzle.date}</h2>
                    <p className="mt-1 text-sm text-slate-400">
                      Replay the easy, medium, or hard challenge from this date.
                    </p>
                  </div>

                  <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-400">
                    Answers hidden
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <a
                    href={`/daily-word-puzzle?date=${puzzle.date}&level=easy`}
                    className="rounded-2xl border border-slate-800 bg-slate-950 p-4 hover:bg-slate-800"
                  >
                    <p className="text-sm text-slate-500">Easy</p>
                    <p className="mt-1 text-xl font-bold">Play Easy</p>
                    <p className="mt-2 text-sm text-slate-400">
                      A simpler five-letter word.
                    </p>
                  </a>

                  <a
                    href={`/daily-word-puzzle?date=${puzzle.date}&level=medium`}
                    className="rounded-2xl border border-slate-800 bg-slate-950 p-4 hover:bg-slate-800"
                  >
                    <p className="text-sm text-slate-500">Medium</p>
                    <p className="mt-1 text-xl font-bold">Play Medium</p>
                    <p className="mt-2 text-sm text-slate-400">
                      A balanced daily challenge.
                    </p>
                  </a>

                  <a
                    href={`/daily-word-puzzle?date=${puzzle.date}&level=hard`}
                    className="rounded-2xl border border-slate-800 bg-slate-950 p-4 hover:bg-slate-800"
                  >
                    <p className="text-sm text-slate-500">Hard</p>
                    <p className="mt-1 text-xl font-bold">Play Hard</p>
                    <p className="mt-2 text-sm text-slate-400">
                      A more difficult word.
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
