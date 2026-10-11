import Link from "next/link";

const footerSections = [
  {
    title: "Tools",
    links: [
      { href: "/word-finder", label: "Word Finder" },
      { href: "/unscramble-letters", label: "Unscramble Letters" },
      { href: "/wordle-solver", label: "Wordle Solver" },
      { href: "/word-lists", label: "Word Lists" },
    ],
  },
  {
    title: "Play & learn",
    links: [
      { href: "/daily-word-puzzle", label: "Daily Word Puzzle" },
      { href: "/letter-links", label: "Letter Links" },
      { href: "/anagram-rush", label: "Anagram Rush" },
      { href: "/word-guides", label: "Word Guides" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "LetterWise",
    links: [
      { href: "/about", label: "About" },
      { href: "/faq", label: "Help & FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-[#fffefa] text-[#24302d]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-xs font-bold tracking-wide text-white">
                LW
              </span>
              <span className="text-xl font-bold tracking-tight">LetterWise</span>
            </Link>
            <p className="mt-4 max-w-sm leading-7 text-[#66706c]">
              Clear, free tools for word games, puzzles, and vocabulary.
            </p>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-bold text-[#24302d]">{section.title}</h2>
                <div className="mt-4 grid gap-2.5 text-sm text-[#66706c]">
                  {section.links.map((link) => (
                    <Link key={link.href} href={link.href} className="hover:text-violet-700">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-violet-100 pt-6 text-sm text-[#7a8581]">
          © {new Date().getFullYear()} LetterWise
        </div>
      </div>
    </footer>
  );
}
