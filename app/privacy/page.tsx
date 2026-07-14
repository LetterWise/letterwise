export const metadata = {
  title: "Privacy Policy | LetterWise",
  description:
    "Learn how LetterWise uses browser storage, privacy-friendly analytics, hosting services, and future advertising technologies.",
};

const lastUpdated = "July 14, 2026";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700">
          Privacy Policy
        </p>

        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm font-semibold text-slate-500">
          Last updated: {lastUpdated}
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          LetterWise is designed to work without an account. This policy
          explains what information is stored in your browser, which services
          help operate the site, and how advertising will be handled if it is
          introduced.
        </p>

        <div className="mt-10 space-y-10 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Information you provide
            </h2>
            <p className="mt-3 leading-7">
              You do not need to create an account or provide a name, email
              address, or other personal details to use LetterWise tools. The
              site does not currently operate a contact form. If you choose to
              email LetterWise, the information in your message is handled by
              the email services used by you and LetterWise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Browser storage
            </h2>
            <p className="mt-3 leading-7">
              The Daily Word Puzzle saves game progress and statistics in your
              browser using local storage. This may include games played, win
              rate, streaks, completed puzzle IDs, and the current puzzle state.
              The information stays on your device and is used to preserve your
              puzzle experience between visits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Privacy-friendly analytics
            </h2>
            <p className="mt-3 leading-7">
              LetterWise uses Vercel Web Analytics to understand aggregated
              information such as page views, referring sites, approximate
              location, browser, operating system, and device type. Vercel Web
              Analytics does not use cookies and is designed not to identify or
              track visitors across different websites or days.
            </p>
            <p className="mt-3 leading-7">
              Learn more in Vercel&apos;s{" "}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                Web Analytics privacy documentation
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Hosting and security
            </h2>
            <p className="mt-3 leading-7">
              LetterWise is hosted by Vercel. Like other hosting providers,
              Vercel may process technical request information needed to
              deliver, protect, and diagnose the site. Vercel handles that
              information under its own privacy and security practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Advertising and cookies
            </h2>
            <p className="mt-3 leading-7">
              LetterWise does not currently display third-party advertising. If
              Google AdSense is enabled, Google and its advertising partners may
              use cookies, web beacons, IP addresses, or similar technologies to
              deliver, measure, and personalize ads. Required consent controls
              will be enabled before personalized advertising is served in
              regions where consent is required.
            </p>
            <p className="mt-3 leading-7">
              You can read more about{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                how Google uses information from partner sites
              </a>
              . This policy will be updated when advertising is activated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Your choices
            </h2>
            <p className="mt-3 leading-7">
              You can remove saved puzzle data by clearing your browser&apos;s
              site data for LetterWise. If advertising is introduced, available
              privacy and consent controls will be presented where required.
              You can also control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Policy changes and contact
            </h2>
            <p className="mt-3 leading-7">
              This policy may change as LetterWise adds or changes features. The
              updated date at the top of this page will show when it was last
              revised. For privacy questions, please use the{" "}
              <a
                href="/contact"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                contact page
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
