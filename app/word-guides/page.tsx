import ToolIcon from "@/components/ToolIcon";

export const metadata = {
  title: "Word Guides",
  description:
    "Browse LetterWise word guides for Wordle, word games, five-letter words, vowels, starter words, and word finder tips.",
};

const guides = [
  {
    href: "/best-two-word-starts-by-data",
    title: "Best Two Word Starts by Data",
    description:
      "Compare familiar two-word openings across 12,578 five-letter entries.",
    icon: "guide",
  },
  {
    href: "/best-5-letter-starter-words-by-data",
    title: "Best 5 Letter Starter Words by Data",
    description:
      "See how 42 familiar starters rank across 12,578 five-letter entries.",
    icon: "guide",
  },
  {
    href: "/most-common-letters-in-5-letter-words",
    title: "Most Common Letters in 5 Letter Words",
    description: "See original LetterWise data on letter frequency and position.",
    icon: "guide",
  },
  {
    href: "/wordle-starter-words",
    title: "Best Wordle Starter Words",
    description: "Useful first guesses for Wordle and five-letter word games.",
    icon: "wordle",
  },
  {
    href: "/common-5-letter-words",
    title: "Common 5 Letter Words",
    description: "Everyday five-letter words for games, spelling, and vocabulary.",
    icon: "lists",
  },
  {
    href: "/5-letter-words-with-vowels",
    title: "5 Letter Words With Vowels",
    description: "Vowel-heavy words for Wordle and word puzzles.",
    icon: "vowels",
  },
  {
    href: "/5-letter-words-no-repeats",
    title: "5 Letter Words No Repeats",
    description: "Five-letter words with no repeated letters.",
    icon: "repeat",
  },
  {
    href: "/how-to-use-word-finder",
    title: "How to Use Word Finder",
    description: "Learn how to search letters and use filters.",
    icon: "guide",
  },
  {
    href: "/best-words-for-word-games",
    title: "Best Words for Word Games",
    description: "Useful words and tips for word games and puzzles.",
    icon: "guide",
  },
];

export default function WordGuidesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word Guides
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Word Guides
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Helpful guides for Wordle, word games, five-letter words, spelling
            practice, and using LetterWise tools.
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
          <a href="/word-lists" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Lists
          </a>
          <a href="/word-guides" className="rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700">
            Word Guides
          </a>
          <a href="/daily-word-puzzle" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Daily Game
          </a>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-black">Browse Word Guides</h2>
          <p className="mt-2 text-slate-600">
            Choose a guide to learn word game strategies, browse useful word
            lists, or get more from LetterWise tools.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md"
              >
                <div className="mb-5">
                  <ToolIcon
                    type={
                      guide.icon as
                        | "wordle"
                        | "lists"
                        | "vowels"
                        | "repeat"
                        | "guide"
                    }
                  />
                </div>

                <h3 className="text-2xl font-black">{guide.title}</h3>
                <p className="mt-2 text-slate-600">{guide.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            Why use word guides?
          </h2>

          <p className="mt-4">
            Word guides help you understand how to choose better guesses, use
            word patterns, find useful five-letter words, and get more from word
            tools like Word Finder, Unscrambler, and Wordle Solver.
          </p>
        </section>
      </section>
    </main>
  );
}
