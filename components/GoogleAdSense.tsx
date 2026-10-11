import Script from "next/script";
import { adsenseEnabled, adsensePublisherId } from "@/lib/adsense";

export default function GoogleAdSense() {
  if (!adsenseEnabled || !adsensePublisherId) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePublisherId}`}
      strategy="afterInteractive"
      async
      crossOrigin="anonymous"
    />
  );
}
