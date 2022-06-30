/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    shopifyAccessToken: "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",
  },
  images: {
    domains: ["cdn.shopify.com", "images.unsplash.com"],
  },
}

module.exports = nextConfig
