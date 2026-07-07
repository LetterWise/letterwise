const wordLengthPages = [
  { href: "/3-letter-words", label: "3 Letter Words" },
  { href: "/4-letter-words", label: "4 Letter Words" },
  { href: "/5-letter-words", label: "5 Letter Words" },
  { href: "/6-letter-words", label: "6 Letter Words" },
  { href: "/7-letter-words", label: "7 Letter Words" },
];

const startingLetterPages = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => ({
  href: `/5-letter-words-starting-with-${letter}`,
  label: `5 Letter Words Starting With ${letter.toUpperCase()}`,
}));

const endingPages = [
  { href: "/5-letter-words-ending-in-ed", label: "5 Letter Words Ending In ED" },
  { href: "/5-letter-words-ending-in-er", label: "5 Letter Words Ending In ER" },
  { href: "/5-letter-words-ending-in-ly", label: "5 Letter Words Ending In LY" },
  { href: "/5-letter-words-ending-in-ing", label: "5 Letter Words Ending In ING" },
  { href: "/5-letter-words-ending-in-al", label: "5 Letter Words Ending In AL" },
  { href: "/5-letter-words-ending-in-el", label: "5 Letter Words Ending In EL" },
  { href: "/5-letter-words-ending-in-le", label: "5 Letter Words Ending In LE" },
  { href: "/5-letter-words-ending-in-se", label: "5 Letter Words Ending In SE" },
];

const containingPages = [
  { href: "/5-letter-words-containing-a", label: "5 Letter Words Containing A" },
  { href: "/5-letter-words-containing-e", label: "5 Letter Words Containing E" },
  { href: "/5-letter-words-containing-i", label: "5 Letter Words Containing I" },
  { href: "/5-letter-words-containing-o", label: "5 Letter Words Containing O" },
  { href: "/5-letter-words-containing-u", label: "5 Letter Words Containing U" },
  { href: "/5-letter-words-containing-ai", label: "5 Letter Words Containing AI" },
  { href: "/5-letter-words-containing-ou", label: "5 Letter Words Containing OU" },
  { href: "/5-letter-words-containing-st", label: "5 Letter Words Containing ST" },
  { href: "/5-letter-words-containing-ch", label: "5 Letter Words Containing CH" },
];

export const metadata = {
  title: "Word Lists | LetterWise",
  description:
    "Browse LetterWise word lists by word length and starting letter for word games, Wordle, spelling practice, and puzzles.",
};

export default function WordListsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Word lists
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Word Lists
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Browse useful word lists by length and starting letter. These lists
            can help with Wordle, word games, crossword clues, spelling
            practice, vocabulary building, and puzzle solving.
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Words by length</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {wordLengthPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5 hover:bg-slate-800"
              >
                <h3 className="text-xl font-semibold">{page.label}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Browse words by number of letters.
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">
            5 letter words by starting letter
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Choose a starting letter to browse focused five-letter word lists.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {startingLetterPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-4 hover:bg-slate-800"
              >
                <h3 className="font-semibold">{page.label}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">
            5 letter words by ending
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Browse five-letter words by common endings.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {endingPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-4 hover:bg-slate-800"
              >
                <h3 className="font-semibold">{page.label}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">
            5 letter words by contained letter
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Browse five-letter words that contain common letters.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {containingPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-4 hover:bg-slate-800"
              >
                <h3 className="font-semibold">{page.label}</h3>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
