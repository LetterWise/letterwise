import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://www.tryletterwise.com/resources/best-vocabulary-tools-for-adults";
const publishedDate = "2026-10-11";
const publishedDateTime = "2026-10-11T00:00:00+08:00";

export const metadata: Metadata = {
  title: "Vocabulary Tools for Adults: 5 Options Compared",
  description:
    "Compare LetterWise, Vocabulary.com, Anki, Grammarly, and Coursera by learning method, cost, setup, and the vocabulary goal each serves best.",
  alternates: {
    canonical: "/resources/best-vocabulary-tools-for-adults",
  },
  authors: [{ name: "LetterWise" }],
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "LetterWise",
    title: "Vocabulary Tools for Adults: 5 Options Compared",
    description:
      "A practical comparison of five tools for discovering, remembering, and confidently using new words.",
    publishedTime: publishedDateTime,
    modifiedTime: publishedDateTime,
  },
  twitter: {
    card: "summary",
    title: "Vocabulary Tools for Adults: 5 Options Compared",
    description:
      "Choose a vocabulary tool by goal: discovery, guided practice, retention, writing, or structured study.",
  },
};

const comparisonRows = [
  {
    name: "LetterWise",
    bestFor: "Free word discovery and low-pressure daily practice",
    method: "Word searches, pattern lists, guides, and puzzles",
    access: "No account or payment required for the tools in this guide",
    tradeoff: "Not a personalized course or spaced-review system",
  },
  {
    name: "Vocabulary.com",
    bestFor: "A dedicated vocabulary trainer with guided questions",
    method: "Adaptive questions, dictionary explanations, and word lists",
    access:
      "Learner account required; basic access is limited, with paid plans for unlimited trainer questions",
    tradeoff: "The basic account allows only 10 VocabTrainer questions per day",
  },
  {
    name: "Anki",
    bestFor: "Remembering a chosen set of words over time",
    method: "Custom flashcards with scheduled reviews",
    access:
      "Desktop and Android options are free; sync needs a free account; the official iOS app is paid",
    tradeoff: "You must choose or create useful cards and maintain the habit",
  },
  {
    name: "Grammarly",
    bestFor: "Using words more accurately in real writing",
    method: "In-context feedback on correctness, clarity, and tone",
    access: "Account required; Free and paid Pro plans are available",
    tradeoff: "It is a writing assistant, not a vocabulary curriculum",
  },
  {
    name: "Coursera",
    bestFor: "Structured learning tied to a subject or career goal",
    method: "Courses, modules, assessments, and longer programs",
    access:
      "Account required; many courses offer a free preview, while full access or certificates may require payment",
    tradeoff: "More time-intensive, and access terms vary by course",
  },
] as const;

const practiceWeeks = [
  {
    week: "Week 1",
    title: "Choose a useful vocabulary target",
    actions: [
      "Pick one setting where better vocabulary would help: work emails, a field of study, reading, conversation, or word games.",
      "Collect 15 to 20 words from material you already encounter. Use LetterWise word lists or Word Finder when a letter pattern sparks a useful lead; use a subject source or Vocabulary.com for meaning and context.",
      "For every word, write a plain-language definition and one sentence connected to your life or work. Skip words you cannot imagine using.",
    ],
  },
  {
    week: "Week 2",
    title: "Turn recognition into recall",
    actions: [
      "Add three to five useful words a day to Anki, or use Vocabulary.com’s trainer if you prefer ready-made questions.",
      "Make each prompt require an answer: recall the word from a definition, explain the word without copying, or complete a sentence from memory.",
      "Review the cards due that day before adding more. Edit any card that feels vague, overloaded, or too easy to guess from a clue.",
    ],
  },
  {
    week: "Week 3",
    title: "Use the words in real writing",
    actions: [
      "Choose five target words and use each in a short email, journal entry, explanation, or practice paragraph.",
      "Run the writing through Grammarly if you use it. Read every suggestion and decide whether it improves correctness or clarity instead of accepting rewrites automatically.",
      "Return unclear words to your review list with a better example sentence. Keep words that feel natural; retire words that do not serve your original goal.",
    ],
  },
  {
    week: "Week 4",
    title: "Transfer the vocabulary to a bigger context",
    actions: [
      "Complete a relevant Coursera preview or course module, read a substantial article, or follow another structured lesson in your target subject.",
      "Notice which target words appear and which related words you still need. Add only the most useful discoveries to your review routine.",
      "Finish with a no-notes check: define each target word, use it in a fresh sentence, and mark it as comfortable or not yet. Use that result to plan the next month.",
    ],
  },
] as const;

