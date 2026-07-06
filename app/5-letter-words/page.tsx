import { words } from "@/data/words";
import { getWordsByLength } from "@/lib/wordLists";

export const metadata = {
  title: "5 Letter Words | LetterWise",
  description:
    "Find 5 letter words for Wordle, word games, spelling practice, and vocabulary building. Browse a useful list of five-letter English words.",
};

export default function FiveLetterWordsPage() {
  const fiveLetterWords = getWordsByLength(words, 5);
  const visibleWords = fiveLetterWords.slice(0, 300);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Word list
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            5 Letter Words
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Browse five-letter words for Wordle-style games, word puzzles,
            spelling practice, and vocabulary building.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href="/wordle-solver"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:bg-slate-800"
          >
            <h2 className="font-semibold">Wordle Solver</h2>
            <p className="mt-2 text-sm text-slate-400">
              Use known letters to narrow possible five-letter words.
            </p>
          </a>

          <a
            href="/word-finder"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:bg-slate-800"
          >
            <h2 className="font-semibold">Word Finder</h2>
            <p className="mt-2 text-sm text-slate-400">
              Make words from the letters you have.
            </p>
          </a>

          <a
            href="/unscramble-letters"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:bg-slate-800"
          >
            <h2 className="font-semibold">Unscramble Letters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Turn mixed-up letters into possible words.
            </p>
          </a>
        </div>

        <section className="mt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Five-letter word list</h2>
              <p className="mt-1 text-sm text-slate-400">
                {fiveLetterWords.length} five-letter words found — showing first{" "}
                {visibleWords.length}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {visibleWords.map((word) => (
                <div
                  key={word}
                  className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3"
                >
                  <p className="text-lg font-semibold">{word}</p>
                  <p className="text-xs text-slate-500">5 letters</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              What are 5 letter words useful for?
            </h2>
            <p className="mt-3 text-slate-400">
              Five-letter words are especially useful for Wordle-style puzzles,
              classroom spelling practice, vocabulary games, and anagram
              challenges. You can use this list to explore possible answers or
              build word activities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              How to narrow the list
            </h2>
            <p className="mt-3 text-slate-400">
              If you already know some letters, use the Wordle Solver or Word
              Finder to filter words by starting letters, ending letters,
              included letters, or excluded letters.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Related word tools</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <a
              href="/wordle-solver"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:bg-slate-800"
            >
              Wordle Solver
            </a>

            <a
              href="/word-finder"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:bg-slate-800"
            >
              Word Finder
            </a>

            <a
              href="/unscramble-letters"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:bg-slate-800"
            >
              Unscramble Letters
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}