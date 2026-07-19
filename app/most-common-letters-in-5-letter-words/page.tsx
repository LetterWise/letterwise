import { words } from "@/data/words";

export const metadata = {
  title: "Most Common Letters in 5 Letter Words",
  description:
    "See which letters appear most often in the LetterWise five-letter-word list, where they appear, and how to use the results in word games.",
};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const positionNames = ["First", "Second", "Third", "Fourth", "Fifth"];
const fiveLetterWords = words.filter((word) => word.length === 5);

const letterStats = alphabet
  .map((letter) => {
    const wordsContainingLetter = fiveLetterWords.filter((word) =>
      word.includes(letter),
    ).length;
    const occurrences = fiveLetterWords.reduce(
      (total, word) =>
        total + [...word].filter((character) => character === letter).length,
      0,
    );

    return {
      letter,
      occurrences,
      wordsContainingLetter,
      percentage: (wordsContainingLetter / fiveLetterWords.length) * 100,
    };
  })
  .sort((a, b) => b.wordsContainingLetter - a.wordsContainingLetter);

const positionStats = positionNames.map((position, index) => ({
  position,
  letters: alphabet
    .map((letter) => ({
      letter,
      count: fiveLetterWords.filter((word) => word[index] === letter).length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3),
}));

const noRepeatCount = fiveLetterWords.filter(
  (word) => new Set(word).size === word.length,
).length;

function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

function formatPercentage(value: number) {
  return `${value.toFixed(1)}%`;
}

export default function LetterFrequencyGuidePage() {
  const topLetters = letterStats.slice(0, 10);

  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Original LetterWise Analysis
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Most Common Letters in 5 Letter Words
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium text-violet-50">
            We counted every letter in {formatNumber(fiveLetterWords.length)}
            five-letter entries to see which letters appear most often and
            where they tend to occur.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {letterStats.slice(0, 3).map((stat, index) => (
            <div
              key={stat.letter}
              className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                #{index + 1} by word presence
              </p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <span className="text-6xl font-black uppercase text-slate-950">
                  {stat.letter}
                </span>
                <span className="text-2xl font-black text-violet-700">
                  {formatPercentage(stat.percentage)}
                </span>
              </div>
              <p className="mt-3 leading-7 text-slate-600">
                Appears in {formatNumber(stat.wordsContainingLetter)} different
                five-letter entries.
              </p>
            </div>
          ))}
        </div>

        <section className="mx-auto mt-14 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            What we measured
          </h2>
          <p className="mt-4">
            This analysis uses the current LetterWise word dataset. For each
            letter, we measured both <strong>word presence</strong>—how many
            different words contain the letter—and <strong>total
            occurrences</strong>, which counts a repeated letter more than once.
          </p>
          <p className="mt-4">
            Word presence is usually the more useful number for a first word-game
            guess because it shows how widely a letter is spread across the list.
            Occurrences help explain the effect of double letters.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-violet-100 bg-white p-5 shadow-sm sm:p-8">
          <div>
            <h2 className="text-3xl font-black text-slate-950">
              Top 10 letters in five-letter words
            </h2>
            <p className="mt-2 text-slate-600">
              Ranked by the number of different LetterWise entries containing
              each letter.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <caption className="sr-only">
                Ten most common letters in the LetterWise five-letter-word list
              </caption>
              <thead>
                <tr className="border-b border-violet-100 text-sm uppercase tracking-wide text-slate-500">
                  <th className="px-3 py-3">Rank</th>
                  <th className="px-3 py-3">Letter</th>
                  <th className="px-3 py-3">Words containing it</th>
                  <th className="px-3 py-3">Share of list</th>
                  <th className="px-3 py-3">Total occurrences</th>
                </tr>
              </thead>
              <tbody>
                {topLetters.map((stat, index) => (
                  <tr key={stat.letter} className="border-b border-violet-50">
                    <td className="px-3 py-4 font-bold text-slate-500">
                      {index + 1}
                    </td>
                    <td className="px-3 py-4 text-2xl font-black uppercase text-violet-700">
                      {stat.letter}
                    </td>
                    <td className="px-3 py-4 font-bold">
                      {formatNumber(stat.wordsContainingLetter)}
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <span className="w-14 font-bold">
                          {formatPercentage(stat.percentage)}
                        </span>
                        <span className="h-2 w-28 overflow-hidden rounded-full bg-violet-100">
                          <span
                            aria-hidden="true"
                            className="block h-full rounded-full bg-violet-600"
                            style={{ width: `${stat.percentage}%` }}
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-4 font-bold">
                      {formatNumber(stat.occurrences)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black text-slate-950">
            The most common letters by position
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            A letter can be common overall but much more useful in one position
            than another. These are the top three letters for each position.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {positionStats.map((item) => (
              <div
                key={item.position}
                className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{item.position} letter</h3>
                <ol className="mt-5 space-y-3">
                  {item.letters.map((stat, index) => (
                    <li
                      key={stat.letter}
                      className="flex items-center justify-between gap-3 rounded-xl bg-violet-50 px-4 py-3"
                    >
                      <span className="font-black uppercase text-violet-700">
                        {index + 1}. {stat.letter}
                      </span>
                      <span className="text-sm font-bold text-slate-600">
                        {formatNumber(stat.count)}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            What the results mean for word games
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                S leads because this is a broad word list
              </h3>
              <p className="mt-2">
                S appears in the most different entries, helped by plural nouns
                and verb forms. E has slightly more total occurrences, showing
                why presence and raw letter count answer different questions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Position changes the best choice
              </h3>
              <p className="mt-2">
                S is especially common at the beginning and end of entries,
                while vowels dominate the second position. Position-specific
                clues are therefore more useful than overall frequency alone.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Unique letters reveal more early
              </h3>
              <p className="mt-2">
                {formatNumber(noRepeatCount)} entries in this dataset use five
                different letters. A balanced no-repeat guess can test more
                possibilities early, although repeated letters become important
                once the clues point toward them.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl rounded-3xl bg-violet-100 p-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            Method and limitations
          </h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-7">
            <li>
              Counts are generated from the current LetterWise dataset at build
              time, not copied from an external frequency table.
            </li>
            <li>
              The dataset is a broad English word list and is not the official
              answer list for Wordle or any other individual game.
            </li>
            <li>
              Different dictionaries include different plurals, inflections,
              regional spellings, and uncommon words, so their rankings vary.
            </li>
            <li>
              Word presence counts a letter once per word; total occurrences
              count repeated letters separately.
            </li>
          </ul>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          <a
            href="/wordle-starter-words"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Wordle Starter Words</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Turn letter-frequency ideas into practical opening guesses.
            </p>
          </a>
          <a
            href="/5-letter-words-no-repeats"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Words With No Repeats</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Browse five-letter words that test five different letters.
            </p>
          </a>
          <a
            href="/wordle-solver"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Use Wordle Solver</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Apply known positions and included letters to narrow the list.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
