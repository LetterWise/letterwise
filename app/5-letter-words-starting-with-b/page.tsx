const words = [
  "bacon",
  "badge",
  "badly",
  "bagel",
  "baggy",
  "baker",
  "balmy",
  "banjo",
  "barge",
  "basic",
  "basil",
  "basin",
  "basis",
  "batch",
  "bathe",
  "baton",
  "beach",
  "beady",
  "beard",
  "beast",
  "began",
  "begin",
  "being",
  "belly",
  "below",
  "bench",
  "berry",
  "birth",
  "black",
  "blade",
  "blame",
  "blank",
  "blast",
  "blaze",
  "bleak",
  "blend",
  "bless",
  "blind",
  "blink",
  "block",
  "blood",
  "bloom",
  "blown",
  "blues",
  "blunt",
  "blush",
  "board",
  "boast",
  "bonus",
  "boost",
  "booth",
  "bound",
  "brain",
  "brand",
  "brave",
  "bread",
  "break",
  "breed",
  "brick",
  "bride",
  "brief",
  "bring",
  "brisk",
  "broad",
  "broke",
  "brown",
  "brush",
  "buddy",
  "build",
  "built",
  "bulky",
  "bunch",
  "bunny",
  "burst",
  "buyer",
];

export const metadata = {
  title: "5 Letter Words Starting With B | LetterWise",
  description:
    "Browse useful 5 letter words starting with B for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithBPage() {
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
            5 Letter Words Starting With B
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This list of 5 letter words starting with B can help with Wordle,
            crossword clues, spelling practice, vocabulary building, and other
            word games.
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Words starting with B</h2>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {words.map((word) => (
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
            href="/5-letter-words-starting-with-a"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">
              5 Letter Words Starting With A
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Browse another useful Wordle-style word list.
            </p>
          </a>

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
        </section>
      </section>
    </main>
  );
}
