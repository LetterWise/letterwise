const words = [
  "aback",
  "abase",
  "abate",
  "abbey",
  "abbot",
  "abhor",
  "abide",
  "abled",
  "abode",
  "abort",
  "about",
  "above",
  "abuse",
  "abyss",
  "ached",
  "aches",
  "acids",
  "acing",
  "acorn",
  "acres",
  "acted",
  "actor",
  "acute",
  "adapt",
  "added",
  "adder",
  "addle",
  "adept",
  "admin",
  "admit",
  "adobe",
  "adopt",
  "adore",
  "adorn",
  "adult",
  "affix",
  "afire",
  "afoot",
  "afoul",
  "after",
  "again",
  "agape",
  "agate",
  "agent",
  "agile",
  "aging",
  "aglow",
  "agony",
  "agree",
  "ahead",
  "aided",
  "aisle",
  "alarm",
  "album",
  "alert",
  "algae",
  "alias",
  "alibi",
  "alien",
  "align",
  "alike",
  "alive",
  "allay",
  "alley",
  "allow",
  "alloy",
  "aloft",
  "alone",
  "along",
  "aloof",
  "aloud",
  "alpha",
  "altar",
  "alter",
  "amass",
  "amaze",
  "amber",
  "amble",
  "amend",
  "amiss",
  "among",
  "ample",
  "amply",
  "amuse",
  "angel",
  "anger",
  "angle",
  "angry",
  "anime",
  "ankle",
  "annex",
  "annoy",
  "annul",
  "antic",
  "antsy",
  "anvil",
  "aorta",
  "apart",
  "aphid",
  "aping",
  "apnea",
  "apple",
  "apply",
  "apron",
  "aptly",
  "arena",
  "argue",
  "arise",
  "armed",
  "armor",
  "aroma",
  "arose",
  "array",
  "arrow",
  "arson",
  "artsy",
  "ascot",
  "ashen",
  "aside",
  "asked",
  "askew",
  "asset",
  "atlas",
  "atoll",
  "atone",
  "attic",
  "audio",
  "audit",
  "augur",
  "aunty",
  "avail",
  "avert",
  "avian",
  "avoid",
  "await",
  "awake",
  "award",
  "aware",
  "awash",
  "awful",
  "awoke",
  "axiom",
];

export const metadata = {
  title: "5 Letter Words Starting With A | LetterWise",
  description:
    "Browse useful 5 letter words starting with A for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithAPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a href="/5-letter-words" className="text-sm text-slate-600 hover:text-white">
          ← Back to 5 Letter Words
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-700">
            5 letter words
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            5 Letter Words Starting With A
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            This list of 5 letter words starting with A can help with Wordle,
            crossword clues, spelling practice, vocabulary building, and other
            word games.
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-violet-100 bg-white p-6">
          <h2 className="text-2xl font-semibold">Words starting with A</h2>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {words.map((word) => (
              <a
                key={word}
                href={`/word-finder?letters=${word}`}
                className="rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide hover:bg-violet-50"
              >
                {word}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/wordle-solver"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Use the Wordle Solver</h2>
            <p className="mt-2 text-sm text-slate-600">
              Enter known letters, included letters, and excluded letters to
              narrow down possible answers.
            </p>
          </a>

          <a
            href="/unscramble-letters"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Unscramble Letters</h2>
            <p className="mt-2 text-sm text-slate-600">
              Rearrange letters to find possible words for games and puzzles.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
