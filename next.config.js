/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfoliots',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfoliots' : '', // Conditional assetPrefix
};

module.exports = nextConfig;