type WordListInsightsProps = {
  words: string[];
  pattern: string;
  listType: "starting" | "ending" | "containing";
  totalFiveLetterWords: number;
  displayedCount: number;
};

const positionNames = ["first", "second", "third", "fourth", "fifth"];

function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

function formatPercentage(value: number) {
  return `${value.toFixed(1)}%`;
}

function mostCommonLetterAtPosition(words: string[], index: number) {
  const counts = new Map<string, number>();

  words.forEach((word) => {
    const letter = word[index];

    if (letter) {
      counts.set(letter, (counts.get(letter) ?? 0) + 1);
    }
  });

  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
}

function getPositionFacts(
  words: string[],
  pattern: string,
  listType: WordListInsightsProps["listType"],
) {
  if (listType === "containing") {
    return Array.from({ length: 6 - pattern.length }, (_, index) => {
      const count = words.filter((word) => word.startsWith(pattern, index)).length;

      return {
        label: `${positionNames[index]} position`,
        value: formatNumber(count),
        detail: `${formatPercentage((count / words.length) * 100)} of this list`,
      };
    }).filter((fact) => fact.value !== "0");
  }

  const fixedIndexes =
    listType === "starting"
      ? new Set(Array.from({ length: pattern.length }, (_, index) => index))
      : new Set(
          Array.from(
            { length: pattern.length },
            (_, index) => 5 - pattern.length + index,
          ),
        );

  return positionNames
    .map((position, index) => ({ position, index }))
    .filter(({ index }) => !fixedIndexes.has(index))
    .map(({ position, index }) => {
      const mostCommon = mostCommonLetterAtPosition(words, index);

      if (!mostCommon) {
        return null;
      }

      const [letter, count] = mostCommon;

      return {
        label: `${position} position`,
        value: letter.toUpperCase(),
        detail: `${formatNumber(count)} words (${formatPercentage((count / words.length) * 100)})`,
      };
    })
    .filter((fact): fact is NonNullable<typeof fact> => fact !== null);
}

export default function WordListInsights({
  words,
  pattern,
  listType,
  totalFiveLetterWords,
  displayedCount,
}: WordListInsightsProps) {
  if (words.length === 0) {
    return null;
  }

  const displayPattern = pattern.toUpperCase();
  const uniqueLetterCount = words.filter(
    (word) => new Set(word).size === word.length,
  ).length;
  const listShare = (words.length / totalFiveLetterWords) * 100;
  const positionFacts = getPositionFacts(words, pattern, listType);
  const examples = words.slice(0, 6);
  const patternDescription =
    listType === "starting"
      ? `begin with ${displayPattern}`
      : listType === "ending"
        ? `end in ${displayPattern}`
        : `contain ${displayPattern}`;

  return (
    <section className="mt-10 rounded-3xl border border-amber-200 bg-amber-50/70 p-5 shadow-sm sm:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">
          LetterWise list analysis
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950">
          What this word list shows
        </h2>
        <p className="mt-3 leading-7 text-slate-700">
          These facts are calculated from every five-letter entry in our
          dataset that {patternDescription}, not just the words currently shown
          in the interactive browser.
        </p>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-amber-200 bg-white p-5">
          <p className="text-sm font-bold text-slate-500">Matching entries</p>
          <p className="mt-2 text-3xl font-black text-violet-700">
            {formatNumber(words.length)}
          </p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-white p-5">
          <p className="text-sm font-bold text-slate-500">Share of our 5-letter list</p>
          <p className="mt-2 text-3xl font-black text-violet-700">
            {formatPercentage(listShare)}
          </p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-white p-5">
          <p className="text-sm font-bold text-slate-500">No repeated letters</p>
          <p className="mt-2 text-3xl font-black text-violet-700">
            {formatNumber(uniqueLetterCount)}
          </p>
        </div>
      </div>

      {positionFacts.length > 0 && (
        <div className="mt-9">
          <h3 className="text-2xl font-black text-slate-950">
            Position patterns
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {listType === "containing"
              ? `Where ${displayPattern} begins within matching words.`
              : "The most common letter in each position not fixed by this list."}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {positionFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-amber-200 bg-white p-5"
              >
                <p className="text-sm font-bold capitalize text-slate-500">
                  {fact.label}
                </p>
                <p className="mt-2 text-3xl font-black text-slate-950">
                  {fact.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-9 grid gap-6 lg:grid-cols-2">
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

        <div>
          <h3 className="text-2xl font-black text-slate-950">Methodology</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            We filter the current LetterWise dataset to entries with exactly
            five letters, then apply the pattern shown on this page. Counts and
            percentages use the complete matching set. For speed, the searchable
            browser displays {formatNumber(displayedCount)}
            {displayedCount < words.length
              ? ` of ${formatNumber(words.length)}`
              : ""} entries. The dataset is broader than an official answer list
            and may include plurals and inflected forms.
          </p>
        </div>
      </div>
    </section>
  );
}
