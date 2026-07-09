export const metadata = {
  title: "FAQ | LetterWise Word Tools",
  description:
    "Frequently asked questions about LetterWise word tools, word finder, unscrambler, Wordle solver, word lists, and daily puzzles.",
};

const faqs = [
  {
    question: "What is LetterWise?",
    answer:
      "LetterWise is a simple word tools website for word games, puzzles, spelling practice, vocabulary building, and daily word challenges.",
  },
  {
    question: "How does the Word Finder work?",
    answer:
      "The Word Finder helps you find possible words from the letters you enter. It can be useful for word games, spelling activities, and puzzle solving.",
  },
  {
    question: "What is the Unscramble Letters tool?",
    answer:
      "The Unscramble Letters tool rearranges mixed letters and shows possible words that can be made from those letters.",
  },
  {
    question: "What is the Wordle Solver?",
    answer:
      "The Wordle Solver helps narrow down possible five-letter words using known letters, included letters, and excluded letters.",
  },
  {
    question: "Are the word lists official for every game?",
    answer:
      "No. Different games may use different dictionaries or accepted word lists. LetterWise word lists are designed to be helpful, but they may not match every official game dictionary.",
  },
  {
    question: "Can I use LetterWise for spelling practice?",
    answer:
      "Yes. LetterWise can be useful for spelling practice, vocabulary building, classroom activities, and word exploration.",
  },
  {
    question: "Does the Daily Word Puzzle save my stats?",
    answer:
      "The Daily Word Puzzle can save basic stats in your own browser, such as games played, win rate, current streak, and best streak. This uses browser local storage.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-700">
          FAQ
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Frequently Asked Questions
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Answers to common questions about LetterWise word tools, word lists,
          puzzle helpers, and the Daily Word Puzzle.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <section
              key={faq.question}
              className="rounded-3xl border border-violet-100 bg-white p-6"
            >
              <h2 className="text-2xl font-semibold">{faq.question}</h2>
              <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/word-finder"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Try Word Finder</h2>
            <p className="mt-2 text-sm text-slate-600">
              Find possible words from your letters.
            </p>
          </a>

          <a
            href="/daily-word-puzzle"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Play Daily Word Puzzle</h2>
            <p className="mt-2 text-sm text-slate-600">
              Try the daily five-letter word challenge.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
