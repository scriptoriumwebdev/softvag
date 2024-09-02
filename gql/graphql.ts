/* eslint-disable */
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
import { BlocksContent } from "@strapi/blocks-react-renderer";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AboutBlocksDynamicZoneInput: { input: unknown; output: unknown };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown };
  FaqPageBlocksDynamicZoneInput: { input: unknown; output: unknown };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown };
  MainPageBlocksDynamicZoneInput: { input: unknown; output: unknown };
  ModificationPageBlocksDynamicZoneInput: { input: unknown; output: unknown };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: unknown; output: unknown };
};

export type About = {
  Blocks?: Maybe<Array<Maybe<AboutBlocksDynamicZone>>>;
  SEO?: Maybe<ComponentSeoSeo>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AboutBlocksDynamicZone = ComponentLayoutContent | Error;

export type AboutEntity = {
  attributes?: Maybe<About>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type AboutEntityResponse = {
  data?: Maybe<AboutEntity>;
};

export type AboutInput = {
  Blocks?: InputMaybe<Array<Scalars["AboutBlocksDynamicZoneInput"]["input"]>>;
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Announcement = {
  Text?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AnnouncementEntity = {
  attributes?: Maybe<Announcement>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type AnnouncementEntityResponse = {
  data?: Maybe<AnnouncementEntity>;
};

export type AnnouncementInput = {
  Text?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Blog = {
  Content?: Maybe<Scalars["JSON"]["output"]>;
  Teaser: Scalars["String"]["output"];
  Title?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type BlogEntity = {
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type BlogEntityResponse = {
  data?: Maybe<BlogEntity>;
};

export type BlogEntityResponseCollection = {
  data: Array<BlogEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogFiltersInput = {
  Content?: InputMaybe<JsonFilterInput>;
  Teaser?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  Content?: InputMaybe<Scalars["JSON"]["input"]>;
  Teaser?: InputMaybe<Scalars["String"]["input"]>;
  Title?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]["input"]>;
  containsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  eqi?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  ne?: InputMaybe<Scalars["Boolean"]["input"]>;
  nei?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ComponentComponentButton = {
  Title?: Maybe<Scalars["String"]["output"]>;
  URL?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isExternal?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ComponentComponentCta = {
  Title?: Maybe<Scalars["String"]["output"]>;
  URL?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isExternal?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ComponentLayoutContent = {
  Content?: Maybe<Scalars["JSON"]["output"]>;
  Heading?: Maybe<Scalars["String"]["output"]>;
  Subheading?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type ComponentLayoutHeroSection = {
  CTA?: Maybe<ComponentComponentButton>;
  Heading?: Maybe<Scalars["String"]["output"]>;
  Image?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars["ID"]["output"];
};

export type ComponentLayoutHeroSectionImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentLayoutPageFooter = {
  id: Scalars["ID"]["output"];
  text?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentLayoutPageFooterInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentLayoutPricingCard = {
  __typename: string;
  Pricing?: Maybe<Array<Maybe<ComponentLayoutPricingPerks>>>;
  Title?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type ComponentLayoutPricingCardPricingArgs = {
  filters?: InputMaybe<ComponentLayoutPricingPerksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentLayoutPricingPerks = {
  Perks?: BlocksContent;
  Price?: Maybe<ComponentLayoutPricingPrice>;
  Title?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type ComponentLayoutPricingPerksFiltersInput = {
  Perks?: InputMaybe<JsonFilterInput>;
  Price?: InputMaybe<ComponentLayoutPricingPriceFiltersInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentLayoutPricingPerksFiltersInput>>>;
  not?: InputMaybe<ComponentLayoutPricingPerksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLayoutPricingPerksFiltersInput>>>;
};

export type ComponentLayoutPricingPrice = {
  Prefix?: Maybe<Scalars["String"]["output"]>;
  PrefixText?: Maybe<Scalars["String"]["output"]>;
  Price?: Maybe<Scalars["Int"]["output"]>;
  Text?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type ComponentLayoutPricingPriceFiltersInput = {
  Prefix?: InputMaybe<StringFilterInput>;
  PrefixText?: InputMaybe<StringFilterInput>;
  Price?: InputMaybe<IntFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentLayoutPricingPriceFiltersInput>>>;
  not?: InputMaybe<ComponentLayoutPricingPriceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLayoutPricingPriceFiltersInput>>>;
};

export type ComponentSeoSeo = {
  Description: Scalars["String"]["output"];
  Title: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
};

export type ComponentSeoSeoFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
  not?: InputMaybe<ComponentSeoSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
};

export type ComponentSeoSeoInput = {
  Description?: InputMaybe<Scalars["String"]["input"]>;
  Title?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]["input"]>;
  containsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  eqi?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  ne?: InputMaybe<Scalars["DateTime"]["input"]>;
  nei?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]["input"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Enum_Translatebatchtranslatejob_Status =
  | "cancelled"
  | "created"
  | "failed"
  | "finished"
  | "paused"
  | "running"
  | "setup";

export type Error = {
  code: Scalars["String"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
};

export type Faq = {
  Answer?: Maybe<Scalars["String"]["output"]>;
  Question?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type FaqEntity = {
  attributes?: Maybe<Faq>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type FaqEntityResponse = {
  data?: Maybe<FaqEntity>;
};

export type FaqEntityResponseCollection = {
  data: Array<FaqEntity>;
  meta: ResponseCollectionMeta;
};

export type FaqFiltersInput = {
  Answer?: InputMaybe<StringFilterInput>;
  Question?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FaqInput = {
  Answer?: InputMaybe<Scalars["String"]["input"]>;
  Question?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type FaqPage = {
  Blocks?: Maybe<Array<Maybe<FaqPageBlocksDynamicZone>>>;
  SEO?: Maybe<Array<Maybe<ComponentSeoSeo>>>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  faq?: Maybe<FaqEntityResponse>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type FaqPageSeoArgs = {
  filters?: InputMaybe<ComponentSeoSeoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type FaqPageBlocksDynamicZone = ComponentLayoutContent | Error;

export type FaqPageEntity = {
  attributes?: Maybe<FaqPage>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type FaqPageEntityResponse = {
  data?: Maybe<FaqPageEntity>;
};

export type FaqPageInput = {
  Blocks?: InputMaybe<Array<Scalars["FaqPageBlocksDynamicZoneInput"]["input"]>>;
  SEO?: InputMaybe<Array<InputMaybe<ComponentSeoSeoInput>>>;
  faq?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>;
  caption?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  contains?: InputMaybe<Scalars["Float"]["input"]>;
  containsi?: InputMaybe<Scalars["Float"]["input"]>;
  endsWith?: InputMaybe<Scalars["Float"]["input"]>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  eqi?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  ne?: InputMaybe<Scalars["Float"]["input"]>;
  nei?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Float"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]["input"]>;
};

export type GenericMorph =
  | About
  | Announcement
  | Blog
  | ComponentComponentButton
  | ComponentComponentCta
  | ComponentLayoutContent
  | ComponentLayoutHeroSection
  | ComponentLayoutPageFooter
  | ComponentLayoutPricingCard
  | ComponentLayoutPricingPerks
  | ComponentLayoutPricingPrice
  | ComponentSeoSeo
  | Faq
  | FaqPage
  | I18NLocale
  | MainPage
  | ModificationPage
  | TranslateBatchTranslateJob
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type I18NLocale = {
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type I18NLocaleEntity = {
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type I18NLocaleEntityResponse = {
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  contains?: InputMaybe<Scalars["ID"]["input"]>;
  containsi?: InputMaybe<Scalars["ID"]["input"]>;
  endsWith?: InputMaybe<Scalars["ID"]["input"]>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  eqi?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  gte?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  lte?: InputMaybe<Scalars["ID"]["input"]>;
  ne?: InputMaybe<Scalars["ID"]["input"]>;
  nei?: InputMaybe<Scalars["ID"]["input"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]["input"]>;
  notContainsi?: InputMaybe<Scalars["ID"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]["input"]>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  contains?: InputMaybe<Scalars["Int"]["input"]>;
  containsi?: InputMaybe<Scalars["Int"]["input"]>;
  endsWith?: InputMaybe<Scalars["Int"]["input"]>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  eqi?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  ne?: InputMaybe<Scalars["Int"]["input"]>;
  nei?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Int"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]["input"]>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  contains?: InputMaybe<Scalars["JSON"]["input"]>;
  containsi?: InputMaybe<Scalars["JSON"]["input"]>;
  endsWith?: InputMaybe<Scalars["JSON"]["input"]>;
  eq?: InputMaybe<Scalars["JSON"]["input"]>;
  eqi?: InputMaybe<Scalars["JSON"]["input"]>;
  gt?: InputMaybe<Scalars["JSON"]["input"]>;
  gte?: InputMaybe<Scalars["JSON"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  lt?: InputMaybe<Scalars["JSON"]["input"]>;
  lte?: InputMaybe<Scalars["JSON"]["input"]>;
  ne?: InputMaybe<Scalars["JSON"]["input"]>;
  nei?: InputMaybe<Scalars["JSON"]["input"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]["input"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type MainPage = {
  Blocks?: Maybe<Array<Maybe<MainPageBlocksDynamicZone>>>;
  SEO?: Maybe<ComponentSeoSeo>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type MainPageBlocksDynamicZone =
  | ComponentLayoutContent
  | ComponentLayoutHeroSection
  | Error;

export type MainPageEntity = {
  attributes?: Maybe<MainPage>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type MainPageEntityResponse = {
  data?: Maybe<MainPageEntity>;
};

export type MainPageInput = {
  Blocks?: InputMaybe<
    Array<Scalars["MainPageBlocksDynamicZoneInput"]["input"]>
  >;
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ModificationPage = {
  Blocks?: Maybe<Array<Maybe<ModificationPageBlocksDynamicZone>>>;
  Heading?: Maybe<Scalars["String"]["output"]>;
  PageFooter?: Maybe<ComponentLayoutPageFooter>;
  SEO?: Maybe<ComponentSeoSeo>;
  Subheading?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ModificationPageBlocksDynamicZone =
  | ComponentLayoutPricingCard
  | Error;

export type ModificationPageEntity = {
  attributes?: Maybe<ModificationPage>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type ModificationPageEntityResponse = {
  data?: Maybe<ModificationPageEntity>;
};

export type ModificationPageInput = {
  Blocks?: InputMaybe<
    Array<Scalars["ModificationPageBlocksDynamicZoneInput"]["input"]>
  >;
  Heading?: InputMaybe<Scalars["String"]["input"]>;
  PageFooter?: InputMaybe<ComponentLayoutPageFooterInput>;
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  Subheading?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBlog?: Maybe<BlogEntityResponse>;
  createFaq?: Maybe<FaqEntityResponse>;
  createTranslateBatchTranslateJob?: Maybe<TranslateBatchTranslateJobEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteAnnouncement?: Maybe<AnnouncementEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteFaq?: Maybe<FaqEntityResponse>;
  deleteFaqPage?: Maybe<FaqPageEntityResponse>;
  deleteMainPage?: Maybe<MainPageEntityResponse>;
  deleteModificationPage?: Maybe<ModificationPageEntityResponse>;
  deleteTranslateBatchTranslateJob?: Maybe<TranslateBatchTranslateJobEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateAnnouncement?: Maybe<AnnouncementEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateFaq?: Maybe<FaqEntityResponse>;
  updateFaqPage?: Maybe<FaqPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateMainPage?: Maybe<MainPageEntityResponse>;
  updateModificationPage?: Maybe<ModificationPageEntityResponse>;
  updateTranslateBatchTranslateJob?: Maybe<TranslateBatchTranslateJobEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type MutationCreateBlogArgs = {
  data: BlogInput;
};

export type MutationCreateFaqArgs = {
  data: FaqInput;
};

export type MutationCreateTranslateBatchTranslateJobArgs = {
  data: TranslateBatchTranslateJobInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteBlogArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteFaqArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteTranslateBatchTranslateJobArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]["input"]>;
  files: Array<InputMaybe<Scalars["Upload"]["input"]>>;
  ref?: InputMaybe<Scalars["String"]["input"]>;
  refId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type MutationUpdateAboutArgs = {
  data: AboutInput;
};

export type MutationUpdateAnnouncementArgs = {
  data: AnnouncementInput;
};

export type MutationUpdateBlogArgs = {
  data: BlogInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateFaqArgs = {
  data: FaqInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateFaqPageArgs = {
  data: FaqPageInput;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"]["input"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateMainPageArgs = {
  data: MainPageInput;
};

export type MutationUpdateModificationPageArgs = {
  data: ModificationPageInput;
};

export type MutationUpdateTranslateBatchTranslateJobArgs = {
  data: TranslateBatchTranslateJobInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"]["input"];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]["input"]>;
  file: Scalars["Upload"]["input"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]["input"]>;
  refId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Pagination = {
  page: Scalars["Int"]["output"];
  pageCount: Scalars["Int"]["output"];
  pageSize: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  start?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PublicationState = "LIVE" | "PREVIEW";

export type Query = {
  about?: Maybe<AboutEntityResponse>;
  announcement?: Maybe<AnnouncementEntityResponse>;
  blog?: Maybe<BlogEntityResponse>;
  blogs?: Maybe<BlogEntityResponseCollection>;
  faq?: Maybe<FaqEntityResponse>;
  faqPage?: Maybe<FaqPageEntityResponse>;
  faqs?: Maybe<FaqEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  mainPage?: Maybe<MainPageEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  modificationPage?: Maybe<ModificationPageEntityResponse>;
  translateBatchTranslateJob?: Maybe<TranslateBatchTranslateJobEntityResponse>;
  translateBatchTranslateJobs?: Maybe<TranslateBatchTranslateJobEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryAboutArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryAnnouncementArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryBlogArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryFaqArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryFaqPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryMainPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryModificationPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryTranslateBatchTranslateJobArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryTranslateBatchTranslateJobsArgs = {
  filters?: InputMaybe<TranslateBatchTranslateJobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ResponseCollectionMeta = {
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  containsi?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  eqi?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nei?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
  notContainsi?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type TranslateBatchTranslateJob = {
  autoPublish?: Maybe<Scalars["Boolean"]["output"]>;
  contentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  entityIds?: Maybe<Scalars["JSON"]["output"]>;
  failureReason?: Maybe<Scalars["JSON"]["output"]>;
  progress?: Maybe<Scalars["Float"]["output"]>;
  sourceLocale?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Enum_Translatebatchtranslatejob_Status>;
  targetLocale?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TranslateBatchTranslateJobEntity = {
  attributes?: Maybe<TranslateBatchTranslateJob>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type TranslateBatchTranslateJobEntityResponse = {
  data?: Maybe<TranslateBatchTranslateJobEntity>;
};

export type TranslateBatchTranslateJobEntityResponseCollection = {
  data: Array<TranslateBatchTranslateJobEntity>;
  meta: ResponseCollectionMeta;
};

export type TranslateBatchTranslateJobFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TranslateBatchTranslateJobFiltersInput>>>;
  autoPublish?: InputMaybe<BooleanFilterInput>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  entityIds?: InputMaybe<JsonFilterInput>;
  failureReason?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TranslateBatchTranslateJobFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TranslateBatchTranslateJobFiltersInput>>>;
  progress?: InputMaybe<FloatFilterInput>;
  sourceLocale?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  targetLocale?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TranslateBatchTranslateJobInput = {
  autoPublish?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType?: InputMaybe<Scalars["String"]["input"]>;
  entityIds?: InputMaybe<Scalars["JSON"]["input"]>;
  failureReason?: InputMaybe<Scalars["JSON"]["input"]>;
  progress?: InputMaybe<Scalars["Float"]["input"]>;
  sourceLocale?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Enum_Translatebatchtranslatejob_Status>;
  targetLocale?: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadFile = {
  alternativeText?: Maybe<Scalars["String"]["output"]>;
  caption?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  ext?: Maybe<Scalars["String"]["output"]>;
  formats?: Maybe<Scalars["JSON"]["output"]>;
  hash: Scalars["String"]["output"];
  height?: Maybe<Scalars["Int"]["output"]>;
  mime: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  previewUrl?: Maybe<Scalars["String"]["output"]>;
  provider: Scalars["String"]["output"];
  provider_metadata?: Maybe<Scalars["JSON"]["output"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  url: Scalars["String"]["output"];
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type UploadFileEntity = {
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type UploadFileEntityResponse = {
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>;
  caption?: InputMaybe<Scalars["String"]["input"]>;
  ext?: InputMaybe<Scalars["String"]["input"]>;
  folder?: InputMaybe<Scalars["ID"]["input"]>;
  folderPath?: InputMaybe<Scalars["String"]["input"]>;
  formats?: InputMaybe<Scalars["JSON"]["input"]>;
  hash?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  mime?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  previewUrl?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars["String"]["output"];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars["String"]["output"];
  pathId: Scalars["Int"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type UploadFolderEntityResponse = {
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  parent?: InputMaybe<Scalars["ID"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  pathId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsDeleteRolePayload = {
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  provider?: Scalars["String"]["input"];
};

export type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars["String"]["output"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"]["output"];
};

export type UsersPermissionsMeRole = {
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type UsersPermissionsPasswordPayload = {
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsPermission = {
  action: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type UsersPermissionsRoleEntityResponse = {
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsUser = {
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  email: Scalars["String"]["output"];
  provider?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  username: Scalars["String"]["output"];
};

export type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]["input"]>;
  confirmationToken?: InputMaybe<Scalars["String"]["input"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
};

export type GetHomePageDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomePageDataQuery = {
  mainPage?: {
    data?: {
      id?: string | null;
      attributes?: {
        SEO?: { Title: string; Description: string } | null;
        Blocks?: Array<
          | {
              __typename: "ComponentLayoutContent";
              id: string;
              Heading?: string | null;
              Subheading?: string | null;
              Content?: BlocksContent | null;
            }
          | {
              __typename: "ComponentLayoutHeroSection";
              id: string;
              Heading?: string | null;
              CTA?: {
                id: string;
                Title?: string | null;
                URL?: string | null;
                isExternal?: boolean | null;
              } | null;
              Image?: {
                data: Array<{
                  id?: string | null;
                  attributes?: { url: string } | null;
                }>;
              } | null;
            }
          | { __typename: "Error" }
          | null
        > | null;
      } | null;
    } | null;
  } | null;
};

export type GetHomePageSeoDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomePageSeoDataQuery = {
  mainPage?: {
    data?: {
      attributes?: {
        SEO?: { Title: string; Description: string } | null;
      } | null;
    } | null;
  } | null;
};

export type GetModificationPageDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetModificationPageDataQuery = {
  modificationPage?: {
    data?: {
      id?: string | null;
      attributes?: {
        Heading?: string | null;
        Subheading?: string | null;
        Blocks?: Array<
          | {
              __typename: "ComponentLayoutPricingCard";
              id: string;
              Title?: string | null;
              Pricing?: Array<{
                id: string;
                Title?: string | null;
                Perks?: unknown | null;
                Price?: {
                  id: string;
                  Price?: number | null;
                  Prefix?: string | null;
                  PrefixText?: string | null;
                  Text?: string | null;
                } | null;
              } | null> | null;
            }
          | { __typename: "Error" }
          | null
        > | null;
        PageFooter?: { text?: string | null } | null;
      } | null;
    } | null;
  } | null;
};

export type GetModificationPageSeoDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetModificationPageSeoDataQuery = {
  modificationPage?: {
    data?: {
      attributes?: {
        SEO?: { Title: string; Description: string } | null;
      } | null;
    } | null;
  } | null;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetHomePageDataDocument = new TypedDocumentString(`
    query getHomePageData {
  mainPage {
    data {
      id
      attributes {
        SEO {
          Title
          Description
        }
        Blocks {
          __typename
          ... on ComponentLayoutHeroSection {
            id
            __typename
            Heading
            CTA {
              id
              Title
              URL
              isExternal
            }
            Image {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
          __typename
          ... on ComponentLayoutContent {
            __typename
            id
            Heading
            Subheading
            Content
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
  GetHomePageDataQuery,
  GetHomePageDataQueryVariables
>;
export const GetHomePageSeoDataDocument = new TypedDocumentString(`
    query getHomePageSEOData {
  mainPage {
    data {
      attributes {
        SEO {
          Title
          Description
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
  GetHomePageSeoDataQuery,
  GetHomePageSeoDataQueryVariables
>;
export const GetModificationPageDataDocument = new TypedDocumentString(`
    query getModificationPageData {
  modificationPage {
    data {
      id
      attributes {
        Heading
        Subheading
        Blocks {
          __typename
          ... on ComponentLayoutPricingCard {
            id
            Title
            Pricing {
              id
              Title
              Perks
              Price {
                id
                Price
                Prefix
                PrefixText
                Text
              }
            }
          }
        }
        PageFooter {
          text
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
  GetModificationPageDataQuery,
  GetModificationPageDataQueryVariables
>;
export const GetModificationPageSeoDataDocument = new TypedDocumentString(`
    query getModificationPageSEOData {
  modificationPage {
    data {
      attributes {
        SEO {
          Title
          Description
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
  GetModificationPageSeoDataQuery,
  GetModificationPageSeoDataQueryVariables
>;
