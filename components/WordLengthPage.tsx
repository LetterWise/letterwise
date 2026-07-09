import { words } from "@/data/words";
import WordListBrowser from "./WordListBrowser";

type WordLengthPageProps = {
  length: number;
};

const lengthLinks = [
  { href: "/3-letter-words", title: "3 Letter Words" },
  { href: "/4-letter-words", title: "4 Letter Words" },
  { href: "/5-letter-words", title: "5 Letter Words" },
  { href: "/6-letter-words", title: "6 Letter Words" },
  { href: "/7-letter-words", title: "7 Letter Words" },
];

export default function WordLengthPage({ length }: WordLengthPageProps) {
  const matchingWords = words
    .filter((word) => word.length === length)
    .slice(0, 500);

  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word Lists
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            {length} Letter Words
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Browse useful {length} letter words for word games, spelling practice,
            vocabulary building, and puzzle solving.
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
          {lengthLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.href === `/${length}-letter-words`
                  ? "rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700"
                  : "rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100"
              }
            >
              {link.title}
            </a>
          ))}
        </div>

        <WordListBrowser
          words={matchingWords}
          title={`Popular ${length} Letter Words`}
          description={`Search and browse up to ${matchingWords.length} useful ${length} letter words from the LetterWise word list.`}
        />

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/word-finder"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Use Word Finder</h2>
            <p className="mt-2 text-sm text-slate-600">
              Enter letters and find possible words.
            </p>
          </a>

          <a
            href="/unscramble-letters"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Unscramble Letters</h2>
            <p className="mt-2 text-sm text-slate-600">
              Rearrange letters to find words for games and puzzles.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
