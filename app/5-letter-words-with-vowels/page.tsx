export const metadata = {
  title: "5 Letter Words With Vowels",
  description:
    "Find useful 5 letter words with vowels for Wordle, spelling practice, and word games. Browse vowel-heavy words and use LetterWise tools.",
};

const vowelWords = [
  "adieu",
  "audio",
  "arise",
  "raise",
  "alone",
  "alien",
  "ideal",
  "media",
  "ocean",
  "opera",
  "equal",
  "quiet",
  "quite",
  "route",
  "house",
  "mouse",
  "about",
  "cause",
  "pause",
  "voice",
  "noise",
  "point",
  "ratio",
  "radio",
  "piano",
  "union",
  "usage",
  "argue",
  "value",
  "image",
  "alive",
  "aisle",
  "canoe",
];

const vowelGroups = [
  {
    title: "Words with many vowels",
    description: "Useful when you want to test several vowels early.",
    words: ["adieu", "audio", "arise", "raise", "ocean", "opera", "equal", "radio"],
  },
  {
    title: "Words with A and E",
    description: "Good for checking two very common vowels.",
    words: ["arise", "raise", "alone", "alien", "ideal", "image", "alive", "cause"],
  },
  {
    title: "Words with O and U",
    description: "Helpful when you suspect round vowel sounds.",
    words: ["audio", "route", "house", "mouse", "about", "argue", "value", "union"],
  },
];

export default function FiveLetterWordsWithVowelsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word List Guide
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            5 Letter Words With Vowels
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Browse useful five-letter words with vowels for Wordle, word games,
            spelling practice, and vocabulary building.
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
          <a href="/common-5-letter-words" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Common Words
          </a>
          <a href="/wordle-starter-words" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Starter Words
          </a>
        </div>

        <section className="mx-auto mt-14 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            Why vowel words are useful
          </h2>

          <p className="mt-4">
            Vowels are important in many five-letter words. In Wordle and other
            word games, guessing a word with several vowels can quickly tell you
            which vowel sounds are likely to appear in the answer.
          </p>

          <p className="mt-4">
            Vowel-heavy words are especially useful early in a puzzle. They may
            not always be the final answer, but they can give you information
            that makes your next guess much stronger.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-3xl font-black">5 Letter Words With Vowels</h2>
              <p className="mt-2 text-slate-600">
                Useful vowel words for word games and puzzle solving.
              </p>
            </div>

            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
              {vowelWords.length} words
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {vowelWords.map((word) => (
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
          <h2 className="text-3xl font-black">Vowel Word Groups</h2>
          <p className="mt-2 text-slate-600">
            Choose a group based on the kind of vowels you want to test.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {vowelGroups.map((group) => (
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
            Are vowel-heavy words always best for Wordle?
          </h2>

          <p className="mt-4">
            Not always. Vowels are useful, but you also need common consonants.
            A word like <strong>ADIEU</strong> tests many vowels, while a word
            like <strong>CRANE</strong> gives a more balanced mix of vowels and
            consonants.
          </p>

          <div className="mt-8 rounded-3xl bg-violet-100 p-8">
            <h3 className="text-2xl font-black text-slate-900">
              Use vowels with the Wordle Solver
            </h3>

            <p className="mt-3 text-slate-700">
              After you test vowels, enter your green, yellow, and gray letters
              into the Wordle Solver to narrow down possible answers.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/wordle-solver"
                className="inline-block rounded-full bg-amber-300 px-7 py-3 font-black text-slate-950 hover:bg-amber-200"
              >
                Open Wordle Solver
              </a>

              <a
                href="/5-letter-words"
                className="inline-block rounded-full bg-white px-7 py-3 font-black text-violet-700 hover:bg-violet-50"
              >
                Browse 5 Letter Words
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
