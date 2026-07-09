export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-700">
          Page not found
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          404
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          Sorry, we could not find that page. Try one of the LetterWise word
          tools below.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/word-finder"
            className="rounded-2xl border border-violet-100 bg-white p-6 text-left hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Word Finder</h2>
            <p className="mt-2 text-sm text-slate-600">
              Find possible words from a set of letters.
            </p>
          </a>

          <a
            href="/unscramble-letters"
            className="rounded-2xl border border-violet-100 bg-white p-6 text-left hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Unscramble Letters</h2>
            <p className="mt-2 text-sm text-slate-600">
              Rearrange letters to find possible words.
            </p>
          </a>

          <a
            href="/wordle-solver"
            className="rounded-2xl border border-violet-100 bg-white p-6 text-left hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Wordle Solver</h2>
            <p className="mt-2 text-sm text-slate-600">
              Narrow down possible Wordle-style answers.
            </p>
          </a>

          <a
            href="/daily-word-puzzle"
            className="rounded-2xl border border-violet-100 bg-white p-6 text-left hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Daily Word Puzzle</h2>
            <p className="mt-2 text-sm text-slate-600">
              Play the daily five-letter word challenge.
            </p>
          </a>
        </div>

        <a
          href="/"
          className="mt-10 inline-block rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700"
        >
          Back to homepage
        </a>
      </section>
    </main>
  );
}
