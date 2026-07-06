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
            Browse previous LetterWise Daily puzzles. Soon, each date will have
            a playable archive version for easy, medium, and hard levels.
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
                      Easy, medium, and hard daily word challenges.
                    </p>
                  </div>

                  <a
                    href="/daily-word-puzzle"
                    className="rounded-xl bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-sky-400"
                  >
                    Play today
                  </a>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-sm text-slate-500">Easy</p>
                    <p className="mt-1 text-xl font-bold uppercase">
                      {puzzle.easy}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-sm text-slate-500">Medium</p>
                    <p className="mt-1 text-xl font-bold uppercase">
                      {puzzle.medium}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-sm text-slate-500">Hard</p>
                    <p className="mt-1 text-xl font-bold uppercase">
                      {puzzle.hard}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
