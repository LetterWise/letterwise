export const metadata = {
  title: "Common 5 Letter Words",
  description:
    "Browse common 5 letter words for Wordle, spelling practice, word games, and vocabulary building. Use LetterWise tools to find and solve words.",
};

const commonWords = [
  "about",
  "after",
  "again",
  "below",
  "black",
  "bring",
  "build",
  "carry",
  "clean",
  "close",
  "could",
  "dance",
  "drink",
  "early",
  "earth",
  "every",
  "field",
  "first",
  "found",
  "great",
  "green",
  "happy",
  "heart",
  "house",
  "large",
  "learn",
  "light",
  "money",
  "never",
  "night",
  "place",
  "plant",
  "point",
  "quick",
  "right",
  "round",
  "small",
  "sound",
  "spell",
  "stand",
  "start",
  "still",
  "stone",
  "story",
  "table",
  "teach",
  "thing",
  "think",
  "today",
  "under",
  "water",
  "where",
  "which",
  "world",
  "write",
];

const categories = [
  {
    title: "Common everyday words",
    words: ["about", "after", "again", "every", "first", "house", "place", "today"],
  },
  {
    title: "Useful Wordle-style words",
    words: ["crane", "slate", "trace", "plant", "point", "stone", "light", "sound"],
  },
  {
    title: "School and spelling words",
    words: ["learn", "teach", "write", "spell", "story", "field", "build", "think"],
  },
];

export default function CommonFiveLetterWordsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word List Guide
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Common 5 Letter Words
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Browse common five-letter words for Wordle, spelling practice,
            vocabulary building, and word games.
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
          <a href="/word-finder" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Finder
          </a>
          <a href="/wordle-solver" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Wordle Solver
          </a>
          <a href="/5-letter-words" className="rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700">
            5 Letter Words
          </a>
          <a href="/wordle-starter-words" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Starter Words
          </a>
          <a href="/word-lists" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Lists
          </a>
        </div>

        <section className="mx-auto mt-14 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            Why common 5 letter words are useful
          </h2>

          <p className="mt-4">
            Common five-letter words are useful because they appear often in
            reading, writing, spelling activities, and word games. They are also
            helpful for Wordle because many answers are ordinary words rather
            than rare vocabulary.
          </p>

          <p className="mt-4">
            When you are solving a word puzzle, common words are usually better
            guesses than strange or very rare words. A familiar word can test
            useful letters and still give you a realistic chance of finding the
            answer.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-3xl font-black">Common 5 Letter Word List</h2>
              <p className="mt-2 text-slate-600">
                A simple list of useful five-letter words.
              </p>
            </div>

            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
              {commonWords.length} words
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {commonWords.map((word) => (
              <a
                key={word}
                href={`/word-finder?letters=${word}`}
                className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3 text-center text-lg font-black uppercase tracking-wide hover:border-violet-300 hover:bg-white"
              >
                {word}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black">Common Word Groups</h2>
          <p className="mt-2 text-slate-600">
            These groups make the list easier to use for different purposes.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-black">{category.title}</h3>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {category.words.map((word) => (
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

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            How to use common 5 letter words in Wordle
          </h2>

          <p className="mt-4">
            Start with a word that uses common letters and no repeats. After
            your first guess, use the colored clues to remove impossible words.
            If you know some letters already, the LetterWise Wordle Solver can
            help you narrow the list quickly.
          </p>

          <div className="mt-8 rounded-3xl bg-violet-100 p-8">
            <h3 className="text-2xl font-black text-slate-900">
              Need help solving a puzzle?
            </h3>

            <p className="mt-3 text-slate-700">
              Use the Wordle Solver for green, yellow, and gray letters, or use
              Word Finder to search from the letters you have.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/wordle-solver"
                className="inline-block rounded-full bg-amber-300 px-7 py-3 font-black text-slate-950 hover:bg-amber-200"
              >
                Open Wordle Solver
              </a>

              <a
                href="/word-finder"
                className="inline-block rounded-full bg-white px-7 py-3 font-black text-violet-700 hover:bg-violet-50"
              >
                Open Word Finder
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
