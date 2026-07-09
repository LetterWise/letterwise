const tools = [
  {
    href: "/word-finder",
    title: "Word Finder",
    description: "Find words from the letters you have. Add filters for starting letters, ending letters, contained letters, and word length.",
    label: "Find Words",
  },
  {
    href: "/unscramble-letters",
    title: "Unscramble Letters",
    description: "Turn mixed-up letters into possible words for word games, puzzles, spelling practice, and classroom activities.",
    label: "Unscramble",
  },
  {
    href: "/wordle-solver",
    title: "Wordle Solver",
    description: "Use green, yellow, and gray letters to narrow down possible five-letter Wordle answers.",
    label: "Solve Wordle",
  },
];

const quickLinks = [
  { href: "/word-lists", title: "Word Lists" },
  { href: "/5-letter-words", title: "5 Letter Words" },
  { href: "/daily-word-puzzle", title: "Daily Game" },
  { href: "/daily-word-puzzle/archive", title: "Puzzle Archive" },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word Solvers
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Word Solvers
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Simple tools for finding words, unscrambling letters, and solving
            Wordle-style word puzzles.
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
                placeholder="Enter letters, like crane or stone"
                className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-600"
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
          <a href="/word-lists" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Lists
          </a>
          <a href="/daily-word-puzzle" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Daily Game
          </a>
          <a href="/tools" className="rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700">
            Word Solvers
          </a>
          <a href="/wordle-solver" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Wordle
          </a>
          <a href="/faq" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Help
          </a>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-black">Choose a Word Solver</h2>
          <p className="mt-2 text-slate-600">
            Start with the tool that matches what you need.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm hover:border-violet-300 hover:bg-violet-50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-xl text-violet-700">
                  ✦
                </div>

                <h3 className="text-2xl font-black">{tool.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {tool.description}
                </p>

                <span className="mt-6 inline-block rounded-full bg-amber-300 px-6 py-3 font-black text-slate-950">
                  {tool.label}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black">Popular Shortcuts</h2>
          <p className="mt-2 text-slate-600">
            Quick links to useful word pages and games.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-violet-100 bg-white px-5 py-4 text-lg font-black shadow-sm hover:border-violet-300 hover:bg-violet-50"
              >
                {link.title}
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            What are word solvers?
          </h2>

          <p className="mt-4">
            Word solvers help you find possible words from letters and clues.
            They are useful for word games, spelling practice, classroom word
            work, vocabulary building, and puzzle solving.
          </p>
        </section>
      </section>
    </main>
  );
}
