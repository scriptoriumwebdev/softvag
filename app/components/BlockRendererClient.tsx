"use client";
import Image from "next/image";
import { ReactNode } from "react";

interface Image {
  name: string;
  alternativeText?: string | null;
  url: string;
  caption?: string | null;
  width: number;
  height: number;
  formats?: Record<string, unknown>; // or a more specific type if you know the structure of `formats`
  hash: string;
  ext: string;
  mime: string;
  size: number;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

interface ReactElement<T = any> {
  $$typeof: symbol;
  type: Function;
  key: string | null;
  ref: any;
  props: BlockProps;
  _owner: any;
  _store: any;
  content: Content;
}

interface ListItem {
  text: string;
  type: string;
}

interface Content {
  type: string;
  children: ListItem[];
}

interface BlockProps {
  content: Content;
  text: string;
}

interface ChildContent {
  text: string;
}

interface Child {
  props: {
    content: {
      children: ChildContent[];
    };
  };
}

interface ListProps {
  format: string;
  children?: Child[];
}
interface TextInlineNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

interface LinkInlineNode {
  type: "link";
  url: string;
  children: TextInlineNode[];
}

type DefaultInlineNode = TextInlineNode | LinkInlineNode;

interface HeadingBlockNode {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: DefaultInlineNode[];
}

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { replaceWithWhiteSpaces } from "../utils";

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        heading: ({ children, level, plainText }): HeadingBlockNode | any => {
          switch (level) {
            case 1:
              if (Array.isArray(children) && children.length)
                return (
                  <h1>{replaceWithWhiteSpaces(children[0].props.text)}</h1>
                );
            case 2:
              if (Array.isArray(children) && children.length)
                return (
                  <h2>{replaceWithWhiteSpaces(children[0].props.text)}</h2>
                );
            case 3:
              if (Array.isArray(children) && children.length)
                return (
                  <h3>{replaceWithWhiteSpaces(children[0].props.text)}</h3>
                );
            case 4:
              if (Array.isArray(children) && children.length)
                return (
                  <h4>{replaceWithWhiteSpaces(children[0].props.text)}</h4>
                );
            case 5:
              if (Array.isArray(children) && children.length)
                return (
                  <h5>{replaceWithWhiteSpaces(children[0].props.text)}</h5>
                );
            case 6:
              if (Array.isArray(children) && children.length)
                return (
                  <h6>{replaceWithWhiteSpaces(children[0].props.text)}</h6>
                );
          }
        },
        image: ({ image }): Image | any => {
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
            />
          );
        },
        list: (props: ListProps | any) => {
          if (props.format === "ordered") {
            if (!props.children) return null;
            const updatedChildren: Child[] | any = props.children.map(
              (child: Child) => {
                const updatedNestedChildren = child.props.content.children.map(
                  (childNested) => {
                    return {
                      ...childNested,
                      text: replaceWithWhiteSpaces(childNested.text),
                    };
                  }
                );
                return {
                  ...child,
                  props: {
                    ...child.props,
                    content: {
                      ...child.props.content,
                      children: updatedNestedChildren,
                    },
                  },
                };
              }
            );

            return (
              <ol className="list-decimal list-inside	">{updatedChildren}</ol>
            );
          }
          const updatedChildren: Child[] | any = props.children.map(
            (child: Child) => {
              const updatedNestedChildren = child.props.content.children.map(
                (childNested) => {
                  return {
                    ...childNested,
                    text: replaceWithWhiteSpaces(childNested.text),
                  };
                }
              );
              return {
                ...child,
                props: {
                  ...child.props,
                  content: {
                    ...child.props.content,
                    children: updatedNestedChildren,
                  },
                },
              };
            }
          );

          return <ul className="list-disc list-inside	">{updatedChildren}</ul>;
        },
        paragraph: ({ children }: any) => {
          interface TextProps {
            text?: string;
          }

          const whiteSpaces = children?.map((data: ReactElement<TextProps>) => {
            if (
              data.props &&
              data.props.text &&
              typeof data.props.text === "string"
            ) {
              return {
                ...data,
                props: {
                  ...data.props,
                  text: replaceWithWhiteSpaces(data.props.text),
                },
              };
            } else {
              return data;
            }
          });
          return <p>{whiteSpaces}</p>;
        },

        link: ({ children, url }) => {
          if (Array.isArray(children) && children.length)
            return (
              <Link href={url} rel="noopener noreferrer" target="_blank">
                {replaceWithWhiteSpaces(children[0].props.text)}
              </Link>
            );
        },
      }}
    />
  );
}
