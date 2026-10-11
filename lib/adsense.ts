const publisherId = process.env.GOOGLE_ADSENSE_PUBLISHER_ID?.trim();

export const adsensePublisherId =
  publisherId && /^ca-pub-\d{16}$/.test(publisherId) ? publisherId : null;

export const adsenseEnabled =
  Boolean(adsensePublisherId) &&
  process.env.GOOGLE_ADSENSE_ENABLED?.trim().toLowerCase() === "true";
