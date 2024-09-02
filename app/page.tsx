import Main from "./components/main";
import { Hero } from "./components/hero";
import Link from "next/link";
import { Metadata } from "next";
import { ExecuteGraphql } from "@/api/graphQLApi";
import {
  ComponentLayoutHeroSection,
  GetHomePageDataDocument,
  GetHomePageSeoDataDocument,
} from "@/gql/graphql";
import { generateSEOData } from "./utils";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "./components/BlockRendererClient";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await ExecuteGraphql({
    query: GetHomePageSeoDataDocument,
    variables: {},
  });
  if (!pageData || !pageData.mainPage || !pageData.mainPage.data)
    throw new Error();
  const generatedSEOData = generateSEOData(pageData.mainPage.data);
  return {
    title: generatedSEOData?.Title,
    description: generatedSEOData?.Description,
    openGraph: {
      title: generatedSEOData?.Title,
      description: generatedSEOData?.Description,
    },
  };
}

export default async function Home() {
  const data = await ExecuteGraphql({
    query: GetHomePageDataDocument,
    variables: {},
  });

  if (!data || !data.mainPage || !data.mainPage.data) throw new Error();

  const contentData = data.mainPage?.data?.attributes?.Blocks!.find(
    (obj) => obj?.__typename === "ComponentLayoutContent"
  )?.Content;

  if (!contentData) throw new Error();

  const content: BlocksContent = contentData;

  // @ts-expect-error

  const heroSectionData: ComponentLayoutHeroSection =
    data!.mainPage!.data!.attributes!.Blocks!.find(
      (obj) => obj?.__typename === "ComponentLayoutHeroSection"
    );

  return (
    <div className="relative">
      {heroSectionData ? <Hero heroData={heroSectionData} /> : <p>No data</p>}
      <Main>
        <div className="prose mx-auto prose-a:text-indigo-600 prose-a:text-base prose-a:font-semibold prose-a:leading-7   dark:prose-a:text-indigo-400 hover:prose-a:opacity-75 dark:prose-invert">
          <BlockRendererClient content={content as BlocksContent} />
        </div>
        <div className="mt-2 mb-16 flex">
          <Link
            href="/modyfikacje-oprogramowania-skrzyn-biegow-DSG-i-S-Tronic"
            className="text-base font-semibold leading-7 text-indigo-600  dark:text-indigo-400 hover:opacity-75 "
          >
            Sprawdź ofertę <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <iframe
          width="100%"
          height="100%"
          className="aspect-video relative"
          src="https://www.youtube-nocookie.com/embed/s27Ledd4JAA?si=iVO50PiArph4zaJb"
          title="DSG i S Tronic PROBLEM - niskie obroty + rozwiązanie - chiptuning"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Main>
    </div>
  );
}
