export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
          Word tools for games, puzzles, and classrooms
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Find better words, faster.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          LetterWise helps you solve word games, unscramble letters, find
          five-letter words, and build smarter word lists for learning.
        </p>

        <div className="mt-10 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          <a
            href="/word-finder"
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Word Finder</h2>
            <p className="mt-2 text-sm text-slate-400">
              Make words from the letters you have.
            </p>
          </a>

          <a
            href="/unscramble-letters"
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Unscramble Letters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Turn mixed-up letters into possible words.
            </p>
          </a>

          <a
            href="/wordle-solver"
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-left hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Wordle Solver</h2>
            <p className="mt-2 text-sm text-slate-400">
              Use green, yellow, and gray letters to find the answer.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}