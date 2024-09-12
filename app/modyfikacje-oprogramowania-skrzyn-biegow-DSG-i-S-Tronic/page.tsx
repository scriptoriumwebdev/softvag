import { Fragment } from "react";
import { FaCheck, FaMinus } from "react-icons/fa";
import type { Metadata } from "next";
import Main from "../components/main";
import {
  formatCurrency,
  generateSEOData,
  replaceWithWhiteSpaces,
} from "../utils/utils";
import { ExecuteGraphql } from "@/api/graphQLApi";
import {
  ComponentLayoutPricingCard,
  ComponentLayoutPricingPerks,
  GetModificationPageDataDocument,
  GetModificationPageSeoDataDocument,
} from "@/gql/graphql";
import BlockRendererClient from "../components/BlockRendererClient";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Pricing {
  title: string;
  subtitle: string;
  pricing: PricingElement[];
  note: Note[];
}

export interface Note {
  id: string;
  text: string;
}

export interface PricingElement {
  id: string;
  pricingTitle: string;
  offers: Offer[];
}

export interface Offer {
  id: string;
  offerTitle?: string;
  offerFeatures: OfferFeature[];
  offerPrefix?: string;
  offerPrice: number;
  offerCurrency: string;
  offerPriceText?: string;
  offerAsterisk?: string;
  offerAsteriskText?: string;
}

export interface OfferFeature {
  id?: string;
  text?: string;
  title?: string;
}

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await ExecuteGraphql({
    query: GetModificationPageSeoDataDocument,
    variables: {},
  });
  if (
    !pageData ||
    !pageData.modificationPage ||
    !pageData.modificationPage.data
  )
    throw new Error();
  const generatedSEOData = generateSEOData(pageData.modificationPage.data);
  return {
    title: generatedSEOData?.Title,
    description: generatedSEOData?.Description,
    openGraph: {
      title: generatedSEOData?.Title,
      description: generatedSEOData?.Description,
    },
  };
}

export default async function Modification() {
  const data = await ExecuteGraphql({
    query: GetModificationPageDataDocument,
    variables: {},
  });

  if (!data || !data.modificationPage || !data.modificationPage.data)
    throw new Error();

  const heading = data.modificationPage.data.attributes?.Heading;
  const subheading = data.modificationPage.data.attributes?.Subheading;
  const pricingData = data.modificationPage.data.attributes?.Blocks;
  const footerData = data.modificationPage.data.attributes?.PageFooter;

  const offersWithAsterisk = pricingData
    ?.filter((i) => {
      const typedPricing = i as {
        __typename: "ComponentLayoutPricingCard";
      } & ComponentLayoutPricingCard;
      if (!typedPricing.Pricing) {
        return false;
      }
      return typedPricing.Pricing.some(
        (j) =>
          j?.Price?.PrefixText !== undefined && j?.Price?.PrefixText !== null
      );
    })
    .map((k) => {
      const typedPricing = k as {
        __typename: "ComponentLayoutPricingCard";
      } & ComponentLayoutPricingCard;
      return typedPricing.Pricing && typedPricing.Pricing[0]!;
    });

  return (
    <Main>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {replaceWithWhiteSpaces(heading as string)}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-center text-md leading-8 text-gray-600 dark:text-neutral-400">
            {replaceWithWhiteSpaces(subheading as string)}
          </p>
        </div>

        {pricingData?.map((pricing) => {
          const typedPricing = pricing as {
            __typename: "ComponentLayoutPricingCard";
          } & ComponentLayoutPricingCard;

          if (!typedPricing) throw new Error();

          return (
            <div
              key={typedPricing.id}
              className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-600 sm:mt-20 lg:mx-0 lg:max-w-none"
            >
              <div className="p-4 md:p-10 lg:flex-auto">
                <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-neutral-200">
                  {replaceWithWhiteSpaces(typedPricing.Title as string)}
                </h3>

                {typedPricing.Pricing?.filter(
                  (offer): offer is ComponentLayoutPricingPerks =>
                    offer !== null
                ).map((offer) => {
                  return (
                    <div
                      key={offer.id}
                      className="mx-auto lg:mx-0 md:grid md:grid-cols-2 gap-2 mb-4"
                    >
                      <div>
                        {offer.Title ? (
                          <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
                              {replaceWithWhiteSpaces(offer.Title as string)}
                            </h4>
                            <div className="h-px flex-auto bg-gray-100 dark:bg-gray-600" />
                          </div>
                        ) : null}
                        <div
                          role="list"
                          className="mt-8 text-sm leading-6 text-gray-600 dark:text-neutral-200 list-disc list-outside"
                        >
                          <BlockRendererClient
                            content={offer.Perks as BlocksContent}
                          />
                        </div>
                      </div>
                      <div className="pt-8 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex lg:justify-center">
                        <div className="text-center lg:flex lg:flex-col lg:justify-center lg:align-middle">
                          <div className="mx-auto max-w-xs px-8">
                            <p className="flex items-baseline justify-center  ">
                              <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100">
                                {offer.Price?.PrefixText ? (
                                  <sup>
                                    <a
                                      className=" text-indigo-600  dark:text-indigo-400 hover:opacity-75"
                                      href={`#${offer.Price?.Prefix}`}
                                    >
                                      {offer.Price?.Prefix}{" "}
                                    </a>
                                  </sup>
                                ) : (
                                  <span> {offer.Price?.Prefix} </span>
                                )}
                                {offer.Price?.Price} zł
                              </span>
                            </p>
                            {offer.Price?.Text ? (
                              <p className="mt-2 text-xs leading-5 text-gray-600 dark:text-neutral-400">
                                {offer.Price?.Text}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto max-w-7xl px-2 lg:px-16">
        {offersWithAsterisk?.map((offer, i) => {
          if (!offer) return null;
          return (
            <p key={i} className="mt-16 relative">
              <span
                className="absolute -top-24 left-0"
                id={offer?.Price?.Prefix || ""}
              ></span>
              <sup>{offer?.Price?.Prefix}</sup>{" "}
              {replaceWithWhiteSpaces(offer?.Price?.PrefixText as string)}
            </p>
          );
        }) || null}
        <div className="mt-16">
          <BlockRendererClient content={footerData?.text as BlocksContent} />
        </div>
      </div>
    </Main>
  );
}
