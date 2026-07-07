export const metadata = {
  title: "About LetterWise | Simple Word Tools and Daily Puzzles",
  description:
    "Learn about LetterWise, a simple word tools website for word games, spelling practice, puzzles, and daily word challenges.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
          About LetterWise
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Simple word tools for games, puzzles, and learning
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
          <p>
            LetterWise is a collection of simple word tools designed to help
            with word games, spelling practice, vocabulary building, and daily
            puzzle challenges.
          </p>

          <p>
            You can use LetterWise to find words from letters, unscramble mixed
            letters, solve Wordle-style clues, browse five-letter words, and
            play the Daily Word Puzzle.
          </p>

          <p>
            The goal is to keep the site clean, fast, and easy to use. No
            complicated menus, no unnecessary distractions — just useful word
            tools that work.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/word-finder"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Word Finder</h2>
            <p className="mt-2 text-sm text-slate-400">
              Find possible words from a set of letters.
            </p>
          </a>

          <a
            href="/daily-word-puzzle"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Daily Word Puzzle</h2>
            <p className="mt-2 text-sm text-slate-400">
              Play the daily five-letter word challenge.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
