export const metadata = {
  title: "How to Use Word Finder | LetterWise",
  description:
    "Learn how to use the LetterWise Word Finder to find words from letters, use filters, solve word games, and improve spelling practice.",
};

const examples = [
  {
    title: "Find words from letters",
    letters: "crane",
    explanation:
      "Enter the letters you have, and Word Finder will show possible words grouped by length.",
  },
  {
    title: "Find words that start with a letter",
    letters: "teacher",
    filter: "Starts with T",
    explanation:
      "Use the Starts filter when you already know the first letter of the word.",
  },
  {
    title: "Find words with a certain length",
    letters: "planet",
    filter: "Length 5",
    explanation:
      "Use the Length filter when a game or puzzle needs an exact word length.",
  },
  {
    title: "Find words that contain letters",
    letters: "school",
    filter: "Contains O",
    explanation:
      "Use the Contains filter when you know a letter must appear somewhere in the word.",
  },
];

const useCases = [
  {
    title: "Word games",
    description:
      "Use Word Finder when you have letters and need possible words for games or puzzles.",
  },
  {
    title: "Wordle help",
    description:
      "Use it with Wordle Solver when you want to test possible five-letter words.",
  },
  {
    title: "Spelling practice",
    description:
      "Teachers, parents, and students can use it to explore words from letter groups.",
  },
];

export default function HowToUseWordFinderPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word Finder Guide
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            How to Use Word Finder
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Learn how to enter letters, use filters, and find useful words for
            games, puzzles, spelling practice, and vocabulary building.
          </p>

          <form
            action="/word-finder"
            className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-5 shadow-xl shadow-violet-950/20"
          >
            <div className="rounded-2xl border-2 border-slate-900 bg-white px-5 py-4 text-left">
              <label htmlFor="letters" className="sr-only">
                Enter letters
              </label>

              <input
                id="letters"
                name="letters"
                placeholder="Try letters like crane or teacher"
                className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="mt-5 rounded-full bg-amber-300 px-12 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
            >
              Try Word Finder
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-3 sm:grid-cols-5">
          <a href="/word-finder" className="rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700">
            Word Finder
          </a>
          <a href="/unscramble-letters" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Unscrambler
          </a>
          <a href="/wordle-solver" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Wordle Solver
          </a>
          <a href="/word-lists" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Lists
          </a>
          <a href="/daily-word-puzzle" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Daily Game
          </a>
        </div>

        <section className="mx-auto mt-14 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            What does Word Finder do?
          </h2>

          <p className="mt-4">
            Word Finder helps you find possible words from the letters you have.
            You can enter letters, then add filters for starting letters, ending
            letters, contained letters, or word length.
          </p>

          <p className="mt-4">
            It is useful when you are playing word games, solving puzzles,
            practicing spelling, building vocabulary, or looking for possible
            words from a group of letters.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black">Word Finder Examples</h2>
          <p className="mt-2 text-slate-600">
            These examples show common ways to use the tool.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {examples.map((example) => (
              <a
                key={example.title}
                href={`/word-finder?letters=${example.letters}`}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm hover:border-violet-300 hover:bg-violet-50"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">{example.title}</h3>

                  <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold uppercase text-violet-700">
                    {example.letters}
                  </span>
                </div>

                {example.filter && (
                  <p className="mt-3 inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-black text-slate-900">
                    {example.filter}
                  </p>
                )}

                <p className="mt-3 leading-7 text-slate-600">
                  {example.explanation}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            How to use the filters
          </h2>

          <p className="mt-4">
            The <strong>Starts</strong> filter is for words that begin with a
            certain letter or letter group. The <strong>Ends</strong> filter is
            for words that finish with a certain letter or ending. The{" "}
            <strong>Contains</strong> filter is for letters that must appear
            somewhere in the word. The <strong>Length</strong> filter is for an
            exact word length.
          </p>

          <p className="mt-4">
            You can use one filter or combine several filters. For example, if
            you enter letters and set the length to five, the results will only
            show five-letter words.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black">When to use Word Finder</h2>
          <p className="mt-2 text-slate-600">
            Word Finder is useful in several different situations.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-xl text-violet-700">
                  ✦
                </div>

                <h3 className="text-2xl font-black">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <div className="rounded-3xl bg-violet-100 p-8">
            <h2 className="text-3xl font-black text-slate-900">
              Ready to try it?
            </h2>

            <p className="mt-3 text-slate-700">
              Enter your letters into Word Finder and use the filters to narrow
              the results.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/word-finder"
                className="inline-block rounded-full bg-amber-300 px-7 py-3 font-black text-slate-950 hover:bg-amber-200"
              >
                Open Word Finder
              </a>

              <a
                href="/unscramble-letters"
                className="inline-block rounded-full bg-white px-7 py-3 font-black text-violet-700 hover:bg-violet-50"
              >
                Try Unscrambler
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
