import Link from "next/link";

const footerLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/word-finder", label: "Word Finder" },
  { href: "/unscramble-letters", label: "Unscramble Letters" },
  { href: "/wordle-solver", label: "Wordle Solver" },
  { href: "/word-lists", label: "Word Lists" },
  { href: "/3-letter-words", label: "3 Letter Words" },
  { href: "/4-letter-words", label: "4 Letter Words" },
  { href: "/5-letter-words", label: "5 Letter Words" },
  { href: "/6-letter-words", label: "6 Letter Words" },
  { href: "/7-letter-words", label: "7 Letter Words" },
  { href: "/daily-word-puzzle", label: "Daily Puzzle" },
  { href: "/daily-word-puzzle/how-to-play", label: "How to Play" },
  { href: "/daily-word-puzzle/archive", label: "Puzzle Archive" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500 text-sm font-black text-white shadow-lg shadow-sky-950/40">
                LW
              </span>

              <span>
                <span className="block text-xl font-bold tracking-tight">
                  LetterWise
                </span>
                <span className="block text-xs text-slate-400">
                  Word tools & daily puzzles
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              Simple word tools for puzzles, spelling practice, word games,
              word lists, and daily challenges.
            </p>
          </div>

          <nav className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-1.5 hover:bg-slate-900 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © 2026 LetterWise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
