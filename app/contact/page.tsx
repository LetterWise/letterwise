export const metadata = {
  title: "Contact",
  description:
    "Contact LetterWise about word tools, word lists, daily puzzles, feedback, or suggestions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-700">
          Contact
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Contact LetterWise
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Have feedback, a word list suggestion, or an idea for a new word tool?
          You can contact LetterWise using the email link below.
        </p>

        <div className="mt-10 rounded-3xl border border-violet-100 bg-white p-6">
          <h2 className="text-2xl font-semibold">Email</h2>

          <p className="mt-3 leading-7 text-slate-700">
            For now, LetterWise does not use a contact form. This keeps the site
            simple and avoids collecting unnecessary personal information.
          </p>

          <a
            href="mailto:josiassmith@hotmail.com?subject=LetterWise%20Feedback"
            className="mt-6 inline-block rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Email LetterWise
          </a>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="/daily-word-puzzle"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Daily Word Puzzle</h2>
            <p className="mt-2 text-sm text-slate-600">
              Play the daily five-letter word challenge.
            </p>
          </a>

          <a
            href="/word-finder"
            className="rounded-2xl border border-violet-100 bg-white p-6 hover:bg-violet-50"
          >
            <h2 className="text-xl font-semibold">Word Finder</h2>
            <p className="mt-2 text-sm text-slate-600">
              Find words from the letters you have.
            </p>
          </a>
        </section>
      </section>
    </main>
  );
}
