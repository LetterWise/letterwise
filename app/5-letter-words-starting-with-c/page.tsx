const words = [
  "cabin",
  "cable",
  "cacao",
  "cache",
  "cacti",
  "caged",
  "cagey",
  "cakes",
  "calms",
  "camel",
  "cameo",
  "canal",
  "candy",
  "canoe",
  "canon",
  "caper",
  "cards",
  "cargo",
  "carol",
  "carry",
  "carve",
  "catch",
  "cater",
  "cause",
  "cease",
  "cedar",
  "chain",
  "chair",
  "chalk",
  "champ",
  "chant",
  "chaos",
  "charm",
  "chart",
  "chase",
  "cheap",
  "check",
  "cheek",
  "cheer",
  "chess",
  "chest",
  "chief",
  "child",
  "chill",
  "china",
  "choir",
  "chose",
  "chunk",
  "cider",
  "cigar",
  "cinch",
  "circa",
  "civic",
  "civil",
  "claim",
  "clamp",
  "clang",
  "clash",
  "class",
  "clean",
  "clear",
  "clerk",
  "click",
  "cliff",
  "climb",
  "cling",
  "cloak",
  "clock",
  "clone",
  "close",
  "cloth",
  "cloud",
  "clown",
  "coach",
  "coast",
  "cobra",
  "cocoa",
  "colon",
  "color",
  "comet",
  "comic",
  "coral",
  "couch",
  "could",
  "count",
  "court",
  "cover",
  "crack",
  "craft",
  "crane",
  "crash",
  "crate",
  "crawl",
  "crazy",
  "cream",
  "creek",
  "crest",
  "crime",
  "crisp",
  "cross",
  "crowd",
  "crown",
  "crude",
  "cruel",
  "crush",
  "cubic",
  "curve",
];

export const metadata = {
  title: "5 Letter Words Starting With C | LetterWise",
  description:
    "Browse useful 5 letter words starting with C for Wordle, word games, spelling practice, and vocabulary building.",
};

export default function FiveLetterWordsStartingWithCPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <a
          href="/5-letter-words"
          className="text-sm text-slate-600 hover:text-white"
        >
          ← Back to 5 Letter Words
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-700">
            5 letter words
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            5 Letter Words Starting With C
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            This list of 5 letter words starting with C can help with Wordle,
            crossword clues, spelling practice, vocabulary building, and other
            word games.
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-violet-100 bg-white p-6">
          <h2 className="text-2xl font-semibold">Words starting with C</h2>

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
            href="/5-letter-words-starting-with-a"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">
              5 Letter Words Starting With A
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Browse another useful Wordle-style word list.
            </p>
          </a>

          <a
            href="/5-letter-words-starting-with-b"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">
              5 Letter Words Starting With B
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Browse another useful Wordle-style word list.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
