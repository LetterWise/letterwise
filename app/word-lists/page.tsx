const lengthLinks = [
  { href: "/3-letter-words", title: "3 Letter Words" },
  { href: "/4-letter-words", title: "4 Letter Words" },
  { href: "/5-letter-words", title: "5 Letter Words" },
  { href: "/6-letter-words", title: "6 Letter Words" },
  { href: "/7-letter-words", title: "7 Letter Words" },
];

const startingLinks = [
  { href: "/5-letter-words-starting-with-a", title: "Starting With A" },
  { href: "/5-letter-words-starting-with-b", title: "Starting With B" },
  { href: "/5-letter-words-starting-with-c", title: "Starting With C" },
  { href: "/5-letter-words-starting-with-d", title: "Starting With D" },
  { href: "/5-letter-words-starting-with-e", title: "Starting With E" },
  { href: "/5-letter-words-starting-with-s", title: "Starting With S" },
];

const endingLinks = [
  { href: "/5-letter-words-ending-in-ed", title: "Ending In ED" },
  { href: "/5-letter-words-ending-in-er", title: "Ending In ER" },
  { href: "/5-letter-words-ending-in-ly", title: "Ending In LY" },
  { href: "/5-letter-words-ending-in-ing", title: "Ending In ING" },
  { href: "/5-letter-words-ending-in-le", title: "Ending In LE" },
  { href: "/5-letter-words-ending-in-se", title: "Ending In SE" },
];

const containingLinks = [
  { href: "/5-letter-words-containing-a", title: "Containing A" },
  { href: "/5-letter-words-containing-e", title: "Containing E" },
  { href: "/5-letter-words-containing-i", title: "Containing I" },
  { href: "/5-letter-words-containing-o", title: "Containing O" },
  { href: "/5-letter-words-containing-u", title: "Containing U" },
  { href: "/5-letter-words-containing-st", title: "Containing ST" },
];

function LinkGrid({
  title,
  description,
  links,
}: {
  title: string;
  description: string;
  links: { href: string; title: string }[];
}) {
  return (
    <section className="mt-14">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-black">{title}</h2>
          <p className="mt-2 text-slate-600">{description}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-violet-100 bg-white px-5 py-4 text-lg font-black shadow-sm hover:border-violet-300 hover:bg-violet-50"
          >
            {link.title}
          </a>
        ))}
      </div>
    </section>
  );
}

export default function WordListsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="rounded-b-[2rem] bg-violet-600 px-6 pb-14 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-violet-50">
            Word Lists
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
            Word Lists
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-violet-50">
            Browse simple word lists by length, starting letters, ending letters,
            and letters contained in the word.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-5 shadow-xl shadow-violet-950/20">
            <form action="/word-finder">
              <div className="rounded-2xl border-2 border-slate-900 bg-white px-5 py-4 text-left">
                <label htmlFor="letters" className="sr-only">
                  Enter letters
                </label>
                <input
                  id="letters"
                  name="letters"
                  placeholder="Enter letters to find words"
                  className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none placeholder:text-slate-600"
                />
              </div>

              <button
                type="submit"
                className="mt-5 rounded-full bg-amber-300 px-12 py-4 text-lg font-black text-slate-950 hover:bg-amber-200"
              >
                Search Words
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-3 sm:grid-cols-5">
          <a href="/word-lists" className="rounded-xl bg-violet-600 px-5 py-4 text-center font-black text-white hover:bg-violet-700">
            Word Lists
          </a>
          <a href="/word-finder" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Word Finder
          </a>
          <a href="/unscramble-letters" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Unscrambler
          </a>
          <a href="/wordle-solver" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Wordle
          </a>
          <a href="/daily-word-puzzle" className="rounded-xl bg-violet-50 px-5 py-4 text-center font-black text-slate-800 hover:bg-violet-100">
            Daily Game
          </a>
        </div>

        <LinkGrid
          title="Words by Length"
          description="Start with the word length you need."
          links={lengthLinks}
        />

        <LinkGrid
          title="5 Letter Words Starting With"
          description="Find five-letter words by their first letter."
          links={startingLinks}
        />

        <LinkGrid
          title="5 Letter Words Ending In"
          description="Browse common endings for word games and puzzles."
          links={endingLinks}
        />

        <LinkGrid
          title="5 Letter Words Containing"
          description="Find words that include specific letters or letter pairs."
          links={containingLinks}
        />

        <section className="mx-auto mt-16 max-w-4xl text-lg leading-8 text-slate-700">
          <h2 className="text-3xl font-black text-slate-900">
            How to use LetterWise word lists
          </h2>

          <p className="mt-4">
            Choose a word length or pattern to browse possible words. These
            lists are useful for Wordle, spelling practice, classroom word work,
            vocabulary building, and puzzle solving.
          </p>
        </section>
      </section>
    </main>
  );
}
