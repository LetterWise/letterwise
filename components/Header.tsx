import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/word-finder", label: "Word Finder" },
  { href: "/unscramble-letters", label: "Unscramble" },
  { href: "/wordle-solver", label: "Wordle Solver" },
  { href: "/word-lists", label: "Word Lists" },
  { href: "/daily-word-puzzle", label: "Daily Puzzle" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          LetterWise
        </Link>

        <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-800 px-3 py-2 hover:bg-slate-900 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
