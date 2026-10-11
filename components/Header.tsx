"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/word-lists", label: "Word Lists" },
  { href: "/word-guides", label: "Guides" },
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
    /^\/[3-7]-letter-words/.test(pathname) ||
    pathname.startsWith("/common-5-letter-words") ||
    pathname.startsWith("/wordle-starter-words")
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
  return gameLinks.some(
    (game) => pathname === game.href || pathname.startsWith(`${game.href}/`),
  );
}

function isActiveLink(pathname: string, href: string) {
  if (href === "/word-lists") return isWordListPage(pathname);
  if (href === "/tools") return isToolsPage(pathname);
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [openPanel, setOpenPanel] = useState<"games" | "menu" | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setOpenPanel(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPanel(null);
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
      className="sticky top-0 z-50 border-b border-violet-100 bg-[#fffefa]/95 text-[#24302d] backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpenPanel(null)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-xs font-bold tracking-wide text-white">
            LW
          </span>
          <span className="text-xl font-bold tracking-tight">LetterWise</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm font-semibold text-[#53615c] md:flex"
        >
          {primaryLinks.slice(0, 2).map((link) => {
            const active = isActiveLink(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={active ? "text-violet-700" : "hover:text-violet-700"}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenPanel((panel) => (panel === "games" ? null : "games"))}
              aria-expanded={openPanel === "games"}
              aria-controls="desktop-games-menu"
              className={`inline-flex items-center gap-1.5 ${
                gamesActive ? "text-violet-700" : "hover:text-violet-700"
              }`}
            >
              Games
              <span aria-hidden="true" className="text-xs">
                {openPanel === "games" ? "▴" : "▾"}
              </span>
            </button>

            {openPanel === "games" ? (
              <div
                id="desktop-games-menu"
                className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-xl border border-violet-100 bg-white p-2 shadow-lg shadow-violet-950/10"
              >
                {gameLinks.map((game) => (
                  <Link
                    key={game.href}
                    href={game.href}
                    onClick={() => setOpenPanel(null)}
                    className="block rounded-lg px-4 py-3 hover:bg-violet-50"
                  >
                    <span className="block font-bold text-[#24302d]">{game.label}</span>
                    <span className="mt-0.5 block text-xs font-normal text-[#66706c]">
                      {game.description}
                    </span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href={primaryLinks[2].href}
            aria-current={isActiveLink(pathname, primaryLinks[2].href) ? "page" : undefined}
            className={
              isActiveLink(pathname, primaryLinks[2].href)
                ? "text-violet-700"
                : "hover:text-violet-700"
            }
          >
            {primaryLinks[2].label}
          </Link>
        </nav>

        <Link
          href="/daily-word-puzzle"
          className="hidden rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-700 md:inline-flex"
        >
          Daily puzzle
        </Link>

        <button
          type="button"
          onClick={() => setOpenPanel((panel) => (panel === "menu" ? null : "menu"))}
          aria-expanded={openPanel === "menu"}
          aria-controls="mobile-menu"
          className="inline-flex min-h-10 items-center rounded-lg border border-violet-200 bg-white px-4 text-sm font-bold text-[#34423e] md:hidden"
        >
          {openPanel === "menu" ? "Close" : "Menu"}
        </button>
      </div>

      {openPanel === "menu" ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-violet-100 bg-white px-5 py-4 md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpenPanel(null)}
                className="rounded-lg px-3 py-3 font-semibold hover:bg-violet-50"
              >
                {link.label}
              </Link>
            ))}
            <p className="px-3 pb-1 pt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#7a8581]">
              Games
            </p>
            {gameLinks.map((game) => (
              <Link
                key={game.href}
                href={game.href}
                onClick={() => setOpenPanel(null)}
                className="rounded-lg px-3 py-3 font-semibold hover:bg-violet-50"
              >
                {game.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
