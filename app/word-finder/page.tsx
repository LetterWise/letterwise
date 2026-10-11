import type { Metadata } from "next";
import WordFinderClient from "./WordFinderClient";

type WordFinderPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams,
}: WordFinderPageProps): Promise<Metadata> {
  const hasQueryParameters = Object.keys(await searchParams).length > 0;

  return {
    alternates: {
      canonical: "/word-finder",
    },
    robots: {
      index: !hasQueryParameters,
      follow: true,
    },
  };
}

export default function WordFinderPage() {
  return <WordFinderClient />;
}
