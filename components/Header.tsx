"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/tools", label: "Word Solvers" },
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
  if (href === "/word-lists") return isWordListPage(pathname);
  if (href === "/tools") return isToolsPage(pathname);
  if (href === "/daily-word-puzzle") {
    return pathname === "/daily-word-puzzle" || pathname.startsWith("/daily-word-puzzle/");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 text-slate-900 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-sm font-black text-white">
            LW
          </span>

          <span className="text-2xl font-black tracking-tight">
            LetterWise
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex"
        >
          {navLinks.map((link) => {
            const active = isActiveLink(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={active ? "text-violet-600" : "hover:text-violet-600"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/daily-word-puzzle"
          className="rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white hover:bg-violet-700"
        >
          Play
        </Link>
      </div>

      <nav
        aria-label="Primary navigation"
        className="flex gap-2 overflow-x-auto border-t border-violet-100 px-4 py-3 text-sm font-bold text-slate-700 md:hidden"
      >
        {navLinks.map((link) => {
          const active = isActiveLink(pathname, link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "whitespace-nowrap rounded-full bg-violet-100 px-4 py-2 text-violet-700 ring-1 ring-inset ring-violet-200"
                  : "whitespace-nowrap rounded-full bg-violet-50 px-4 py-2 hover:bg-violet-100 hover:text-violet-700"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
