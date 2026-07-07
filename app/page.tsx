const tools = [
  {
    href: "/word-finder",
    title: "Word Finder",
    description:
      "Enter letters and find possible words for games, puzzles, and spelling practice.",
  },
  {
    href: "/unscramble-letters",
    title: "Unscramble Letters",
    description:
      "Rearrange mixed letters to discover words you can make.",
  },
  {
    href: "/wordle-solver",
    title: "Wordle Solver",
    description:
      "Use known letters, included letters, and excluded letters to narrow down Wordle-style answers.",
  },
  {
    href: "/daily-word-puzzle",
    title: "Daily Word Puzzle",
    description:
      "Play a daily five-letter word challenge with easy, medium, and hard levels.",
  },
];

const wordLists = [
  {
    href: "/3-letter-words",
    title: "3 Letter Words",
    description: "Browse useful three-letter words for quick word games.",
  },
  {
    href: "/4-letter-words",
    title: "4 Letter Words",
    description: "Browse useful four-letter words for word games and spelling.",
  },
  {
    href: "/5-letter-words",
    title: "5 Letter Words",
    description: "Browse five-letter words for Wordle and other word games.",
  },
  {
    href: "/6-letter-words",
    title: "6 Letter Words",
    description: "Browse six-letter words for puzzles, vocabulary, and games.",
  },
  {
    href: "/7-letter-words",
    title: "7 Letter Words",
    description: "Browse seven-letter words for longer puzzles and vocabulary.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Word tools, word lists, and daily puzzles
            </p>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
              Find words faster with{" "}
              <span className="text-sky-400">LetterWise</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Simple word tools for finding words, unscrambling letters,
              solving Wordle-style clues, browsing word lists, and playing
              daily word puzzles.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/daily-word-puzzle"
                className="rounded-2xl bg-sky-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-950/40 hover:bg-sky-400"
              >
                Play Daily Puzzle
              </a>

              <a
                href="/tools"
                className="rounded-2xl border border-slate-700 bg-slate-900/80 px-7 py-4 text-sm font-bold text-slate-200 hover:bg-slate-800"
              >
                Explore Tools
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-center">
              <p className="text-3xl font-black text-sky-400">A-Z</p>
              <p className="mt-2 text-sm text-slate-400">
                Starting-letter word lists
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-center">
              <p className="text-3xl font-black text-sky-400">3-7</p>
              <p className="mt-2 text-sm text-slate-400">
                Word length pages
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-center">
              <p className="text-3xl font-black text-sky-400">Daily</p>
              <p className="mt-2 text-sm text-slate-400">
                Puzzle with stats
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">
                Main tools
              </p>
              <h2 className="mt-2 text-3xl font-bold">Word tools</h2>
            </div>

            <a href="/tools" className="text-sm text-slate-400 hover:text-white">
              View all tools →
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
              >
                <h3 className="text-2xl font-semibold group-hover:text-sky-400">
                  {tool.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {tool.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">
                Browse words
              </p>
              <h2 className="mt-2 text-3xl font-bold">Word lists</h2>
            </div>

            <a
              href="/word-lists"
              className="text-sm text-slate-400 hover:text-white"
            >
              View all word lists →
            </a>
          </div>

          <p className="mt-3 max-w-3xl leading-7 text-slate-400">
            Browse words by length, starting letter, ending, or contained
            letters for games, puzzles, spelling practice, and vocabulary
            building.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {wordLists.map((list) => (
              <a
                key={list.href}
                href={list.href}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:bg-slate-800"
              >
                <h3 className="text-xl font-semibold">{list.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {list.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">
                Daily challenge
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Try the Daily Word Puzzle
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                Choose easy, medium, or hard and try to solve the five-letter
                word in six guesses. Your stats are saved in your browser.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/daily-word-puzzle"
                  className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
                >
                  Play today&apos;s puzzle
                </a>

                <a
                  href="/daily-word-puzzle/how-to-play"
                  className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  How to play
                </a>

                <a
                  href="/daily-word-puzzle/archive"
                  className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Puzzle archive
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-5">
              <div className="grid grid-cols-5 gap-2">
                {["W", "O", "R", "D", "S"].map((letter) => (
                  <div
                    key={letter}
                    className="flex aspect-square items-center justify-center rounded-lg border border-emerald-500 bg-emerald-600 text-xl font-black"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-5 gap-2">
                {["P", "L", "A", "Y", "S"].map((letter, index) => (
                  <div
                    key={letter + index}
                    className={`flex aspect-square items-center justify-center rounded-lg border text-xl font-black ${
                      index < 2
                        ? "border-yellow-500 bg-yellow-600"
                        : "border-slate-700 bg-slate-800"
                    }`}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
