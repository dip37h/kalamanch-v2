/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kalamanch-v2',
  assetPrefix: '/kalamanch-v2/',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig