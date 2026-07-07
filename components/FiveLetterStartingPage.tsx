import { words } from "@/data/words";

type FiveLetterStartingPageProps = {
  letter: string;
};

export default function FiveLetterStartingPage({
  letter,
}: FiveLetterStartingPageProps) {
  const cleanLetter = letter.toLowerCase();

  const matchingWords = words
    .filter((word) => word.length === 5)
    .filter((word) => word.startsWith(cleanLetter))
    .slice(0, 300);

  const uppercaseLetter = cleanLetter.toUpperCase();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a
          href="/5-letter-words"
          className="text-sm text-slate-400 hover:text-white"
        >
          ← Back to 5 Letter Words
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            5 letter words
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            5 Letter Words Starting With {uppercaseLetter}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Browse 5 letter words starting with {uppercaseLetter} for Wordle,
            word games, spelling practice, vocabulary building, and puzzle
            solving.
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">
            Words starting with {uppercaseLetter}
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Showing up to 300 five-letter words from the LetterWise word list.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {matchingWords.map((word) => (
              <a
                key={word}
                href={`/word-finder?letters=${word}`}
                className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide hover:bg-slate-800"
              >
                {word}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/wordle-solver"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Use the Wordle Solver</h2>
            <p className="mt-2 text-sm text-slate-400">
              Enter known letters, included letters, and excluded letters to
              narrow down possible answers.
            </p>
          </a>

          <a
            href="/unscramble-letters"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Unscramble Letters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Rearrange letters to find possible words for games and puzzles.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
