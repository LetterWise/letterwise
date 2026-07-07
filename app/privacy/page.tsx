export const metadata = {
  title: "Privacy Policy | LetterWise",
  description:
    "Read the LetterWise privacy policy and learn how the site handles basic browser storage and usage.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
          Privacy Policy
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Privacy Policy
        </h1>

        <div className="mt-8 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Information we collect
            </h2>
            <p className="mt-3 leading-7">
              LetterWise is designed to be simple and privacy-friendly. We do
              not ask users to create an account, and we do not ask for names,
              email addresses, or personal details to use the word tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Browser storage
            </h2>
            <p className="mt-3 leading-7">
              The Daily Word Puzzle may save basic game statistics in your own
              browser using local storage. This can include games played, win
              rate, current streak, best streak, and completed puzzle IDs.
            </p>
            <p className="mt-3 leading-7">
              This information is stored on your device. It is used to make the
              puzzle experience more useful and does not require an account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Analytics and third-party services
            </h2>
            <p className="mt-3 leading-7">
              LetterWise may use hosting and website services needed to run the
              site. If analytics are added in the future, this policy should be
              updated to explain what is collected and why.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Clearing your data
            </h2>
            <p className="mt-3 leading-7">
              You can clear locally saved puzzle stats by clearing your
              browser&apos;s site data for LetterWise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Contact
            </h2>
            <p className="mt-3 leading-7">
              If you have questions about this privacy policy, you can contact
              the site owner.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
