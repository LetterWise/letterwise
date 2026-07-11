export const metadata = {
  title: "5 Letter Words With No Repeated Letters | LetterWise",
  description:
    "Browse useful 5 letter words with no repeated letters for Wordle, word games, spelling practice, and puzzle solving.",
};

const noRepeatWords = [
  "crane",
  "slate",
  "trace",
  "stare",
  "plant",
  "point",
  "round",
  "light",
  "sound",
  "brick",
  "flame",
  "proud",
  "chair",
  "dream",
  "ghost",
  "world",
  "quick",
  "brown",
  "climb",
  "fresh",
  "grape",
  "heart",
  "knife",
  "large",
  "march",
  "north",
  "paint",
  "quiet",
  "river",
  "smile",
  "train",
  "under",
  "voice",
  "water",
  "zebra",
];

const groups = [
  {
    title: "Good Wordle starters",
    description: "Balanced words with common vowels and consonants.",
    words: ["crane", "slate", "trace", "stare", "plant", "point", "round", "light"],
  },
  {
    title: "Strong consonant words",
    description: "Useful when you want to test common consonants.",
    words: ["brick", "climb", "fresh", "ghost", "march", "north", "train", "world"],
  },
  {
    title: "Vowel and consonant balance",
    description: "Words that test vowels without repeating letters.",
    words: ["chair", "dream", "grape", "heart", "quiet", "river", "smile", "voice"],
  },
];

export default function FiveLetterWordsNoRepeatsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word List Guide
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            5 Letter Words With No Repeated Letters
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Browse useful five-letter words with no repeated letters for Wordle,
            word games, spelling practice, and puzzle solving.
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
          <a href="/5-letter-words-with-vowels" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Vowel Words
          </a>
          <a href="/wordle-starter-words" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Starter Words
          </a>
        </div>

        <section className="mx-auto mt-14 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            Why no-repeat words are useful
          </h2>

          <p className="mt-4">
            Words with no repeated letters are useful in Wordle because they test
            more different letters in one guess. A word like <strong>CRANE</strong>{" "}
            checks five different letters, while a word with repeated letters
            gives you less information.
          </p>

          <p className="mt-4">
            No-repeat words are especially useful for your first or second guess.
            They help you quickly discover which letters are present, missing, or
            in the correct position.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-3xl font-black">
                5 Letter Words With No Repeated Letters
              </h2>
              <p className="mt-2 text-slate-600">
                Useful words that use five different letters.
              </p>
            </div>

            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
              {noRepeatWords.length} words
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {noRepeatWords.map((word) => (
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
          <h2 className="text-3xl font-black">No-Repeat Word Groups</h2>
          <p className="mt-2 text-slate-600">
            Choose a group based on the kind of letters you want to test.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {groups.map((group) => (
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

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            Are words with repeated letters ever useful?
          </h2>

          <p className="mt-4">
            Yes. Repeated letters can appear in real Wordle answers, so you
            should not ignore them completely. But early in the game, no-repeat
            words usually give more information because they test more unique
            letters.
          </p>

          <div className="mt-8 rounded-3xl bg-violet-100 p-8">
            <h3 className="text-2xl font-black text-slate-900">
              Use these words with the Wordle Solver
            </h3>

            <p className="mt-3 text-slate-700">
              After trying a no-repeat word, enter your green, yellow, and gray
              letters into the Wordle Solver to find better next guesses.
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
