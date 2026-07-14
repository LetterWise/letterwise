import { words } from "@/data/words";

export const metadata = {
  title: "Best Two Word Starts by Data | LetterWise",
  description:
    "Compare familiar two-word openings by how many distinct letters they reveal across 12,578 LetterWise five-letter entries, with methods and limitations.",
};

const openingPairs = [
  ["raise", "clout"],
  ["arise", "clout"],
  ["stare", "guild"],
  ["slate", "round"],
  ["crate", "sound"],
  ["trace", "sound"],
  ["crane", "toils"],
  ["roast", "cline"],
  ["irate", "sound"],
  ["tears", "cloud"],
  ["least", "round"],
  ["alert", "coins"],
  ["later", "sonic"],
  ["laser", "count"],
  ["snare", "pilot"],
  ["aisle", "torch"],
  ["audio", "crest"],
  ["adieu", "short"],
  ["point", "clear"],
  ["plant", "score"],
  ["store", "chain"],
  ["ocean", "first"],
  ["heart", "coins"],
  ["cares", "point"],
  ["stone", "grail"],
  ["learn", "moist"],
  ["react", "soily"],
  ["alone", "first"],
  ["train", "close"],
  ["saint", "cover"],
  ["ratio", "clues"],
  ["spare", "tonic"],
  ["shore", "plant"],
  ["house", "train"],
  ["mouse", "trail"],
  ["count", "arise"],
  ["court", "aisle"],
  ["about", "seric"],
] as const;

const fiveLetterWords = words.filter((word) => word.length === 5);

const rankedPairs = openingPairs
  .filter(([first, second]) =>
    fiveLetterWords.includes(first) && fiveLetterWords.includes(second),
  )
  .map(([first, second]) => {
    const testedLetters = new Set([...first, ...second]);
    const results = fiveLetterWords.map((word) => {
      const distinctMatches = new Set(
        [...word].filter((letter) => testedLetters.has(letter)),
      ).size;
      const positionMatches = [...word].filter(
        (letter, index) => first[index] === letter || second[index] === letter,
      ).length;

      return { distinctMatches, positionMatches };
    });
    const expectedDistinctMatches =
      results.reduce((total, result) => total + result.distinctMatches, 0) /
      results.length;
    const threeOrMoreCoverage =
      (results.filter((result) => result.distinctMatches >= 3).length /
        results.length) *
      100;
    const noMatchRate =
      (results.filter((result) => result.distinctMatches === 0).length /
        results.length) *
      100;
    const expectedPositionMatches =
      results.reduce((total, result) => total + result.positionMatches, 0) /
      results.length;

    return {
      first,
      second,
      expectedDistinctMatches,
      threeOrMoreCoverage,
      noMatchRate,
      expectedPositionMatches,
      testedLetterCount: testedLetters.size,
    };
  })
  .filter((pair) => pair.testedLetterCount === 10)
  .sort(
    (a, b) =>
      b.expectedDistinctMatches - a.expectedDistinctMatches ||
      b.threeOrMoreCoverage - a.threeOrMoreCoverage ||
      b.expectedPositionMatches - a.expectedPositionMatches,
  );

const topPairs = rankedPairs.slice(0, 12);
const bestPositionPair = [...rankedPairs].sort(
  (a, b) => b.expectedPositionMatches - a.expectedPositionMatches,
)[0];

function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

function formatDecimal(value: number) {
  return value.toFixed(2);
}

function formatPercentage(value: number) {
  return `${value.toFixed(1)}%`;
}

function PairName({ first, second }: { first: string; second: string }) {
  return (
    <>
      <span className="uppercase">{first}</span>
      <span aria-hidden="true"> + </span>
      <span className="sr-only"> followed by </span>
      <span className="uppercase">{second}</span>
    </>
  );
}

