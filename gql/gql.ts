/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getHomePageData {\n  mainPage {\n    data {\n      id\n      attributes {\n        SEO {\n          Title\n          Description\n        }\n        Blocks {\n          __typename\n          ... on ComponentLayoutHeroSection {\n            id\n            __typename\n            Heading\n            CTA {\n              id\n              Title\n              URL\n              isExternal\n            }\n            Image {\n              data {\n                id\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          __typename\n          ... on ComponentLayoutContent {\n            __typename\n            id\n            Heading\n            Subheading\n            Content\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getHomePageSEOData {\n  mainPage {\n    data {\n      attributes {\n        SEO {\n          Title\n          Description\n        }\n      }\n    }\n  }\n}": types.GetHomePageDataDocument,
    "query getModificationPageData {\n  modificationPage {\n    data {\n      id\n      attributes {\n        Heading\n        Subheading\n        Blocks {\n          __typename\n          ... on ComponentLayoutPricingCard {\n            id\n            Title\n            Pricing {\n              id\n              Title\n              Perks\n              Price {\n                id\n                Price\n                Prefix\n                PrefixText\n                Text\n              }\n            }\n          }\n        }\n        PageFooter {\n          text\n        }\n      }\n    }\n  }\n}\n\nquery getModificationPageSEOData {\n  modificationPage {\n    data {\n      attributes {\n        SEO {\n          Title\n          Description\n        }\n      }\n    }\n  }\n}": types.GetModificationPageDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getHomePageData {\n  mainPage {\n    data {\n      id\n      attributes {\n        SEO {\n          Title\n          Description\n        }\n        Blocks {\n          __typename\n          ... on ComponentLayoutHeroSection {\n            id\n            __typename\n            Heading\n            CTA {\n              id\n              Title\n              URL\n              isExternal\n            }\n            Image {\n              data {\n                id\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          __typename\n          ... on ComponentLayoutContent {\n            __typename\n            id\n            Heading\n            Subheading\n            Content\n          }\n        }\n      }\n    }\n  }\n}\n\nquery getHomePageSEOData {\n  mainPage {\n    data {\n      attributes {\n        SEO {\n          Title\n          Description\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetHomePageDataDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getModificationPageData {\n  modificationPage {\n    data {\n      id\n      attributes {\n        Heading\n        Subheading\n        Blocks {\n          __typename\n          ... on ComponentLayoutPricingCard {\n            id\n            Title\n            Pricing {\n              id\n              Title\n              Perks\n              Price {\n                id\n                Price\n                Prefix\n                PrefixText\n                Text\n              }\n            }\n          }\n        }\n        PageFooter {\n          text\n        }\n      }\n    }\n  }\n}\n\nquery getModificationPageSEOData {\n  modificationPage {\n    data {\n      attributes {\n        SEO {\n          Title\n          Description\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetModificationPageDataDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
