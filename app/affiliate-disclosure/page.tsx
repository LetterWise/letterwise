import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Learn how LetterWise identifies affiliate links, protects editorial independence, and may earn commissions from qualifying purchases.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
};

const lastUpdated = "October 11, 2026";

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700">
          Transparency
        </p>

        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Affiliate Disclosure
        </h1>

        <p className="mt-4 text-sm font-semibold text-slate-500">
          Last updated: {lastUpdated}
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          LetterWise uses clearly disclosed affiliate links in selected resource
          guides and other helpful content. This page explains what those links
          mean and how commercial
          relationships are kept separate from editorial recommendations.
        </p>

        <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-slate-950">
            What an affiliate link means
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            An affiliate link may let a retailer or service know that a visitor
            came from LetterWise. A qualifying purchase or signup may then earn
            LetterWise a commission. This does not add a fee to the
            visitor&apos;s purchase.
          </p>
        </div>

        <div className="mt-10 space-y-10 text-slate-700">
          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Current affiliate relationships
            </h2>
            <p className="mt-3 leading-7">
              LetterWise participates in Paperpal&apos;s affiliate program, which is
              administered through Trackdesk. If you follow a clearly marked
              Paperpal affiliate link and make an eligible purchase, LetterWise
              may earn a commission at no additional cost to you.
            </p>
            <p className="mt-3 leading-7">
              A Paperpal guide may also display the reader code{" "}
              <strong className="font-black text-slate-950">PAP20</strong>. The
              code currently offers a discount on eligible plans, but discounts,
              eligibility, and plan terms can change. Confirm the final price at
              checkout before purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              How affiliate links will be identified
            </h2>
            <p className="mt-3 leading-7">
              A guide containing commission-earning links will include a clear
              disclosure before or near its first affiliate recommendation.
              Individual paid links will also be marked in their link data for
              search engines and other automated systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Editorial independence
            </h2>
            <p className="mt-3 leading-7">
              Payment does not guarantee coverage, a favorable review, or a higher
              position in a comparison. Resource guides are organized around
              relevance, practical usefulness, important tradeoffs, and the needs
              of LetterWise visitors. When direct testing has not taken place, the
              guide will not claim otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Prices, terms, and purchase decisions
            </h2>
            <p className="mt-3 leading-7">
              Prices, availability, trial terms, and product features can change.
              Visitors should confirm current details on the seller&apos;s website
              before making a purchase. LetterWise does not process affiliate
              purchases, payments, returns, or subscriptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              External sites and privacy
            </h2>
            <p className="mt-3 leading-7">
              Affiliate retailers and networks operate under their own terms and
              privacy practices. They may use referral identifiers, cookies, or
              similar technology to attribute a purchase or signup. Learn more in
              the LetterWise{" "}
              <Link
                href="/privacy"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                Terms of Use
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-950">
              Questions or corrections
            </h2>
            <p className="mt-3 leading-7">
              If an affiliate relationship appears unclear or a resource guide
              needs a correction, please use the{" "}
              <Link
                href="/contact"
                className="font-bold text-violet-700 underline decoration-violet-300 underline-offset-4 hover:text-violet-900"
              >
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
