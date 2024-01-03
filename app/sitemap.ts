import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.softvag.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.softvag.com/kontakt",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
