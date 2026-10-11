# Google AdSense setup

LetterWise is prepared for AdSense without publishing a placeholder publisher
ID or loading advertising code before consent and approval are ready.

## Application review

1. Create the AdSense account with the legal payee details.
2. Add `tryletterwise.com` in AdSense and choose meta-tag verification.
3. Copy the issued `ca-pub-...` value into the production environment as
   `GOOGLE_ADSENSE_PUBLISHER_ID`.
4. Keep `GOOGLE_ADSENSE_ENABLED=false` during review.
5. Deploy and confirm that the live homepage source contains:

   ```html
   <meta name="google-adsense-account" content="ca-pub-..." />
   ```

6. In AdSense, verify the site and request review.
7. Select and publish Google's certified consent-management message for the
   EEA, UK, and Switzerland. Prefer the version with consent, manage options,
   and do not consent.

## After approval

1. Confirm that the consent message and a way to revisit privacy choices are
   live.
2. Start with manual ad units on substantial informational or word-list pages.
3. Keep ads away from keyboards, forms, game controls, hint buttons, result
   controls, and completion overlays.
4. Do not use Auto ads on interactive routes initially. If Auto ads are tested
   later, exclude:

   - `/daily-word-puzzle`
   - `/anagram-rush`
   - `/letter-links`
   - `/word-finder`
   - `/unscramble-letters`
   - `/wordle-solver`

5. Set `GOOGLE_ADSENSE_ENABLED=true` and deploy to load Google's sitewide
   script.
6. Publish the exact `ads.txt` line supplied by AdSense at `/ads.txt`. Do not
   publish a guessed or placeholder line.

## Safety checks

- Never click LetterWise ads or ask anyone else to click them.
- Do not buy traffic from traffic exchanges, paid-to-click services, bots, or
  incentivized visitor programs.
- Keep advertising visually distinguishable from navigation and word results.
- Recheck the privacy policy whenever analytics, advertising vendors, or
  consent behavior changes.
