import { words } from "@/data/words";

type WordLengthPageProps = {
  length: number;
};

export default function WordLengthPage({ length }: WordLengthPageProps) {
  const matchingWords = words
    .filter((word) => word.length === length)
    .slice(0, 300);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Word lists
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {length} Letter Words
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Browse useful {length} letter words for word games, spelling
            practice, crossword clues, vocabulary building, and puzzle solving.
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">
            Popular {length} letter words
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Showing up to 300 words from the LetterWise word list.
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
            href="/word-finder"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Use Word Finder</h2>
            <p className="mt-2 text-sm text-slate-400">
              Enter letters and find possible words.
            </p>
          </a>

          <a
            href="/unscramble-letters"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Unscramble Letters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Rearrange letters to find words for games and puzzles.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
