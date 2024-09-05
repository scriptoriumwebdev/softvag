import Image from "next/image";
import Link from "next/link";
import {
  ComponentComponentButton,
  ComponentLayoutHeroSection,
  Maybe,
} from "@/gql/graphql";
import { replaceWithWhiteSpaces } from "../utils/utils";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import CTA from "./ctaHeroLink";
interface HeroProps {
  heroData?: ComponentLayoutHeroSection;
}

export const Hero: React.FC<HeroProps> = ({ heroData }) => {
  if (!heroData) throw new Error();
  const image = heroData.Image?.data[0].attributes;

  return (
    <div className="relative -z-1 w-full  min-h-screen flex justify-items-center items-center">
      <span className="absolute  h-screen w-screen lg:w-full  bg-black">
        <Image
          fill
          src={image?.url as string}
          alt={image?.alternativeText as string}
          className="object-cover h-screen w-screen lg:w-full md:object-cover opacity-40"
        />
      </span>

      <div className="w-100 mx-4 relative md:mx-auto ">
        <div className="text-center">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.8)] dark:shadow-black/20 md:py-16 md:px-12">
            <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl whitespace-pre-line">
              {replaceWithWhiteSpaces(heroData.Heading!)}
            </h1>
            {heroData && heroData.CTA ? (
              <CTA {...heroData.CTA} />
            ) : (
              <p>No data</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
