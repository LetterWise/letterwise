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
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Word tools and daily puzzles
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            LetterWise
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Simple word tools for finding words, unscrambling letters, solving
            Wordle-style clues, browsing word lists, and playing daily word
            puzzles.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">Word tools</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
              >
                <h3 className="text-2xl font-semibold">{tool.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {tool.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">Word lists</h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-400">
            Browse words by length or starting letter for games, puzzles,
            spelling practice, and vocabulary building.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {wordLists.map((list) => (
              <a
                key={list.href}
                href={list.href}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
              >
                <h3 className="text-2xl font-semibold">{list.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {list.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-3xl font-bold">Try the Daily Word Puzzle</h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Choose easy, medium, or hard and try to solve the five-letter word
            in six guesses. Your stats are saved in your browser.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/daily-word-puzzle"
              className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
            >
              Play today&apos;s puzzle
            </a>

            <a
              href="/daily-word-puzzle/archive"
              className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              View puzzle archive
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
