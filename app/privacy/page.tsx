export const metadata = {
  alternates: {
    canonical: "/privacy",
  },
  title: "Privacy Policy",
  description:
    "Learn how LetterWise uses browser storage, analytics, hosting services, advertising technologies, and privacy controls.",
};

const lastUpdated = "October 11, 2026";

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
          help operate the site, and how advertising technologies and privacy
          choices are handled.
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
              LetterWise games save progress and statistics in your browser
              using local storage. Depending on the game, this may include
              guesses, games played, scores, streaks, completed puzzle IDs, and
              the current puzzle state. The information stays on your device and
              is used to preserve your puzzle experience between visits.
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
              LetterWise may use Google AdSense to display advertising. When
              advertising is active, third-party vendors, including Google, use
              cookies to serve ads based on a visitor&apos;s prior visits to
              LetterWise or other websites. Google&apos;s use of advertising
              cookies enables Google and its partners to serve, limit,
              personalize, and measure ads.
            </p>
            <p className="mt-3 leading-7">
              Advertising providers may also process information such as IP
              address, browser and device information, ad interactions, and
              approximate location. Learn more about{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                rel="noreferrer"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                how Google uses information from partner sites
              </a>
              .
            </p>
            <p className="mt-3 leading-7">
              Visitors can opt out of personalized advertising through{" "}
              <a
                href="https://adssettings.google.com/"
                rel="noreferrer"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                Google Ads Settings
              </a>
              . Where other third-party advertising vendors participate, you
              can learn about additional opt-out choices at{" "}
              <a
                href="https://www.aboutads.info/choices/"
                rel="noreferrer"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                YourAdChoices
              </a>
              . Browser settings can also be used to block or remove cookies,
              although doing so may affect some site features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Consent controls
            </h2>
            <p className="mt-3 leading-7">
              Before advertising that requires consent is activated, LetterWise
              will enable a consent message in regions where it is required by
              law. The message will let eligible visitors accept, reject, or
              manage available advertising choices and revisit those choices
              through the privacy controls made available on the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Affiliate links and referral tracking
            </h2>
            <p className="mt-3 leading-7">
              LetterWise may use clearly disclosed affiliate links to external
              products or services. When you follow one of these links, the
              merchant or affiliate network may process a referral identifier
              and use cookies or similar technology to attribute a later signup
              or purchase. LetterWise may receive reports about attributed
              clicks, purchases, and commissions, but does not receive or
              process the payment-card details you provide to the merchant.
            </p>
            <p className="mt-3 leading-7">
              Affiliate relationships and the way they are identified are
              explained in the{" "}
              <a
                href="/affiliate-disclosure"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                Affiliate Disclosure
              </a>
              . Each merchant and network handles information under its own
              privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Your choices
            </h2>
            <p className="mt-3 leading-7">
              You can remove saved puzzle data by clearing your browser&apos;s
              site data for LetterWise. You can also use browser controls to
              limit cookies and the advertising choices described above. These
              choices do not remove advertisements entirely, but they can limit
              the use of information for ad personalization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900">
              Children&apos;s privacy
            </h2>
            <p className="mt-3 leading-7">
              LetterWise is a general-audience word and puzzle site and does not
              knowingly ask children to submit personal information or create
              accounts. A parent or guardian who believes a child has sent
              personal information by email can contact LetterWise to request
              its deletion.
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
