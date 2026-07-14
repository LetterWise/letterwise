export const metadata = {
  title: "Terms of Use | LetterWise",
  description:
    "Read the LetterWise terms of use for word tools, word game help, and daily puzzles.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-700">
          Terms of Use
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Terms of Use
        </h1>

        <div className="mt-8 space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Using LetterWise
            </h2>
            <p className="mt-3 leading-7">
              LetterWise provides simple word tools, word lists, puzzle helpers,
              and daily word challenges. The site is intended for general use,
              entertainment, spelling practice, and word game support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Accuracy of results
            </h2>
            <p className="mt-3 leading-7">
              We aim to make LetterWise useful and accurate, but word lists and
              puzzle results may not always be complete, official, or suitable
              for every game. Different games may use different dictionaries or
              accepted word lists.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Personal responsibility
            </h2>
            <p className="mt-3 leading-7">
              You are responsible for how you use the site. If you use
              LetterWise while playing a game, make sure that doing so fits the
              rules or expectations of that game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Changes to the site
            </h2>
            <p className="mt-3 leading-7">
              LetterWise may be updated, changed, expanded, or removed at any
              time. Features, word lists, pages, and daily puzzles may change as
              the site improves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Contact
            </h2>
            <p className="mt-3 leading-7">
              If you have questions about these terms, you can contact the site
              owner.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
