import { words } from "@/data/words";
import WordListBrowser from "./WordListBrowser";
import WordListInsights from "./WordListInsights";

type FiveLetterContainingPageProps = {
  letters: string;
};

const quickContaining = ["a", "e", "i", "o", "u", "st"];

export default function FiveLetterContainingPage({
  letters,
}: FiveLetterContainingPageProps) {
  const cleanLetters = letters.toLowerCase();
  const displayLetters = cleanLetters.toUpperCase();

  const fiveLetterWords = words.filter((word) => word.length === 5);
  const allMatchingWords = fiveLetterWords.filter((word) =>
    word.includes(cleanLetters),
  );
  const matchingWords = allMatchingWords.slice(0, 500);

  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            5 Letter Words
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            5 Letter Words Containing {displayLetters}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Browse five-letter words containing {displayLetters} for Wordle,
            word games, spelling practice, and puzzle solving.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-3 sm:grid-cols-6">
          {quickContaining.map((item) => (
            <a
              key={item}
              href={`/5-letter-words-containing-${item}`}
              className={
                item === cleanLetters
                  ? "rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700"
                  : "rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100"
              }
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        <WordListBrowser
          words={matchingWords}
          totalCount={allMatchingWords.length}
          title={`Words Containing ${displayLetters}`}
          description={`Search and browse ${matchingWords.length === allMatchingWords.length ? allMatchingWords.length : `the first ${matchingWords.length} of ${allMatchingWords.length}`} five-letter words containing ${displayLetters}.`}
        />

        <WordListInsights
          words={allMatchingWords}
          pattern={cleanLetters}
          listType="containing"
          totalFiveLetterWords={fiveLetterWords.length}
          displayedCount={matchingWords.length}
        />

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/5-letter-words"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Browse 5 Letter Words</h2>
            <p className="mt-2 text-sm text-slate-600">
              Explore more five-letter word lists.
            </p>
          </a>

          <a
            href="/word-finder"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Use Word Finder</h2>
            <p className="mt-2 text-sm text-slate-600">
              Find words from letters and filters.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
