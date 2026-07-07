export const metadata = {
  title: "Updates | LetterWise",
  description:
    "See recent LetterWise updates, including new word tools, word lists, daily puzzle features, and site improvements.",
};

const updates = [
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
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <a href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to LetterWise
        </a>

        <div className="mt-10">
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Site updates
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            LetterWise Updates
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Recent changes and improvements to LetterWise word tools, word
            lists, daily puzzles, and site features.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {updates.map((update) => (
            <section
              key={update.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-sm font-semibold text-sky-400">
                {update.date}
              </p>

              <h2 className="mt-2 text-2xl font-semibold">{update.title}</h2>

              <ul className="mt-4 space-y-2 text-slate-300">
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
