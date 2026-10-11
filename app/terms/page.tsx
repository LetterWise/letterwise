export const metadata = {
  alternates: {
    canonical: "/terms",
  },
  title: "Terms of Use",
  description:
    "Read the LetterWise terms of use for word tools, word game help, and daily puzzles.",
};

const lastUpdated = "October 11, 2026";

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

        <p className="mt-4 text-sm font-semibold text-slate-500">
          Last updated: {lastUpdated}
        </p>

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
              Advertising, affiliate links, and external services
            </h2>
            <p className="mt-3 leading-7">
              LetterWise may display clearly identified advertising, use
              affiliate links, or link to external websites. If you make a
              purchase through a disclosed affiliate link, LetterWise may earn
              a commission at no additional cost to you. External services
              operate under their own terms and privacy practices. Commercial
              relationships do not determine LetterWise word lists, puzzle
              answers, rankings, or editorial conclusions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Independent service
            </h2>
            <p className="mt-3 leading-7">
              LetterWise is an independent website. References to third-party
              games or services are descriptive and do not imply sponsorship,
              affiliation, or endorsement by their owners.
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
