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
  const allMatchingWords = words.filter((word) => word.length === length);
  const matchingWords = allMatchingWords.slice(0, 500);
  const noRepeatCount = allMatchingWords.filter(
    (word) => new Set(word).size === word.length,
  ).length;
  const startingLetterCounts = [
    ...allMatchingWords.reduce((counts, word) => {
      const firstLetter = word[0];

      if (!firstLetter) {
        return counts;
      }

      counts.set(firstLetter, (counts.get(firstLetter) ?? 0) + 1);
      return counts;
    }, new Map<string, number>()),
  ]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const [mostCommonStart, mostCommonStartCount] = startingLetterCounts[0] ?? [
    "",
    0,
  ];
  const examples = allMatchingWords.slice(0, 8);

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
          totalCount={allMatchingWords.length}
          title={`Browse ${length} Letter Words`}
          description={`Search the first ${matchingWords.length.toLocaleString("en-US")} of ${allMatchingWords.length.toLocaleString("en-US")} ${length}-letter entries in the LetterWise word list.`}
        />

        <section className="mt-10 rounded-3xl border border-amber-200 bg-amber-50/70 p-5 shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">
              LetterWise list analysis
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              What our {length}-letter word list shows
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              We calculated these facts from every {length}-letter entry in our
              dataset, not only the words displayed in the searchable browser.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-amber-200 bg-white p-5">
              <p className="text-sm font-bold text-slate-500">Total entries</p>
              <p className="mt-2 text-3xl font-black text-violet-700">
                {allMatchingWords.length.toLocaleString("en-US")}
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white p-5">
              <p className="text-sm font-bold text-slate-500">
                No repeated letters
              </p>
              <p className="mt-2 text-3xl font-black text-violet-700">
                {noRepeatCount.toLocaleString("en-US")}
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white p-5">
              <p className="text-sm font-bold text-slate-500">
                Most common starting letter
              </p>
              <p className="mt-2 text-3xl font-black uppercase text-violet-700">
                {mostCommonStart}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-600">
                {mostCommonStartCount.toLocaleString("en-US")} entries
              </p>
            </div>
          </div>

          <div className="mt-9 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-black text-slate-950">
                Most common starting letters
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-5">
                {startingLetterCounts.map(([letter, count]) => (
                  <div
                    key={letter}
                    className="rounded-2xl border border-amber-200 bg-white p-4 text-center"
                  >
                    <p className="text-2xl font-black uppercase text-slate-950">
                      {letter}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {count.toLocaleString("en-US")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-950">Examples</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {examples.map((word) => (
                  <span
                    key={word}
                    className="rounded-xl border border-violet-100 bg-white px-4 py-2 font-black uppercase tracking-wide text-violet-700"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-9 rounded-2xl border border-amber-200 bg-white p-5">
            <h3 className="text-xl font-black text-slate-950">Methodology</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Counts use the current LetterWise dataset filtered to words with
              exactly {length} letters. The no-repeat total includes words in
              which every letter appears once. The starting-letter ranking is
              based on the first character of every matching entry. Our dataset
              is broader than an official game answer list and can include
              plurals and inflected forms.
            </p>
          </div>
        </section>

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
