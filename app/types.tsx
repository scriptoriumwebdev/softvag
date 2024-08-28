import {
  ComponentLayoutContent,
  ComponentLayoutHeroSection,
} from "@/gql/graphql";

export interface SEO {
  Title: string;
  Description: string;
}

export interface ImageDataAttributes {
  url: string;
}

export interface ImageData {
  id?: string | null;
  attributes?: ImageDataAttributes | null;
}

export interface ImageType {
  data: ImageData[];
}

export interface CTA {
  Title?: string | null;
  URL?: string | null;
  isExternal?: boolean | null;
}

export interface ErrorComponent {
  __typename: "Error";
}

export type Block =
  | ComponentLayoutContent
  | ComponentLayoutHeroSection
  | ErrorComponent
  | null;

export interface Attributes {
  SEO?: SEO | null;
  Blocks?: Block[] | null;
}

export interface Data {
  id?: string | null;
  attributes?: Attributes | null;
}

export type RootElement = {
  data: Data;
};
