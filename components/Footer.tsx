import Link from "next/link";

const footerLinks = [
  { href: "/word-finder", label: "Word Finder" },
  { href: "/unscramble-letters", label: "Unscramble Letters" },
  { href: "/wordle-solver", label: "Wordle Solver" },
  { href: "/5-letter-words", label: "5 Letter Words" },
  { href: "/daily-word-puzzle", label: "Daily Puzzle" },
  { href: "/daily-word-puzzle/archive", label: "Puzzle Archive" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              LetterWise
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              Simple word tools for puzzles, spelling practice, word games, and
              daily challenges.
            </p>
          </div>

          <nav className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          © 2026 LetterWise. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
