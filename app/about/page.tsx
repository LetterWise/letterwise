const values = [
  {
    title: "Simple",
    description: "LetterWise is designed to be quick, clean, and easy to understand.",
  },
  {
    title: "Useful",
    description: "The tools help with word games, spelling, vocabulary, and puzzle solving.",
  },
  {
    title: "Focused",
    description: "The site keeps the main action clear: enter letters and find words.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            About LetterWise
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            A cleaner way to find words
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            LetterWise is a simple word helper for finding words, solving word
            puzzles, and playing daily word games.
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
                className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-600"
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
          <a href="/word-lists" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Lists
          </a>
          <a href="/daily-word-puzzle" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Daily Game
          </a>
          <a href="/tools" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Solvers
          </a>
          <a href="/wordle-solver" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Wordle
          </a>
          <a href="/about" className="rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700">
            About
          </a>
        </div>

        <section className="mx-auto mt-14 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            What is LetterWise?
          </h2>

          <p className="mt-4">
            LetterWise is a website for people who want a faster and simpler way
            to work with words. You can find words from letters, unscramble mixed
            letters, solve Wordle clues, browse word lists, and play a daily word
            puzzle.
          </p>

          <p className="mt-4">
            The goal is to keep everything easy to use. The most important tools
            are visible quickly, the pages are clean, and the site does not try
            to make simple word tasks feel complicated.
          </p>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-xl text-violet-700">
                ✦
              </div>

              <h3 className="text-2xl font-black">{value.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            Who is it for?
          </h2>

          <p className="mt-4">
            LetterWise can be used by word game players, teachers, students,
            parents, puzzle fans, and anyone who wants help finding words from
            letters or patterns.
          </p>

          <div className="mt-8 rounded-3xl bg-violet-100 p-8">
            <h3 className="text-2xl font-black text-slate-900">
              Start with the Word Finder
            </h3>

            <p className="mt-3 text-slate-700">
              Enter letters, add optional filters, and quickly find possible
              words.
            </p>

            <a
              href="/word-finder"
              className="mt-6 inline-block rounded-full bg-amber-300 px-7 py-3 font-black text-slate-950 hover:bg-amber-200"
            >
              Open Word Finder
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
