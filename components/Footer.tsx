const footerSections = [
  {
    title: "Word Solvers",
    links: [
      { href: "/tools", label: "All Word Solvers" },
      { href: "/word-finder", label: "Word Finder" },
      { href: "/how-to-use-word-finder", label: "How to Use Word Finder" },
      { href: "/best-words-for-word-games", label: "Best Words for Word Games" },
      { href: "/unscramble-letters", label: "Unscramble Letters" },
      { href: "/wordle-solver", label: "Wordle Solver" },
      { href: "/wordle-starter-words", label: "Wordle Starter Words" },
    ],
  },
  {
    title: "Word Lists",
    links: [
      { href: "/word-lists", label: "All Word Lists" },
      { href: "/3-letter-words", label: "3 Letter Words" },
      { href: "/4-letter-words", label: "4 Letter Words" },
      { href: "/5-letter-words", label: "5 Letter Words" },
      { href: "/common-5-letter-words", label: "Common 5 Letter Words" },
      { href: "/5-letter-words-with-vowels", label: "5 Letter Words With Vowels" },
      { href: "/5-letter-words-no-repeats", label: "5 Letter Words No Repeats" },
      { href: "/6-letter-words", label: "6 Letter Words" },
      { href: "/7-letter-words", label: "7 Letter Words" },
    ],
  },
  {
    title: "Daily Puzzle",
    links: [
      { href: "/daily-word-puzzle", label: "Play Daily Puzzle" },
      { href: "/daily-word-puzzle/how-to-play", label: "How to Play" },
      { href: "/daily-word-puzzle/archive", label: "Puzzle Archive" },
    ],
  },
  {
    title: "LetterWise",
    links: [
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/updates", label: "Updates" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-sm font-black text-white shadow-lg shadow-violet-950/20">
                LW
              </span>

              <span className="text-2xl font-black tracking-tight">
                LetterWise
              </span>
            </a>

            <p className="mt-4 max-w-sm leading-7 text-slate-600">
              A simple word helper for finding words, unscrambling letters,
              solving Wordle clues, and playing daily word puzzles.
            </p>

            <a
              href="/word-finder"
              className="mt-6 inline-block rounded-full bg-amber-300 px-6 py-3 font-black text-slate-950 hover:bg-amber-200"
            >
              Try Word Finder
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-black text-slate-900">{section.title}</h2>

                <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-600">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-2 py-1.5 hover:bg-violet-50 hover:text-violet-700"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-violet-100 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} LetterWise. Built for simple word solving.
        </div>
      </div>
    </footer>
  );
}
