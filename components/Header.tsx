import Link from "next/link";

const navLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/word-lists", label: "Word Lists" },
  { href: "/daily-word-puzzle", label: "Daily Puzzle" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
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

        <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 hover:bg-slate-900 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
