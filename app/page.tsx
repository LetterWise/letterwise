import Link from "next/link";

export const metadata = {
  title: "Free Word Solver & Word Finder | LetterWise",
  description:
    "Find words from letters with LetterWise's free word solver, then explore Wordle help, searchable word lists, and a new daily word puzzle.",
  alternates: {
    canonical: "/",
  },
};

const primaryTools = [
  {
    href: "/word-finder",
    eyebrow: "Have a set of letters?",
    title: "Find words",
    description: "Enter your letters and see the words you can make.",
    action: "Open Word Finder",
  },
  {
    href: "/wordle-solver",
    eyebrow: "Stuck on today’s word?",
    title: "Solve a Wordle",
    description: "Use the letters you know to narrow the possibilities.",
    action: "Open Wordle Solver",
  },
  {
    href: "/daily-word-puzzle",
    eyebrow: "Ready for a quick game?",
    title: "Play today’s puzzle",
    description: "Guess three five-letter words at your own pace.",
    action: "Play Today",
  },
];

const popularLists = [
  { href: "/4-letter-words", label: "4 letter words" },
  { href: "/5-letter-words", label: "5 letter words" },
  { href: "/7-letter-words", label: "7 letter words" },
  { href: "/common-5-letter-words", label: "Common 5 letter words" },
  { href: "/5-letter-words-with-vowels", label: "Words with vowels" },
  { href: "/wordle-starter-words", label: "Wordle starter words" },
];

const featuredGuides = [
  {
    href: "/best-5-letter-starter-words-by-data",
    title: "The best five-letter starters, ranked",
    description: "An original comparison of 42 useful opening words.",
  },
  {
    href: "/most-common-letters-in-5-letter-words",
    title: "The most common letters in five-letter words",
    description: "See which letters appear most often and where they occur.",
  },
  {
    href: "/resources/best-word-game-dictionaries",
    title: "A practical guide to word-game dictionaries",
    description: "Choose the right dictionary for the game you play.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#24302d]">
      <section className="border-b border-violet-100 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">
            Free word tools
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight text-[#1f2926] sm:text-6xl">
            Simple help for word games and puzzles
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66706c]">
            Find words, solve Wordle clues, browse useful lists, or play a
            quick daily puzzle—without having to learn a complicated tool.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tools"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-violet-600 px-7 py-3 font-bold text-white transition hover:bg-violet-700"
            >
              Explore the tools
            </Link>
            <Link
              href="/daily-word-puzzle"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-violet-200 bg-white px-7 py-3 font-bold text-[#2c4d45] transition hover:border-violet-300 hover:bg-violet-50"
            >
              Play today’s puzzle
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">
            Start here
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2926] sm:text-4xl">
            What would you like to do?
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {primaryTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex min-h-64 flex-col rounded-2xl border border-violet-100 bg-white p-7 transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-sm"
            >
              <p className="text-sm font-semibold text-[#66706c]">
                {tool.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#1f2926]">
                {tool.title}
              </h3>
              <p className="mt-3 max-w-sm leading-7 text-[#66706c]">
                {tool.description}
              </p>
              <span className="mt-auto pt-8 font-bold text-violet-700 group-hover:text-violet-800">
                {tool.action} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-violet-100 bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1f2926]">
                Popular word lists
              </h2>
              <p className="mt-2 text-[#66706c]">
                Quick references for puzzles, games, and vocabulary.
              </p>
            </div>
            <Link href="/word-lists" className="font-bold text-violet-700 hover:text-violet-800">
              View all word lists <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-7 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {popularLists.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-violet-100 py-4 font-semibold text-[#34423e] hover:text-violet-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1f2926]">
              Useful guides
            </h2>
            <p className="mt-2 text-[#66706c]">
              Straightforward advice backed by real word data.
            </p>
          </div>
          <Link href="/word-guides" className="font-bold text-violet-700 hover:text-violet-800">
            Browse all guides <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <article key={guide.href} className="border-t border-violet-200 pt-5">
              <h3 className="text-xl font-bold leading-7 text-[#1f2926]">
                <Link href={guide.href} className="hover:text-violet-700">
                  {guide.title}
                </Link>
              </h3>
              <p className="mt-3 leading-7 text-[#66706c]">{guide.description}</p>
              <Link
                href={guide.href}
                className="mt-5 inline-flex font-bold text-violet-700 hover:text-violet-800"
              >
                Read guide <span className="ml-1" aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-violet-50 px-7 py-9 sm:px-10">
          <h2 className="text-2xl font-bold text-[#1f2926]">
            Made to be straightforward
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#66706c]">
            LetterWise brings its word tools, games, lists, and original guides
            together in one place. Choose the task you need, get a clear answer,
            and move on with your puzzle or practice.
          </p>
        </div>
      </section>
    </main>
  );
}
