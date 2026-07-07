const tools = [
  {
    href: "/word-finder",
    title: "Word Finder",
    description:
      "Enter letters and find possible words for word games, puzzles, spelling practice, and vocabulary building.",
  },
  {
    href: "/unscramble-letters",
    title: "Unscramble Letters",
    description:
      "Rearrange mixed letters and discover words that can be made from them.",
  },
  {
    href: "/wordle-solver",
    title: "Wordle Solver",
    description:
      "Use known letters, included letters, and excluded letters to narrow down possible Wordle-style answers.",
  },
  {
    href: "/daily-word-puzzle",
    title: "Daily Word Puzzle",
    description:
      "Play a daily five-letter word challenge with easy, medium, and hard levels.",
  },
  {
    href: "/word-lists",
    title: "Word Lists",
    description:
      "Browse word lists by length and starting letter for games, puzzles, and spelling practice.",
  },
];

export const metadata = {
  title: "Word Tools | LetterWise",
  description:
    "Explore LetterWise word tools including Word Finder, Unscramble Letters, Wordle Solver, Daily Word Puzzle, and word lists.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Word tools
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            LetterWise Word Tools
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore simple word tools for finding words, unscrambling letters,
            solving Wordle-style clues, browsing word lists, and playing daily
            word puzzles.
          </p>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
            >
              <h2 className="text-2xl font-semibold">{tool.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">
                {tool.description}
              </p>
            </a>
          ))}
        </section>
      </section>
    </main>
  );
}