const officialSources = [
  {
    title: "Vocabulary.com: individual learner subscriptions",
    href: "https://www.vocabulary.com/help/the-basics/what-is-an-individual-learner-subscription/",
    note: "Basic-account limits, trainer access, lists, and learner features.",
  },
  {
    title: "Vocabulary.com: subscription plan FAQ",
    href: "https://www.vocabulary.com/help/my-account/subscription-plan-faq/",
    note: "Basic and paid-plan differences.",
  },
  {
    title: "Anki: official product and download page",
    href: "https://apps.ankiweb.net/",
    note: "Review method, desktop availability, synchronization, and mobile options.",
  },
  {
    title: "Anki manual: syncing with AnkiWeb",
    href: "https://docs.ankiweb.net/manual/syncing",
    note: "Free account requirement for cross-device sync and online study.",
  },
  {
    title: "Grammarly: plans",
    href: "https://www.grammarly.com/plans",
    note: "Free and paid plan availability and included writing features.",
  },
  {
    title: "Grammarly: product features",
    href: "https://www.grammarly.com/features",
    note: "Correctness, clarity, tone, and writing-feedback features.",
  },
  {
    title: "Coursera: course catalog and learning options",
    href: "https://www.coursera.org/",
    note: "Courses, programs, categories, free learning options, and certificates.",
  },
  {
    title: "Coursera Help Center: how to preview a course",
    href: "https://www.coursera.support/s/article/learner-000002293?language=en_US",
    note: "Current preview access and when an upgrade is needed.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "Vocabulary Tools for Adults: 5 Options Compared",
      description:
        "A practical comparison of LetterWise, Vocabulary.com, Anki, Grammarly, and Coursera for adult vocabulary learning.",
      datePublished: publishedDate,
      dateModified: publishedDate,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
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
      articleSection: "Vocabulary learning",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "Resources",
          item: "https://www.tryletterwise.com/resources",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vocabulary Tools for Adults Compared",
          item: pageUrl,
        },
      ],
    },
  ],
};

const externalLinkClass =
  "font-black text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900";

export default function BestVocabularyToolsForAdultsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-10 text-white">
          <div className="mx-auto max-w-5xl">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm font-bold text-violet-100"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/resources" className="hover:text-white">
                Resources
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-white">
                Vocabulary tools for adults
              </span>
            </nav>

            <p className="mt-8 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
              Vocabulary learning guide
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Vocabulary tools for adults: 5 options compared
            </h1>

            <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-violet-50 sm:text-xl">
              The right tool depends on the job: discovering words, practicing
              them, remembering them, using them in writing, or following a
              structured course. This guide helps you choose without paying for
              features you do not need.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-violet-100">
              <span>
                Published{" "}
                <time dateTime={publishedDate}>October 11, 2026</time>
              </span>
              <span>
                Updated{" "}
                <time dateTime={publishedDate}>October 11, 2026</time>
              </span>
            </div>

            <Link
              href="#quick-comparison"
              className="mt-8 inline-block rounded-full bg-amber-300 px-8 py-4 font-black text-slate-950 hover:bg-amber-200"
            >
              Compare the five tools
            </Link>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 py-12">
          <section className="mx-auto max-w-4xl text-lg leading-8 text-slate-700">
            <p className="text-xl font-semibold leading-9 text-slate-900">
              There is no single best vocabulary app for every adult learner.
              A memory tool can help you retain a word but may not show how it
              sounds in a work email. A writing assistant can catch a mistake
              but may not help you recall the word next month.
            </p>

            <p className="mt-5">
              The most effective choice is usually a small system: one place to
              discover worthwhile words, one way to recall them, and one regular
              reason to use them. The five options below serve different parts
              of that system.
            </p>

            <div className="mt-8 rounded-3xl border border-violet-200 bg-violet-50 p-7">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-700">
                Editorial note
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                These recommendations are editorial. No company paid for a
                placement or determined the order. We compared current official
                product pages and documentation; we did not present this as a
                hands-on product test.
              </p>
            </div>
          </section>

          <section id="quick-comparison" className="mt-16 scroll-mt-28">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-600">
                Quick comparison
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Choose by the learning problem you need to solve
              </h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">
                Start with the “best for” column. The access notes matter if you
                want a no-account option or need to know where payment may enter
                the picture.
              </p>
            </div>

            <div
              aria-label="Scrollable comparison of vocabulary tools"
              className="mt-8 overflow-x-auto rounded-3xl border border-violet-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              role="region"
              tabIndex={0}
            >
              <table className="min-w-[980px] border-collapse text-left">
                <thead className="bg-violet-100 text-sm uppercase tracking-wide text-violet-950">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-black">
                      Tool
                    </th>
                    <th scope="col" className="px-5 py-4 font-black">
                      Best for
                    </th>
                    <th scope="col" className="px-5 py-4 font-black">
                      Main learning action
                    </th>
                    <th scope="col" className="px-5 py-4 font-black">
                      Account and payment
                    </th>
                    <th scope="col" className="px-5 py-4 font-black">
                      Main tradeoff
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-violet-100 text-sm leading-6 text-slate-700">
                  {comparisonRows.map((row) => (
                    <tr key={row.name} className="align-top">
                      <th
                        scope="row"
                        className="px-5 py-5 text-base font-black text-slate-950"
                      >
                        {row.name}
                      </th>
                      <td className="px-5 py-5">{row.bestFor}</td>
                      <td className="px-5 py-5">{row.method}</td>
                      <td className="px-5 py-5">{row.access}</td>
                      <td className="px-5 py-5">{row.tradeoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-600">
              Selection methodology
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              How these tools were selected
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
              <p>
                We chose tools that solve distinct adult-learning jobs rather
                than five products that do the same thing. The comparison covers
                discovery, guided practice, recall, written application, and
                structured study.
              </p>
              <p>
                We reviewed each provider’s official product, plan, and help
                pages on October 11, 2026. We compared the learning action it
                asks you to perform, the effort needed to set it up, whether an
                account or payment may be required, and the main limitation a
                learner should know before committing time or money.
              </p>
              <p>
                This is a practical editorial comparison, not a controlled
                learning study or a claim that we completed every product. Plan
                details can change, so confirm current access and checkout terms
                on the provider’s site before paying.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-600">
                Detailed picks
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Five vocabulary tools, each with a different job
              </h2>
            </div>

            <div className="mt-8 space-y-6">
              <section className="rounded-[2rem] border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                      Best free starting point
                    </p>
                    <h3 className="mt-2 text-3xl font-black text-slate-950">
                      1. LetterWise
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">
                    No account or payment
                  </span>
                </div>

                <div className="mt-6 grid gap-7 lg:grid-cols-[1.5fr_1fr]">
                  <div className="space-y-4 leading-7 text-slate-700">
                    <p>
                      LetterWise is most useful when curiosity begins with a
                      letter pattern: a word you almost remember, an ending you
                      keep noticing, or a cluster of letters from a puzzle. Its
                      Word Finder, browsable word lists, guides, and daily puzzle
                      create quick opportunities to notice and work with words.
                    </p>
                    <p>
                      That makes it a low-friction discovery and practice tool.
                      You can explore without creating an account, then move the
                      words that matter into a deliberate review or writing
                      routine.
                    </p>
                    <p>
                      <strong className="font-black text-slate-950">
                        Tradeoff:
                      </strong>{" "}
                      LetterWise does not currently provide a personalized
                      vocabulary syllabus, progress dashboard, or spaced-review
                      scheduler. It works best as the discovery and practice
                      layer of a broader routine.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-violet-50 p-6">
                    <p className="font-black text-violet-900">Good next steps</p>
                    <div className="mt-4 flex flex-col gap-3">
                      <Link
                        href="/word-finder"
                        className="rounded-full bg-violet-600 px-5 py-3 text-center font-black text-white hover:bg-violet-700"
                      >
                        Try Word Finder
                      </Link>
                      <Link
                        href="/word-lists"
                        className="rounded-full bg-white px-5 py-3 text-center font-black text-violet-800 ring-1 ring-violet-200 hover:bg-violet-100"
                      >
                        Browse word lists
                      </Link>
                      <Link
                        href="/daily-word-puzzle"
                        className="rounded-full bg-white px-5 py-3 text-center font-black text-violet-800 ring-1 ring-violet-200 hover:bg-violet-100"
                      >
                        Play the daily puzzle
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-[2rem] border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                      Best dedicated vocabulary trainer
                    </p>
                    <h3 className="mt-2 text-3xl font-black text-slate-950">
                      2. Vocabulary.com
                    </h3>
                  </div>
                  <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-black text-amber-900">
                    Account; optional paid plan
                  </span>
                </div>

                <div className="mt-6 space-y-4 leading-7 text-slate-700">
                  <p>
                    Vocabulary.com is the most direct fit here if your main goal
                    is guided vocabulary practice. Its official learner pages
                    describe an adaptive VocabTrainer, a dictionary, curated
                    lists, custom lists and flashcards, progress information,
                    and Vocabulary Jams.
                  </p>
                  <p>
                    A basic learner account can use the wider word-learning
                    tools but is limited to 10 VocabTrainer questions a day.
                    Paid learner subscriptions are available in 1-, 6-, and
                    12-month periods for unlimited trainer questions. That clear
                    boundary makes the free account suitable for a small daily
                    habit, while frequent practice may require payment.
                  </p>
                  <p>
                    <strong className="font-black text-slate-950">
                      Tradeoff:
                    </strong>{" "}
                    The ready-made experience is easier to start than building
                    your own flashcards, but the free trainer limit may interrupt
                    longer sessions. It also remains important to use learned
                    words outside the platform.
                  </p>
                  <a
                    href="https://www.vocabulary.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    Visit the official Vocabulary.com site
                  </a>
                </div>
              </section>

              <section className="rounded-[2rem] border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                      Best for long-term recall
                    </p>
                    <h3 className="mt-2 text-3xl font-black text-slate-950">
                      3. Anki
                    </h3>
                  </div>
                  <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-black text-sky-900">
                    Free core options; paid official iOS app
                  </span>
                </div>

                <div className="mt-6 space-y-4 leading-7 text-slate-700">
                  <p>
                    Anki is a strong choice when you already know which words
                    deserve to be remembered. You review flashcards, rate your
                    recall, and let Anki schedule the next review. Cards can also
                    include audio, images, video, and scientific markup.
                  </p>
                  <p>
                    The desktop version is free on major computer platforms.
                    The official site lists AnkiDroid for Android as free and the
                    official AnkiMobile iOS app as a purchase. A free AnkiWeb
                    account is required if you want to synchronize across
                    devices or study through AnkiWeb; local desktop use does not
                    depend on that sync account.
                  </p>
                  <p>
                    <strong className="font-black text-slate-950">
                      Tradeoff:
                    </strong>{" "}
                    Anki supplies the review system, not the lesson. You still
                    need to select worthwhile words and write cards that test
                    meaning or usage clearly. A large copied deck can create a
                    busy routine without helping your real communication goals.
                  </p>
                  <a
                    href="https://apps.ankiweb.net/"
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    Visit the official Anki site
                  </a>
                </div>
              </section>

              <section className="rounded-[2rem] border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                      Best for applying vocabulary in writing
                    </p>
                    <h3 className="mt-2 text-3xl font-black text-slate-950">
                      4. Grammarly
                    </h3>
                  </div>
                  <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-black text-amber-900">
                    Account; Free and paid plans
                  </span>
                </div>

                <div className="mt-6 space-y-4 leading-7 text-slate-700">
                  <p>
                    Grammarly belongs in this list for application rather than
                    memorization. Its official feature pages emphasize help with
                    typos, punctuation, grammar, commonly confused words,
                    clarity, and tone. That feedback can be useful when you test
                    new vocabulary in emails, documents, and practice writing.
                  </p>
                  <p>
                    Grammarly requires an account. Its current individual plans
                    include a Free option and a paid Pro option; the paid plan
                    adds features such as full-sentence rewrites, tone
                    adjustments, and more personalized suggestions. Check the
                    official plan page for current regional pricing and trial
                    terms before upgrading.
                  </p>
                  <p>
                    <strong className="font-black text-slate-950">
                      Tradeoff:
                    </strong>{" "}
                    Writing feedback is not a sequenced vocabulary course, and
                    accepting a rewrite is not the same as learning why a word
                    works. Use suggestions as prompts to think, then keep your
                    intended meaning and voice in charge.
                  </p>
                  <a
                    href="https://www.grammarly.com/features"
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    Review Grammarly’s official features
                  </a>
                </div>
              </section>

              <section className="rounded-[2rem] border border-violet-100 bg-white p-7 shadow-sm sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                      Best for structured, subject-based study
                    </p>
                    <h3 className="mt-2 text-3xl font-black text-slate-950">
                      5. Coursera
                    </h3>
                  </div>
                  <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-black text-amber-900">
                    Account; free previews and paid access vary
                  </span>
                </div>

                <div className="mt-6 space-y-4 leading-7 text-slate-700">
                  <p>
                    Coursera is the different kind of choice: it can place words
                    inside a complete subject. Its catalog includes courses,
                    Specializations, Professional Certificates, and degrees from
                    universities and companies, including a Language Learning
                    category. This is useful when vocabulary is part of a larger
                    goal such as professional communication, academic reading,
                    or learning another language.
                  </p>
                  <p>
                    An account is needed to enroll. Coursera says many courses
                    offer a no-cost preview, commonly the first module, and some
                    courses offer broader free access without a certificate.
                    Full content, graded work beyond the preview, or a certificate
                    may require a course payment or subscription. Financial aid
                    may be available for eligible learners, and exact terms vary
                    by course and location.
                  </p>
                  <p>
                    <strong className="font-black text-slate-950">
                      Tradeoff:
                    </strong>{" "}
                    A course asks for more time than a daily word tool, and the
                    format and access terms differ across offerings. Preview the
                    course first, read its syllabus, and pay only if the full
                    program matches a specific goal.
                  </p>
                  <a
                    href="https://www.coursera.org/browse/language-learning"
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    Browse Coursera’s official language-learning catalog
                  </a>
                </div>
              </section>
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-600">
              Decision guide
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Which vocabulary tool should you choose?
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">
                  If you want to start without an account
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Begin with LetterWise. Explore words and patterns, then keep a
                  short paper or local note list. Add another tool only when you
                  can name the missing job.
                </p>
              </div>

              <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">
                  If you want ready-made vocabulary practice
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Choose Vocabulary.com. Its basic account is enough to test a
                  small daily habit before considering unlimited trainer access.
                </p>
              </div>

              <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">
                  If forgetting is the main problem
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Choose Anki, but keep the deck narrow. Ten well-chosen words
                  connected to your work or reading are more useful than hundreds
                  you never expect to use.
                </p>
              </div>

              <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">
                  If you know words but hesitate to use them
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Write with the words first, then use Grammarly to review
                  correctness and clarity. A feedback tool is most useful after
                  you have produced your own sentence.
                </p>
              </div>

              <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm sm:col-span-2">
                <h3 className="text-xl font-black text-slate-950">
                  If vocabulary is part of a bigger academic or career goal
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Preview a relevant Coursera course. Let the course supply the
                  subject context, use Anki for the terms that matter, and use
                  real writing or discussion to make the vocabulary active.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">
              Four-week practice plan
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
              Build a vocabulary routine that ends in real use
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Plan for about 15 to 20 minutes on most days. The aim is not to
              collect the biggest list; it is to move a small set of relevant
              words from “I recognize that” to “I can use that clearly.”
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {practiceWeeks.map((item) => (
                <section
                  key={item.week}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
                    {item.week}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {item.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    {item.actions.map((action) => (
                      <li key={action} className="flex gap-3">
                        <span aria-hidden="true" className="text-amber-300">
                          ●
                        </span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-950">
              A sensible starting combination
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
              <p>
                If you are unsure, start with two layers rather than five. Use
                LetterWise or Vocabulary.com to discover and investigate words,
                then use either Anki for recall or a weekly writing session for
                application. Add Grammarly when you need writing feedback and a
                Coursera course when you need a larger structure.
              </p>
              <p>
                Keep the routine for four weeks before buying a plan. The best
                signal is not how many features a product offers; it is whether
                you are still reviewing and using relevant words after the
                novelty wears off.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/word-finder"
                className="rounded-full bg-amber-300 px-7 py-3 font-black text-slate-950 hover:bg-amber-200"
              >
                Start with Word Finder
              </Link>
              <Link
                href="/word-guides"
                className="rounded-full bg-violet-100 px-7 py-3 font-black text-violet-800 hover:bg-violet-200"
              >
                Browse word guides
              </Link>
              <Link
                href="/resources"
                className="rounded-full bg-white px-7 py-3 font-black text-violet-800 ring-1 ring-violet-200 hover:bg-violet-50"
              >
                View all resources
              </Link>
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-4xl border-t border-violet-100 pt-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-600">
              Official sources
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Product information checked for this guide
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              These are ordinary links to each provider’s official site and
              documentation. Access, features, and pricing can change after the
              publication date.
            </p>

            <ol className="mt-7 grid gap-4 sm:grid-cols-2">
              {officialSources.map((source) => (
                <li
                  key={source.href}
                  className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm"
                >
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className={externalLinkClass}
                  >
                    {source.title}
                  </a>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {source.note}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-7 text-sm leading-6 text-slate-500">
              LetterWise feature and methodology details are described on the{" "}
              <Link
                href="/about"
                className="font-black text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                About LetterWise
              </Link>{" "}
              page.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
