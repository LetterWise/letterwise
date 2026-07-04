export default function UnscrambleLettersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-10">
          <p className="mb-4 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 inline-block">
            Letter unscrambler
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Unscramble Letters
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Enter your letters to find possible words for word games, puzzles,
            spelling practice, and vocabulary building.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <label
            htmlFor="letters"
            className="block text-sm font-medium text-slate-300"
          >
            Your letters
          </label>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="letters"
              type="text"
              placeholder="Example: tcahe"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
            />

            <button className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-400">
              Find Words
            </button>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Soon this tool will show all words that can be made from your
            letters.
          </p>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Word games</h2>
            <p className="mt-2 text-sm text-slate-400">
              Useful for Scrabble-style games, anagrams, and puzzle solving.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Spelling practice</h2>
            <p className="mt-2 text-sm text-slate-400">
              Turn mixed-up spelling words into classroom activities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="font-semibold">Fast filters</h2>
            <p className="mt-2 text-sm text-slate-400">
              We will add length, starts-with, ends-with, and contains filters.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}