export default function BestTwoWordStartsByDataPage() {
  const leader = rankedPairs[0];

  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Original LetterWise Analysis
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Best Two Word Starts by Data
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium text-violet-50">
            We compared {rankedPairs.length} familiar opening pairs against
            {" "}{formatNumber(fiveLetterWords.length)} five-letter entries to
            see which combinations reveal the most distinct letters.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {rankedPairs.slice(0, 3).map((pair, index) => (
            <div
              key={`${pair.first}-${pair.second}`}
              className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                #{index + 1} distinct-letter score
              </p>
              <p className="mt-3 text-3xl font-black text-slate-950">
                <PairName first={pair.first} second={pair.second} />
              </p>
              <p className="mt-3 text-2xl font-black text-violet-700">
                {formatDecimal(pair.expectedDistinctMatches)} average matches
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                Finds three or more distinct letters in
                {" "}{formatPercentage(pair.threeOrMoreCoverage)} of this broad
                dataset.
              </p>
            </div>
          ))}
        </div>

        <section className="mx-auto mt-14 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            What this comparison measures
          </h2>
          <p className="mt-4">
            Every pair tests ten different letters. For each five-letter entry,
            we counted how many distinct letters it shares with the pair. The
            main score is the average of that count across the complete
            LetterWise dataset.
          </p>
          <p className="mt-4">
            We also measured the share of entries matching at least three of
            the ten letters, the share matching none, and exact-position
            matches. These measures describe broad information coverage; they
            do not simulate every possible sequence of colored clues.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-violet-100 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-3xl font-black text-slate-950">
            Top 12 two-word opening pairs
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            The ranking favors combinations whose ten unique letters occur most
            widely throughout the LetterWise five-letter dataset.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-left">
              <caption className="sr-only">
                Twelve two-word openings ranked by distinct-letter coverage
              </caption>
              <thead>
                <tr className="border-b border-violet-100 text-sm uppercase tracking-wide text-slate-500">
                  <th className="px-3 py-3">Rank</th>
                  <th className="px-3 py-3">Opening pair</th>
                  <th className="px-3 py-3">Average distinct matches</th>
                  <th className="px-3 py-3">3+ letter coverage</th>
                  <th className="px-3 py-3">No-match rate</th>
                  <th className="px-3 py-3">Position matches</th>
                </tr>
              </thead>
              <tbody>
                {topPairs.map((pair, index) => (
                  <tr
                    key={`${pair.first}-${pair.second}`}
                    className="border-b border-violet-50"
                  >
                    <td className="px-3 py-4 font-bold text-slate-500">
                      {index + 1}
                    </td>
                    <td className="px-3 py-4 text-xl font-black text-violet-700">
                      <PairName first={pair.first} second={pair.second} />
                    </td>
                    <td className="px-3 py-4 font-bold">
                      {formatDecimal(pair.expectedDistinctMatches)}
                    </td>
                    <td className="px-3 py-4 font-bold">
                      {formatPercentage(pair.threeOrMoreCoverage)}
                    </td>
                    <td className="px-3 py-4 font-bold">
                      {formatPercentage(pair.noMatchRate)}
                    </td>
                    <td className="px-3 py-4 font-bold">
                      {formatDecimal(pair.expectedPositionMatches)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            Three practical findings
          </h2>

          <div className="mt-7 space-y-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Common letters matter more than simply reaching ten
              </h3>
              <p className="mt-2">
                Every scored pair uses ten unique letters, yet the results
                differ because some ten-letter sets appear much more often. The
                leading pair, <PairName first={leader.first} second={leader.second} />,
                averages {formatDecimal(leader.expectedDistinctMatches)} distinct
                matches per entry.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Position value can change the preferred order
              </h3>
              <p className="mt-2">
                <PairName
                  first={bestPositionPair.first}
                  second={bestPositionPair.second}
                /> has the strongest exact-position score in this comparison at
                {" "}{formatDecimal(bestPositionPair.expectedPositionMatches)}.
                Letter coverage helps identify useful characters; position
                coverage asks whether those characters also tend to sit in the
                right places.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900">
                A planned second word is a fallback, not a rule
              </h3>
              <p className="mt-2">
                If the first guess reveals strong clues, using them is usually
                more valuable than automatically playing a preset second word.
                These pairs are most useful when the first guess gives little
                information or when a game allows a deliberate coverage-first
                strategy.
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
              Calculations use the current {formatNumber(fiveLetterWords.length)}
              -entry LetterWise five-letter dataset at build time.
            </li>
            <li>
              We scored {rankedPairs.length} hand-selected, understandable pairs
              that use ten different letters; this is not an exhaustive search
              through every possible dictionary combination.
            </li>
            <li>
              The LetterWise dataset is broader than the official answer list
              for Wordle or any other individual game.
            </li>
            <li>
              The ranking measures letter and position coverage, not guaranteed
              wins or the fewest possible guesses.
            </li>
            <li>
              Different dictionaries, answer lists, and scoring rules will
              produce different rankings.
            </li>
          </ul>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          <a
            href="/best-5-letter-starter-words-by-data"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Single Starters by Data</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Compare familiar first guesses before choosing a second word.
            </p>
          </a>
          <a
            href="/most-common-letters-in-5-letter-words"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Letter Frequency Guide</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore the letter and position counts behind the rankings.
            </p>
          </a>
          <a
            href="/wordle-solver"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Use Wordle Solver</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Apply the clues you reveal to narrow the remaining words.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
