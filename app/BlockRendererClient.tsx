"use client";
import Image from "next/image";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

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
        image: ({ image }): any => {
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
            />
          );
        },
        paragraph: ({ children }) => (
          <p className="text-neutral-500 max-w-prose">{children}</p>
        ),

        link: ({ children, url }) => <Link href={url}>{children}</Link>,

        // .replace(/&nbsp;/g, " ")
      }}
    />
  );
}
