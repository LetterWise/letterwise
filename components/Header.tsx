"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/word-lists", label: "Word Lists" },
  { href: "/daily-word-puzzle", label: "Daily Puzzle" },
  { href: "/about", label: "About" },
];

function isWordListPage(pathname: string) {
  return (
    pathname === "/word-lists" ||
    pathname === "/3-letter-words" ||
    pathname === "/4-letter-words" ||
    pathname === "/5-letter-words" ||
    pathname === "/6-letter-words" ||
    pathname === "/7-letter-words" ||
    pathname.startsWith("/5-letter-words-starting-with-") ||
    pathname.startsWith("/5-letter-words-ending-in-") ||
    pathname.startsWith("/5-letter-words-containing-")
  );
}

function isToolsPage(pathname: string) {
  return (
    pathname === "/tools" ||
    pathname === "/word-finder" ||
    pathname === "/unscramble-letters" ||
    pathname === "/wordle-solver"
  );
}

function isActiveLink(pathname: string, href: string) {
  if (href === "/word-lists") {
    return isWordListPage(pathname);
  }

  if (href === "/tools") {
    return isToolsPage(pathname);
  }

  if (href === "/daily-word-puzzle") {
    return (
      pathname === "/daily-word-puzzle" ||
      pathname.startsWith("/daily-word-puzzle/")
    );
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 text-white shadow-sm backdrop-blur">
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
          {navLinks.map((link) => {
            const active = isActiveLink(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full border px-3 py-2 transition ${
                  active
                    ? "border-sky-500/40 bg-sky-500/15 text-sky-300"
                    : "border-transparent hover:border-slate-700 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
