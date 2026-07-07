import { words } from "@/data/words";
import { getWordsByLength } from "@/lib/wordLists";

const fiveLetterWords = getWordsByLength(words, 5).slice(0, 250);

const startingLetterPages = [
  { href: "/5-letter-words-starting-with-a", label: "5 Letter Words Starting With A" },
  { href: "/5-letter-words-starting-with-b", label: "5 Letter Words Starting With B" },
  { href: "/5-letter-words-starting-with-c", label: "5 Letter Words Starting With C" },
  { href: "/5-letter-words-starting-with-d", label: "5 Letter Words Starting With D" },
  { href: "/5-letter-words-starting-with-e", label: "5 Letter Words Starting With E" },
  { href: "/5-letter-words-starting-with-f", label: "5 Letter Words Starting With F" },
  { href: "/5-letter-words-starting-with-g", label: "5 Letter Words Starting With G" },
  { href: "/5-letter-words-starting-with-h", label: "5 Letter Words Starting With H" },
  { href: "/5-letter-words-starting-with-i", label: "5 Letter Words Starting With I" },
  { href: "/5-letter-words-starting-with-j", label: "5 Letter Words Starting With J" },
  { href: "/5-letter-words-starting-with-k", label: "5 Letter Words Starting With K" },
  { href: "/5-letter-words-starting-with-l", label: "5 Letter Words Starting With L" },
  { href: "/5-letter-words-starting-with-m", label: "5 Letter Words Starting With M" },
  { href: "/5-letter-words-starting-with-n", label: "5 Letter Words Starting With N" },
  { href: "/5-letter-words-starting-with-o", label: "5 Letter Words Starting With O" },
  { href: "/5-letter-words-starting-with-p", label: "5 Letter Words Starting With P" },
  { href: "/5-letter-words-starting-with-q", label: "5 Letter Words Starting With Q" },
  { href: "/5-letter-words-starting-with-r", label: "5 Letter Words Starting With R" },
  { href: "/5-letter-words-starting-with-s", label: "5 Letter Words Starting With S" },
  { href: "/5-letter-words-starting-with-t", label: "5 Letter Words Starting With T" },
  { href: "/5-letter-words-starting-with-u", label: "5 Letter Words Starting With U" },
  { href: "/5-letter-words-starting-with-v", label: "5 Letter Words Starting With V" },
  { href: "/5-letter-words-starting-with-w", label: "5 Letter Words Starting With W" },
  { href: "/5-letter-words-starting-with-x", label: "5 Letter Words Starting With X" },
  { href: "/5-letter-words-starting-with-y", label: "5 Letter Words Starting With Y" },
  { href: "/5-letter-words-starting-with-z", label: "5 Letter Words Starting With Z" },
];

export const metadata = {
  title: "5 Letter Words | LetterWise",
  description:
    "Browse useful 5 letter words for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Word lists
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            5 Letter Words
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Browse useful 5 letter words for Wordle, crossword clues, spelling
            practice, vocabulary building, and other word games.
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">
            5 letter words by starting letter
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Choose a starting letter to browse more focused word lists.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {startingLetterPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5 hover:bg-slate-800"
              >
                <h3 className="text-lg font-semibold">{page.label}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Browse five-letter words for Wordle-style games and spelling
                  practice.
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Popular 5 letter words</h2>

          <p className="mt-3 text-sm text-slate-400">
            Here are some common 5 letter words from the LetterWise word list.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {fiveLetterWords.map((word) => (
              <a
                key={word}
                href={`/word-finder?letters=${word}`}
                className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide hover:bg-slate-800"
              >
                {word}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/wordle-solver"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Use the Wordle Solver</h2>
            <p className="mt-2 text-sm text-slate-400">
              Enter known letters, included letters, and excluded letters to
              narrow down possible answers.
            </p>
          </a>

          <a
            href="/unscramble-letters"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">Unscramble Letters</h2>
            <p className="mt-2 text-sm text-slate-400">
              Rearrange letters to find possible words for games and puzzles.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
