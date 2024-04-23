/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
		typedRoutes: true,
		mdxRs: true,
	  },
    compress: true,
    optimizeFonts: true,
    images: {
      domains: [`dynamic-media-cdn.tripadvisor.com`, `media.graphassets.com`],
      formats: ["image/avif", "image/webp"],
    },
  }
  
  module.exports = nextConfig
  