import Link from "next/link";

export const metadata = {
  title: "Free Word Tools and Games",
  description:
    "Explore LetterWise word finders, solvers, word lists, daily puzzles, and free word games.",
  alternates: {
    canonical: "/tools",
  },
};

const tools = [
  {
    href: "/word-finder",
    title: "Word Finder",
    description: "Make words from the letters you already have.",
    action: "Find words",
  },
  {
    href: "/unscramble-letters",
    title: "Unscramble Letters",
    description: "Turn a mixed-up word or letter rack into possible words.",
    action: "Unscramble letters",
  },
  {
    href: "/wordle-solver",
    title: "Wordle Solver",
    description: "Use green, yellow, and gray letters to narrow the answer.",
    action: "Solve a Wordle",
  },
];

const otherDestinations = [
  { href: "/word-lists", label: "Browse all word lists" },
  { href: "/daily-word-puzzle", label: "Play today’s word puzzle" },
  { href: "/letter-links", label: "Play Letter Links" },
  { href: "/anagram-rush", label: "Play Anagram Rush" },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#24302d]">
      <section className="border-b border-violet-100 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">
            Tools
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#1f2926] sm:text-5xl">
            Choose the help you need
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#66706c]">
            Each LetterWise tool does one clear job. Pick the one that matches
            your puzzle and start there.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex min-h-60 flex-col rounded-2xl border border-violet-100 bg-white p-7 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-sm"
            >
              <h2 className="text-2xl font-bold text-[#1f2926]">{tool.title}</h2>
              <p className="mt-3 leading-7 text-[#66706c]">{tool.description}</p>
              <span className="mt-auto pt-8 font-bold text-violet-700 group-hover:text-violet-800">
                {tool.action} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 border-t border-violet-100 pt-10">
          <h2 className="text-2xl font-bold text-[#1f2926]">Or explore something else</h2>
          <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
            {otherDestinations.map((destination) => (
              <Link
                key={destination.href}
                href={destination.href}
                className="border-b border-violet-100 py-4 font-semibold text-[#34423e] hover:text-violet-700"
              >
                {destination.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
