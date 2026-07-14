import { words } from "@/data/words";

export const metadata = {
  title: "Best 5 Letter Starter Words by Data | LetterWise",
  description:
    "See how 42 familiar five-letter starter words rank by letter coverage across 12,578 LetterWise entries, with methodology and practical takeaways.",
};

const starterCandidates = [
  "raise",
  "arise",
  "stare",
  "slate",
  "crate",
  "trace",
  "crane",
  "roast",
  "least",
  "alert",
  "later",
  "irate",
  "tears",
  "rates",
  "laser",
  "snare",
  "aisle",
  "audio",
  "adieu",
  "point",
  "round",
  "clout",
  "plant",
  "store",
  "ocean",
  "heart",
  "cares",
  "stone",
  "learn",
  "react",
  "alone",
  "trail",
  "train",
  "saint",
  "ratio",
  "spare",
  "shore",
  "house",
  "mouse",
  "count",
  "court",
  "about",
];

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const fiveLetterWords = words.filter((word) => word.length === 5);

const letterPresenceCounts = Object.fromEntries(
  alphabet.map((letter) => [
    letter,
    fiveLetterWords.filter((word) => word.includes(letter)).length,
  ]),
);

const positionCounts = Array.from({ length: 5 }, (_, index) =>
  Object.fromEntries(
    alphabet.map((letter) => [
      letter,
      fiveLetterWords.filter((word) => word[index] === letter).length,
    ]),
  ),
);

const rankedCandidates = starterCandidates
  .filter((candidate) => fiveLetterWords.includes(candidate))
  .map((candidate) => {
    const letters = [...candidate];
    const expectedLetterMatches =
      letters.reduce(
        (total, letter) => total + letterPresenceCounts[letter],
        0,
      ) / fiveLetterWords.length;
    const wordsWithAnyLetter = fiveLetterWords.filter((word) =>
      letters.some((letter) => word.includes(letter)),
    ).length;
    const expectedPositionMatches =
      letters.reduce(
        (total, letter, index) => total + positionCounts[index][letter],
        0,
      ) / fiveLetterWords.length;

    return {
      word: candidate,
      expectedLetterMatches,
      anyLetterCoverage: (wordsWithAnyLetter / fiveLetterWords.length) * 100,
      expectedPositionMatches,
    };
  })
  .sort(
    (a, b) =>
      b.expectedLetterMatches - a.expectedLetterMatches ||
      b.expectedPositionMatches - a.expectedPositionMatches,
  );

const topCandidates = rankedCandidates.slice(0, 12);
const bestPositionCandidate = [...rankedCandidates].sort(
  (a, b) => b.expectedPositionMatches - a.expectedPositionMatches,
)[0];
const adieu = rankedCandidates.find((candidate) => candidate.word === "adieu");
const crane = rankedCandidates.find((candidate) => candidate.word === "crane");

function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

function formatDecimal(value: number) {
  return value.toFixed(2);
}

function formatPercentage(value: number) {
  return `${value.toFixed(1)}%`;
}

