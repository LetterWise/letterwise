export const metadata = {
  title: "Best Words for Word Games | LetterWise",
  description:
    "Find useful words for word games, Wordle, spelling practice, and puzzles. Learn how to choose strong words and use LetterWise tools.",
};

const wordGroups = [
  {
    title: "Good starter words",
    description: "Useful when you want a balanced first guess.",
    words: ["crane", "slate", "trace", "stare", "raise", "plant", "point", "stone"],
  },
  {
    title: "Words with strong vowels",
    description: "Helpful when you want to test vowel sounds early.",
    words: ["adieu", "audio", "arise", "raise", "ocean", "equal", "opera", "radio"],
  },
  {
    title: "Words with no repeats",
    description: "Good for testing more unique letters in one guess.",
    words: ["crane", "slate", "plant", "ghost", "brick", "flame", "proud", "chair"],
  },
];

const tips = [
  {
    title: "Use common letters first",
    description:
      "Words with common letters are usually more useful than rare words when you are trying to collect clues.",
  },
  {
    title: "Avoid repeated letters early",
    description:
      "A no-repeat word can test five different letters at once, which is useful for Wordle and other puzzles.",
  },
  {
    title: "Use filters when you know clues",
    description:
      "If you know the word starts, ends, contains a letter, or has a fixed length, use filters to narrow the results.",
  },
];

export default function BestWordsForWordGamesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word Game Guide
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Best Words for Word Games
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Learn how to choose useful words for Wordle, word games, spelling
            practice, vocabulary building, and puzzles.
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
                placeholder="Enter letters to find words"
                className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="mt-5 rounded-full bg-amber-300 px-12 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
            >
              Search Words
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
          <a href="/wordle-starter-words" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Starter Words
          </a>
          <a href="/5-letter-words" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            5 Letter Words
          </a>
        </div>

        <section className="mx-auto mt-14 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            What makes a word good for word games?
          </h2>

          <p className="mt-4">
            The best words for word games are usually words that give you useful
            information. In Wordle, that might mean common letters, several
            vowels, and no repeated letters. In other word games, it might mean
            finding the longest word possible from the letters you have.
          </p>

          <p className="mt-4">
            A good word is not always the rarest word. Often, a simple common
            word is more useful because it helps you test letters, build
            connections, or solve a puzzle faster.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black">Useful Word Game Word Groups</h2>
          <p className="mt-2 text-slate-600">
            These groups give you practical words for different word game situations.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {wordGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-black">{group.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {group.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {group.words.map((word) => (
                    <a
                      key={word}
                      href={`/word-finder?letters=${word}`}
                      className="rounded-xl bg-violet-50 px-3 py-2 text-center font-black uppercase hover:bg-white"
                    >
                      {word}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black">How to choose better words</h2>
          <p className="mt-2 text-slate-600">
            These simple rules can help you make stronger guesses.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-xl text-violet-700">
                  ✦
                </div>

                <h3 className="text-2xl font-black">{tip.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            Use LetterWise to find better words
          </h2>

          <p className="mt-4">
            Use Word Finder when you have letters and want possible words. Use
            Unscramble Letters when your letters are mixed up. Use Wordle Solver
            when you have green, yellow, and gray clues from a Wordle puzzle.
          </p>

          <div className="mt-8 rounded-3xl bg-violet-100 p-8">
            <h3 className="text-2xl font-black text-slate-900">
              Start with Word Finder
            </h3>

            <p className="mt-3 text-slate-700">
              Enter letters, add filters, and browse possible words grouped by
              word length.
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
