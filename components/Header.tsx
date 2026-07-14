"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/tools", label: "Word Solvers" },
  { href: "/word-lists", label: "Word Lists" },
  { href: "/about", label: "About" },
];

const gameLinks = [
  {
    href: "/daily-word-puzzle",
    label: "Daily Word Puzzle",
    description: "Guess three five-letter words",
  },
  {
    href: "/letter-links",
    label: "Letter Links",
    description: "Build a one-letter word ladder",
  },
  {
    href: "/anagram-rush",
    label: "Anagram Rush",
    description: "Find words in sixty seconds",
  },
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

function isGamesPage(pathname: string) {
  return (
    pathname === "/daily-word-puzzle" ||
    pathname.startsWith("/daily-word-puzzle/") ||
    pathname === "/letter-links" ||
    pathname.startsWith("/letter-links/") ||
    pathname === "/anagram-rush" ||
    pathname.startsWith("/anagram-rush/")
  );
}

function isActiveLink(pathname: string, href: string) {
  if (href === "/word-lists") return isWordListPage(pathname);
  if (href === "/tools") return isToolsPage(pathname);
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [gamesOpen, setGamesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setGamesOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setGamesOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const gamesActive = isGamesPage(pathname);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 text-slate-900 shadow-sm backdrop-blur"
    >
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
          {navLinks.slice(0, 2).map((link) => {
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

          <div className="relative">
            <button
              type="button"
              onClick={() => setGamesOpen((open) => !open)}
              aria-expanded={gamesOpen}
              aria-controls="desktop-games-menu"
              className={`inline-flex items-center gap-1.5 ${
                gamesActive ? "text-violet-600" : "hover:text-violet-600"
              }`}
            >
              Word Games
              <span
                aria-hidden="true"
                className={`text-xs transition ${gamesOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            {gamesOpen ? (
              <div
                id="desktop-games-menu"
                className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-2xl border border-violet-100 bg-white p-2 shadow-xl shadow-violet-950/10"
              >
                {gameLinks.map((game) => (
                  <Link
                    key={game.href}
                    href={game.href}
                    onClick={() => setGamesOpen(false)}
                    className="block rounded-xl px-4 py-3 hover:bg-violet-50"
                  >
                    <span className="block font-black text-slate-950">
                      {game.label}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-slate-600">
                      {game.description}
                    </span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {navLinks.slice(2).map((link) => {
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
        {navLinks.slice(0, 2).map((link) => {
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

        <button
          type="button"
          onClick={() => setGamesOpen((open) => !open)}
          aria-expanded={gamesOpen}
          aria-controls="mobile-games-menu"
          className={
            gamesActive
              ? "whitespace-nowrap rounded-full bg-violet-100 px-4 py-2 text-violet-700 ring-1 ring-inset ring-violet-200"
              : "whitespace-nowrap rounded-full bg-violet-50 px-4 py-2 hover:bg-violet-100 hover:text-violet-700"
          }
        >
          Word Games {gamesOpen ? "▴" : "▾"}
        </button>

        {navLinks.slice(2).map((link) => {
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

      {gamesOpen ? (
        <nav
          id="mobile-games-menu"
          aria-label="Word games"
          className="grid gap-2 border-t border-violet-100 bg-white px-4 py-3 md:hidden"
        >
          {gameLinks.map((game) => (
            <Link
              key={game.href}
              href={game.href}
              onClick={() => setGamesOpen(false)}
              className="rounded-xl bg-violet-50 px-4 py-3 hover:bg-violet-100"
            >
              <span className="block font-black text-slate-950">{game.label}</span>
              <span className="mt-0.5 block text-xs font-medium text-slate-600">
                {game.description}
              </span>
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