export default function BestStarterWordsByDataPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Original LetterWise Analysis
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Best 5 Letter Starter Words by Data
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium text-violet-50">
            We scored {rankedCandidates.length} familiar starter words against
            {" "}{formatNumber(fiveLetterWords.length)} five-letter entries to
            measure how much letter information each opening word tends to
            reveal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {rankedCandidates.slice(0, 3).map((candidate, index) => (
            <div
              key={candidate.word}
              className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                #{index + 1} letter coverage
              </p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <span className="text-4xl font-black uppercase text-slate-950">
                  {candidate.word}
                </span>
                <span className="text-2xl font-black text-violet-700">
                  {formatDecimal(candidate.expectedLetterMatches)}
                </span>
              </div>
              <p className="mt-3 leading-7 text-slate-600">
                Expected distinct letter matches per entry; at least one letter
                appears in {formatPercentage(candidate.anyLetterCoverage)} of
                the dataset.
              </p>
            </div>
          ))}
        </div>

        <section className="mx-auto mt-14 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            What the ranking measures
          </h2>
          <p className="mt-4">
            Each candidate has five different letters. For every candidate, we
            counted how often each of those letters appears across the complete
            LetterWise five-letter dataset. Adding those five presence rates
            gives the <strong>expected letter matches</strong>: the average
            number of distinct candidate letters found in a dataset entry.
          </p>
          <p className="mt-4">
            We also measured <strong>any-letter coverage</strong>, the share of
            entries containing at least one candidate letter, and
            <strong> expected position matches</strong>, the average number of
            letters already sitting in the same position. The main ranking uses
            expected letter matches, with position matches breaking ties.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-violet-100 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-3xl font-black text-slate-950">
            Top 12 familiar starter words
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Higher expected matches mean the word tends to reveal more of its
            five distinct letters across this broad dataset.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">
                Twelve familiar five-letter starter words ranked by LetterWise
                dataset coverage
              </caption>
              <thead>
                <tr className="border-b border-violet-100 text-sm uppercase tracking-wide text-slate-500">
                  <th className="px-3 py-3">Rank</th>
                  <th className="px-3 py-3">Starter</th>
                  <th className="px-3 py-3">Expected letter matches</th>
                  <th className="px-3 py-3">Any-letter coverage</th>
                  <th className="px-3 py-3">Expected position matches</th>
                </tr>
              </thead>
              <tbody>
                {topCandidates.map((candidate, index) => (
                  <tr key={candidate.word} className="border-b border-violet-50">
                    <td className="px-3 py-4 font-bold text-slate-500">
                      {index + 1}
                    </td>
                    <td className="px-3 py-4 text-2xl font-black uppercase text-violet-700">
                      {candidate.word}
                    </td>
                    <td className="px-3 py-4 font-bold">
                      {formatDecimal(candidate.expectedLetterMatches)}
                    </td>
                    <td className="px-3 py-4 font-bold">
                      {formatPercentage(candidate.anyLetterCoverage)}
                    </td>
                    <td className="px-3 py-4 font-bold">
                      {formatDecimal(candidate.expectedPositionMatches)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            Three useful findings
          </h2>

          <div className="mt-7 space-y-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                RAISE edges ARISE on position value
              </h3>
              <p className="mt-2">
                RAISE and ARISE use exactly the same five letters, so they tie
                at {formatDecimal(rankedCandidates[0].expectedLetterMatches)}
                expected letter matches and
                {" "}{formatPercentage(rankedCandidates[0].anyLetterCoverage)}
                any-letter coverage. RAISE ranks first because its letters align
                with common positions more often in this dataset.
              </p>
            </div>

            {adieu && (
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  More vowels do not automatically mean more information
                </h3>
                <p className="mt-2">
                  ADIEU reaches at least one letter in
                  {" "}{formatPercentage(adieu.anyLetterCoverage)} of entries,
                  but averages {formatDecimal(adieu.expectedLetterMatches)}
                  distinct matches. A balanced word such as RAISE tests common
                  consonants as well as vowels and averages more total matches.
                </p>
              </div>
            )}

            {bestPositionCandidate && (
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  Letter coverage and position coverage answer different questions
                </h3>
                <p className="mt-2">
                  {bestPositionCandidate.word.toUpperCase()} has the strongest
                  position score in this candidate set at
                  {" "}{formatDecimal(bestPositionCandidate.expectedPositionMatches)},
                  even though it ranks lower by overall letter coverage. A good
                  opener can prioritize broad discovery, exact positions, or a
                  balance of both.
                </p>
              </div>
            )}

            {crane && (
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  A familiar favorite can still be a sensible choice
                </h3>
                <p className="mt-2">
                  CRANE averages {formatDecimal(crane.expectedLetterMatches)}
                  letter matches and covers at least one letter in
                  {" "}{formatPercentage(crane.anyLetterCoverage)} of entries.
                  It does not lead this broad-list ranking, but consistency and
                  familiarity can still make it practical for daily play.
                </p>
              </div>
            )}
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
              We deliberately scored a transparent set of
              {" "}{rankedCandidates.length} familiar, no-repeat candidates so
              obscure dictionary entries would not dominate the practical list.
            </li>
            <li>
              The LetterWise dataset includes a wider range of words than an
              official answer list for Wordle or any other individual game.
            </li>
            <li>
              This analysis estimates letter information, not the probability
              of solving a particular puzzle in the fewest guesses.
            </li>
            <li>
              Different dictionaries and answer lists will produce different
              rankings.
            </li>
          </ul>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          <a
            href="/best-two-word-starts-by-data"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Two Word Starts by Data</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              See which second words add the strongest ten-letter coverage.
            </p>
          </a>
          <a
            href="/most-common-letters-in-5-letter-words"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Letter Frequency Guide</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              See the letter and position counts behind this analysis.
            </p>
          </a>
          <a
            href="/wordle-solver"
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm hover:bg-violet-50"
          >
            <h2 className="text-xl font-black">Use Wordle Solver</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Apply green, yellow, and excluded letters after your first guess.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
