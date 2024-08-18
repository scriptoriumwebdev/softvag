/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
		mdxRs: true,
	  },
    compress: true,
    optimizeFonts: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "dynamic-media-cdn.tripadvisor.com", 
        },
        {
          protocol: "https",
          hostname: "media.graphassets.com", 
        },
        {
          protocol: "http",
          hostname: "localhost",
        },
      ],
      formats: ["image/avif", "image/webp"],
    },
  }
  const withMDX = require("@next/mdx")();

  module.exports = withMDX(nextConfig);

  