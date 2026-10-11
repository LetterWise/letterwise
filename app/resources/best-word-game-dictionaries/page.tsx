import type { Metadata } from "next";
import Link from "next/link";

const pagePath = "/resources/best-word-game-dictionaries";
const pageUrl = `https://www.tryletterwise.com${pagePath}`;
const pageTitle =
  "Word Game Dictionaries Compared for Scrabble, Families, and Crosswords";
const pageDescription =
  "Compare trusted word-game references for North American Scrabble, international tournament play, family games, and crossword solving.";

export const metadata: Metadata = {
  title: "Word Game Dictionaries Compared",
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "article",
    publishedTime: "2026-10-11",
    modifiedTime: "2026-10-11",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

const comparisonRows = [
  {
    reference: "Official SCRABBLE Players Dictionary, 7th edition",
    bestFor: "Casual North American Scrabble",
    rules: "Home and recreational play in the U.S. and Canada",
    definitions: "Yes, brief definitions",
    limitation: "Not the full North American tournament list",
  },
  {
    reference: "NASPA Word List 2023 Edition (NWL2023)",
    bestFor: "North American tournament Scrabble",
    rules: "NASPA competitive play in the U.S. and Canada",
    definitions: "No; it is an adjudication list",
    limitation: "Member access and licensing restrictions apply",
  },
  {
    reference: "Collins Official SCRABBLE Words, 7th edition (CSW24)",
    bestFor: "International tournament Scrabble",
    rules: "WESPA and other CSW-based play",
    definitions: "No; words are listed alphabetically",
    limitation: "Much broader than a family dictionary",
  },
  {
    reference: "Collins SCRABBLE Family Dictionary, 6th edition",
    bestFor: "Families who want meanings",
    rules: "Recreational and family play",
    definitions: "Yes, for main entries",
    limitation: "Covers playable words from two to eight letters",
  },
  {
    reference: "Chambers Crossword Dictionary, 4th edition",
    bestFor: "Quick, cryptic, and general-knowledge crosswords",
    rules: "Crossword solving rather than game adjudication",
    definitions: "Synonyms, topic material, and clue help",
    limitation: "Not an official Scrabble word list",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  mainEntityOfPage: pageUrl,
  url: pageUrl,
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  author: {
    "@type": "Organization",
    name: "LetterWise",
    url: "https://www.tryletterwise.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "LetterWise",
    url: "https://www.tryletterwise.com",
  },
  articleSection: "Word Guides",
  isAccessibleForFree: true,
  keywords: [
    "word game dictionaries",
    "Scrabble dictionary",
    "NASPA Word List",
    "Collins Scrabble Words",
    "crossword dictionary",
  ],
  citation: [
    "https://scrabbleplayers.org/w/Official_SCRABBLE_Players_Dictionary",
    "https://scrabbleplayers.org/w/NWL2023",
    "https://scrabbleplayers.org/w/SOWPODS",
    "https://collins.co.uk/products/9780008660789",
    "https://collins.co.uk/products/9780008660758",
    "https://chambers.co.uk/book/chambers-crossword-dictionary/",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.tryletterwise.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Word Guides",
      item: "https://www.tryletterwise.com/word-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Word Game Dictionaries Compared",
      item: pageUrl,
    },
  ],
};

const externalLinkClass =
  "font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900";
const internalLinkClass =
  "font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900";

export default function BestWordGameDictionariesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Independent Word Reference Guide
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Word Game Dictionaries Compared
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium leading-8 text-violet-50">
            The right reference depends on the game, region, and whether you
            need official adjudication, friendly definitions, or help decoding
            crossword clues.
          </p>

          <p className="mt-5 text-sm font-semibold text-violet-100">
            Published and reviewed October 11, 2026
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="hover:text-violet-700" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link className="hover:text-violet-700" href="/word-guides">
                Word Guides
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-slate-900">
              Dictionary Guide
            </li>
          </ol>
        </nav>

        <section className="mx-auto mt-10 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            The quick answer
          </h2>
          <p className="mt-4">
            For a casual Scrabble game in the United States or Canada, the
            <strong> Official SCRABBLE Players Dictionary, 7th edition</strong>
            {" "}is the clearest starting point. For a NASPA tournament, use the
            <strong> current NASPA Word List</strong>. For international
            tournament play, use the <strong>current Collins list</strong>. If
            children want to know what a word means, choose the
            <strong> Collins SCRABBLE Family Dictionary</strong>. For crossword
            clues, use the <strong>Chambers Crossword Dictionary</strong>{" "}
            instead of a Scrabble list.
          </p>

          <aside className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-7 text-slate-800">
            <h2 className="text-2xl font-black text-slate-950">
              Check the rules before challenging a word
            </h2>
            <p className="mt-3">
              LetterWise is a broad word-finding resource, not an official
              adjudication list. A word appearing here does not guarantee that
              it is legal in a particular game. Agree on a dictionary before
              play, and confirm the organizer, game, region, and edition when a
              ruling matters.
            </p>
          </aside>
        </section>

        <section className="mt-14 rounded-3xl border border-violet-100 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-3xl font-black text-slate-950">
            Compare the five references
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            “Best” here means best matched to a job. A friendly dictionary with
            definitions and a tournament lexicon without definitions solve
            different problems.
          </p>

          <div
            aria-label="Scrollable comparison of word game dictionaries"
            className="mt-7 overflow-x-auto focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            role="region"
            tabIndex={0}
          >
            <table className="w-full min-w-[960px] border-collapse text-left">
              <caption className="sr-only">
                Comparison of five dictionaries and official word lists for
                Scrabble, family games, and crosswords
              </caption>
              <thead>
                <tr className="border-b border-violet-200 text-sm uppercase tracking-wide text-slate-500">
                  <th scope="col" className="px-3 py-4">Reference</th>
                  <th scope="col" className="px-3 py-4">Best for</th>
                  <th scope="col" className="px-3 py-4">Rules and region</th>
                  <th scope="col" className="px-3 py-4">Definitions?</th>
                  <th scope="col" className="px-3 py-4">Important limit</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.reference}
                    className="border-b border-violet-50 align-top"
                  >
                    <th
                      scope="row"
                      className="px-3 py-5 font-black text-slate-950"
                    >
                      {row.reference}
                    </th>
                    <td className="px-3 py-5 text-slate-700">{row.bestFor}</td>
                    <td className="px-3 py-5 text-slate-700">{row.rules}</td>
                    <td className="px-3 py-5 text-slate-700">
                      {row.definitions}
                    </td>
                    <td className="px-3 py-5 text-slate-700">
                      {row.limitation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
              Detailed comparison
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
              Which dictionary fits your game?
            </h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              Start with the rules you must follow, then decide whether you
              also want definitions or study help.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <article className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-600">
                    Best for casual North American play
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-slate-950">
                    Official SCRABBLE Players Dictionary, 7th edition
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-black text-violet-800">
                  Definitions included
                </span>
              </div>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Why it fits
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    This is the approachable home reference for U.S. and
                    Canadian players. It gives brief definitions and parts of
                    speech, so it can answer both “can we play it?” and “what
                    does it mean?” without turning a family game into a study of
                    a bare word list. The seventh edition was released in 2022.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Know before choosing it
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    Its main entries cover words from two through eight letters,
                    along with some longer inflections. It deliberately omits
                    some entries and is not the complete competitive lexicon.
                    Serious NASPA play uses NWL2023 instead.
                  </p>
                </div>
              </div>

              <a
                className={`${externalLinkClass} mt-6 inline-block`}
                href="https://scrabbleplayers.org/w/Official_SCRABBLE_Players_Dictionary"
                rel="noreferrer"
                target="_blank"
              >
                Read NASPA’s OSPD overview
              </a>
            </article>

            <article className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-600">
                    Best for North American tournament play
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-slate-950">
                    NASPA Word List 2023 Edition (NWL2023)
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-black text-violet-800">
                  Official NASPA lexicon
                </span>
              </div>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Why it fits
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    NWL2023 is the current official lexicon for NASPA
                    competitive play in the United States and Canada. It took
                    effect on February 29, 2024, replacing NWL2020. Its broader
                    coverage makes it the appropriate authority when a NASPA
                    tournament challenge must be resolved.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Know before choosing it
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    This is an adjudication and study list, not a family
                    dictionary. Access to the print and downloadable editions
                    is limited to NASPA members, and software use is subject to
                    licensing. Follow the tournament director’s stated lexicon
                    rather than assuming every event uses the same list.
                  </p>
                </div>
              </div>

              <a
                className={`${externalLinkClass} mt-6 inline-block`}
                href="https://scrabbleplayers.org/w/NWL2023"
                rel="noreferrer"
                target="_blank"
              >
                Check the official NWL2023 page
              </a>
            </article>

            <article className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-600">
                    Best for international tournament play
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-slate-950">
                    Collins Official SCRABBLE Words, 7th edition (CSW24)
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-black text-violet-800">
                  WESPA-endorsed
                </span>
              </div>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Why it fits
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    The seventh edition is the comprehensive international list
                    endorsed by WESPA. It combines World English and lists
                    playable words from two through fifteen letters. The CSW24
                    lexicon took effect for international play on January 1,
                    2025.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Know before choosing it
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    The entries are presented without definitions, which makes
                    the book useful for checking and study but less friendly
                    for younger players who want meanings. Its international
                    scope also means it will not always agree with the North
                    American NWL.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <a
                  className={externalLinkClass}
                  href="https://collins.co.uk/products/9780008660789"
                  rel="noreferrer"
                  target="_blank"
                >
                  View the Collins edition details
                </a>
                <a
                  className={externalLinkClass}
                  href="https://wespa.org/wp-content/uploads/2024/09/WESPA_Initiation_Kit_2024.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  Read the WESPA CSW24 introduction
                </a>
              </div>
            </article>

            <article className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-600">
                    Best for families who want definitions
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-slate-950">
                    Collins SCRABBLE Family Dictionary, 6th edition
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-black text-violet-800">
                  Family-friendly
                </span>
              </div>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Why it fits
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    This edition is designed for regular recreational players
                    and families playing with children. It includes valid words
                    from two through eight letters and gives a short definition
                    for each main entry, which helps turn a disputed play into
                    a vocabulary moment.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Know before choosing it
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    Choose it for meanings and shared play, not for official
                    tournament adjudication. The sixth edition was published in
                    August 2024 and is based on the international Collins
                    Scrabble material, so North American house rules may still
                    point to a different authority.
                  </p>
                </div>
              </div>

              <a
                className={`${externalLinkClass} mt-6 inline-block`}
                href="https://collins.co.uk/products/9780008660758"
                rel="noreferrer"
                target="_blank"
              >
                View the Collins Family Dictionary details
              </a>
            </article>

            <article className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-600">
                    Best for crossword solving
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-slate-950">
                    Chambers Crossword Dictionary, 4th edition
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-black text-violet-800">
                  Clue-focused
                </span>
              </div>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Why it fits
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    Chambers organizes material around how crossword solvers
                    search. The fourth edition offers more than 500,000 possible
                    solutions, crossword code words, synonyms, topic lists,
                    clue-type explanations, and words organized by length.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    Know before choosing it
                  </h4>
                  <p className="mt-3 leading-7 text-slate-700">
                    Crossword usefulness and Scrabble legality are different
                    questions. Phrases, abbreviations, symbols, names, and
                    cryptic building blocks can help solve a clue without being
                    playable under Scrabble rules. Use this alongside—not in
                    place of—the lexicon required for a board game.
                  </p>
                </div>
              </div>

              <a
                className={`${externalLinkClass} mt-6 inline-block`}
                href="https://chambers.co.uk/book/chambers-crossword-dictionary/"
                rel="noreferrer"
                target="_blank"
              >
                View the official Chambers overview
              </a>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            A simple way to choose
          </h2>

          <ol className="mt-6 space-y-5">
            <li className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
              <p className="font-black text-slate-950">
                1. Start with the organizer’s rules.
              </p>
              <p className="mt-2">
                An official event’s named lexicon outranks personal preference.
                Use NWL2023 for current NASPA play and CSW24 where the event
                follows the current WESPA/Collins list.
              </p>
            </li>
            <li className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
              <p className="font-black text-slate-950">
                2. For a home game, match the region.
              </p>
              <p className="mt-2">
                The OSPD is the practical North American choice. Collins is the
                natural international choice. If your game app names its own
                dictionary, use the app’s current rules instead.
              </p>
            </li>
            <li className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
              <p className="font-black text-slate-950">
                3. Decide whether meanings matter.
              </p>
              <p className="mt-2">
                A bare tournament list answers legality efficiently. A
                dictionary with definitions is better for children, vocabulary
                building, and relaxed play.
              </p>
            </li>
            <li className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
              <p className="font-black text-slate-950">
                4. Treat crosswords as a separate job.
              </p>
              <p className="mt-2">
                Crossword solvers need synonym networks, clue conventions, and
                general-knowledge lists. That is why Chambers belongs in this
                comparison even though it should not judge a Scrabble move.
              </p>
            </li>
          </ol>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            Why two good references can disagree
          </h2>
          <p className="mt-4">
            A dictionary is built for a particular audience and date. North
            American and international lexicons draw from different source
            traditions. Tournament lists include entries that a family edition
            may omit, while a family dictionary adds definitions that a compact
            adjudication list does not need.
          </p>
          <p className="mt-4">
            Updates also take effect on different schedules. NWL2023 became
            official for NASPA play in February 2024, while CSW24 took effect in
            January 2025. A digital game can maintain another list entirely.
            When a word matters, check the edition named in the current rules
            rather than relying on a general web search.
          </p>
        </section>

        <section className="mt-16 rounded-3xl bg-violet-100 p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-950">
                Find candidates first, then verify them
              </h2>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                LetterWise can narrow a rack, pattern, or group of letters. Use
                the official reference selected for your game before making a
                challenge or recording a tournament result.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                className="rounded-full bg-violet-600 px-6 py-3 font-black text-white hover:bg-violet-700"
                href="/word-finder"
              >
                Open Word Finder
              </Link>
              <Link
                className="rounded-full bg-white px-6 py-3 font-black text-violet-700 hover:bg-violet-50"
                href="/word-lists"
              >
                Browse Word Lists
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-950">
            How this guide was prepared
          </h2>
          <p className="mt-4">
            This is a source-based editorial comparison, not a hands-on review
            of the physical books. LetterWise checked the publisher and
            governing-body information available on October 11, 2026 and
            compared each reference by authority, region, intended audience,
            word coverage, definitions, and primary use.
          </p>
          <p className="mt-4">
            The comparison prioritizes suitability over size. A longer list is
            not automatically better: the correct choice is the reference that
            answers the question you actually have. For more on LetterWise’s
            own broad word data and its limits, read the
            {" "}
            <Link className={internalLinkClass} href="/about">
              methodology on the About page
            </Link>
            .
          </p>

          <div className="mt-8 rounded-3xl border border-violet-100 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-black text-slate-950">
              Official sources
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  className={externalLinkClass}
                  href="https://scrabbleplayers.org/w/Official_SCRABBLE_Players_Dictionary"
                  rel="noreferrer"
                  target="_blank"
                >
                  NASPA: Official SCRABBLE Players Dictionary overview
                </a>
              </li>
              <li>
                <a
                  className={externalLinkClass}
                  href="https://scrabbleplayers.org/w/NWL2023"
                  rel="noreferrer"
                  target="_blank"
                >
                  NASPA: NWL2023 status, access, and effective date
                </a>
              </li>
              <li>
                <a
                  className={externalLinkClass}
                  href="https://scrabbleplayers.org/w/SOWPODS"
                  rel="noreferrer"
                  target="_blank"
                >
                  NASPA: Collins Scrabble Words editions and effective dates
                </a>
              </li>
              <li>
                <a
                  className={externalLinkClass}
                  href="https://collins.co.uk/products/9780008660789"
                  rel="noreferrer"
                  target="_blank"
                >
                  Collins: Official SCRABBLE Words, 7th edition
                </a>
              </li>
              <li>
                <a
                  className={externalLinkClass}
                  href="https://wespa.org/wp-content/uploads/2024/09/WESPA_Initiation_Kit_2024.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  WESPA: CSW24 Initiation Kit
                </a>
              </li>
              <li>
                <a
                  className={externalLinkClass}
                  href="https://collins.co.uk/products/9780008660758"
                  rel="noreferrer"
                  target="_blank"
                >
                  Collins: SCRABBLE Family Dictionary, 6th edition
                </a>
              </li>
              <li>
                <a
                  className={externalLinkClass}
                  href="https://chambers.co.uk/book/chambers-crossword-dictionary/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Chambers: Crossword Dictionary, 4th edition
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-violet-600 px-7 py-3 font-black text-white hover:bg-violet-700"
              href="/word-guides"
            >
              Explore More Word Guides
            </Link>
            <Link
              className="rounded-full border border-violet-200 bg-white px-7 py-3 font-black text-violet-700 hover:bg-violet-50"
              href="/how-to-use-word-finder"
            >
              Learn How Word Finder Works
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
