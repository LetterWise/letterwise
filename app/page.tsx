import ToolIcon from "@/components/ToolIcon";

const solverCards = [
  {
    href: "/word-finder",
    title: "Word Finder",
    description: "Find words from the letters you have.",
    icon: "finder",
  },
  {
    href: "/unscramble-letters",
    title: "Word Unscrambler",
    description: "Unscramble letters into possible words.",
    icon: "unscramble",
  },
  {
    href: "/wordle-solver",
    title: "Wordle Solver",
    description: "Narrow down possible Wordle answers.",
    icon: "wordle",
  },
];

const wordListCards = [
  { href: "/5-letter-words", title: "5 Letter Words" },
  { href: "/5-letter-words-starting-with-a", title: "5 Letter Words Starting With A" },
  { href: "/5-letter-words-containing-e", title: "5 Letter Words Containing E" },
  { href: "/5-letter-words-ending-in-ed", title: "5 Letter Words Ending In ED" },
];


const guideCards = [
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

const gameCards = [
  {
    href: "/daily-word-puzzle",
    title: "Daily Word Puzzle",
    description: "Guess the five-letter word in six tries.",
    icon: "daily",
  },
  {
    href: "/daily-word-puzzle/archive",
    title: "Puzzle Archive",
    description: "Replay previous daily word puzzles.",
    icon: "lists",
  },
];


const mainPathCards = [
  {
    href: "/word-finder",
    title: "Find Words",
    description: "Search letters, patterns, starts, endings, and word lengths.",
    icon: "finder",
    action: "Open Word Finder",
  },
  {
    href: "/word-lists",
    title: "Browse Word Lists",
    description: "Explore words by length, starting letters, endings, and more.",
    icon: "lists",
    action: "View Word Lists",
  },
  {
    href: "/daily-word-puzzle",
    title: "Play Daily Puzzle",
    description: "Try today’s five-letter word puzzle and keep your streak going.",
    icon: "daily",
    action: "Play Today",
  },
  {
    href: "/word-guides",
    title: "Read Word Guides",
    description: "Learn better word strategies for Wordle and word games.",
    icon: "guide",
    action: "Browse Guides",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-16 pt-14 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Word Finder
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Find words, unscramble letters, solve Wordle clues, and play a daily word puzzle.
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

            <div className="mt-3 grid gap-3 sm:grid-cols-4">
              <input
                name="starts"
                placeholder="Starts"
                className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-900 outline-none placeholder:text-slate-600"
              />
              <input
                name="ends"
                placeholder="Ends"
                className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-900 outline-none placeholder:text-slate-600"
              />
              <input
                name="contains"
                placeholder="Contains"
                className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-900 outline-none placeholder:text-slate-600"
              />
              <input
                name="length"
                placeholder="Length"
                className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-900 outline-none placeholder:text-slate-600"
              />
            </div>

            <button
              type="submit"
              className="mt-5 rounded-full bg-amber-300 px-14 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
            >
              Search
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

        
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-violet-600">
            Start Here
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            Choose what you want to do
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            LetterWise is built around four simple areas: finding words,
            browsing word lists, playing the daily puzzle, and learning word
            game strategies.
          </p>
        </div>

        <div className="mt-8 grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mainPathCards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="group rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md"
            >
              <div className="mb-5">
                <ToolIcon
                  type={
                    card.icon as
                      | "finder"
                      | "lists"
                      | "daily"
                      | "guide"
                  }
                />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                {card.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {card.description}
              </p>

              <span className="mt-5 inline-flex rounded-full bg-violet-100 px-5 py-3 text-sm font-black text-violet-700 group-hover:bg-amber-300 group-hover:text-slate-950">
                {card.action}
              </span>
            </a>
          ))}
        </div>
      </section>

<section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black">Popular Word Solvers</h2>
              <p className="mt-2 text-slate-600">
                Quick tools to help with word games and puzzles.
              </p>
            </div>
            <a href="/tools" className="hidden text-3xl text-slate-600 hover:text-violet-600 sm:block">
              →
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {solverCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md"
              >
                <div className="mb-5">
                  <ToolIcon type={card.icon as "finder" | "unscramble" | "wordle"} />
                </div>
                <h3 className="text-2xl font-black">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black">5 Letter Words</h2>
              <p className="mt-2 text-slate-600">
                Useful word lists built for Wordle and puzzle solving.
              </p>
            </div>
            <a href="/word-lists" className="hidden text-3xl text-slate-600 hover:text-violet-600 sm:block">
              →
            </a>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {wordListCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="rounded-2xl border border-violet-100 bg-white px-5 py-4 text-lg font-bold shadow-sm hover:border-violet-300 hover:bg-violet-50"
              >
                {card.title}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div>
            <h2 className="text-3xl font-black">Word Games</h2>
            <p className="mt-2 text-slate-600">
              Simple daily word games made by LetterWise.
            </p>
          </div>

          <div className="mt-6 grid min-w-0 gap-4 md:grid-cols-2">
            {gameCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="relative overflow-hidden rounded-3xl bg-violet-100 p-7 transition hover:-translate-y-0.5 hover:bg-violet-200 hover:shadow-md"
              >
                <div className="mb-5">
                  <ToolIcon type={card.icon as "daily" | "lists"} />
                </div>
                <h3 className="text-2xl font-black">{card.title}</h3>
                <p className="mt-2 text-slate-700">{card.description}</p>
                <span className="mt-6 inline-block rounded-full bg-amber-300 px-6 py-3 font-black text-slate-950">
                  Play
                </span>
              </a>
            ))}
          </div>
        </section>


        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black">Word Guides</h2>
              <p className="mt-2 text-slate-600">
                Helpful guides for Wordle, word games, and using LetterWise tools.
              </p>
            </div>
          </div>

          <div className="mt-6 grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guideCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md"
              >
                <div className="mb-5">
                  <ToolIcon type={card.icon as "wordle" | "lists" | "vowels" | "repeat" | "guide"} />
                </div>
                <h3 className="text-2xl font-black">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            What is LetterWise?
          </h2>

          <p className="mt-4">
            LetterWise is a simple word helper for finding words, solving letter puzzles,
            checking five-letter word patterns, and playing daily word games. It is designed
            to be fast, clean, and easy to use.
          </p>

          <h2 className="mt-10 text-3xl font-black text-slate-900">
            How to use the Word Finder
          </h2>

          <p className="mt-4">
            Enter your letters, add optional filters like starting letters, ending letters,
            contained letters, or word length, then search for possible words.
          </p>
        </section>
      </section>
    </main>
  );
}
