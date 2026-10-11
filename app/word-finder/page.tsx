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

function readSearchValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] || "" : value || "";
}

export default async function WordFinderPage({ searchParams }: WordFinderPageProps) {
  const params = await searchParams;

  return (
    <WordFinderClient
      initialFields={{
        letters: readSearchValue(params.letters),
        starts: readSearchValue(params.starts),
        ends: readSearchValue(params.ends),
        contains: readSearchValue(params.contains),
        length: readSearchValue(params.length),
      }}
    />
  );
}
