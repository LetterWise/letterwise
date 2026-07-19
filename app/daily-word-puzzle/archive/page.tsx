import PuzzleArchiveList from "./PuzzleArchiveList";

export const metadata = {
  title: "Daily Word Puzzle Archive",
  description:
    "Browse past LetterWise Daily word puzzles and replay previous easy, medium, and hard word challenges.",
};

export default function DailyWordPuzzleArchivePage() {
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
            Puzzle archive
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Daily Word Puzzle Archive
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Replay previous LetterWise Daily puzzles. Choose a date and level,
            then try to solve the word without seeing the answer.
          </p>
        </div>

        <PuzzleArchiveList />
      </section>
    </main>
  );
}
