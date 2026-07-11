export const metadata = {
  title: "Best Wordle Starter Words | LetterWise",
  description:
    "Find useful Wordle starter words with strong vowels, common consonants, and no repeated letters. Try examples and use the LetterWise Wordle Solver.",
};

const starterWords = [
  {
    word: "CRANE",
    reason: "A strong mix of common consonants and vowels. Good for finding early clues.",
  },
  {
    word: "SLATE",
    reason: "Uses common letters and gives a balanced opening guess.",
  },
  {
    word: "TRACE",
    reason: "Good vowel coverage with useful consonants.",
  },
  {
    word: "ROAST",
    reason: "Tests two vowels and several common consonants quickly.",
  },
  {
    word: "RAISE",
    reason: "A vowel-heavy starter that can reveal useful yellow or green letters.",
  },
  {
    word: "ARISE",
    reason: "Another strong vowel-focused opening word.",
  },
  {
    word: "STARE",
    reason: "Uses common letters that appear in many five-letter words.",
  },
  {
    word: "CARES",
    reason: "Simple, common letters with no repeats.",
  },
  {
    word: "PLANT",
    reason: "Useful when you want to test common consonants early.",
  },
  {
    word: "POINT",
    reason: "A good option for testing O and I with common consonants.",
  },
];

const secondGuessPairs = [
  {
    first: "CRANE",
    second: "SLOTH",
    note: "This pair tests many different common letters without repeating too much.",
  },
  {
    first: "RAISE",
    second: "COUNT",
    note: "A useful combination for checking several vowels and consonants.",
  },
  {
    first: "SLATE",
    second: "ROUND",
    note: "Good if your first guess gives very little information.",
  },
];

export default function WordleStarterWordsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Wordle Guide
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Best Wordle Starter Words
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Start Wordle with useful five-letter words that test common letters,
            strong vowels, and helpful consonants.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-5 shadow-xl shadow-violet-950/20">
            <form action="/wordle-solver">
              <div className="rounded-2xl border-2 border-slate-900 bg-white px-5 py-4 text-left">
                <label htmlFor="pattern" className="sr-only">
                  Enter Wordle pattern
                </label>

                <input
                  id="pattern"
                  name="pattern"
                  placeholder="Try the Wordle Solver after your first guess"
                  className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <a
                href="/wordle-solver"
                className="mt-5 inline-block rounded-full bg-amber-300 px-12 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
              >
                Open Wordle Solver
              </a>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-3 sm:grid-cols-5">
          <a href="/word-finder" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Finder
          </a>
          <a href="/wordle-solver" className="rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700">
            Wordle Solver
          </a>
          <a href="/5-letter-words" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            5 Letter Words
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
            What makes a good Wordle starter word?
          </h2>

          <p className="mt-4">
            A good Wordle starter word usually has common letters, more than one
            vowel, and no repeated letters. The goal is not always to guess the
            answer immediately. The goal is to collect useful information for
            your next guess.
          </p>

          <p className="mt-4">
            Words like <strong>CRANE</strong>, <strong>SLATE</strong>, and{" "}
            <strong>TRACE</strong> are useful because they test letters that
            appear often in English five-letter words. After your first guess,
            use the green, yellow, and gray letters to narrow down the answer.
          </p>
        </section>

        <section className="mt-14">
          <div>
            <h2 className="text-3xl font-black">Useful Wordle Starter Words</h2>
            <p className="mt-2 text-slate-600">
              Try these opening words when you want a balanced first guess.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {starterWords.map((item) => (
              <a
                key={item.word}
                href={`/word-finder?letters=${item.word.toLowerCase()}`}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm hover:border-violet-300 hover:bg-violet-50"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-3xl font-black tracking-wide">
                    {item.word}
                  </h3>

                  <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
                    Starter
                  </span>
                </div>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.reason}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            Should your first Wordle guess use many vowels?
          </h2>

          <p className="mt-4">
            Vowels are helpful, but a starter word with only vowels is not always
            the best choice. A balanced word with common consonants can give
            better information. For example, <strong>CRANE</strong> tests A and
            E, but it also checks C, R, and N.
          </p>

          <h2 className="mt-10 text-3xl font-black text-slate-900">
            Should you use the same starter word every day?
          </h2>

          <p className="mt-4">
            Using the same starter word can make Wordle feel consistent. It also
            helps you learn how to respond to common clue patterns. But changing
            your starter word can keep the game more interesting and may help
            you practice different strategies.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-violet-100 bg-white p-7 shadow-sm">
          <h2 className="text-3xl font-black">
            Good first and second guess pairs
          </h2>

          <p className="mt-2 text-slate-600">
            If your first guess gives few clues, a strong second guess can test
            a new group of letters.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {secondGuessPairs.map((pair) => (
              <div
                key={`${pair.first}-${pair.second}`}
                className="rounded-2xl bg-violet-50 p-5"
              >
                <p className="text-sm font-black uppercase tracking-wide text-violet-700">
                  Try this pair
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {pair.first} → {pair.second}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pair.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            What to do after your first guess
          </h2>

          <p className="mt-4">
            After your first guess, use the colors carefully. Green letters are
            correct and should stay in the same position. Yellow letters are in
            the word but need a different position. Gray letters should usually
            be removed from your next guesses.
          </p>

          <div className="mt-8 rounded-3xl bg-violet-100 p-8">
            <h3 className="text-2xl font-black text-slate-900">
              Use the LetterWise Wordle Solver
            </h3>

            <p className="mt-3 text-slate-700">
              Add your green, yellow, and gray letters to narrow down possible
              answers quickly.
            </p>

            <a
              href="/wordle-solver"
              className="mt-6 inline-block rounded-full bg-amber-300 px-7 py-3 font-black text-slate-950 hover:bg-amber-200"
            >
              Open Wordle Solver
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
