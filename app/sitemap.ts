import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://softvag.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://softvag.com/kontakt",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
