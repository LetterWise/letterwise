import Link from "next/link";

export const metadata = {
  title: "Updates | LetterWise",
  description:
    "See recent LetterWise updates, including new word tools, word lists, daily puzzle features, and site improvements.",
};

const updates = [
  {
    date: "2026-07-14",
    title: "Content and transparency improvements",
    items: [
      "Added original analysis of common letters in five-letter words.",
      "Documented how LetterWise word tools and guides are created.",
      "Updated the privacy policy with current analytics and advertising information.",
      "Improved color consistency and readability across device preferences.",
    ],
  },
  {
    date: "2026-07-07",
    title: "Daily Word Puzzle improvements",
    items: [
      "Added easy, medium, and hard puzzle levels.",
      "Added playable archive puzzles.",
      "Added browser-saved stats.",
      "Added a share result button.",
      "Added a How to Play page.",
    ],
  },
  {
    date: "2026-07-07",
    title: "Word list pages added",
    items: [
      "Added 3, 4, 5, 6, and 7 letter word pages.",
      "Added 5 letter words starting with A to Z.",
      "Added 5 letter words ending in common endings.",
      "Added 5 letter words containing common letters and patterns.",
    ],
  },
  {
    date: "2026-07-07",
    title: "Site structure improvements",
    items: [
      "Added header navigation.",
      "Added footer links.",
      "Added About, Contact, FAQ, Privacy Policy, and Terms pages.",
      "Added sitemap and robots files.",
      "Added a custom 404 page.",
    ],
  },
];

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/" className="text-sm text-slate-600 hover:text-violet-700">
          ← Back to LetterWise
        </Link>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-700">
            Site updates
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            LetterWise Updates
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Recent changes and improvements to LetterWise word tools, word
            lists, daily puzzles, and site features.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {updates.map((update) => (
            <section
              key={update.title}
              className="rounded-3xl border border-violet-100 bg-white p-6"
            >
              <p className="text-sm font-semibold text-violet-600">
                {update.date}
              </p>

              <h2 className="mt-2 text-2xl font-semibold">{update.title}</h2>

              <ul className="mt-4 space-y-2 text-slate-700">
                {update.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
